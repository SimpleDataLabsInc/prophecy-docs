---
title: Airflow fabrics
id: airflow-fabrics
description: How Prophecy integrates with Airflow
tags:
  - scheduling
  - airflow
  - jobs
---

To connect to a running Airflow Instance, you would need to create a [fabric](/docs/getting-started/concepts/fabrics.md) of type Airflow.
Prophecy provides you with three different types of fabrics depending upon where your Airflow Instance is running.

- **[Prophecy Managed Airflow](docs/administration/airflow-fabrics/prophecy-managed.md)**: Use this if you do not have an Airflow instance and want to test Airflow out.
- **[MWAA](./mwaa.md)**: Use MWAA if you have an Amazon Managed Workflows for Apache Airflow instance running.
- **[Composer](./composer.md)**: Use Composer if you have a GCP Cloud Composer Airflow instance running.

Once you have set up an Airflow, you can schedule an Airflow job using our easy-to-use interface. Follow this guide to [create an Airflow job](docs/Orchestration/airflow/airflow-tutorial-spark.md).

## What's next

To continue with Airflow setup, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
