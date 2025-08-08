---
title: Spark Submit Options
id: spark-submit-options
description: To provide Spark configs from the scheduler
tags:
  - jobs
  - spark
  - submit
  - config
  - deployment
  - scheduling
---

Once you've created and deployed your Job from Prophecy, you may wish to manage that Job from your scheduler (eg Databricks, Airflow, etc). In particular, you may wish to adjust the `spark-submit` configurations but keep the jar file the same.

Prophecy has build wrappers to provide configurations from the main method called by the scheduler. The following arguments can be called from the scheduler when it invokes the jar file created in Prophecy.

| Argument | Configuration provided by the argument                                                                          |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| -i       | (required) Name of config instance defined in Prophecy.                                                         |
| -O       | (optional) Override of arguments on top of the config instance at runtime. Format is escaped json.              |
| -f       | (optional) Path of config file json. The schema in this json should be a subset of what is defined in Prophecy. |
| -C       | (optional) Parameter to provide command line type variables present in config schema in Prophecy.               |

Many teams will use these `spark-submit` configurations to automate their jobs via their scheduler of choice. Just build the jar from code generated in Prophecy, and invoke that jar using the `spark-submit` options above.

## Examples
