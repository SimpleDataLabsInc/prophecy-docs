---
title: CompareColumns gem
id: compare-columns
slug: /engineers/compare-columns
description: Compare columns between two dataframes
tags:
  - gems
  - compare
  - diff
  - compare-columns
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

The CompareColumns gem lets you compare columns between two DataFrames based on the key id columns defined.

## Parameters

| Parameter                                                 | Description                                                                                                 | Required |
| :-------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------- |
| DataFrame 1                                               | First input DataFrame                                                                                       | True     |
| DataFrame 2                                               | Second input DataFrame                                                                                      | True     |
| ID columns to retain(Select Id Columns)                   | List of columns that are used joining two dataframes                                                        | True     |
| Output Column Name(Select Output Columns)                 | In the output, alias name of the column name that was compared among dataframes                             | True     |
| Match Count Column Name(Select Output Columns)            | In the output, alias name of the column that shows the count of rows that matched between two dataframes    | True     |
| Mismatch Count Column Name(Select Output Columns)         | In the output, alias name of the column that shows the count of rows that mismatched between two dataframes | True     |
| Mismatch Example Left Column Name(Select Output Columns)  | In the output, alias name of the column displaying an incorrect left column value                           | True     |
| Mismatch Example Right Column Name(Select Output Columns) | In the output, alias name of the column displaying an incorrect right column value                          | True     |
| Mismatch Example ID Column Prefix(Select Output Columns)  | In the output, alias name of the ID column value that mismatched between two dataframes                     | True     |

### Example - Compare columns of two DataFrames

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/23c23ea9-e98b-4624-91a8-597cfaf0e647" title="Compare columns" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

### Example code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def CompareColumns_1(spark: SparkSession, in0: DataFrame, in1: DataFrame) -> DataFrame:
    joined = exploded1\
                 .join(
                   exploded2,
                   reduce(
                     lambda a, c: a & c,
                     [col(f"exploded1.column_name") == col(f"exploded2.column_name"),                       col(f"exploded1.customer_id") == col(f"exploded2.customer_id")],
                     lit(True)
                   ),
                   "full_outer"
                 )\
                 .select(
                   coalesce(col(f"exploded1.column_name"), col(f"exploded2.column_name")).alias("column_name"),
                   coalesce(col(f"exploded1.customer_id"), col(f"exploded2.customer_id")).alias("customer_id"),
                   col(
                       f"exploded1.##value##"
                     )\
                     .alias(
                     "##left_value##"
                   ),
                   col(
                       f"exploded2.##value##"
                     )\
                     .alias(
                     "##right_value##"
                   )
                 )\
                 .withColumn(
                   "match_count",
                   when(
                       coalesce(
                         (
                           col("##left_value##")
                           == col(
                             "##right_value##"
                           )
                         ),
                         (
                           col(
                               "##left_value##"
                             )\
                             .isNull()
                           & col(
                               "##right_value##"
                             )\
                             .isNull()
                         )
                       ),
                       lit(1)
                     )\
                     .otherwise(lit(0))
                 )\
                 .withColumn(
        "mismatch_count",
        when(
            coalesce(
              (
                col("##left_value##")
                != col(
                  "##right_value##"
                )
              ),
              ~ (
                col(
                    "##left_value##"
                  )\
                  .isNull()
                & col(
                    "##right_value##"
                  )\
                  .isNull()
              )
            ),
            lit(1)
          )\
          .otherwise(lit(0))
                 )
    mismatchExamples = joined\
                           .select(
                             col("column_name"),
                             col("customer_id"),
                             lit(0).alias("match_count"),
                             lit(0).alias("mismatch_count"),
                             col(
                                 "##left_value##"
                               )\
                               .alias("mismatch_example_left"),
                             col(
                                 "##right_value##"
                               )\
                               .alias("mismatch_example_right")
                           )\
                           .dropDuplicates(["column_name"])

    return joined\
        .union(mismatchExamples)\
        .groupBy("column_name")\
        .agg(
          sum("match_count").alias("match_count"),
          sum("mismatch_count").alias("mismatch_count"),
          first(col("mismatch_example_left"), ignorenulls = True).alias("mismatch_example_left"),
          first(col("mismatch_example_right"), ignorenulls = True).alias("mismatch_example_right"),
          first(
              when(coalesce(col("mismatch_example_left"), col("mismatch_example_right")).isNotNull(), col("customer_id"))\
                .otherwise(lit(None)),
              ignorenulls = True
            )\
            .alias("mismatch_example_customer_id")
        )\
        .orderBy(col("mismatch_count").desc(), col("column_name"))

```

</TabItem>

<TabItem value="scala" label="Scala">

```scala
object CompareColumns_1 {
   def apply(context: Context, in0: DataFrame, in1: DataFrame): DataFrame = {
    import org.apache.spark.sql.expressions.Window
    val joined = in0
      .select(
        col("customer_id"),
        explode_outer(
          map(
            (in0.columns.toSet -- List("customer_id").toSet).toSeq.flatMap(c =>
              List(lit(c), col(c).cast("string"))
            ): _*
          )
        ).as(List("column_name", "##value##"))
      )
      .as("exploded1")
      .join(
        in1
          .select(
            col("customer_id"),
            explode_outer(
              map(
                (in0.columns.toSet -- List("customer_id").toSet).toSeq
                  .flatMap(c => List(lit(c), col(c).cast("string"))): _*
              )
            ).as(List("column_name", "##value##"))
          )
          .as("exploded2"),
        lit(true)
          .and(col("exploded1.column_name") === col("exploded2.column_name"))
          .and(col("exploded1.customer_id") === col("exploded2.customer_id")),
        "full_outer"
      )
      .select(
        coalesce(col("exploded1.column_name"), col("exploded2.column_name"))
          .as("column_name"),
        coalesce(col("exploded1.customer_id"), col("exploded2.customer_id"))
          .as("customer_id"),
        col("exploded1.##value##").as("##left_value##"),
        col("exploded2.##value##").as("##right_value##")
      )
      .withColumn(
        "match_count",
        when(
          coalesce(col("##left_value##") === col("##right_value##"),
                   col("##left_value##").isNull && col("##right_value##").isNull
          ),
          lit(1)
        ).otherwise(lit(0))
      )
      .withColumn(
        "mismatch_count",
        when(coalesce(
               col("##left_value##") =!= col("##right_value##"),
               !(col("##left_value##").isNull && col("##right_value##").isNull)
             ),
             lit(1)
        ).otherwise(lit(0))
      )
    joined
      .groupBy("column_name")
      .agg(
        sum("match_count").as("match_count"),
        sum("mismatch_count").as("mismatch_count"),
        first(col("mismatch_example_left"), ignoreNulls = true)
          .as("mismatch_example_left"),
        first(col("mismatch_example_right"), ignoreNulls = true)
          .as("mismatch_example_right"),
        first(when(coalesce(col("mismatch_example_left"),
                            col("mismatch_example_right")
                   ).isNotNull,
                   col("customer_id")
              ).otherwise(lit(null)),
              ignoreNulls = true
        ).as("mismatch_example_customer_id")
      )
      .orderBy(col("mismatch_count").desc, col("column_name"))
   }
}
```

</TabItem>
</Tabs>

````

Below are the steps that are performed to compare two DataFrames in compare column gem:

- Pivot the DataFrame to get the key column's, compare column name and value
- Join the pivoted DataFrames and compare the column value using key column's
- Calculate the match and mismatch record counts

:::note
Repartition the DataFrames as they will be exploded and joined with each other
:::
