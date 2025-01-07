import os
import glob
import tempfile
import shutil

# Define the base directory where your files and subdirectories are located
base_directory = "./"  # Replace with the path to your directories

# Use glob to find all text files within the directory and up to two levels of subdirectories
for text_file in glob.glob(os.path.join(base_directory, "**/*.txt"), recursive=True):
    # Extract the base name without the extension
    base_name = os.path.splitext(os.path.basename(text_file))[0]

    # Find a corresponding markdown file with the same base name
    markdown_file = next(
        (file for file in glob.glob(os.path.join(base_directory, "**/*.md"), recursive=True)
         if os.path.basename(file) == f"{base_name}.md"),
        None
    )

    # Check if the markdown file exists
    if markdown_file:
        print(f"Processing {text_file} and {markdown_file}...")

        # Check if "Requirements packagename" exists in the markdown file
        with open(markdown_file, 'r') as md_file:
            if "Requirements packagename" in md_file.read():
                print(f"Skipping {markdown_file} because it contains 'Requirements packagename'.")
                continue  # Skip to the next text file

        # Temporary file to hold the result
        with tempfile.NamedTemporaryFile('w', delete=False) as temp_file:
            # Initialize a counter for the occurrences of the delimiter
            count = 0

            # Re-read the markdown file for processing
            with open(markdown_file, 'r') as md_file:
                for line in md_file:
                    # Write each line to the temporary file
                    temp_file.write(line)

                    # Count occurrences of the delimiter
                    if line.strip() == "---":
                        count += 1

                    # After the second occurrence, insert content from the text file
                    if count == 2:
                        with open(text_file, 'r') as insert_file:
                            shutil.copyfileobj(insert_file, temp_file)
                        count += 1  # Prevent further insertions

        # Replace the original markdown file with the updated one
        shutil.move(temp_file.name, markdown_file)
        print(f"Inserted content from {text_file} into {markdown_file}.")

    else:
        # Print message if the markdown file is not found
        print(f"No corresponding markdown file found for {text_file}.")
