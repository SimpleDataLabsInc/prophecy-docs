---
sidebar_position: 1
id: April_2024
description: Release notes for April
title: April 2024
tags:
  - release notes
  - changelog
  - march
---

## 3.3.4 (April 12,2024)

- Prophecy Python libs version: 1.8.15
- Prophecy Scala libs version: 7.1.85-1

### Minor Improvements {#MinorImprovements334}

- **Streamlined Expression Suggestions**: Enhancing the Copilot feature, we now automatically suggest expressions when users add a new column in the Gem. These suggestions are tailored to the target column name and can be accepted with a simple press of the Tab button.
- **Improved Filtering UX for Problem and Runtime Logs**: To enhance the debugging experience in pipelines, we've refined the user interface for logging. This includes the addition of search, filter, sort, and download options.

## 3.3.3 (April 1,2024)

- Prophecy Python libs version: 1.8.13
- Prophecy Scala libs version: 7.1.82

### Features {#Features333}

#### Prophecy Libs as First class Project Dependency

Prophecy Libs is a Prophecy-provided library designed to enhance your Pipelines. These libraries provide essential features such as interims, monitoring, and secret management while maintaining clean and concise Pipeline code. When executing your Pipelines, Prophecy Libs need to be installed on your clusters.
In our latest release, we’ve made Prophecy Libs a Project Dependency configurable by the user. This gives you control over when to update dependencies in your Pipelines and on long-running clusters.

#### Secrets in Pipeline Config

Users can now create Pipeline configurations of type Secrets. These configurations can be utilized within their Gems. This flexibility allows users to manage username/password changes across different environments by creating distinct config instances. With this, even when working with various Fabrics, users can continue using the same Gem and Pipeline.

### Minor Improvements {#MinorImprovements333}

- **Code Generation Improvements**: We’ve fine-tuned the code generation process for Spark Pipelines, ensuring top-notch quality. You might notice some minor uncommitted changes when you revisit your Pipeline Code.
- **Low Code SQL Improvements**: We’ve revamped the UI for Port schema in SQL Gems, enhancing the user experience for modifying and managing Input/Output Ports. Additionally, our Copilot fix-it feature now helps users rectify expression errors interactively.
- **Airflow Improvements**: While building Jobs interactively in Airflow, users can now utilize the Trigger DAG run operator to test unreleased DAGs.
- **Git Improvements**: Git Merge screens now allow merging to branches other than the main branch. Plus, if you’re rolling back on the main branch, you’ll be prompted to create a new branch for the rollback.

:::info
Please be aware that when you next open your Projects for editing, you may notice uncommitted changes due to this update.
:::
