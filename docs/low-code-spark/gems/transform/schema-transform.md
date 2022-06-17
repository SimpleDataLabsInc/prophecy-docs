---
sidebar_position: 5
title: Schema Transform
id: schema-transform
description: Add, Edit, Rename or Drop Columns
tags:
  - gems
  - withColumn
  - transform
  - schema
---

SchemaTransform is used to add, edit, rename or drop columns from the incoming dataframe.

:::info
Unlike Reformat which is a set operation where all the transforms are applied in parallel, transformations applied here are in order.
Reformat is a SQL select and is preferable when making many changes.
:::

### Parameters

| Parameter       | Description                                                                | Required                                     |
| :-------------- | :------------------------------------------------------------------------- | :------------------------------------------- |
| Dataframe       | Input dataframe                                                            | True                                         |
| Operation       | `Add/Replace Column`, `Rename Column` and `Drop Column`                    | Required if a transformation is added        |
| New Column      | Output column name (when Add/Replace operation is selected)                | Required if `Add/Replace Column` is selected |
| Expression      | Expression to generate new column (when Add/Replace operation is selected) | Required if `Add/Replace Column` is selected |
| Old Column Name | Column to be renamed (when Rename operation is selected)                   | Required if `Rename Column` is selected      |
| New Column Name | Output column name (when Rename operation is selected)                     | Required if `Rename Column` is selected      |
| Column to drop  | Column to be dropped (when Drop operation is selected)                     | Required if `Drop Column` is selected        |

### Example

![Example usage of SchemaTransform](./img/schemaTransform_eg_1.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def transform(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0\
        .withColumn("business_date", to_date(lit("2022-05-05"), "yyyy-MM-dd"))\
        .withColumnRenamed("bonus_rate", "bonus")\
        .drop("slug")

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object transform {
  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.withColumn("business_date", to_date(lit("2022-05-05"), "yyyy-MM-dd"))
      .withColumnRenamed("bonus_rate", "bonus")
      .drop("slug")
}
```

</TabItem>
</Tabs>

````
