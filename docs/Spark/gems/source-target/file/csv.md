---
title: CSV
id: csv
description: CSV
tags:
  - gems
  - file
  - csv
---

Read or write delimited files such as CSV (Comma-separated Values) or TSV (Tab-separated Values) in Prophecy.

## Source

### Source Parameters

CSV **_Source_** supports all the available [Spark read options for CSV](https://spark.apache.org/docs/latest/sql-data-sources-csv.html).

The below list contains the additional parameters to read a CSV file:

| Parameter    | Description                                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Dataset Name | Name of the dataset.                                                                                                   |
| Location     | Location of the file to be loaded. You can read from a file location, Sharepoint (Python only), or SFTP (Python only). |
| Schema       | Schema to applied on the loaded data. Schema can be defined/edited as JSON or inferred using `Infer Schema` button.    |

## Target

### Target Parameters

CSV **_Target_** supports all the available [Spark write options for CSV](https://spark.apache.org/docs/latest/sql-data-sources-csv.html).

The below list contains the additional parameters to write a CSV file:

| Parameter    | Description                                                                                            | Required |
| ------------ | ------------------------------------------------------------------------------------------------------ | -------- |
| Dataset Name | Name of the dataset.                                                                                   | True     |
| Location     | Location of the file(s) to be loaded. For example, `dbfs:/data/output.csv`.                            | True     |
| Write Mode   | How to handle existing data. See [this table](#supported-write-modes) for a list of available options. | False    |

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame.                                                            |
| append     | If data already exists, append the contents of the DataFrame.                                                                    |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

### Produce a single output file

Because of Spark's distributed nature, output files are written as multiple separate partition files by default. If you require a single output file, you can add and enable the **Create single CSV file** property in the **Properties** tab of the Target gem.
