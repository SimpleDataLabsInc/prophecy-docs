---
title: Data Generator
id: data-generator
description: Learn how to create synthetic data
tags:
  - synthetic
  - random
  - fake
  - data
  - generator
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.2.32+"
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="15.4+"
  livy=""
/>

Synthetic data helps you test, validate, and optimize your pipelines performance before you use production data. This ensures that your pipeline can handle various data formats, structures, and edge cases effectively, which minimizes potential issues in a live environment.

You can create a wide range of mock data using any column name and an array of data types. For example, you can generate the following browser history data:

![img](../../img/synth_0_datasample.png)

The following sections teach you how to generate your own synthetic data using the Source gem.

## Cluster requirements

Create a fabric and configure the [Job Size](/docs/administration/Spark-fabrics/databricks/databricks.md), or login to an existing Spark cluster UI.

### Spark cluster UI

To create a fabric and configure the job size in the Spark Cluster UI:

1. Login to your Databricks account.
1. Verify your Databricks Runtime uses Python version >= 3.8.

   For example, [Databricks Runtime 12.2 LTS](https://docs.databricks.com/en/release-notes/runtime/12.2lts.html) uses Python 3.9.19. If you are using Databricks Runtime 12.2+, the Python version meets this requirement.

## Prophecy requirements

Open a Prophecy project and upgrade the `ProphecySparkBasicsPython` Dependency to `0.2.32` or later.

:::note
Connecting a Prophecy project to a Spark cluster with a different dependency version prompts the Spark cluster to restart.
:::

![img](../../img/synth_0_2_proph_reqiuirements.png)

:::caution Caution
If you use two Prophecy projects with the same Spark cluster, Spark restarts the cluster when each project attaches to the cluster, unless the `ProphecySparkBasicsPython` and `ProphecyLibsPython` versions match across both projects.

_Solution:_ Upgrade all your Prophecy projects to the same `ProphecySparkBasicsPython` and `ProphecyLibsPython` versions, or use separate Spark clusters.
:::

## Create the gem

1. Create a new dataset.

   ![img](../../img/synth_1_new_dataset.png)

2. Select Data Generator as the file type.

   ![img](../../img/synth_2_type.png)

   :::note
   We will [specify the storage location](#store-the-data) in a separate gem.  
   :::

### Properties: Specify the data structure

The Source gem requires the following properties.

| Property name              | Description                                                                                              | Default       |
| -------------------------- | -------------------------------------------------------------------------------------------------------- | ------------- |
| Provider                   | Type of random data to generate. For a list of the possible data providers, see [Providers](#providers). | `Random Name` |
| Column Name                | Name for the output column.                                                                              | None          |
| Data Type                  | Data type of the output column.                                                                          | `String`      |
| Null Percentage (Optional) | Percent of values to populate as null in the generated column based on the row count.                    | None          |

![img](../../img/synth_3_properties.png)

## Providers

Prophecy offers the following data providers.

| Data Provider             | Description                                                                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Random Name               | Generates random names. Select `Full Name`, `First Name`, or `Last Name` as the sub-types.                                                                                                                                                                                   |
| Random Address            | Generates random addresses.                                                                                                                                                                                                                                                  |
| Random Email              | Generates random emails.                                                                                                                                                                                                                                                     |
| Random Phone Number       | Generates random phone numbers based on the pattern you specify or the default pattern. <br/>For example, you can specify the pattern for a phone number as (###) ###-####.                                                                                                  |
| Random String UUID        | Generates random UUID values as a string.                                                                                                                                                                                                                                    |
| Random Boolean Values     | Generates random boolean values.                                                                                                                                                                                                                                             |
| Random Integer Numbers    | Generates random integers within the range from the `Start Value` to the`End Value` you specify.                                                                                                                                                                             |
| Random Elements From List | Generates random values from the list of values you specify.                                                                                                                                                                                                                 |
| Random Date               | Generates random dates within the range you specify.                                                                                                                                                                                                                         |
| Random DateTime           | Generates random datetime values within the range you specify.                                                                                                                                                                                                               |
| Random Foreign Key Values | Randomly picks values from the foreign key column you specify. <br/>Select another table to act as the reference table and provide the location (e.g. `catalog` or `database`). <br/>Select any column from the reference table to designate as the `Reference Column Name`. |

### Infer the schema

To see your data based on the Properties tab configuration, click `Infer Schema` in the **Schema** tab.

### Preview the data

The Source gem returns a `DataFrame` with randomly generated values. Preview the first few records to confirm the schema is correct. Then, save the gem.

## Store the data

By default, the Source gem does not save the newly generated data. To save the data, store the data in a Target gem:

1. Create a Target gem.

   ![img](../../img/synth_4_new_target.png)

1. Connect your Source gem to your Target gem.

   ![img](../../img/synth_5_connect_target.png)

1. Configure the `Write Mode` property for the Target gem.

   This is **very important** because there is a **new random seed** each time you run the Source gem.

   ![img](../../img/synth_6_write_mode.png)

:::info
To see if Prophecy supports this gem in the Unity Catalog Shared Spark Clusters, see [UC Shared Cluster Support](docs/administration/Spark-fabrics/databricks/UCShared.md).
:::
