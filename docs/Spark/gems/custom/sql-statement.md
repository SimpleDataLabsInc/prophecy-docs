---
title: SQLStatement
id: sql-statement
slug: /engineers/sql-statement
description: Create DataFrames based on custom SQL queries
tags:
  - gems
  - sql
  - custom
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name=""
  python_package_version=""
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1+"
/>

Create one or more DataFrame(s) based on provided SQL queries to run against one or more input DataFrames.

### Parameters

| Parameter    | Meaning                       | Required |
| :----------- | :---------------------------- | :------- |
| DataFrame(s) | Input DataFrame(s)            | True     |
| SQL Queries  | SQL Query for each output tab | True     |

### Example

![SQL example 1](./img/sqlstatement_eg_1.png)

:::info
Number of inputs and outputs can be changed as needed by clicking the `+` button on the respective tab.
:::

### Generated Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def SQLStatement(spark: SparkSession, orders: DataFrame, customers: DataFrame) -> (DataFrame, DataFrame):
    orders.createOrReplaceTempView("orders")
    customers.createOrReplaceTempView("customers")
    df1 = spark.sql("select * from orders inner join customers on orders.customer_id = customers.customer_id")
    df2 = spark.sql("select distinct customer_id from orders")

    return df1, df2

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object SQLStatement {

  def apply(
      spark: SparkSession,
      orders: DataFrame,
      customers: DataFrame
  ): (DataFrame, DataFrame) = {
    orders.createOrReplaceTempView("orders")
    customers.createOrReplaceTempView("customers")
    (
      spark.sql(
        """select * from orders inner join customers on orders.customer_id = customers.customer_id"""
      ),
      spark.sql(
        """select distinct customer_id from orders"""
      )
    )
  }

}

```

</TabItem>
</Tabs>

````
