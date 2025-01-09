import csv
import os

# Define the path to your CSV file
csv_file_path = 'GemList.csv'

# Open the CSV file
with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
    # Create a reader object
    data = csv.reader(csvfile)

    # Skip the header
    header = next(data)

    # Process each row and generate a text file
    for row in data:
        package_name, gem, support_143, support_154, package_version, scala_lib_version, python_lib_version, doc_file_prefix, doc_additional_libs_requirement = row

        # Format the support text
        package_version_143 = f"Supported" if "Supported" in support_143 else "TBD" if "TBD" in support_143 else "Not Supported"
        package_version_154 = f"Supported" if "Supported" in support_154 else "TBD" if "TBD" in support_154 else "Not Supported"


        # Create the content of the file
        file_content = f"""
<Requirements
  packagename="{package_name.strip()}"
  packageversion="{package_version.strip()}"
  scalalib="{(scala_lib_version or '').strip()}"
  pythonlib="{(python_lib_version or '').strip()}"
  packageversion143="{package_version_143}"
  packageversion154="{package_version_154}"
  additional_requirements="{doc_additional_libs_requirement}"
/>
"""

        # Write each row to a separate text file in its respective directory
        file_name = f'{doc_file_prefix.strip()}.txt'
        with open(file_name, 'w', encoding='utf-8') as file:
            file.write(file_content)

        print(f"File created: {file_name}")
