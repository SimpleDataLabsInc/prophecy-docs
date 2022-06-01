---
sidebar_position: 2
title: Filter
---

Generates a dataframe containing rows satisfying the filter condition.

### Parameters
| Parameter        | Meaning                                                                                              | Required |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:---------|
| Dataframe        | Input dataframe on which the filter condition will be applied. It is provided through the input port | True     |
| Filter Condition | BooleanType column or boolean expression. Supports sql, python and scala expressions.                | True     |

### Examples
![](./img/filter_eg_1.png)

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
<TabItem value="java" label="Scala">

```scala
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>

````