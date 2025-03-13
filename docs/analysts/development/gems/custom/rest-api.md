---
title: RestAPI
id: rest-api
description: Call APIs from your pipeline.
tags:
  - gems
  - analyst
  - custom
---

Make API calls from your pipeline.

## Parameters

| Parameter  | Description                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **URL**    | The endpoint of the API that you are making a request to.                                                                           |
| **Method** | The HTTP method used for the request (e.g., `GET`, `POST`, `PUT`, `DELETE`) to determine the action performed on the resource.      |
| **Params** | Query parameters included in the request URL, usually used for filtering, sorting, or pagination (e.g., `page=2&limit=10`).         |
| **Body**   | The payload sent with `POST`, `PUT`, or `PATCH` requests, typically in JSON format, containing the data to be processed by the API. |
