---
title: Salesforce
id: salesforce
slug: /analysts/salesforce
description: Read and write from Salesforce
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

The Salesforce gem enables you to read data from Salesforce directly into your Prophecy pipelines. The gem supports both SOQL (Salesforce Object Query Language) for querying standard Salesforce objects and SAQL (Salesforce Analytics Query Language) for accessing analytical datasets.

:::note
Prophecy does not support writing data to Salesforce.
:::

## Configuration tabs

When you create a new external Source gem, the gem dialog contains the following tabs.

- **Type**: Select the Salesforce table option.
- **Source location**: Choose the [connection](/core/prophecy-fabrics/connections/) and define the location where you will read tables in Salesforce.
- **Properties**: Infer or manually specify the table schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Source configuration

Use these settings to configure a Salesforce Source gem for reading data.

### Source location

| Parameter                   | Description                                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the source. For Salesforce tables, set to `salesforce`.                                                           |
| Select or create connection | Select or create a new [Salesforce connection](/core/prophecy-fabrics/connections/salesforce) in the Prophecy fabric you will use. |
| Query Mode                  | Specify the table you would like to read using a query. Learn more in [Query modes](#query-modes).                                 |

### Query modes

You have three options for retrieving data from Salesforce.

#### SAQL

Use a [SAQL](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_intro.htm) query to access CRM Analytics datasets (formerly known as Wave Analytics). For example:

```
q = load "Account"; q = foreach q generate 'Id' as 'Id', 'Name' as 'Name'; q = limit q 5;
```

#### SOQL

Use a [SOQL](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm) query to read structured data from Salesforce objects such as `Account` or `Contact` tables. For example:

```SQL
SELECT Id, Name, Industry, CreatedDate FROM Account WHERE CreatedDate >= LAST_N_DAYS:30
```

:::info
When using the `FIELDS(ALL)` keyword, the response is [limited to 200 rows per call](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_fields.htm#limiting_result_rows).
:::

#### Salesforce Objects

Retrieve all records from a specific Salesforce object by name, without writing a query. Use this option when the object exceeds the default 200 row limit of `FIELDS(ALL)`.

### Source properties

The following properties are available for the Salesforce Source gem. These properties only apply to tables retrieved with the **SOQL** or **Salesforce Object** query mode.

| Property                              | Description                                                                                        |
| ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Enable bulk query                     | Enable to run the query as a batch job in the background for better performance on large datasets. |
| Retrieve deleted and archived records | Enable to include soft-deleted and archived records in the returned table.                         |
