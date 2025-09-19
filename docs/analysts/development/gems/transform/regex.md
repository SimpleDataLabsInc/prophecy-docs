---
title: Regex gem
sidebar_label: Regex
id: regex
slug: /analysts/regex
description: Pattern matching and text extraction using regular expressions
tags:
  - gems
  - analyst
  - transform
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.5+"
/>

The Regex gem enables pattern matching and text extraction using regular expressions. This gem provides four distinct output methods for processing text data: Replace, Tokenize, Parse, and Match.

## Input and Output

The Regex gem uses the following input and output ports.

| Port    | Description                                                                                                                                                                                                                                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | The source table containing text data that needs to be processed with regex patterns.                                                                                                                                                           |
| **out** | The output table containing: <ul><li>Original columns preserved</li><li>New columns created based on the selected output method (Replace, Tokenize, Parse, or Match)</li></ul>The output schema depends on the chosen method and configuration. |

## Parameters

Configure the Regex gem using the following parameters.

### Select Column to Split

Choose the input column containing the text data you want to process with regex patterns.

### Output Method

Select how the regex operation should handle matches:

- [Replace](#replace-configuration): Substitute matched text with replacement values.
- [Tokenize](#tokenize-configuration): Split text into tokens or columns based on regex patterns.
- [Parse](#parse-configuration): Extract specific groups from regex matches into separate columns.
- [Match](#match-configuration): Determine whether text matches the pattern.

### Common Configuration

| Parameter                 | Description                                                                                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regex                     | Enter your regular expression pattern. The field supports standard regex syntax with capture groups for extracting specific portions of matched text. Example: `(\d{3})-(\d{3})-(\d{4})` |
| Case Insensitive Matching | Enable this option to perform pattern matching without regard to letter case.                                                                                                            |

#### Replace Configuration

The Replace method substitutes matched portions of text with specified replacement values. Use this when you need to clean or standardize text data.

| Parameter                     | Description                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------- |
| Replacement Text              | Specify replacement text or use capture group references (marked groups). Example: `($1) $2-$3` |
| Copy Unmatched Text to Output | Preserve text that doesn't match the pattern.                                                   |

> Example: Use this method to standardize phone number formats from `555-123-4567` to `(555) 123-4567`.

#### Tokenize Configuration

The Tokenize method splits text into structured components based on regex patterns. This method creates either new columns or rows depending on your configuration.

| Parameter             | Description                                                                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Select Split Strategy | Choose how to split the data. <ul><li>Split to columns: Values will be split into individual rows in one or more columns.</li><li>Split to rows: Values will be split into individual rows in one column.</li></ul> |
| Allow Blank Tokens    | Enable to include empty matches in the output                                                                                                                                                                       |
| Number of columns     | Specify how many columns to create for tokenized data.                                                                                                                                                              |
| For Extra Columns     | Choose how to handle tokens beyond the specified column count.                                                                                                                                                      |
| Output Root Name      |                                                                                                                                                                                                                     |

> Example: Use this method to extract quoted text from `"Hello world" and "Goodbye"` into separate columns.

#### Parse Configuration

The Parse method extracts specific capture groups from regex matches into separate columns. You define the columns for each group with a specified data type.

| Parameter        | Description                                  |
| ---------------- | -------------------------------------------- |
| New Column Name  | Specify the name for the new column.         |
| Select Data Type | Choose the data type.                        |
| Regex Expression | Enter the regex pattern with capture groups. |

> Example: Use this method to parse phone number `555-123-4567` into separate `area_code`, `exchange`, and `number` columns.

#### Match Configuration

The Match method determines whether text matches the specified regex pattern, adding a new column containing `1` if the regex matched and `0` if it did not match.

| Parameter                    | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Column name for match status | Specify the name for the new column containing match results.                                               |
| Error if not Matched         | Enable to raise an error when no match is found. When disabled, non-matching rows will receive a `0` value. |

> Example: Use this method to validate email addresses and create a binary column indicating whether each email is properly formatted.

## Additional examples

| Pattern                   | Output method | Use case                     | Example                                                     |
| ------------------------- | ------------- | ---------------------------- | ----------------------------------------------------------- |
| `\b[A-Z]{2}\d{4}\b`       | Replace       | Product code formatting      | Convert `AB1234` to `AB-1234`                               |
| `(\d{4})-(\d{2})-(\d{2})` | Parse         | Date extraction (YYYY-MM-DD) | Extract 2023-12-25 into year, month, day                    |
| `\$(\d+(?:\.\d{2})?)`     | Parse         | Currency extraction          | Extract $123.45 into amount column                          |
| `[A-Za-z]+`               | Tokenize      | Word extraction              | Split "Hello World Test" into individual words              |
| `^\d{5}(-\d{4})?$`        | Match         | ZIP code validation          | Validate US ZIP codes and return 1 for valid, 0 for invalid |
