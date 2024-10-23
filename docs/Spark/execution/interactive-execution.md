---
title: Interactive Execution
id: interactive-execution
description: Interactive Execution
sidebar_position: 1
tags:
  - spark
  - interactive
  - development
---

## Running a Pipeline

There are 2 ways to run a Pipeline interactively:

![Interactive run options](img/interactive-execution-play-options.png)

1. Using the play button from the bottom right side. This would execute the entire Pipeline.
2. Using the play button on a particular Gem. This would only execute the flow in the Pipeline up to and including that Gem. This comes
   in handy during development, so that we don't have to run the entire Pipeline to debug/change a particular Gem.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/185360973-928612ae-7655-4e67-8f95-ae9b63829231.mp4" title="Monitoring" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Interims

During development, often the user will want to see their data to make more sense of it and to check whether the expected output is getting
generated or not after the transformation. Prophecy generates these data samples as `Interims`, which are temporarily cached previews of data after each Gem.

Which Gems automatically get Interims created is controlled by the Pipeline settings as shown below.

![Data and Job Sampling](img/interactive-execution-job-data-sampling.png)

From the Pipeline, select the **(1) dropdown** and **(2) Pipeline Settings**. Select **(3) Job Sampling** to generate interim samples for scheduled jobs. Select **(4) Sampling Mode** to chose the level of data sampling. Select **(5) Data Sampling** to generate interim samples during interactive runs, and select the Sampling Mode accordingly. These two options, Job sampling and Data sampling, are independent; one does not affect the other. For Job sampling, the interim metrics are stored in the compute cluster, such as the Databricks workspace, and visible in [execution metrics](#execution-metrics).

There is also a global level Development Settings flag that admins can use to disable Data sampling for a given Fabric. This flag overrides the Pipeline level Data sampling settings. When disabled, you won't be able to see production data in the interims when you run the Pipeline.

From the Metadata page, click the **Fabrics** tab and select the Fabric that you want to change the Data sampling setting for. Click the **Advanced** tab and click the **Allow for data sampling** toggle to turn on or off the flag.

![Create a new model test](./img/limit-data-preview-interims.png)

Data sampling is enabled on by default. When left enabled, Data sampling uses the Pipeline's Data sampling settings. Prophecy samples data during the interactive run experience to provide the best debugging experience for users.

Toggle the images below to view the various modes (or levels) of data sampling. By default, for interactive runs, data sampling is enabled for all components. Note [Vanilla](https://docs.prophecy.io/Spark/execution/executions_on_databricks_clusters/#vanilla-interims) is an interim sampling mode reserved for Shared Databricks clusters.

```mdx-code-block
import App from '@site/src/components/slider';

export const ImageData = [
  {
    "image":"/img/interactive-execution/interactive-execution-interim-all.png",
    "description":<h3 style={{padding:'10px'}}>Data Sampling Mode - All</h3>,
  },
  {
    "image":"/img/interactive-execution/interactive-execution-interim-source.png",
    "description":<h3 style={{padding:'10px'}}>Data Sampling Mode - Source</h3>
  },
  {
    "image":"/img/interactive-execution/interactive-execution-interim-target.png",
    "description":<h3 style={{padding:'10px'}}>Data Sampling Mode - Target</h3>,
  },
  {
    "image":"/img/interactive-execution/interactive-execution-interim-io.png",
    "description":<h3 style={{padding:'10px'}}>Data Sampling Mode - IO</h3>,
  },
  {
    "image":"/img/interactive-execution/interactive-execution-sample-interim.png",
    "description":<h3 style={{padding:'10px'}}>Interim example</h3>,
  },
];

<App ImageData={ImageData}></App>
```

## Execution

Once we run a Pipeline, we have several options to better understand our Pipeline:

- [Execution code](#execution-code)
- [Execution Errors](#execution-errors)
- [Runtime Logs](#runtime-logs)
- [Runtime Metrics](#runtime-metrics)
- [Execution Metrics](#execution-metrics)

### Execution Code

Once we run a Pipeline interactively Prophecy generates the execution code in the backend, which is then executed in
the selected Fabric.

![Execution code](img/interactive-execution-code.png)

:::info
Execution code can also be copy-pasted inside `databricks notebook` or [shell](#shell) and can directly
be executed for debugging.
:::

### Execution Errors

If there are any errors in the Pipeline, a pop-up window will open for `execution errors`.
![Interactive execution error](img/interactive-execution-error.png)

Also the error can be seen in the runtime logs:
![Interactive execution error logs](img/interactive-execution-error-logs.png)

### Runtime Logs

Overall progress with associated timestamps can be monitored from the Runtime Logs as shown here:

![Runtime Logs](img/interactive-execution-runtime-logs.png)

### Runtime Metrics

Various Spark metrics collected during runtime can be monitored as shown here:

![Runtime Metrics](img/interactive-execution-runtime-metrics.png)

### Execution Metrics

For `interactive runs` execution metrics are collected to make the development easier and performance tuning more intuitive. These can be
accessed from the `Metadata Page` inside the `run tab` of the `Pipeline`.

![Execution Metrics](img/interactive-execution-execution-metrics.png)

## Shell

Prophecy IDE comes with an inbuilt interactive Spark shell that supports both `Python` and `Scala`. The shell is an easy way to quickly analyze data or test Spark commands
![Interactive execution](./img/int_exc_1.png)

:::info
`Spark context` and `session` are available within the shell as variables `sc` and `spark` respectively
:::

---

### Examples

:::note
You need to be connected to a cluster to access the interactive shell
:::

#### Python

![Python interactive execution](./img/int_exc_py.png)

#### Scala

![Scala interactive execution](./img/int_exc_scala.png)
