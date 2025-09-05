---
title: Canvas annotations
id: canvas-annotations
slug: /analysts/canvas-annotations
description: Leave comments on your project canvas to annotate pipelines
tags:
  - pipeline
  - annotation
---

In many cases, pipelines can become quite large to accommodate complex transformation requirements. Because of this, Prophecy lets you **annotate** your pipelines in the canvas to contextualize them.

## Add an annotation

To add an annotation to a pipeline:

1. Open a pipeline in a project.
1. Click on the annotate button in the bottom left corner of the canvas.
1. Drag the text box to your desired location in the canvas.
1. Add your own text or image to the annotation.
1. Format the text using the formatting toolbar.

## Example

Let’s say you have a pipeline that ingests customer data, cleans it, and then applies transformations before loading it into a database. To help your team understand the different stages, you can add annotations like this:

- Add an annotation near the input source stating: `Ingesting raw CSV files from S3 bucket`
- Annotate above the transformation gems with: `Removing duplicates and normalizing column names`
- Mark next to a Macro gem: `Using imported dbt Pivot macro`
- Add an annotation near the last node saying: `Writing transformed data to Databricks catalog`

This helps your team quickly grasp what each part of the pipeline does without digging into the details of every transformation.
