---
title: Tableau
id: tableau
slug: /engineers/tableau
description: Send data from your Spark pipeline to Tableau
tags:
  - gems
  - webapp
  - tableau
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecyWebAppPython"
  python_package_version="0.1.2+"
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib="1.9.42+"
  uc_single="14.3+"
  uc_shared="14.3+"
  livy=""
/>

Use the Tableau gem to send data from your Spark pipeline to Tableau Server as an extract. This lets you automate data delivery to Tableau for dashboards or reporting. To connect, provide your server URL, site and project IDs, and a personal access token.

## Prerequisite

This gem only runs on machines with an x86-64 CPU architecture.

## Parameters

| Parameter            | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| Tableau server url   | URL of your Tableau Server.<br/>Example: `https://tableau.example.com` |
| Tableau token name   | Name of your Tableau personal access token                             |
| Tableau token        | Your Tableau personal access token                                     |
| Tableau site id      | Name of the Tableau site you're connecting to                          |
| Tableau project id   | Name of the project where you want to send data                        |
| Tableau Extract Name | Name of the Tableau extract                                            |
