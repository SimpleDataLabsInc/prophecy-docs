---
title: Spark Structured Streaming
id: streaming
description: Prophecy Streaming Gems
tags: [streaming, gems, source, target]
---

Prophecy provides native support for streaming data running on Spark Structured Streaming. This documentation assumes you are already familiar with how Structured Streaming works. For more information, you can consult the Structured Streaming documentation [here](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html).

Streaming pipelines work differently from batch pipelines:

1. Streaming applications are always running, continuously processing incoming data.
2. Data is processed in micro-batches, with the notable exception of [Continuous Triggers](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#continuous-processing) (an experimental feature available in Spark3.3). Continuous triggers are not supported by Prophecy.
3. Streaming applications handle transient data rather than maintain the entire data. Aggregations and joins require watermarking for maintaining a limited state.
4. All Streaming Datasets can behave similarly to Batch datasets using the Spark `ForEachBatch`. More on `ForEachBatch` [here](https://spark.apache.org/docs/3.1.1/api/python/reference/api/pyspark.sql.streaming.DataStreamWriter.foreachBatch.html) Note that `forEachBatch` is not supported by Prophecy.

The streaming capability is available for `Python` projects that do not use UC Shared clusters.

| Project Type | Spark Cluster Access Mode | Spark Cluster Type | Structured Streaming Capability |
| ------------ | ------------------------- | ------------------ | ------------------------------- |
| Python       | Single User               | UC, legacy         | Supported                       |
| Python       | Shared                    | UC                 | Not supported yet               |
| Scala        | Any Mode                  | Any type           | Not supported yet               |

## Spark Structured Streaming using Prophecy IDE

![How to Create a Streaming Pipeline](./img/create-streaming-pipeline.png)
Within a Prophecy `Python` Project, a user can create a Structured Streaming Pipeline using the Streaming(beta) mode.

### Working with a Streaming Pipeline

To create a Streaming Pipeline, users can follow a process similar to creating a Batch Pipeline in a `Python` project. For more on Pipeline creation and understanding Prophecy pipelines, please check [this](/docs/concepts/project/pipelines.md) link. Streaming Pipelines work differently from Batch Pipelines in the following ways:

1. Partial runs are not supported for streaming applications. A partial run is only allowed on a `Streaming Target` Gem.
2. Streaming pipelines are long-running tasks and process data at intervals. Currently, they do not capture cumulative statistics.
3. Streaming Pipelines are continuous and do not stop running. To terminate a Streaming Pipeline, users need to click the "X" button. A Streaming Pipeline is an ongoing process and will not terminate itself.
4. To deploy the Pipeline on Databricks, users can follow the same process described [here](/Orchestration/databricks-jobs). A scheduled Job will check if the Streaming Pipeline is running every X minutes. If the Pipeline is not running, the Job will attempt to start it.

### Streaming Sources and Targets

Spark Structured Streaming applications have a variety of source and target components available to construct Piplines.

Streaming source gems render to `spark.readStream()` on the Spark side. Currently, we support file stream-based sources and targets, warehouse-based targets, and event stream-based sources and targets. For more information on Streaming Source and Target Gems, click [here](streaming-sources-and-targets/streaming-sources-and-targets.md).

Additionally, any batch data sources can be used in a streaming application. Batch data sources are read using the `spark.read()` function at every processing trigger (due to Spark evaluating lazily). More on triggers [here](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#triggers). For more information on Batch Source and Target Gems, click [here](/Spark/gems/source-target/source-target.md).

### Streaming Transformations

For more information on Streaming Transformations, click [here](./streaming-transformations.md).
