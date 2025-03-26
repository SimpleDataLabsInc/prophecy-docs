---
title: Monitoring
id: observability
slug: /analysts/monitoring
description: View deployed projects, scheduled pipelines, run history, and cost and performance
tags: []
---

The **Monitoring** page in Prophecy lets you monitor your deployed projects, review scheduled pipelines, and audit run history. You'll be able to view all projects and pipelines that your teams own.

:::note
Only projects deployed on Prophecy fabrics will appear in Monitoring.
:::

## Deployed Projects

Projects that have been [published](https://docs.prophecy.io/analysts/versioning) to Prophecy fabrics will appear in the **Deployed Projects** tab of the page. Each row represents a different project deployment and displays the following information.

- **Project:** Name of the deployed project. To open the project metadata page, click the project name.
- **Fabric:** Fabric associated with the project deployment.
- **Release Version:** Version of the project deployment.
- **Published:** Time since the project was published.
- **Last run:** Time since the project was run.
- **Result:** Success or failure of the last run.

:::info
When a project is published to multiple fabrics, an individual project deployment is created for each fabric. You will see all of these deployments in the Deployed Projects page. You cannot revert or delete a project deployment.
:::

## Scheduled Pipelines

The **Scheduled Pipelines** tab shows scheduled pipelines in projects deployed to Prophecy fabrics. For each scheduled pipeline, you can see the following information.

- **Pipeline:** Name of the scheduled pipeline. To open the pipeline in the project editor, click the pipeline name.
- **Fabric:** Fabric associated with the pipeline for this schedule.
- **Project:** Project that contains the pipeline.
- **Run frequency:** Schedule for the pipeline runs.
- **Last 5 runs:** Results of the last five scheduled runs. To find the history of all pipeline runs, open the Run History tab.

:::info
You may see multiple rows for the same pipeline if the parent project is deployed to multiple fabrics.
:::

## Run History

The **Run History** tab lets you see a full list of historical pipeline runs from scheduled pipelines.

- **Fabric:** Fabric that was used to execute the pipeline run.
- **Schedule:** Frequency of the pipeline runs.
- **Pipeline:** Name of the pipeline.
- **Project:** Project that contains the pipeline.
- **Run by:** How the run was triggered. This includes by **schedules**, **APIs**, **Business Apps**, or **interactive runs**.
- **Duration:** How long the computation lasted.
- **Result:** Success or failure of the run.

To narrow your results, you can choose a specific time frame to filter the table.
