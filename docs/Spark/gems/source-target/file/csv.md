---
title: CSV
id: csv
description: CSV
sidebar_position: 2
tags:
  - gems
  - file
  - csv
---

Allows you to read or write delimited files such as CSV (Comma-separated Values) or TSV (Tab-separated Values).

## Source

### Source Parameters

CSV **_Source_** supports all the available [Spark read options for CSV](https://spark.apache.org/docs/latest/sql-data-sources-csv.html).

The below list contains the additional parameters to read a CSV file:

| Parameter    |     | Description                                                                                                  | Required |
| ------------ | --- | ------------------------------------------------------------------------------------------------------------ | -------- |
| Dataset Name |     | Name of the Dataset                                                                                          | True     |
| Location     |     | Location of the file(s) to be loaded <br/> E.g.: `dbfs:/data/test.csv`                                       | True     |
| Schema       |     | Schema to applied on the loaded data. Can be defined/edited as JSON or inferred using `Infer Schema` button. | True     |

### Example {#source-example}

```mdx-code-block
import App from '@site/src/components/slider';

export const ImageData = [
  {
    "image":"/img/csv/load/1.png",
    "description":<h3 style={{padding:'10px'}}>Step 1 - Create Source Component</h3>,
  },
  {
    "image":"/img/csv/load/2.png",
    "description":<h3 style={{padding:'10px'}}>Step 2 - Click 'Create Dataset'</h3>,
  },
  {
    "image":"/img/csv/load/3.png",
    "description":<h3 style={{padding:'10px'}}> Step 3 - Enter 'Dataset Name' and select the CSV format</h3>
  },
  {
    "image":"/img/csv/load/4.png",
    "description":<h3 style={{padding:'10px'}}>Step 4 - Navigate to the desired CSV source file</h3>,
  },
  {
    "image":"/img/csv/load/5.png",
    "description":<h3 style={{padding:'10px'}}>Step 5 - Customize the properties and update schema as per your needs</h3>,
  },
  {
    "image":"/img/csv/load/6.png",
    "description":<h3 style={{padding:'10px'}}>Step 6 - Hit 'Refresh' to preview data </h3>,
  },
];

<App ImageData={ImageData}></App>
```

### Generated Code {#source-code}

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def load_csv(spark: SparkSession) -> DataFrame:
    return spark.read\
        .schema(
          StructType([
            StructField("order_id", IntegerType(), True),
            StructField("customer_id", IntegerType(), True),
            StructField("order_status", StringType(), True),
            StructField("order_category", StringType(), True),
            StructField("order_date", DateType(), True),
            StructField("amount", DoubleType(), True)
        ])
        )\
        .option("header", True)\
        .option("quote", "\"")\
        .option("sep", ",")\
        .csv("dbfs:/Prophecy/anshuman@simpledatalabs.com/OrdersDatasetInput.csv")

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object load_csv {

  def apply(spark: SparkSession): DataFrame =
    spark.read
      .format("csv")
      .option("header", true)
      .option("quote",  "\"")
      .option("sep",    ",")
      .schema(
        StructType(
          Array(
            StructField("order_id",       IntegerType, true),
            StructField("customer_id",    IntegerType, true),
            StructField("order_status",   StringType,  true),
            StructField("order_category", StringType,  true),
            StructField("order_date",     DateType,    true),
            StructField("amount",         DoubleType,  true)
          )
        )
      )
      .load("dbfs:/Prophecy/anshuman@simpledatalabs.com/OrdersDatasetInput.csv")

}
```

</TabItem>
</Tabs>


````

---

## Target

### Target Parameters

CSV **_Target_** supports all the available [Spark write options for CSV](https://spark.apache.org/docs/latest/sql-data-sources-csv.html).

The below list contains the additional parameters to write a CSV file:

| Parameter    | Description                                                                                            | Required |
| ------------ | ------------------------------------------------------------------------------------------------------ | -------- |
| Dataset Name | Name of the Dataset                                                                                    | True     |
| Location     | Location of the file(s) to be loaded <br/> E.g.: `dbfs:/data/output.csv`                               | True     |
| Write Mode   | How to handle existing data. See [this table](#supported-write-modes) for a list of available options. | False    |

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame.                                                            |
| append     | If data already exists, append the contents of the DataFrame.                                                                    |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

### Example {#target-example}

```mdx-code-block

export const ImageData2 = [
  {
    "image":"/img/csv/write/1.png",
    "description":<h3 style={{padding:'10px'}}>Step 1 - Create Target Component</h3>,
  },
  {
    "image":"/img/csv/write/2.png",
    "description":<h3 style={{padding:'10px'}}>Step 2 - Click 'Create Dataset'</h3>,
  },
  {
    "image":"/img/csv/write/3.png",
    "description":<h3 style={{padding:'10px'}}> Step 3 - Enter 'Dataset Name' and select the CSV format</h3>
  },
  {
    "image":"/img/csv/write/4.png",
    "description":<h3 style={{padding:'10px'}}>Step 4 - Navigate to the desired CSV target location</h3>,
  },
  {
    "image":"/img/csv/write/5.png",
    "description":<h3 style={{padding:'10px'}}>Step 5 - Customize the properties as per your needs</h3>,
  }
];

<App ImageData={ImageData2}></App>
```

### Generated Code {#target-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def write_as_csv(spark: SparkSession, in0: DataFrame):
    in0.write\
        .option("header", True)\
        .option("sep", ",")\
        .mode("error")\
        .option("separator", ",")\
        .option("header", True)\
        .csv("dbfs:/Prophecy/anshuman@simpledatalabs.com/output.csv")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object write_as_csv {
  def apply(spark: SparkSession, in: DataFrame): Unit =
    in.write
      .format("csv")
      .option("header", true)
      .option("sep",    ",")
      .mode("error")
      .save("dbfs:/Prophecy/anshuman@simpledatalabs.com/output.csv")
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
