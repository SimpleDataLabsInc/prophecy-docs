---
title: Template Hub
id: template-hub
slug: /analysts/template-hub
description: Learn about the sample pipelines in Template Hub.
tags: [template-hub]
---

The Package Hub also includes another set of resources: the Template Hub. The Template Hub contains Prophecy-built pipelines that cater to specific industry use cases. You can use these pipelines to learn how to run data processing flows and configure gems in a familiar context.

:::note
The Template Hub is only available for users who joined Prophecy after version 4.1.0. Additionally, the Template Hub only provides example **SQL** pipelines.
:::

## Use a pipeline template

At the top of the Package Hub homepage, select the **Template Hub** tab. As you browse through the available pipelines, keep in mind that each template contains several tables, and at least one pipeline.

There are two ways to use a pipeline template.

- **Read-only mode**: If you click on a pipeline from the Template Hub, this opens the pipeline in read-only mode. You can explore all project configurations and run any pipeline in the project, but no changes you make will be saved.

- **Edit mode**: If you click **Edit** on a pipeline in the Template Hub, a copy of the project is created in your [personal team](/administration/teams-users/teams-users). This project is editable because it is completely separate from the original pipeline template. You can always open the original from the Template Hub to reference a working pipeline.

:::note
Prophecy provides a Databricks compute environment for pipeline templates. This means that you don't need your own fabric to run these pipelines—you'll use the Prophecy-provided fabric. This fabric will be available automatically in the pipeline template project.
:::

## List of pipeline templates

The following lists the SQL pipelines available in each category.

### Transportation

---

#### `l2_gold_airport_delay_metrics`

Computes the airport-level delay metrics using flight data from the past 30 days. It aggregates departure and arrival delays, cancellation rates, and overall on-time performance for both origin and destination airports.

**Gems used**: [Table](/analysts/source-target), [Join](/analysts/join), [Filter](/analysts/filter), [Aggregate](/analysts/aggregate), [OrderBy](/analysts/order-by)

### Healthcare

---

#### `L0_raw_clinical_trials`

Cleans up clinical trial data by filtering out malformed records, transforming nested data into tabular format, and removing leading and trailing whitespaces from column values.

**Gems used**: [Table](/analysts/source-target), [Filter](/analysts/filter), [FlattenSchema](/analysts/flatten-schema), [DataCleansing](/analysts/data-cleansing)

---

#### `L1_hipaa_compliance`

Makes the patient ID, age, and ZIP code HIPAA compliant.

**Gems used**: [Table](/analysts/source-target), [Reformat](/analysts/reformat)

---

#### `L2_clinical_trial_gap_analysis`

Performs a gap analysis to determine the cost of each diagnosis without clinical trials.

**Gems used**: [Table](/analysts/source-target), [Filter](/analysts/filter), [Aggregate](/analysts/aggregate), [OrderBy](/analysts/order-by), [DataCleansing](/analysts/data-cleansing), [Join](/analysts/join)

---

#### `L2_gold_daily_billing_report`

Determines the daily total billing based on patients per provider.

**Gems used**: [Table](/analysts/source-target), [Reformat](/analysts/reformat), [Filter](/analysts/filter), [Aggregate](/analysts/aggregate)

### Manufacturing

---

#### `L2_defect_rate_analysis`

Analyzes production job defect rates by calculating the defect rate per job for each production line and month, then ranks these rates into percentiles to identify how jobs compare within the same line and time period.

**Gems used**: [Table](/analysts/source-target), [Reformat](/analysts/reformat), [WindowFunction](/analysts/window)

---

#### `L2_part_processing_metrics`

Calculates the average, median, minimum, and maximum for manufacturing parts by measuring the hours taken to start and complete events for each part number.

**Gems used**: [Table](/analysts/source-target), [Aggregate](/analysts/aggregate), [Join](/analysts/join), [Reformat](/analysts/reformat)

### Finance

---

#### `L2_customer_financial_profile`

Creates a detailed customer financial profile while masking sensitive information by combining raw data from various source tables and summarizing each customer’s account activity, loan details, credit score history, and transaction spending.

**Gems used**: [Table](/analysts/source-target), [Reformat](/analysts/reformat), [OrderBy](/analysts/order-by), [Aggregate](/analysts/aggregate), [Join](/analysts/join)

### Retail

---

#### `L2_gold_campaign_analysis`

Calculates campaign-level return on investment (ROI), summarizes total earnings and costs per product, and computes ROI as the percentage gain relative to marketing spend.

**Gems used**: [Table](/analysts/source-target), [Aggregate](/analysts/aggregate), [Join](/analysts/join), [Filter](/analysts/filter), [FlattenSchema](/analysts/flatten-schema), [Reformat](/analysts/reformat)

### Energy

---

#### `l2_monthly_energy_report`

Calculates the percentile rank of each energy asset based on its monthly energy production and benchmarks asset performance across dimensions such as state, region, and asset type.

**Gems used**: [Table](/analysts/source-target), [Reformat](/analysts/reformat), [Aggregate](/analysts/aggregate), [WindowFunction](/analysts/window), [Join](/analysts/join), [Reformat](/analysts/reformat), [Union](/analysts/union), [OrderBy](/analysts/order-by)
