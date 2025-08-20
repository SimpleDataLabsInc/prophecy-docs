---
title: CSV
id: csv
slug: /analysts/csv
description: Read and write CSV files
tags: []
---

Read or write a CSV file from an external connection using a Source or Target gem.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use CSV files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Supported connections

You can read CSV files from the following connections:

- [Amazon S3](/administration/fabrics/prophecy-fabrics/connections/s3)
- [Databricks](/administration/fabrics/prophecy-fabrics/connections/databricks)
- [Microsoft OneDrive](/administration/fabrics/prophecy-fabrics/connections/onedrive)
- [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp)
- [SharePoint](/administration/fabrics/prophecy-fabrics/connections/sharepoint)

Learn about how to configure Source and Target gems for each connection type in the related file storage documentation.

### Source properties

The following properties are available for the CSV Source gem.

| Property                      | Description                                                                                                        | Default |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Description                   | Description of the table.                                                                                          | None    |
| Separator                     | Character used to separate values in the CSV file.                                                                 | `,`     |
| Header                        | Whether the first row is the column header.                                                                        | True    |
| Null Value                    | String that represents a null or missing value in the CSV.                                                         | None    |
| Comment Character             | Character used to denote lines in the file that should be treated as comments.                                     | None    |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema.                                                         | `0`     |
| File Encoding                 | Character set used to decode the CSV file when reading. See [supported encodings](#supported-character-encodings). | `UTF-8` |

### Target properties

The following properties are available for the CSV Target gem.

| Property                   | Description                                                                                                        | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Description                | Description of the table.                                                                                          | None    |
| Separator                  | Character used to separate values in the CSV file.                                                                 | `,`     |
| Header                     | Whether to make the first row the column header.                                                                   | True    |
| Null Value                 | String that represents a null or missing value in the CSV.                                                         | None    |
| Use CRLF as line separator | If enabled, lines in the CSV will end with `\r\n` (Windows-style newlines).                                        | None    |
| File Encoding              | Character set used to encode the CSV file when writing. See [supported encodings](#supported-character-encodings). | `UTF-8` |

#### Supported character encodings

<details>
<summary>Supported character encodings</summary>

- UTF-8
- UTF-16
- ISO-8859-1
- ISO-8859-2
- ISO-8859-3
- ISO-8859-4
- ISO-8859-5
- ISO-8859-6
- ISO-8859-7
- ISO-8859-8
- ISO-8859-9
- ISO-8859-10
- ISO-8859-13
- ISO-8859-14
- ISO-8859-15
- ISO-8859-16
- Windows-1250
- Windows-1251
- Windows-1252
- Windows-1253
- Windows-1254
- Windows-1255
- Windows-1256
- Windows-1257
- Windows-1258
- Windows-874
- CodePage437
- CodePage850
- CodePage852
- CodePage855
- CodePage858
- CodePage860
- CodePage862
- CodePage863
- CodePage865
- CodePage866
- Macintosh
- MacintoshCyrillic
- KOI8R
- KOI8U
- XUserDefined
- ASCII

</details>
