---
title: Fixed Format
id: fixed-format
description: Paramters and properties to read from and write to Fixed Format files
tags:
  - gems
  - file
  - fixed-format
---

:::caution Enterprise Only
To learn more about our Enterprise offering, please [contact us](https://www.prophecy.io/request-a-demo).
:::

A Fixed Format (Fixed-Length Format) file type:

- Is a text file where each field or column occupies a predetermined, constant number of characters in each record.
- Can parse and process quickly because the software knows exactly where to find each field.
- Is often used in legacy systems, data exchange, and performance-critical applications.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                                    |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the Fixed Format file.                                                                                                                                                      |
| Schema    | Properties | Schema to apply on the loaded data. <br/>In the Source gem, you can define or edit the schema as a JSON, or infer it with the `Infer Schema` button.<br/>In the Target gem, you can view the schema as a JSON. |

## Source

The Source gem reads data from Fixed Format files and allows you to optionally specify the following additional properties.

### Source Properties

| Property name       | Description                                                                            | Default |
| ------------------- | -------------------------------------------------------------------------------------- | ------- |
| Description         | Description of your dataset.                                                           | None    |
| Skip header lines   | Number of lines to skip at the beginning of the file.                                  | None    |
| Skip footer lines   | Number of lines to skip at the end of the file.                                        | None    |
| Fixed Format Schema | Schema string for the fixed format file. <br/>Supports either EBCDIC or ASCII formats. | None    |

### Example {#source-example}

![Fixed format source example](./img/fixed-format/ff-source-small.gif)

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

## Target

The Target gem writes data to Fixed Format files and allows you to optionally specify the following additional properties.

### Target Properties

| Property name       | Description                                                                                                          | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Write Mode          | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes). | `error` |
| Description         | Description of your dataset.                                                                                         | None    |
| Fixed Format Schema | Schema string for the fixed format file. <br/>Supports either EBCDIC or ASCII formats.                               | None    |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |

### Example {#target-example}

![Fixed format target Example](./img/fixed-format/ff-target-small.gif)

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::
