---
title: Hive Table
id: hive
description: Hive Table
sidebar_position: 1
tags:
   - gems
   - catalog
   - hive
---

Reads data from hive tables saved in data catalog and writes data into hive table in data catalog. 

:::note
Please choose the provider as hive on properties page.
:::

## Source

### Source Parameters
| Parameter        | Description                           | Required |
|:-----------------|:--------------------------------------|:---------|
| Database name    | Name of the database                  | True     |
| Table name       | Name of the table                     | True     |
| Provider         | Provider needs to be selected as hive | True     |
| Filter Predicate | Where clause to filter the table      | False    |


### Source Example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173572911-4240f0bd-0277-4c64-89bb-8f9e18078447.mp4" title="Catalog hive source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>


### Spark Code

#### Without filter predicate

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def Source(spark: SparkSession) -> DataFrame:
    return spark.read.table(f"test_db.test_table")

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Source {

  def apply(spark: SparkSession): DataFrame = {
    spark.read.table("test_db.test_table")
  }

}
```

</TabItem>
</Tabs>

````

#### With filter predicate

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def Source(spark: SparkSession) -> DataFrame:
    return spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Source {

  def apply(spark: SparkSession): DataFrame =
    spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")

}

```

</TabItem>
</Tabs>

````

## Target

### Target Parameters
| Parameter         | Description                                                       | Required |
|:------------------|:------------------------------------------------------------------|:---------|
| Database name     | Name of the database                                              | True     |
| Table name        | Name of the table                                                 | True     |
| Custom file path  | Use custom file path to store underlying files                    | False    |
| Provider          | Provider needs to be selected as hive                             | True     |
| Write Mode        | Where clause to filter the table (Default is set to overwrite)    | True     |
| File Format       | File format to save data in (Default is set to parquet)           | True     |
| Partition Columns | Columns to partition by                                           | False    |
| Use insert into   | Flag to use insert into method to write instead of save in spark. | False    |

Below are different type of write modes which prophecy provided hive catalog supports.

| Write Mode | Description                                                                                                                                                                                   |
|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| overwrite  | If data already exists, existing data is expected to be overwritten by the contents of the DataFrame.                                                                                         |
| append     | If data already exists, contents of the DataFrame are expected to be appended to existing data.                                                                                               |
| ignore     | If data already exists, the save operation is expected not to save the contents of the DataFrame and not to change the existing data. This is similar to a CREATE TABLE IF NOT EXISTS in SQL. |
| error      | If data already exists, an exception is expected to be thrown.                                                                                                                                |

Below are different type of file formats during write which prophecy provided hive catalog supports.

1. parquet      
2. text file     
3. avro         
4. orc          
5. rc file       
6. sequence file 


### Target Example



<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573043-0bdb0bb2-a42a-477b-8391-0325b444372f.mp4" title="Catalog hive target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>


### Spark Code

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def Target(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("hive")\
        .option("fileFormat", "parquet")\
        .mode("overwrite")\
        .saveAsTable("test_db.test_table")

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Target {

  def apply(spark: SparkSession, in: DataFrame): DataFrame = {
    in.write
        .format("hive")
        .option("fileFormat", "parquet")
        .mode("overwrite")
        .saveAsTable("test_db.test_table")
  }

}
```

</TabItem>
</Tabs>

````
