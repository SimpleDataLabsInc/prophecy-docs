---
title: CSV
id: csv
description: CSV
tags:
  - gems
  - file
  - csv
---

The CSV file type allows you to read or write delimited files such as CSV (Comma-separated Values) or TSV (Tab-separated Values).

## Source

### Source Parameters

| Parameter                                  | Description                                                                                                                                                                                                                                  |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Dataset Name                               | Name of the dataset.                                                                                                                                                                                                                         |
| Location                                   | File path to the CSV file. You can read from a file location, Sharepoint (Python only), or SFTP (Python only).                                                                                                                               |
| User-Defined Schema                        | Whether to use the schema you defined.                                                                                                                                                                                                       |
| Column Delimeter                           | Character to separate column names from your CSV file.                                                                                                                                                                                       |
| First Row Header                           | Whether to use the first line as names of columns.                                                                                                                                                                                           |
| Infer Schema                               | Whether to automatically infer the input schema from the data. This requires one extra pass over the data. <br/>CSV built-in functions ignore this option.                                                                                   |
| Parse Multi-Line Records                   | Whether to parse one record, which may span multiple lines, per file. <br/>CSV built-in functions ignore this option.                                                                                                                        |
| Encoding Type                              | Decodes the CSV files by the given encoding type. <br>/CSV built-in functions ignore this option.                                                                                                                                            |
| Quote Character                            | Sets a single character to escape quoted values where the separator can be part of the value. If you want to turn off quotations, you need to set this to an empty string.                                                                   |
| Escape Character                           | Sets a single character to escape quotes inside a quoted value.                                                                                                                                                                              |
| Escape char for quote escaping char        | Sets a single character used for escaping the escape for the quote character.                                                                                                                                                                |
| Enforce specified or inferred schema       | Whether Prophecy will forcibly apply to datasource files, and headers in CSV files in the specified or inferred schema. <br/>CSV built-in functions ignore this option.                                                                      |
| Sampling Ratio                             | Defines a fraction of rows to use for schema inferring. <br/>CSV built-in functions ignore this option.                                                                                                                                      |
| Ignore leading white spaces from values    | Flag indicating whether or not Prophecy should skip the leading whitespaces from values it reads.                                                                                                                                            |
| Ignore trailing white spaces from values   | Flag indicating whether or not Prophecy should skip the trailing whitespaces from values it reads.                                                                                                                                           |
| Null Value                                 | Sets the string representation of a null value.                                                                                                                                                                                              |
| Empty Value                                | Sets the string representation of an empty value.                                                                                                                                                                                            |
| String representation for non-number value | Sets the string representation of a non-number value.                                                                                                                                                                                        |
| Positive infinity value                    | Sets the string representation of a positive infinity value.                                                                                                                                                                                 |
| Negative infinity value                    | Sets the string representation of a negative infinity value.                                                                                                                                                                                 |
| Date format string                         | Sets the string that indicates a date format.                                                                                                                                                                                                |
| Timestamp format string                    | Sets the string that indicates a timestamp format.                                                                                                                                                                                           |
| Max number of columns per record           | Defines a hard limit of how many columns a record can have.                                                                                                                                                                                  |
| Allowed maximum characters per column      | Defines the maximum number of characters allowed for any given value being read. <br/>By default, it is -1, which means unlimited length.                                                                                                    |
| Corrupt record handling                    | How to deal with corrupt records. <br/>To learn about the available modes, see [Supported Corrupt Record Modes](#supported-corrupt-record-modes).                                                                                            |
| Column name of a corrupt record            | Allows you to rename the field the PERMISSIVE mode creates to store malformed data. <br/>This overrides `spark.sql.columnNameOfCorruptRecord`.                                                                                               |
| Line Sep                                   | Sets a separator for each field and value. The separator can be one or more characters.                                                                                                                                                      |
| Locale                                     | Sets a locale as language tag in IETF BCP 47 format.                                                                                                                                                                                         |
| Unescaped Quote Handling                   | How the `CsvParser` handles values with unescaped quotes. <br/>To learn about the possible values, see [Supported Unescaped Quote Handling](#supported-unescaped-quote-handling).                                                            |     |
| Recursive File Lookup                      | Recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception.                                                   |
| Path Global Filter                         | Glob pattern to only include files with paths matching the pattern. The syntax follows [GlobFilter](https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html) and does not change the behavior of partition discovery. |
| Modified Before                            | Timestamp to only include files with modification times occurring before the specified time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00).                                           |
| Modified After                             | Timestamp to only include files with modification times occurring after the specified time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00).                                            |
| Schema                                     | Schema to apply on the loaded data. You can define or edit the scema as JSON or inferred using the `Infer Schema` button.                                                                                                                    |

### Supported Corrupt Record Modes

| Mode          | Description                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| PERMISSIVE    | Put the malformed string into a new field called `_corrupt_records`, and set the malformed fields to null. |
| DROPMALFORMED | Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions.              |
| FAILFAST      | Throw an exception when it meets a corrupted record.                                                       |

### Supported Unescaped Quote Handling

| Mode                  | Description                                                                                                                                                                                                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STOP_AT_CLOSING_QUOTE | Accumulate the quote character and proceed parsing the value as a quoted value, until a closing quote is found.                                                                                                                                                                                      |
| BACK_TO_DELIMITER     | Consider the value as an unquoted value. This will make the parser accumulate all characters of the current parsed value until the delimiter is found. If no delimiter is found in the value, the parser continues accumulating characters from the input until it finds a delimiter or line ending. |
| STOP_AT_DELIMITER     | Consider the value as an unquoted value. This will make the parser accumulate all characters until the delimiter or a line ending is found in the input.                                                                                                                                             |
| SKIP_VALUE            | Skip the parsed content and set this to the value set in Null Value.                                                                                                                                                                                                                                 |
| RAISE_ERROR           | Throw a `TextParsingException`.                                                                                                                                                                                                                                                                      |

## Target

### Target Parameters

| Parameter                                | Description                                                                                                                                                                               | Required |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Dataset Name                             | Name of the dataset.                                                                                                                                                                      | True     |
| Location                                 | File path to write the CSV file to.                                                                                                                                                       | True     |
| Write Mode                               | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).                                                             | False    |
| Column Delimeter                         | Character to separate column names from your CSV file.                                                                                                                                    | False    |
| First Row Header                         | Whether to use the first line as names of columns.                                                                                                                                        | False    |
| Partition Columns                        | List of columns to partition the CSV files by.                                                                                                                                            | False    |
| Encoding Type                            | Specifies encoding (charset) of saved CSV files. <br>/CSV built-in functions ignore this option.                                                                                          | False    |
| Quote Character                          | Sets a single character to escape quoted values where the separator can be part of the value. If you want to turn off quotations, you need to set this to an empty string.                | False    |
| Escape Character                         | Sets a single character to escape quotes inside a quoted value.                                                                                                                           | False    |
| Escape char for quote escaping char      | Sets a single character used for escaping the escape for the quote character.                                                                                                             | False    |
| Null Value                               | Sets the string representation of a null value.                                                                                                                                           | False    |
| Empty Value                              | Sets the string representation of an empty value.                                                                                                                                         | False    |
| Compression                              | Compression codec used when writing. <br/>Prophecy supports the following codecs: `none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`. <br/>CSV built-in functions ignore this option. | False    |
| Escape quotes                            | Whether values containing quotes should always be enclosed in quotes.                                                                                                                     | False    |
| Quote All                                | Whether all values should always be enclosed in quotes.                                                                                                                                   | False    |
| Date format string                       | Sets the string that indicates a date format.                                                                                                                                             | False    |
| Timestamp format string                  | Sets the string that indicates a timestamp format.                                                                                                                                        | False    |
| Ignore leading white spaces from values  | Flag indicating whether or not Prophecy should skip the leading whitespaces from values it reads.                                                                                         | False    |
| Ignore trailing white spaces from values | Flag indicating whether or not Prophecy should skip the trailing whitespaces from values it reads.                                                                                        | False    |
| Line Sep                                 | Sets a separator for each field and value. The separator can be one or more characters.                                                                                                   | False    |

### Supported Write Modes

| Write Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |

### Produce a single output file

Because of Spark's distributed nature, output files are written as multiple separate partition files by default. If you require a single output file, you can add and enable the **Create single CSV file** property in the **Properties** tab of the Target gem.
