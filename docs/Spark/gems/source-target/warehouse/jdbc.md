---
title: JDBC
id: jdbc
slug: /engineers/jdbc
description: Parameters and properties to read from and write to the JDBC warehouse
tags:
  - gems
  - warehouse
  - jdbc
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1+"
/>

You can read from and write to from other databases using JDBC.

## Parameters

| Parameter   | Tab        | Description                                                                                                                                                                                                                                                                      |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Username    | Location   | Username for your JDBC instance.                                                                                                                                                                                                                                                 |
| Password    | Location   | Password for your JDBC instance.                                                                                                                                                                                                                                                 |
| JDBC URL    | Location   | JDBC URL to connect to. <br/>The source-specific connection properties may be specified in the URL. <br/> For example: <br/>- `jdbc:postgresql://test.us-east-1.rds.amazonaws.com:5432/postgres`<br/>- `jdbc:mysql://database-mysql.test.us-east-1.rds.amazonaws.com:3306/mysql` |
| Data Source | Location   | Strategy to read data. <br/>In the Source gem, you can select `DB Table` or `SQL Query`. In the Target gem, you must enter a table.<br/>To learn more, see [DB Table](#db-table) and [SQL Query](#sql-query).                                                                    |
| Schema      | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code.                                                                                  |

### DB Table

The `DB Table` option dictates which table to use as the source to read from. You can use anything valid in a `FROM` clause of a SQL query. For example, instead of a table name, use a subquery in parentheses.

:::danger
The `DB Table` option and the `query` parameter are mutually exclusive, which means that you cannot specify both at the same time.
:::

### SQL Query

The `SQL Query` option specifies which query to use as a subquery in the `FROM` clause. Spark also assigns an alias to the subquery clause. For example, Spark issues the following query to the JDBC Source:

````mdx-code-block

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```sql
SELECT columns FROM (<user_specified_query>) spark_gen_alias
```
````

The following restrictions exist when you use this option:

1. You cannot use the `query` and `partitionColumn` options at the same time.
2. If you must specify the `partitionColumn` option, you can specify the subquery using the `dbtable` option and qualify your partition columns using the subquery alias provided as part of `dbtable`.

## Source

The Source gem reads data from JDBC and allows you to optionally specify the following additional properties.

### Source properties

| Property               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                  | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description            | Description of your dataset.                                                                                                                                                                                                                                                                                                                                                                                                                 | None    |
| Driver                 | Class name of the JDBC driver to connect to this URL. <br/>For PostgreSQL: `org.postgresql.Driver` <br/>For MySQL: `com.mysql.cj.jdbc.Driver`                                                                                                                                                                                                                                                                                                | None    |
| Push-down Predicate    | Whether Spark should push down filters to the JDBC data source as much as possible. <br/>Predicate push-down is usually disabled when Spark performs predicate filtering faster than the JDBC data source.                                                                                                                                                                                                                                   | true    |
| Number of Partitions   | Maximum number of partitions to use for parallelism in table reading, and the maximum number of concurrent JDBC connections.                                                                                                                                                                                                                                                                                                                 | None    |
| Query Timeout          | Number of seconds the driver to wait for a Statement object to execute. <br/>To specify no limit, enter `0`.                                                                                                                                                                                                                                                                                                                                 | `0`     |
| Fetch Size             | Number of rows to fetch per round trip. <br/>This can help performance on JDBC drivers which default to low fetch size.                                                                                                                                                                                                                                                                                                                      | `0`     |
| Session Init Statement | Custom SQL statement, or PL/SQL block to execute after you open a database session to the remote database, and before you start reading data. <br/>Use this to implement session initialization code. For example: <br/>`option("sessionInitStatement", """BEGIN execute immediate 'alter session set "_serial_direct_read"=true'; END;""")`                                                                                                 | None    |
| Push-down Aggregate    | Whether Spark should push down aggregates to the JDBC data source. <br/>Aggregate push-down is usually disabled when Spark performs the aggregate faster than the JDBC data source. <br/>**NOTE:** You can only push down aggregates if you can push down all the aggregate functions and the related filters. Spark assumes that the data source can't fully complete the aggregate and does a final aggregate over the data source output. | false   |

:::caution
If you get `class not found` error while you run your pipeline, add a missing dependency to your cluster. <br/>
To learn how to add dependencies for specific JDBC jar, see [Spark dependencies](/engineers/dependencies).
:::

### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173814656-1c857949-cd5a-4032-922b-5a621d77fd75.mp4" title="JDBC source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated code {#source-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/engineers/project-lifecycle/#review-the-code) in the project header.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def Source(spark: SparkSession) -> DataFrame:
    return spark.read\
        .format("jdbc")\
        .option("url", f"{Config.jdbc_url}")\
        .option("user", f"{Config.jdbc_username}")\
        .option("password", f"{Config.jdbc_password}")\
        .option("dbtable", "public.demo_customers_raw")\
        .option("pushDownPredicate", True)\
        .option("driver", "org.postgresql.Driver")\
        .load()
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Source {

  def apply(spark: SparkSession): DataFrame = {
    var reader = spark.read
      .format("jdbc")
      .option("url",  s"${Config.jdbc_url}")
      .option("user", s"${Config.jdbc_username}")
      .option("password", s"${Config.jdbc_password}")
      .option("dbtable", "public.demo_customers_raw")
    reader = reader
      .option("pushDownPredicate", true)
      .option("driver", "org.postgresql.Driver")
    reader.load()
  }

}
```
</TabItem>
</Tabs>
````

## Target

The Target gem writes data to JDBC and allows you to optionally specify the following additional properties.

### Target properties

| Property                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------ |
| Description               | Description of your dataset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                                   |
| Driver                    | Class name of the JDBC driver to connect to this URL. <br/>For PostgreSQL: `org.postgresql.Driver` <br/>For MySQL: `com.mysql.cj.jdbc.Driver`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                                   |
| Number of Partitions      | Maximum number of partitions to use for parallelism in table writing, and the maximum number of concurrent JDBC connections. <br/>If the number of partitions exceeds the concurrent JDBC connections limit, call `coalesce(numPartitions)` to decrease the limit before writing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | None                                   |
| Query Timeout             | Number of seconds the driver to wait for a Statement object to execute. <br/>To specify no limit, enter `0`. This option depends on how JDBC drivers implement the API `setQueryTimeout`. For example, the h2 JDBC driver checks the timeout of each query instead of an entire JDBC batch.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `0`                                    |
| Write Mode                | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `error`                                |
| Batch Size                | Number of rows to insert per round trip. <br/>This can help performance on JDBC drivers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                        | `1000` |
| Isolation Level           | Transaction isolation level to apply to the current connection. <br/>Possible values are: `NONE`, `READ_COMMITTED`, `READ_UNCOMMITTED`, `REPEATABLE_READ`, or `SERIALIZABLE`. To learn more, see [Interface Connection](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Connection.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `READ_UNCOMMITTED`                     |
| Truncate                  | When your `SaveMode` is set to `Overwrite`, Spark truncates an existing table instead of dropping and recreating it. This can be more efficient, and prevents the table metadata, such as indices, from being removed. <br/>However, it does not work in some cases, such as when the new data has a different schema. In case of failures, disable the truncate option to use `DROP TABLE` again. Also, due to the different behavior of `TRUNCATE TABLE` among DBMS, it's not always safe to use this. `MySQLDialect`, `DB2Dialect`, `MsSqlServerDialect`, `DerbyDialect`, and `OracleDialect` supports this while `PostgresDialect` and the default `JDBCDialect` doesn't. For an unknown and unsupported `JDBCDialect`, the user option truncate is ignored. | false                                  |
| Cascade Truncate          | Whether to allow `TRUNCATE TABLE t CASCADE` to execute. <br/>For PostgreSQL, `TRUNCATE TABLE ONLY t CASCADE` executes to prevent inadvertently truncating descendant tables. **This affects other tables.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default according to the `JDBCDialect` |
| Create Table Options      | Set a database-specific table and partition options when creating a table. <br/>For example: `CREATE TABLE t (name string) ENGINE=InnoDB`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                                   |
| Create Table Column Types | Database column data types to use instead of the defaults when creating the table. <br/>Specify valid Spark SQL data type information in the same format as `CREATE TABLE` columns syntax. <br/>For example: `"name CHAR(64), comments VARCHAR(1024)"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                                   |

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
<iframe src="https://user-images.githubusercontent.com/103921419/173814665-f932bbae-cc4a-4b4b-90e8-09749b714a76.mp4" title="JDBC target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated code {#target-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/engineers/project-lifecycle/#review-the-code) in the project header.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def Target(spark: SparkSession, in0: DataFrame):
   in0.write\
      .format("jdbc")\
      .option("url", f"{Config.jdbc_url}")\
      .option("dbtable", "public.demo_customers_raw_output")\
      .option("user", f"{Config.jdbc_username}")\
      .option("password", f"{Config.jdbc_password}")\
      .option("driver", "org.postgresql.Driver")\
      .save()
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Target {

  def apply(spark: SparkSession, in: DataFrame): Unit = {
    in.write
      .format("jdbc")
      .option("url", s"${Config.jdbc_url}")
      .option("dbtable", "public.demo_customers_raw_output")
      .option("user", s"${Config.jdbc_username}")
      .option("password", s"${Config.jdbc_password}")
      .option("driver", "org.postgresql.Driver")
      .save()
  }

}
```
</TabItem>
</Tabs>
````
