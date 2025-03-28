---
title: Databricks
id: databricks
description: Learn how to connect with Databricks
tags:
  - connections
  - sql
  - databricks
---

To create a connection with Databricks, enter the following parameters:

| Parameter             | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Connection Name       | Name to to identify your connection                  |
| JDBC URL              | URL to connect to your SQL warehouse                 |
| Catalog               | Default catalog for reading and writing data         |
| Schema                | Default schema for reading and writing data          |
| Authentication method | How you want to authenticate your Databricks account |

## Authentication methods

You can configure your Databricks connection with one of three authentication methods:

- **Databricks [OAuth](docs/administration/authentication/databricks-oauth.md).** Prophecy prompts you to sign in with Databricks.
- **Personal Access Token (PAT).** Use a [secret](docs/administration/secrets/secrets.md) to enter your PAT.
- **Client Credentials.** Enter your Client ID and Client Secret (secret required) for authentication.
