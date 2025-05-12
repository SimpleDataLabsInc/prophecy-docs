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

This page outlines the requirements and configuration options for using the Smartsheet integration with Spark. Before getting started, ensure your Spark cluster has the necessary dependencies installed. Then, use the parameters below to securely connect to and interact with your Smartsheet data.

## Prerequisites

To use this gem, you must install the following directly on your Spark cluster:

- [Smartsheet Python SDK](https://pypi.org/project/smartsheet-python-sdk/)
- [pandas](https://pypi.org/project/pandas/)

## Parameters

| Parameter              | Tab      | Description                                                         |
| ---------------------- | -------- | ------------------------------------------------------------------- |
| API Token              | Location | Smartsheet API token to authenticate the connection.                |
| Smartsheet Name (Path) | Location | The path to the sheet that you would like to read from or write to. |
