---
title: Prophecy Libraries
id: prophecy-libraries
description: Prophecy library README
sidebar_position: 4
tags: [functionality, compatibility, version, library, plib, plibs, license]
---

Prophecy-libs is a small and lightweight utility library, offering a comprehensive set of Spark functions tailored for Prophecy customers. It addresses the most common data transformation use cases, including monitoring, auditing, connectors, and other data processing functions. This versatile library supports Scala and Python Spark environments.

Released artifacts are available below:

- Prophecy-libs for Scala (latest version: 8.0.29): [Maven](https://mvnrepository.com/artifact/io.prophecy/prophecy-libs)
- Prophecy-libs for Python (latest version 1.9.9): [PyPi](https://pypi.org/project/prophecy-libs/)

## Functionality

### Pipeline Monitoring

Out of the box, Spark lacks auditing or monitoring capabilities for its Pipelines. Prophecy-libs bridges this gap by offering step-by-step transformation monitoring, enabling users to easily comprehend pipeline execution metrics (e.g., times of arrival, amount of data processed), data profiles, and detailed debugging information at every Pipeline step.

:::note

Pipeline Monitoring is fully independent of the Prophecy IDE, using standard metadata tables. Reading and leveraging this information for downstream consumption is as simple as reading a table.

:::

Learn more about Prophecy monitoring capabilities [here](https://docs.prophecy.io/Spark/pipeline-monitoring/) and the metrics setup [here](https://docs.prophecy.io/Spark/execution/execution-metrics/).

### Utility Functions

The standard Spark function library covers the basics of data transformation but often falls short for enterprise data platforms. Prophecy-libs offers additional utility functions essential for complex data operations, especially during legacy platform migrations.

This includes comprehensive data lookup functionality, configuration management, complex type processing UDFs, secret manager integration, and other high-demand functions.

### Legacy Connectors

Prophecy-libs provides several high-performance connectors missing from the standard Spark source palette. This includes an EBCDIC fixed format, SFTP, and REST API connectors, ensuring seamless integration with legacy systems.

## License

Prophecy-libs is source-available to all Prophecy customers in perpetuity. The built artifacts of Prophecy-libs are published in public repositories. Source code access is available via secure file-sharing per request.
