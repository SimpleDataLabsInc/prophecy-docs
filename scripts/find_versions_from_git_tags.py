import git
import argparse
import re
import os
from datetime import datetime
from dateutil.relativedelta import relativedelta
from packaging import version as packaging_version

versions = []

LTS_VERSIONS = [
    "v3.4.1.0","v4.1.1.0","v4.2.1.0"
]


def get_commit_date(repo, tag_name):
    try:
        tag = repo.tags[tag_name]
        return datetime.fromtimestamp(tag.commit.committed_date)
    except git.exc.GitCommandError:
        raise IOError(f"Error checking out tag '{tag_name}'.")


def get_versions_for_tag(repo, tag_name):
    deps_file_path = "project/Dependencies.scala"

    try:
        file_contents = repo.git.show(f"{tag_name}:{deps_file_path}")

        prophecy_libs_version_regex = r'prophecyLibsVersion\s*=\s*"([^"]+)"'
        scala_version = re.findall(prophecy_libs_version_regex, file_contents)
        if len(scala_version) != 1:
            #print("prophecyLibsVersion not found.")
            return  # ignore for now if we can't find missing old versions

        python_prophecy_libs_version_regex = r'pythonProphecyLibsVersion\s*=\s*"([^"]+)"'
        python_version = re.findall(python_prophecy_libs_version_regex, file_contents)
        if len(python_version) != 1:
            #print("pythonProphecyLibsVersion not found.")
            return  # ignore for now if we can't find missing old versions

        create_date = get_commit_date(repo, tag_name)
        if tag_name in LTS_VERSIONS:
            end_of_support_date = create_date + relativedelta(years=1)
            tag_name = tag_name + " EM"
        elif not tag_name.endswith(".0"):
            # for patch versions, set the same end date as associated minor version
            try:
                minor_create_date = get_commit_date(repo, re.sub(r'(\d+)\.(\d+)\.(\d+)\.(\d+)$', r'\1.\2.\3.0', tag_name))
                end_of_support_date = minor_create_date + relativedelta(months=6)
            except IOError:
                # If minor version tag doesn't exist, skip this version
                return
        else:
            end_of_support_date = create_date + relativedelta(months=6)
        ver_dict = {
            "prophecy_version": tag_name,
            "scala_version": scala_version[0],
            "python_version": python_version[0],
            "date": create_date.strftime('%Y/%m/%d'),
            "end_of_support_date": end_of_support_date.strftime('%Y/%m/%d')
        }
        versions.append(ver_dict)
    except FileNotFoundError:
        raise FileNotFoundError(f"File '{deps_file_path}' not found in this version.")
    except git.exc.GitCommandError:
        raise IOError(f"Error checking out tag '{tag_name}'.")


def parse_existing_row(row_line):
    """Parse a table row line into a version dictionary."""
    parts = [p.strip() for p in row_line.split("|")]
    if len(parts) < 6 or not parts[1] or parts[1].startswith("Prophecy"):
        return None
    return {
        "prophecy_version": parts[1],
        "scala_version": parts[2],
        "python_version": parts[3],
        "date": parts[4],
        "end_of_support_date": parts[5]
    }


def update_version_chart_file(docs_repo_path):
    version_chart_file = os.path.join(docs_repo_path, "snippets/releases/version-chart-snippet.mdx")

    # Read the entire file
    with open(version_chart_file, 'r') as file:
        lines = file.readlines()

    # Find the table header row (line with "Prophecy version | [Prophecy Scala libs]")
    header_end_index = None
    table_header_index = None
    delimiter_index = None

    for i, line in enumerate(lines):
        if "| Prophecy version |" in line and "[Prophecy Scala libs]" in line:
            table_header_index = i
        elif table_header_index is not None and "| ---------------- |" in line:
            delimiter_index = i
            header_end_index = i + 1
            break

    if table_header_index is None or delimiter_index is None:
        raise ValueError("Could not find table header in version chart file")

    # Extract header (everything before and including the table header and delimiter)
    header_lines = lines[:header_end_index]
    header = ''.join(header_lines)

    # Extract existing table rows (everything after the delimiter)
    existing_row_lines = lines[header_end_index:]

    # Parse existing rows into a dictionary keyed by prophecy_version
    existing_versions = {}
    for row_line in existing_row_lines:
        if row_line.strip() and row_line.strip().startswith("|"):
            parsed = parse_existing_row(row_line)
            if parsed:
                existing_versions[parsed["prophecy_version"]] = parsed

    # Update existing_versions with new versions (this will add new ones and update changed ones)
    for new_version in versions:
        prophecy_version = new_version["prophecy_version"]
        # Check if version exists and if any data has changed
        if prophecy_version not in existing_versions:
            existing_versions[prophecy_version] = new_version
            print(f"Adding new version: {prophecy_version}")
        else:
            existing = existing_versions[prophecy_version]
            # Check if any field has changed
            if (existing["scala_version"] != new_version["scala_version"] or
                existing["python_version"] != new_version["python_version"] or
                existing["date"] != new_version["date"] or
                existing["end_of_support_date"] != new_version["end_of_support_date"]):
                existing_versions[prophecy_version] = new_version
                print(f"Updating version: {prophecy_version}")
            else:
                print(f"Version {prophecy_version} unchanged, skipping")

    # Sort all versions by date (newest first) - parse date for sorting
    def sort_key(v):
        try:
            return datetime.strptime(v["date"], '%Y/%m/%d')
        except:
            return datetime.min

    sorted_versions = sorted(existing_versions.values(), key=sort_key, reverse=True)

    # Parse delimiter to get column widths
    delimiter = lines[delimiter_index]
    delimiter_parts = delimiter.split("|")

    # Create rows for all versions
    all_rows = ["| {} | {} | {} | {} | {} |\n".format(
        v['prophecy_version'].ljust(len(delimiter_parts[1].strip())),
        v['scala_version'].ljust(len(delimiter_parts[2].strip())),
        v['python_version'].ljust(len(delimiter_parts[3].strip())),
        v['date'].ljust(len(delimiter_parts[4].strip())),
        v['end_of_support_date'].ljust(len(delimiter_parts[5].strip()))
    ) for v in sorted_versions]

    # Combine: header (includes table header + delimiter) + all rows
    output_string = header + ''.join(all_rows)

    print("Writing the following to the file:")
    print(output_string[:500] + "..." if len(output_string) > 500 else output_string)

    with open(version_chart_file, 'w') as output_file:
        output_file.write(output_string)


def process_args(prophecy_repo_path, docs_repo_path, tag_name=None):
    repo = git.Repo(prophecy_repo_path)

    if tag_name:  # If a specific tag is provided
        get_versions_for_tag(repo, tag_name)
    else:  # If processing all tags
        sorted_tags = sorted(repo.tags, key=lambda t: t.commit.committed_datetime, reverse=True)
        for tag in sorted_tags:
            version_match = re.search(r'v\d+\.\d+\.\d+', tag.name)

            if version_match and packaging_version.parse(tag.name) >= packaging_version.parse("3.3.1.1"):
                get_versions_for_tag(repo, tag.name)

    update_version_chart_file(docs_repo_path)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Update version chart in documentation repository.")
    parser.add_argument("--prophecy-repo-path", default='./prophecy/', help="Path to the Prophecy Git repository")
    parser.add_argument("--docs-repo-path", default='./prophecy-docs/', help="Path to the documentation Git repository")
    parser.add_argument("--tag", help="Process a specific tag (if omitted we process all that match semver structure)")

    args = parser.parse_args()

    process_args(args.prophecy_repo_path, args.docs_repo_path, args.tag)
