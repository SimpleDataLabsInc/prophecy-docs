---
title: Prophecy Build Tool (pbt) on Jenkins
id: prophecy-build-tool-jenkins
description: Example Usage of Prophecy Build Tool on Jenkins
sidebar_position: 5
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

## Context of the Jenkins CI/CD Example

In this section we will explore how to set up two Jenkins Jobs with declarative pipelines; one for testing
and one for deploying. These Jobs will be triggered when items are merged into the following protected branches
`prod`, `qa`, `develop`.

Each of these three branches has different Jobs assigned to it in the Prophecy project. Therefore, when we call the
deploy Job for each of these branches, only the Jobs that match our Fabric ID will be deployed.

The release structure is as follows: `feature-branch` > `develop` > `qa` > `prod`

![branch_protection_checks_example.png](img%2Fbranch_protection_checks_example.png)
_When PRs are made to a protected branch, the unit tests must pass before the PR can be merged_

Once the PR is merged successfully, we deploy the artifacts and Job definitions to Databricks.

## Example

## Preparation

### Jenkins plugins

You can use any plugins you want, but we used the following for this example:

- [Github Pull Request Builder](https://plugins.jenkins.io/ghprb/)
  - for the build/test Job
- [Github](https://plugins.jenkins.io/github/)
  - for the deploy Job

### Jenkins Secrets

- DATABRICKS_HOST
  - the hostname for your Databricks workspace. This should match what you used to configure the Fabric of
    any Jobs you are trying to deploy. You may need more than one HOST if you are deploying to multiple
    workspaces.
- DATBRICKS_TOKEN
  - the token for DATABRICKS_HOST
-

### FABRIC_ID

Find the Fabric ID for your Fabric by navigating to the Metadata page of that Fabric and observing the URL.

`Metadata` > `Fabrics` > `<your Fabric>`

![finding_fabric_id.png](img%2Ffinding_fabric_id.png)
