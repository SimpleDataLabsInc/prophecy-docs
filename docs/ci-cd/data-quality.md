---
title: Data Quality
draft: true
id: data-quality
description: Data Quality
tags:
  - spark
  - development
  - functions
  - expressions
---

Data quality refers to the accuracy, relevance, completeness, and consistency of data. In today's data-driven world, the quality of data is paramount to making informed decisions. Poor quality data can lead to incorrect decisions, which can have a significant impact on businesses and organizations.

There are several factors that affect data quality. These include data entry errors, data duplication, missing data, inconsistent data, and outdated data. These issues can arise from human error, system errors, or technical issues such as data integration problems.
To ensure data quality, it is important to establish a data governance framework. This framework includes policies, procedures, and standards that ensure data is accurate, complete, and consistent.

In Prophecy, you, as a user, can now easily set **Expectations** on your data such as uniqueness, range, and more. You can then schedule these **expectations** to run at fixed **Schedules**, and receive alerts whenever any mismatch occurs, empowering you to maintain the quality of your data.

## Expectations

Expectations are the measures that you can set on your dataset to ensure data quality. These measures can check for duplication, missing data, inconsistencies, and more.

### How to set expectations on your dataset

To set expectations in Prophecy, click on the "Expectations" tab in the dataset view. From there, you can choose from a variety of expectation types, such as "No Duplicates," "Range Check," and "Not null." and many more.

### How to enable and schedule the Expectations

Once expectations are added, users can enable them and release their project to start running them on their data.

:::info

Expectations should be enabled and project needs to be released via Prophecy, to be able to Run the Expectations.

:::

### Data Observability view

In the Data Observability tab, users can monitor their expectations as well as job runs. This page should be monitored closely for all scheduled expectations and jobs, as users would be able to see past runs, filter out failed runs/quality incidents, and filter by project/timeline, among other features.
