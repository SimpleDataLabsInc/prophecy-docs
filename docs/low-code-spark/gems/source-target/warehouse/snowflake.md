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

:::info How to configure Key Pair Authentication on Snowflake?
Please refer the snowflake official documentation to attach private key to user account: <a href="https://docs.snowflake.com/en/user-guide/key-pair-auth#configuring-key-pair-authentication">Configuring Key Pair Authentication</a>
:::

## Source

### Source Parameters

| Parameter              | Description                                                                                                                                               | Required                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Dataset Name           | Name of the Dataset                                                                                                                                       | True                                                   |
| Credential Type        | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                            | True                                                   |
| Credentials            | Databricks credential name , else username and password for the snowflake account                                                                         | Required if `Credential Type` is `Databricks Secrets`  |
| Username               | Login name for the Snowflake user                                                                                                                         | Required if `Credential Type` is `Username & Password` |
| Password               | Password for the Snowflake user                                                                                                                           | Required if `Credential Type` is `Username & Password` |
| Private Key Details    | Enable Private Key Details if snowflake user is associated with private key                                                                               | False                                                  |
| Private key format     | Private key format of the private key file                                                                                                                | Required if `Private Key Details` is enabled           |
| Private key filepath   | Location of Private key filepath                                                                                                                          | Required if `Private Key Details` is enabled           |
| Private key passphrase | Passphrase of Private key file                                                                                                                            | Required if private key file is passphrase enabled     |
| Url                    | Hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> Eg: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com` | True                                                   |
| Database               | Database to use for the session after connecting                                                                                                          | True                                                   |
| Schema                 | Schema to use for the session after connecting                                                                                                            | True                                                   |
| Warehouse              | The default virtual warehouse to use for the session after connecting                                                                                     | False                                                  |
| Data Source            | Strategy to read data: `DB Table` or `SQL Query`.                                                                                                         | True                                                   |
| Table                  | The name of the table to be read. All columns and records are retrieved (i.e. it is equivalent to `SELECT * FROM table`).                                 | Required if `Data Source` is `DB Table`                |
| SQL Query              | The exact query (`SELECT` statement) to run                                                                                                               | Required if `Data Source` is `SQL Query`               |

### Example {#source-example}

```mdx-code-block
import App from '@site/src/components/slider';

export const ImageData = [
  {
    "image":"img/snowflake/load/1.png",
    "description":<h3 style={{padding:'10px'}}>Step 1 - Create Source Component</h3>,
  },
  {
    "image":"img/snowflake/load/2.png",
    "description":<h3 style={{padding:'10px'}}>Step 2 - Click 'Create Dataset'</h3>,
  },
  {
    "image":"img/snowflake/load/3.png",
    "description":<h3 style={{padding:'10px'}}> Step 3 - Enter 'Dataset Name' and select the SNOWFLAKE format under WAREHOUSE type</h3>
  },
  {
    "image":"img/snowflake/load/4.png",
    "description":<h3 style={{padding:'10px'}}>Step 4 - Enter Connection details</h3>,
  },
  {
    "image":"img/snowflake/load/5.png",
    "description":<h3 style={{padding:'10px'}}>Step 5 - Click 'Infer Schema' to fetch schema details</h3>,
  },
  {
    "image":"img/snowflake/load/6.png",
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
object sf_customer {
  def apply(spark: SparkSession): DataFrame = {
    import com.databricks.dbutils_v1.DBUtilsHolder.dbutils
    var reader = spark.read
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

| Parameter              | Description                                                                                                                                                                                                                                                                                                               | Required                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Dataset Name           | Name of the Dataset                                                                                                                                                                                                                                                                                                       | True                                                   |
| Credential Type        | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                                                                                                                                                                                            | True                                                   |
| Credentials            | Databricks credential name , else username and password for the snowflake account                                                                                                                                                                                                                                         | Required if `Credential Type` is `Databricks Secrets`  |
| Username               | Login name for the snowflake user                                                                                                                                                                                                                                                                                         | Required if `Credential Type` is `Username & Password` |
| Password               | Password for the snowflake user                                                                                                                                                                                                                                                                                           | Required if `Credential Type` is `Username & Password` |
| Private Key Details    | Enable Private Key Details if snowflake user is associated with private key                                                                                                                                                                                                                                               | False                                                  |
| Private key format     | Private key format of the private key file                                                                                                                                                                                                                                                                                | Required if `Private Key Details` is enabled           |
| Private key filepath   | Location of Private key filepath                                                                                                                                                                                                                                                                                          | Required if `Private Key Details` is enabled           |
| Private key passphrase | Passphrase of Private key file                                                                                                                                                                                                                                                                                            | Required if private key file is passphrase enabled     |
| Url                    | Hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> Eg: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com`                                                                                                                                                                 | True                                                   |
| Database               | Database to use for the session after connecting                                                                                                                                                                                                                                                                          | True                                                   |
| Schema                 | Schema to use for the session after connecting                                                                                                                                                                                                                                                                            | True                                                   |
| Warehouse              | The default virtual warehouse to use for the session after connecting                                                                                                                                                                                                                                                     | False                                                  |
| Table                  | The name of the table to which data is to be written.                                                                                                                                                                                                                                                                     | True                                                   |
| Write Mode             | How to handle existing data. See [this table](#supported-write-modes) for a list of available options.                                                                                                                                                                                                                    | True                                                   |
| Post-Script SQL        | DDL/DML SQL statements to execute before writing data.<br/> It is intended for statements that do not return a result set, for example DDL statements like `CREATE TABLE` and DML statements like `INSERT, UPDATE, and DELETE`.<br/> It is not useful for statements that return a result set, such as `SELECT` or `SHOW` | False                                                  |

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame                                                             |
| append     | If data already exists, append the contents of the DataFrame                                                                     |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

### Example {#target-example}

```mdx-code-block

export const ImageData2 = [
  {
    "image":"/img/snowflake/write/1.png",
    "description":<h3 style={{padding:'10px'}}>Step 1 - Create Target Component</h3>,
  },
  {
    "image":"/img/snowflake/write/2.png",
    "description":<h3 style={{padding:'10px'}}>Step 2 - Click 'Create Dataset'</h3>,
  },
  {
    "image":"/img/snowflake/write/3.png",
    "description":<h3 style={{padding:'10px'}}> Step 3 - Enter 'Dataset Name' and select the SNOWFLAKE format under WAREHOUSE type</h3>
  },
  {
    "image":"/img/snowflake/write/4.png",
    "description":<h3 style={{padding:'10px'}}>Step 4 - Enter Connection details</h3>,
  },
  {
    "image":"/img/snowflake/write/5.png",
    "description":<h3 style={{padding:'10px'}}>Step 5 - Define 'Write Mode' and optionally provide 'Post-Script SQL'</h3>,
  }
];

<App ImageData={ImageData2}></App>
```

### Generated Code {#target-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def sf_customer(spark: SparkSession, in0: DataFrame):
    from pyspark.dbutils import DBUtils
    options = {
        "sfUrl": "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",
        "sfUser": "anshuman",
        "sfPassword": "******",
        "sfDatabase": "SNOWFLAKE_SAMPLE_DATA",
        "sfSchema": "TPCDS_SF100TCL",
        "sfWarehouse": "COMPUTE_WH"
    }
    spark.sparkContext._jvm.net.snowflake.spark.snowflake.Utils.runQuery(
        spark.sparkContext._jvm.PythonUtils.toScalaMap(options),
        "CREATE TABLE test_table(id INTEGER)"
    )
    writer = in0.write.format("snowflake").options(**options)
    writer.option("dbtable", "test_table").mode("overwrite").save()
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object sf_customer {
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
    Utils.runQuery(options, "CREATE TABLE test_table(id INTEGER)")
    writer.save()
  }
}
```

</TabItem>
</Tabs>
````
