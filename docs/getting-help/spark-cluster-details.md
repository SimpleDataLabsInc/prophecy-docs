---
title: Send Spark cluster details
id: spark-cluster-details
description: Helpful Spark cluster configurations to send to Support
sidebar_label: Send info from the Spark cluster
sidebar_position: 2
tags: [help, connectivity]
---

There are helpful Spark cluster configurations and a connectivity check that you can send to us via the Prophecy [Support Portal](https://prophecy.zendesk.com/) for troubleshooting.

## Spark configurations

Two ways to access the configurations:

- Browsing the Spark UI
- Running a notebook

### Configurations in the UI {#configUI}

You can access your Spark cluster configurations directly from the Spark UI.

:::note
Please send screenshots of each configuration if possible.
:::

| Configuration to Send                                                                                                                 | Example                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Overall cluster configuration (e.g., Spark version, Databricks runtime version, UC single or UC shared)                               | <br /><img src={require("./img/cluster_1.png").default} alt="Cluster configuration example" width="75%" /><br />      |
| Cluster JSON (edited to remove any private or sensitive information)                                                                  | <br /><img src={require("./img/cluster_2.png").default} alt="Cluster JSON example" width="75%" /><br />               |
| Libraries installed on the cluster                                                                                                    | <br /><img src={require("./img/cluster_3.png").default} alt="Cluster libraries example" width="75%" /><br />          |
| Init scripts run on the cluster. Include the script itself if possible.                                                               | <br /><img src={require("./img/cluster_4.png").default} alt="Cluster init scripts example" width="75%" /><br />       |
| Output of attaching cluster in a notebook. You may need to duplicate the tab and try attaching the same cluster in the duplicate tab. | <br /><img src={require("./img/cluster_5.png").default} alt="Notebook attach to cluster example" width="75%" /><br /> |

### Run a notebook {#configNB}

For those who prefer to use code, create a notebook (example below) and send the output via the Prophecy [Support Portal](https://prophecy.zendesk.com/).

:::info
Replace the workspace URL, personal access token, clusterID, and API token as appropriate.
:::

<details>
<summary>Python</summary>

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

</details>

## Connectivity Check

Open a notebook on the Spark cluster and run the following command.

:::info
Replace the Prophecy endpoint.
:::

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
import subprocess

command = 'curl -X GET "https://customer_prophecy_url/execution"'
output = subprocess.check_output(['/bin/bash', '-c', command], text=True)

print(output)
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
%scala
import sys.process._
val command = """curl -X GET "https://customer_prophecy_url/execution""""
Seq("/bin/bash", "-c", command).!!
```
</TabItem>
</Tabs>

````

This command tests the reverse websocket protocol required by Prophecy to execute pipelines on Spark clusters. Please send the output from this command in the Support Portal.

**We look forward to hearing from you!**
