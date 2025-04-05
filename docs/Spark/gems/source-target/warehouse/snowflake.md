---
title: Snowflake
id: snowflake
slug: /engineers/snowflake
description: Parameters and properties to read from and write to the Snowflake warehouse.
tags:
  - gems
  - warehouse
  - snowflake
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecyWarehousePython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecyWarehouseScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="Not Supported"
/>

You can read from and write to Snowflake.

| Parameter              | Tab      | Description                                                                                                                                                                                                                                                                                                  |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authentication Type    | Location | How you want to authenticate. <br/>Possible values are: `Username & Password`, or `Key Pair Authentication`. <br/> To configure key pair authentication on Snowflake, see [Configuring key-pair authentication](https://docs.snowflake.com/en/user-guide/key-pair-auth#configuring-key-pair-authentication). |
| Username               | Location | Username of the Snowflake user if you selected `Username & Password` for the authentication type.                                                                                                                                                                                                            |
| Password               | Location | Password for the Snowflake user if you selected `Username & Password` for the authentication type.                                                                                                                                                                                                           |
| Private key filepath   | Location | Location of your private key filepath in PKCS8 format if you selected `Key Pair Authentication` for the authentication type.                                                                                                                                                                                 |
| Private key passphrase | Location | Passphrase of your private key file if you selected `Key Pair Authentication` for the authentication type                                                                                                                                                                                                    |
| Snowflake URL          | Location | Hostname for your account in the format: `<account_identifier>.snowflakecomputing.com` <br/>For example: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com`                                                                                                                                             |
| Database               | Location | Database to use for the session.                                                                                                                                                                                                                                                                             |
| Schema                 | Location | Schema to use for the session.                                                                                                                                                                                                                                                                               |
| Warehouse              | Location | Default virtual warehouse to use for the session.                                                                                                                                                                                                                                                            |
| Role                   | Location | Default security role to use for the session.                                                                                                                                                                                                                                                                |
| Data Source            | Location | Strategy to read data. <br/>Possible values are: `DB Table` or `SQL Query`.                                                                                                                                                                                                                                  |
| Table                  | Location | Name of the table to be read.                                                                                                                                                                                                                                                                                |
| SQL Query              | Location | SQL query that contains a`SELECT` statement to run.                                                                                                                                                                                                                                                          |

## Source

The Source gem reads data from Snowflake and allows you to optionally specify the following additional property.

### Source properties

| Properties  | Description                  | Default |
| ----------- | ---------------------------- | ------- |
| Description | Description of your dataset. | None    |

### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/235865924-aff354cc-ab30-4ef7-8885-1e66c285d3d7.mp4" title="Snowfalke Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

### Generated code {#source-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/engineers/project-lifecycle/#review-the-code) in the project header.
:::

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def sf_customer(spark: SparkSession) -> DataFrame:
    from pyspark.dbutils import DBUtils

    return spark.read\
        .format("snowflake")\
        .options(
          **{
            "sfUrl": "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",
            "sfUser": "anshuman",
            "sfPassword": "*******",
            "sfDatabase": "SNOWFLAKE_SAMPLE_DATA",
            "sfSchema": "TPCDS_SF100TCL",
            "sfWarehouse": "COMPUTE_WH"
          }
        )\
        .option("dbtable", "CUSTOMER")\
        .load()
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object customer_snow_src {
  def apply(spark: SparkSession): DataFrame = {
    import com.databricks.dbutils_v1.DBUtilsHolder.dbutils
    var reader = context.spark.read
      .format("snowflake")
      .options(
        Map(
          "sfUrl" → "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",
          "sfUser" → "anshuman",
          "sfPassword" → "******",
          "sfDatabase" → "SNOWFLAKE_SAMPLE_DATA",
          "sfSchema" → "TPCDS_SF100TCL",
          "sfWarehouse" → "COMPUTE_WH"
        )
      )
    reader = reader.option("dbtable", "CUSTOMER")
    reader.load()
  }
}
```
</TabItem>
</Tabs>
````

---

## Target

The Target gem writes data to Snowflake and allows you to optionally specify the following additional properties.

### Target properties

| Property            | Description                                                                                                                                                                                                                                     | Default     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Description         | Description of your dataset.                                                                                                                                                                                                                    | None        |
| Write Mode          | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                                                                            | `overwrite` |
| Run post-script SQL | DDL and DML SQL statements to execute before the Target gem writes data.<br/> This is intended for statements that do not return a result set, such as DDL statements like `CREATE TABLE` and DML statements like `INSERT, UPDATE, and DELETE`. | None        |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |

### Example {#target-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/235865992-6af2ad3b-f98b-46b7-ae09-9bc3cd12e6cc.mp4" title="Snowfalke Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

### Generated code {#target-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/engineers/project-lifecycle/#review-the-code) in the project header.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def customer_snow_tg(spark: SparkSession, in0: DataFrame):
    from pyspark.dbutils import DBUtils
    options = {
        "sfUrl": "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",
        "sfUser": "anshuman",
        "sfPassword": "******",
        "sfDatabase": "SNOWFLAKE_SAMPLE_DATA",
        "sfSchema": "TPCDS_SF100TCL",
        "sfWarehouse": "COMPUTE_WH"
    }
    writer = in0.write.format("snowflake").options(**options)
    writer = writer.option("dbtable", "CUSTOMERS")
    writer = writer.mode("overwrite")
    writer.save()
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object customer_snow_tg {
  def apply(spark: SparkSession, in: DataFrame): Unit = {

    import net.snowflake.spark.snowflake.Utils
    import com.databricks.dbutils_v1.DBUtilsHolder.dbutils
    val options = Map("sfUrl" → "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",
                      "sfUser" → "anshuman",
                      "sfPassword" → "******",
                      "sfDatabase" → "SNOWFLAKE_SAMPLE_DATA",
                      "sfSchema" → "TPCDS_SF100TCL",
                      "sfWarehouse" → "COMPUTE_WH"
    )
    var writer = in.write.format("snowflake").options(options)
    writer = writer.option("dbtable", "test_table")
    writer = writer.mode("overwrite")
    writer.save()
  }
}
```
</TabItem>
</Tabs>
````
