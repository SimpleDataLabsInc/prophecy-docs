---
title: Upload files
id: upload-file
description: Upload files to your Spark pipeline
tags:
  - gems
  - file
  - Spark
---

You can upload the following file types to your file store:

- CSV, and other character separated types like TSV.
- JSON, with a single row per line, objects spanning many lines, or arrays with objects.
- Text, formatted with one line per row.
- XLSX, and the older XLS format.
- XML, using a row tag selector.

## Upload a file

To upload a file and incorporate it into your Spark pipeline, use a Source gem.

Choose one of the following methods to upload your file:

- Drag and drop the file directly to your pipeline canvas.

  ![Drag and drop file](./img/drag-drop-file.png)

- Open the `Source/Target` gem drawer and click **Upload file**.

  ![Source/Target gem drawer](./img/upload-file-gem-drawer.png)

- Create a new Source gem, click **+ New Dataset**, and select **Upload file**.

  ![Source gem](./img/upload-file-source-gem.png)

If your file successfully uploads, you see the **Type & Format** page for your file.

![Type & Format](./img/upload-type-and-format.png)

## File configuration

To configure your file:

1. Confirm or update the file type, and click **Next**.
1. Upload the file to a known file store location, or create a new table in your file store with the **Upload and create a table** option. Then, click **Next**.

   ![Upload and create a table](./img/upload-create-table.png)

   :::note
   After you define the target location and click **Next**, Prophecy uploads the file to the file path, regardless if you complete the gem configuration.
   :::

1. Add each property you want to configure.
1. Click **Infer Schema**.
1. Confirm or update the schema and click **Next**.
1. If you want to preview the table, click **Load**.
1. Click **Create Dataset**.

   This action creates the dataset and also creates the table if using the **Upload and create a table** option.

   Now, you can use your Source gem that contains all your data in your pipeline.
