import os
import glob
import tempfile
import shutil

# Define the base directory where your files and subdirectories are located
base_directory = "./"  # Replace with the path to your directories

# Use glob to find all text files within the directory and up to two level of subdirectories
for text_file in glob.glob(os.path.join(base_directory, "**/*.txt"), recursive=True):
    # Extract the base name without the extension
    base_name = os.path.splitext(os.path.basename(text_file))[0]

    # Find a corresponding markdown file with the same base name
    markdown_file = next(
        (file for file in glob.glob(os.path.join(base_directory, "./*/*/*.md"), recursive=True)
         if os.path.basename(file) == f"{base_name}.md"),
        None
    )

    # Check if the markdown file exists
    if markdown_file:
        print(f"Processing {text_file} and {markdown_file}...")

        # Temporary file to hold the result
        with tempfile.NamedTemporaryFile('w', delete=False) as temp_file:
            # Flag to determine if we are within the <Requirements ... /> section
            inside_requirements_section = False

            # Read the markdown file for processing
            with open(markdown_file, 'r') as md_file:
                for line in md_file:
                    # Identify the start of the <Requirements ... /> section
                    if line.strip().startswith("<Requirements"):
                        inside_requirements_section = True
                        continue  # Skip this line

                    # Identify the end of the <Requirements ... /> section
                    if inside_requirements_section and line.strip() == "/>":
                        inside_requirements_section = False
                        # Write replacement content from the text file
                        with open(text_file, 'r') as insert_file:
                            shutil.copyfileobj(insert_file, temp_file)
                        continue  # Skip the original ending line

                    # Only write lines that are not part of the <Requirements ... /> section
                    if not inside_requirements_section:
                        temp_file.write(line)

        # Replace the original markdown file with the updated one
        shutil.move(temp_file.name, markdown_file)
        print(f"Replaced <Requirements ... /> section in {markdown_file} with content from {text_file}.")
    else:
        # Print message if the markdown file is not found
        print(f"No corresponding markdown file found for {text_file}.")
