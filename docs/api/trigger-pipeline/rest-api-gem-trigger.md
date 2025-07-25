---
title: Use RestAPI gem to trigger a pipeline
sidebar_label: Use RestAPI gem
id: rest-api-gem-trigger
description: Trigger pipeline execution using RestAPI gem
tags: []
---

In Prophecy, you can trigger pipeline inside a project using the RestAPI gem. This page describes how to configure the RestAPI gem for this use case.

### Usage

To call the [Trigger Pipeline API](/api/trigger-pipeline/trigger-pipeline-api) using the RestAPI gem, follow the example configuration.

:::info
The Trigger Deployed Pipeline endpoint does not require an input, an output, or params.
:::

#### URL

Use the following endpoint to trigger a pipeline.

```
https://app.prophecy.io/api/trigger/pipeline
```

#### Method

This endpoint uses the POST method.

```
POST
```

#### Body

The body provides all of the information needed to identify the correct pipeline to trigger.

```
{ "fabricId": <fabricID>, "pipelineName": "customer_orders", "parameters": {}, "projectId": <projectID> }
```

#### Headers

These headers provide the content type of the body (JSON) and your [Prophecy access token](docs/api/index.md) to authenticate the request.

```
Content-Type: application/json

X-AUTH-TOKEN: <token-secret>
```

### Monitoring

When you run the pipeline that includes the RestAPI gem, you will see the following in the [Run History](/analysts/monitoring#run-history) interface:

- A record of the pipeline run including the RestAPI gem that has the type **Pipeline Run**.
- A record of the triggered pipeline run that has the type **API Run**.
