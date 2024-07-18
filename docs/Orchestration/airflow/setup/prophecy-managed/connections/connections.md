---
sidebar_position: 1
title: Connections
id: prophecy_managed_airflow_fabric_connections
description: How to create connections in Prophecy Managed Airflow Fabric
tags:
  - scheduling
  - airflow
  - jobs
  - prophecyManaged
  - fabric
  - connections
---

You need Airflow to talk to various other systems in your Data Platform to be able to do certain tasks like send Email, trigger Spark pipelines and SQL models.
For these we create [connections](https://airflow.apache.org/docs/apache-airflow/stable/authoring-and-scheduling/connections.html) in Airflow.

For Prophecy Managed Airflow, you can provide all the details required to connect to your external systems in Connections page, and Prophecy will set up the Airflow connection for you.
The credentials for your connections are stored securely in a Google Cloud Secret Manager.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
