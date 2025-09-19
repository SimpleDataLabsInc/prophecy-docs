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

Suppose you have a dataset with a column called `region`. You can use an **Array** pipeline parameter called `region_list` to filter rows that match one of several regions.

#### Create the Array parameter

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `region_list`.
1. Select the **Type** and choose **Array**.
1. Click **Select expression > Value**.
1. Enter `['US-East','US-West','Europe']` and click **Done**.
1. Click **Save**.

#### Use the Array parameter in a Filter gem

Next, you’ll filter your dataset to only include rows where the `region` column matches a value in `region_list`.

1. Add a **Filter** gem.
1. Remove the default `true` expression.
1. Select **Column > region**.
1. Choose the **In ( ∈ )** operator.
1. Click **Select expression > Configuration Variable**.
1. Select `region_list`.
1. Click **Save**.

#### Create a Prophecy app to adjust region filters

1. Add a Prophecy app called `regional_sales`.
1. Add a title for the app.
1. Select **Interactive > Multi-Select Dropdown**.
1. Select `region_list` for **Configuration field**.
1. Add options such as `US-East`, `US-West`, `Europe`, `Mexico`, `Brazil`, `LAC`, and `Andean`.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose your filtered dataset table.
1. Select the columns to display.

When the app runs, users can substitute values for `region_list`. For example, a sales team in Latin America might set `['Mexico','LAC','Brazil','Andean']` to view their focus regions.

### Date example

Suppose you want to create an application that shows sales data for a specific date range, such as a weekly or monthly snapshot. You can use two **Date** pipeline parameters: `start_date` and `end_date`.

#### Create the Date parameters

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `start_date`.
1. Select the **Type** and choose **Date**.
1. Click **Select expression > Value**.
1. Enter `09/01/2025` (or another default start date) and click **Done**.
1. Click **Save**.
1. Repeat the steps above to create an `end_date` parameter with a default value of `09/07/2025`.

#### Use the Date parameters in a Filter gem

1. Add a **Filter** gem to your pipeline.
1. Remove the default `true` expression.
1. Select **Column > sales_date** (or your dataset’s date column).
1. Add an expression such as `sales_date >= start_date AND sales_date <= end_date`.
1. For both `start_date` and `end_date`, click **Select expression > Configuration Variable** and select the corresponding parameter.
1. Click **Save**.

#### Create a Prophecy app with date fields

1. Add a Prophecy app called `sales_snapshot`.
1. Add a title for the app.
1. Select **Interactive > Date Field**.
1. For **Configuration field**, choose `start_date`.
1. Add another **Date Field** and select `end_date`.
1. See [date fields]()

### String example

Suppose you have a dataset with a column called `customer_category`. You can use a **String** pipeline parameter called `customer_type` to filter rows for a specific group of customers.

#### Create the String parameter

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `customer_type`.
1. Select the **Type** and choose **String**.
1. Click **Select expression > Value**.
1. Enter `Premium` and click **Done**.
1. Click **Save**.

#### Use the String parameter in a Filter gem

Next, you’ll filter your dataset based on the `customer_type` parameter.

1. Add a **Filter** gem.
1. Remove the default `true` expression.
1. Select **Column > customer_category**.
1. Choose the **Equals ( = )** operator.
1. Click **Select expression > Configuration Variable**.
1. Select `customer_type`.
1. Click **Save**.

#### Create a Prophecy app to select customer groups

1. Add a Prophecy app called `customer_segment`.
1. Add a title for the app.
1. Select **Interactive > Dropdown**.
1. Give the dropdown a label.
1. Select `customer_type` for **Configuration field**.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose your filtered dataset table.
1. Select the columns to display.

When the app runs, users can switch the `customer_type` parameter from `Premium` to `Standard` (or another category) to explore different customer groups.

### Boolean example

Suppose you have two datasets, one with current reviews called `customer_reviews` and one with archived reviews called `archived_reviews`. You can use a Boolean pipeline parameter to create a Prophecy app that lets users choose whether to include archived reviews.

For Boolean values, you could create a pipeline parameter called `include_archived` with a value of `false`. 
In a Filter gem, you include code that uses the `include_archived` parameter to determine whether to include archived rows:

Users running the Prophecy app can set `include_archived = true` to include historical records.

First, you'll set up an `include_archived` parameter, which will be a Boolean value.

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `include_archived`.
1. Select the **Type** and choose **Boolean**.
1. Click **Select expression > Value**.
1. Click **False** and click **Done**.
1. Click **Save**.

Add `customer_reviews` and `archived_reviews` as Table gems.

#### Use the Boolean parameter in an expression

Next, you'll create a Filter gem that uses the `include_archived` pipeline paramter in an expression.

1. Create and open the Filter gem.
1. Remove the default `true` expression.
1. Click **Select expression > Column** and select `archived`.
1. In the **Select operator** dropdown, select **equals**.
1. In the **Select expression** dropdown of the Filter condition, select **Configuration variable** and select `include_archived`.
1. Click **Save**.
1. Connect the Filter gem to `archived_reviews`.

The output of this gem will only include rows where `include_archived` is false. In the steps below, you'll create a Prophecy app that lets users change `include_archived` to true.

#### Add a UnionByName gem

1. Create and open the UnionByName gem.
1. Select **Union By Name (Allow Missing Columns)** (it should be selected by default).
1. Connect the `customer_reviews` table and the Filter gem to the UnionByName gem.

This step combines filtered rows from `archived_reviews` with rows from `customer_reviews`. 

Add a Table gem called `filtered_reviews` and connect it to the UnionByName gem.

#### Create a Prophecy app to show archived data

1. Add a Prophecy app called Reviews.
1. Add a Title for the app.
1. Add a Toggle that uses `include_archived` as a Configuration field, with a label reading `Include archived reviews?`.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the Inspect tab, select `filtered_reviews` for **Data table**.
1. Select columns to display.

When the app runs, users can toggle `Include archived reviews?` to include archived reviews in results.

### Double example

Suppose you have a dataset that includes a column called `discount_rate` that applies a discount for customers in certain cases.

You can use a Double pipeline parameter to create a Prophecy app that lets users adjust this rate.

First, you'll set up a `discount_rate` parameter, which will be a Double value.

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `discount_rate`.
1. Select the **Type** and choose Double.
1. Click **Select expression > Value**.
1. Enter `1.5` and click **Done**.
1. Click **Save**.

#### Use the Double parameter in an expression

Next, you'll create a Reformat gem that uses the `discount_rate` pipeline parameter in an expression.

1. Create and open the Reformat gem.
1. Remove the default `true` expression.
1. Select **Column > price**
1. Click **Select expression > Configuration Variable**.
1. Select `discount_rate`.
1. Click **Save**. 

Add a Table gem called `products_discounted` and connect it to the UnionByName gem.

#### Create a Prophecy app to show discounted products

1. Add a Prophecy app called produccts_with_reviews.
1. Add a title for the app.
1. Select **Interactive > Number Input**.
1. Select `discount_rate` for **Configuration field**.
1. Give the field a label. 
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the Inspect tab, select `products_discounted` for **Data table**.
1. Select columns to display.

When the app runs, users can enter their own rate in `discount_rate`.

### Long example

Suppose you have a dataset where you want to control how many rows are returned. You can create a **Long** pipeline parameter called `max_records` to set this limit.

#### Create the Long parameter

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `max_records`.
1. Select the **Type** and choose **Long**.
1. Click **Select expression > Value**.
1. Enter `1000000` and click **Done**.
1. Click **Save**.

#### Use the Long parameter in a gem

Next, you’ll create or edit a gem that uses the `max_records` parameter to cap the number of rows.

1. Add a **Limit** gem.
1. In **Limit Condition**, start typing `max_records`.
1. Select `max_records`. Prophecy fills in the **Limit Condition** field with `{{ var('max_records') }}`.
1. Click **Save**.

#### Create a Prophecy app to adjust record limits

1. Add a Prophecy app called `products_limited`.
1. Add a title for the app.
1. Select **Interactive > Number Input**.
1. Select `max_records` for **Configuration field**.
1. Give the field a label, such as **Maximum Rows**.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose your limited dataset table.
1. Select the columns to display.

When the app runs, users can increase or decrease the `max_records` value depending on their performance needs.

### Float example

Suppose you have a dataset with a column called `sensor_temp`. You can use a **Float** pipeline parameter called `temperature_threshold` to filter out rows below a certain temperature.

#### Create the Float parameter

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `temperature_threshold`.
1. Select the **Type** and choose **Float**.
1. Click **Select expression > Value**.
1. Enter `98.6` and click **Done**.
1. Click **Save**.

#### Use the Float parameter in a Filter gem

Next, you’ll use the `temperature_threshold` parameter to filter your data.

1. Add a **Filter** gem.
1. Remove the default `true` expression.
1. Select **Column > sensor_temp**.
1. Choose the **Greater than ( > )** operator.
1. Click **Select expression > Configuration Variable**.
1. Select `temperature_threshold`.
1. Click **Save**.

#### Create a Prophecy app to adjust sensitivity

1. Add a Prophecy app called `temperature_monitor`.
1. Add a title for the app.
1. Select **Interactive > Number Input**.
1. Select `temperature_threshold` for **Configuration field**.
1. Give the field a label, such as **Temperature Threshold**.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose your filtered dataset table.
1. Select the columns to display.

When the app runs, users can adjust the `temperature_threshold` to make filtering more or less sensitive.

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
