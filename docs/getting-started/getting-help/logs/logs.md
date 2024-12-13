---
title: Send Details in the Support Portal
id: logs
sidebar_position: 1
description: How to download logs and send for support
sidebar_label: Send Logs
tags: []
---

Which logs to send in the [Support Portal](https://prophecy.zendesk.com/)?

<div class="troubleshooting-table">

| <div style={{'width':'100px'}}>I'm having an issue with...</div>   | My Prophecy endpoint is app.prophecy.io             | My Prophecy endpoint is custom.prophecy.io          |
| ------------------------------------------------------------------ | --------------------------------------------------- | --------------------------------------------------- |
| ...attaching a Pipeline to a spark cluster, or running a Pipeline. | Spark cluster configuration and connectivity check. | Spark cluster configuration and connectivity check. |
| ...with a Spark application.                                       | Prophecy Pipeline logs and Spark Driver logs.       | Prophecy Pipeline logs and Spark Driver logs.       |
| ...anything else.                                                  | Support team can access Prophecy logs directly.     | Prophecy logs from admin page.                      |

</div>

## Prophecy Issues

Use the log collection feature (if [enabled](/docs/architecture/self-hosted/download-logs.md)) to download all [Prophecy system logs](/docs/architecture/self-hosted/download-logs.md) from the admin page.
![img](./../img/prophecy_logs.png)

Use the log download button inside any Pipeline to download logs related to that particular Pipeline.
![img](./../img/pipeline_logs.png)

## Spark Cluster Issues

### Configurations

Use the [Spark UI](./cluster-config-ui.md) or a [notebook](./cluster-config-notebook.md) to collect cluster configurations and send via the Support Portal.

### Connectivity Check

Open a notebook on the Spark cluster and run the following command, adjusting the Prophecy endpoint:

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

This command tests the reverse websocket protocol required by Prophecy to execute Pipelines on Spark clusters. Please send the output from this command in the Support Portal.

## We look forward to hearing from you
