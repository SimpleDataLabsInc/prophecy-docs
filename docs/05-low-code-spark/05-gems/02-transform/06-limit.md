---
sidebar_position: 6
title: Limit
---

Limits the number of rows in the output

### Parameters
| Parameter        | Meaning                                                                | Required |
|:-----------------|:---------------------------------------------|:---------|
| Dataframe        | Input dataframe                              | True     |
|  Limit           | Number of rows required in output (Allowed range: [0,2<sup>31</sup> -1])          | True     |

### Example
![](./img/limit_eg_1.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def Limit_1(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.limit(10)

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Limit_1 {
  def apply(spark: SparkSession, in: DataFrame): DataFrame = in.limit(10)
}

```

</TabItem>
</Tabs>

````
