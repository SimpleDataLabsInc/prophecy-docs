---
title: TableauWrite
id: tableau
slug: /analysts/tableau
description: Send data to automatically update your Tableau dashboards
tags:
  - gems
  - analyst
  - report
---

<span class="badge">Prophecy Automate</span><br/><br/>

The TableauWrite gem lets you send data that updates the data sources that are utilized by Tableau dashboards.

## Input

| Port    | Description                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| **in0** | The table that will be sent as a `Hyper` file to update your Tableau data source. You can only configure one input. |

No output table will be written to your data warehouse.

## Parameters

| Parameter                   | Description                                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Select or create connection | Defines which [Tableau connection](docs/administration/fabrics/prophecy-fabrics/connections/tableau.md) to use for the gem.                 |
| Project name                | The name of your Tableau project that contains the data source to update.                                                                   |
| Data source                 | The data source you want to update in Tableau.<br/>A data source is a connection to data that you are using for analysis and visualization. |

![Tableau Gem configuration](img/tableau-gem.png)
