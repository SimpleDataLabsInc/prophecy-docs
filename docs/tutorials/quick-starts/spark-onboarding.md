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

Follow the orange dot in the product to know where to click.

You can automatically go through steps by clicking in the product.

You can skip to see the end model by clicking **Skip**.

## Get started

1. Click **Onboarding**.
1. Wait until your Spark cluster is attached. We provide a default [fabric](docs/concepts/fabrics/fabrics.md) (execution environment) for this onboarding project.

## Orders dataset

1. Open orders
1. Add **+ New Dataset**.
1. Name dataset.
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
