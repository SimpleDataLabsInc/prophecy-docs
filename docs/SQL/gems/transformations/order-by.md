---
sidebar_position: 3
title: Order By
id: order-by
description: Sort your data based on one or more Columns
tags:
  - gems
  - order by
  - sort
  - ascending
  - descending
---

Sorts a DataFrame on one or more columns in ascending or descending order.

### Parameters

| Parameter     | Description                                | Required |
| ------------- | ------------------------------------------ | -------- |
| DataFrame     | Input DataFrame to be sorted               | True     |
| Order columns | Columns to sort DataFrame by               | True     |
| Sort          | Order of sorting - ascending or descending | True     |

### Example

![Example usage of OrderBy](./img/orderby_eg_0.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def Sort(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.orderBy(col("name").asc(), col("updated_at").desc())
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Sort {
  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.orderBy(col("updated_at").desc, col("name").asc)
}
```

</TabItem>
</Tabs>


````
