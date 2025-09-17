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

Once you create pipeline parameters, they are available as _configuration variables_ in [gems](/analysts/gems/) wherever you can select a visual expression.

:::info
Pipeline parameters are scoped to individual pipelines. They cannot be used in a project's other pipelines.
:::

## Add pipeline parameters

To add pipeline parameters:

1. Open **Parameters** in the pipeline header.
1. Click **+ Add Parameter**.
1. Enter a name. This is the name you use when you call the parameter.
1. Choose a data type (such as `array`, `date`, `string`, `int`, or `float`) that matches the parameter's use.
1. Enter a value, or use a function or expression that computes the parameter's value. By default, these values are used during interactive execution. However, you can override the default values in certain areas like prophecy app configs and pipeline gems.

:::note
When you define parameters, variables will be automatically created in the SQL configuration.
:::

## Use parameters in pipelines

To use pipeline parameters:

1. Add any [gem](/analysts/gems/) that uses expressions, such as a [Filter](/analysts/filter) gem.
1. Select **Configuration Variables** from an Expression dropdown menu.

By default, the pipeline parameter's value will be used for the expression, though this value can be overwritten in both Prophecy gems and Prophecy apps.

> Example: If you create a parameter called `start_date` with a value of _2025-09-01_, you can use it in a Filter gem to include only rows where `order_date` >= `start_date`. When the pipeline runs, it injects the parameter’s value into the filter expression.

## Use parameters in Prophecy Apps

Parameters are useful in both [creating](/analysts/create-business-applications) and [consuming](/analysts/run-apps) Prophecy applications.

### Array example

You might, for example, create an Array parameter called `region_list` with a value of `['US-East','US-West','Europe']`.  
In the pipeline, you can use this parameter in a Filter gem as the value for a `region` expression, in order to return only rows where `region` equates to a value in the array.  

When the pipeline runs, users can substitute an array for the `region_list` parameter to change which regions are included in the output. For example, a sales team focused on Latin America might use `['Mexico','LAC','Brazil','Andean']` for `region_list`.

### Date example

To create an application that incorporates start dates and end dates for a weekly (or monthly) sales snapshot, you'd begin by adding a Filter gem to the pipeline that uses pipeline parameters for `start_date` and `end_date` pipeline parameters with values of _09/01/2025_ and _09/07/2025_. (These values will serve as defaults for the application.)

Next, use `start_date` and `end_date` as [date fields](/analysts/business-application-components#date) in a Prophecy App. When you run the app, users can enter their own values, which will override the values you set for the pipeline parameter. See [Add a filter](/analysts/create-business-applications#add-a-filter) in the [Create a Prophecy App topic](/analysts/create-business-applications) for more details.

When the app runs, users enter their own values for `start_date` and `end_date` and Prophecy will return data filtered for these dates.

### String example

For strings, you could define a pipeline parameter called `customer_type` with a value of `Premium`.  
In a Filter gem, you include an expression called `customer_category`, and use the `customer_type` pipeline parameter as a value.

When the pipeline runs, you can set the `customer_type` parameter to `Standard`.

### Boolean example

For Boolean values, you could create a pipeline parameter called `include_archived` with a value of `false`.  
In a Filter gem, you include code that uses the `include_archived` parameter to determine whether to include archived rows:  

```sql
WHERE archived = include_archived
```
Users running the Prophecy app can set `include_archived = true` to include historical records.

### Double example

For doubles, you could create a pipeline parameter called `discount_rate` with a value of `0.15`. In a Formula gem, you apply it as `price * (1 - discount_rate)` to calculate discounted prices.

When the pipeline runs, users can change the `discount_rate` to apply different percentages without editing the pipeline.

### Long example

For longs, you create a parameter called `max_records` with a value of `1000000`.

In a gem, you reference this parameter to cap the number of rows returned by the pipeline.

Users can increase or decrease this number depending on their performance needs.

### Float example

For floats, you could create a pipeline parameter called `temperature_threshold` with a value of `98.6`.
In a Filter gem, you use this parameter to return only rows where `sensor_temp` > `temperature_threshold`.

At runtime, you can adjust `temperature_threshold` to control sensitivity.

## Example: Dynamic target location

When configuring a Target gem, you define the location where a new table will be written. Often, this location varies, depending on whether the pipeline runs in a development or production environment. You can handle this use case by adding a pipeline parameter and using it in the Target gem.

To do so:

1. Create a pipeline parameter called `target_location`.
1. Provide a default value that points to the file system or table path in the execution environment: `/dev/data/target_folder/`.
1. Create a [Prophecy App](/analysts/business-applications) that includes the parameter as a field.
1. Assign the parameter in the Prophecy App a default value that points to the production folder in your file system: `/prod/data/target_folder/`.
1. [Schedule the app](/analysts/run-apps#schedules) to run in your production environment on a regular schedule.

This ensures that when a scheduled pipeline runs in production, it uses the correct target location.

## Best Practices

To make the most out of pipeline parameters, we suggest you:

- Use meaningful parameter names that indicate their purpose.
- Validate inputs to prevent unexpected errors during execution.
- Keep sensitive values (such as API keys) in [secrets](/administration/secrets) rather than passing them as plain parameters.
