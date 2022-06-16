---
sidebar_position: 2
title: Repartition
---

:::caution 🚧 Work in Progress 🚧

This will repartition/coalesce the input dataframe.

Below different types of configurations which can be given:

## Hash Repartitoning

Repartitions the data evenly across various partitions based on the key. Reshuffles the dataset.

## Random Repartitioning

Repartitions without data distribution defined. Reshuffles the dataset.

## Range Repartitoning

Repartitions the data with tuples having keys within the same range on the same worker. Reshuffles the dataset.

## Coalesce

Reduces the number of partitions without shuffling the dataset.
