---
sidebar_position: 3
title: Row Distributor
---

Create multiple dataframes based on provided filter conditions from an input dataframe.

This is useful for cases where rows from the input dataframe needs to be distributed
into multiple dataframes in different ways for the downstream application/pipeline.

### Parameters
| Parameter         | Meaning                                                                                                  | Required |
|:------------------|:---------------------------------------------------------------------------------------------------------|:---------|
| Dataframe         | Input dataframe for which rows needs to be distributed into multiple dataframes                          | True     |
| Filter Conditions | BooleanType column or boolean expression for each output tab. Supports sql, python and scala expressions | True     |

### Example
![](./img/rowdistributor_eg_1.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def RowDistributor(spark: SparkSession, in0: DataFrame) -> (DataFrame, DataFrame, DataFrame):
    df1 = in0.filter((col("order_status") == lit("Started")))
    df2 = in0.filter((col("order_status") == lit("Approved")))
    df3 = in0.filter((col("order_status") == lit("Finished")))

    return df1, df2, df3
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object RowDistributor {

  def apply(
    spark: SparkSession,
    in:    DataFrame
  ): (DataFrame, DataFrame, DataFrame) =
    (in.filter(col("order_status") === lit("Started")),
     in.filter(col("order_status") === lit("Approved")),
     in.filter(col("order_status") === lit("Finished"))
    )

}
```

</TabItem>
</Tabs>

````
