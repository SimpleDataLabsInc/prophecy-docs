---
title: JSON
id: json
description: JSON
sidebar_position: 6
tags:
  - gems
  - file
  - json
---

Read and write JSON formatted files

## Source

### Source Parameters

JSON **_Source_** supports all the available [Spark read options for JSON](https://spark.apache.org/docs/latest/sql-data-sources-json.html).

The below list contains the additional parameters to read a JSON file:

| Parameter    | Description                                                                                                 | Required |
| ------------ | ----------------------------------------------------------------------------------------------------------- | -------- |
| Dataset Name | Name of the Dataset                                                                                         | True     |
| Location     | Location of the file(s) to be loaded <br/> Eg: `dbfs:/data/test.json`                                       | True     |
| Schema       | Schema to applied on the loaded data. Can be defined/edited as JSON or inferred using `Infer Schema` button | True     |

### Example {#source-example}

![JSON source example](./img/json/json_source.gif)

### Generated Code {#source-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def ReadDelta(spark: SparkSession) -> DataFrame:
    return spark.read.format("json").load("dbfs:/FileStore/data/example.json")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object ReadJson {

def apply(spark: SparkSession): DataFrame =
spark.read
.format("json")
.load("dbfs:/FileStore/data/example.json")

}
```

</TabItem>
</Tabs>

````

## Target

### Target Parameters

JSON **_Target_** supports all the available [Spark write options for JSON](https://spark.apache.org/docs/latest/sql-data-sources-json.html).

The below list contains the additional parameters to write a JSON file:

| Parameter    | Description                                                             | Required |
| ------------ | ----------------------------------------------------------------------- | -------- |
| Dataset Name | Name of the Dataset                                                     | True     |
| Location     | Location of the file(s) to be loaded <br/> Eg: `dbfs:/data/output.json` | True     |

### Generated Code {#target-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def write_json(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("json")\
        .mode("overwrite")\
        .save("dbfs:/data/test_output.json")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object write_json {
  def apply(spark: SparkSession, in: DataFrame): Unit =
    in.write
        .format("json")
        .mode("overwrite")
        .save("dbfs:/data/test_output.json")
}
```

</TabItem>
</Tabs>


````

### Producing a single output file

Because of Spark's distributed nature, output files are written as multiple separate partition files. If you need a single output file for some reason (such as reporting or exporting to an external system), use a `Repartition` Gem in `Coalesce` mode with 1 output partition:

![Coalesce example](img/coalesce.gif)

:::caution

Note: This is not recommended for extremely large data sets as it may overwhelm the worker node writing the file.

:::
