---
title: Spark onboarding
id: spark-onboarding
description: Follow along in the product to make your first Spark pipeline
tags:
  - Spark
  - quick start
  - onboarding
  - pipelines
---

To get started with Prophecy, you can use the in-product walkthrough for a SQL model or Spark pipeline. This page will describe the **Spark** onboarding option. If you have completed this walkthrough, you can always return to it again.

## Get started

1. Open the Prophecy homepage.
1. Click **Onboarding**.
1. Select **Low-code Spark**.

This opens up the visual pipeline canvas! As you begin, notice that Prophecy automatically attaches to a Spark cluster. We provide a default [fabric](docs/getting-started/concepts/fabrics/fabrics.md) (execution environment) for this onboarding project.

## Follow the steps

In this onboarding quick start, follow the orange dot in the product interface to click through the tutorial.

You can automatically go through steps by clicking **Auto-connect Gems** or **Auto-configure the Gem**. You can also select **Skip** to complete the entire model design.

At a high level, this walkthrough helps you:

1. Create multiple new CSV datasets using Source gems.
1. Connect input datasets and define join conditions using a Join gem.
1. Add a new column using a SQL expression in a Reformat gem.
1. Use common aggregations like **count** and **sum** in an Aggregate gem.
1. Save your transformed data using a Target gem.
1. Understand the underlying Python code that is used when running the pipeline.
1. Run a pipeline and review interim datasets.

## What's next?

The in-product walkthrough has helped familiarize you with the visual canvas. Next, you can create your own project and do more with your data!

To understand an entire project workflow, including connecting to execution environments and deploying pipelines, try one of our getting started [tutorials](docs/getting-started/tutorials/tutorials.md).
