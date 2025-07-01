---
title: PowerBIWrite
id: power-bi
draft: true
slug: /analysts/power-bi
description: Send your pipeline output directly to PowerBI
tags:
  - gems
  - analyst
  - report
---

The PowerBIWrite gem lets you publish pipeline results directly to Power BI tables. Fine-grained options like write modes and schema management let you control how tables are written. You can configure the gem to either write tables to new datasets or existing ones in a specified Power BI workspace.

## Inputs

The PowerBIWrite gem accepts the following inputs.

| Port    | Description                                       |
| ------- | ------------------------------------------------- |
| **in0** | Table to add or update in the dataset.            |
| **inN** | Additional table to add or update in the dataset. |

To add additional input ports, click `+` next to **Ports**.

## Parameters

| Parameter                          | Description                                                                                                                                                                                                      |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Select or create connection        | Power BI [connection](/administration/fabrics/prophecy-fabrics/connections/power-bi) to use for the gem.                                                                                                         |
| Workspace Name                     | Power BI [workspace](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-new-workspaces) that contains or will contain the dataset.                                                             |
| Create New or Use Existing Dataset | Choose **Dataset Name** to create a new dataset in the workspace. Choose **Dataset ID** to push tables to an existing dataset in the workspace. These options are described in detail in the following sections. |

### Dataset Name

Select this option to create a new dataset in your workspace. You will need to give the dataset a name that will appear in Power BI.

#### Table Write Configuration {#table-write-1}

The Table Write Configuration lets you define how your table(s) will be written to the dataset. Each row accepts the following parameters:

| Parameter   | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| Input Alias | Input port that maps to a table in Power BI. Example: **in0**, **in1** |
| Table Name  | Write a corresponding table name that will appear in Power BI.         |

### Dataset ID

Select this option to update table inside an existing dataset in your workspace. You will need the Dataset ID to identify the existing dataset. The Dataset ID is typically part of the URL when you open a dataset in Power BI.

#### Table Write Configuration {#table-write-2}

The Table Write Configuration lets you define how your table(s) will be written to the dataset. Each row accepts the following parameters:

| Parameter        | Description                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input Alias      | Input port that maps to a table in Power BI. Example: **in0**, **in1**                                                                                                                                                                                                                                                                                                 |
| Table Name       | Write a corresponding table name that will appear in Power BI.                                                                                                                                                                                                                                                                                                         |
| Write Mode       | Controls how data is written to the Power BI table.<br/>Choose **Append** when you want to preserve existing data and continuously add new entries. <br/>Choose **Overwrite** if you want to fully refresh the table in Power BI.                                                                                                                                      |
| Overwrite Schema | Determines whether the schema (columns and their types) in Power BI should be replaced when it differs from the incoming dataset. <br/>Choose **Yes** if you expect the schema to evolve and want Power BI to reflect those changes automatically. <br/>Choose **No** to preserve the current schema in Power BI, even if the incoming data has a different structure. |
