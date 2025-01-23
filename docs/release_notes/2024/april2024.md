---
sidebar_position: 4
id: April_2024
description: Release notes for April
title: April 2024
tags:
  - release notes
  - changelog
  - april
---

## 3.3.5.\* (April 30, 2024)

- Prophecy Python libs version: 1.8.15
- Prophecy Scala libs version: 7.1.93

### Features {#Features335}

#### Parametrized Gems in Spark

Many enterprises use generic pipelines that act like frameworks. These pipelines have the same basic transformation rules but work with files that have different schemas. They generally have different output columns, computed using different expressions.
To help with this, Prophecy now lets you completely parameterize your transformation gems. This means the logic for all the expressions along with output columns can come from a pipeline config. So, you can use one pipeline as a framework and run it with different setups.

#### Copilot Fix It for Spark and SQL expressions

Also, in our last update, we'd enabled Copilot to suggest expressions automatically based on output column names. With this release, we've added a feature called Copilot Fix It. It can fix any errors in your expression logic with just a click of the "Fix with AI" button. It can correct things like syntax mistakes, wrong function calls, or typos.

## 3.3.4.\* (April 12, 2024)

- Prophecy Python libs version: 1.8.15
- Prophecy Scala libs version: 7.1.88

### Minor Improvements {#MinorImprovements334}

- **Streamlined Expression Suggestions**: Enhancing the Copilot feature, we now automatically suggest expressions when users add a new column in the gem. These suggestions are tailored to the target column name and can be accepted with a simple press of the Tab button.
- **Improved Filtering UX for Problem and Runtime Logs**: To enhance the debugging experience in pipelines, we've refined the user interface for logging. This includes the addition of search, filter, sort, and download options.

## 3.3.3.\* (April 1, 2024)

- Prophecy Python libs version: 1.8.13
- Prophecy Scala libs version: 7.1.82

### Features {#Features333}

#### Prophecy Libs as First class Project Dependency

Prophecy Libs is a Prophecy-provided library designed to enhance your pipelines. These libraries provide essential features such as interims, monitoring, and secret management while maintaining clean and concise pipeline code. When executing your pipelines, Prophecy Libs need to be installed on your clusters.
In our latest release, we’ve made Prophecy Libs a Project Dependency configurable by the user. This gives you control over when to update dependencies in your pipelines and on long-running clusters.

#### Secrets in Pipeline Config

Users can now create pipeline configurations of type Secrets. These configurations can be utilized within their gems. This flexibility allows users to manage username/password changes across different environments by creating distinct config instances. With this, even when working with various Fabrics, users can continue using the same gem and pipeline.

### Minor Improvements {#MinorImprovements333}

- **Code Generation Improvements**: We’ve fine-tuned the code generation process for Spark pipelines, ensuring top-notch quality. You might notice some minor uncommitted changes when you revisit your pipeline code.
- **Low Code SQL Improvements**: We’ve revamped the UI for Port schema in SQL gems, enhancing the user experience for modifying and managing Input/Output Ports. Additionally, our Copilot fix-it feature now helps users rectify expression errors interactively.
- **Airflow Improvements**: While building Jobs interactively in Airflow, users can now utilize the Trigger DAG run operator to test unreleased DAGs.
- **Git Improvements**: Git Merge screens now allow merging to branches other than the main branch. Plus, if you’re rolling back on the main branch, you’ll be prompted to create a new branch for the rollback.

:::info
Please be aware that when you next open your Projects for editing, you may notice uncommitted changes due to this update.
:::
