---
title: Smartsheet
id: smartsheet
slug: /engineers/smartsheet
description: Use data from Smartsheet in your Spark pipeline
tags:
  - gems
  - webapp
  - smartsheet
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecyWebAppPython"
  python_package_version="0.1.2+"
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single=""
  uc_shared=""
  livy=""
/>

Use the Smartsheet gem to read from or write to Smartsheet directly within your Spark pipeline. This gem connects to Smartsheet using the official API and lets you integrate spreadsheet-style data into your workflows.

Before you start, make sure your Spark cluster has the required Python dependencies installed. Then, configure the parameters below to authenticate and specify the Smartsheet you want to access.

## Prerequisites

Install the following Python packages on your Spark cluster:

- [Smartsheet Python SDK](https://pypi.org/project/smartsheet-python-sdk/)
- [pandas](https://pypi.org/project/pandas/)

## Parameters

| Parameter              | Tab      | Description                                                     |
| ---------------------- | -------- | --------------------------------------------------------------- |
| API Token              | Location | Smartsheet API token to authenticate the connection.            |
| Smartsheet Name (Path) | Location | Path to the sheet that you would like to read from or write to. |
