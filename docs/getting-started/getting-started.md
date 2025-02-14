---
title: Getting started
id: getting-started
description: Getting started with Prophecy
tags: []
---

import { Card, CardContainer } from "@site/src/components/card";

To get started with Prophecy, you must first understand _how_ you are going to use Prophecy. Will you try to extract business insights from the data, or are you more focused on ensuring that data is available and reliable? Are you identifying data trends, or are you monitoring data quality? Do you want to optimize the computation of data pipelines, or do you want to build pipelines that prepare data for reporting?

Based on these answers, you may choose to get started with data analysis, or instead get started with data engineering.

## Quick starts

```mdx-code-block
<CardContainer>
  <Card title="Data Analysis Quick Start" to="./quick-starts">
    Try building a pipeline that leverages SQL to
    prepare some data for analysis—no coding necessary.
  </Card>
  <Card title="Engineering Quick Start | Spark" to="./quick-starts">
    Develop your first data pipeline and review the generated Spark code.
  </Card>
    <Card title="Engineering Quick Start | SQL" to="./quick-starts">
    Develop your first data pipeline and review the generated SQL code.
  </Card>
</CardContainer>
<br />
```

## Tutorials

```mdx-code-block
<CardContainer>
  <Card
    title="Spark with Databricks"
    to="./tutorials/spark-with-databricks"
  >
    Learn about and try developing pipelines in Spark.
  </Card>
  <Card
    title="SQL with Databricks"
    to="./tutorials/sql-with-databricks"
  >
    Learn about and try developing models with Databricks SQL.
  </Card>
  <Card
    title="SQL with Snowflake"
    to="./tutorials/sql-with-snowflake"
  >
    Learn about and try developing models with Snowflake.
  </Card>
</CardContainer>
<br />
```

## Deep dive

```mdx-code-block
<CardContainer>
  <Card title="Analyst Pipeline Development" to="../analysts/development/">
    Ingest data from common sources, prepare data using visual transformations, and schedule with the click of a button.
  </Card>
  <Card title="Engineering Pipeline Development" to="../Spark/">
    Create pipelines using Git workflows for CI/CD, external orchestration for scheduling, and Spark execution engines for processing power.
  </Card>
  <Card title="Model Development" to="../SQL/">
    Develop models using Git workflows for CI/CD, external orchestration for scheduling, and SQL with dbt for data processing.
  </Card>
</CardContainer>
<br />
```
