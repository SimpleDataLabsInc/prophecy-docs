---
sidebar_position: 2
title: Script
id: script
tags:
  - custom
  - code
description: Provide a place to use a SparkSession and whatever code you wish to use
---

# Script

Provides a `SparkSession` and allows you to run custom code

### Parameters

| Parameter           | Meaning                    | Required |
| ------------------- | -------------------------- | -------- |
| Input DataFrame(s)  | Input DataFrame(s)         | False    |
| Output DataFrame(s) | Output DataFrame(s)        | False    |
| Code                | Custom code to be executed | True     |

:::info To remove input/output DataFrame(s), simply click  icon on the left sidebar

![Script - Remove inputs](img/script\_remove\_inputs.png) :::

### Schema

When executing a custom script Gem, the output schema is not known by Prophecy so it must be inferred from a sample computation result. Click the `Custom Schema` button and `Infer from cluster` as shown in the **Gems --> Outputs** description [here.](../../../concepts/gems.md#inputs-outputs) The schema will be inferred according to the script and the Spark version running on the connected cluster.

### Examples

***

#### Script Gem with Input and Output: Un-pivoting a DataFrame

We'll perform the `unpivot` operation using our custom code

![Script - Unpivot](img/script\_unpivot.png)

***

#### Script Gem with only Output: Generating a DataFrame

We'll use the provided `SparkSession` to create and return a DataFrame

:::note Since we removed the input port, we don't see input DataFrame in the method signature :::

![Script - Unpivot](img/script\_generate\_df.png)
