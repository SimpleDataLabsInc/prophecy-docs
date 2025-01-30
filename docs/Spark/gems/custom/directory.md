---
title: Directory
id: directory
description: Return a listing of all the files in a specified directory
tags:
  - gems
  - directory
---

<h3><span class="badge">Spark Gem</span></h3>

The Directory gem returns a listing of all the files in a specified directory including file metadata such as file creation time, type, size, path, and more.

## Parameters

| Parameters             | Description                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------- |
| Location               | The location of the directory that you want to return                                 |
| Include Subdirectories | A checkbox you can enable to return all of the subdirectories in the defined location |
| File Specification     | A regex filter to help you find your files in the file browser                        |

## Sample output

Below is an example output of a Directory gem. It includes seven columns:

- name
- path
- size
- creation_time
- modification_time
- parent_directory
- file_type

![Directory output](img/directory-output.png)
