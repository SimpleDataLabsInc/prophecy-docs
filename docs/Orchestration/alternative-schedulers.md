---
title: Alternative Schedulers
id: alternative-schedulers
sidebar_position: 3
description: Support for Alternative Orchestration Solutions
tags:
  - jobs
  - deployment
  - orchestration
  - spark-submit
  - runtime config
---

## Basic Spark Submit

The following sections contain Scala, PySpark and runtime configuration variables to use with custom orchestration solutions.

### Scala Spark Pipelines

Prerequisites:

- Optional: Modify `ivysettings.xml` to point to a custom Maven mirror.

Given a Scala Pipeline named "demo_pipeline" with a JAR artifact from [PBT](../../deployment/prophecy-build-tool)
called `demo_pipeline-1.0.jar` you could call the following commands to invoke the Main class from the JAR
file and run the Pipeline on a local Spark cluster.

:::caution

Make sure to use the correct version of `io.prophecy:prophecy-libs_2.12` for your Pipeline.
Find this version in the `pom.xml` or `pbt_project.yml` in the Pipeline's source code directory.
Alternatively use a tool like `jdeps` on the jar file itself.

:::

```shell
spark-submit \
  --master yarn \
  --deploy-mode cluster \
  --driver-memory 8g \
  --executor-memory 4g \
  --executor-cores 4  \
  --packages io.prophecy:prophecy-libs_2.12:3.5.0-8.0.29 \
  --class io.prophecy.pipelines.demo_pipeline.Main \
  demo_pipeline-1.0.jar -i default -O "{}"
```

### PySpark Pipelines

Prerequisites:

- Install Python dependencies by installing the WHL file using `pip`.
  - `pip install ./demo_pipeline-1.0-py3-none-any.whl`
- Gather necessary Maven dependencies and put into the `--jars` (local) or `--packages` (repo) option.
  - PBT will have a command to generate dependencies or pom.xml for PySpark projects.
- Optional: Modify ivysettings.xml to point to a custom Maven mirror or PyPi mirror.

Given a PySpark Pipeline named "demo_pipeline" with a WHL artifact from [PBT](../../deployment/prophecy-build-tool)
called `demo_pipeline-1.0-py3-none-any.whl` you could call the following commands to invoke the `main()` method from the WHL
file using a customized launcher script.

```shell
 spark-submit \
  --master yarn \
  --deploy-mode cluster \
  --driver-memory 8g \
  --executor-memory 4g \
  --executor-cores 4  \
  --packages io.prophecy:prophecy-libs_2.12:3.5.0-8.0.29 \
  --py-files demo_pipeline-1.0-py3-none-any.whl \
  launcher.py -i default -O "{}"
```

In this example `launcher.py` would import the whl file and call the `main()` entrypoint like so:

:::caution

This launcher must import the name of your specific Pipeline package!

:::

```python
from demo_pipeline import main

main()
```

### Set Runtime Configuration variables

In some cases you may want to override runtime configuration variables of a Pipeline.
We offer several options for changing the Pipeline configuration at runtime. Each example will show a sample
as "parameters" (e.g. for a Databricks Job) and as "sys args" (e.g. for passing at the end of a `spark-submit` command).

Sample Configuration Schema for below examples:

| Name      | Type    |
| --------- | ------- |
| str_var   | string  |
| bool_var  | boolean |
| float_var | float   |

#### `-i` set the Pipeline Configuration instance

A Pipeline may be run with a different Pipeline Configuration instance by using the `-i` option and providing the name of the configuration profile instance. For more information on configuration instances and overrides, see [Pipeline Configuration instances](../../Spark/configuration/#pipeline-configuration-instances).

##### `-i` examples

- as parameters: `['-i', 'default']`

- as sysargs: `-i default`

#### `-O` override many parameters as a json blob

This may be used in conjunction with `-i` and it will only override parameters which are given. You must
specify the name and value of each variable that you want to override.

##### `-0` examples

- as parameters: `['-O', '{"str_var":"overridden", "float_var":0.5}']`

- as sysargs: `-O "{\"str_var\":\"overridden\",\"float_var\":0.5}"`

#### `-C` override individual parameters

This may be used in conjunction with `-i` and it will only override parameters which are given.
This option may be used more than once.

##### `-C` examples

- as parameters: `['-C', 'str_var=test1', 'float_var=0.5']`

- as sysargs: `-C str_var=test1 float_var=0.5`

#### `-f` set configuration using a file

This option will set all parameters for a Pipeline by using a json file which can be reached locally by the
`spark-submit` command.

:::caution

All Configuration Schema fields must be provided in this file.

:::

##### `-f` examples

- as parameters: `['-f', '/path/to/somefile.json']`

- as sysargs: `-f /path/to/somefile.json`

Example json file:

```json
{
  "str_var": "vendor1",
  "bool_var": true,
  "float_var": 0.5
}
```
