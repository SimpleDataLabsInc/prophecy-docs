---
title: Redshift
id: redshift
slug: /engineers/redshift
description: Parameters and properties to read from and write to the Redshift warehouse.
tags:
  - gems
  - warehouse
  - redshift
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
  uc_shared="Not Supported"
  livy="Not Supported"
/>

You can read from and write to Redshift.

## Parameters

| Parameter           | Tab        | Description                                                                                                                                                                                                                                                                       |
| ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Username            | Location   | Username for your JDBC instance.                                                                                                                                                                                                                                                  |
| Password            | Location   | Password for your JDBC instance.                                                                                                                                                                                                                                                  |
| JDBC URL            | Location   | JDBC URL to connect to. <br/>The source-specific connection properties may be specified in the URL. <br/> For example: <br/>- `jdbc:postgresql://test.us-east-1.rds.amazonaws.com:5432/postgres` <br/>- `jdbc:mysql://database-mysql.test.us-east-1.rds.amazonaws.com:3306/mysql` |
| Temporary Directory | Location   | S3 location to temporarily store data before it's loaded into Redshift.                                                                                                                                                                                                           |
| Data Source         | Location   | Strategy to read data. <br/>In the Source gem, you can select `DB Table` or `SQL Query`. In the Target gem, you must enter a table.<br/>To learn more, see [DB Table](#db-table) and [SQL Query](#sql-query).                                                                     |
| Schema              | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code.                                                                                   |

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

The Source gem reads data from Redshift and allows you to optionally specify the following additional properties.

### Source properties

| Property                                    | Description                                                              | Default |
| ------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| Forward S3 access credentials to Databricks | Whether to forward S3 access credentials to Databricks.                  | false   |
| Driver                                      | Class name of the Redshift driver to connect to this URL.                | None    |
| AWS IAM Role                                | Identity that grants permissions to access other AWS services            | None    |
| Temporary AWS access key id                 | Whether to allow a temporary credentials for authenticating to Redshift. | false   |

## Target

The Target gem writes data to Redshift and allows you to optionally specify the following additional properties.

### Target properties

| Property                                    | Description                                                                                                                                         | Default |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Forward S3 access credentials to Databricks | Whether to forward S3 access credentials to Databricks.                                                                                             | false   |
| Driver                                      | Class name of the Redshift driver to connect to this URL.                                                                                           | None    |
| AWS IAM Role                                | Identity that grants permissions to access other AWS services                                                                                       | None    |
| Temporary AWS access key id                 | Whether to allow a temporary credential for authenticating to Redshift.                                                                             | false   |
| Max length for string columns in redshift   | Maximum length for string columns in Redshift.                                                                                                      | `2048`  |
| Row distribution style for new table        | How to distribute data in a new table. <br/>For a list of the possible values, see [Supported distribution styles](#supported-distribution-styles). | None    |
| Distribution key for new table              | If you selected `Key` as the `Row distribution style for new table` property, specify the key to distribute by.                                     | None    |

### Supported distribution styles

| Distribution style | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| `EVEN`             | Distribute the rows across the slices in a round-robin fashion. |
| `KEY`              | Distribute according to the values in one column.               |
| `ALL`              | A copy of the entire table is distributed to every node.        |
