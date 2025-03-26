---
title: App creation
id: app-creation
slug: /analysts/create-business-applications
draft: true
description: Build applications make pipelines accessible
tags: []
---

Business apps are built inside Prophecy projects and are published to the App Directory.

Throughout this guide, we'll configure a business app that runs on the following pipeline:

<!-- ![App pipeline](img/app-pipeline.png) -->

This pipeline aggregates daily sales data by default, but users may want to see different aggregations (monthly or yearly). We'll configure the business app to let users:

- Define the location of their source data
- Set different aggregations
- Rename columns with user-defined suffixes

## Configure the pipeline

To build an application with the mentioned functionality, you first need to set up [pipeline parameters](docs/analysts/development/pipelines/pipeline-params.md) for your pipeline. Pipeline parameters are configurations or variables that you can use throughout the pipeline to dynamically populate fields.

1. Open the pipeline that will be used for the app.
1. Click **Parameters** from the project header.
1. Select **+ Add Parameter**.
1. Name the parameter `SourceLocation`.
1. Name the parameter `AggregationLevel`.
1. Make the default value `order-date`. This is the name of the column that records the order date.
1. Name the parameter `ColSuffix`.
1.

## Add app

You can create an app directly from a project.

1. Click **+ Add to Project > App** in the project browser.
1. Fill in the required fields.
   - App name: The name of the application.
   - Description: A description of the application.
   - Pipeline name: The pipeline that will run according to the application.
   - Directory path: Where your app code will be stored.
1. Select **Create App**.

## Preview

## Publish

Once you have built your app, you will want to publish it to the App Directory.
