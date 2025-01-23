---
title: Databricks SQL Connection
id: prophecy_managed_airflow_fabric_dbx_sql_connections
description: How to create Databricks SQL connection (over DBT) in Prophecy Managed Airflow fabric
tags:
  - scheduling
  - airflow
  - jobs
  - prophecyManaged
  - fabric
  - connections
  - databricks
  - sql
  - dbt
---

To be able to Run your Databricks SQL Models, you need to have connection from Prophecy Managed Airflow to your Databricks SQL Environment.

## Add a Databricks SQL connection (DBT)

To add a Databricks SQL connection, click on **+ Add Connection**.

![Add_connection](../img/Add_Connection.png)

Select Databricks SQL in **(1) Connection Type**. Now under the **(2) Fabric**, you would select the already created fabric for Databricks SQL and Prophecy would setup the connection. You can provide a description in the **(3) Description**. Once done, click **(4) Save**.

![DB_SQL_connection](../img/DB_Sql_connection.png)
