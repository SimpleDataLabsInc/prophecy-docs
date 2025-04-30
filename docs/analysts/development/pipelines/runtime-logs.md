---
title: Logs
id: logs
slug: /analysts/logs
description: Find more information about the success of failure of different operations
tags:
  - logs
  - analyst
---

Logs are an essential tool for debugging and optimization. There are two types of logs in Prophecy:

- Runtime logs provide detailed information about each operation performed during a pipeline run.
- Publish logs present the status of each project publication step, outlined below.

## Runtime logs

If you open the Runtime Logs tab from the information footer, logs show the following details for each log entry:

- **Pipeline steps**: View the execution details of each processing step, which maps to corresponding gems in your visual pipeline
- **Execution sequence**: Track the precise order in which operations were executed
- **Timestamp**: See the exact time when each step began
- **Duration**: Find the execution duration for each step to identify performance bottlenecks or unusually long-running operations

Prophecy generates runtime logs in real-time during pipeline execution, so you can monitor each step as it occurs.

:::info
This information is also surfaced when you hover over each gem type. You will see how long it took to run the gem and whether the run succeeded or failed.
:::

### Log UI

In the Runtime Logs tab, you have several tools to help you navigate and analyze your logs effectively:

1. **Filter logs by keywords**: Find specific information by entering search terms
1. **Sort logs**: Organize logs chronologically
1. **Filter logs by log level** (info, warning, error): Focus on specific types of messages
1. **Download logs**: Save logs to your machine as a text file
1. **Expand log screen**: Display a larger view of your logs
1. **Clear all logs**: Remove log information for previous runs

![Runtime logs](img/runtime-logs.png)

## Publish logs

When you publish a project, Prophecy provides detailed logs for each publication step to help you troubleshoot if anything goes wrong during the deployment process.

The publication process follows these steps:

1. **Fetching fabric info**: Gather information about the currently attached fabric
1. **Reading project code**: Review code elements
1. **Packaging project**: Bundle all components together
1. **Connecting to deployment service**: Establish connection to deployment tool
1. **Deploying to fabric**: Build project in the target fabric

You will see a success or failure status for each step of the way in the publish logs, making it easy to identify exactly where issues may have occurred.

![Publish logs](img/publish-logs.png)
