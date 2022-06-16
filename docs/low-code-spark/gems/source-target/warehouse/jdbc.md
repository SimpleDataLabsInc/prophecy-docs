---
title: JDBC
id: jdbc
description: JDBC
sidebar_position: 4
tags:
  - gems
  - warehouse
  - jdbc
---

Reads data from other databases using JDBC tables and writes data into other databases using jdbc .

## Source

### Source Parameters

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Required | Default |
| :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------ |
| Credential Type                            | Credential Type provider (Databricks Secrets or Username/Password). These can be set in the config options/via databricks secrets for security purpose, so that it's not visible in code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | True     | (none)  |
| Credential Scope                           | Scope to use for databricks secrets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | False    | (none)  |
| url                                        | The JDBC URL of the form jdbc:subprotocol:subname to connect to. The source-specific connection properties may be specified in the URL. e.g., <br/> `jdbc:postgresql://test.us-east-1.rds.amazonaws.com:5432/postgres`,<br/> `jdbc:mysql://database-mysql.test.us-east-1.rds.amazonaws.com:3306/mysql`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | True     | (none)  |
| dbtable                                    | The JDBC table that should be read from. Note that when using it in the read path anything that is valid in a FROM clause of a SQL query can be used. For example, instead of a full table you could also use a subquery in parentheses. It is not allowed to specify dbtable and query options at the same time. e.g., `db_name.table_name` or `(select col1, col2 from table) as A`                                                                                                                                                                                                                                                                                                                                                                                                                                                              | False    | (none)  |
| query                                      | A query that will be used to read data into Spark. The specified query will be parenthesized and used as a subquery in the FROM clause. Spark will also assign an alias to the subquery clause. As an example, spark will issue a query of the following form to the JDBC Source. SELECT columns FROM (<user_specified_query>) spark_gen_alias. <br/> <br/> Below are a couple of restrictions while using this option.<br/> 1. It is not allowed to specify query and partitionColumn options at the same time. <br/> 2. When specifying partitionColumn option is required, the subquery can be specified using dbtable option instead and partition columns can be qualified using the subquery alias provided as part of dbtable. Example: spark.read.format("jdbc") .option("url", jdbcUrl) .option("query", "select c1, c2 from t1") .load() | False    | (none)  |
| driver                                     | The class name of the JDBC driver to use to connect to this URL. e.g., <br/> For postgres : `org.postgresql.Driver` <br/> For mysql: `com.mysql.cj.jdbc.Driver`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | True     | (none)  |
| Partition Column, Lower Bound, Upper Bound | These options must all be specified if any of them is specified. In addition, numPartitions must be specified. They describe how to partition the table when reading in parallel from multiple workers. partitionColumn must be a numeric, date, or timestamp column from the table in question. Notice that lowerBound and upperBound are just used to decide the partition stride, not for filtering the rows in table. So all rows in the table will be partitioned and returned. This option applies only to reading. <br/> `Note: Dropdown to choose column in partition column would come only once schema is inferred.`                                                                                                                                                                                                                     | False    | (none)  |
| Number of partitions                       | The maximum number of partitions that can be used for parallelism in table reading. This also determines the maximum number of concurrent JDBC connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | False    | (none)  |
| Query Timeout                              | The number of seconds the driver will wait for a Statement object to execute to the given number of seconds. Zero means there is no limit. In the write path, this option depends on how JDBC drivers implement the API setQueryTimeout, e.g., the h2 JDBC driver checks the timeout of each query instead of an entire JDBC batch.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | False    | 0       |
| Fetch size                                 | The JDBC fetch size, which determines how many rows to fetch per round trip. This can help performance on JDBC drivers which default to low fetch size (e.g. Oracle with 10 rows).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | False    | 0       |
| Session Init Statement                     | After each database session is opened to the remote DB and before starting to read data, this option executes a custom SQL statement (or a PL/SQL block). Use this to implement session initialization code. Example: option("sessionInitStatement", """BEGIN execute immediate 'alter session set "\_serial_direct_read"=true'; END;""")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | False    | (none)  |
| Push-Down Predicate                        | The option to enable or disable predicate push-down into the JDBC data source. The default value is true, in which case Spark will push down filters to the JDBC data source as much as possible. Otherwise, if set to false, no filter will be pushed down to the JDBC data source and thus all filters will be handled by Spark. Predicate push-down is usually turned off when the predicate filtering is performed faster by Spark than by the JDBC data source.                                                                                                                                                                                                                                                                                                                                                                               | False    | TRUE    |
| Push-Down Aggregate                        | The option to enable or disable aggregate push-down in V2 JDBC data source. The default value is false, in which case Spark will not push down aggregates to the JDBC data source. Otherwise, if sets to true, aggregates will be pushed down to the JDBC data source. Aggregate push-down is usually turned off when the aggregate is performed faster by Spark than by the JDBC data source. Please note that aggregates can be pushed down if and only if all the aggregate functions and the related filters can be pushed down. Spark assumes that the data source can't fully complete the aggregate and does a final aggregate over the data source output.                                                                                                                                                                                 | False    | FALSE   |

:::note
Please add the jdbc driver carefully. If you get `class not found` error during running of pipeline then your dependency
might be missing in the cluster.
To read more about how to add dependencies for specific jdbc jar [**click
here**](../../../extensibility/dependencies.md)
:::

### Source Example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173814656-1c857949-cd5a-4032-922b-5a621d77fd75.mp4" title="JDBC source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### Target Parameters

| Parameter                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Required | Default                                                                                                                           |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| Credential Type           | Credential Type provider (Databricks Secrets or Username/Password). These can be set in the config options/via databricks secrets for security purpose, so that it's not visible in code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | True     | (none)                                                                                                                            |
| Credential Scope          | Scope to use for databricks secrets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | False    | (none)                                                                                                                            |
| url                       | The JDBC URL of the form jdbc:subprotocol:subname to connect to. The source-specific connection properties may be specified in the URL. e.g., <br/> `jdbc:postgresql://test.us-east-1.rds.amazonaws.com:5432/postgres`,<br/> `jdbc:mysql://database-mysql.test.us-east-1.rds.amazonaws.com:3306/mysql`                                                                                                                                                                                                                                                                                                                                                                                                                                              | True     | (none)                                                                                                                            |
| table                     | The JDBC table that should be written into.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | True     | (none)                                                                                                                            |
| driver                    | The class name of the JDBC driver to use to connect to this URL. e.g., <br/> For postgres : `org.postgresql.Driver` <br/> For mysql: `com.mysql.cj.jdbc.Driver`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | True     | (none)                                                                                                                            |
| Number of Partitions      | The maximum number of partitions that can be used for parallelism in table writing. This also determines the maximum number of concurrent JDBC connections. If the number of partitions to write exceeds this limit, we decrease it to this limit by calling coalesce(numPartitions) before writing.                                                                                                                                                                                                                                                                                                                                                                                                                                                | False    | (none)                                                                                                                            |
| Query Timeout             | The number of seconds the driver will wait for a Statement object to execute to the given number of seconds. Zero means there is no limit. In the write path, this option depends on how JDBC drivers implement the API setQueryTimeout, e.g., the h2 JDBC driver checks the timeout of each query instead of an entire JDBC batch.                                                                                                                                                                                                                                                                                                                                                                                                                 | False    | 0                                                                                                                                 |
| Batch Size                | The JDBC batch size, which determines how many rows to insert per round trip. This can help performance on JDBC drivers. This option applies only to writing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | False    | 1000                                                                                                                              |
| Isolation Level           | The transaction isolation level, which applies to current connection. It can be one of NONE, READ_COMMITTED, READ_UNCOMMITTED, REPEATABLE_READ, or SERIALIZABLE, corresponding to standard transaction isolation levels defined by JDBC's Connection object, with default of READ_UNCOMMITTED. Please refer the documentation in java.sql.Connection.                                                                                                                                                                                                                                                                                                                                                                                               | False    | READ_UNCOMMITTED                                                                                                                  |
| Truncate                  | When SaveMode.Overwrite is enabled, this option causes Spark to truncate an existing table instead of dropping and recreating it. This can be more efficient, and prevents the table metadata (e.g., indices) from being removed. However, it will not work in some cases, such as when the new data has a different schema. In case of failures, users should turn off truncate option to use DROP TABLE again. Also, due to the different behavior of TRUNCATE TABLE among DBMS, it's not always safe to use this. MySQLDialect, DB2Dialect, MsSqlServerDialect, DerbyDialect, and OracleDialect supports this while PostgresDialect and default JDBCDirect doesn't. For unknown and unsupported JDBCDirect, the user option truncate is ignored. | False    | FALSE                                                                                                                             |
| Cascade Truncate          | If enabled and supported by the JDBC database (PostgreSQL and Oracle at the moment), this options allows execution of a TRUNCATE TABLE t CASCADE (in the case of PostgreSQL a TRUNCATE TABLE ONLY t CASCADE is executed to prevent inadvertently truncating descendant tables). This will affect other tables, and thus should be used with care.                                                                                                                                                                                                                                                                                                                                                                                                   | False    | the default cascading truncate behaviour of the JDBC database in question, specified in the isCascadeTruncate in each JDBCDialect |
| Create Table Options      | If specified, this option allows setting of database-specific table and partition options when creating a table (e.g., CREATE TABLE t (name string) ENGINE=InnoDB.).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | False    |                                                                                                                                   |
| Create Table Column Types | The database column data types to use instead of the defaults, when creating the table. Data type information should be specified in the same format as CREATE TABLE columns syntax (e.g: "name CHAR(64), comments VARCHAR(1024)"). The specified types should be valid spark sql data types.                                                                                                                                                                                                                                                                                                                                                                                                                                                       | False    | (none)                                                                                                                            |

Below are different type of write modes which prophecy provided hive catalog supports.

| Write Mode | Description                                                                                                                                                                                   |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, existing data is expected to be overwritten by the contents of the DataFrame.                                                                                         |
| append     | If data already exists, contents of the DataFrame are expected to be appended to existing data.                                                                                               |
| ignore     | If data already exists, the save operation is expected not to save the contents of the DataFrame and not to change the existing data. This is similar to a CREATE TABLE IF NOT EXISTS in SQL. |
| error      | If data already exists, an exception is expected to be thrown.                                                                                                                                |

### Target Example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173814665-f932bbae-cc4a-4b4b-90e8-09749b714a76.mp4" title="JDBC target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

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
