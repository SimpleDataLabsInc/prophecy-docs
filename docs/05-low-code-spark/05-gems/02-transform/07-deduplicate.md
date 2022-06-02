---
sidebar_position: 7
title: Deduplicate
---

### Parameters
| Parameter        | Meaning                                       | Required                                     |
|:-----------------|:----------------------------------------------|:---------------------------------------------|
| Dataframe        | Input dataframe  | True                                         |
| Row to keep    | Any, First, Last and Unique Only option (Any is selected by default)                            | True                                        |
| Deduplicate columns       | Column name for which duplicate rows have to be deleted           | True |


### Example

![](./img/deduplicate_eg_1.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def dedup(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.dropDuplicates(["tran_id"])

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object dedup {
  def apply(spark: SparkSession, in: DataFrame): DataFrame = {
    import org.apache.spark.sql.expressions.Window
    in.dropDuplicates(List("tran_id"))
  }
}


```

</TabItem>
</Tabs>

````
 

