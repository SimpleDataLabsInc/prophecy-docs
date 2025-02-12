---
title: Observability
id: observability
description: View deployed projects, scheduled pipelines, run history, and cost and performance
tags: []
---

The **Observability** page in Prophecy lets you monitor your deployed projects, review scheduled pipelines, audit run history, and understand cost and performance.

## Deployed Projects

Data analysis projects that have been [published](docs/analysts/development/version-control/version-control.md) will appear in the **Deployed Projects** tab of the Observability page.

- **Project:** The name of the deployed project.
- **Fabric:** The fabric associated with the deployed project.
- **Release Version:** The version created upon project publication.
- **Published:** How long ago the project was published.
- **Last run:** How long ago the project was run.
- **Result:** Success or failure of the last run.

## Scheduled Pipelines

Scheduled pipelines included in deployed projects can be found in the **Scheduled Pipelines** tab.

- **Pipeline:** The name of the scheduled pipeline.
- **Fabric:** The fabric associated with the pipeline.
- **Project:** The project that contains the pipeline.
- **Run frequency:** The schedule for the pipeline runs.
- **Last 5 runs:** Results of the last five runs.

## Run History

The **Run History** tab lets you see a full list of historical pipeline runs from scheduled pipelines.

- **Fabric:** The fabric associated with the pipeline.
- **Schedule:** The frequency of the pipeline runs.
- **Pipeline:** The name of the pipeline.
- **Project:** The project that contains the pipeline.
- **Run by:** How the run was triggered.
- **Duration:** How long the computation lasted.
- **Result:** Success or failure of the run.

To narrow your results, you can choose a specific time frame in which you want to see pipeline runs.

## Cost & Performance
