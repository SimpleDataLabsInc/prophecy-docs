---
title: PBT on Jenkins
id: prophecy-build-tool-jenkins
description: Example Usage of Prophecy Build Tool on Jenkins
tags:
  - metadata
  - build
  - deploy
  - test
  - cli
  - continuous integration
  - continuous deployment
  - cicd
  - jenkins
---

## [Example GitHub Repo](https://github.com/prophecy-samples/external-cicd-template)

## Context of the Jenkins CI/CD Example

In this section we will explore how to set up separate "testing" and "deploying" Jenkins jobs using declarative pipelines. These jobs will be triggered when items are merged into the following protected branches
`prod`, `qa`, `develop`. Each of these three branches represents a different Databricks Workspace environment. We
want to be able to test and deploy our pipelines into each of these three workspaces during our release workflow.

The release process on GitHub is defined as merging and testing to branches in the following
order: `feature-branch` > `develop` > `qa` > `prod`

![branch_protection_checks_example.png](img%2Fbranch_protection_checks_example.png)
_When PRs are made to a protected branch, the unit tests must pass before the PR can be merged_

Once the PR is merged successfully, we deploy the artifacts and job definitions to Databricks.

:::info

The Git project for this example will soon be made publicly available. To keep as much
of the CICD logic attached to the Git project itself, we will store the Jenkinsfiles
directly in the repo and only store the Jenkins Triggers and Credentials in the Jenkins
server.

This example is currently designed for Pyspark pipelines. To use the same recipe
for Scala pipelines, just make sure `JDK 11` is installed on your Jenkins nodes.

:::

## Preparation

You should have access to:

- a Git repo with an existing Prophecy Project
- a Jenkins Server where you can create new pipelines and credentials

### Jenkins plugins

The following plugins were used for this example:

- [GitHub Pull Request Builder](https://plugins.jenkins.io/ghprb/)
  - for the build/test job
- [GitHub](https://plugins.jenkins.io/github/)
  - for the deploy job

:::caution

These plugins may have published vulnerabilities for older versions of Jenkins.
Please make sure to check with your Jenkins server admin or
security admin before installing any plugins.

:::

### Jenkins Secrets

:::info

You may require more or less secrets depending on the number of workspaces you
are deploying to.

:::

- DEMO_DATABRICKS_HOST
  - the hostname for our Databricks workspace that houses our `qa` and `dev` environments.
- DEMO_DATBRICKS_TOKEN
  - the token for DATABRICKS_HOST
- PROD_DATABRICKS_HOST
  - the hostname for our Databricks workspace that houses our `prod` environment.
- PROD_DATBRICKS_TOKEN
  - the token for PROD_DATABRICKS_HOST

### FABRIC_ID

Find the Fabric IDs for your fabrics by navigating to the Metadata page of that Fabric and observing the URL.

`Metadata` > `Fabrics` > `<your Fabric>`

![finding_fabric_id.png](img%2Ffinding_fabric_id.png)

## Testing pipeline

This pipeline uses PBT to validate the pipelines and run all Prophecy unit tests.

### Testing pipeline - Pipeline Creation

- Create a Jenkins pipeline
  ![jenkins-pipeline-type.png](img%2Fjenkins-pipeline-type.png)
- Configure the GitHub Project URL
- Choose GitHub Pull Request Builder as the trigger type.
- Provide credentials to GitHub
  - creating a fine-grained Personal Acces Token (PAT) in GitHub. The PAT should be
    scoped to yourself or your Organization, have access to the repository containing the Prophecy project, and
    appropriate permissions:
    ![github-pat-permissions.png](img%2Fgithub-pat-permissions.png)
- Choose pipeline Script from SCM
- Provide the path to our Jenkinsfile within the repo

<details>
<summary> Refer to this image for all settings. </summary>

![hello-cicd-declarative-test_configure.png](img%2Fhello-cicd-declarative-test_configure.png)

</details>

### Testing pipeline - Trigger

We use the [GitHub Pull Request Builder](https://plugins.jenkins.io/ghprb/) to trigger any time there is a new pull request or a change
on a pull request (comment or new commit) to our special branches: `develop`, `qa`, `prod`.

By providing GitHub credentials to the GHPRB plugin it will be able to automatically
create webhooks in GitHub.

<details>
<summary> Refer to this image for all settings. </summary>

![hello-cicd-declarative-test_configure-trigger.png](img%2Fhello-cicd-declarative-test_configure-trigger.png)

</details>

### Testing pipeline - Pipeline Code

Create a Groovy Jenkinsfile in the project repository at the below location (relative to root)

```
.jenkins/deploy-declarative.groovy
```

Use the following code as a template, replacing the URLs as necessary:

```groovy
pipeline {
    agent any
    environment {
        PROJECT_PATH = "./hello_project"
        VENV_NAME = ".venv"
    }
    stages {
        stage('checkout') {
            steps {
                git branch: '${ghprbSourceBranch}', credentialsId: 'jenkins-cicd-runner-demo', url: 'git@github.com:prophecy-samples/external-cicd-template.git'
                sh "apt-get install -y python3-venv"
            }
        }
        stage('install pbt') {
            steps {
                sh """#!/bin/bash -xe
                python3 --version
                if [[ ! -d "$VENV_NAME" ]]; then
                    python3 -m venv $VENV_NAME
                fi
                source ./$VENV_NAME/bin/activate
                python3 -m pip install -U pip
                python3 -m pip install -U build pytest wheel pytest-html pyspark prophecy-build-tool
                """
            }
        }
        stage('validate') {
            steps {
                sh """
                . ./$VENV_NAME/bin/activate
                python3 -m pbt validate --path $PROJECT_PATH
                """
            }
        }
        stage('test') {
            steps {
                sh """
                . ./$VENV_NAME/bin/activate
                python3 -m pbt test --path $PROJECT_PATH
                """
            }
        }
    }
}
```

### Testing pipeline - Explanation of Stages

The pipeline performs the following actions in order:

1. ('checkout') SCM checkout of the Prophecy project from Git
   - Since we are using the GHRPB plugin to trigger this pipeline, it will checkout the code
     the source branch that triggered the PR with the special provided environment variable
     `${ghprbSourceBranch}`.
2. ('install pbt') Install PBT and its dependencies to our Jenkins worker node
3. ('valiadate') Use PBT to validate the pipelines do not have any syntactical errors.
4. ('test') Use PBT to run unit tests defined in the Prophecy pipelines

:::info

Each invocation of `sh` in the Jenkins pipeline runs in its own shell context. For this reason we
source the venv containing the `pbt` tool at the beginning of each `sh` command.

:::

## Deploy pipeline

This pipeline uses PBT to deploy the Prophecy pipelines to their appropriate fabrics.

### Deploy pipeline - Pipeline Creation

- Create a Jenkins Pipeline
  ![jenkins-pipeline-type.png](img%2Fjenkins-pipeline-type.png)
- Choose "GitHub hook for GITScm polling" as the trigger.
- Choose "Pipeline from SCM" with our GitHub repo as the repository
- Choose the branches to trigger on (`develop`, `qa`, `prod`)
- Point the "Script path" [to our Jenkinsfile](#deploy-pipeline---pipeline-code) containing the deploy logic

<details>
<summary> Refer to this image for all settings. </summary>

![hello-cicd-declarative-deploy_configure.png](img%2Fhello-cicd-declarative-deploy_configure.png)

</details>

### Deploy Pipeline - Trigger

Set up a simple webhook trigger for this job inside of GitHub.

- Navigate to `Settings > Webhooks > Add Webhook`
- Create a new webhook like this:
  ![github-push-webhook-config.png](img%2Fgithub-push-webhook-config.png)

### Deploy Pipeline - Pipeline Code

Create a Groovy Jenkinsfile in the project repository at the below location (relative to root)

```
.jenkins/test-declarative.groovy
```

Use the following code as a template, replacing the fabric IDs and URLs as necessary:

```groovy
def DEFAULT_FABRIC = "1174"
def fabricPerBranch = [
        prod: "4004",
        qa: "4005",
        develop: DEFAULT_FABRIC
]

pipeline {
    agent any
    environment {
        DATABRICKS_HOST =  credentials("${env.GIT_BRANCH == "prod" ? "DEMO_PROD_DATABRICKS_HOST" : "DEMO_DATABRICKS_HOST"}")
        DATABRICKS_TOKEN = credentials("${env.GIT_BRANCH == "prod" ? "DEMO_PROD_DATABRICKS_TOKEN" : "DEMO_DATABRICKS_TOKEN"}")

        PROJECT_PATH = "./hello_project"
        VENV_NAME = ".venv"
        FABRIC_ID = fabricPerBranch.getOrDefault("${env.GIT_BRANCH}", DEFAULT_FABRIC)
    }
    stages {
        stage('prepare system') {
            steps {
                sh "apt-get install -y python3-venv"
            }
        }
        stage('install pbt') {
            steps {
                sh """#!/bin/bash -xe
                python3 --version
                if [[ ! -d "$VENV_NAME" ]]; then
                    python3 -m venv $VENV_NAME
                fi
                source ./$VENV_NAME/bin/activate
                python3 -m pip install -U pip
                python3 -m pip install -U build pytest wheel pytest-html pyspark prophecy-build-tool
                """
            }
        }
        stage('deploy') {
            steps {
                sh """
                . ./$VENV_NAME/bin/activate
                python3 -m pbt deploy --fabric-ids $FABRIC_ID --path $PROJECT_PATH
                """
            }
        }
    }
}
```

### Deploy Pipeline - Explanation of Pipeline

1. ('environment' block) - Choose which Prophecy fabric / Databricks Workspace to deploy jobs to.

:::caution

The DATABRICKS_HOST and DATABRICKS_TOKEN env variables must match the configuration of the fabric we are attempting to deploy.

:::

2. ('prepare system') - Ensure python3 is available on worker nodes. You can skip this if your Jenkins nodes already have `python3-venv` installed.
3. ('install pbt') - Ensure PBT and its dependencies are installed
4. ('deploy') - use PBT to deploy the Databricks jobs for our chosen fabric
   - Builds all the pipelines present in the project and generates a .jar/.whl artifact for each pipeline
   - Uploads the pipeline .jar/.whl artifacts for each of the deployed jobs (next step)
   - Creates or Updates the Databricks jobs based on `databricks-job.json` files for the Prophecy Project (only those that use `$FABRIC_ID`)
