---
title: Snowflake SQL
id: snowflake
sidebar_position: 1
description: Run Models on a Snowflake Warehouse
tags:
  - snowflake
  - sql
  - connect
  - warehouse
  - fabric
---

Snowflake has become a leading SQL Warehouse provider on the cloud. Follow the steps below to create a Fabric in Prophecy so that you can execute data transformations on your Snowflake Warehouse.

## Create a Fabric

Create an entity by clicking the **plus** icon. Click to **Create a Fabric**.
There are four steps to creating a Fabric:

1. [Basic info](./snowflake.md#basic-info)
2. [Providers](./snowflake.md#provider)
3. [Connections](./snowflake.md#connections) (coming soon)
4. [Secrets](./snowflake.md#secrets) (coming soon)

### Basic Info

First we’ll give our Fabric some **Basic information**
![SFBasicInfo](./img/SnowflakeFabric1.png)

| Basic Info                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1 Title** - Specify a title, like devSnowflake, for your Fabric. “dev” or “prod” are helpful descriptors for this environment setup. Also specify a description (optional).                    |
| **2 Team** - Select a team to own this Fabric. Click the dropdown to list the teams your user is a member. If you don’t see the desired team, ask a Prophecy Administrator to add you to a team. |
| **3 Continue** to the Provider step.                                                                                                                                                             |

### Provider

Add the **Provider** details. The SQL provider is both the storage warehouse and the execution environment where your SQL code will run.
![SFProvider](./img/SnowflakeFabric2.png)

| Provider details                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1 Provider Type** - Select SQL as the Provider type. (Alternatively, create a Spark type Fabric using instructions [here](/docs/low-code-spark/fabrics/fabrics.md) or an Airflow type Fabric following these [instructions](/docs/low-code-jobs/airflow/setup/setup.md).)                                                                                                            |
| **2 Provider** - Click the dropdown menu for the list of supported Provider types. Select Snowflake.                                                                                                                                                                                                                                                                                   |
| **3 URL** - Add the Snowflake Account URL, which looks like this: https://<your_domain_here>.snowflakecomputing.com                                                                                                                                                                                                                                                                    |
| **4 Username** - Add the username that Prophecy will use to connect to the Snowflake Warehouse.                                                                                                                                                                                                                                                                                        |
| **5 Password** - Add the password that Prophecy will use to connect to the Snowflake Warehouse. These username/password credentials are encrypted for secure storage. Also, each Prophecy user will provide their own username/password credential upon login. Be sure these credentials are scoped appropriately; Prophecy respects the authorization granted to this Snowflake user. |
| **6 Role** - Add the Snowflake role that Prophecy will use to read data and execute queries on the Snowflake Warehouse. The role matches the username/password provided above and should be scoped according to the permission set desired for Prophecy.                                                                                                                               |
| **7 Warehouse** - Specify the Snowflake warehouse for this execution environment.                                                                                                                                                                                                                                                                                                      |
| **8 Database** - Specify the Snowflake database for this execution environment.                                                                                                                                                                                                                                                                                                        |
| **9 Continue** to the Connections step, which is a feature coming soon for Snowflake Fabrics. Then Click Complete.                                                                                                                                                                                                                                                                     |

### Connections

(Coming soon for Snowflake Fabrics.)

### Secrets

([Secrets](https://docs.prophecy.io/low-code-spark/secret-management/) are currently implemented for Spark fabrics and are coming soon for SQL Fabrics.)

Now the Snowflake Fabric is complete! Once you’ve created a Fabric, it will appear on the Metadata page. Team Admins can manage their Team’s Fabrics by clicking into the Fabric from this Metadata page. Prophecy SQL Projects can connect to your new Snowflake SQL Fabric, read tables, and execute models.
![FabricMetadata](./img/FabricMetadata.png)

## Scheduling

SQL models can be scheduled using Airflow to run on Snowflake. Create an [Airflow Fabric](https://docs.prophecy.io/low-code-jobs/airflow/setup/), and setup a [Snowflake Connection](https://docs.prophecy.io/low-code-jobs/airflow/setup/MWAA_fabric#setting-up-connections) that references the Snowflake Fabric created above. Prophecy supports Snowflake Connections from these three Airflow flavors: [Composer](https://docs.prophecy.io/low-code-jobs/airflow/setup/composer_fabric), [MWAA](https://docs.prophecy.io/low-code-jobs/airflow/setup/MWAA_fabric#setting-up-connections), and [Prophecy Managed Airflow](https://docs.prophecy.io/low-code-jobs/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_snowflake_connections).
