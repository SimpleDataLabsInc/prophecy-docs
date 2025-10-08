---
title: RestAPI gem
sidebar_label: RestAPI
id: rest-api
slug: /analysts/rest-api
description: Call APIs from your pipeline
tags:
  - gems
  - analyst
  - custom
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Use the RestAPI gem to make API calls from your pipeline.

## Use cases

While RestAPIs vary greatly in functionality, we can highlight a few use cases that may be particularly helpful for your pipelines.

| Use case                                    | Example                                                                           |
| ------------------------------------------- | --------------------------------------------------------------------------------- |
| Bringing in more data from external systems | Retrieve active users from an internal user database.                             |
| Enriching data with specific APIs           | Send data to LLMs to analyze text and return the sentiments of a column.          |
| Sending notifications or alerts             | Send real-time messages to a Slack channel when an event occurs in your pipeline. |

## Input and Output

The RestAPI gem uses the following input and output ports.

| Port    | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| **in0** | (Optional) Input table. Prophecy will make one API call per row.               |
| **out** | Output table that includes input columns (if applicable) and the API response. |

By default, the RestAPI gem does not include an input port. To add a port, click the `+` button next to **Ports**. Alternatively, connect a previous gem to the RestAPI gem directly to add a new input port.

:::info
The number of inputs and outputs can be changed as needed by clicking the `+` button on the respective tab in the left panel.
To learn more about adding and removing ports, see [Gem ports](/analysts/gems#gem-ports).
:::

## Parameters

Configure the RestAPI gem using the following parameters.

| Parameter                  | Description                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Target Column Name         | Name of the output column that will contain the API response. Default: `api_data`.                                                                                                                                              |
| URL                        | API endpoint URL where the request will be sent.                                                                                                                                                                                |
| Method                     | HTTP method that determines the action to perform. Common values include `GET` (retrieve data), `POST` (create data), `PUT` (update data), `DELETE` (remove data).                                                              |
| Parse API response as JSON | Automatically parse JSON responses into separate columns instead of a single string column. See [Parse JSON Responses](#parse-json-responses) for details.                                                                      |
| Params                     | Query parameters to append to the request URL as key-value pairs. Commonly used for filtering, sorting, or pagination. Example: `page:2` and `limit:10`.                                                                        |
| Body                       | Request payload sent with `POST`, `PUT`, or `PATCH` methods. Contains the data to be processed by the API, typically in JSON format.                                                                                            |
| Headers                    | Additional metadata sent with the request as key-value pairs. Used for authentication, content type specification, and other request attributes. Supports hard-coded values, configurations (pipeline parameters), and secrets. |

:::tip
You can populate these parameters with hard-coded values, or you can reference columns. To reference a column, use curly brackets. You can reference columns in any field.

For example, if your dataset has a column named `AccountID`, you can call an API like this:
<br/>`https://api.company.com/users/{{AccountID}}`
:::

### Parse JSON responses

Enable JSON parsing to automatically extract the response into separate columns.

1. Check the **Parse API response as JSON** checkbox in the gem configuration.
1. Open the output port panel and enable the **Custom Schema** toggle.
1. Click **Infer from Cluster** to retrieve the schema from the JSON response.

When JSON parsing is enabled:

- The API response is automatically parsed into individual columns based on the JSON structure.
- The **Target Column Name** parameter is hidden since column names come from the JSON field names.
- If your input has multiple rows, each row triggers a separate API call, and the results are unioned into a single output table.

This feature is enabled by default for new gems using the `GET` method. Changing the method will disable it, but you can always re-enable the checkbox.

:::note
JSON parsing requires the API to return valid JSON responses. If the response format is inconsistent or not JSON, disable this option and parse the response manually in subsequent gems.
:::
