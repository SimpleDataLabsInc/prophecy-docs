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

Configure pipeline parameters to use variables throughout your pipeline. Parameters define values or expressions that can be used to dynamically populate values during pipeline runs. This can be useful when you want to:

- Control parameter configurations from [business applications](/analysts/business-applications).
- Set different values in the pipeline depending on the execution environment (such as development or production).
- Reuse the same values throughout the pipeline, ensuring consistency and maintainability.

:::info
Pipeline parameters are scoped to individual pipelines. They cannot be used in other pipelines in a project.
:::

## Configure parameters

To add parameters that you can use in your pipeline:

1. Open **Parameters** in the pipeline header.
1. Click **+ Add Parameter**.
1. Name the parameter. This is the name you will use when you call the parameter.
1. Define the data type of the parameter.
1. Add a value, function, or custom code that can determine the value of the parameter.

:::note
When you define parameters, variables will be automatically created in the SQL configuration.
:::

## Example: Dynamic target location

When configuring a Target gem, you need to define the location where a new table will be written. Often, this location varies depending on whether the pipeline is running in a development or production environment. You can handle this using pipeline parameters.

1. Create a pipeline parameter called `target_location`.
1. Provide a default value that points to your development folder in your file system: `/dev/data/target_folder/`.
1. Create a [business application](docs/analysts/business-apps/business-apps.md) that includes the parameter as a field.
1. Assign the parameter in the business application a default value that points to the production folder in your file system: `/prod/data/target_folder/`.
1. Schedule the business application to run in your production environment on a regular schedule.

This ensures that the scheduled pipeline run in production uses the correct target location.

## Best Practices

To make the most out of pipeline parameters, we suggest you:

- Use meaningful parameter names that indicate their purpose.
- Validate inputs to prevent unexpected errors during execution.
- Keep sensitive values (e.g., API keys) in [secrets](docs/administration/secrets/secrets.md) rather than passing them as plain parameters.
