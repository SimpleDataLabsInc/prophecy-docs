---
sidebar_position: 1
title: Reformat
id: reformat
description: Select one or more columns or values using expressions and functions.
tags:
  - gems
  - select
  - reformat
  - transform
---

Edits one or more column names or values, by using expressions and functions. It's useful when we need to extract only the required columns or make changes column-wise.

### Parameters

| Parameter     | Description                                   | Required                                 |
| :------------ | :-------------------------------------------- | :--------------------------------------- |
| DataFrame     | Input DataFrame on which changes are required | True                                     |
| Target column | Output column name                            | False                                    |
| Expression    | Expression to compute target column           | Required if a `Target column` is present |

:::info
If no columns are selected, then all columns are passed through to the output
:::

### Example

![Example usage of Reformat](./img/reformat_eg_1.png)

### Spark Code

Reformat converts to a SQL `Select` or in relational terms into a projection, unlike `SchemaTransform` Gem which uses underlying `withColumn` construct

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def Reformat(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.select(
        col("id"),
        col("email").alias("email_address"),
        col("name"),
        col("updated_at"),
        concat_ws("$$$", col("address_line1"), col("address_line2"), col("postal_code"))
            .alias("address_string")
    )
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Reformat {

  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.select(
      col("id"),
      col("email").as("email_address"),
      col("name"),
      col("updated_at"),
      expr("concat_ws('$$$', address_line1, address_line2, postal_code)").as("address_string")
    )
 }

```

</TabItem>
</Tabs>

````