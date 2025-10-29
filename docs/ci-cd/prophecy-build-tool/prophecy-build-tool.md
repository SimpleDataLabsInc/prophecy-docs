---
title: Prophecy Build Tool (PBT)
id: prophecy-build-tool
slug: /engineers/prophecy-build-tool
description: Prophecy Build tool
tags:
  - metadata
  - build
  - deploy
  - test
  - cli
  - continuous integration
  - continuous deployment
---

:::edition Enterprise
Available for [Enterprise Edition](/getting-started/editions/) only.
:::

The **Prophecy Build Tool (PBT)** is a command-line utility for building, testing, validating, and deploying Prophecy-generated projects. PBT lets you integrate Prophecy pipelines seamlessly into existing CI/CD systems (such as GitHub Actions, Jenkins) and orchestration platforms (such as Databricks Workflows).

## Features (v1.1.0)

- Build pipelines (all or specify ones to build) in Prophecy projects (Scala and Python)
- Unit test pipelines in Prophecy projects (Scala and Python)
- Deploy jobs with built pipelines on Databricks
- Deploying jobs filtered with fabric ids on Databricks
- Integrate with CI/CD tools like GitHub Actions
- Verify the project structure of Prophecy projects
- Deploying pipeline Configurations

## Requirements

- Python >=3.7 (Recommended 3.9.13)
- pip
- `pyspark` (Recommended 3.3.0)

## Installation

To install PBT, run:

```
pip3 install prophecy-build-tool
```

## Integration examples

[GitHub Actions](pbt-github-actions.md)

[Jenkins](pbt-jenkins.md)

## Usage

```shell
Usage: pbt [OPTIONS] COMMAND [ARGS]...

Options:
  --help  Show this message and exit.

Commands:
  build     Build Prophecy pipelines
  deploy    Deploy pipelines and jobs
  test      Run unit tests
  validate  Validate pipelines for diagnostics

```

## Configuration

Before using PBT with Databricks, set the following environment variables:

```shell
export DATABRICKS_HOST="https://example_databricks_host.cloud.databricks.com"
export DATABRICKS_TOKEN="exampledatabrickstoken"
```

These variables define the Databricks workspace and credentials used for building and deploying.

## Build Pipelines

The `build` command compiles all or specific pipelines within a Prophecy project.

```shell
pbt build --path /path/to/your/prophecy_project/
```

### Build options

| Option                  | Description                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `--path TEXT`           | **Required.** Path to the directory containing the `pbt_project.yml` file.                               |
| `--pipelines TEXT`      | Comma-separated list of pipelines to build.                                                              |
| `--ignore-build-errors` | Continue even if parse errors occur; logs record details.                                                |
| `--ignore-parse-errors` | Ignores any parsing errors in pipelines and returns success (`EXIT_CODE = 0`); refer to logs for details |
| `--help`                | Show this message and exit                                                                               |

To build only specific pipelines:

```shell
pbt build --pipelines customers_orders,join_agg_sort --path /path/to/your/prophecy_project/
```

To continue despite build or parsing errors:

```shell
pbt build --path /path/to/your/prophecy_project/ --ignore-build-errors --ignore-parse-errors
```

If any pipeline fails to build, PBT exits with code 1 unless error-skipping flags are used.

## Deploy pipelines and jobs

The `deploy` command builds and deploys Prophecy pipelines and jobs to your Databricks workspace.

```bash
pbt deploy --path /path/to/your/prophecy_project/ --release-version 1.0 --project-id 10
```

PBT supports the `--release-version` and `--project-id` parameters, used to replace placeholders in your job definition file (`databricks-job.json`).

These values determine the DBFS path where artifacts are uploaded.

Tip: Use the project’s Prophecy ID (from its URL) and a unique release version for each deployment.

### Sample deploy output

```shell
Prophecy Build Tool v1.0.4.1

Found 1 job: daily
Found 1 pipeline: customers_orders (python)

Building 1 pipeline 🚰
  Building pipeline pipelines/customers_orders [1/1]
✅ Build complete!

Deploying 1 job ⏱
  Deploying job jobs/daily [1/1]
  Uploading customers_orders-1.0-py3-none-any.whl to dbfs:/FileStore/prophecy/artifacts/...
  Updating existing job: daily
✅ Deployment completed successfully!
```

### Deploy dependent projects

Use `--dependent-projects-path` to include dependent Prophecy projects located in subdirectories.

```bash
pbt deploy --path /path/to/your/prophecy_project/ --release-version 1.0 --project-id 10 --dependent-projects-path /path/to/dependent/prophecy/projects
```

### Deploy by Fabric ID

Use `--fabric-ids` to deploy jobs associated with specific Fabric IDs (helpful for multi-workspace environments).

```bash
pbt deploy --fabric-ids 647,1527 --path /path/to/your/prophecy_project/
```

You can find Fabric IDs in the Prophecy UI by visiting the Metadata page of a Fabric and checking its URL.

### Skip Builds

To deploy previously built pipelines without rebuilding:

```bash
pbt deploy --skip-builds --path /path/to/your/prophecy_project/
```

### Deploy specific jobs

By default, all jobs are deployed. To deploy selected jobs, use `--job-ids`.

```bash
pbt deploy --path /path/to/your/prophecy_project/ --job-ids "TestJob1,TestJob2"
```

PBT automatically identifies and builds only the pipelines required by those jobs.

### Deploy Options Summary

| Option                           | Description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `--path TEXT`                    | **Required.** Path containing the `pbt_project.yml` file. |
| `--dependent-projects-path TEXT` | Path containing dependent Prophecy projects.              |
| `--release-version TEXT`         | Release version tag for this deployment.                  |
| `--project-id TEXT`              | Prophecy project ID (used to replace placeholders).       |
| `--prophecy-url TEXT`            | Prophecy base URL for deployment.                         |
| `--fabric-ids TEXT`              | Comma-separated Fabric IDs to filter jobs.                |
| `--skip-builds`                  | Skip building pipelines.                                  |
| `--job-ids TEXT`                 | Comma-separated list of Job IDs to deploy.                |
| `--help`                         | Show help and exit.                                       |

## Test pipelines

PBT supports unit testing of pipelines within a Prophecy project.
Tests run with the default configuration under `configs/resources/config`.

```bash
pbt test --path /path/to/your/prophecy_project/
```

### Test options

| Option                       | Description                                                    |
| ---------------------------- | -------------------------------------------------------------- |
| `--path TEXT`                | **Required.** Path containing the `pbt_project.yml` file.      |
| `--driver-library-path TEXT` | Path to JARs for `prophecy-python-libs` or other dependencies. |
| `--pipelines TEXT`           | Comma-separated list of pipelines to test.                     |
| `--help`                     | Show help and exit.                                            |

If `--driver-library-path` is omitted, dependencies are fetched automatically from Maven Central.

### Sample test output

```shell
Prophecy Build Tool v1.0.1

Found 1 job: daily
Found 1 pipeline: customers_orders (python)

Unit Testing pipeline pipelines/customers_orders [1/1]

============================= test session starts ==============================
platform darwin -- Python 3.8.9, pytest-7.1.2
collected 1 item

test/TestSuite.py::CleanupTest::test_unit_test_0 PASSED [100%]
============================== 1 passed in 17.4s ===============================

✅ Unit test for pipeline: customers_orders succeeded.
```

## Validate pipelines

Validation checks all pipelines in a project for warnings and errors, similar to Prophecy’s in-IDE diagnostics.
This helps ensure pipelines are production-ready before deployment.

```bash
pbt validate --path /path/to/your/prophecy_project/
```

### Validate options

| Option                       | Description                                               |
| ---------------------------- | --------------------------------------------------------- |
| `--path TEXT`                | **Required.** Path containing the `pbt_project.yml` file. |
| `--treat-warnings-as-errors` | Treat warnings as errors during validation.               |
| `--help`                     | Show help and exit.                                       |

### Sample output

```shell
Prophecy Build Tool v1.0.3.4

Project name: HelloWorld
Found 1 job: default_schedule
Found 4 pipelines: customers_orders, report_top_customers, join_agg_sort, farmers-markets-irs

Validating 4 pipelines
  Validating pipeline pipelines/customers_orders [1/4]
  Pipeline validated: customers_orders
  ...
✅ All pipelines validated successfully.
```

## What's next

For more details on continuous integration and orchestration, explore:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
