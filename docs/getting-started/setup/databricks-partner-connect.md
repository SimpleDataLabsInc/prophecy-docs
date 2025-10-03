---
title: Databricks Partner Connect
id: databricks-partner-connect
slug: /databricks-partner-connect
description: Get started with Prophecy via Databricks Partner Connect
tags:
  - spark
  - databricks
  - onboarding
---

If you have access to a Databricks workspace, you can get started with Prophecy via [Databricks Partner Connect](https://docs.databricks.com/aws/en/partner-connect/). This integration lets you setup a Prophecy Enterprise Edition SaaS account directly from Databricks.

## Open the Prophecy integration

First, you'll find the Prophecy integration within Databricks.

1. Open your Databricks workspace.
1. From the left sidebar, select **Marketplace**.
1. Under **Partner Connect integrations**, click **Prophecy**.
1. On the Prophecy Integration page, click **Connect**.

In the dialog that pops up, you will configure the Databricks execution environment to use in Prophecy.

1. Choose the **SQL warehouse** that you'll use for pipeline execution in Prophecy.
1. Select the catalog and schema that Prophecy will use as the default for reading and writing data. You will only be able to select what is available to your Databricks user.
1. Click **Next > Next**.

## Sign up for Prophecy

Prophecy's SaaS environment login should open in a new tab.

1. Enter a new password to create a Prophecy account. If you already have an account, sign in.
1. Open the **Metadata** page to see the list of projects you can access.
1. Open the HelloWorld_SQL project in the project editor.
1. In the top right corner, attach the to SQL warehouse that you configured during the Partner Connect setup.

Now that you have connected to your Databricks SQL warehouse, you can run pipelines and models in that environment.
