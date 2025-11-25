---
title: BigQuery Fabric API
id: big-query-fabric
description: Orchestrate creating and managing BigQuery fabrics
tags: []
---

The BigQuery Orchestration Fabric API allows teams to create and manage a Prophecy fabric that uses Google BigQuery as its execution environment. This API is designed for automated environment provisioning, CI/CD pipelines, and large-scale workspace setup, making it possible to configure fabrics programmatically instead of through the UI.

A BigQuery fabric consists of three major components: the fabric itself, its connection settings, and the credentials required to authenticate with BigQuery. The API exposes separate endpoints for each part so that users can build and maintain complete environments in code.

Teams use the BigQuery Fabric API to automate workspace provisioning, maintain consistent configurations across development and production environments, integrate fabric creation into CI/CD workflows, or manage service account rotation at scale. The API makes it possible to treat orchestration environments as code, improving reproducibility and reducing manual setup.

### Workflow summary

Clients typically begin by creating a fabric, then providing a service account key to establish authentication, and finally configuring the BigQuery connection fields. After verifying the configuration using GET endpoints, users can immediately start orchestrating pipelines in the newly created fabric.

### Fabric

A fabric represents the top-level execution environment. When creating a BigQuery fabric, clients provide a name, optional description, team ownership, and any orchestration-specific metadata required by the workspace. The fabric object serves as the container for all related configuration; all connection details and authentication secrets are associated with its fabric ID.

Fabric endpoints allow clients to create, inspect, update, or delete a BigQuery fabric. Deleting a fabric also removes its associated secrets.

### Connection

A connection defines the non-secret configuration required for accessing BigQuery. This includes fields such as the Google Cloud project ID, default dataset, BigQuery region or location, and any artifact or staging bucket settings. Connection information does not include credentials; instead, it specifies how Prophecy should connect to BigQuery once authentication is resolved through a secret.

The API allows users to retrieve and update the connection configuration at any time without needing to recreate the fabric. Changes typically take effect immediately for new executions.

### Secret

A secret provides the authentication needed to access BigQuery. In most cases, this is a Google Cloud service account key supplied as a JSON object. The API accepts the secret material, encrypts it, and stores it internally. Secret values are never returned in plaintext. When updating credentials, clients submit the full replacement key.

Secrets are tied to the fabric ID and may be rotated or replaced independently of other configuration. Deleting a fabric automatically removes all associated secrets.

### API Behavior

Creating a BigQuery fabric generally involves submitting a fabric definition and then providing both connection information and authentication material. Connection objects reference secrets indirectly, ensuring that credential values never appear in configuration payloads. When the API validates the configuration, it attempts to confirm that the project ID, dataset, region, and service account permissions are all valid.

The separation of fabric, connection, and secret objects allows teams to update or rotate each part independently. For example, users can update the connection settings while retaining the same authentication secret, or rotate credentials without altering the connection properties.

### Request Structure

You create a BigQuery orchestration fabric by sending a JSON payload that contains three components: a fabric definition, a secret for authentication, and a connection object. These components correspond directly to the API’s resource model. Users submit them together when creating a fabric, or update them individually through the Fabric, Secret, or Connection endpoints.

The top-level object defines the fabric itself. It includes fields such as the fabric name, description, the owning team, and the provider type. For BigQuery, the provider is set to `bigquery`. This object establishes the fabric ID used by subsequent secret and connection operations.

The secret object supplies the credential material required for BigQuery access. Most configurations use a Google Cloud service-account key, provided as a JSON string. The API stores this value securely and never returns it in plaintext. The secret is associated with the fabric and referenced indirectly by the connection object. When updating credentials, clients resubmit the full key.

The connection object provides the non-secret configuration needed to connect to BigQuery. This typically includes the GCP project ID, default dataset, BigQuery location or region, and any optional artifact or staging bucket paths. The connection object uses placeholders to reference the secret, ensuring that credential values are not embedded directly in the configuration.

An example structure illustrating the required relationships is shown below:

```
{
  "fabric": {
    "name": "my_bigquery_fabric",
    "description": "Fabric created via API",
    "teamName": "my-team",
    "provider": "bigquery"
  },
  "secret": {
    "kind": "prophecy",
    "subKind": "text",
    "properties": {
      "name": "bigquery_service_account",
      "value": "{SERVICE_ACCOUNT_JSON}"
    }
  },
  "connection": {
    "name": "bigquery_default",
    "kind": "bigquery",
    "properties": {
      "projectId": "my-gcp-project",
      "dataset": "default_dataset",
      "location": "US",
      "serviceAccount": "{{SECRET}}"
    }
  }
}

```

In this structure, the secret holds the service-account key, and the connection references it using the placeholder `{{SECRET}}`. The API resolves this placeholder at runtime. This separation ensures that credentials remain isolated from general configuration and can be rotated independently.

The API validates all three components when the request is submitted. If the project, dataset, or region is invalid, or if the service account lacks required permissions, the request fails with an error describing the misconfiguration. After creation, each component can be retrieved or updated individually using the corresponding Fabric, Connection, and Secret endpoints.
