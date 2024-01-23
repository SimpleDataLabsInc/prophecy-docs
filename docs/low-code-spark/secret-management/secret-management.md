---
title: Secret Management For Spark Fabrics
id: secret-management-spark
description: Secret Management for Spark Fabrics
tags:
  [spark, secrets, vault, environment, variable, databricks, secret-provider]
---

Prophecy supports seamless integration with various data tools, enabling users to build code for ELT use-cases beyond basic warehousing transformations. This includes data ingestion from sources like Salesforce, data enrichment through Rest APIs for data masking, and data egress to platforms like Snowflake.

To ensure robust security for enterprise customers, Prophecy facilitates secure authentication for all data tool connections. Users can store their credentials securely using centralized secret providers, following best practices such as encryption. This approach enhances security standards by allowing centralized management and distribution of credentials, with dedicated individuals or groups overseeing the security process.

Users can connect these centralized secret providers to their Spark Fabrics, and access the secrets created in Prophecy.
Please note, Prophecy never accesses the value for these secrets, Just keys to generate and execute correct code.

In this documentation, we'll walk you through the process of safely storing and accessing secrets in Prophecy.
You'll learn best practices while gaining hands-on experience to ensure your secrets remain protected. Let's dive in.

## Secret Provider

Users can create a Secret Provider in their Spark Fabrics. Please note, the secrets are accessed When a Pipeline is Run on the cluster, So that the user has to make sure that their Spark cluster has proper access to the secret providers they are using.

These are the 3 types of Secret Providers supported.

| Secret Provider                            | Details                               |
| ------------------------------------------ | ------------------------------------- |
| [Databricks Secrets](./databricks-secrets) | Available for Databricks Fabrics Only |
| [HashiCorp Vault](./hashicorp-vault)       | Available for all Spark Fabrics       |
| [Environment Variables](./env-variable)    | Available for all Spark Fabrics       |

Lets look at how to create these Secret Providers in The Spark Fabric, How to access, Create, Edit, Delete Secrets Via Prophecy and then how to use these secrets in the Pipelines.

## Using Secrets in Prophecy Managed Spark Fabrics

For POC and trial users, who are using Prophecy Managed Fabrics for exploring the Product, we support Databricks Secrets.
