import csv
import os

# Define the path to your CSV file
csv_file_path = 'GemListTry8.csv'

# Open the CSV file
with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
    # Create a reader object
    data = csv.reader(csvfile)

    # Skip the header
    header = next(data)

    # Process each row and generate a text file
    for row in data:
        package_name, gem, support_122, support_143, support_154, package_version, scala_lib_version, python_lib_version, gem_type, doc_file_prefix = row

        # Format the support text
        package_version_122 = f"Supported {package_version}+" if "Pass" in support_122 else "TBD" if "TBD" in support_122 else "Not Supported"
        package_version_143 = f"Supported {package_version}+" if "Pass" in support_143 else "TBD" if "TBD" in support_143 else "Not Supported"
        package_version_154 = f"Supported {package_version}+" if "Pass" in support_154 else "TBD" if "TBD" in support_154 else "Not Supported"

        # Create the content of the file
        file_content = f"""import Requirements from "../_gem-requirements.mdx";

<h3><span class="badge">Spark Gem</span></h3>
        
<Requirements packagename="{package_name.strip()}"
  packageversion="{package_version.strip()}"
  scalalib="{(scala_lib_version or '').strip()}"
  pythonlib="{(python_lib_version or '').strip()}"
  packageversion122="{package_version_122}"
  packageversion143="{package_version_143}"
  packageversion154="{package_version_154}"
/>
"""

        # Create directory based on gem type if it doesn't exist
        directory = gem_type.strip()
        if not os.path.exists(directory):
            os.makedirs(directory)

        # Write each row to a separate text file in its respective directory
        file_name = f'{doc_file_prefix.strip()}.txt'
        file_path = os.path.join(directory, file_name)
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(file_content)

        print(f"File created: {file_path}")
