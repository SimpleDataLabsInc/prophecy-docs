---
title: SampleRows
id: sample-rows
description: Sample records by choosing a specific number or percentage of records
tags:
  - gems
  - transform
  - sample
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.2.25+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single=""
  uc_shared="14.3+"
  livy="3.0.1"
/>

Use the SampleRows gem to sample records by choosing a specific number or percentage of records.

## Parameters

| Parameter         | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| Sampling strategy | An option between sampling by number of records or percentage of records            |
| Sampling ratio    | The ratio of records that you wish to sample                                        |
| Random seed       | A number that lets you reproduce the random sample                                  |
| With replacement  | When enabled, this allows records to be returned to the sample pool after selection |
