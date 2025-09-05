---
title: CSV
id: csv
slug: /engineers/csv
description: Parameters and properties to read from and write to CSV files
tags:
  - gems
  - file
  - csv
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements python_package_name="ProphecySparkBasicsPython" python_package_version="0.0.1+" scala_package_name="ProphecySparkBasicsScala" scala_package_version="0.0.1+" uc_single="14.3+" uc_shared="14.3+" livy="3.0.1+"/>

The CSV (Comma-separated Values) file type is:

- Easy to read from, write to, and share.
- Compatible with many programs, and easy to exchange data.

You can read from and write to any location within your execution environment, or use a SharePoint or SFTP connection to access external data.

## Additional Requirements

To retrieve CSV files from a SharePoint or SFTP connection:

- Create the CSV gem in a Python project. These connections are not yet supported in Scala.
- Upgrade the `ProphecySparkBasicsPython` dependency to version 0.2.44+.

:::note
These connections are not supported on Livy clusters at this time.
:::

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                     |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read From | Location   | Which platform to read the file from. <br/>Possible values are: `File Location`, `SharePoint` (Python only), or `SFTP` (Python only).                                                           |
| Write To  | Location   | Which platform to write the file to. <br/>You can only select `File Location`.                                                                                                                  |
| Location  | Location   | File path to read from or write to the CSV file.                                                                                                                                                |
| Schema    | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code. |

## Source

The Source gem reads data from CSV files and allows you to optionally specify the following additional properties.

### Source properties

| Property name                              | Description                                                                                                                                                                                                                                  | Default                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Description                                | Description of your dataset.                                                                                                                                                                                                                 | None                               |
| User-Defined Schema                        | Whether to use the schema you define.                                                                                                                                                                                                        | true                               |
| Column Delimeter                           | Character to separate column names from your CSV file.                                                                                                                                                                                       | `,`                                |
| First row is header                        | Whether to use the first line as names of columns.                                                                                                                                                                                           | true                               |
| Infer schema from data                     | Whether to automatically infer the input schema from the data. This requires one extra pass over the data. <br/>CSV built-in functions ignore this option.                                                                                   | false                              |
| Parse Multi-line records                   | Whether to parse one record, which may span multiple lines, per file. <br/>CSV built-in functions ignore this option.                                                                                                                        | false                              |
| Encoding Type                              | Decodes the CSV files by encoding type you give. <br/>CSV built-in functions ignore this option.                                                                                                                                             | `UTF-8`                            |
| Quote character                            | Sets a single character to escape quoted values where the separator can be part of the value. If you want to turn off quotations, set this to an empty string.                                                                               | `"`                                |
| Escape character                           | Sets a single character to escape quotes inside a quoted value.                                                                                                                                                                              | `\`                                |
| Escape char for quote escaping char        | Sets a single character to escape the escape for the quote character.                                                                                                                                                                        | `\0`                               |
| Skip line beginning with character         | If the line begins with the character you specify, skip the entire line.                                                                                                                                                                     | None                               |
| Enforce specified or inferred schema       | Whether to forcibly apply the specified or inferred schema to data source files, and headers in CSV files. <br/>CSV built-in functions ignore this option.                                                                                   | false                              |
| Sampling Ratio                             | Defines a fraction of rows to use for schema inferring. <br/>CSV built-in functions ignore this option.                                                                                                                                      | `1.0`                              |
| Ignore leading white spaces from values    | Whether to skip the leading whitespaces from values the Source gem reads.                                                                                                                                                                    | false                              |
| Ignore trailing white spaces from values   | Whether to skip the trailing whitespaces from values the Source gem reads.                                                                                                                                                                   | false                              |
| Null Value                                 | Sets the string representation of a null value.                                                                                                                                                                                              | None                               |
| Empty Value                                | Sets the string representation of an empty value.                                                                                                                                                                                            | None                               |
| String representation for non-number value | Sets the string representation of a non-number value.                                                                                                                                                                                        | `NaN`                              |
| Positive infinity value                    | Sets the string representation of a positive infinity value.                                                                                                                                                                                 | `Inf`                              |
| Negative infinity value                    | Sets the string representation of a negative infinity value.                                                                                                                                                                                 | `-Inf`                             |
| Date format string                         | Sets the string that indicates a date format.                                                                                                                                                                                                | `yyyy-MM-dd`                       |
| Timestamp format string                    | Sets the string that indicates a timestamp format.                                                                                                                                                                                           | `yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]` |
| Max number of columns per record           | Defines a hard limit of how many columns a record can have.                                                                                                                                                                                  | `20480`                            |
| Allowed maximum characters per column      | Defines the maximum number of characters allowed for any given value being read.                                                                                                                                                             | `-1` (unlimited length)            |
| Corrupt record handling                    | How to handle corrupt data. For a list of the possible values, see [Supported corrupt record modes](#supported-corrupt-record-modes).                                                                                                        | `PERMISSIVE`                       |
| Column name of a corrupt record            | Rename the field the PERMISSIVE mode creates to store malformed data. <br/>This overrides `spark.sql.columnNameOfCorruptRecord`.                                                                                                             | `_corrupt_records`                 |
| Line Sep                                   | Sets a separator for each field and value. The separator can be one or more characters.                                                                                                                                                      | `\r`, `\r\n` and `\n`              |
| Locale                                     | Sets a locale as language tag in IETF BCP 47 format.                                                                                                                                                                                         | `en-US`                            |
| Unescaped Quote Handling                   | How the `CsvParser` handles values with unescaped quotes. <br/>For a list of the possible values, see [Supported unescaped quote handling](#supported-unescaped-quote-handling).                                                             | `STOP_AT_DELIMITER`                |
| Recursive File Lookup                      | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, the Source gem throws an exception.                                  | false                              |
| Path Global Filter                         | Glob pattern to only include files with paths matching the pattern. The syntax follows [GlobFilter](https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html) and does not change the behavior of partition discovery. | None                               |
| Modified Before                            | Timestamp to only include files with modification times occurring before the time you specify. The timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00).                                                  | None                               |
| Modified After                             | Timestamp to only include files with modification times occurring after the time you specify. The timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00).                                                   | None                               |
| Skip header lines                          | Number of lines to skip at the beginning of the file.                                                                                                                                                                                        | None                               |
| Skip footer lines                          | Number of lines to skip at the end of the file.                                                                                                                                                                                              | None                               |

### Supported corrupt record modes

| Mode          | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| PERMISSIVE    | Put the malformed string into the corrupt records column, and set the malformed fields to null. |
| DROPMALFORMED | Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions.   |
| FAILFAST      | Throw an exception when it meets a corrupted record.                                            |

### Supported unescaped quote handling

| Mode                  | Description                                                                                                                                                                                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STOP_AT_CLOSING_QUOTE | Accumulate the quote character and proceed parsing the value as a quoted value, until a closing quote is found.                                                                                                                                                                              |
| BACK_TO_DELIMITER     | Consider the value as an unquoted value. This makes the parser accumulate all characters of the current parsed value until it finds the delimiter. If it does not find the delimiter, the parser continues accumulating characters from the input until it finds a delimiter or line ending. |
| STOP_AT_DELIMITER     | Consider the value as an unquoted value. This makes the parser accumulate all characters from the input until it finds the delimiter or a line ending.                                                                                                                                       |
| SKIP_VALUE            | Skip the parsed content and set this to the value in the `Null Value` property.                                                                                                                                                                                                              |
| RAISE_ERROR           | Throw a `TextParsingException`.                                                                                                                                                                                                                                                              |

## Target

The Target gem writes data to CSV files and allows you to optionally specify the following additional properties.

### Target properties

| Property name                            | Description                                                                                                                                                                                              | Default                            |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Dataset Name                             | Name of the dataset.                                                                                                                                                                                     | True                               |
| Description                              | Description of your dataset.                                                                                                                                                                             | None                               |
| Write Mode                               | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                                     | `error`                            |
| Column delimeter                         | Character to separate column names from your CSV file.                                                                                                                                                   | `,`                                |
| First row is header                      | Whether to use the first line as names of columns.                                                                                                                                                       | true                               |
| Partition Columns                        | List of columns to partition the CSV files by.                                                                                                                                                           | None                               |
| Encoding Type                            | Specifies encoding (charset) of saved CSV files. <br/>CSV built-in functions ignore this option.                                                                                                         | `UTF-8`                            |
| Quote character                          | Sets a single character to escape quoted values where the separator can be part of the value. If you want to turn off quotations, you need to set this to an empty string.                               | `"`                                |
| Escape character                         | Sets a single character to escape quotes inside a quoted value.                                                                                                                                          | `\`                                |
| Escape char for quote escaping char      | Sets a single character to escape the escape for the quote character.                                                                                                                                    | `\0`                               |
| Null Value                               | Sets the string representation of a null value.                                                                                                                                                          | None                               |
| Empty Value                              | Sets the string representation of an empty value.                                                                                                                                                        | "" (empty string)                  |
| Compression                              | Compression codec when writing to the CSV file. <br/>The CSV file supports the following codecs: `none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`. <br/>CSV built-in functions ignore this option. | None                               |
| Escape quotes                            | Whether values containing quotes should always be enclosed in quotes.                                                                                                                                    | false                              |
| Quote All                                | Whether all values should always be enclosed in quotes.                                                                                                                                                  | false                              |
| Date format string                       | Sets the string that indicates a date format.                                                                                                                                                            | `yyyy-MM-dd`                       |
| Timestamp format string                  | Sets the string that indicates a timestamp format.                                                                                                                                                       | `yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]` |
| Ignore leading white spaces from values  | Whether to skip the leading whitespaces for values the Target gem writes.                                                                                                                                | true                               |
| Ignore trailing white spaces from values | Whether to skip the trailing whitespaces for values the Target gem writes.                                                                                                                               | true                               |
| Line Sep                                 | Defines the line separator to use when parsing.                                                                                                                                                          | `\n`                               |
| Create single CSV file                   | Whether to create a single CSV file. <br/>If false, Prophecy writes output files as multiple separate partition files. <br/>**This specific property is not compatible with UC standard clusters**.      | false                              |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |
