---
sidebar_position: 6
title: Pivot
id: pivot
description: a
tags:
  - gems
  - pivot
---

a

Taken from Limit:

### Parameters

| Parameter | Description                                                               | Required |
| :-------- | :------------------------------------------------------------------------ | :------- |
| DataFrame | Input DataFrame                                                           | True     |
| Limit     | Number of rows required in output (Allowed range: [0, 2<sup>31</sup> -1]) | True     |

### Example

![Example usage of Limit](./img/limit_eg_1.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def limit(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.limit(10)

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object limit {
  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.limit(10)
}
```

</TabItem>
</Tabs>

````
