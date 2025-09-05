---
title: Configurations
id: configuration
slug: /engineers/data-model-configurations
description: Configure SQL project and model variables
tags:
  - SQL
  - development
  - config
  - variable
---

:::edition Enterprise Only
This feature requires the [Enterprise Edition](/getting-started/editions/prophecy-editions) of Prophecy.
:::

Model configurations are settings that define how a model should be built and behave within your data warehouse.

When you open a SQL project, you can find **Configuration** under the **...** ellipses menu in the project header. If you use a configuration in your model, you can switch to the code view to see the configuration encoded in the `dbt_project.yml` or `schema.yml/properties.yml` file.

:::note See also
Further information can be found in the dbt documentation on [model configurations](https://docs.getdbt.com/reference/model-configs).
:::

## Types

Configurations are variables that you can use in various gem fields. There are two types of configurations.

- **Model configurations**: Only accessible in a specific model.
- **Project configurations**: Accessible to any component within a specific project.

## Syntax

The variable name and value should both be valid in Python. The way you reference these variables differ between model and project configurations. The table below shows some usage examples for each type of configuration.

| Type    | Python Syntax                | SQL Syntax                         |
| ------- | ---------------------------- | ---------------------------------- |
| Model   | `key`                        | `{{ key }}`                        |
| Project | `var("key", "defaultvalue")` | `{{ var("key", "defaultvalue") }}` |

Note that the `defaultvalue` is optional for project configurations.
