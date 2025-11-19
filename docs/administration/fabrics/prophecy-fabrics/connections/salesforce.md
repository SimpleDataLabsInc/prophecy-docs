---
title: Salesforce connection
sidebar_label: Salesforce
id: salesforce
description: Learn how to connect with Salesforce
tags:
  - connections
  - salesforce
---

The Salesforce connection lets you access your [datasets](https://help.salesforce.com/s/articleView?id=analytics.bi_integrate_datasets.htm&type=5) and [objects](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm) from Salesforce in Prophecy. Prophecy leverages the Salesforce API to access and update your data.

## Prerequisites

Prophecy connects to Salesforce using an API access token associated with your Salesforce account. Access to datasets and objects is controlled by the permissions granted to the account. Before setting up the connection, ensure your account has the necessary access to all relevant resources.

For more details, visit [Dataset Security](https://help.salesforce.com/s/articleView?id=analytics.bi_integrate_dataset_security.htm&type=5) and [Object Permissions](https://help.salesforce.com/s/articleView?id=platform.users_profiles_object_perms.htm&type=5) in the Salesforce documentation.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/salesforce)                        | Yes       |
| Write data with a [Target gem](/analysts/salesforce)                       | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |
| Index tables in the [Knowledge Graph](/knowledge-graph)                    | No        |

## Limitations

You cannot browse your Salesforce datasets and objects in the Environment browser. Therefore, you cannot drag and drop tables from the Salesforce connection onto your canvas. Instead, all Salesforce Source and Target gems must be manually configured.

## Connection parameters

To create a connection with Salesforce, enter the following parameters:

| Parameter                                                                                         | Description                                                                                                                                               |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name                                                                                   | Unique name for the connection                                                                                                                            |
| Salesforce URL                                                                                    | The base URL for your Salesforce instance. <br/>Example: `https://yourcompany.my.salesforce.com`                                                          |
| Username ([Secret required](docs/administration/fabrics/prophecy-fabrics/secrets/secrets.md))     | Your Salesforce username used for authentication                                                                                                          |
| Password ([Secret required](docs/administration/fabrics/prophecy-fabrics/secrets/secrets.md))     | Your Salesforce password used for authentication                                                                                                          |
| Access Token ([Secret required](docs/administration/fabrics/prophecy-fabrics/secrets/secrets.md)) | The [Salesforce API access token](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_access_tokens.htm&type=5) associated with your account |
| Salesforce API Version                                                                            | The version of the Salesforce API to use                                                                                                                  |

## Data type mapping

When Prophecy processes data from Salesforce using SQL warehouses, it converts Salesforce-specific data types to formats compatible with your target warehouse. This table shows how Salesforce data types are transformed for Databricks and BigQuery.

:::note
The data types listed in the first column are the underlying API [Primitives](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm) and [Field Types](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/field_types.htm) (such as double, reference, and textarea) used by Salesforce developers and integration tools. This mapping reflects the technical storage format of the data.

They are not the user-facing field names you see in the Salesforce setup menu (such as "Number," "Lookup Relationship," or "Long Text Area"). You can find mappings between these technical types and the corresponding user-interface names in the official Salesforce documentation.
:::

### Primitive data types

| Salesforce data type | Databricks                      | BigQuery                                |
| -------------------- | ------------------------------- | --------------------------------------- |
| string               | STRING<br/>Alias: String        | STRING<br/>Alias: String                |
| boolean              | BOOLEAN<br/>Alias: Boolean      | BOOL<br/>Alias: Boolean                 |
| double               | DOUBLE<br/>Alias: Double        | FLOAT64<br/>Alias: Float                |
| double(p,s)          | DECIMAL(p,s)<br/>Alias: Decimal | NUMERIC / BIGNUMERIC<br/>Alias: Numeric |
| date                 | DATE<br/>Alias: Date            | DATE<br/>Alias: Date                    |
| dateTime             | TIMESTAMP<br/>Alias: Timestamp  | TIMESTAMP<br/>Alias: Timestamp          |
| time                 | STRING<br/>Alias: String        | TIME<br/>Alias: Time                    |
| base64               | BINARY<br/>Alias: Binary        | BYTES<br/>Alias: Bytes                  |

### Data types for fields

| Salesforce data type | Databricks                                             | BigQuery                                               |
| -------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| ID                   | STRING<br/>Alias: String                               | STRING<br/>Alias: String                               |
| email                | STRING<br/>Alias: String                               | STRING<br/>Alias: String                               |
| percent              | DECIMAL<br/>Alias: Decimal                             | FLOAT64<br/>Alias: Float                               |
| phone                | STRING<br/>Alias: String                               | STRING<br/>Alias: String                               |
| currency             | DECIMAL(16,2)<br/>Alias: Decimal                       | FLOAT64<br/>Alias: Float                               |
| url                  | STRING<br/>Alias: String                               | STRING<br/>Alias: String                               |
| encryptedstring      | STRING<br/>Alias: String                               | STRING<br/>Alias: String                               |
| picklist             | STRING<br/>Alias: String                               | STRING<br/>Alias: String                               |
| multipicklist        | ARRAY&lt;STRING&gt;<br/>Alias: Array                   | ARRAY&lt;STRING&gt;<br/>Alias: Array                   |
| reference            | STRING<br/>Alias: String                               | STRING<br/>Alias: String                               |
| location             | STRUCT<br/>Alias: Struct                               | STRUCT<br/>Alias: Struct                               |
| address              | STRUCT<br/>Alias: Struct                               | STRUCT<br/>Alias: Struct                               |
| textarea             | STRING<br/>Alias: String                               | STRING<br/>Alias: String                               |
| calculated           | Depends on the [Formula Data Type](#calculated-fields) | Depends on the [Formula Data Type](#calculated-fields) |

#### Calculated fields

Calculated fields have distinct data types based on the [formula data type](https://help.salesforce.com/s/articleView?id=platform.choosing_a_formula_data_type.htm&type=5) you select in Salesforce.

| Formula data type | Databricks                     | BigQuery                       |
| ----------------- | ------------------------------ | ------------------------------ |
| Text              | STRING<br/>Alias: String       | STRING<br/>Alias: String       |
| Number            | DOUBLE<br/>Alias: Double       | FLOAT64<br/>Alias: Float       |
| Checkbox          | BOOLEAN<br/>Alias: Boolean     | BOOL<br/>Alias: Boolean        |
| Date              | DATE<br/>Alias: Date           | DATE<br/>Alias: Date           |
| Date/Time         | TIMESTAMP<br/>Alias: Timestamp | TIMESTAMP<br/>Alias: Timestamp |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Salesforce connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::
