---
title: Orchestration
id: Orchestration
description: Airflow and Databricks Jobs
tags:
  - jobs
  - deployment
  - scheduling
---

Once you have developed a Spark data Pipeline or an SQL Model using Prophecy, you will want to schedule it to run at some frequency. To
support this, Prophecy provides you with an easy-to-use interface to develop Jobs, using two different
schedulers:

1. **[Databricks Jobs](databricks-jobs.md)** - for simpler data-Pipeline use-cases, where you just
   orchestrate multiple data-Pipelines to run together. Databricks Jobs is a **recommended** scheduler, if you're
   Databricks Native.

2. **[Airflow](airflow/airflow.md)** - for more complex use-cases, where you have to use various operators, or need
   any additional data pre-and-post-processing, you can interface from Prophecy with your production-ready Airflow deployment. To get started with your first Airflow jobs, try Prophecy Managed Airflow using this [guide](/docs/getting-started/getting-started-with-low-code-airflow.md).

3. **[Custom](alternative-schedulers.md)** - Alternatively, since Prophecy provides you native Spark code on Git, you can easily integrate with any other scheduler or custom solution.
