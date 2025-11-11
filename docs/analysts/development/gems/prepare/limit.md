---
title: Limit gem
sidebar_label: Limit
id: limit
slug: /analysts/limit
description: Limit the number of columns processed
tags:
  - gems
  - analyst
  - prepare
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

Limits the number of rows in the output.

::::info Interactive Gem Example
The Limit gem has a corresponding interactive gem example. See [Interactive gem examples](/analysts/gems#interactive-gem-examples) to learn how to run sample pipelines for this and other gems.
::::

### Parameters

| Parameter | Description                                                               | Required |
| :-------- | :------------------------------------------------------------------------ | :------- |
| Model     | Input Source                                                              | True     |
| Limit     | Number of rows required in output (Allowed range: [0, 2<sup>31</sup> -1]) | True     |
