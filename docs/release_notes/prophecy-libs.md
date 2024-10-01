---
title: Prophecy Libraries
id: prophecy-libraries
description: Prophecy library README
sidebar_position: 4
tags: [functionality, compatibility, version, library, plib, plibs, license]
---

Prophecy Libs are small and lightweight utility libraries, offering comprehensive sets of Spark functions tailored for Prophecy customers. They address the most common data transformation use cases, including monitoring, auditing, connectors, and other data processing functions. These versatile libraries support Scala and Python Spark environments.

Here are the released artifacts:

- Prophecy Libs for Scala: [Maven](https://mvnrepository.com/artifact/io.prophecy/prophecy-libs)
- Prophecy Libs for Python: [PyPi](https://pypi.org/project/prophecy-libs/)

For a list of the latest versions, see [Version Chart](/docs/release_notes/version_chart.md).

## Functionality

This section includes the functionalities offered by Prophecy Libs.

### Pipeline Monitoring

Out of the box, Spark lacks auditing or monitoring capabilities for its Pipelines. Prophecy Libs bridges this gap by offering step-by-step transformation monitoring, enabling users to easily comprehend Pipeline execution metrics (e.g., times of arrival, amount of data processed), data profiles, and detailed debugging information at every Pipeline step.

:::note

Pipeline Monitoring is fully independent of the Prophecy IDE, using standard metadata tables. Reading and leveraging this information for downstream consumption is as simple as reading a table.

:::

To learn more about Prophecy monitoring capabilities, see [Pipeline Monitoring](/docs/Spark/pipeline-monitoring/pipeline-monitoring.md). And to learn more about the metrics setup, see [Execution Metrics](/docs/Spark/execution/execution-metrics.md).

### Utility Functions

The standard Spark function library covers the basics of data transformation but often falls short for enterprise data platforms. Prophecy Libs offers additional utility functions essential for complex data operations, especially during legacy platform migrations.

This includes comprehensive data lookup functionality, configuration management, complex type processing UDFs, secret manager integration, and other high-demand functions.

### Legacy Connectors

Prophecy-libs provides several high-performance connectors missing from the standard Spark source palette. This includes an EBCDIC fixed format, SFTP, and REST API connectors, ensuring seamless integration with legacy systems.

## License

Prophecy Libs is source-available to all Prophecy customers. The built artifacts of Prophecy Libs are published in public repositories. Source code access is available via secure file-sharing per request.
