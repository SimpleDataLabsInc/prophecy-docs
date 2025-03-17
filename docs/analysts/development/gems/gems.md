---
title: Gems for SQL projects
id: gems
description: Power your pipelines with gems
tags:
  - gems
  - sql
  - analyst
---

[Gems](/docs/getting-started/concepts/gems.md) are functional units in a pipeline that perform tasks such as reading, transforming, writing, or handling other data operations. When you build pipelines in a SQL project, some gems will be powered by the Prophecy runtime, and some gems will be powered by SQL dbt.

## Categories

| Category          | Description                                                | Execution        |
| ----------------- | ---------------------------------------------------------- | ---------------- |
| **Source/Target** | Read and write data from various data providers.           | Prophecy runtime |
| **Transform**     | Modify, enrich, or reshape data during processing.         | SQL warehouse    |
| **Prepare**       | Clean, structure, and optimize data for analysis.          | SQL warehouse    |
| **Join**          | Merge, split, or link datasets.                            | SQL warehouse    |
| **Parse**         | Interpret structured formats in columns like XML and JSON. | SQL warehouse    |
| **Report**        | Share results through channels such as email or Tableau.   | Prophecy runtime |
| **Subgraph**      | Group gems into reusable components.                       | Depends          |
| **Custom**        | Enhance and extend Prophecy’s functionality.               | Depends          |

## Interactive examples

To test a gem hands-on, you can try the **interactive example** of the gem. If you search for a gem in the project sidebar, you can open the associated **example** and run the pre-configured pipeline!

## Gem configuration

Visual vs code view

## Action menu

- Explain
- Fix
- Label
- Add comment
- Change phase
- Delete
