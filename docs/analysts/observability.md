---
title: Observability
id: observability
description: View deployed projects, scheduled pipelines, run history, and cost and performance
tags: []
---

The **Observability** page in Prophecy lets you monitor your deployed projects, review scheduled pipelines, and audit run history. You'll be able to view all projects and pipelines owned by your team(s). **Only SQL projects will appear in Observability.**

## Deployed Projects

Projects that have been [published](/analysts/development/version-control/) will appear in the **Deployed Projects** tab of the Observability page. Each row represents a different project deployment and displays the following information.

- **Project:** The name of the deployed project. Clicking the project name will open that project's metadata page.
- **Fabric:** The fabric associated with the project deployment.
- **Release Version:** The version of the project deployment.
- **Published:** How long ago the project was published.
- **Last run:** How long ago the project was run. This only accounts for scheduled pipeline runs (not interactive runs).
- **Result:** Success or failure of the last run. This only accounts for scheduled pipeline runs (not interactive runs).

:::info
You may see multiple rows for the same project if it is deployed to multiple fabrics.
:::

## Scheduled Pipelines

Scheduled pipelines included in deployed projects can be found in the **Scheduled Pipelines** tab. For each scheduled pipeline, you will see the following information.

- **Pipeline:** The name of the scheduled pipeline. Clicking the pipeline name will open the pipeline in the project editor.
- **Fabric:** The fabric associated with the pipeline.
- **Project:** The project that contains the pipeline.
- **Run frequency:** The schedule for the pipeline runs.
- **Last 5 runs:** Results of the last five scheduled runs. To find the history of all pipeline runs, open the Run History tab.

:::info
You may see multiple rows for the same pipeline if the parent project is deployed to multiple fabrics.
:::

## Run History

The **Run History** tab lets you see a full list of historical pipeline runs from scheduled pipelines.

- **Fabric:** The fabric that was used to execute the pipeline run.
- **Schedule:** The frequency of the pipeline runs.
- **Pipeline:** The name of the pipeline.
- **Project:** The project that contains the pipeline.
- **Run by:** How the run was triggered.
- **Duration:** How long the computation lasted.
- **Result:** Success or failure of the run.

To narrow your results, you can choose a specific time frame to filter the table.
