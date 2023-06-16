---
title: Low-code Jobs
id: low-code-jobs
description: Low-code Jobs
tags:
  - jobs
  - deployment
  - scheduling
---

Once you have developed a Spark data Pipeline using Prophecy, you will want to schedule it to run at some frequency. To
support this, Prophecy provides you with an easy to use low-code interface to develop Jobs, using two different
schedulers:

1. **[Databricks Jobs](databricks-jobs.md)** - for simpler data-Pipeline use-cases, where you just
   orchestrate multiple data-Pipelines to run together. Databricks Jobs is a **recommended** scheduler, if you're
   Databricks Native.

2. **[Airflow](airflow/airflow.md)** - for more complex use-cases, where you have to use various operators, or need
   any additional data pre-and-post-processing, you can design your Jobs using Prophecy's low-code Airflow environment.

Alternatively, since Prophecy provides you native Spark code on Git, you can easily integrate with any other scheduler.
