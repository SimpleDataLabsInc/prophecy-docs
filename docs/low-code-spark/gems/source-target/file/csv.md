---
title: CSV
id: csv
description: CSV
sidebar_position: 1
tags:
  - gems
  - file
  - csv
---

Allows you to read or write a delimited file (often called Comma Separated File, CSV)

### Source Parameters

CSV **_Source_** supports all the available [spark read options for CSV](https://spark.apache.org/docs/latest/sql-data-sources-csv.html).

The below list contains the additional parameters to read a CSV file:

| Parameter    |     | Description                                                                                                 | Required |
| ------------ | :-- | ----------------------------------------------------------------------------------------------------------- | -------- |
| Dataset Name |     | Name of the Dataset ([read more about Datasets](/docs/core/concepts/dataset.md))                            | True     |
| Location     |     | Location of the file(s) to be loaded <br/> Eg: dbfs:/data/test.csv                                          | True     |
| Schema       |     | Schema to applied on the loaded data. Can be defined/edited as json or inferred using `Infer Schema` button | True     |

### Target Parameters

CSV **_Target_** supports all the available [spark write options for CSV](https://spark.apache.org/docs/latest/sql-data-sources-csv.html).

The below list contains the additional parameters to write a CSV file:

| Parameter    |     | Description                                                                      | Required |
| ------------ | :-- | -------------------------------------------------------------------------------- | -------- |
| Dataset Name |     | Name of the Dataset ([read more about Datasets](/docs/core/concepts/dataset.md)) | True     |
| Location     |     | Location of the file(s) to be loaded <br/> Eg: dbfs:/data/output.csv             | True     |

### Loading a CSV file

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
    "description":<h3 style={{padding:'10px'}}>Step 5: Customize the properties and update schema as per your needs</h3>,
  },
  {
    "image":"/img/csv/load/6.png",
    "description":<h3 style={{padding:'10px'}}>Step 6 - Hit 'Refresh' to preview data </h3>,
  },
];

<App ImageData={ImageData}></App>
```

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

### Writing a CSV file

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
    "description":<h3 style={{padding:'10px'}}>Step 5: Customize the properties as per your needs</h3>,
  }
];

<App ImageData={ImageData2}></App>
```

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
