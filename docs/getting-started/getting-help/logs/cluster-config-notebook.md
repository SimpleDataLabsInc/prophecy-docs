---
title: Use a notebook to collect Spark cluster configuration
id: config-sparknotebook
sidebar_position: 3
description: How to access the Spark Cluster configuration using a notebook
sidebar_label: Use a notebook to collect Spark cluster configuration
tags: [help, connectivity]
---

Create a notebook as follows and send the output via the Prophecy [Support Portal](https://prophecy.zendesk.com/).

:::info
Replace the workspace URL, personal access token, clusterID, and API token as appropriate.
:::

```
# Databricks notebook source
import requests

#Get Databricks runtime of cluster
# Get the notebook context using dbutils
context = dbutils.notebook.entry_point.getDbutils().notebook().getContext()

# Retrieve the Databricks runtime version from the context tags
runtime_version = context.tags().get("sparkVersion").get()

# Print the runtime version
print(f"Databricks Runtime Version: {runtime_version}")

# Get Spark version
spark_version = spark.version
print(f"Spark Version: {spark_version}")


#Get the installed libraries and access mode details of the cluster
# Replace with your Databricks workspace URL and token
workspace_url = "replace_with_workspace_url"
token = "replace_with_token"
cluster_id = "replace_with_cluster_id"


# API endpoint to get info of installed libraries
url = f"{workspace_url}/api/2.0/libraries/cluster-status"

# Make the API request
response = requests.get(url, headers={"Authorization": f"Bearer {token}"}, params={"cluster_id": cluster_id})

library_info=response.json()
print("Libraries:")
for i in library_info['library_statuses']:
    print(i)

# API endpoint to get access mode details
url = f"{workspace_url}/api/2.1/clusters/get"

# Make the API request
response = requests.get(url, headers={"Authorization": f"Bearer {token}"}, params={"cluster_id": cluster_id})

cluster_access_info=response.json()
print(f"Cluster Access Mode: {cluster_access_info['data_security_mode']}")
```
