---
title: Trigger Pipeline API
id: trigger-pipeline-api
description: Trigger the execution of pipelines in deployed projects
tags: []
---

The Trigger Pipeline API allows you to start the execution of a pipeline in a deployed project. This is useful when you want to automate pipeline runs without relying on Prophecy's built-in scheduling.

The API returns request responses in JSON format.

There are two endpoints:

- [Trigger Deployed Pipeline](#post-trigger-deployed-pipeline) starts the execution of a deployed pipeline.
- [Pipeline Run Status](#get-pipeline-run-status) gets the status of a triggered pipeline run, including an error message if the pipeline run fails.

## Requirements

To use the Trigger Pipeline API, the pipeline you want to trigger must:

- Run on a [Prophecy fabric](/core/prophecy-fabrics/)
- Be part of a published project (in other words, the pipeline must be deployed)

---

## <span class="request-post">POST</span> Trigger Deployed Pipeline

### Endpoint {#endpoint-trigger}

```
https://app.prophecy.io/api/trigger/pipeline
```

:::info
Replace the base URL with your environment URL for dedicated SaaS and self-hosted deployments.
:::

### Request Headers {#request-headers-trigger}

The following headers are required for the request.

| Key            | Value            | Description                                     |
| -------------- | ---------------- | ----------------------------------------------- |
| `X-AUTH-TOKEN` | `{{auth_token}}` | Your Prophecy [access token](docs/api/index.md) |

### Body Parameters {#body-parameters-trigger}

The following are valid parameters for the request body.

| Field Name     | Type   | Required | Description                                                                                                                                                          | Example                                             |
| -------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `fabricId`     | Long   | Yes      | Unique identifier of the data fabric where the pipeline resides. You can find the ID in the URL of the fabric metadata page.                                         | `90645`                                             |
| `pipelineName` | String | Yes      | Name of the pipeline to be triggered.                                                                                                                                | `data_processing_pipeline`                          |
| `projectId`    | String | Yes      | Unique ID of the project where the pipeline resides. You can find this string in the URL of the project editor or metadata page.                                     | `46059`                                             |
| `parameters`   | JSON   | No       | Map of key-value pairs representing [pipeline parameters](/analysts/pipeline-parameters). These will override default parameter values.                              | `{"parameter_1": "1234", "parameter_2": "table_1"}` |
| `branch`       | String | No       | Specific branch of the pipeline to execute. If omitted, the current working branch is used.                                                                          | `dev`                                               |
| `version`      | String | No       | Specific version of the project containing the pipeline. If omitted, the latest version is used.                                                                     | `2`                                                 |
| `processName`  | String | No       | Name of a specific gem within the pipeline. If provided, the pipeline will not run beyond this gem. If no `processName` is specified, the full pipeline is executed. | `aggregated_orders`                                 |

### Example cURL {#example-curl-trigger}

This example triggers a pipeline called `bakehouse` that executes on fabric `33290` and stops at the `franchise_reviews` gem.

```cURL
curl --location 'https://app.prophecy.io/api/trigger/pipeline' \
--header 'X-AUTH-TOKEN: <prophecy-pat>' \
--header 'Content-Type: application/json' \
--data '{
  "fabricId": 33290,
  "pipelineName": "bakehouse",
  "parameters": {
    "franchise_id": "3000007"
  },
  "version": "2",
  "projectId": "41459",
  "processName": "franchise_reviews"
}'
```

### Response Body {#response-body-trigger}

The following fields may appear in the response body of your request.

| Field     | Description                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `success` | Indicates whether the request to trigger the pipeline was successful. **It does not reflect the success of the pipeline run**. |
| `runId`   | Unique identifier of the pipeline run generated by this request.                                                               |
| `msg`     | Message that explains the outcome of the request. If the request fails, an error message is provided here.                     |

#### Example Response {#example-response-trigger}

This example shows the response to a request with an invalid fabric ID.

```json
{
  "success": false,
  "msg": "error in triggering pipeline: Success(Left(sdl.md.client.package$MetadataException: Fabric with uid `2290` not found)) (of class scala.util.Success)"
}
```

---

## <span class="request-get">GET</span> Pipeline Run Status

### Endpoint {#endpoint-status}

```
https://app.prophecy.io/api/trigger/pipeline/{{runId}}
```

:::info
Replace the base URL with your environment URL for dedicated SaaS and self-hosted deployments.
:::

### Request Headers {#request-headers-status}

The following headers are required for the request.

| Key            | Value            | Description                                     |
| -------------- | ---------------- | ----------------------------------------------- |
| `X-AUTH-TOKEN` | `{{auth_token}}` | Your Prophecy [access token](docs/api/index.md) |

### Example cURL {#example-curl-status}

This example retrieves the status of a pipeline with a specific runID.

```
curl --location 'https://app.prophecy.io/api/trigger/pipeline/MDAw-xZGYzYzc3LTYzdsSdfx--LTQ3NTQ1ZYjI2Mw==' \
--header 'X-AUTH-TOKEN: <prophecy-pat>'
```

### Response Body {#response-body-status}

The following fields may appear in the response body of your request.

| Field          | Description                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `success`      | Indicates whether the request to retrieve the pipeline run status was successful. **It does not reflect the success of the run**. |
| `runId`        | Unique identifier of the pipeline run.                                                                                            |
| `createdAt`    | Timestamp when the pipeline run record was created. Returns ISO 8601 format, including microseconds.                              |
| `updatedAt`    | Timestamp when the pipeline run record was last updated. Returns ISO 8601 format, including microseconds.                         |
| `projectId`    | ID of the project associated with this pipeline run.                                                                              |
| `pipelineName` | Name of the pipeline associated with this run.                                                                                    |
| `fabricId`     | ID of the fabric where the pipeline resides.                                                                                      |
| `runStatus`    | Execution status of the pipeline run. Possible values include `RUNNING`, `ERROR`, or `SUCCEEDED`.                                 |
| `errorMessage` | Descriptive error message if the `runStatus` is `ERROR`.                                                                          |

#### Example Response {#example-response-status}

This example shows the response to a successful request. It also shows that the pipeline run succeeded.

```json
{
  "success": true,
  "runId": "MDAw-xZGYzYzc3LTYzdsSdfx--LTQ3NTQ1ZYjI2Mw==",
  "createdAt": "2025-06-17T18:01:49.275359",
  "updatedAt": "2025-06-17T18:02:41.712486",
  "projectId": "41459",
  "pipelineName": "bakehouse",
  "fabricId": "33290",
  "runStatus": "SUCCEEDED"
}
```
