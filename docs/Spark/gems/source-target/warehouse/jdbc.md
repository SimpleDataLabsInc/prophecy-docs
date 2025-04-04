---
title: JDBC
id: jdbc
slug: /engineers/jdbc
description: JDBC
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

Reads and writes data from other databases using JDBC.

## Source

### Source Parameters

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Required | Default |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Credential Type                            | Credential Type provider (Databricks Secrets or Username/Password or Environment variables for Username and Password). These can be set in the config options/via Databricks secrets or Environment variables for security purpose, so that it's not visible in code.                                                                                                                                                                                                                                                                                                                                                                         | True     | (none)  |
| Credential Scope                           | Scope to use for Databricks secrets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | False    | (none)  |
| url                                        | The JDBC URL in the form `jdbc:subprotocol:subname` to connect to. The source-specific connection properties may be specified in the URL. e.g., <br/> `jdbc:postgresql://test.us-east-1.rds.amazonaws.com:5432/postgres`,<br/> `jdbc:mysql://database-mysql.test.us-east-1.rds.amazonaws.com:3306/mysql`.                                                                                                                                                                                                                                                                                                                                     | True     | (none)  |
| dbtable                                    | The JDBC table that should be read from. See [here](#source-table) for more details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | False    | (none)  |
| query                                      | The query that will be used to read data into Spark. See [here](#source-query) for more details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | False    | (none)  |
| driver                                     | The class name of the JDBC driver to use to connect to this URL. e.g., <br/> For postgres : `org.postgresql.Driver` <br/> For mysql: `com.mysql.cj.jdbc.Driver`                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | True     | (none)  |
| Partition Column, Lower Bound, Upper Bound | These options must all be specified if any of them is specified. In addition, numPartitions must be specified. They describe how to partition the table when reading in parallel from multiple workers. `partitionColumn` must be a numeric, date, or timestamp column from the table in question. Notice that `lowerBound` and `upperBound` are just used to decide the partition stride, _not_ for filtering the rows in table. So all rows in the table will be partitioned and returned. This option applies only to reading. <br/> `Note: Dropdown to choose column in partition column will only be populated once schema is inferred.` | False    | (none)  |
| Number of partitions                       | The maximum number of partitions that can be used for parallelism in table reading. This also determines the maximum number of concurrent JDBC connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | False    | (none)  |
| Query Timeout                              | The number of seconds the driver will wait for a Statement object to execute. Zero means there is no limit. As a `Target`, this option depends on how JDBC drivers implement the API setQueryTimeout, e.g., the h2 JDBC driver checks the timeout of each query instead of an entire JDBC batch.                                                                                                                                                                                                                                                                                                                                              | False    | `0`     |
| Fetch size                                 | The JDBC fetch size, which determines how many rows to fetch per round trip. This can help performance on JDBC drivers which default to low fetch size (e.g. Oracle with 10 rows).                                                                                                                                                                                                                                                                                                                                                                                                                                                            | False    | `0`     |
| Session Init Statement                     | After each database session is opened to the remote DB and before starting to read data, this parameter executes a custom SQL statement (or a PL/SQL block). Use this to implement session initialization code. Example: `option("sessionInitStatement", """BEGIN execute immediate 'alter session set "_serial_direct_read"=true'; END;""")`.                                                                                                                                                                                                                                                                                                | False    | (none)  |
| Push-Down Predicate                        | Enable or disable predicate push-down into the JDBC data source. The default value is `true`, in which case Spark will push down filters to the JDBC data source as much as possible. Otherwise, if set to false, no filter will be pushed down to the JDBC data source and thus all filters will be handled by Spark. Predicate push-down is usually turned off when the predicate filtering is performed faster by Spark than by the JDBC data source.                                                                                                                                                                                      | False    | `True`  |
| Push-Down Aggregate                        | Enable or disable aggregate push-down in V2 JDBC data source. The default value is `false`, in which case Spark will not push down aggregates to the JDBC data source. Aggregate push-down is usually turned off when the aggregate is performed faster by Spark than by the JDBC data source. Please note that aggregates can be pushed down if and only if all the aggregate functions and the related filters can be pushed down. Spark assumes that the data source can't fully complete the aggregate and does a final aggregate over the data source output.                                                                            | False    | `False` |

:::caution
If you get `class not found` error during running of pipeline then your dependency might be missing in the cluster.
To read more about how to add dependencies for specific jdbc jar [**click here**](docs/extensibility/dependencies/spark-dependencies.md).
:::

### Source Table

The `dbtable` parameter dictates which Table will be used as the source to read from. Anything that is valid in a `FROM` clause of a SQL query can also be used. For example, instead of a table name you could use a subquery in parentheses.

:::danger
The `dbtable` parameter and the `query` parameter are mutually exclusive, they cannot both be specified at the same time.
:::

### Source Query

The specified query will be used as a subquery in the `FROM` clause. Spark will also assign an alias to the subquery clause. For example, Spark will issue a query of the following form to the JDBC Source. `SELECT columns FROM (<user_specified_query>) spark_gen_alias`.

There are a couple of restrictions while using this option:

1. `query` and `partitionColumn` options cannot be used at the same time.
2. When specifying the `partitionColumn` option is required, the subquery can be specified using `dbtable` option instead and partition columns can be qualified using the subquery alias provided as part of `dbtable`.

### Example {#source-example}

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

| Parameter                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Required | Default                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------- |
| Credential Type           | Credential Type provider (Databricks Secrets or Username/Password or Environment variables for Username and Password). These can be set in the config options/via Databricks secrets or Environment variables for security purpose, so that it's not visible in code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | True     | (none)                                        |
| Credential Scope          | Scope to use for Databricks secrets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | False    | (none)                                        |
| url                       | The JDBC URL in the form `jdbc:subprotocol:subname` to connect to. The source-specific connection properties may be specified in the URL. e.g., <br/> `jdbc:postgresql://test.us-east-1.rds.amazonaws.com:5432/postgres`,<br/> `jdbc:mysql://database-mysql.test.us-east-1.rds.amazonaws.com:3306/mysql`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | True     | (none)                                        |
| table                     | The JDBC table that should be written into.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | True     | (none)                                        |
| driver                    | The class name of the JDBC driver to use to connect to this URL. e.g., <br/> For Postgres : `org.postgresql.Driver` <br/> For MySQL: `com.mysql.cj.jdbc.Driver`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | True     | (none)                                        |
| Number of Partitions      | The maximum number of partitions that can be used for parallelism in table writing. This also determines the maximum number of concurrent JDBC connections. If the number of partitions to write exceeds this limit, we decrease it to this limit by calling `coalesce(numPartitions)` before writing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | False    | (none)                                        |
| Query Timeout             | The number of seconds the driver will wait for a Statement object to execute. Zero means there is no limit. This option depends on how JDBC drivers implement the API setQueryTimeout, e.g., the h2 JDBC driver checks the timeout of each query instead of an entire JDBC batch.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | False    | `0`                                           |
| Batch Size                | The JDBC batch size, which determines how many rows to insert per round trip. This can help performance on JDBC drivers. This option applies only to writing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | False    | `1000`                                        |
| Isolation Level           | The transaction isolation level, which applies to current connection. It can be one of `NONE`, `READ_COMMITTED`, `READ_UNCOMMITTED`, `REPEATABLE_READ`, or `SERIALIZABLE`, corresponding to standard transaction isolation levels defined by JDBC's Connection object. Please refer to the [documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Connection.html) for more information.                                                                                                                                                                                                                                                                                                                                                           | False    | `READ_UNCOMMITTED`                            |
| Truncate                  | When `SaveMode` is set to `Overwrite`, this option causes Spark to truncate an existing table instead of dropping and recreating it. This can be more efficient, and prevents the table metadata (e.g., indices) from being removed. However, it will not work in some cases, such as when the new data has a different schema. In case of failures, users should turn off truncate option to use `DROP TABLE` again. Also, due to the different behavior of `TRUNCATE TABLE` among DBMS, it's not always safe to use this. `MySQLDialect`, `DB2Dialect`, `MsSqlServerDialect`, `DerbyDialect`, and `OracleDialect` supports this while `PostgresDialect` and the default `JDBCDialect` doesn't. For unknown and unsupported `JDBCDialect`, the user option truncate is ignored. | False    | `False`                                       |
| Cascade Truncate          | If enabled and supported by the JDBC database (PostgreSQL and Oracle at the moment), this options allows execution of a `TRUNCATE TABLE t CASCADE` (in the case of PostgreSQL a `TRUNCATE TABLE ONLY t CASCADE` is executed to prevent inadvertently truncating descendant tables). This will affect other tables, and thus should be used with care.                                                                                                                                                                                                                                                                                                                                                                                                                            | False    | Default according to the `JDBCDialect` in use |
| Create Table Options      | If specified, this option allows setting of database-specific table and partition options when creating a table (e.g., `CREATE TABLE t (name string) ENGINE=InnoDB.`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | False    |                                               |
| Create Table Column Types | The database column data types to use instead of the defaults when creating the table. Data type information should be specified in the same format as `CREATE TABLE` columns syntax (e.g: `"name CHAR(64), comments VARCHAR(1024)"`). The specified types should be valid Spark SQL data types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | False    | (none)                                        |

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame.                                                            |
| append     | If data already exists, append the contents of the DataFrame.                                                                    |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

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
