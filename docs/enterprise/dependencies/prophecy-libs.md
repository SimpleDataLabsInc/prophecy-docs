---
title: Prophecy libraries
id: prophecy-libraries
slug: /engineers/prophecy-libraries
description: Learn about these small and lightweight utility libraries
tags: [functionality, compatibility, version, library, plib, plibs, license]
---

Prophecy libraries (ProphecyLibs) are small and lightweight utility libraries that offer comprehensive sets of Spark functions tailored for Prophecy customers. They address the most common data transformation use cases, including monitoring, auditing, connectors, and other data processing functions.

Here are the released artifacts:

- ProphecyLibsPython: [PyPI](https://pypi.org/project/prophecy-libs/)
- ProphecyLibsScala: [Maven](https://mvnrepository.com/artifact/io.prophecy/prophecy-libs)

For a list of the latest ProphecyLibs versions, see [Version Chart](/docs/release_notes/version_chart/version_chart.md).

## Project dependencies

Depending on your project language (Python or Scala), the appropriate Prophecy library will be added as a [dependency](/engineers/spark-dependencies) in your Prophecy project.

Prophecy libraries are installed in your Databricks cluster when you attach a cluster in your project. The version installed will be the same version defined in your project dependency settings. You can easily [update](/engineers/spark-dependencies#update-dependencies) the ProphecyLibs version of your project if necessary.

## Functionality

### Pipeline monitoring

Spark lacks auditing or monitoring capabilities for its pipelines out of the box. Prophecy libraries bridge this gap by offering step-by-step transformation monitoring, enabling users to easily comprehend pipeline execution metrics (e.g., times of arrival, amount of data processed), data profiles, and detailed debugging information at every pipeline step.

:::note

Pipeline monitoring is fully independent of the Prophecy IDE, using standard metadata tables. Reading and leveraging this information for downstream consumption is as simple as reading a table.

:::

To learn more about Prophecy monitoring capabilities, see [Pipeline Monitoring](/engineers/pipeline-monitoring). To learn more about metrics setup, see [Execution Metrics](/engineers/execution-metrics).

### Utility functions

The standard Spark function library covers the basics of data transformation but often falls short for enterprise data platforms. Prophecy libraries offer additional utility functions essential for complex data operations, especially during legacy platform migrations.

This includes comprehensive data lookup functionality, configuration management, complex type processing UDFs, secret manager integration, and other high-demand functions.

### Legacy connectors

Prophecy libraries provide several high-performance connectors missing from the standard Spark source palette. This includes an EBCDIC fixed format, SFTP, and REST API connectors, ensuring seamless integration with legacy systems.

## Download Prophecy libraries

If you want to download Prophecy libraries, you can find them publicly from the following cloud providers. For example, if Maven/PyPI is blocked on Databricks, you may want to [add Prophecy libraries to your Databricks volumes](/admin/dbx-volumes-plibs).

### Azure

- ProphecyScalaLibs

  `https://prophecypublicazure.blob.core.windows.net/prophecy-public-libs/prophecy-scala-libs/`

- ProphecyPythonLibs

  `https://prophecypublicazure.blob.core.windows.net/prophecy-public-libs/prophecy-python-libs/`

### GCP

- ProphecyScalaLibs

  `gs://prophecy-public-gcp/prophecy-scala-libs/`

- ProphecyPythonLibs

  `gs://prophecy-public-gcp/prophecy-python-libs/`

### AWS (S3)

- ProphecyScalaLibs

  `s3://prophecy-public-bucket/prophecy-libs/`

- ProphecyPythonLibs

  `s3://prophecy-public-bucket/python-prophecy-libs/`

## License

Prophecy libraries are source-available to all Prophecy customers. The built artifacts of Prophecy libraries are published in public repositories. Source code access is available via secure file-sharing per request.
