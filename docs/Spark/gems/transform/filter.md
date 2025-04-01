---
title: Filter
id: filter
slug: /engineers/filter
description: Filter your data based on a custom filter condition
tags:
  - gems
  - filter
  - where
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

Filters DataFrame based on the provided filter condition

## Parameters

| Parameter        | Description                                                                           | Required |
| :--------------- | :------------------------------------------------------------------------------------ | :------- |
| DataFrame        | Input DataFrame on which the filter condition will be applied.                        | True     |
| Filter Condition | BooleanType column or boolean expression. Supports SQL, Python and Scala expressions. | True     |

## Example

![Example usage of Filter](./img/filter_eg_1.png)

## Spark Code

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
