---
title: DataMasking
id: data-masking
slug: /analysts/data-masking
description: Obfuscate data in one or more columns
tags:
  - gems
  - analyst
  - prepare
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.12+"
/>

The DataMasking gem allows you to obfuscate sensitive string data in one or more columns. This can be useful for protecting personally identifiable information (PII) or other confidential values. This page describes the available masking methods in the gem and other configuration options.

## Input and Output

The DataMasking gem accepts the following input and output.

| Port    | Description                                                                                                                      |
| ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | Input dataset containing columns with data you want to mask.                                                                     |
| **out** | Output dataset with the masked data. The output schema depends on the [masked column option](#masked-column-options) you choose. |

## Parameters

Configure the DataMasking gem using the following parameters.

| Parameter                          | Description                                                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Select columns to apply masking on | One or more string-type columns from the input dataset to transform. Only `string` columns are supported.    |
| Masking method                     | The method used to obfuscate the data. Jump to [Masking methods](#masking-methods) to learn more.            |
| Masked column options              | Choose how to output the masked data. Jump to [Masked column options](#masked-column-options) to learn more. |

### Masked column options

#### Substitute the new columns in place

The new values will appear in the original column.

#### Add new columns with a prefix/suffix attached

The new values will appear in a new column that will have the original name with a prefix or suffix that you specify.

#### Apply a single hash to all the selected columns at once

There will only be one new output column, regardless of the number of columns to apply masking on. This only applies to the `hash` masking method.

### Masking methods

Choose one of the following techniques to obfuscate string data. Some methods support additional configuration options.

#### `mask`

Replaces characters in each string with substitute characters based on character type. Applies individually to each selected column. This method lets you optionally define the following additional parameters:

| Name                      | Description                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Upper char substitute key | Character to replace uppercase letters. Default is `'X'`. Use `NULL` to keep the original.                       |
| Lower char substitute key | Character to replace lowercase letters. Default is `'x'`. Use `NULL` to keep the original.                       |
| Digit char substitute key | Character to replace digits. Default is `'n'`. Use `NULL` to keep the original.                                  |
| Other char substitute key | Character to replace all other characters. The default is `NULL`, which leaves the original characters unmasked. |

#### `hash`

Applies a hash function to column values. This method will apply the hash in one of two ways:

- The hash function is applied to each input column individually, and a new output column will be created for each input column.
- The hash function is applied to all selected columns combined into a single hash value in a single new output column.

#### `crc32`

Applies the CRC32 hash function to each selected column. This method has no additional parameters.

#### `sha`

Applies the SHA-1 hash function to each selected column. This method has no additional parameters.

#### `sha2`

Applies the SHA-2 hashing algorithm to each selected column. This method lets you select the bit length for masking:

- Bit length can be `224`, `256`, `384`, or `512`.

#### `md5`

Applies the MD5 hash function to each selected column. This method has no additional parameters.

## Example

Assume you have a table that you would like to mask using the `mask` method. Using the default mask parameters, the string `John.Doe123!` will be converted to `Xxxx.Xxxnnn!`.
