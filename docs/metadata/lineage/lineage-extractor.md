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

## Python command

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

### Prerequisite

- A Prophecy project that is currently hosted in a GitHub repository

### Set up environment variables and secrets

The lineage extractor requires environment variables `PROPHECY_URL` and `PROPHECY_PAT` to be set for complete functionality.

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

### Run the lineage extractor

We’re now ready to run the lineage extractor on the Prophecy project.

To run the extractor, use the following example with your own environment variables:

:::note

You only need to provide SMTP credentials if you plan to pass the `--send-email` argument.

:::

```
export PROPHECY_URL=https://app.prophecy.io
export PROPHECY_PAT=${{ secrets.PROPHECY_PAT }}

export SMTP_HOST=smtp.gmail.com
export SMTP_PORT=587
export SMTP_USERNAME=${{ secrets.SMTP_USERNAME }}
export SMTP_PASSWORD=${{ secrets.SMTP_PASSWORD }}
export RECEIVER_EMAIL=ashish@prophecy.io

python -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo --send-email --branch dev
```

- Create a .YML file in the project repository at the below location (relative to root):

  ```
  .github/workflows/prophecy_lineage_extractor.yml
  ```

- Add the below contents with your own environment variables to `prophecy_lineage_extractor.yml`:

  <details>
  <summary>On the default branch</summary>

  ```
  name: Run Prophecy Lineage extractor on main

  on:
    push:
      branches:
        - main  # Trigger on merge to the main branch
      paths:
        - 'datasets/**'
        - 'pipelines/**'
        - 'pbt_project.yml'
        - '.github/workflows/prophecy_lineage_extractor.yml'

  permissions:
    contents: write

  jobs:
    extract-and-mail-prophecy-lineage:
      runs-on: ubuntu-latest
      env:
        OUTPUT_DIR: "output"
      steps:
        - uses: actions/checkout@v3
        - name: Set up Python
          uses: actions/setup-python@v4
          with:
            python-version: '3.9'  # Adjust Python version as needed

        - name: Install Package from PyPI
          run: |
            pip install --no-cache-dir prophecy-lineage-extractor

        - name: Extract and Send Prophecy Lineage
          env:
            PROPHECY_URL: "https://app.prophecy.io"
            MONITOR_TIME_ENV: ${{ vars.MONITOR_TIME_ENV }}
            PROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}
            SMTP_HOST: "smtp.gmail.com"
            SMTP_PORT: "587"
            SMTP_USERNAME: ${{ secrets.SMTP_USERNAME }}
            SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}
            RECEIVER_EMAIL: "ashish@prophecy.io"
          run: |
            python -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo  --send-email --output-dir $OUTPUT_DIR

        - name: Commit file to output directory
          env:
             GIT_COMMIT: ${{ vars.GIT_COMMIT }} # whether to commit output file to github
          run: |
            # set this in secret to enable git commits
            echo "Output Directory: '$OUTPUT_DIR'"
            if [[ $GIT_COMMIT == "1" ]]; then
                git config --global user.name 'pateash'
                git config --global user.email 'ashishpatel0720@gmail.com'
                echo "Commiting enabled, adding output file"
                git add $OUTPUT_DIR/*
                echo "========================================"
                git commit -m "[Github Action: main]: Adding excel lineage report"
                echo "========================================"
                echo "Pushing Changes to git"
                git push
            else
                # simple version are created manually from code edits.
                echo "Commiting to git is not enabled"
            fi
  ```

  </details>

  <details>
  <summary> On a custom branch</summary>

  ```
  name: Run Prophecy Lineage extractor on dev

  on:
    push:
      branches:
        - dev  # Trigger on merge to the dev branch
      paths:
        - 'datasets/**'
        - 'pipelines/**'
        - 'pbt_project.yml'
        - '.github/workflows/prophecy_lineage_extractor_dev.yml'

  permissions:
    contents: write

  jobs:
    extract-and-mail-prophecy-lineage:
      runs-on: ubuntu-latest
      env:
        OUTPUT_DIR: "output_dev"
      steps:
        - uses: actions/checkout@v3
        - name: Set up Python
          uses: actions/setup-python@v4
          with:
            python-version: '3.9'  # Adjust Python version as needed

        - name: Install Package from PyPI
          run: |
            pip install --no-cache-dir prophecy-lineage-extractor

        - name: Extract and Send Prophecy Lineage
          env:
            PROPHECY_URL: "https://app.prophecy.io"
            MONITOR_TIME_ENV: ${{ vars.MONITOR_TIME_ENV }}
            PROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}
            SMTP_HOST: "smtp.gmail.com"
            SMTP_PORT: "587"
            SMTP_USERNAME: ${{ secrets.SMTP_USERNAME }}
            SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}
            RECEIVER_EMAIL: "ashish@prophecy.io"
          run: |
            python -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo  --send-email --output-dir $OUTPUT_DIR --branch dev

        - name: Commit file to output directory
          env:
             GIT_COMMIT: ${{ vars.GIT_COMMIT }}  # Reference the GitHub variable here
          run: |
            # set this in secret to enable git commits
            echo "output dir '$OUTPUT_DIR'"
            if [[ $GIT_COMMIT == "1" ]]; then
                git config --global user.name 'pateash'
                git config --global user.email 'ashishpatel0720@gmail.com'
                echo "Commiting enabled, adding output file"
                git add $OUTPUT_DIR/*
                echo "========================================"
                git commit -m "[Github Action: dev]: Adding excel lineage report"
                echo "========================================"
                echo "Pushing Changes to git"
                git push
            else
                # simple version are created manually from code edits.
                echo "Commiting to git is not enabled"
            fi
  ```

  </details>

## Output example

The lineage extractor output is in the form of an XLSX file.

![Lineage extractor output](./img/prophecy-lineage-report-for-pipeline.png)
