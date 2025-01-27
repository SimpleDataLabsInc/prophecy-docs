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
4. All Streaming datasets can behave similarly to Batch datasets using the Spark [`ForEachBatch`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/api/pyspark.sql.streaming.DataStreamWriter.foreachBatch.html), though `ForEachBatch` is not supported by Prophecy.

The streaming capability is available for `Python` projects that do not use UC Shared clusters.

| Project Type | Spark Cluster Access Mode | Spark Cluster Type | Structured Streaming Capability   |
| ------------ | ------------------------- | ------------------ | --------------------------------- |
| Python       | Single User               | UC, legacy         | Supported as of Prophecy3.4.x     |
| Python       | Shared                    | UC                 | Not supported as of Prophecy3.4.x |
| Scala        | Any Mode                  | Any type           | Not supported as of Prophecy3.4.x |

## Spark Structured Streaming using Prophecy IDE

![How to Create a Streaming pipeline](./img/create-streaming-pipeline.png)
Within a Prophecy `Python` project, a user can create a Structured Streaming pipeline using the Streaming(beta) mode.

### Working with a Streaming pipeline

To create a Streaming pipeline, users can follow a process similar to creating a Batch pipeline in a `Python` project. For more on pipeline creation and understanding Prophecy pipelines, please check [this](/docs/get-started/concepts/project/pipelines.md) link. Streaming pipelines work differently from Batch pipelines in the following ways:

1. Partial runs are not supported for streaming applications. A partial run is only allowed on a `Streaming Target` gem.
2. Streaming pipelines are long-running tasks and process data at intervals. Currently, they do not capture cumulative statistics.
3. Streaming pipelines are continuous and do not stop running. To terminate a Streaming pipeline, users need to click the "X" button. A Streaming pipeline is an ongoing process and will not terminate itself.
4. To deploy the pipeline on Databricks, users can follow the same process described [here](/Orchestration/databricks-jobs). A scheduled job will check if the Streaming pipeline is running every X minutes. If the pipeline is not running, the job will attempt to start it.

### Streaming Sources and Targets

Spark Structured Streaming applications have a variety of source and target components available to construct Piplines.

Streaming source gems render to `spark.readStream()` on the Spark side. Currently, we support file stream-based sources and targets, warehouse-based targets, and event stream-based sources and targets. For more information on Streaming Source and Target gems, click [here](streaming-sources-and-targets/streaming-sources-and-targets.md).

Additionally, any batch data sources can be used in a streaming application. Batch data sources are read using the `spark.read()` function at every processing trigger (due to Spark evaluating lazily). More on triggers [here](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#triggers). For more information on Batch Source and Target gems, click [here](/Spark/gems/source-target/source-target.md).

### Streaming Transformations

For more information on Streaming Transformations, click [here](./streaming-transformations.md).
