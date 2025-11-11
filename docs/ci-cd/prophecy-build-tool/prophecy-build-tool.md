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

The **Prophecy Build Tool (PBT)** is a command-line utility for building, testing, validating, and deploying Prophecy-generated projects. The Prophecy Build Tool lets you integrate Prophecy pipelines into existing CI/CD systems (such as GitHub Actions or Jenkins) and orchestration platforms (such as Databricks Workflows).

You can use the PBT to run the same set of tasks described in [Project release and deployment](/engineers/deployment) from the command line or in a CI/CD script.

## Features

Using the Prophecy Build tool, you can:

- Build pipelines (all or a subset) in Prophecy projects (Scala and Python).
- Unit test pipelines in Prophecy projects (Scala and Python).
- Deploy jobs with built pipelines on Databricks.
- Deploy jobs filtered by fabric ids on Databricks.
- Integrate with CI/CD tools like GitHub Actions.
- Verify the project structure of Prophecy projects.
- Deploy pipeline configurations.
- Add git tags to a deployment.
- Set versions for PySpark projects.

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
  --help  Show help.

Commands:
  build     	Build Prophecy pipelines
  build-v2      Same as build but with additional options
  deploy    	Deploy pipelines and jobs
  deploy-v2     Same as deploy but with additional options
  test      	Run unit tests
  validate  	Validate pipelines for diagnostics
  versioning	Add versions to PySpark pipelines
  tag           Create a Git tag for the version in `pbt_project.yml`

```

## Configuration

Before using PBT with Databricks, set the following environment variables:

```shell
export DATABRICKS_HOST="https://example_databricks_host.cloud.databricks.com"
export DATABRICKS_TOKEN="exampledatabrickstoken"
```

These variables define the Databricks workspace and credentials used for building and deploying.

## Build pipelines

The `build` command compiles all or specific pipelines within a Prophecy project.

```shell
pbt build --path /path/to/your/prophecy_project/
```

You can also use a v2 version of the command, which adds an `--add-pom-python` option.

```shell
pbt build-v2 --path /path/to/your/prophecy_project/
```

### Build options

| Option                  | Description                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| `--path TEXT`           | **Required.** Path to the directory containing the `pbt_project.yml` file.                                |
| `--pipelines TEXT`      | Comma-separated list of pipelines to build.                                                               |
| `--ignore-build-errors` | Continue even if parse errors occur; logs record details.                                                 |
| `--ignore-parse-errors` | Ignores any parsing errors in pipelines and returns success (`EXIT_CODE = 0`); refer to logs for details. |
| `--add-pom-python`      | Available with `--build-v2`. Adds `pom.xml` and `MAVEN_COORDINATES` files to PySpark builds.              |

To build only specific pipelines:

```shell
pbt build --pipelines customers_orders,join_agg_sort --path /path/to/your/prophecy_project/
```

To continue despite build or parsing errors:

```shell
pbt build --path /path/to/your/prophecy_project/ --ignore-build-errors --ignore-parse-errors
```

If any pipeline fails to build, the Build tool exits with code 1 unless error-skipping flags are used.

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

### Skip builds

To deploy previously built pipelines without rebuilding:

```bash
pbt deploy --skip-builds --path /path/to/your/prophecy_project/
```

### Deploy specific jobs

By default, all jobs are deployed. To deploy selected jobs, use `--job-ids`.

```bash
pbt deploy --path /path/to/your/prophecy_project/ --job-ids "TestJob1,TestJob2"
```

The Prophecy Build Tool automatically identifies and builds only the pipelines required by those jobs.

You can also use a v2 version of the command, which adds several options described in the table below.

```bash
pbt deploy-v2 --path /path/to/your/prophecy_project/ --job-ids "TestJob1,TestJob2"
```

### Deploy options summary

| Option                           | Description                                                                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path TEXT`                    | **Required.** Path containing the `pbt_project.yml` file.                                                                                     |
| `--dependent-projects-path TEXT` | Path containing dependent Prophecy projects.                                                                                                  |
| `--release-version TEXT`         | Release version tag for this deployment.                                                                                                      |
| `--project-id TEXT`              | In `deploy`, Prophecy project ID (used to replace placeholders). In `deploy-v2`, path to the directory containing the `pbt_project.yml` file. |
| `--prophecy-url TEXT`            | Prophecy base URL for deployment. Removed in `build-v2`.                                                                                      |
| `--fabric-ids TEXT`              | Comma-separated Fabric IDs to filter jobs.                                                                                                    |
| `--skip-builds`                  | Skip building pipelines.                                                                                                                      |
| `--job-ids TEXT`                 | Comma-separated list of Job IDs to deploy.                                                                                                    |
| `--conf-dir TEXT`                | Available with `--deploy-v2`. Path to configuration file folders.                                                                             |
| `--release-tag TEXT`             | Available with `--deploy-v2`. Specify a release tag.                                                                                          |
| `--skip-pipeline-deploy`         | Available with `--deploy-v2`. Skip pipeline deployment and deploy only job definitions.                                                       |
| `--migrate`                      | Available with `--deploy-v2`. Migrates a v1 project to the v2 format.                                                                         |
| `--artifactory TEXT`             | Available with `--deploy-v2`. Allows use of PyPI/Maven packages instead of DBFS files for deployment.                                         |
| `--skip-artifactory-upload`      | Available with `--deploy-v2`. Skips uploading to private artifactory (must be used with `--artifactory`).                                     |

## Test pipelines

The Prophecy Build Tool supports unit testing of pipelines within a Prophecy project.
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

## Applying versions to PySpark projects

PySpark projects often rely on specific versions of Spark, Python libraries, and data connectors.

Versioning the project (via `pbt_project.yml` or `setup.py`) ensures compatibility between your code and these dependencies, helping avoid runtime errors when pipelines are deployed to different environments (local, Databricks).

The Prophecy Build Tool lets you set various options for versioning as follows.

### Versioning options

| Option                                             | Description                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path <PATH>`                                    | Path to the directory containing the `pbt_project.yml` file **[required]**                                                                                                                                                                                                                         |
| `--repo-path <PATH>`                               | Path to the repository root. If left blank, it will use `--path`.                                                                                                                                                                                                                                  |
| `--bump [major\|minor\|patch\|build\|prerelease]`  | Bumps one of the semantic version numbers for the project and all pipelines based on the current value. Only works if existing versions follow [Semantic Versioning](https://semver.org/).                                                                                                         |
| `--set TEXT`                                       | Explicitly set the exact version.                                                                                                                                                                                                                                                                  |
| `--force`, `--spike`                               | Bypass errors if the version set is lower than the base branch.                                                                                                                                                                                                                                    |
| `--sync`                                           | Ensure all files are set to the same version defined in `pbt_project.yml`. _(Implies `--force`.)_                                                                                                                                                                                                  |
| `--set-suffix TEXT`                                | Set a suffix string (e.g., `-SNAPSHOT` or `-rc.4`). If this is not a valid semVer string, an error will be thrown.                                                                                                                                                                                 |
| `--check-sync`                                     | Check to see if versions are synced. Exit code `0` = success, `1` = failure.                                                                                                                                                                                                                       |
| `--compare-to-target`, `--compare <TARGET_BRANCH>` | Checks if the current branch has a greater version number than the `<TARGET_BRANCH>` provided. Returns `0` (true) or `1` (false). Also performs a `--sync` check. <br/>**Note:** If `--bump` is also provided, it compares versions and applies the bump strategy if the current version is lower. |
| `--make-unique`                                    | Makes a version unique for feature branches by adding build-metadata and prerelease identifiers. <br/> _Format:_ `MAJOR.MINOR.PATCH-PRERELEASE+BUILDMETADATA` <br/> _Examples:_ <br/> Python → `3.3.0 → 3.3.0-dev0+sha.j0239ruf0ew` <br/> Scala → `3.3.0 → 3.3.0-SNAPSHOT+sha.j0239ruf0ew`         |
| `--pbt-only`                                       | Apply version operation to `pbt_project.yml` file only. Applicable with `--compare`, `--make-unique`, `--bump`, `--set`, or `--set-suffix`.                                                                                                                                                        |
| `--help`                                           | Show help for this command.                                                                                                                                                                                                                                                                        |

## Tagging builds

The `pbt tag` command creates a Git tag for the version listed in `pbt_project.yml`. This tag marks a specific point in your project’s history so you can track or redeploy that version later. By default, the tag name includes the branch (for example, `main/1.4.0`) and is pushed to the remote automatically. You can change or remove the branch name with `--branch`, create a custom tag with `--custom`, or skip pushing with `--no-push`.

### Tag options

| Option             | Description                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path TEXT`      | Path to the directory containing the `pbt_project.yml` file **[required]**                                                                                  |
| `--repo-path TEXT` | Path to the repository root. If left blank, it will use `--path`.                                                                                           |
| `--no-push`        | By default, the tag will be pushed to the origin after it is created. Use this flag to skip pushing the tag.                                                |
| `--branch TEXT`    | Normally, the tag is prefixed with the branch name: `<branch_name>/<version>`. This option overrides `<branch_name>`. Provide `""` to omit the branch name. |
| `--custom TEXT`    | Explicitly set the exact tag using a string. Ignores other options.                                                                                         |
| `--help`           | Show help for this command.                                                                                                                                 |

## Sample output

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

## Quick reference

| Command                   | Description                                                   | Common Options                                                                                                                  |
| ------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **`pbt build`**           | Build all or selected pipelines within a Prophecy project.    | `--path` (required) <br/> `--pipelines` _(comma-separated)_ <br/> `--ignore-build-errors` <br/> `--ignore-parse-errors`         |
| **`pbt test`**            | Run unit tests for pipelines using the default configuration. | `--path` (required) <br/> `--pipelines` _(comma-separated)_ <br/> `--driver-library-path` _(optional)_                          |
| **`pbt validate`**        | Validate pipelines for warnings or errors before deployment.  | `--path` (required) <br/> `--treat-warnings-as-errors`                                                                          |
| **`pbt deploy`**          | Build and deploy pipelines and jobs to Databricks.            | `--path` (required) <br/> `--release-version` <br/> `--project-id` <br/> `--fabric-ids` <br/> `--job-ids` <br/> `--skip-builds` |
| **pbt version**           | Set versions for PySpark projects                             |                                                                                                                                 |
| **Environment Variables** | Required for Databricks connections.                          | `DATABRICKS_HOST` <br/> `DATABRICKS_TOKEN`                                                                                      |

### Example workflow

```bash
# 1. Build project pipelines
pbt build --path /path/to/project

# 2. Run tests
pbt test --path /path/to/project

# 3. Validate before deployment
pbt validate --path /path/to/project

# 4. Deploy
pbt deploy --path /path/to/project --release-version 1.0 --project-id 123
```

## What's next

For more details on continuous integration and orchestration, explore:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
