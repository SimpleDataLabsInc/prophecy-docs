---
title: JSON
id: json
description: JSON
sidebar_position: 7
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

| Parameter    | Description                                                                                                  | Required |
| ------------ | ------------------------------------------------------------------------------------------------------------ | -------- |
| Dataset Name | Name of the Dataset                                                                                          | True     |
| Location     | Location of the file(s) to be loaded <br/> E.g.: `dbfs:/data/test.json`                                      | True     |
| Schema       | Schema to applied on the loaded data. Can be defined/edited as JSON or inferred using `Infer Schema` button. | True     |

### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234556861-d5b82f1a-883e-4b49-bebe-0ac47511583e.mp4" title="Json Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

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

| Parameter    | Description                                                               | Required |
| ------------ | ------------------------------------------------------------------------- | -------- |
| Dataset Name | Name of the Dataset                                                       | True     |
| Location     | Location of the file(s) to be loaded <br/> E.g.: `dbfs:/data/output.json` | True     |

### Example {#target-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234556999-72c22d9b-c99e-4e6c-8887-b54b8d5d94f1.mp4" title="Json Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

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

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234560215-5f85e164-638c-4cb9-abc6-dbd9cefb0e05.mp4" title="Single Output file" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<br/>

:::caution

Note: This is not recommended for extremely large data sets as it may overwhelm the worker node writing the file.

:::
