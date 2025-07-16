---
title: Getting help with Prophecy
id: getting-help
slug: /getting-help
description: Learn how to get support during your Prophecy trial or as a customer
tags: []
---

You can get help with Prophecy whether you're evaluating the platform or running it in production. Support options include community channels, direct assistance, and our customer support portal.

## Support for trial users

If you're exploring Prophecy during a free trial, the following resources can help you get started.

- Ask questions in the `#support` Slack channel. Our team and other users are available to help. [Join the Slack community](https://prophecy-io-support.slack.com/archives/C01P1PD7JJY).
- Schedule time with a Prophecy expert to see the platform in action. [Request a demo](https://www.prophecy.io/request-a-demo).

:::note
If you have trouble accessing the Slack community, contact [sales@prophecy.io](mailto:sales@prophecy.io).
:::

## Support for existing customers

If you are a Prophecy customer, use the support portal for tailored assistance and troubleshooting. [Go to Support Portal](https://prophecy.zendesk.com/).

:::note
If you can't access the portal, contact [support@prophecy.io](mailto:support@prophecy.io) for help.
:::

## Include diagnostics when reporting issues

To help our team investigate and resolve your issue faster, include relevant logs and configuration details. Use the table below to find what information to collect based on your issue:

| Issue                            | What to include                                                                                                                                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can't attach pipeline to cluster | Connection logs from [Prophecy](./prophecy-details.md), Spark cluster [configuration](./spark-cluster-details.md), and [connectivity check](./spark-cluster-details.md#connectivity-check) results. |
| Pipeline fails during execution  | Pipeline [logs](./prophecy-details.md), Spark [configuration](./spark-cluster-details.md#spark-configurations), and [connectivity check](./spark-cluster-details.md#connectivity-check) results.    |
| Spark application errors         | Pipeline [logs](./prophecy-details.md) and Spark [driver logs](https://docs.databricks.com/en/compute/troubleshooting/debugging-spark-ui.html#driver-logs).                                         |
