---
title: Snowflake
id: snowflake
description: Snowflake
tags:
  - gems
  - warehouse
  - snowflake
---

Allows read and write operations on `Snowflake`.

:::info How to configure Key Pair Authentication on Snowflake?
Please refer the snowflake official documentation to attach private key to user account: <a href="https://docs.snowflake.com/en/user-guide/key-pair-auth#configuring-key-pair-authentication">Configuring Key Pair Authentication</a>.
:::

## Source

### Source Parameters

| Parameter              | Description                                                                                                                                                 | Required                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Dataset Name           | Name of the Dataset                                                                                                                                         | True                                                   |
| Credential Type        | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                              | True                                                   |
| Credentials            | Databricks credential name, else username and password for the snowflake account                                                                            | Required if `Credential Type` is `Databricks Secrets`  |
| Username               | Login name for the Snowflake user                                                                                                                           | Required if `Credential Type` is `Username & Password` |
| Password               | Password for the Snowflake user                                                                                                                             | Required if `Credential Type` is `Username & Password` |
| Private key filepath   | Location of Private key filepath in PKCS8 format                                                                                                            | Required if `Private Key Details` is enabled           |
| Private key passphrase | Passphrase of Private key file                                                                                                                              | Required if private key file is passphrase enabled     |
| Url                    | Hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> E.g.: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com` | True                                                   |
| Database               | Database to use for the session after connecting                                                                                                            | True                                                   |
| Schema                 | Schema to use for the session after connecting                                                                                                              | True                                                   |
| Warehouse              | Default virtual warehouse to use for the session after connecting                                                                                           | False                                                  |
| Role                   | Default security role to use for the session after connecting                                                                                               | False                                                  |
| Data Source            | Strategy to read data: `DB Table` or `SQL Query`.                                                                                                           | True                                                   |
| Table                  | Name of the table to be read. All columns and records are retrieved (i.e. it is equivalent to `SELECT * FROM table`).                                       | Required if `Data Source` is `DB Table`                |
| SQL Query              | Exact query (`SELECT` statement) to run                                                                                                                     | Required if `Data Source` is `SQL Query`               |

### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/235865924-aff354cc-ab30-4ef7-8885-1e66c285d3d7.mp4" title="Snowfalke Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
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

### Target Parameters

| Parameter              | Description                                                                                                                                                                                                                                                                                                                | Required                                               |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Dataset Name           | Name of the Dataset                                                                                                                                                                                                                                                                                                        | True                                                   |
| Credential Type        | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                                                                                                                                                                                             | True                                                   |
| Credentials            | Databricks credential name, else username and password for the snowflake account                                                                                                                                                                                                                                           | Required if `Credential Type` is `Databricks Secrets`  |
| Username               | Login name for the snowflake user                                                                                                                                                                                                                                                                                          | Required if `Credential Type` is `Username & Password` |
| Password               | Password for the snowflake user                                                                                                                                                                                                                                                                                            | Required if `Credential Type` is `Username & Password` |
| Private key filepath   | Location of Private key filepath in PKCS8 format                                                                                                                                                                                                                                                                           | Required if `Private Key Details` is enabled           |
| Private key passphrase | Passphrase of Private key file                                                                                                                                                                                                                                                                                             | Required if private key file is passphrase enabled     |
| Url                    | Hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> E.g.: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com`                                                                                                                                                                | True                                                   |
| Database               | Database to use for the session after connecting                                                                                                                                                                                                                                                                           | True                                                   |
| Schema                 | Schema to use for the session after connecting                                                                                                                                                                                                                                                                             | True                                                   |
| Warehouse              | Default virtual warehouse to use for the session after connecting                                                                                                                                                                                                                                                          | False                                                  |
| Role                   | Default security role to use for the session after connecting                                                                                                                                                                                                                                                              | False                                                  |
| Table                  | Name of the table to which data is to be written                                                                                                                                                                                                                                                                           | True                                                   |
| Write Mode             | How to handle existing data. See [this table](#supported-write-modes) for a list of available options.                                                                                                                                                                                                                     | True                                                   |
| Post-Script SQL        | DDL/DML SQL statements to execute before writing data.<br/> It is intended for statements that do not return a result set, for example DDL statements like `CREATE TABLE` and DML statements like `INSERT, UPDATE, and DELETE`.<br/> It is not useful for statements that return a result set, such as `SELECT` or `SHOW`. | False                                                  |

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame.                                                            |
| append     | If data already exists, append the contents of the DataFrame.                                                                    |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

### Example {#target-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/235865992-6af2ad3b-f98b-46b7-ae09-9bc3cd12e6cc.mp4" title="Snowfalke Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

### Generated Code {#target-code}

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
