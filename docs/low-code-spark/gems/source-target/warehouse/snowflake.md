---
title: Snowflake
id: snowflake
description: Snowflake
sidebar_position: 1
tags:
  - gems
  - warehouse
  - snowflake
---

Allows read and write operations on `Snowflake`

## Source

### Source Parameters

| Parameter       | Description                                                                                                                                               | Required                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Dataset Name    | Name of the Dataset                                                                                                                                       | True                                                   |
| Credential Type | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                            | True                                                   |
| Credentials     | Databricks credential name , else username and password for the snowflake account                                                                         | Required if `Credential Type` is `Databricks Secrets`  |
| Username        | Login name for the Snowflake user                                                                                                                         | Required if `Credential Type` is `Username & Password` |
| Password        | Password for the Snowflake user                                                                                                                           | Required if `Credential Type` is `Username & Password` |
| Url             | Hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> Eg: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com` | True                                                   |
| Database        | Database to use for the session after connecting                                                                                                          | True                                                   |
| Schema          | Schema to use for the session after connecting                                                                                                            | True                                                   |
| Warehouse       | Default virtual warehouse to use for the session after connecting                                                                                         | False                                                  |
| Role            | Default security role to use for the session after connecting                                                                                             | False                                                  |
| Data Source     | Strategy to read data: `DB Table` or `SQL Query`.                                                                                                         | True                                                   |
| Table           | Name of the table to be read. All columns and records are retrieved (i.e. it is equivalent to `SELECT * FROM table`).                                     | Required if `Data Source` is `DB Table`                |
| SQL Query       | Exact query (`SELECT` statement) to run                                                                                                                   | Required if `Data Source` is `SQL Query`               |

### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/234223969-f6440b4f-fc6f-461a-8f2a-19d25f640292.mp4" title="Snowflake Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

### Generated Code {#source-code}

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
            "sfUrl": "https://tu22760.ap-south-1.aws.snowflakecomputing.com",
            "sfUser": Config.sf_username,
            "sfPassword": Config.sf_password,
            "sfDatabase": "ASHISH",
            "sfSchema": "PUBLIC",
            "sfWarehouse": "COMPUTE_WH",
            "sfRole": "ACCOUNTADMIN"
          }
        )\
        .option("dbtable", "CUSTOMERS")\
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
          "sfUrl" → "https://tu22760.ap-south-1.aws.snowflakecomputing.com",
          "sfUser" → (s"${Config.sf_username}"),
          "sfPassword" → (s"${Config.sf_password}"),
          "sfDatabase" → "ASHISH",
          "sfSchema" → "PUBLIC",
          "sfWarehouse" → "COMPUTE_WH",
          "sfRole" → "ACCOUNTADMIN"
        )
      )
    reader = reader.option("dbtable", "CUSTOMERS")
    reader.load()
  }
}
```

</TabItem>
</Tabs>


````

---

## Target

### Target Parameters

| Parameter       | Description                                                                                                                                                                                                                                                                                                               | Required                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Dataset Name    | Name of the Dataset                                                                                                                                                                                                                                                                                                       | True                                                   |
| Credential Type | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                                                                                                                                                                                            | True                                                   |
| Credentials     | Databricks credential name , else username and password for the snowflake account                                                                                                                                                                                                                                         | Required if `Credential Type` is `Databricks Secrets`  |
| Username        | Login name for the snowflake user                                                                                                                                                                                                                                                                                         | Required if `Credential Type` is `Username & Password` |
| Password        | Password for the snowflake user                                                                                                                                                                                                                                                                                           | Required if `Credential Type` is `Username & Password` |
| Url             | Hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> Eg: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com`                                                                                                                                                                 | True                                                   |
| Database        | Database to use for the session after connecting                                                                                                                                                                                                                                                                          | True                                                   |
| Schema          | Schema to use for the session after connecting                                                                                                                                                                                                                                                                            | True                                                   |
| Warehouse       | Default virtual warehouse to use for the session after connecting                                                                                                                                                                                                                                                         | False                                                  |
| Role            | Default security role to use for the session after connecting                                                                                                                                                                                                                                                             | False                                                  |
| Table           | Name of the table to which data is to be written.                                                                                                                                                                                                                                                                         | True                                                   |
| Write Mode      | How to handle existing data. See [this table](#supported-write-modes) for a list of available options.                                                                                                                                                                                                                    | True                                                   |
| Post-Script SQL | DDL/DML SQL statements to execute before writing data.<br/> It is intended for statements that do not return a result set, for example DDL statements like `CREATE TABLE` and DML statements like `INSERT, UPDATE, and DELETE`.<br/> It is not useful for statements that return a result set, such as `SELECT` or `SHOW` | False                                                  |

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame                                                             |
| append     | If data already exists, append the contents of the DataFrame                                                                     |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

### Example {#target-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234174404-d5c24de9-1aa6-41d2-97ab-fab47779054f.mp4" title="Snowflake Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

### Generated Code {#target-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def customer_snow_tg(spark: SparkSession, in0: DataFrame):
    from pyspark.dbutils import DBUtils
    options = {
        "sfUrl": "https://tu22760.ap-south-1.aws.snowflakecomputing.com",
        "sfUser": Config.sf_username,
        "sfPassword": Config.sf_password,
        "sfDatabase": "ASHISH",
        "sfSchema": "PUBLIC",
        "sfWarehouse": "COMPUTE_WH",
        "sfRole": "ACCOUNTADMIN"
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
    var writer = in.write
      .format("snowflake")
      .options(
        Map(
          "sfUrl" → "https://tu22760.ap-south-1.aws.snowflakecomputing.com",
          "sfUser" → (s"${Config.sf_username}"),
          "sfPassword" → (s"${Config.sf_password}"),
          "sfDatabase" → "ASHISH",
          "sfSchema" → "PUBLIC",
          "sfWarehouse" → "COMPUTE_WH",
          "sfRole" -> "ACCOUNTADMIN"
        )
      )
    writer = writer.option("dbtable", "CUSTOMERS")
    writer = writer.mode("overwrite")
    writer.save()
  }
}
```

</TabItem>
</Tabs>
````
