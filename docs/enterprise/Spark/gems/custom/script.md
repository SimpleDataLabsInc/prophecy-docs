---
title: Script gem
sidebar_label: Script
id: script
slug: /engineers/script
description: Provide a place to use a SparkSession and whatever code you wish to use
tags:
  - custom
  - code
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name=""
  python_package_version=""
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1+"
/>

Provides a `SparkSession` and allows you to run custom PySpark code.

## Parameters

| Parameter           | Meaning                    | Required |
| :------------------ | :------------------------- | :------- |
| Input DataFrame(s)  | Input DataFrame(s)         | False    |
| Output DataFrame(s) | Output DataFrame(s)        | False    |
| Code                | Custom code to be executed | True     |

:::info
To edit or remove input and output DataFrame(s), click on the **pen** icon next to **Ports** to open edit mode.
:::

## Schema

When executing a custom script gem, the output schema is not known by Prophecy so it must be inferred from a sample computation result. Click the `Custom Schema` button and `Infer from cluster` as shown in the gem [output port tab](/engineers/gems#output-ports). The schema will be inferred according to the script and the Spark version running on the connected cluster.

## Examples

---

### Script gem with Input and Output: Un-pivoting a DataFrame

We'll perform the `unpivot` operation using our custom code

![Script - Unpivot](./img/script_unpivot.png)

---

### Script gem with only Output: Generating a DataFrame

We'll use the provided `SparkSession` to create and return a DataFrame

:::note
Since we removed the input port, we don't see input DataFrame in the method signature
:::

![Script - Unpivot](./img/script_generate_df.png)
