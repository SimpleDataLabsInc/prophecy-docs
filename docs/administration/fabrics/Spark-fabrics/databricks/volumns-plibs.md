---
title: Set up Prophecy libraries in Databricks volumes
sidebar_label: ProphecyLibs in volumes
id: volumes-plibs
slug: /engineers/dbx-volumes-plibs
description: Add ProphecyLibs directly to volumes when Maven/PyPI is blocked on Databricks
tags: [unity catalog, databricks, plibs]
---

If Maven or PyPI is blocked in your Databricks environment, you can add Prophecy libraries directly to Databricks volumes.

## Prerequisites

Before you set up Prophecy libraries in a Databricks volume, you need to know which library version your project uses. That version must be present in the volume for the setup to work.

To check your project’s Prophecy library version:

1. Open your project metadata.

1. Click on the **Dependencies** tab.

1. Find the relevant Prophecy library (Scala or Python) and note the version.

## Prepare a Databricks volume

To get started, you'll need to define a Databricks volume where you will store the Prophecy libraries.

1. Create a volume in your workspace where you'll maintain Prophecy libraries:

   ```bash
   databricks volumes create --name prophecy-libs --storage-location <your-volume-location>
   ```

1. Download [pyhocon](https://pypi.org/project/pyhocon/) from PyPI or an internal artifactory.

1. Upload the dependency to the volumes path.

   ```
   databricks fs cp pyhocon-0.3.61-py3-none-any.whl dbfs:/volumes/prophecy-libs/
   ```

1. Create a local Init Script. For example, create `install_pyhocon.sh` with the following content:

   ```
   #!/bin/bash
   pip install /Volumes/<catalog>/<schema>/prophecy-libs/pyhocon-0.3.61-py3-none-any.whl
   ```

1. Upload the script to your volumes path.

   ```
   databricks fs cp install_pyhocon.sh dbfs:/volumes/prophecy-libs/
   ```

## Upload Prophecy libraries

Download the appropriate Prophecy library versions from the public buckets and upload them to the same volume path. Replace version in the example URLs based on what's used in your Prophecy project.

- ProphecyPythonLibs

  ```
  wget https://prophecy-public-bucket.s3.us-east-2.amazonaws.com/python-prophecy-libs/prophecy_libs-1.9.45-py3-none-any.whl

  databricks fs cp prophecy_libs-1.9.45-py3-none-any.whl dbfs:/volumes/prophecy-libs/
  ```

- ProphecyScalaLibs

  ```
  wget https://prophecy-public-bucket.s3.us-east-2.amazonaws.com/prophecy-libs/prophecy-libs-assembly-3.5.0-8.9.0.jar

  databricks fs cp prophecy-libs-assembly-3.5.0-8.9.0.jar dbfs:/volumes/prophecy-libs/
  ```

You can also download Prophecy libraries from Azure and GCP. For a full list of paths, visit [Prophecy libraries](/engineers/prophecy-libraries).

## Update fabric configuration

For all relevant Databricks fabrics, you'll need to update the location of the Prophecy libraries.

1. Open the fabric settings.

1. Toward the end of the page, fsind the **Prophecy Library** settings.

1. For Scala and/or Python, change the **Resolution mode** to **File System**.

1. Under **Path**, add your volume path that you created earlier.

   Example: `dbfs:/volumes/prophecy-libs/`

1. Click **Update** to save this change.

## Whitelist for UC standard clusters

To whitelist the Init Script and the JAR path, follow the instructions to [add Prophecy libraries to your Databricks allowlist](/engineers/dbx-whitelist-plibs).
