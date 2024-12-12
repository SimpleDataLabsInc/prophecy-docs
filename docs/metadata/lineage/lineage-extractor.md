---
title: Lineage extractor
id: lineage-extractor
description: Prophecy lineage extractor on GitHub Actions
sidebar_position: 4
tags:
  - metadata
  - lineage
  - extractor
  - github actions
---

The Prophecy lineage extractor tool extracts lineage information from Prophecy projects and Pipelines. It allows you to specify a project, Pipeline, and branch, and outputs the extracted lineage to a specified directory. You can also optionally set up email notifications.

## Format

```
python -m prophecy_lineage_extractor --project-id <PROJECT_ID> --pipeline-id <PIPELINE_ID> --output-dir <OUTPUT_DIRECTORY> [--send-email] [--branch <BRANCH_NAME>]
```

### Arguments

| Argument        | Type | Description                                                                                                                                                                                                                                                                                                                      | Required |
| :-------------- | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| `--project-id`  | str  | Prophecy Project ID                                                                                                                                                                                                                                                                                                              | True     |
| `--pipeline-id` | str  | Prophecy Pipeline ID                                                                                                                                                                                                                                                                                                             | True     |
| `--output-dir`  | str  | Output directory inside the project where lineage files will be stored                                                                                                                                                                                                                                                           | True     |
| `--send-email`  | flag | If specified, sends an email with the generated lineage report to the environment variable `RECEIVER_EMAIL`. You must set the following environment variables for this option if passed: <br /><br /> <ul><li>`SMTP_HOST`</li><li>`SMTP_PORT`</li><li>`SMTP_USERNAME`</li><li>`SMTP_PASSWORD`</li><li>`RECEIVER_EMAIL`</li></ul> | False    |
| `--branch`      | str  | Branch to run the lineage extractor on. <br /> The default branch in Prophecy is generally 'main'.                                                                                                                                                                                                                               | True     |

## Integrate with GitHub Actions

The lineage extractor can be integrated with your GitHub Actions. The steps for setting up the lineage extractor with GitHub Actions on your repository containing a Prophecy project are mentioned below.

### Pre-requisite

- A Prophecy project that is currently hosted in a GitHub repository

### Set up environment variables and secrets

The lineage extractor requires environment variables **PROPHECY_URL** and **PROPHECY_PAT** to be set for complete functionality.

Optionally, if you choose to set up email notifications, you must also set secrets for your `SMTP_USERNAME` and `SMTP_PASSWORD`.

These environment variables can be set as secrets inside the GitHub repository of the project. For more information, see [Set up environment variables and secrets](../../deployment/prophecy-build-tool/pbt-github-actions.md#set-up-environment-variables-and-secrets).

The environment variables can also be set within the GitHub actions YML file as follows:

```yaml
env:
PROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}
SMTP_USERNAME: ${{ secrets.SMTP_USERNAME}}
SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}
```

The complete YML file definition is discussed in the next section.

### Set up a GitHub Actions Workflow on every push to prod branch

We’re now ready to setup the lineage extractor on the Prophecy project.

To setup a workflow to run on every push to the `prod` branch automatically:

- Create a .YML file in the project repository at the below location (relative to root)

  ```
  .github/workflows/prophecy_lineage_extractor.yml
  ```

- Add the below contents to **exampleWorkflow.yml**

  ```yaml
  name: Example CI/CD with GitHub actions
  on:
  push:
  branches: - "prod"

  env:
  DATABRICKS_HOST: "https://sample_databricks_url.cloud.databricks.com"
  DATABRICKS_TOKEN: ${{ secrets.PROD_DATABRICKS_TOKEN }}
  # replace with your fabric id:
  FABRIC_ID: "4004"

  jobs:
  build:
  runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Set up JDK 11
          uses: actions/setup-java@v3
          with:
            java-version: "11"
            distribution: "adopt"
        - name: Set up Python 3.9.13
          uses: actions/setup-python@v4
          with:
            python-version: "3.9.13"
        # Install all python dependencies
        # prophecy-libs not included here because prophecy-build-tool takes care of it by reading each pipeline's setup.py
        - name: Install dependencies
          run: |
            python3 -m pip install --upgrade pip
            pip3 install build pytest wheel pytest-html pyspark==3.3.0  prophecy-build-tool
        - name: Run PBT validate
          run: pbt validate --path .
        - name: Run PBT build
          run: pbt build --path .
        - name: Run PBT test
          run: pbt test --path .
        - name: Run PBT deploy
          run: pbt deploy --path . --release-version 1.0 --project-id example_project_id
  ```
