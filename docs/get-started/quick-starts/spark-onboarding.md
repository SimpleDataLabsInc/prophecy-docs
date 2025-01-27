---
title: Create a Spark pipeline
id: spark-onboarding
description: Follow along in the product to make your first Spark pipeline
tags:
  - Spark
  - quick start
  - onboarding
  - pipelines
---

To get started with Prophecy, you can use the in-product walkthrough for a SQL model or Spark pipeline. This page will describe the **Spark** onboarding option. If you have completed this walkthrough, you can always return to it again.

:::info

The in-product walkthrough is designed to familiarize you with the visual canvas. To understand an entire Project workflow, including connecting to execution environments and deploying pipelines, try one of our [Deep Dive] tutorials.

## Get started

1. Click **Onboarding**.
1. Wait until your Spark cluster is attached. We provide a default [fabric](docs/get-started/concepts/fabrics/fabrics.md) (execution environment) for this onboarding project.

## Follow the steps

In this onboarding quick start, follow the orange dot in the product interface to click through the tutorial.

You can automatically go through steps by clicking **Auto-configure the Gem**. You can also select **Skip** to complete the entire model design.

## Summary

## Orders dataset

1. Open the **Orders** Source gem.
1. Click on **+ New Dataset**.
1. Name the new dataset.
1. Choose csv format.
1. Next
1. Click on the correct data location `dbfs:/Prophecy/onboarding/84c5e71f6dc236ee6530ead6d18208d4/OrdersDatasetInput.csv`
1. Next
1. Infer schema and review the column information and metadata.
1. Next
1. **Load** sample data
1. Create dataset

## Customers dataset

1. Open customers
1. Add **+ New Dataset**.
1. Name dataset.
1. Choose csv format.
1. Next
1. Click on the correct data location `dbfs:/Prophecy/onboarding/84c5e71f6dc236ee6530ead6d18208d4/CustomersDatasetInput.csv`
1. Next
1. Infer schema and review the column information and metadata.
1. Next
1. **Load** sample data
1. Create dataset

## Join

1. Connect input datasets to join gem
1. Define join condition `in0.customer_id=in1.customer_id`
1. expressions tab: add customerid, amount, first name, last name, account_open_date (orders already there because of the join condition)

## Reformat

1. order_id, customer_id, amount to expressions
