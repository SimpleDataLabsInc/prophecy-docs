---
title: Aggregate
id: aggregate
description: Understand how to use aggregate gems, use expressions, and use variables
sidebar_position: 1
tags:
  - aggregate
  - groupby
  - data
  - gem
  - transformation
---

Together let's deconstruct a commonly used Transformation, the Aggregate Gem. Follow along in the `HelloWorld_SQL` Project.

## Using the Gem

![1](../img/Snow4.6.1_Aggregate.png)

1. **Open** the HelloWorld_SQL [Project](https://app.prophecy.io/metadata).
2. From the list of Models, select the **Orders** Model. A Model is a series of transformation steps (Gems) that describe how to create a single table or view. The Orders Model defines the steps to create the Orders table.
3. Open the **Transformation** dropdown to see the available Transformation Gems. The Aggregate Gem has already been dragged to the canvas and configured in this HelloWorld_SQL example.
4. Click the arrow to **Run upto the Aggregate Gem**.
5. Preview a **data sample** before the Aggregate Gem.
6. This is the `payments` data sample before the Aggregate Gem. There is one row per payment.
7. Click to **Run upto the Join Gem**.
8. Preview a **data sample** after the Aggregate Gem.
9. This is the `order_payments` data sample after the Aggregate Gem. The individual rows of `payments` have been grouped according to `ORDER_ID`, and the amounts have been summed according to the payment type.
10. Let's see how to use expressions. Click to **Open**.

## Using Expressions

### GroupBy expression

![2](../img/Snow4.6.2_Aggregate.png)

1. There is one **Input** Dataset, `payments`, and we can see the columns and datatypes below.
2. Open the **GroupBy** tab.
3. We can see the Gem is configured to group according to the `order_id` column. Just click any column name listed in **(1) Input** to add a column to the GroupBy expressions.
4. Syntax **errors** are surfaced here as you're designing your Gem (and Model) on the canvas. That's handy so you don't have to run a Job to discover a typo.
5. The **Run** button is available here to test and view data samples. This way you can make sure your Aggregate Gem is configured as desired.

### Aggregate expressions

Next we'll walk through the Aggregate tab, where we have a lot more bells and knobs to turn.
![3](../img/Snow4.6.3_Aggregate.png)

1. Click the **Aggregate** tab, where we'll define our new column names and data manipulation expressions.
2. The list of **Expressions** describe how to manipulate a particular column from the input Dataset.
3. The list of **Target Columns** is the list of column names to be manipulated by the Aggregate Gem and included in the Gem's output.
4. Click **Output** to see the schema of the Dataset resulting from the Aggregate Gem.
5. The `order_id` column is getting passed through the Aggregate step without being changed. Recall this is the column that will be used to group the data. To add any column, just click the column name from the Input list, or start typing the column name and Prophecy Copilot will provide suggestions.
6. Since the `order_id` column was **(5)selected,** then this column appears in the output Dataset. It has a number datatype.
7. Here is an **expression** that includes some data manipulation logic. The amount is summed according to the payment method. `payment_method` is being passed as a configurable variable surrounded by curly braces `{{ }}`. We'll see how to configure the variables `credit_card`, `coupon`, `bank_transfer`, `gift_card` in the next section.
8. These are the **output columns** according to the **(3)Target Column.** `{{ payment_method }}` is a configurable parameter, and each of the payment methods (e.g. GIFT_CARD) has been appended with the string `amount`. Now we are starting to see how the data sample output from the Aggregate Gem will be constructed.
9. Let's **AskAI** to help write a new expression. Type "Calculate customer size based on the amount purchased." Copilot AI generates a SQL expression and we can keep or reject the suggestion.
10. The new expression will be reflected in the Aggregate Gem output, `CUSTOMER_SIZE` column.

## Using Variables

Now let's see how to configure the `payment_methods` variable.

![4](../img/Snow4.6.4_Aggregate.png)

1. Click **Config** to open the configuration screen.
2. We see the option to apply a configuration at several different **levels:** apply to the entire Model, all the Models in the Github folder, or all the Models in the Project. Here we can see there are Configurations that apply to this particular `Orders` Model.
3. See the list of [DBT Defined Configs](https://docs.getdbt.com/reference/configs-and-properties). These are configs every user could employ with their DBT Projects, such as whether to materialize the model as table, view, ephemeral, or incremental. Click the dropdown to select the config of interest, then enter the appropriate value. Hover over the "i" icon for a short description of each DBT Config.
4. See the list of user-defined **Variables**. In our HelloWorld_SQL project, the `payment_methods` variable has been defined with the four **values** shown.
5. Click **Save** after editing the Config for the Model, Folder, or Project.

Click the code view to see the Config encoded in the `dbt_project.yml` file or the `schema.yml/properties.yml` file. Further information can be found in DBT documentation, as Prophecy's Model Config is based on DBT's [Model Configurations](https://docs.getdbt.com/reference/model-configs).

Using Config variables (and DBT Defined Configs) within a Gem is easy. Just wrap the variable name (e.g. `payment_method`) in curly braces `{{ }}` like this: `{{ payment_method }}`.

:::info
To learn more about the Aggregate Gem UI, see [this page](/docs/concepts/project/gems.md) which illustrates features common to all [Gems](/SQL/gems/gems.md).
:::

Here we used the Aggregate Gem from the HelloWorld_SQL Project as a learning guide. What types of Aggregations will you build? [Reach out](/docs/getting-started/getting-help.md) with questions and to let us know how you're using Prophecy.

## From Spark

Allows you to group the data and apply aggregation methods and pivot operation.

## Parameters

| Parameter                     | Description                                                                                                                                                                                                                                     | Required                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| DataFrame                     | Input DataFrame                                                                                                                                                                                                                                 | True                                               |
| Target column (Aggregate Tab) | Output column name of aggregated column                                                                                                                                                                                                         | True                                               |
| Expression (Aggregate Tab)    | Aggregate function expression<br/> Eg: `sum("amount")`, `count(*)`, `avg("amount")`                                                                                                                                                             | True                                               |
| Target column (Group By Tab)  | Output column name of grouped column                                                                                                                                                                                                            | Required if `Pivot Column` is present              |
| Expression (Group By Tab)     | Column expression to group on <br/> Eg: `col("id")`, `month(col("order_date"))`                                                                                                                                                                 | Required if a `Target Column`(Group By) is present |
| Pivot column                  | Column name to pivot                                                                                                                                                                                                                            | False                                              |
| Unique values                 | List of values in `Pivot Column` that will be translated to columns in the output DataFrame                                                                                                                                                     | False                                              |
| Propagate All Input Columns   | If `true`, all columns from the DataFrame would be propagated to output DataFrame. By default all columns apart from ones specified in `group by`, `pivot`, `aggregate` expressions are propagated as `first(col_name)` in the output DataFrame | False                                              |

:::info
Providing `Unique values` while performing pivot operation improves the performance of the operation since Spark does not have to first compute the list of distinct values of `Pivot Column` internally.
:::

## Examples

### Aggregation without Grouping

![Example usage of Aggregate - Aggregation without Grouping](./img/agg_eg_1.png)

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def total_orders(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.agg(count(lit(1)).alias("number_of_orders"))
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object total_orders {
  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.agg(count(lit(1)).as("number_of_orders"))
}
```

</TabItem>
</Tabs>

````

### Aggregation with Grouping

![Example usage of Aggregate - Aggregation with Grouping](./img/agg_eg_2.png)

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

### Pivot Columns

![Example usage of Aggregate - Pivoting](./img/agg_eg_3.png)

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

### Propagate all input Columns

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
