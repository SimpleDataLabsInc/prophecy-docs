---
sidebar_position: 4
title: Compare Columns
id: compare-columns
description: Compare columns between two dataframes
tags:
  - gems
  - compare
  - diff
  - compare-columns
---

Compare columns between two dataframe based on the key id columns defined

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

### Generated code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def CompareColumns_1(spark: SparkSession, in0: DataFrame, in1: DataFrame) -> DataFrame:
    from pyspark.sql.functions import lit, sum, first, explode_outer, create_map, when, coalesce, col, row_number
    from pyspark.sql.window import Window
    from functools import reduce
    valueColumnsMap = []

    for vColumn in set(in0.columns).difference({"customer_id"}):
        valueColumnsMap.extend([lit(vColumn), col(vColumn).cast("string")])

    selectCols = [col("customer_id"),                   explode_outer(create_map(*valueColumnsMap))\
                    .alias(
                    "column_name",
                    "##value##"
                  )]
    df1 = in0.select(*selectCols)
    exploded1 = df1.alias("exploded1")
    df2 = in1.select(*selectCols)
    exploded2 = df2.alias("exploded2")
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
                           .filter(col("mismatch_count").__gt__(lit(0)))\
                           .withColumn(
                             "##row_number###",
                             row_number()\
                               .over(Window.partitionBy(col("column_name"), col("customer_id")).orderBy(col("customer_id")))
                           )\
                           .filter(
                             (
                               col("##row_number###")
                               == lit(1)
                             )
                           )\
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
        .drop(
          "##left_value##"
        )\
        .drop(
          "##right_value##"
        )\
        .withColumn("mismatch_example_left", lit(None))\
        .withColumn("mismatch_example_right", lit(None))\
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
      .drop("##left_value##")
      .drop("##right_value##")
      .withColumn("mismatch_example_left",  lit(null))
      .withColumn("mismatch_example_right", lit(null))
      .union(
        joined
          .filter(col("mismatch_count").gt(lit(0)))
          .withColumn("##row_number###",
                      row_number.over(
                        Window
                          .partitionBy(col("column_name"), col("customer_id"))
                          .orderBy(col("customer_id"))
                      )
          )
          .filter(col("##row_number###") === lit(1))
          .select(
            col("column_name"),
            col("customer_id"),
            lit(0).as("match_count"),
            lit(0).as("mismatch_count"),
            col("##left_value##").as("mismatch_example_left"),
            col("##right_value##").as("mismatch_example_right")
          )
          .dropDuplicates("column_name")
      )
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
