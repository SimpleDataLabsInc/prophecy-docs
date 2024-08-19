---
title: SQL Query
id: sql-query
description: SQL Query of Target Models
sidebar_position: 5
tags:
  - concept
  - model
  - query
  - SQL
---

You can use the SQL Query tab to view and enable your custom SQL query at the end of your Model. Custom query enables you to perform one last data transformation step as a SQL query, before creating the model.

If you import your own codebase and your final query has additional conditions, your query is saved here for you to view and edit. For low code users you can use a Filter Gem to achieve the same.

## Enable custom SQL query

You can add a custom SQL Query. Useful if you are doing data processing with advance Jinja or dbt templating.
that you need flexibility when doing last mile operations for your SQL models. To that end, we support use of declared variables in the SQL queries for those last mile operations on each model write.
We've added the powerful functionality to configure variables directly in a SQL Query for each target model. Normally only advanced users would be able to use Jinja or DBT templating with declared variables for their last mile data processing.

### Ports

Ports represent Gem or generated code functions inputs and outputs. Port name is a variable name in Python and Scala code and table alias in the SQL code. Visual order of the ports defines the order of the variables.

You can edit or add Ports for Input and Output.

### SQL Query

- Toggle **Enable custom SQL query** to enable your custom SQL query at the end of your Model.

![SQL Query](img/sql-query.png)

Your SQL query will appear as a normal string in the Code view.

```SQL
SELECT *

FROM customers_raw

WHERE customer_id > {{ id_threshold }}
```

You can use dbt variables in the SQL query.

## Declare variables

The variable declaration interface allows you to configure variables directly in the SQL Query for your target model.

Declared variables are accessible by clicking configuration to add the variable of interest. You can use the variable, along with standard dbt functions, in the target model SQL Query tab.

- You can declare the variables under **...** > **Configuration** using key-value pairs, and they can be defined at the model or project level.

![Configuration](img/configuration.png)
