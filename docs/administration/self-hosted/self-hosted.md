---
title: Self-hosted deployments
id: self-hosted
description: Deploy Prophecy in your own VPC
sidebar_class_name: hidden
tags:
  - deployment
  - installation
  - self-hosted
---

Self-hosted Prophecy deployments run inside a customer VPC, rather than a Prophecy VPC. These deployments are maintained by the customer, rather than by Prophecy. Once Prophecy is installed, you'll have to manually perform upgrades, backups, restores, etc.

:::caution
While Prophecy continues to support existing customers with self-hosted deployments, new self-hosted installations of Prophecy are **discouraged**.
:::

## Cloud Provider

Prophecy is written as a set of microservices that run on a Kubernetes cluster. Our recommended platforms to run Kubernetes are:

- Amazon Web Services managed EKS
- Microsoft Azure managed AKS
- Google Cloud Platform managed GKE

## Installation

There are a couple of ways to install a self-hosted Prophecy deployment:

- Installation via [Helm](https://helm.sh/docs/intro/quickstart/)
- Installation via Marketplaces

For personalized help with installation, contact [support](https://prophecy.zendesk.com/). If applicable, send along your [logs](download-logs.md) to help us troubleshoot.

## Logging / Metrics

- Prophecy comes with a built-in lightweight infrastructure for monitoring (based on Loki & Grafana)
  and logging (based on Prometheus, Grafana and alert-manager, etc.).
- You can optionally redirect logs and metrics to your own logging services.

## Prophecy services

You can use the Running Services API to retrieve the status of your Prophecy services. 200 denotes that the service is running, while 404 denotes that the service is disabled. Any other error code denotes a service failure.

### Running Services API

Example:

```
curl 'https://<prophecy-env-url>/athena/api/v1/prophecy/status'
```

<details>
  <summary>Response:</summary>

```
{
 "anyServiceDown": false,
 "data": {
  "services": [
   {
    "isPrimary": true,
    "name": "App",
    "statusCode": 200
   },
   {
    "isPrimary": true,
    "name": "Metadata",
    "statusCode": 200
   },
   {
    "isPrimary": false,
    "name": "Pipeline/Jobs Editor",
    "statusCode": 200
   },
   {
    "isPrimary": false,
    "name": "Prophecy Managed Git",
    "statusCode": 200
   },
   {
    "isPrimary": false,
    "name": "Execution",
    "statusCode": 200
   },
   {
    "isPrimary": false,
    "name": "CI / CD",
    "statusCode": 200
   },
   {
    "isPrimary": false,
    "name": "Lineage",
    "statusCode": 200
   },
   {
    "isPrimary": false,
    "name": "Search",
    "statusCode": 404
   },
   {
    "isPrimary": false,
    "name": "Kafka",
    "statusCode": 404
   },
   {
    "isPrimary": false
   },
   {
    "isPrimary": false,
    "name": "Transpiler",
    "statusCode": 404
   },
   {
    "isPrimary": false,
    "name": "Data Quality",
    "statusCode": 404
   },
   {
    "isPrimary": false,
    "name": "Data Copilot",
    "statusCode": 404
   },
   {
    "isPrimary": false,
    "name": "Sandboxing",
    "statusCode": 200
   },
   {
    "isPrimary": false,
    "name": "Database Connectivity",
    "statusCode": 200
   }
  ]
 },
 "isProphecyDown": false,
 "success": true
}
```

  </details>
