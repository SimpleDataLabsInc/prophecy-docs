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
- Configuring pipelines for multiple execution environments (such as development or production). You can also configure pipeline parameters using the [Deploy Project API](/api/deploy-project/#pipeline-configurations-structure).
- Keeping values consistent throughout the pipeline.

Once you create pipeline parameters, they are available as _configuration variables_ in [gems](/analysts/gems/) wherever you can select a visual expression.

:::info
Pipeline parameters are scoped to individual pipelines. They cannot be used in a project's other pipelines. To configure parameters that can be used across pipelines, you can use project parameters.
:::

## Add pipeline parameters

To add pipeline parameters:

1. Open **Parameters** in the pipeline header.
1. Click **+ Add Parameter**.
1. Enter a name. This is the name you use when you call the parameter.
1. Choose a data type (such as `array`, `date`, `string`, `int`, or `float`) that matches the parameter's use.
1. Enter a value, or use a function or expression that computes the parameter's value. By default, these values are used during interactive execution. However, you can override the default values in certain areas like [Prophecy App configs](/analysts/business-applications) and [Pipeline gems](/analysts/pipeline-trigger-gem).

:::note
When you define parameters, variables are automatically created in the SQL configuration.
:::

<details>
<summary>Expand to see the list of supported data types</summary>

Prophecy supports the following data types for pipeline parameters:

| Data type      | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| Array          | A list of values of the same type, added one by one in a multi-value input field.     |
| Date           | A calendar date in `dd-mm-yyyy` format, chosen using a date picker.                   |
| String         | A plain text value, entered via a single-line text input.                             |
| Boolean        | A true or false value, selected from a dropdown.                                      |
| Int            | A 32-bit integer entered in a numeric field.                                          |
| Double         | A 64-bit floating-point number entered in a numeric field.                            |
| Long           | A 64-bit integer entered in a numeric field.                                          |
| Float          | A 32-bit floating-point number entered in a numeric field.                            |
| SQL Expression | A SQL expression, either configured through dropdown menus or entered as custom code. |

</details>

## Use parameters in pipelines

To use pipeline parameters:

1. Add any [gem](/analysts/gems/) that uses expressions, such as a [Filter](/analysts/filter) or [Reformat](/analysts/reformat) gem.
1. Open the gem configuration. Ensure you are in the Visual tab.
1. Select **Configuration Variables** from an Expression dropdown menu.

You can use Jinja syntax to add pipeline parameters as configuration variables in the Code tab. To do so, use the following syntax: `{{ var('disc_rate') }})`. You can also use Jinja syntax in the Visual tab by using the Custom code expression.

By default, the pipeline parameter's value will be used for the expression, though this value can be overwritten in both Prophecy gems and Prophecy apps.

> Example: If you create a parameter called `start_date` with a value of _2025-09-01_, you can use it in a Filter gem to include only rows where `order_date` >= `start_date`. When the pipeline runs, it injects the parameter’s value into the filter expression.

## Use parameters in Prophecy Apps

Parameters are useful in both [creating](/analysts/create-business-applications) and [consuming](/analysts/run-apps) Prophecy applications. To use pipeline parameters in a Prophecy App, add an input field and select the pipeline parameter for **Configuration field**.

### Array example

This example uses a dataset with a column called `region`. You can use an **Array** pipeline parameter called `region_list` to filter rows that match one of several regions.

#### Create the Array parameter

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `region_list`.
1. Select the **Type** and choose **Array**.
1. Select **String** for **Array** type.
1. Click **+** to add items to the array.
1. Click **Value** and enter `US-East` (or another region code).
1. Click **Done**.
1. Repeat steps 6-8 to add `US-West` and `Europe` to the **Array** parameter.
1. Click **Save**.

#### Use the Array parameter in a Filter gem

Next, you’ll filter your dataset to only include rows where the `region` column matches a value in `region_list`.

1. Add a **Filter** gem.
1. Remove the default `true` expression.
1. Click **Select expression**.
1. Select **Function > Array > array_contains**.
1. Choose **value > Configuration Variable**.
1. Select `region_list`.
1. Click **+** to add an argument for `array_contains` and choose `Region`.
1. Click **Save**.
1. Add a Target table gem called `sales_transactions_by_region` and connect it to the Filter gem.
1. Click **Save**.

#### Create a Prophecy app to adjust region filters

1. Add a Prophecy app called `regional_sales`.
1. Add a title for the app.
1. Select **Interactive > Checkbox Group**.
1. Select `region_list` for **Configuration field**.
1. Add a region in **Default value**, such as `US-East`.
1. Add options such as `US-East`, `US-West`, `Europe`, `Mexico`, `Brazil`, `LAC`, and `Andean`.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose `sales_transactions_by_region`.
1. Select columns to display.

When the app runs, users can check boxes to select their desired regions. For example, a sales team in Latin America might select `Mexico`, `LAC`,`Brazil`, and `Andean` to view their focus regions.

### Date example

This example uses a dataset with timestamped sales data. You can use two **Date** pipeline parameters, `start_date` and `end_date` to configure a snapshot of sales data by a time period such as week or month.

#### Create the Date parameters

1. Open your pipeline and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `start_date`.
1. Select **Type** and choose **Date**.
1. Click **Select expression > Value**.
1. Enter `09/01/2025` (or another default start date) and click **Done**.
1. Click **Save**.
1. Repeat the steps above to create an `end_date` parameter with a default value of `09/07/2025`.

#### Use the Date parameters in a Filter gem

1. Add a **Filter** gem to your pipeline.
1. Remove the default `true` expression.
1. Click **Select expression**.
1. Select **Column** and select `sales_date` (or your dataset’s date column).
1. Choose the **between** operator.
1. For both `start_date` and `end_date`, click **Select expression > Configuration Variable** and select corresponding pipeline parameters.
1. Add a Target table gem called `snapshot_by_date` and connect it to the Filter gem.
1. Click **Save**.

#### Create a Prophecy app with date fields

1. Add a Prophecy app called `sales_snapshot`.
1. Add a title.
1. Select **Interactive > Date Field**.
1. For **Configuration field**, choose `start_date`.
1. Add another **Date Field** and select `end_date`.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose `snapshot_by_date`.
1. Select columns to display.

When the app runs, users can select their own values for `start_date` and `end_date`.

### String example

This example uses a dataset with a column called `customer_category` with values such as `Premium`, `Basic`, and `Standard`. You can use a **String** pipeline parameter called `customer_type` to filter rows for a specific group of customers.

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
1. Click **Select expression > Column** and select `customer_category`.
1. Choose the **Equals ( = )** operator.
1. Click **Select expression > Configuration Variable**.
1. Select `customer_type`.
1. Add a Target table gem called `filtered_customers` and connect it to the Reformat gem.
1. Click **Save**.

#### Create a Prophecy app to select customer groups

1. Add a Prophecy app called `customer_segment`.
1. Add a title for the app.
1. Select **Interactive > Dropdown**.
1. Give the dropdown a label.
1. Select `customer_type` for **Configuration field**.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose `filtered_customers`.
1. Select the columns to display.

When the app runs, users can switch the `customer_type` parameter from `Premium` to `Standard` (or another category) to explore different customer groups.

### Boolean example

This example uses a dataset of customer reviews, in which reviews older than 5 years are designated as `archived`, using a column called `archived_reviews` with Boolean values. You can use a Boolean pipeline parameter to create a Prophecy app that lets users choose whether to include archived reviews.

First, you'll set up an `include_archived` parameter, which will be a Boolean value.

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `include_archived`.
1. Select the **Type** and choose **Boolean**.
1. Click **Select expression > Value**.
1. Click **False** and click **Done**.
1. Click **Save**.

#### Use the Boolean parameter in an expression

Next, you'll create a Filter gem that uses the `include_archived` pipeline parameter in an expression.

1. Create and open the **Filter** gem.
1. Remove the default `true` expression.
1. Click **Select expression > Column** and select `archived`.
1. In the **Select operator** dropdown, select **equals**.
1. In the **Select expression** dropdown of the Filter condition, select **Configuration variable** and select `include_archived`.
1. Add a Target table gem called `prod_filtered_archived` and connect it to the Filter gem.
1. Click **Save**.

The output of this gem will only include rows where `include_archived` is false. In the steps below, you'll create a Prophecy app that lets users change `include_archived` to true.

#### Create a Prophecy app to show archived data

1. Add a Prophecy app called Reviews.
1. Add a **Title** for the app.
1. Add a **Toggle** that uses `include_archived` as a **Configuration** field, with a label reading `Include archived reviews?`.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose `prod_filtered_archived` for **Data table**.
1. Select columns to display.

When the app runs, users can toggle `Include archived reviews?` to include archived reviews in results.

### Double example

This example uses a dataset that includes a column called `discount_rate` that applies a discount for customers in certain cases.

You can use a Double pipeline parameter to create a Prophecy app that lets users adjust this rate.

First, you'll set up a `discount_rate` parameter, which will be a `Double` value.

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `discount_rate`.
1. Select the **Type** and choose Double.
1. Click **Select expression > Value**.
1. Enter `.15` and click **Done**.
1. Click **Save**.

#### Use the Double parameter in an expression

Next, you'll create a Reformat gem that uses the `discount_rate` pipeline parameter in an expression that uses Jinja syntax.

1. Add a [Reformat gem](/analysts/reformat).
1. Under **Target Column**, add `price`, `product`, and `quantity`
1. Under **Target Column**, add a new column called `discounted_price`.
1. Click **Select expression > Custom code ** and enter `price * (1 - {{ var('discout_rate') }})`.
1. Add a Target table gem called `products_discounted` and connect it to the Reformat gem.
1. Click **Save**.

#### Create a Prophecy app to show discounted products

1. Add a Prophecy app called `products_with_reviews`.
1. Add a title for the app.
1. Select **Interactive > Number Input**.
1. Select `discount_rate` for **Configuration field**.
1. Give the field a label.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the Inspect tab, select `products_discounted` for **Data table**.
1. Select columns to display.

When the app runs, users can enter their own rate for `discount_rate`.

### Long example

This example uses a dataset for a telecom company that includes aggregated usage data by month. You can use a `Long` pipeline parameter to set a monthly data cap in MB and flag or filter subscribers who exceed it.

#### Create the Long parameter

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `usage_cap_mb`.
1. Select the **Type** and choose **Long**.
1. Click **Select expression > Value**.
1. Enter `50000` and click **Done**.
1. Click **Save**.

#### Compute total usage per subscriber, then filter with the Long parameter

1. Add a **Filter** gem.
1. Remove the default `true` expression.
1. Select **Column > total_usage_mb**.
1. Choose **Greater than ( > )**.
1. Click **Select expression > Configuration Variable** and select `usage_cap_mb`.
1. Add a **Table** gem called `usage_over_cap` and connect it to the **Filter** gem.
1. Click **Save**.

#### Create a Prophecy app to adjust the cap

1. Add a Prophecy app called `usage_cap_monitor`.
1. Add a title for the app.
1. Select **Interactive > Number Input**.
1. Select `usage_cap_mb` for **Configuration field** and label it **Monthly Cap (MB)**.
1. Open **Data Integration > Data Preview**.
1. In the **Inspect** tab, choose `usage_over_cap` for **Data table**.
1. Select columns to display (e.g., `subscriber_id`, `total_usage_mb`, `billing_period`).

When the app runs, users can raise or lower the cap by changing `usage_cap_mb` to see which subscribers are affected.

### Float example

This example uses dataset of sensor data with a column called `sensor_temp`. You can use a **Float** pipeline parameter called `temperature_threshold` to filter out rows below a certain temperature.

#### Create the Float parameter

1. Open your project and select **Parameters** in the header.
1. Click **+ Add Parameter**.
1. Name the parameter `temperature_threshold`.
1. Select the **Type** and choose **Float**.
1. Click **Select expression > Value**.
1. Enter `72.1` and click **Done**.
1. Click **Save**.

#### Use the Float parameter in a Filter gem

Next, you’ll use the `temperature_threshold` parameter to filter your data.

1. Add a **Filter** gem.
1. Remove the default `true` expression.
1. Select **Column > sensor_temp**.
1. Choose the **Greater than ( > )** operator.
1. Click **Select expression > Configuration Variable**.
1. Select `temperature_threshold`.
1. Add a Table gem called `filtered_temperature` and connect it to the Filter gem.
1. Click **Save**.

#### Create a Prophecy app to adjust sensitivity

1. Add a Prophecy app called `temperature_monitor`.
1. Add a title for the app.
1. Select **Interactive > Number Input**.
1. Select `temperature_threshold` for **Configuration field**.
1. Give the field a label, such as **Temperature Threshold**.
1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, choose `filtered_temperature`.
1. Select columns to display.

When the app runs, users can adjust `temperature_threshold` to make filtering more or less sensitive.

## Best Practices

To make the most out of pipeline parameters, we suggest you:

- Use meaningful parameter names that indicate their purpose.
- Validate inputs to prevent unexpected errors during execution.
- Keep sensitive values (such as API keys) in [secrets](/administration/secrets) rather than passing them as plain parameters.
