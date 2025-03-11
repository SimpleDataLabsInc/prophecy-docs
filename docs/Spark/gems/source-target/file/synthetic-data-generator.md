---
title: Data Generator
id: data-generator
description: Don't have the right data? Create some!
tags:
  - synthetic
  - random
  - fake
  - data
  - generator
---

import Requirements from "../../\_gem-requirements.mdx";

<h3><span class="badge">Spark Gem</span></h3>

<Requirements
  packagename="ProphecySparkBasicsPython"
  packageversion="0.2.36"
  scalalib="8.5.0"
  pythonlib="1.9.24"
  packageversion122="Not Supported"
  packageversion143="Not Supported"
  packageversion154="Supported 0.2.36+"
/>

It is crucial to generate mock data when you build data pipelines to simulate real-world scenarios for testing, validating, and optimizing pipeline performance before you use production data. This helps ensure that the pipeline handles various data formats, structures, and edge cases effectively, which minimizes potential issues in a live environment.

You can create a wide range of synthetic data using any column name and an array of data types. For example, you can generate the following browser history data.

![img](../../img/synth_0_datasample.png)

The following sections teach you how to generate your own mock data using the Data Generator gem.

## Cluster Requirements

Create a fabric and configure the [Job Size](/docs/administration/Spark-fabrics/databricks/databricks.md), or login to an existing Spark cluster UI.

To create a fabric and configure the job size in the Spark Cluster UI:

1. Login to your Databricks account.
1. Verify the Databricks Runtime uses Python version >= 3.8.

   For example, [Databricks Runtime 12.2 LTS](https://docs.databricks.com/en/release-notes/runtime/12.2lts.html) uses Python 3.9.19. If you are using Databricks Runtime 12.2+, the Python version meets this requirement.

1. Create a new environment variable called `SPARK_VERSION` with value `3.3`.
1. Confirm and restart the Spark cluster.
   ![requirements](../../img/synth_0_1_requirements.png)

## Prophecy Requirements

Open a Prophecy project and upgrade the `ProphecySparkBasicsPython` Dependency to `0.2.34` or later.

:::note
Connecting a Prophecy project to a Spark cluster with a different dependency version will prompt a cluster restart.
:::

![img](../../img/synth_0_2_proph_reqiuirements.png)

:::caution Caution
If you use two Prophecy projects with the same Spark cluster, Spark restarts the cluster when each project attaches to the cluster, unless the `ProphecySparkBasicsPython` and `ProphecyLibsPython` versions match across both projects.

_The Fix:_ Upgrade all your Prophecy projects to the same `ProphecySparkBasicsPython` and `ProphecyLibsPython` versions, or use separate Spark clusters.
:::

## Create The Gem

1. Create a new dataset.

   ![img](../../img/synth_1_new_dataset.png)

2. Select Data Generator as the file type.

   ![img](../../img/synth_2_type.png)

   :::note
   We will [specify the storage location](#store-the-data) in a separate gem.  
   :::

### Properties: Specify The Data Structure

Prophecy offers a selection of providers including integers, booleans, and elements from a list. You can also provide the same information as a JSON schema.

## Providers

| Data Provider             | Description                                                                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Random Name               | Generates random names. Select `Full Name`, `First Name`, or `Last Name` as the sub-types.                                                                                                                                                                                   |
| Random Address            | Generates random addresses.                                                                                                                                                                                                                                                  |
| Random Email              | Generates random emails.                                                                                                                                                                                                                                                     |
| Random Phone Number       | Generates random phone numbers based on specified or default pattern. <br/>For example, you can specify the pattern for a phone number as (###) ###-####.                                                                                                                    |
| Random String UUID        | Generates random UUID values as a string.                                                                                                                                                                                                                                    |
| Random Boolean Values     | Generates random boolean values.                                                                                                                                                                                                                                             |
| Random Integer Numbers    | Generates random integers within the range from the `Start Value` to the`End Value` you specify.                                                                                                                                                                             |
| Random Elements From List | Generates random values from the list of values you specify.                                                                                                                                                                                                                 |
| Random Date               | Generates random dates within the range you specify.                                                                                                                                                                                                                         |
| Random DateTime           | Generates random datetime values within the range you specify.                                                                                                                                                                                                               |
| Random Foreign Key Values | Randomly picks values from the foreign key column you specify. Select another table to act as the reference table and provide the location (e.g., `catalog`,`database`, or `table`). Select any column from the reference table to designate as the `Reference Column Name`. |

## Common properties

| Name                       | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| Column Name                | Custom name for the output column.                                                        |
| Data Type                  | Data type of the output column.                                                           |
| Null Percentage (Optional) | The percent of values to populate as null in the generated column based on the row count. |

![img](../../img/synth_3_properties.png)

Generate column using a sequence of integers (left). Generate another column by referencing an existing catalog table (right). Randomly select elements of the foreign key from that table.  
![img](../../img/synth_7_seq_or_foreign.png)

### Infer the Schema

To see the changes to the columns based on your Properties tab configuration, infer the schema in the Schema tab.

### Preview the data

This gem returns a `DataFrame` with randomly generated values. Preview the first few records to confirm the schema is correct. Then, save the gem.

## Store the data

By default, the Data Generator gem does not save the newly generated data. To save the data, store the data in a Target gem.

1. Create a Target gem.

   ![img](../../img/synth_4_new_target.png)

1. Connect your Data Generator Source gem to your Target gem.

   ![img](../../img/synth_5_connect_target.png)

1. Configure the write mode for the Target gem.

   This is **very important** because there is a **new random seed** each time you run the Data Generator gem.

   ![img](../../img/synth_6_write_mode.png)

:::caution
The Data Generator only generates the data. If you want to store the data, connect the output to a target gem and configure its properties. The generated data is new for each execution.
:::

:::info
To see if Prophecy supports this gem in the Unity Catalog Shared Spark Clusters, see [UC Shared Cluster Support](docs/administration/Spark-fabrics/databricks/UCShared.md).
:::
