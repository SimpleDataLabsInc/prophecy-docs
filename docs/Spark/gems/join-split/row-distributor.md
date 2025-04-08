---
title: RowDistributor
id: row-distributor
slug: /engineers/row-distributor
description: Create multiple DataFrames based on filter conditions
tags:
  - gems
  - split
  - filter
  - row distributor
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1+"
/>

Use the RowDistributor gem to create multiple DataFrames based on provided filter conditions from an input DataFrame.

This is useful for cases where rows from the input DataFrame needs to be distributed into multiple DataFrames in different ways for downstream gems.

## Parameters

| Parameter         | Description                                                                                               | Required |
| ----------------- | --------------------------------------------------------------------------------------------------------- | -------- |
| DataFrame         | Input DataFrame for which rows needs to be distributed into multiple DataFrames                           | True     |
| Filter Conditions | Boolean Type column or boolean expression for each output tab. Supports SQL, Python and Scala expressions | True     |

## Example

![Row distributor 1](./img/rowdistributor_eg_1.png)

:::info
Number of outputs can be changed as needed by clicking the `+` button.
:::

## Generated Code

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
