---
title: Run Prophecy automate pipelines in Databricks jobs
id: automate-pipelines-databricks
description: Run Prophecy automate pipelines in Databricks.
tags:
  - jobs
  - deployment
  - orchestration
  - Databricks
---

You can use Databricks Workflows to invoke a Prophecy pipeline by running a small Python trigger script with the correct parameters (fabric ID, pipeline name, and project ID).

This lets you integrate Prophecy orchestration directly with Databricks job scheduling.

## Summary of orchestration

There are a few ways to structure orchestration between Prophecy and Databricks:

1. **(Smallest / Shared)** Databricks Workflow → Prophecy Scheduler → Databricks
2. **(Recommended)** Prophecy Scheduler → Databricks
3. **Prophecy Export Code:** CODE → Databricks

Option 2 is the most common for production environments: use **Prophecy Scheduler** to coordinate Databricks jobs, maintaining Prophecy as the orchestration layer while leveraging Databricks for execution.

## Create job

1. In Databricks, go to **Workflows → Jobs & Pipelines**.
1. Click **Create Job** and give it a name, such as `Compute Top Encounter [Trigger Demo]`.

## Configure job

| Field                         | Description                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Task name** _(Required)_    | Enter a descriptive task name such as `ProphecyRun`.                                                                    |
| **Type** _(Required)_         | Select **Python script**.                                                                                               |
| **Source**                    | Choose **Workspace**.                                                                                                   |
| **Path**                      | Provide the path to your Python trigger file, such as:`/Users/databricks-dev-e2@simpledatalabs.com/pipeline_trigger.py` |
| **Compute**                   | Select **Serverless (Autoscaling)**.                                                                                    |
| **Environment and Libraries** | Leave as **Default** unless you need custom libraries.                                                                  |

### Add parameters

These identify which Prophecy pipeline to trigger.
They are passed to the script as runtime arguments:

```
--fabric-id 213
--pipeline-name top_encounters
--project-id 297
```

| Parameter       | Explanation                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `fabric-id`     | Identifies the Prophecy Fabric environment (such as `dev`, `staging`, `prod`). |
| `pipeline-name` | The specific Prophecy pipeline to run.                                         |
| `project-id`    | The project within which that pipeline is defined.                             |

### Run and monitor

In Databricks:

1. Open the **Runs** tab and click **Run now**.
2. Open the job once it starts to view logs and output.
   - If errors occur, the logs will display the failing component.
   - Links in the output allow you to open the exact pipeline in Prophecy for debugging.

Output:

```
Prophecy Pipeline Trigger Status:
Success: True
Run ID: MDAwMDAwMDAzNzg4LTQyNmZMjML==
Message: Pipeline triggered successfully.

Run progress:
2025-11-04 18:56:24 UTC: RUNNING
2025-11-04 18:56:24 UTC: SUCCEEDED

Pipeline completed successfully!
You can see the pipeline here:
https://analytics.prophecy.io/metadata/sql/297?entity=Pipeline&name=top_encounters
See the runs here:
https://analytics.prophecy.io/metadata/ide/observation?observationTab=run-history&project
```

## Troubleshooting and common errors

If your trigger job fails or doesn’t start the Prophecy pipeline as expected, review the following common issues:

### Missing or incorrect parameters

Make sure your parameters match the exact Prophecy project and pipeline:

```bash
--fabric-id 213
--pipeline-name top_encounters
--project-id 297
```

If any of these are incorrect (for example, the wrong fabric ID), the trigger script will run but the pipeline will not start.

**Tip:** You can confirm your Fabric and Project IDs in Prophecy under **Settings → Fabric** and **Projects → Overview**.

### Authentication errors

If you see an authentication or permissions error:

- Confirm that your Databricks workspace is authorized to access Prophecy.
- Ensure the user running the job has both Databricks and Prophecy credentials set up (via API token or linked integration).
- If using a Service Principal, verify that the token has not expired.

### Compute or environment failures

If the job never starts:

- Check that **Compute** is set to **Serverless (Autoscaling)** or a valid cluster.
- If your workspace doesn’t support Serverless, choose a specific **existing cluster**.
- Verify that the Python environment includes the required Prophecy trigger dependencies.

### Path errors

If Databricks cannot locate the trigger script:

- Make sure the **Path** field matches the full path in the Workspace.
- Example:
  `/Users/databricks-dev-e2@simpledatalabs.com/pipeline_trigger.py`
- If you moved the file, reselect it from the file picker in Databricks.

### Output or log clarity

If the job completes but you’re not sure whether the pipeline ran:

- Check the job’s **Output** tab — successful runs include confirmation such as:

  ```
  Success: True
  Message: Pipeline triggered successfully.
  ```

  You can click the pipeline link in the output to open it directly in Prophecy for verification and debugging.

### Prophecy pipeline failures

If the Databricks job succeeds but the pipeline itself fails:

- Open the linked Prophecy run in your output log.
- Identify the failed **Gem** (transformation) or stage.
- Review Spark logs or Prophecy validation output to fix the specific component.

### Timeout or network errors

If execution hangs:

- Check Databricks workspace connectivity to Prophecy’s API endpoint.
- Increase the job timeout in Databricks if the trigger script is waiting for confirmation of a long-running Prophecy job.
