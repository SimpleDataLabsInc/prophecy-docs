---
title: Template Hub
id: template-hub
slug: /analysts/template-hub
description: Learn about the sample pipelines in Template Hub.
tags: [template-hub]
---

The following lists the pipelines available in each category.

## Transportation

| Pipeline name                 | Gems used                                                                                                                                                     | Description                                                                                                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| l2_gold_airport_delay_metrics | [Table](/analysts/table)<br/> [Join](/analysts/join)<br/> [Filter](/analysts/filter)<br/> [Aggregate](/analysts/aggregate)<br/> [OrderBy](/analysts/order-by) | Computes the airport-level delay metrics using flight data from the past 30 days. It aggregates departure and arrival delays, cancellation rates, and overall on-time performance for both origin and destination airports. |

## Healthcare

| Pipeline name                  | Gems used                                                                                                                                                                                                    | Description                                                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L0_raw_clinical_trials         | [Table](/analysts/table)<br/> [Filter](/analysts/filter)<br/> [FlattenSchema](/analysts/flatten-schema)<br/> [DataCleansing](/analysts/data-cleansing)                                                       | Cleans up clinical trial data by filtering out malformed records, transforms nested data into tabular format, and removed all leading and trailing whitespaces. |
| L1_hipaa_compliance            | [Table](/analysts/table)<br/> [Reformat](/analysts/reformat)                                                                                                                                                 | Makes the patients ID, age, and zipcode HIPAA compliant.                                                                                                        |
| L2_clinical_trial_gap_analysis | [Table](/analysts/table)<br/> [Filter](/analysts/filter)<br/> [Aggregate](/analysts/aggregate)<br/> [OrderBy](/analysts/order-by)<br/> [DataCleansing](/analysts/data-cleansing)<br/> [Join](/analysts/join) | Performs a gap analysis to determine the cost of each diagnosis without clinical trials.                                                                        |
| L2_gold_daily_billing_report   | [Table](/analysts/table)<br/> [Reformat](/analysts/reformat)<br/> [Filter](/analysts/filter)<br/> [Aggregate](/analysts/aggregate)                                                                           | Determine the daily total a provider makes and how many patients they see.                                                                                      |

## Manufacturing

| Pipeline name              | Gems used                                                                                                                      | Description                                                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| L2_defect_rate_analysis    | [Table](/analysts/table)<br/> [Reformat](/analysts/reformat)<br/> [WindowFunction](/analysts/window)                           | Analyzes the production job defect rates by calculating the defect rate per job for each production line and month, then ranks these defect rates into percentiles to help identify how jobs compare within the same line and time period. |
| L2_part_processing_metrics | [Table](/analysts/table)<br/> [Aggregate](/analysts/aggregate)<br/> [Join](/analysts/join)<br/> [Reformat](/analysts/reformat) | Calculates the average, median, minimum and maximum for manufacturing parts by measuring the hours taken to start and complete events for each part number.                                                                                |

## Finance

| Pipeline name                 | Gems used                                                                                                                                                         | Description                                                                                                                                                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L2_customer_financial_profile | [Table](/analysts/table)<br/> [Reformat](/analysts/reformat)<br/> [OrderBy](/analysts/order-by)<br/> [Aggregate](/analysts/aggregate)<br/> [Join](/analysts/join) | Creates a detailed customer financial profile while masking sensitive information by combining raw data from various source tables and summarizing each customer’s account activity, loan details, credit score history and transaction spending. |

## Retail

| Pipeline name             | Gems used                                                                                                                                                                                                     | Description                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L2_gold_campaign_analysis | [Table](/analysts/table)<br/> [Aggregate](/analysts/aggregate)<br/> [Join](/analysts/join)<br/> [Filter](/analysts/filter)<br/> [FlattenSchema](/analysts/flatten-schema)<br/> [Reformat](/analysts/reformat) | Calculates a campaign-level return on investment (ROI), summarizes total earnings and costs per product and computes ROI as the percentage gain relative to the marketing spend. |

## Energy

| Pipeline name            | Gems used                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| l2_monthly_energy_report | [Table](/analysts/table)<br/> [Reformat](/analysts/reformat)<br/> [Aggregate](/analysts/aggregate)<br/> [WindowFunction](/analysts/window)<br/> [Join](/analysts/join)<br/> [Reformat](/analysts/reformat)<br/> [Union](/analysts/union)<br/> [OrderBy](/analysts/order-by) | Calculates the percentile rank of each energy asset based on its monthly energy production and benchmarks asset performance across different asset dimensions such as state, region, assetType. |
