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

- **Snowflake Partner Network Integration**: We've added a Connection String Identifier for Snowflake, following the Snowflake Native Connector Best Practices Guide. This was a requirement to advance in the Snowflake Partner Network.

- **Support custom artifactory resolve plibs version**: We now support custom artifactory resolution mode on EMR Fabrics such as Livy.

- **Object case sensitivity**: Table checks and lookups performed by Prophecy are no longer case sensitive.

- **Support for config resolution inside call_func()**: Config variables inside of the `call_function()` and `call_func()` are now supported.

- **Skip resubmission of Initial.Scala for Livy Fabrics**: In incremental mode, the Initial.Scala code would get submitted for every play button. We've introduced caching to avoid resubmission of the same code.

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

- **Ability to create a model from the model dropdown**: While configuring your Job, you now have the option to create a model from the Model dropdown.

- **Support for proxy-user impersonation in Kerberos Livy Fabric Auth**: As an admin user, you can configure multiple Keytab accounts in the [Admin Settings](/docs/settings/admin-settings.md). You can upload the Keytab files to set up proxy-user impersonation in Kerberos for secure authentication to Livy Fabrics.

### Minor Enhancements

- **Clone a Prophecy Job**: You can now clone a Prophecy Job just as you may clone a Pipeline. This is useful for Job renaming issues.

### Minor UX Improvements

- **Validate workspace URLs Improvements**: We now validate your workspace URLs that you provide for your Fabric Credentials.
- **Add connections Improvements**: We've improved the Add connections UX for creating a Fabric so that the required fields text match the Fabric types.
- **View clusters Fix**: We've fixed an issue where you weren't able to see all of your created clusters in the Attach Cluster dropdown.
- **SQL UI tooltips**: We've added tooltips to help explain your data access and target table write-path options.
