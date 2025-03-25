---
title: Pipeline parameters
id: pipeline-params
description: Add variables to your pipelines
tags:
  - SQL
  - pipeline
  - analyst
---

If you want to create variables to use throughout your pipeline, you can configure **Pipeline Parameters**. Parameters let you define values or expressions that can be used to dynamically populate values during pipeline runs. These can be useful when you want to:

- Control parameter configurations from business applications.
- Set different values in the pipeline depending on the execution environment (for example, development vs production).
- Reuse the same values throughout the pipeline, ensuring consistency and maintainability.

## Configure parameters

1. Open **Parameters** in the pipeline header.
1. Click **+ Add Parameter**.
1. Name the parameter. This is the name you will use when you call the parameter.
1. Define the data type of the parameter.
1. Add a function or custom code that can determine the value of the parameter.

:::note
When you define parameters, variables will be automatically created in the SQL configuration.
:::
