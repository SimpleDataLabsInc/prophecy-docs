---
title: Macro
id: macro
description: Use dbt macros in your pipelines
tags:
  - gems
  - analyst
  - custom
---

The Macro gem lets you use a macro that you have defined in your SQL project.

:::note
The Macro gem can only reference table-to-table macros. They cannot reference macros defined as functions in your project.
:::

## Parameters

| Parameter | Description                        |
| --------- | ---------------------------------- |
| Macro     | The macro that you wish to invoke. |
