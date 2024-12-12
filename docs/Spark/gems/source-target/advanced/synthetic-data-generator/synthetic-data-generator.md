---
title: Data Generator
id: data-generator
description: Don't have the right data? Create some!
sidebar_position: 1
tags:
  - synthetic
  - random
  - fake
  - data
  - generator
---

<h3><span class="badge">Spark Gem</span></h3>

Generate synthetic data with this special kind of Source Gem.

Generating mock data is crucial when building data Pipelines to simulate real-world scenarios for testing, validating, and optimizing Pipeline performance before using actual production data. It helps ensure the Pipeline handles various data formats, structures, and edge cases effectively, minimizing potential issues in a live environment.

A wide range of synthetic data can be created using any column name and an array of data types. For example, generate browser history data as shown below.

![img](../../../img/synth_0_datasample.png)

Follow the steps below to generate your own mock data using the Data Generator Gem.

## Cluster requirements

Create a Fabric and configure the [Job Size](/docs/Spark/fabrics/databricks.md) as below, or log into an existing Spark cluster UI. Here we use Databricks as an example.

1. Verify the Databricks Runtime uses Python version >= 3.8.
   For example, [Databricks Runtime 12.2 LTS](https://docs.databricks.com/en/release-notes/runtime/12.2lts.html) uses Python 3.9.19. If you are using Databricks Runtime 12.2+, the Python version meets this requirement.
2. Create a new Environment variable called "SPARK_VERSION" with value 3.3
3. Confirm and restart the Spark cluster.
   ![requirements](../../../img/synth_0_1_requirements.png)

## Prophecy requirements

Open a Prophecy Project and upgrade the `ProphecySparkBasicsPython` Dependency to `0.2.34` or later. Connecting a Prophecy project to a Spark cluster with a different dependency version will prompt a cluster restart. Ideally this is a one-time restart, and you're ready to proceed!

![img](../../../img/synth_0_2_proph_reqiuirements.png)

:::caution Caution
Using two Prophecy projects with the same Spark cluster will cause cluster restarts (when each project attaches to the cluster) unless the `ProphecySparkBasicsPython` versions match across both Projects. The same caution applies to `ProphecyLibsPython` versions.

_The Fix:_ Do yourself a favor and upgrade all your Prophecy projects to the same `ProphecySparkBasicsPython` and `ProphecyLibsPython` versions or use separate Spark clusters.
:::

## Create the Gem

Create a new Dataset and select the Type as Data Generator. Note we are not specifying a storage location yet; we will [store the data](#store-the-data) in a separate Gem.  
![img](../../../img/synth_1_new_dataset.png)

![img](../../../img/synth_2_type.png)

### Properties: Specify Data Structure

What type of data do you need to generate? Specify the data structure using Random Data Providers. Prophecy offers a selection of [Random Data Providers](./providers) including integers, booleans, and elements from a list.

![img](../../../img/synth_3_properties.png)

Generate column using a sequence of integers (left). Generate another column by referencing an existing catalog table (right). Randomly select elements of the foreign key from that table.  
![img](../../../img/synth_7_seq_or_foreign.png)

### Infer the Schema

Changes to the columns in the Properties tab are incorporated by inferring the schema in the Schema tab.

### Preview the data

This Gem returns a DataFrame with randomly generated values. Preview the first few records to verify the schema is correct. Then save the Gem.

## Store the data

The newly generated data from the Data Generator Gem is not saved by default. Store the data (use your favorite file type!) using the Target Gem.

Create the target Gem.
![img](../../../img/synth_4_new_target.png)

Connect the Data Generator SOURCE Gem to the Target Gem.
![img](../../../img/synth_5_connect_target.png)

Be sure to configure the write mode for the target Gem. This is **very important** because the Data Generator Gem is **not** idempotent. There is a **new random seed** each time the Gem is run.
![img](../../../img/synth_6_write_mode.png)

:::caution
The Data Generator only generates the data. If you want to store the data just connect the output to a target Gem and configure the location, write properties etc. The data generated is new for each run (execution). The target write mode can be error, overwrite, append, or ignore as desired.
:::
