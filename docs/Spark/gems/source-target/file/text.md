---
title: Text
id: text
description: Text
sidebar_position: 11
tags:
  - gems
  - file
  - text
---

Like the CSV data type, the Text file type is also:

- Easy to read from, write to, and share.
- Compatible with many programs, and easy to exchange data.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                                   |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the Text file.                                                                                                                                                             |
| Schema    | Properties | Schema to apply on the loaded data. <br/>In the Source gem, you can define or edit the schema as a JSON or infer it with the `Infer Schema` button.<br/>In the Target gem, you can view the schema as a JSON. |

## Source

The Source gem reads data from Text files and allows you to optionally specify additional properties.

### Source properties

| Property name           | Description                                                                                                                                                                                           | Default                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Description             | Description of your dataset.                                                                                                                                                                          | None                   |
| Enforce schema          | Whether to apply the schema on the loaded data. You can define or edit the scema as JSON or inferred using the `Infer Schema` button.                                                                 | true                   |
| Read file as single row | Whether to read each file from input path as a single row.                                                                                                                                            | false                  |
| Line Separator          | Sets a separator for each field and value. The separator can be one or more characters.                                                                                                               | `\r`, `\r\n`, and `\n` |
| Recursive File Lookup   | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception. | false                  |

### Example {#source}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/175029278-70a93cc5-a212-464b-8aad-61ab278f0bbf.mp4" title="Text Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

<br/>

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

## Target

The Target gem writes data to Text files and allows you to optionally specify additional properties.

### Target properties

| Property name                                                                                                   | Description                                                                                                                                                                               | Default |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description                                                                                                     | Description of your dataset.                                                                                                                                                              | None    |
| Write Mode                                                                                                      | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                      | `error` |
| Partition Columns                                                                                               | List of columns to partition the Text files by. <br/> The Text file type only supports a single column apart from the partition columns. If the `DataFrame` contains more than one column |
| apart from parition columns as the input `DataFrame` to the Target gem, Prophecy throws an `AnalysisException`. | None                                                                                                                                                                                      |
| Compression Codec                                                                                               | Compression codec when writing to the Text file. <br/>The Text file supports the following codecs: `none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`.                                | None    |
| Line Separator                                                                                                  | Defines the line separator that the Target gem should use for parsing.                                                                                                                    | `\n`    |

### Supported write modes

| Write mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |

### Example {#target-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/175029303-461687fe-a6e0-419e-85c6-229c17645746.mp4" title="Text Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

<br/>

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

:::info
To know more about tweaking Text file related properties in Spark config [**click here**](https://spark.apache.org/docs/latest/sql-data-sources-text.html).
:::
