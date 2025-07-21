---
title: Monitoring
id: monitoring
slug: /analysts/monitoring
description: View deployed projects, scheduled pipelines, run history, and cost and performance
tags: []
---

The **Observability** interface in Prophecy lets you monitor your deployed projects, review scheduled pipelines, and audit run history. You'll be able to view all projects and pipelines that your teams own. _Only projects deployed to Prophecy fabrics will appear in Observability._

## Deployed Projects

The **Deployed Projects** tab in the Observability interface shows all projects that have been [published](/analysts/versioning) to Prophecy fabrics. It gives you visibility into release versions and recent execution status at the project level.

Use the following filters to narrow the results.

| Field              | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| **Search project** | Search for a project by name.                                         |
| **Fabric**         | Filter results by the fabric (such as `AnalystDBX`, `devDatabricks`). |

For each project deployment, Prophecy provides the following information.

| Column              | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| **Project**         | Name of the deployed project. Click the name to navigate to the project metadata. |
| **Fabric**          | Fabric associated with the project deployment.                                    |
| **Release Version** | Version number of the deployed project release.                                   |
| **Published**       | Time since the project was last published.                                        |
| **Last Run**        | Time since the most recent pipeline execution in the project.                     |
| **Last Run Status** | Success or failure of the last run.                                               |

:::info
When a project is published to multiple fabrics, an individual project deployment is created for each fabric. You will see all of these deployments in the Deployed Projects page. You cannot revert or delete a project deployment.
:::

## Scheduled Pipelines

The **Scheduled Pipelines** tab in the Observability interface displays all pipelines configured with a schedule across environments. It provides visibility into their execution frequency and recent run outcomes. Use this page to verify that pipelines are scheduled correctly and identify patterns of success or failure.

Use the following filters to narrow the results.

| Field               | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| **Search pipeline** | Search by pipeline name.                                    |
| **Fabric**          | Filter by fabric.                                           |
| **Project**         | Filter by the project that contains the scheduled pipeline. |

For each scheduled pipeline, Prophecy provides the following information.

| Column          | Description                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| **Pipeline**    | Name of the pipeline. Click to view the pipeline in the project editor.                               |
| **Fabric**      | Fabric where the pipeline is deployed.                                                                |
| **Project**     | Project that contains the pipeline.                                                                   |
| **Triggers**    | Type of trigger for the schedule. Schedules can include multiple triggers.                            |
| **Last 5 Runs** | Status of the 5 most recent runs. To find the history of all pipeline runs, open the Run History tab. |

:::info
You may see multiple rows for the same pipeline if the parent project is deployed to multiple fabrics.
:::

## Run History

Use the **Run History** tab in the Observability interface to view and analyze recent pipeline runs across all fabrics and projects. This page provides detailed metadata for each run, including its type, duration, status, and execution context.

Use the following filters to narrow the results.

| Field          | Description                                                                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Date Range** | Select a date range to limit results to runs that started in that window.                                                                                                                                |
| **Fabric**     | Filter by fabric used to run the pipeline.                                                                                                                                                               |
| **Project**    | Filter by the name of the project that contains the pipeline.                                                                                                                                            |
| **Run Type**   | Select one or more run types to include. Supported values include:<ul class="table-list"><li>Scheduled</li><li>Pipeline Run</li><li>App Run</li><li>Scheduled App Run</li><li>API Pipeline Run</li></ul> |

For each historical pipeline run, Prophecy provides the following information.

| Column         | Description                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**         | Hover the **#** sign to view the full unique pipeline run ID. <br/>You can reference this value in the [Trigger Pipeline API](/api/trigger-pipeline/trigger-pipeline-api#get-pipeline-run-status).                                    |
| **Fabric**     | Name of the fabric used to execute the pipeline run.                                                                                                                                                                                  |
| **Pipeline**   | Name of the pipeline that was executed.                                                                                                                                                                                               |
| **Project**    | Name of the project containing the pipeline.                                                                                                                                                                                          |
| **Run Type**   | How the run was triggered. <br/>This includes by interactive runs, pipeline schedules, APIs, Prophecy Apps, and app schedules. <br/>Any scheduled runs will include additional information about the schedule that triggered the run. |
| **Start Time** | Timestamp when the run started.                                                                                                                                                                                                       |
| **End Time**   | Timestamp when the run completed.                                                                                                                                                                                                     |
| **Duration**   | Elapsed time of the run.                                                                                                                                                                                                              |
| **Result**     | Status of the run: `Success` (green) or `Failed` (red).                                                                                                                                                                               |
