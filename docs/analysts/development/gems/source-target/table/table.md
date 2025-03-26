---
title: Table
id: table
slug: /analysts/sql/table
description: Tables in the SQL warehouse
tags: []
---

<span class="badge">SQL</span><br/><br/>

Tables are natively read from and written to the SQL warehouse that is configured as your primary SQL connection in a Prophecy fabric. Prophecy offers the following table types:

| Name  | Description                                                                                                   |
| ----- | ------------------------------------------------------------------------------------------------------------- |
| Table | Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed).           |
| View  | A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime). |
| Seed  | Small CSV-format files that you can write directly in Prophecy.                                               |

## Create a Table gem

To begin using tables, add a Table gem to your pipeline.

1. Open a pipeline in a project.
1. Open the **Source/Target** category in the gem drawer.
1. Click **Table**. This adds a Table gem to your pipeline canvas.

## Configure the Table gem

When you open the [gem configuration](docs/analysts/development/gems/gems.md#gem-configuration), you can choose an existing table in your primary SQL warehouse or create a new one.

1. Select an existing table or create a new table. The available tables in the configuration are located in the default database and schema that you defined in your [fabric](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md).
1. Choose the type and format of the table (table, view, or seed) and click **Next**.
1. Set the location where the table will be stored in the SQL warehouse, then click **Next**. You can select an existing table location or name a new table.
1. Define the table's properties and verify the schema and click **Next**.
1. Load the data to preview the table.
1. Click **Save**.
