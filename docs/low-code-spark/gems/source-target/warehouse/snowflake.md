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

:::caution Enterprise Only

Please [contact us](https://www.prophecy.io/request-a-demo) to learn more about the Enterprise offering.

:::
Allows read and write operations on `Snowflake`

### Source Parameters

| Parameter       | Description                                                                                                                                               | Required                                                        |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|
| Dataset Name    | Name of the Dataset ([read more about Datasets](/docs/core/concepts/dataset.md))                                                                          | True                                                            |
| Credential Type | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                            | True                                                            | 
| Credentials     | Databricks credential name , else username and password for the snowflake account                                                                         | Required if `Databricks Secrets` is opted as `Credential Type`  | 
| Username        | Login name for the snowflake user                                                                                                                         | Required if `Username & Password` is opted as `Credential Type` | 
| Password        | Password for the snowflake user                                                                                                                           | Required if `Username & Password` is opted as `Credential Type` | 
| Url             | hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> Eg: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com` | True                                                            | 
| Database        | Database to use for the session after connecting                                                                                                          | True                                                            | 
| Schema          | Schema to use for the session after connecting                                                                                                            | True                                                            | 
| Warehouse       | The default virtual warehouse to use for the session after connecting                                                                                     | False                                                           | 
| Data Source     | Strategy to read data: `DB Table` or `SQL Query`.                                                                                                         | True                                                            | 
| Table           | The name of the table to be read. All columns and records are retrieved (i.e. it is equivalent to `SELECT * FROM table`).                                 | Required if `DB Table` is opted as `Data Source`                | 
| SQL Query       | The exact query (SELECT statement) to run                                                                                                                 | Required if `SQL Query` is opted as `Data Source`               | 

### Target Parameters

| Parameter       | Description                                                                                                                                                                                                                                                                                                           | Required                                                        |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|
| Dataset Name    | Name of the Dataset ([read more about Datasets](/docs/core/concepts/dataset.md))                                                                                                                                                                                                                                      | True                                                            |
| Credential Type | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                                                                                                                                                                                        | True                                                            | 
| Credentials     | Databricks credential name , else username and password for the snowflake account                                                                                                                                                                                                                                     | Required if `Databricks Secrets` is opted as `Credential Type`  | 
| Username        | Login name for the snowflake user                                                                                                                                                                                                                                                                                     | Required if `Username & Password` is opted as `Credential Type` | 
| Password        | Password for the snowflake user                                                                                                                                                                                                                                                                                       | Required if `Username & Password` is opted as `Credential Type` | 
| Url             | hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> Eg: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com`                                                                                                                                                             | True                                                            | 
| Database        | Database to use for the session after connecting                                                                                                                                                                                                                                                                      | True                                                            | 
| Schema          | Schema to use for the session after connecting                                                                                                                                                                                                                                                                        | True                                                            | 
| Warehouse       | The default virtual warehouse to use for the session after connecting                                                                                                                                                                                                                                                 | False                                                           | 
| Table           | The name of the table to which data is to be written.                                                                                                                                                                                                                                                                 | True                                                            | 
| Write Mode      | How to handle existing data if present while writing.                                                                                                                                                                                                                                                                 | True                                                            | 
| Post-Script SQL | DDL/DML SQL statements to execute before writing data.<br/> It is intended for statements that do not return a result set, for example DDL statements like `CREATE TABLE` and DML statements like `INSERT, UPDATE, and DELETE`.<br/> It is not useful for statements that return a result set, such as SELECT or SHOW | False                                                           | 


### Reading from a Snowflake Table

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

### Writing to a Snowflake Table

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
