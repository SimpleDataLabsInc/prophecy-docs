import git
import argparse
import re
import os
from datetime import datetime
from packaging import version as packaging_version

versions = []


def get_versions_for_tag(repo, tag_name):
    deps_file_path = "project/Dependencies.scala"

    try:
        tag = repo.tags[tag_name]
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

        ver_dict = {
            "prophecy_version": tag_name,
            "scala_version": scala_version[0],
            "python_version": python_version[0],
            "date": datetime.fromtimestamp(tag.commit.committed_date).strftime('%Y/%m/%d')
        }
        versions.append(ver_dict)
    except FileNotFoundError:
        FileNotFoundError(f"File '{deps_file_path}' not found in this version.")
    except git.exc.GitCommandError:
        IOError(f"Error checking out tag '{tag_name}'.")


def update_version_chart_file(docs_repo_path):
    version_chart_file = os.path.join(docs_repo_path, "docs/release_notes/version_chart.md")
    header_lines = []
    delimiter = ""
    delimiter_regex = "-------------"
    with open(version_chart_file, 'r') as file:
        for line in file:
            if delimiter_regex in line:
                delimiter = line
                break
            header_lines.append(line)
    header = ''.join(header_lines)

    delimiter_parts = delimiter.split("|")
    rows = ["| {} | {} | {} | {} |\n".format(
        v['prophecy_version'].ljust(len(delimiter_parts[1].strip())),
        v['scala_version'].ljust(len(delimiter_parts[2].strip())),
        v['python_version'].ljust(len(delimiter_parts[3].strip())),
        v['date'].ljust(len(delimiter_parts[4].strip()))
    ) for v in versions]
    output_string = "".join(rows)

    print("writing the following to the file: ")
    print(header + delimiter + output_string)

    with open(version_chart_file, 'w') as output_file:
        output_file.write(header + delimiter + output_string)


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
    parser = argparse.ArgumentParser(description="Show a file from each tagged version in a Git repository.")
    parser.add_argument("--prophecy-repo-path", default='./prophecy/', help="Path to the prophecy Git repository")
    parser.add_argument("--docs-repo-path", default='./prophecy-docs/', help="Path to the docs Git repository")
    parser.add_argument("--tag", help="Process a specific tag (if omitted we process all that match semver structure)")
    parser.add_argument("--output-path", help="absolute path for output file", default="./version_chart.md")

    args = parser.parse_args()

    process_args(args.prophecy_repo_path, args.docs_repo_path, args.tag)
