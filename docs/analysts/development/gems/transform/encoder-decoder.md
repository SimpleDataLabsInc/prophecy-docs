---
title: DataEncoderDecoder
id: encode-decode
slug: /analysts/encode-decode
description: Encode and decode data using different techniques
tags:
  - gems
  - analyst
  - transform
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.12+"
/>

The DataEncoderDecoder gem allows you to encode or decode data in selected columns using a variety of standard techniques, including Base64, Hex, and AES encryption. You can transform values in-place or create new output columns with a prefix or suffix.

## Input and Output

| Port    | Description                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **in0** | Input dataset containing one or more string or binary columns to encode or decode.                                             |
| **out** | Output dataset with transformed values. Output columns depend on the [transformed column option](#transformed-column-options). |

## Parameters

Configure the DataEncoderDecoder gem using the following parameters.

| Parameter                       | Description                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Select columns to encode/decode | One or more columns to apply the transformation to.                                                     |
| Select encode/decode option     | The encoding or decoding method to apply. See [Encode/Decode methods](#encodedecode-methods).           |
| Transformed column options      | Choose how the output should be written. See [Transformed column options](#transformed-column-options). |

### Encode/Decode methods

Choose from the following methods:

#### `base64`

Encodes the selected column(s) using Base64.

#### `unbase64`

Decodes Base64-encoded column values.

#### `hex`

Encodes the selected column(s) into hexadecimal format.

#### `unhex`

Decodes hexadecimal-encoded values.

#### `encode`

Encodes the string column(s) using a specified character set.

- **Charset**: Character set to use, such as `UTF-8`.

#### `decode`

Decodes the string column(s) using a specified character set.

- **Charset**: Character set to use, such as `UTF-8`.

#### `aes_encrypt`

Encrypts the selected column(s) using AES encryption.

- **Secret scope**: The name of the Databricks secret scope.
- **Secret key**: The key name within the scope that stores the encryption key.
- **Mode**: AES encryption mode to use.
  - `gcm`
  - `cbc`
  - `ecb`
- **(Optional) AAD scope and key**: For GCM mode, you can specify an Additional Authenticated Data (AAD) scope and key.
- **(Optional) Initialization vector scope and key**: For CBC mode, specify an IV using a secret scope and key.

### Transformed column options

- **Substitute the new columns in place**: Replaces the original column(s) with the transformed values.
- **Add new columns with a prefix/suffix attached**: Adds a new column for each transformed input column, appending a prefix or suffix to the name.

## Example

Assume you have the following dataset:

<div class="table-example">

| ID  | Message      |
| --- | ------------ |
| 1   | Hello world! |
| 2   | Prophecy     |

</div>

Using the `base64` method, adding new columns with the suffix `_encoded`, the output would be:

<div class="table-example">

| ID  | Message      | Message_encoded  |
| --- | ------------ | ---------------- |
| 1   | Hello world! | SGVsbG8gd29ybGQh |
| 2   | Prophecy     | UHJvcGhlY3k=     |

</div>
