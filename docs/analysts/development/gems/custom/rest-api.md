---
title: RestAPI
id: rest-api
slug: /analysts/rest-api
description: Call APIs from your pipeline.
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

## Parameters

Configure the RestAPI gem using the following parameters.

| Parameter | Description                                                                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| URL       | The endpoint of the API that you are making a request to.                                                                                                                                       |
| Method    | The HTTP method used for the request to determine the action performed on the resource. <br/>Example: `GET`, `POST`, `PUT`, `DELETE`                                                            |
| Params    | Key-value pairs that represent query parameters included in the request URL. <br/>Usually used for filtering, sorting, or pagination. <br/>Example: `page:2` and `limit:10`.                    |
| Body      | The payload sent with `POST`, `PUT`, or `PATCH` requests containing the data to be processed by the API. <br/>Typically in JSON format.                                                         |
| Headers   | Key-value pairs that carry additional information about the request, such as credentials or content type. <br/>You can use hard-coded values, configurations (pipeline parameters), or secrets. |

You can populate these parameters with hard-coded values, or you can reference columns. If you use a column to dynamically populate the RestAPI, Prophecy will **generate one API call per row** in that column. For example, if you reference a column with `100` rows, this gem will make `100` API calls.

:::tip
To reference a column, use curly brackets.<br/>
For example, if your dataset has a column named `AccountID`, you can call an API like this:<br/>
`https://api.company.com/users/{{AccountID}}`
:::
