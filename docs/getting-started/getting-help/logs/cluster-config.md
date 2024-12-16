---
title: Send Spark cluster configurations
id: cluster-config
sidebar_position: 2
description: Helpful Spark cluster configurations to send to Support
sidebar_label: Send Spark cluster configurations
tags: [help, connectivity]
---

There are helpful Spark cluster configurations that you can send to us via the Prophecy [Support Portal](https://prophecy.zendesk.com/) for troubleshooting.

Two ways to access these configurations include:

- Browsing the Spark UI
- Running a notebook

## Configurations in the UI {#configUI}

You can access your Spark cluster configurations directly from the Spark UI.

:::note
Please send screenshots of each configuration if possible.
:::

<table>
  <thead>
    <tr>
      <th>Configuration to Send</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Overall cluster configuration (e.g., Spark version, Databricks runtime version, UC single or UC shared)</td>
      <td>
        <br />
        <img
          src={require("./../img/cluster_1.png").default}
          alt="Cluster configuration example"
          width="75%"
        />
        <br />
      </td>
    </tr>
    <tr>
      <td>Cluster JSON (edited to remove any private or sensitive information)</td>
      <td>
        <br />
        <img
          src={require("./../img/cluster_2.png").default}
          alt="Cluster JSON example"
          width="75%"
        />
        <br />
      </td>
    </tr>
    <tr>
      <td>Libraries installed on the cluster</td>
      <td>
        <br />
        <img
          src={require("./../img/cluster_3.png").default}
          alt="Cluster libraries example"
          width="75%"
        />
        <br />
      </td>
    </tr>
    <tr>
      <td>Init scripts run on the cluster. Include the script itself if possible.</td>
      <td>
        <br />
        <img
          src={require("./../img/cluster_4.png").default}
          alt="Cluster init scripts example"
          width="75%"
        />
        <br />
      </td>
    </tr>
    <tr>
      <td>Output of attaching cluster in a notebook </td>
      <td>
        Send the error screenshot if any. You may need to duplicate the tab and try attaching the same cluster in the duplicate tab.
      </td>
    </tr>
  </tbody>
</table>

## Run a notebook {#configNB}

You can also create a notebook (example below) and send the output via the Prophecy [Support Portal](https://prophecy.zendesk.com/).

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
