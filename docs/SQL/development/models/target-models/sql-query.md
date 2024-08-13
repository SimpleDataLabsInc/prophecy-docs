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

**SQL Query**: View and enable your custom SQL query at the end of your Model.

You can add a custom SQL Query. Useful if you are doing data processing with advance Jinja or dbt templating.

Can SQL query as a normal string in the editor. You can use standard dbt functions and variables.
You can declare the variables under **...** > **Configuration**, and they can be defined at the model or project level.

id_threshold 3 > {% set id_threshold = 3 %}

```SQL
SELECT *

FROM customers_raw

WHERE customer_id > {{ id_threshold }}
```
