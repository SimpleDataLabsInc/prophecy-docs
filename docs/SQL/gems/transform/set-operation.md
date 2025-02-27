---
title: SetOperation
id: set-operation
description: Union, Intersect and Difference
tags:
  - gems
  - set
  - union
  - intersect
  - difference
---

<span class="badge">SQL GEM</span><br /><br />

Use the SetOperation gem to perform addition or subtraction of rows from models with identical schemas and different data.

### Parameters

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                     | Required |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| Model 1        | First input Source                                                                                                                                                                                                                                                                                                                                                              | True     |
| Model 2        | Second input Source                                                                                                                                                                                                                                                                                                                                                             | True     |
| Model N        | Nth input Source                                                                                                                                                                                                                                                                                                                                                                | False    |
| Operation type | Operation to perform<br/>- `Union`: Returns a model containing rows in any one of the input Sources, while preserving duplicates.<br/>- `Intersect`: Returns a model containing rows in all of the input Sources, while preserving duplicates. <br/>- `Except`: Returns a model containing rows in the first Source, but not in the other Sources, while preserving duplicates. | True     |

:::info
To add more input Sources, simply click `+` icon on the left sidebar
![Set Operation - Add input dataframe](./img/set_add_inputs.png)
:::

### Examples

---

#### Operation Type - `Union`

![Example usage of Set Operation - Union](./img/set_eg_1.png)

---

#### Operation Type - `Intersect`

![Example usage of Set Operation - Intersect](./img/set_eg_2.png)

---

#### Operation Type - `Except`

![Example usage of Set Operation - Except](./img/set_eg_3.png)
