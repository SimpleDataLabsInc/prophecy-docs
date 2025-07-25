---
title: Aggregate
id: aggregate
slug: /engineers/aggregate
description: Group data and apply aggregation methods or pivot operations
tags:
  - gems
  - aggregate
  - group by
  - sum
  - count
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

Allows you to group the data and apply aggregation methods and pivot operation.

## Input and Output

The Aggregate gem accepts the following input and output

| Port    | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| **in0** | Input DataFrame that contains data to be aggregated.                      |
| **out** | Output DataFrame that includes the key column and the aggregated columns. |

## Parameters

Configure the Aggregate gem using the following parameters. Each section describes a different tab of the gem configuration.

### Aggregate

| Parameter                   | Description                                                                                                                                                                                                                                       | Required |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Target Column               | Output column name of aggregated column.                                                                                                                                                                                                          | True     |
| Expression                  | Aggregate function expression that generates the target column values.<br/>Example: `sum(amount)`, `count(*)`, `avg(amount)`                                                                                                                      | True     |
| Propagate All Input Columns | If `true`, all columns from the DataFrame would be propagated to output DataFrame. By default, all columns apart from ones specified in `group by`, `pivot`, `aggregate` expressions are propagated as `first(col_name)` in the output DataFrame. | False    |

### Group By

| Parameter     | Description                                                                                          | Required                               |
| ------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Target Column | Output column name of the key column for grouping.                                                   | Required if [Pivot](#pivot) is present |
| Expression    | Expression that generates how to group the data. <br/>In many cases, this is simply the column name. | Required for each target column.       |

### Pivot

| Parameter     | Description                                                                                                                                                                                                                                                                | Required |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Pivot Column  | Name of the column whose unique values become the new column headers.                                                                                                                                                                                                      | False    |
| Unique values | List of values in the pivot column that will be translated to columns in the output DataFrame. Providing `Unique values` while performing pivot operation improves performance since Spark does not have to first compute the list of distinct values of the pivot column. | False    |

### Advanced

The Advanced tab lets you configure multiple aggregation options using a concise syntax. This is a lightweight alternative to writing full PySpark code.

## Examples

These examples demonstrate common use cases of the Aggregate gem, showing how to configure aggregation operations with and without grouping, how to perform pivot operations, and how to propagate all input columns to the output. Each example includes the relevant gem parameter settings and the equivalent generated PySpark and Scala code.

### Aggregation without grouping

This example counts the total number of rows in the dataset, producing a single aggregated value without any grouping.

| Tab       | Parameter     | Value              |
| --------- | ------------- | ------------------ |
| Aggregate | Target Column | `number_of_orders` |
| Aggregate | Expression    | `count(*)`         |

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

This gem configuration is compiled into the following PySpark code:


```py
def total_orders(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.agg(count(lit(1)).alias("number_of_orders"))
```

</TabItem>
<TabItem value="scala" label="Scala">

This gem configuration is compiled into the following Scala code:


```scala
object total_orders {
  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.agg(count(lit(1)).as("number_of_orders"))
}
```

</TabItem>
</Tabs>

````

### Aggregation with grouping

This example counts orders per month by extracting and grouping on the month and year from the `order_date`.

| Tab       | Parameter     | Value                                                                |
| --------- | ------------- | -------------------------------------------------------------------- |
| Aggregate | Target Column | `number_of_orders`                                                   |
| Aggregate | Expression    | `count(*)`                                                           |
| Group By  | Target Column | `order_month(MM/YYYY)`                                               |
| Group By  | Expression    | `concat(month(col("order_date")), lit("/"), year(col("order_date"))` |

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def orders_by_date(spark: SparkSession, in0: DataFrame) -> DataFrame:
    df1 = in0.groupBy(concat(month(col("order_date")), lit("/"), year(col("order_date")))
                      .alias("order_month(MM/YYYY)"))
    return df1.agg(count(lit(1)).alias("number_of_orders"))
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object orders_by_date {
  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.groupBy(
        concat(month(col("order_date")), lit("/"), year(col("order_date")))
          .as("order_month(MM/YYYY)")
      )
      .agg(count(lit(1)).as("number_of_orders"))
}
```
</TabItem>
</Tabs>

````

### Pivot the data

This example shows how to pivot `order_status` values into separate columns while grouping by month and aggregating the number of orders.

| Tab       | Parameter     | Value                                                                |
| --------- | ------------- | -------------------------------------------------------------------- |
| Aggregate | Target Column | `number_of_orders`                                                   |
| Aggregate | Expression    | `count(*)`                                                           |
| Group By  | Target Column | `order_month(MM/YYYY)`                                               |
| Group By  | Expression    | `concat(month(col("order_date")), lit("/"), year(col("order_date"))` |
| Pivot     | Pivot Column  | `order_status`                                                       |
| Pivot     | Unique Values | `Finished`, `Approved`, `Pending`, `Started`                         |

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def orders_by_date_N_status(spark: SparkSession, in0: DataFrame) -> DataFrame:
    df1 = in0.groupBy(concat(month(col("order_date")), lit("/"), year(col("order_date"))).alias("order_month(MM/YYYY)"))
    df2 = df1.pivot("order_status", ["Approved", "Finished", "Pending", "Started"])
    return df2.agg(count(lit(1)).alias("number_of_orders"))
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object orders_by_date_N_status {
  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.groupBy(
        concat(month(col("order_date")), lit("/"), year(col("order_date")))
          .as("order_month(MM/YYYY)")
      )
      .pivot(col("order_status"),
             List("Approved", "Finished", "Pending", "Started")
      )
      .agg(count(lit(1)).as("number_of_orders"))
}
```
</TabItem>
</Tabs>

````

### Propagate all input columns

This option in used to propagate all columns from input DataFrame to output DataFrame.
By default `first(col_name)` is used as aggregate function for columns not specified in `group by`, `pivot`, `aggregate` expressions.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/185245719-2be22f30-c84f-4b85-8712-be626c77e4e4.mp4" title="Aggregate Propagate columns" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def Aggregate_1(spark: SparkSession, in0: DataFrame) -> DataFrame:
    df1 = in0.groupBy(col("customer_id"))

    return df1.agg(
        *[first(col("order_date")).alias("order_date")],
        *[
          first(col(x)).alias(x)
          for x in in0.columns
          if x not in ["order_date", "customer_id"]
        ]
    )
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Aggregate {

  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.agg(first(col("order_date")).as("order_date"),
           List() ++ in.columns.toList
             .diff(List("order_date", "customer_id"))
             .map(x => first(col(x)).as(x)): _*
    )

}
```
</TabItem>
</Tabs>

````
