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

#### Spark Copilot Enhancements {#Spark339}

- **Support custom artifactory resolve plibs version**: We now support adding custom Pypi or Maven dependencies for pipelines running on all Spark fabrics including EMR, Dataproc, etc.

- **Support for config resolution inside call_func()**: Config variables inside of the `call_function()` and `call_func()` are now supported. The new syntax is `call_function("{{catalogName}}.{{database}}.{{funcName}}", "{{firstArg}}")`.

- **Support for proxy-user impersonation in Kerberos Livy Fabric Auth**: As an admin user, you can configure multiple Keytab accounts in the [Security settings](docs/administration/authentication/security-settings.md). You can upload the Keytab files and set up proxy-user impersonation in Kerberos for secure authentication to Livy fabrics.

#### SQL Copilot Enhancements {#SQL339}

In this release, we've updated the UX and capabilities of the expression builder, target model, and more. Read our [New SQL UI Onboarding Guide](./new-ui-sql.md) to get familiar with the updated interface.

#### Airflow Copilot Enhancements {#Airflow339}

- **Support for partial run for Airflow Jobs**: We've added play buttons on gems, which you can use to start partial runs for Airflow Jobs.

- **Ability to create a model from the model dropdown**: While configuring the model gem in your job, you now have the option to create a model from the Model dropdown.

### Minor Improvements {#MinorImprovements339}

- **Clone a Prophecy Job**: You can now clone a Prophecy job just as you may clone a pipeline. This is useful for job renaming issues.
