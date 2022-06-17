---
title: Low-code Jobs
id: low-code-jobs
description: Low-code Jobs
tags: []
---

Once you have developed a spark data pipeline using prophecy, you will want to schedule it to run at some frequency. To
support this, Prophecy provides you with an easy to use low-code interface to develop Jobs, using two different
schedulers:

1. **[Databricks Jobs](/low-code-jobs/databricks-jobs)** - for simpler data-pipeline use-cases, where you just
   orchestrate multiple data-pipelines to run
   together. Databricks Jobs is a **recommended** scheduler, if you're Databricks Native.

2. **[Airflow](/low-code-jobs/airflow)** - for more complex use-cases, where you have to use various operators, or need
   any additional data
   pre- / post-processing.

Alternatively, since Prophecy provides you native Spark code no GIT, you can easily integrate with any other scheduler.
Read more about it [here](http://localhost:3000/low-code-jobs/alternative-schedulers).
