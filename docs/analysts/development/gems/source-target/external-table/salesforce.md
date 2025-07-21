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

The Salesforce gem enables you to read data from Salesforce directly into your Prophecy pipelines. The gem supports both SOQL (Salesforce Object Query Language) for querying standard Salesforce objects and SAQL (Salesforce Analytics Query Language) for accessing analytical datasets. Note that Prophecy does not support Salesforce as a target destination.

## Configuration tabs

When you create a new external Source gem, the gem dialog contains the following tabs.

- **Type**: Select the Salesforce table option.
- **Source location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the location where you will read tables in Salesforce.
- **Properties**: Infer or manually specify the table schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

The following sections provide a detailed reference for sources and targets.

## Source configuration

Use these settings to configure a Salesforce Source gem for reading data.

### Source location

| Parameter                   | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Format type                 | Table format for the source. For Salesforce tables, set to `salesforce`.                                                                                                                                                                                                                                                                                                                               |
| Select or create connection | Select or create a new [Salesforce connection](/administration/fabrics/prophecy-fabrics/connections/salesforce) in the Prophecy fabric you will use.                                                                                                                                                                                                                                                   |
| Data Source                 | Specify the table you would like to read using a query. <br/>Use [SOQL](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm) format to retrieve data from the Salesforce database. <br/>Use [SAQL](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_intro.htm) format to access CRM Analytics data. |

<!-- ### Source properties

| Property                                     | Description                                                                                                                                                                                                                                                            |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description                                  | Description of the table.                                                                                                                                                                                                                                              |
| Primary key chunking                         | Enables splitting queries on large tables into chunks based on the record IDs, or primary keys, of the queried records.                                                                                                                                                |
| Chunk size                                   | Specifies the number of records per chunk when primary key chunking is enabled.                                                                                                                                                                                        |
| Timeout                                      | Maximum time in seconds to wait for a response from the Salesforce API before the request times out.                                                                                                                                                                   |
| Max Length of column                         | Sets the maximum character length for columns when inferring the table schema.                                                                                                                                                                                         |
| External ID field name for Salesforce Object | Assign an External ID attribute to a [custom field](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/custom_fields.htm) for a Salesforce object. This may be used to reference an ID from an external system such as Prophecy. | -->
