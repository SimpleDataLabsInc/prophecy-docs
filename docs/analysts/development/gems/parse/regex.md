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

The Regex gem enables pattern matching and text extraction using regular expressions. This gem provides four distinct output methods for processing text data: **Replace**, **Tokenize**, **Parse**, and **Match**.

## Input and Output

The Regex gem uses the following ports:

| Port    | Description                                                                                                                                                                                                                                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | The source table containing text data that needs to be processed with regex patterns.                                                                                                                                                           |
| **out** | The output table containing: <ul><li>Original columns preserved</li><li>New columns created based on the selected output method (Replace, Tokenize, Parse, or Match)</li></ul>The output schema depends on the chosen method and configuration. |

## Parameters

Configure the Regex gem using the following parameters.

### Common configuration

These parameters are available for all regex operations:

| Parameter                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Select Column to Split    | Choose the input column containing the text data you want to process with regex patterns.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Output Method             | Select how the regex operation should handle matches: <ul><li><a href="#replace-configuration">Replace</a>: Substitute matched text with replacement values.</li><li><a href="#tokenize-configuration">Tokenize</a>: Split text into tokens or columns based on regex patterns.</li><li><a href="#parse-configuration">Parse</a>: Extract specific groups from regex matches into separate columns.</li><li><a href="#match-configuration">Match</a>: Determine whether text matches the pattern.</li></ul> |
| Regex                     | Enter your regular expression pattern. The field supports standard regex syntax with capture groups for extracting specific portions of matched text.                                                                                                                                                                                                                                                                                                                                                       |
| Case Insensitive Matching | Enable this option to perform pattern matching without regard to letter case.                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Replace configuration

The **Replace** method substitutes matched portions of text with specified replacement values. When using this method, the gem outputs an additional column with the replaced values.

| Parameter                     | Description                                                                 |
| ----------------------------- | --------------------------------------------------------------------------- |
| Replacement Text              | Specify replacement text or use capture group references.                   |
| Copy Unmatched Text to Output | When enabled, non-matching text is preserved in the appended output column. |

#### Example {#example-replace}

Use this method to standardize phone number formats from `555-123-4567` to `(555) 123-4567`.

- **Select Column to Split**: `phone_number`
- **Regex**: `(\d{3})-(\d{3})-(\d{4})`
- **Replacement text**: `($1) $2-$3`

  This inserts capture groups `1`, `2`, and `3` into the replacement pattern to create the new formatted string. The result is written to a new output column, while the original value is preserved.

**Input table**

<div class="table-example">

| id  | phone_number |
| --- | ------------ |
| 1   | 555-332-1234 |
| 2   | 555-034-9876 |

</div>

**Output table**

<div class="table-example">

| id  | phone_number | phone_number_replaced |
| --- | ------------ | --------------------- |
| 1   | 555-332-1234 | (555) 332-1234        |
| 2   | 555-034-9876 | (555) 034-9876        |

</div>

### Tokenize configuration

The **Tokenize** method splits text into tokens based on regex patterns and capture groups. Each capture group becomes a token. This method creates either new columns or rows depending on your configuration.

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Select Split Strategy                      | Choose how to split the data: <ul><li>**Split to columns**: Breaks text into tokens and places each token into a new column in the same row. Requires a fixed number of columns.</li><li>**Split to rows**: Breaks text into tokens and outputs each token as a new row in a single column. Rows are generated dynamically, making this option useful when the number of tokens varies.</li></ul> |
| Allow Blank Tokens (Split to columns only) | If there are fewer tokens than the defined number of columns, allow empty strings to fill the extra columns. Otherwise, those columns are set to `NULL`.                                                                                                                                                                                                                                          |
| Number of columns (Split to columns only)  | Specify the number of output columns to create for tokenized data.                                                                                                                                                                                                                                                                                                                                |
| For Extra Columns (Split to columns only)  | Define how to handle cases where there are more tokens than columns: ignore, warn, or raise an error.                                                                                                                                                                                                                                                                                             |
| Output Root Name                           | Base name for the new column(s) containing the tokens.                                                                                                                                                                                                                                                                                                                                            |

#### Example {#example-tokenize}

Use this method to parse email addresses into username and domain components.

- **Select Column to Split**: `email`
- **Regex**: `([^@]+)@(.+)`
- **Select Split Strategy**: Split to columns
- **Number of columns**: 2
- **Output root name**: `token`

**Input table**

<div class="table-example">

| id  | email                 |
| --- | --------------------- |
| 1   | `support@example.com` |
| 2   | `sales@company.org`   |

</div>

**Output table**

<div class="table-example">

| id  | email                 | token_1   | token_2       |
| --- | --------------------- | --------- | ------------- |
| 1   | `support@example.com` | `support` | `example.com` |
| 2   | `sales@company.org`   | `sales`   | `company.org` |

</div>

### Parse configuration

The **Parse** method extracts capture groups from regex matches and outputs each group as a separate column. Prophecy automatically generates one output column for every capture group in the regex.

| Parameter        | Description                                                                             |
| ---------------- | --------------------------------------------------------------------------------------- |
| New Column Name  | Specify the name for the new column.                                                    |
| Select Data Type | Choose the data type.                                                                   |
| Regex Expression | View the capture group that will populate the column. **This value cannot be changed.** |

:::info
The number of rows in the **Parse Configuration** table is fixed and corresponds directly to the number of capture groups in the **Regex** field. This cannot be changed.
:::

#### Example {#example-parse}

Use this method to parse phone numbers into `area_code`, `exchange`, and `number` columns.

- **Select Column to Split**: `phone_number`
- **Regex**: `([0-9]{3})-([0-9]{3})-([0-9]{4})`
- **Parse Configuration**:

  | New Column Name | Select Data Type | Regex Expression |
  | --------------- | ---------------- | ---------------- |
  | `area_code`     | String           | `([0-9]{3})`     |
  | `exchange`      | String           | `([0-9]{3})`     |
  | `number`        | String           | `([0-9]{4})`     |

**Input table**

<div class="table-example">

| id  | phone_number |
| --- | ------------ |
| 1   | 555-332-1234 |
| 2   | 555-034-9876 |

</div>

**Output table**

<div class="table-example">

| id  | phone_number | area_code | exchange | number |
| --- | ------------ | --------- | -------- | ------ |
| 1   | 555-332-1234 | 555       | 332      | 1234   |
| 2   | 555-034-9876 | 555       | 034      | 9876   |

</div>

### Match configuration

The **Match** method determines whether text matches the specified regex pattern. Adds a column with 1 for matches and 0 for non-matches.

| Parameter                    | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Column name for match status | Specify the name for the new column containing match results.                                               |
| Error if not Matched         | Enable to raise an error when no match is found. When disabled, non-matching rows will receive a `0` value. |

#### Example {#example-match}

Use this method to validate email addresses and create a binary match column.

- **Select Column to Split**: `email`
- **Regex**: `^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$`
- **Column name for match status**: `is_valid_email`
- **Error if not matched**: `Disabled`

**Input table**

<div class="table-example">

| id  | email                     |
| --- | ------------------------- |
| 1   | `support@example.com`     |
| 2   | `sales.team`              |
| 3   | `engineering@company.org` |

</div>

**Output table**

<div class="table-example">

| id  | email                     | is_valid_email |
| --- | ------------------------- | -------------- |
| 1   | `support@example.com`     | 1              |
| 2   | `sales.team`              | 0              |
| 3   | `engineering@company.org` | 1              |

</div>
