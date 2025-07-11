---
title: Stored procedures
id: stored-procedure
slug: /analysts/stored-procedure
description: Create and call stored procedures to use in pipelines
tags:
  - extensibility
---

Stored procedures let you run procedural logic within your pipeline. While most business logic should be implemented using standard Prophecy gems or declarative SQL, stored procedures are useful in specific scenarios where procedural control is required.

Use stored procedures when:

- Migrating existing logic from systems that use stored procedures.
- Running DDL operations, such as creating or cleaning up tables.
- Bookkeeping, such as writing execution metadata (run time, parameters, status) to an audit table after a pipeline run finishes.
- Iterative operations, such as looping through all tables in a database to extract metadata or perform cleanup tasks.

:::info
This page describes how to create new stored procedures in Prophecy. For information about calling stored procedures in a pipeline, visit [StoredProcedure](/analysts/stored-procedure-gem).
:::

## Prerequisites

To use stored procedures, you need:

- Prophecy 4.1.2 or later.

## Create stored procedure

To create a stored procedure in a project, click **+ Add Entity > Stored Procedure** in the project browser. Then, configure and save the stored procedure.

The following table describes the parameters of a stored procedure using the visual view. In the code view, you can write the entire procedure using BigQuery SQL syntax, including the `CREATE PROCEDURE` statement and procedure body.

| Parameter | Description                                                                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project   | The Google Cloud project that contains the dataset where the stored procedure will be created.                                                                                            |
| Dataset   | The BigQuery dataset where the stored procedure will be created.                                                                                                                          |
| Arguments | Define the parameters passed to the stored procedure. <br/>Each argument includes a name, data type, and mode (`IN`, `OUT`, or `INOUT`). Learn more in [Argument Modes](#argument-modes). |
| Code      | The body of the stored procedure written in BigQuery SQL.                                                                                                                                 |

:::info
To learn about and view examples of stored procedures in BigQuery, visit [Work with SQL stored procedures](https://cloud.google.com/bigquery/docs/procedures).
:::

### Argument Modes

Stored procedures support the following argument modes:

- `IN` mode: Passes a value into the stored procedure. The procedure can read the value but cannot modify it.
- `OUT` mode: Returns a value from the stored procedure. The procedure assigns a value to the argument.
- `INOUT` mode: Passes a value into the procedure and returns a (possibly updated) value back to the caller.

### Procedure Options

Prophecy supports additional options that you can find in the top right corner of the stored procedure configuration.

- **Strict Mode**: When `True` (default), the procedure body is checked for errors such as non-existent tables or columns. The procedure fails if the body fails any of these checks. When `False`, the procedure body is checked only for syntax. Learn more about `strictMode` in the [BigQuery API reference documentation](https://cloud.google.com/bigquery/docs/reference/rest/v2/routines).
- **Description**: Use this field to document the purpose and behavior of the stored procedure. The description is saved with the procedure in BigQuery.

## Call stored procedure

Once you have created a stored procedure, you can call it using the [StoredProcedure gem](/analysts/stored-procedure-gem).

## Reusing and sharing stored procedures

After you create a stored procedure in Prophecy, you can call it in any pipeline of your project. To make your stored procedures available to other teams, you can share your project as a package in the [Package Hub](/engineers/package-hub). Other users will be able to call and use the stored procedure, provided they have the necessary permissions in BigQuery to run and perform the actions defined in the procedure.
