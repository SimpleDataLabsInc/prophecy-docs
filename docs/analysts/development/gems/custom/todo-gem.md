---
title: ToDo
id: todo
description: Create a placeholder gem in your pipeline
tags:
  - gems
  - analyst
  - custom
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine=""
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.10+"
/>

The ToDo gem lets you create a placeholder in your pipeline for a future gem.

:::info
Prophecy may insert ToDo gems automatically during migration from another tool when certain logic can't be translated. [Reach out](mailto:support@prophecy.io) to learn more about migration.
:::

## Input and Output

Though the ToDo gem does not pass any data, you can pre-configure the output schema of the gem for future reference.

| Port    | Description                                                                     |
| ------- | ------------------------------------------------------------------------------- |
| **in0** | The intended input for a future gem.                                            |
| **out** | The intended output for a future gem, for which you can create a custom schema. |

## Parameters

| Parameter         | Description                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Highlight message | A custom message you write. It appears in [Diagnostics](/analysts/project-editor#diagnostics) to describe why this placeholder exists.  |
| Error message     | A system-generated message added during migration. It explains why a process couldn’t be migrated so you have context for resolving it. |
| Helper code/text  | Notes, code snippets, or context you provide to guide the development of a functional gem later on.                                     |
