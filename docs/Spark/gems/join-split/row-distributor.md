---
sidebar_position: 3
title: RowDistributor
id: row-distributor
description: Create multiple DataFrames based on filter conditions
tags:
  - gems
  - split
  - filter
  - row distributor
---

import Requirements from "../\_gem-requirements.mdx";

<h3><span class="badge">Spark Gem</span></h3>

Use the RowDistributor Gem to create multiple DataFrames based on provided filter conditions from an input DataFrame.

This is useful for cases where rows from the input DataFrame needs to be distributed into multiple DataFrames in different ways for downstream Gems.

## Requirements

<Requirements packagename="ProphecySparkBasicPython"
  packageversion="0.0.1"
  scalalib=""
  pythonlib=""
  packageversion122="Supported 0.0.1+"
  packageversion143="Supported 0.0.1+"
  packageversion154="Supported 0.0.1+"
/>

### Parameters

| Parameter         | Description                                                                                               | Required |
| ----------------- | --------------------------------------------------------------------------------------------------------- | -------- |
| DataFrame         | Input DataFrame for which rows needs to be distributed into multiple DataFrames                           | True     |
| Filter Conditions | Boolean Type column or boolean expression for each output tab. Supports SQL, Python and Scala expressions | True     |

### Example

![Row distributor 1](./img/rowdistributor_eg_1.png)

:::info
Number of outputs can be changed as needed by clicking the `+` button.
:::

### Generated Code

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
