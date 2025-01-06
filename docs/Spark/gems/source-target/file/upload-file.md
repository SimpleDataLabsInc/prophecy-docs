---
title: Upload files
id: upload-file
description: Upload files to your Spark Pipeline
sidebar_position: 1
tags:
  - gems
  - file
  - Spark
---

You can upload files of the following types to your file store:

- CSV, and other character separated types like TSV.
- JSON, with a single row per line, objects spanning many lines, or arrays with objects.
- Text, formatted with one line per row.
- XLSX, and the older XLS format.
- XML, using a row tag selector.

## Steps to upload

To upload a file and incorporate it into your Spark Pipeline, you can use a Source Gem. There are a few ways to get started:

- Drag and drop the file directly to the Pipeline canvas.

  ![Drag and drop file](./img/drag-drop-file.png)

- Open the Source/Target Gem drawer and click **Upload file**.

  ![Source/Target Gem drawer](./img/upload-file-gem-drawer.png)

- Create a new Source Gem, click **+ New Dataset**, and select **Upload file**.

  ![Source Gem](./img/upload-file-source-gem.png)

After following any of the above steps, you will see the **Type & Format** settings for your file.

![Type & Format](./img/upload-type-and-format.png)

## File configuration

Follow these steps to complete the file configuration:

1. Make sure the file type is correct, and click **Next**.
1. Either upload the file to a known file store location, or create a new table in your file store using the **Upload and create a table** option. Then, click **Next**.

   ![Upload and create a table](./img/upload-create-table.png)

   :::note
   Once you define the target location and click Next, your table will be uploaded to the file store, regardless of whether you complete the Gem configuration.
   :::

1. Fill in any properties depending on your requirements.
1. Click **Infer Schema**. _This step is required._
1. Validate or update the schema and click **Next**.
1. **Load** the data if you want to preview the table. Then, click **Create Dataset**.

Now, your table is ready for use in your Pipeline via the Source Gem!
