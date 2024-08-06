---
sidebar_position: 1
id: August_2024
description: Release notes for August
title: August 2024
tags:
  - release notes
  - changelog
  - august
---

## 3.3.9.\* (August 2, 2024)

- Prophecy Python libs version: 1.9.9
- Prophecy Scala libs version: 8.0.29

### Features {#Features339}

#### Spark Copilot Enhancements

- **Support custom artifactory resolve plibs version**: We now support adding custom Pypi or Maven dependencies for Pipelines running on all Spark Fabrics including EMR, Dataproc, etc.

- **Support for config resolution inside call_func()**: Config variables inside of the `call_function()` and `call_func()` are now supported. The new syntax is `call_function("{{catalogName}}.{{database}}.{{funcName}}", "{{firstArg}}")`.

#### SQL Copilot Enhancements

##### Enhancements in Low-Code SQL

- **Target Model**: In this release, we've updated the UX and capabilities of the target model in SQL projects. There are now the following tabs within the model:

  - **Type & Format**: Update the format of the model from View to Table
  - **Location**: Update the location by overwriting the Database, Schema, or Alias
  - **Schema**: Make schema changes
  - **SQL Query**: View and enable your custom SQL query
  - **Write Options**: Use Write Modes such as Overwrite, Append, and Merge

#### Airflow Copilot Enhancements

- **Support for partial run for Airflow Jobs**: We've added play buttons on Gems, which you can use to start partial runs for Airflow Jobs.

- **Ability to create a model from the model dropdown**: While configuring the model Gem in your Job, you now have the option to create a model from the Model dropdown.

- **Support for proxy-user impersonation in Kerberos Livy Fabric Auth**: As an admin user, you can configure multiple Keytab accounts in the [Admin Settings](/docs/settings/admin-settings.md). You can upload the Keytab files and set up proxy-user impersonation in Kerberos for secure authentication to Livy Fabrics.

### Minor Enhancements

- **Clone a Prophecy Job**: You can now clone a Prophecy Job just as you may clone a Pipeline. This is useful for Job renaming issues.
