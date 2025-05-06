---
title: Lineage extractor
id: lineage-extractor
slug: /engineers/lineage-extractor
description: Prophecy lineage extractor on GitHub Actions
tags:
  - metadata
  - lineage
  - extractor
  - github actions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Prophecy lineage extractor is a Python tool that retrieves and exports lineage information from Prophecy projects and pipelines. It supports project, pipeline, and branch-level lineage extraction, with optional features like emailing reports.

You can run the extractor manually or integrate it into a CI workflow to automate report generation. Automating lineage extraction helps teams:

- Keep lineage reports up to date with every commit or scheduled run.
- Share lineage insights across teams through version control or email.
- Monitor upstream column changes using recursive lineage extraction.

This page covers how to run the extractor via command line and how to automate it using GitHub Actions or GitLab CI.

## Command

Use the following Python command to export the lineage of a specific pipeline.

```
python -m prophecy_lineage_extractor \
  --project-id <PROJECT_ID> \
  --pipeline-id <PIPELINE_ID> \
  --output-dir <OUTPUT_DIRECTORY> \
  [--branch <BRANCH_NAME>] \
  [--send-email] \
  [--recursive-extract true|false] \
  [--run-for-all true|false]

```

| Argument              | Type   | Required | Description                                                                                                                                    |
| --------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `--project-id`        | `str`  | Yes      | ID of the Prophecy project. Find this in your project url.<br/> Example: `app.prophecy.io/metadata/ide/lineage/40314` where `40314` is the ID. |
| `--pipeline-id`       | `str`  | Yes      | ID(s) of the pipeline inside the project. This can be comma separated list of pipelines.<br/>Use the format `ProjectID/Pipeline_Name`.         |
| `--output-dir`        | `str`  | Yes      | Directory in the repository to save the lineage report.                                                                                        |
| `--branch`            | `str`  | No       | Branch to extract lineage from. The default branch in Prophecy is generally `main`.                                                            |
| `--send-email`        | `flag` | No       | Send the report via email. Requires additional variables (see below).                                                                          |
| `--run_for_all`       | `flag` | No       | Set to `true` to generate a project-level report for all pipelines. Set to `false` to false generate the lineage for a single pipeline only.   |
| `--recursive-extract` | `flag` | No       | Set to `true` to recursively trace upstream column changes. Set to `false` to disable this behavior.                                           |

## Integration with GitHub Actions or GitLab CI

This section walks you through automating the extraction of lineage reports from your Prophecy pipelines using a CI workflow in GitHub Actions or GitLab CI. You'll set up a script that pulls lineage data, generates an Excel report, and optionally sends it by email or commits it back to your repository.

### Prerequisites

- A Prophecy project hosted in an external GitHub or GitLab repository.
- Access to the repository and permissions to set up CI/CD pipelines.
- A Prophecy Personal Access Token (PAT). Learn more about access tokens in the [user settings](/administration/teams-users/settings#access-token) documentation.
- (Optional) To enable email reports, you must have SMTP credentials.

### Set environment variables and secrets

To configure lineage extraction behavior related to authentication, email delivery, and output settings, you’ll need to provide several inputs. While you can hardcode these values directly into your CI workflow YAML, it's strongly recommended to store them as environment variables or secrets. This approach keeps sensitive data like access tokens and SMTP credentials secure, avoids leaking secrets into version control, and makes it easier to update values across environments without modifying the workflow file.

<Tabs groupId="ci-tool">
  <TabItem value="github" label="GitHub">

1. Go to your repository’s **Settings > Secrets and variables > Actions**.
1. Add the listed variables under **Secrets** and **Variables** tabs.

  </TabItem>
  <TabItem value="gitlab" label="GitLab">

1. Go to your repository’s **Settings > CI/CD > Variables**.
1. Add each as a variable and mark secrets appropriately.

  </TabItem>
</Tabs>

| Variable/Secret    | Purpose                                                      |
| ------------------ | ------------------------------------------------------------ |
| `PROPHECY_PAT`     | Prophecy Personal Access Token                               |
| `SMTP_USERNAME`    | Email username for sending reports                           |
| `SMTP_PASSWORD`    | Email password or app token                                  |
| `MONITOR_TIME_ENV` | Time window to monitor in minutes (default is `150` minutes) |
| `GIT_COMMIT`       | Set to `1` to enable committing output                       |
| `OUTPUT_DIR`       | Output directory for lineage files                           |

### Set up workflow configuration

To automate lineage extraction and optionally email or commit the resulting reports, you’ll need to set up a CI workflow in your repository. The configuration below provides templates for both GitHub Actions and GitLab CI, which install the extractor, run it with your parameters, and optionally commit the results. These templates assume you've already configured the required environment variables and secrets. Customize them with your specific project and pipeline details before running.

<Tabs groupId="ci-tool">
  <TabItem value="github" label="GitHub Actions">

In your GitHub repository:

1. Select **Add file > Create new file**.
1. Name the file `.github/workflows/prophecy_lineage_extractor.yml`.
1. Paste the following YAML into the file.

```yaml
name: Run Prophecy Lineage extractor on main

on:
  push:
    branches:
      - main
    paths:
      - "datasets/**"
      - "pipelines/**"
      - "pbt_project.yml"
      - ".github/workflows/prophecy_lineage_extractor.yml"

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
          python-version: "3.9"

      - name: Install Package
        run: |
          pip install --no-cache-dir prophecy-lineage-extractor

      - name: Extract and Send Prophecy Lineage
        env:
          PROPHECY_URL: "https://<custom>.prophecy.io"
          MONITOR_TIME_ENV: ${{ vars.MONITOR_TIME_ENV }}
          PROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}
          SMTP_HOST: "smtp.gmail.com"
          SMTP_PORT: "587"
          SMTP_USERNAME: ${{ secrets.SMTP_USERNAME }}
          SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}
          RECEIVER_EMAIL: "<myRecipient@company.com>"
        run: |
          python -m prophecy_lineage_extractor --project-id <YOUR_PROJECT_ID> --pipeline-id <YOUR_PROJECT_ID>/pipelines/<YOUR_PIPELINE_NAME> --send-email --output-dir $OUTPUT_DIR --branch main

      - name: Commit file to output directory
        env:
          GIT_COMMIT: ${{ vars.GIT_COMMIT }}
        run: |
          if [[ $GIT_COMMIT == "1" ]]; then
              git config --global user.name '<YOUR_GIT_USERNAME>'
              git config --global user.email '<YOUR_GIT_EMAIL>'
              git add $OUTPUT_DIR/*
              git commit -m "[Github Action: main]: Adding Excel lineage report"
              git push
          else
              echo "Committing to Git is not enabled"
```

  </TabItem>
  <TabItem value="gitlab" label="GitLab CI">

In your GitLab repository:

1. Create a file named `.gitlab-ci.yml` at the root level.
1. Paste the following YAML.

```yaml
stages:
  - extract

variables:
  GIT_COMMIT: "1"
  OUTPUT_DIR: "output_dev"

extract_and_mail:
  stage: extract
  image: python:3.9
  script:
    - pip install --no-cache-dir prophecy-lineage-extractor
    - |
      export PROPHECY_URL="$PROPHECY_URL"
      export PROPHECY_PAT="$PROPHECY_PAT"
      export SMTP_USERNAME="$SMTP_USERNAME"
      export SMTP_PASSWORD="$SMTP_PASSWORD"
      export SMTP_HOST="smtp.gmail.com"
      export SMTP_PORT="587"
      export RECEIVER_EMAIL="<myRecipient@company.com>"
      export MONITOR_TIME_ENV="50"
    - |
      BRANCH="dev"
      python -m prophecy_lineage_extractor \
        --project-id <YOUR_PROJECT_ID> \
        --pipeline-id <YOUR_PROJECT_ID>/pipelines/<YOUR_PIPELINE_NAME> \
        --send-email \
        --output-dir $OUTPUT_DIR \
        --branch $BRANCH
    - |
      if [ "$GIT_COMMIT" == "1" ]; then
        git config --global user.name '<YOUR_GIT_USERNAME>'
        git config --global user.email '<YOUR_GIT_EMAIL>'
        git add $OUTPUT_DIR/*
        git commit -m "[GitLab CI - $BRANCH] Adding Excel lineage report"
        git remote add gitlab_origin https://oauth2:$ACCESS_TOKEN@gitlab.com/your-repo-path.git
        git push gitlab_origin HEAD:$BRANCH -o ci.skip
      else
        echo "Committing to Git is not enabled"
  only:
    refs:
      - dev
```

  </TabItem>
</Tabs>

Make sure you modify the template with your own details:

- Replace `PROPHECY_URL` with your Prophecy URL.
- Update with your ProjectID and PipelineID.
- Modify the receiver email.
- Set your global Git username and email.

### Verify lineage file creation

After a successful run, you should see a directory matching `OUTPUT_DIR` in your repo containing Excel lineage files like `pipeline_name_lineage.xlsx`. This XLSX file will show detailed lineage information about your pipeline.

![Lineage extractor output](./img/prophecy-lineage-report-for-pipeline.png)

### Troubleshooting

If your workflow doesn't run as expected:

- Check for error messages in [GitHub workflow run logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/using-workflow-run-logs) or [GitLab job logs](https://docs.gitlab.com/ci/jobs/job_logs/).
- Verify that you have set all environment variables and secrets correctly.
- Ensure your Prophecy access token is valid and has the necessary permissions.
- Confirm that the Project ID and Pipeline ID are correct in the workflow file.
