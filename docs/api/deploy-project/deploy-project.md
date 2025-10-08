---
title: Deploy Project API
id: deploy-project
description: Deploy projects with specific configurations to fabrics
tags: []
---

The Deploy Project API allows you to deploy projects with custom pipeline and project configurations to specific fabrics. This is useful when you want to:

- Automate project deployment using external CI/CD tools instead of Prophecy's web interface.
- Deploy the same project to different environments (dev, staging, prod) with different configuration values

The API returns request responses in JSON format.

## Requirements

To use the Deploy Project API, the project you want to deploy must:

- Target a fabric that exists in your environment.
- Have at least one Git tag that defines the project version.

:::info Important
Unlike in the Prophecy UI where Git tags are created automatically during publish, when using this API you must create the Git tag externally. The tag must follow the exact format `{projectName}/{version}`.
:::

---

## <span class="request-post">POST</span> Deploy Project

### Endpoint {#endpoint-deploy}

```
https://app.prophecy.io/api/deploy/project
```

:::info
Replace the base URL with your environment URL for dedicated SaaS and self-hosted deployments.
:::

### Request Headers {#request-headers-deploy}

The following headers are required for the request.

| Key            | Value            | Description                                     |
| -------------- | ---------------- | ----------------------------------------------- |
| `X-AUTH-TOKEN` | `{{auth_token}}` | Your Prophecy [access token](docs/api/index.md) |

### Body Parameters {#body-parameters-deploy}

The following are valid parameters for the request body.

| Field Name               | Type   | Required | Description                                                                                                                                                                                          | Example                                          |
| ------------------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `projectName`            | String | Yes      | Name of the project to be deployed.                                                                                                                                                                  | `CustomerAnalytics`                              |
| `fabricName`             | String | Yes      | Name of the fabric where the project will be deployed.                                                                                                                                               | `production-databricks`                          |
| `gitTag`                 | String | Yes      | Git tag identifying the specific version of the project to deploy. Must follow the format `{projectName}/{version}`.                                                                                 | `CustomerAnalytics/2.1`                          |
| `pipelineConfigurations` | JSON   | No       | Override default values for specific pipeline parameters. Each pipeline can have multiple parameter overrides. The parameter must exist in the pipeline definition, or the override will be skipped. | `{"sales_report": {"report_period": "monthly"}}` |
| `projectConfiguration`   | JSON   | No       | Override default values for project-level configuration parameters that apply to all pipelines in the project.                                                                                       | `{"environment": "production"}`                  |

### Pipeline Configurations Structure {#pipeline-configurations-structure}

The `pipelineConfigurations` parameter allows you to specify pipeline parameter values for individual pipelines within the project. The structure is:

```json
{
  "pipelineName": {
    "parameterName": "parameterValue",
    "anotherParameter": "anotherValue"
  }
}
```

Where:

- `pipelineName` is the name of a pipeline within the project
- `parameterName` is the name of a pipeline parameter
- `parameterValue` is the value to assign to that parameter

:::info
You only need to specify the parameters you want to override. Any parameters not specified will use their default values from the pipeline definition. You can override just one parameter or multiple parameters as needed.
:::

### Project Configuration Structure {#project-configuration-structure}

The `projectConfiguration` parameter allows you to specify configuration values that apply to the entire project. The structure is:

```json
{
  "parameterName": "parameterValue",
  "anotherParameter": "anotherValue"
}
```

Where:

- `parameterName` is the name of the project configuration variable
- `parameterValue` is the value to assign to that variable

:::info
Project configuration parameters serve as global values for all pipelines in the project. Individual pipelines can override these values by defining parameters with the same name in their pipeline-specific configuration.
:::

#### Configuration Parameter Precedence

Configuration parameters follow this precedence order:

1. Pipeline parameter overrides (highest priority)
2. Project configuration overrides
3. Default project configuration
4. Default pipeline parameters (lowest priority)

### Example cURL {#example-curl-deploy}

This example deploys a project called `CustomerAnalytics` to the `production-databricks` fabric with specific pipeline and project configurations.

```cURL
curl --location 'https://app.prophecy.io/api/deploy/project' \
--header 'X-AUTH-TOKEN: <prophecy-pat>' \
--header 'Content-Type: application/json' \
--data '{
  "projectName": "CustomerAnalytics",
  "fabricName": "production-databricks",
  "gitTag": "CustomerAnalytics/2.1",
  "pipelineConfigurations": {
    "sales_report": {
      "report_period": "monthly",
      "include_forecasts": "true"
    },
    "customer_segmentation": {
      "segment_count": "5",
      "min_customers_per_segment": "100"
    },
    "revenue_analysis": {
      "currency": "USD",
      "include_tax": "false"
    }
  },
  "projectConfiguration": {
    "environment": "production",
    "data_refresh_frequency": "daily"
  }
}'
```

### Response Body {#response-body-deploy}

The following fields may appear in the response body of your request.

| Field          | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `success`      | Indicates whether the request to deploy the project was successful. |
| `message`      | Message that explains the outcome of the request.                   |
| `deploymentId` | Unique identifier of the deployment generated by this request.      |
| `details`      | Object containing detailed information about the deployment.        |
| `error`        | Detailed error information provided when the request fails.         |

#### Deployment Details Structure {#deployment-details-structure}

The `details` object contains the following fields:

| Field                   | Description                                                             |
| ----------------------- | ----------------------------------------------------------------------- |
| `projectId`             | Unique identifier of the deployed project.                              |
| `fabricId`              | Unique identifier of the fabric where the project was deployed.         |
| `version`               | Version number of the deployed project.                                 |
| `pipelinesDeployed`     | Array of pipeline names that were successfully deployed.                |
| `configurationsApplied` | Number of configuration parameters that were applied during deployment. |

#### Example Response {#example-response-deploy}

This example shows the response to a successful deployment request.

```json
{
  "success": true,
  "message": "Project scheduled successfully",
  "deploymentId": "212",
  "details": {
    "projectId": "67890",
    "fabricId": "09123",
    "version": "2.1",
    "pipelinesDeployed": [
      "sales_report",
      "customer_segmentation",
      "revenue_analysis"
    ],
    "configurationsApplied": 5
  }
}
```

#### Error Response Example {#error-response-example}

This example shows the response to a request with an invalid Git tag.

```json
{
  "success": false,
  "message": "Deployment failed",
  "error": "Failed to fetch project files: Clone failed because revision Some(CustomerAnalytics/2.1) was not found"
}
```
