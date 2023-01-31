---
title: 2.5.9.0
id: 2_5_9_0
description: Release notes for 2.5.9.0
tags: []
---

## New Features

### Interims for Unity catalog Clusters in Databricks

Pipelines running in **UC cluster** never supported interims because Prophecy-libs could not be installed on such clusters. We have now added functionality to generate interims without Prophecy-libs on all **actions** (tail nodes in an interactive run)

Additionally, **Shared mode clusters** in non UC workspace will also now have Execution Metrics (without data samples), and interims on all dangling nodes.

### Team level Execution Metrics

Admins will now be able to specify table names for execution metrics to be stored. For more details please see [Execution Metrics](docs/low-code-spark/execution/execution-metrics.md)

### GCP Partner Connect

Databricks customers on GCP will now be able to sign up to Prophecy using Partner Connect.

### Union by name

Added Union by name in [Set Operations](docs/low-code-spark/gems/transform/set-operation.md) Gem. This can be used now to get union by column names when positions are different in two datasets.

### Streaming (_Beta_)

Added support to create streaming pipelines.

## Bug fixes

### UDF code parsing failed

**Issue**: The Python interpreter was crashing on invalid code for default parameters while writing UDFs.

**Fix**: Added a fix to catch that exception before actually running the code.

### Blocked log4j dependency

**Issue**: The Scala maven plugin has a log4j dependency that is blocked for some customers

**Fix**: Updated the log4j dependency. Also exposed a Scala and Python formatter for UI.

### IDE disconnection issue

**Issue**: Earlier UI had no way of telling backend Websocket if the user was active on that tab. If user is still on UI but not doing any operations, user will get disconnected in 10 mins.

**Fix**: Added handling of pong messages to avoid user disconnection

### Python optimiser taking long time

**Issue**: For big schema's, Python optimiser is taking significant time due to which compilation is delayed.

**Fix**: Adding a bunch of pre-optimization phases during substitution that will try to eagerly evaluate and substitute for preconfigured syntaxes.  
The compilation time reduced from ~15sec to ~500ms.

### IDE crash when modifying UDFs

**Issue**: UDF with invalid function default args breaks during the Python interpreter time.

**Fix**: Added check during UDF compile time, to handle invalid functions.
