---
title: Setup
id: setup_airflow
description: How Prophecy integrates with Airflow
tags:
  - scheduling
  - airflow
  - jobs
---

To connect to a running Airflow Instance, you would need to create a [fabric](/docs/concepts/fabrics/fabrics.md) of type Airflow.
Prophecy provides you with three different types of fabrics depending upon where your Airflow Instance is running.

1. **[Prophecy Managed Airflow](docs/Orchestration/airflow/prophecy-managed/prophecy-managed.md)** - for those who are new to Airflow and do not have an Airflow instance, we provide a Prophecy Managed Airflow to expedite your trial and POC.

2. **[MWAA](./mwaa.md)** - for those who are using Amazon Web Services and have an Amazon Managed Workflows for Apache Airflow instance running.

3. **[Composer](./composer.md)** - for those who are using Google Cloud Platform and have a GCP Cloud Composer Airflow instance running.

## Create an Airflow Job

Once the Airflow fabric is setup, Airflow job scheduling is done with an easy-to-use interface. Follow this guide to [Create an Airflow job](/docs/Orchestration/airflow/getting-started-with-low-code-airflow.md#2-create-an-airflow-job).

## What's next

To continue with Airflow setup, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
