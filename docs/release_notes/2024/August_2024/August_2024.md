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

## 3.3.9.\* (August 12, 2024)

- Prophecy Python libs version: 1.9.9
- Prophecy Scala libs version: 8.0.29

### Features {#Features339}

#### Spark Copilot Enhancements

- **Support custom artifactory resolve plibs version**: We now support adding custom Pypi or Maven dependencies for Pipelines running on all Spark Fabrics including EMR, Dataproc, etc.

- **Support for config resolution inside call_func()**: Config variables inside of the `call_function()` and `call_func()` are now supported. The new syntax is `call_function("{{catalogName}}.{{database}}.{{funcName}}", "{{firstArg}}")`.

- **Support for proxy-user impersonation in Kerberos Livy Fabric Auth**: As an admin user, you can configure multiple Keytab accounts in the [Admin Settings](../../../architecture/authentication/admin-settings.md). You can upload the Keytab files and set up proxy-user impersonation in Kerberos for secure authentication to Livy Fabrics.

#### SQL Copilot Enhancements

In this release, we've updated the UX and capabilities of the expression builder, target model, and more. Read our [New SQL UI Onboarding Guide](./new-ui-sql.md) to get familiar with the updated interface.

#### Airflow Copilot Enhancements

- **Support for partial run for Airflow Jobs**: We've added play buttons on Gems, which you can use to start partial runs for Airflow Jobs.

- **Ability to create a model from the model dropdown**: While configuring the model Gem in your Job, you now have the option to create a model from the Model dropdown.

### Minor Enhancements

- **Clone a Prophecy Job**: You can now clone a Prophecy Job just as you may clone a Pipeline. This is useful for Job renaming issues.
