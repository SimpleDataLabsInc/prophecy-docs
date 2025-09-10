---
title: Pipeline parameters
id: pipeline-params
slug: /analysts/pipeline-parameters
description: Add variables to your pipelines
tags:
  - SQL
  - pipeline
  - analyst
---

Pipeline parameters let you define reusable variables that are injected into your pipeline at runtime. Instead of hard-coding values (such as dates or file paths), you can reference parameters.

Pipeline parameters are useful for:

- Customizing values when using [Prophecy Apps](/analysts/business-applications).
- Configuring pipelines for multiple execution environments (such as development or production).
- Keeping values consistent throughout the pipeline.

Once you create pipeline parameters, they are available as _configuration variables_ in [gems](/analysts/gems/) wherever you can select an expression.

:::info
Pipeline parameters are scoped to individual pipelines. They cannot be used in a project's other pipelines.
:::

## Configure parameters

To add pipeline parameters:

1. Open **Parameters** in the pipeline header.
1. Click **+ Add Parameter**.
1. Enter a name (such as `my_parameter`).  This is the name you use when you call the parameter.
1. Choose a data type (such as array, date, string, int, float) that matches the parameter's use.
1. Enter a value, or use a function or expression that computes the parameter's value.

:::note
When you define parameters, variables will be automatically created in the SQL configuration.
:::

## Use parameters

To use pipeline parameters:

1. Add any [gem](/analysts/gems/) that uses expressions, such as a [Filter](/analysts/filter) gem.
1. Select **Configuration Variables** from an Expression dropdown menu.

The pipeline parameter's value will be used for the expression.

Example: If you create a parameter called `start_date` with a value of _2025-09-01_, you can use it in a Filter gem to include only rows where `order_date` >= `start_date`. When the pipeline runs, it injects the parameter’s value into the filter expression.

## Use parameters as part of Prophecy Apps

Once you have included a pipeline parameter in a gem, you can use the parameter as an input field in a Prophecy App. When you run the app, users can enter their own value, which will override the value you set for the pipeline parameter. (The pipeline parameter serves as a default for the value.)

For example, you might have a Prophecy app that incorporates start dates and end dates for a weekly (or monthly) sales snapshot. After creating `start_date` and `end_date` pipeline parameters with values of _09/01/2025_ and _09/07/2025_, add `start_date` and `end_date` as input fields in the app. When the app runs, users enter their own dates and Prophecy returns data filtered for these dates.

## Example: Dynamic target location

When configuring a Target gem, you define the location where a new table will be written. Often, this location varies, depending on whether the pipeline runs in a development or production environment. You can handle this use case by adding a pipeline parameter and using it in the Target gem.

To do so:

1. Create a pipeline parameter called `target_location`.
1. Provide a default value that points to the file system or table path in the execution environment: `/dev/data/target_folder/`.
1. Create a [Prophecy App](/analysts/business-applications) that includes the parameter as a field.
1. Assign the parameter in the Prophecy App a default value that points to the production folder in your file system: `/prod/data/target_folder/`.
1. Schedule the app to run in your production environment on a regular schedule.

This ensures that when a scheduled pipeline runs in production, it uses the correct target location.

## Best Practices

To make the most out of pipeline parameters, we suggest you:

- Use meaningful parameter names that indicate their purpose.
- Validate inputs to prevent unexpected errors during execution.
- Keep sensitive values (such as API keys) in [secrets](/administration/secrets/secrets.md) rather than passing them as plain parameters.
- Group related values into arrays or JSON objects rather than creating many single-use parameters.
