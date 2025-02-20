---
title: Set Operation
id: set-operation
description: Perform addition or subtraction of rows
tags: []
---

Use the SetOperation gem to perform addition or subtraction of rows from models with identical schemas and different data.

### Parameters

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                     | Required |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| Model 1        | First input Source                                                                                                                                                                                                                                                                                                                                                              | True     |
| Model 2        | Second input Source                                                                                                                                                                                                                                                                                                                                                             | True     |
| Model N        | Nth input Source                                                                                                                                                                                                                                                                                                                                                                | False    |
| Operation type | Operation to perform<br/>- `Union`: Returns a model containing rows in any one of the input Sources, while preserving duplicates.<br/>- `Intersect`: Returns a model containing rows in all of the input Sources, while preserving duplicates. <br/>- `Except`: Returns a model containing rows in the first Source, but not in the other Sources, while preserving duplicates. | True     |

:::info
To add more input sources, simply click the **+** icon on the left sidebar.
:::
