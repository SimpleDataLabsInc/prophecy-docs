---
title: Run Prophecy pipelines in Databricks jobs
id: automate-pipelines-databricks
slug: /engineers/automate-pipelines-databricks
description: Run Prophecy automate pipelines in Databricks.
tags:
  - jobs
  - deployment
  - orchestration
  - Databricks
---

You can use Databricks Workflows to invoke a [Prophecy Automate pipeline](/administration/architecture#what-is-prophecy-automate) by running a small Python trigger script with the correct parameters (fabric ID, pipeline name, and project ID). This trigger script references Prophecy's [Trigger Pipeline API](/api/trigger-pipeline/trigger-pipeline-api).

See [the Databricks job page](https://docs.databricks.com/aws/en/jobs/) for more information on Databricks Workflows.

This lets you integrate Prophecy orchestration directly with Databricks job scheduling.

:::edition Enterprise Only
This deployment model requires the [Enterprise Edition](/getting-started/editions/) of Prophecy.
:::

## Create job

To begin, create a job in Databricks:

1. Log in to Databricks and go to **Jobs & Pipelines**.
1. Click **Create new > Job** and give it a name, such as `Compute Top Encounter [Trigger Demo]`.
1. Under **Add your first task**, choose **Python script**. (If Python script does not display, choose **+ Add another task type** and select **Python script** in the dialog.)

## Configure job

In the dialog, configure the following parameters:

| Field                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Task name **(Required)**  | Enter a descriptive task name such as `ProphecyRun`.                                                                                                                                                                                                                                                                                                                                                                         |
| Type **(Required)**       | Select **Python script**. Should be pre-selected.                                                                                                                                                                                                                                                                                                                                                                            |
| Source                    | Choose **Workspace**.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Path                      | Provide the Databricks Workspace path to your Python trigger file, such as `/Users/databricks-dev-e2@simpledatalabs.com/pipeline_trigger.py`. <br/>See [sample trigger file](#sample-python-trigger-file) below for an example of a Python trigger file.<br/>For information on Databricks workspace files, see [What are workspace files?](https://docs.databricks.com/aws/en/files/workspace) in Databricks documentation. |
| Compute                   | Select **Serverless (Autoscaling)**.                                                                                                                                                                                                                                                                                                                                                                                         |
| Environment and Libraries | Leave as **Default** unless you need custom libraries.                                                                                                                                                                                                                                                                                                                                                                       |

### Add parameters

Next, you'll add parameters to the job. These identify which Prophecy pipeline to trigger.

They are passed to the script as runtime arguments:

```
["--fabric-id", "213",
"--pipeline-name", "top_encounters",
"--project-id", "297"]
```

| Parameter       | Explanation                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `fabric-id`     | Identifies the Prophecy Fabric environment (such as `dev`, `staging`, `prod`). |
| `pipeline-name` | The specific Prophecy pipeline to run.                                         |
| `project-id`    | The project within which that pipeline is defined.                             |

### Run and monitor

You can now run the job.

Running invokes the actual job run in Databricks’ workflow engine.
Once you have confirmed that the job runs correctly, you can set a schedule in the Databricks UI to run it automatically.

In Databricks:

1. Open the **Runs** tab and click **Run now**.
2. Open the job once it is available.
   - If errors occur, the logs will display the failing component.
   - Links in the output allow you to open the pipeline in Prophecy for debugging.

### View output

Databricks displays information on the job's output.

Sample output is as follows:

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

## Sample Python trigger file

An example of a Python trigger file appears below. The following code:

- Authenticates with the Prophecy API using a Prophecy token.
- Triggers a pipeline in a given project, fabric, and branch.
- Polls the pipeline’s run status until it finishes.
- Prints direct links to the pipeline and its run history.

```python
import requests
import argparse
import time
from datetime import datetime

# Constants
BASE_URL = "https://analytics.prophecy.io"
API_TOKEN = dbutils.secrets.get("myusername", "prophecy_analytics_token")

def get_headers():
    return {"X-AUTH-TOKEN": API_TOKEN, "Content-Type": "application/json"}

def print_links(project_id, pipeline_name, fabric_id):
    print(f"\nView pipeline: {BASE_URL}/metadata/sql/{project_id}?entity=pipeline&name={pipeline_name}")
    print(f"View runs: {BASE_URL}/metadata/ide/observation?observationTab=run-history&prFabricId={fabric_id}&prProjectId={project_id}")

def parse_args():
    parser = argparse.ArgumentParser(description="Trigger a Prophecy pipeline")
    parser.add_argument("--fabric-id", type=int, required=True)
    parser.add_argument("--pipeline-name", required=True)
    parser.add_argument("--project-id", required=True)
    parser.add_argument("--branch", default="dev")
    return parser.parse_args()

args = parse_args()

# Trigger the pipeline
trigger_url = f"{BASE_URL}/api/trigger/pipeline"
payload = {
    "fabricId": args.fabric_id,
    "pipelineName": args.pipeline_name,
    "branch": args.branch,
    "projectId": args.project_id
}
response = requests.post(trigger_url, headers=get_headers(), json=payload).json()

print("\nPipeline Triggered:")
print(f"  Success: {response['success']}")
print(f"  Run ID: {response['runId']}")
print(f"  Message: {response['msg']}\n")

# Poll until completion
print("Run Progress:")
while True:
    while True:
    # Get current run status
    status_url = f"{BASE_URL}/api/trigger/pipeline/{response_trigger['runId']}"
    response_status = requests.get(status_url, headers=get_headers()).json()

    # Extract and format status information
    status = response_status['runStatus']
    # Convert UTC timestamp to local timezone
    utc_timestamp = datetime.fromisoformat(response_status['updatedAt'].replace('Z', '+00:00'))
    local_timestamp = utc_timestamp.astimezone()
    formatted_timestamp = local_timestamp.strftime('%Y-%m-%d %H:%M:%S %Z')

    # Print current status with local timestamp
    print(f"    {formatted_timestamp}: {status}")

    # Handle error case
    if status == 'ERROR':
        error = f"\nPipeline failed: {response_status['errorMessage']}"
        print(error)
        print_pipeline_links(args.project_id, args.pipeline_name, args.fabric_id)
        raise Exception(error)
    # Handle successful completion
    elif status != 'RUNNING':
        print("\nPipeline completed successfully!")
        break

    # Wait before checking status again
    time.sleep(0.5)

# Print final links for reference
print_pipeline_links(args.project_id, args.pipeline_name, args.fabric_id)

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

:::tip
You can confirm your fabric and project IDs in Prophecy under **Metadata > Fabrics** and **Metadata > Projects**. When you open the entity's metadata page, you'll find the ID in the URL.
:::

### Authentication errors

If you see an authentication or permissions error:

- Ensure that your Prophecy API token is valid.
- Ensure the user running the job has both Databricks and Prophecy credentials set up (via API token or linked integration).

### Compute or environment failures

If the job never starts:

- Check that **Compute** is set to **Serverless (Autoscaling)** or a valid cluster.
- If your workspace doesn’t support Serverless, choose a specific **existing cluster**.

### Path errors

If Databricks cannot locate the trigger script:

- Make sure the **Path** field matches the full path in the Databricks repository.
- Example:
  `/Users/databricks-dev-e2@simpledatalabs.com/pipeline_trigger.py`

### Output or log clarity

If the job completes but you’re not sure whether the pipeline ran:

- Check the job’s **Output** tab. Successful runs include confirmation such as:

  ```
  Success: True
  Message: Pipeline triggered successfully.
  ```

  You can click the pipeline link in the output to open it directly in Prophecy for verification and debugging.

### Prophecy pipeline failures

If the Databricks job succeeds but the pipeline itself fails:

- Open the Prophecy pipeline linked in [the output log](#view-output).
- Identify the failed gem.
- Review Prophecy validation output for the gem fix the specific component.

### Timeout or network errors

If execution hangs:

- Check Databricks workspace connectivity to Prophecy’s API endpoint.
- Increase the job timeout in Databricks if the trigger script is waiting for confirmation of a long-running Prophecy job.
