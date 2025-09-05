---
title: Project types
id: project-types
description: Understand project types per persona
tags:
  - projects
  - templates
---

import Mermaid from '@theme/Mermaid';

Choose the right project type for your role and workflow requirements. Your project type determines available features, collaboration models, and integration capabilities.

The project type depends on how you create a new project, based on three key selections:

- **Project language**: SQL, Python, or Scala
- **Git storage model**: Simplified publication flow or standard Git branching
- **Git provider**: Prophecy-managed or external Git repository

Use the following flow chart to view the different project types you can create.

<Mermaid
value={`flowchart LR
A@{ shape: stadium, label: "Create Project" } --> B@{ shape: diamond, label: "Language?" }

    B -->|Python / Scala| C@{ shape: stadium, label: "Platform Engineer Project" }
    B -->|SQL| D@{ shape: diamond, label: "Git Model + Provider?" }

    D -->|"Normal + Any Git"| G@{ shape: stadium, label: "Analytics Engineer Project" }
    D -->|"Simple + External Git"| H@{ shape: stadium, label: "Data Analyst + Platform Engineer Project" }
    D -->|"Simple + Prophecy Git"| I@{ shape: stadium, label: "Data Analyst Project" }

    %% Persona colors (Prophecy brand palette)
    style C fill:#626AE9,stroke:#403FC2,color:#fff,font:inter
    style G fill:#626AE9,stroke:#403FC2,color:#fff
    style H fill:#626AE9,stroke:#403FC2,color:#fff
    style I fill:#626AE9,stroke:#403FC2,color:#fff

    %% Neutral start + decisions
    style A fill:#344054,stroke:#333,color:#fff
    style B fill:#06B6D4,stroke:#0e7490,color:#fff
    style D fill:#06B6D4,stroke:#0e7490,color:#fff

`}
/>

:::tip
Create [templates](docs/administration/project-types/project-creation-template.md) to standardize project configurations for your team.
:::

## Feature matrix

The following tables provide a detailed comparison of capabilities across different project types to help you understand what each type supports.

:::note
The feature matrices below show **Analytics Engineer projects** using models as their primary transformation entity. This reflects the common pattern where analytics engineers work with dbt models on SQL fabrics for pure data transformations. However, analytics engineers can also use pipelines (which uses both SQL and Prophecy Automate) when they need external integrations like API calls, email notifications, or file operations.
:::

### Language

| Feature          | Data Analyst | Data Analyst + Platform Engineer | Analytics Engineer | Platform Engineer |
| ---------------- | ------------ | -------------------------------- | ------------------ | ----------------- |
| Primary language | SQL          | SQL                              | SQL                | Python/Scala      |
| Building blocks  | Pipelines    | Pipelines                        | Models             | Pipelines         |

### Version Control

| Feature            | Data Analyst                                   | Data Analyst + Platform Engineer                                  | Analytics Engineer                             | Platform Engineer                              |
| ------------------ | ---------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| Version control    | [Simple](/analysts/versioning)                 | [Simple](/analysts/versioning) + [External CI/CD](/engineers/git) | [ Normal/Fork](/engineers/git)                 | [ Normal/Fork](/engineers/git)                 |
| Collaboration mode | [Single-player](/analysts/collaboration-modes) | [Single-player](/analysts/collaboration-modes)                    | [Git branching](/engineers/git-best-practices) | [Git branching](/engineers/git-best-practices) |

### Orchestration

| Feature                      | Data Analyst | Data Analyst + Platform Engineer | Analytics Engineer | Platform Engineer |
| ---------------------------- | :----------: | :------------------------------: | :----------------: | :---------------: |
| Prophecy-native scheduling   |      ✔       |                ✔                 |         ❌         |        ❌         |
| External scheduling via APIs |      ✔       |                ✔                 |         ✔          |         ✔         |

### Platform Features

| Feature                                                         | Data Analyst | Data Analyst + Platform Engineer | Analytics Engineer | Platform Engineer |
| --------------------------------------------------------------- | :----------: | :------------------------------: | :----------------: | :---------------: |
| [Prophecy Apps](/analysts/business-applications)                |      ✔       |                ✔                 |         ❌         |        ❌         |
| [Interactive examples](/analysts/gems#interactive-gem-examples) |      ✔       |                ✔                 |         ✔          |        ❌         |
| [AI Agents](/analysts/ai-chat)                                  |      ✔       |                ✔                 |         ✔          |        ❌         |

### Execution & Data

| Feature          | Data Analyst                           | Data Analyst + Platform Engineer       | Analytics Engineer                             | Platform Engineer                                  |
| ---------------- | -------------------------------------- | -------------------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| Fabric type      | [Prophecy](/core/prophecy-fabrics/)    | [Prophecy](/core/prophecy-fabrics/)    | [SQL](/enterprise/fabrics/sql-fabrics/Fabrics) | [Spark](/enterprise/fabrics/Spark-fabrics/Fabrics) |
| Execution engine | SQL Warehouse + <br/>Prophecy Automate | SQL Warehouse + <br/>Prophecy Automate | SQL Warehouse                                  | Spark cluster                                      |
| Data connections | Fabric-level                           | Fabric-level                           | None (in-database only)                        | Gem-level                                          |
