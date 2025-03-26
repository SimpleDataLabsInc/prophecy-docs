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

<span class="badge">Prophecy Automate</span><br/><br/>

Use the RestAPI gem to make API calls from your pipeline.

## Use cases

While RestAPIs vary greatly in functionality, we can highlight a few use cases that may be particularly helpful for your pipelines.

| Use case                                    | Example                                                                           |
| ------------------------------------------- | --------------------------------------------------------------------------------- |
| Bringing in more data from external systems | Retrieve active users from an internal user database.                             |
| Enriching data with specific APIs           | Send data to LLMs to analyze text and return the sentiments of a column.          |
| Sending notifications or alerts             | Send real-time messages to a Slack channel when an event occurs in your pipeline. |

## Parameters

| Parameter  | Description                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **URL**    | The endpoint of the API that you are making a request to.                                                                           |
| **Method** | The HTTP method used for the request (e.g., `GET`, `POST`, `PUT`, `DELETE`) to determine the action performed on the resource.      |
| **Params** | Query parameters included in the request URL, usually used for filtering, sorting, or pagination (e.g., `page=2&limit=10`).         |
| **Body**   | The payload sent with `POST`, `PUT`, or `PATCH` requests, typically in JSON format, containing the data to be processed by the API. |

You can populate these parameters with hard-coded values or reference columns. If you use a column to dynamically populate the RestAPI, Prophecy will **generate one API call per row** in that column. For example, if you reference a column with `100` rows, this gem will make `100` API calls.
