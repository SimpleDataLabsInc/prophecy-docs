---
sidebar_position: 2
title: Filter
id: filter
description: Filter your data based on a custom filter condition
tags:
  - gems
  - filter
  - where
---

<h3><span class="badge rounded-pill text-bg-light">Spark Gem</span></h3>

Filters DataFrame based on the provided filter condition

### Parameters

| Parameter        | Description                                                                           | Required |
| :--------------- | :------------------------------------------------------------------------------------ | :------- |
| DataFrame        | Input DataFrame on which the filter condition will be applied.                        | True     |
| Filter Condition | BooleanType column or boolean expression. Supports SQL, Python and Scala expressions. | True     |

### Example

![Example usage of Filter](./img/filter_eg_1.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def Filter_Orders(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.filter(
        (
          ((col("order_category") == lit("Marketing"))
          & ((col("order_status") == lit("Finished")) | (col("order_status") == lit("Approved"))))
          & ~ col("is_discounted")
        )
    )
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Filter_Orders {

  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.filter(
      (
        col("order_category") === lit("Marketing"))
        .and(
          (col("order_status") === lit("Finished"))
            .or(col("order_status") === lit("Approved"))
        )
        .and(!col("is_discounted"))
    )
}
```

</TabItem>
</Tabs>

````
