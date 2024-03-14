---
title: "Deployment"
date: 2023-11-01T14:45:41-07:00
sidebar_position: 1
id: deployment
description: Prophecy deployment is flexible and supports multiple mechanisms
tags:
  - deployment
  - jobs
  - databricks
---

Prophecy deployment is simple and flexible. Prophecy is written as a set of microservices that run on Kubernetes and is built to be multi-tenant. There are three primary options:

## Cloud Deployment

Prophecy in the cloud connects to your existing Spark and Scheduler/Orchestrator. Prophecy does not store any data, however, it does store metadata about your Pipelines, Datasets and schedules.

![General Architecture](img/arch_general.png)

### Public SaaS

Public SaaS (Prophecy managed SaaS) is the default option when you connect from **Databricks Partner Connect** and is free for one user.
This option is heavily used by customers to try Prophecy. Our startup and midsize customers who like the convenience of a managed service prefer this option. You can also use this by directly going to the [Prophecy Application](https://app.prophecy.io/).

![VPC Architecture](img/arch_separate_vpc.png)

### Private SaaS (Customer VPC)

Customers in segments that deal with very sensitive data primarily use this option. Here, Prophecy runs within the **Customer VPC** and connects to the identity, Spark clusters and the scheduler within the VPC.

![Customer VPC Architecture](img/arch_customervpc.png)

This is the default option when you go through the cloud marketplaces. You can install the software from the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/simpledatalabsinc1635791235920.prophecy-data-engineering). The installation is very simple, takes about 20 minutes (with a confirmation popup), and billing starts after 30 days.

![Azure Architecture](img/prophecy_azure.png)

### On-Premise Deployment

On rare occasions, Prophecy will deploy on-premise for large customers who are moving to the cloud. Often the order is that the organizations will move Pipelines from on-premise legacy ETL tools to Spark, then move it to Spark on the cloud. For more information read the [on-premise installation documentation](on-premise/on-premise.md) or reach out to our team by using [request a demo](https://www.prophecy.io/request-a-demo).

## High-Level Architecture

There are four components of a successful Prophecy deployment:

- **Prophecy IDE** - The development environment, including Prophecy Microservices and Cloud Infrastructure, which is deployed using one of these options: [Public SaaS](#public-saas), [Private SaaS](#private-saas-customer-vpc), or (rarely) [On-Premise](#on-premise-deployment).

- **Data Engine (eg Snowflake or Databricks)** - [SQL](#sql) or [Spark](#spark) execution environment. This is setup by a customer and connected to Prophecy through a secure and performant interface. No customer’s data is stored on Prophecy’s environment.

- **Source Control (e.g. Bitbucket)** - Prophecy works similar to code-first IDEs, by natively integrating with [Git](#git) for best software engineering practices. An encrypted copy of customer’s code is stored within Prophecy’s environment for fast access, while the source-of-truth code is stored on Git.

- **Identity Management (optional)** - For simple user authentication and permission control, Prophecy can connect your identity provider of choice.

### Prophecy IDE

A user who logs into Prophecy has access to the integrated development environment (IDE). This includes everything needed to enable all data users to transform raw data into reliable, analytics-ready data using visual data pipelines.

![Prophecy IDE](./img/arch_ide.png)

Teams are the primary mechanism of ownership. Teams own Projects where Pipelines, Datasets, and Jobs live. Teams also own execution fabrics that provide the execution and storage resources for execution including on SQL Warehouses and Spark clusters.

### SQL

To allow for SQL query execution Prophecy can connect to Snowflake and Databricks warehouses. Connectors for additional SQL warehouses coming soon.

#### Snowflake

To connect with data stored in a SQL Warehouse, or to allow for interactive SQL execution, Prophecy can connect to an existing Snowflake execution environment through the secure and performant [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index) or [Snowflake API](https://docs.snowflake.com/en/developer-guide/sql-api/reference).

Each [Fabric](../../concepts/fabrics) defined in Prophecy connects to a single Snowflake Warehouse and each user is required to provide credentials to authenticate to it.

![Arch_Diagram](./img/arch_snowflake.png)

Notice the data provider (eg Snowflake) matches up to a Fabric. For another scenario, consider the same architecture diagram where the Fabric connects to a Databricks SQL warehouse instead of Snowflake.

### Spark

To allow for interactive code execution Prophecy can connect to either [Databricks](#databricks) or any other Spark through [Apache Livy](https://livy.apache.org/) (e.g. MapR, CDP, HDP, Spark on Kubernetes).

#### Databricks

![Prophecy <> Databricks Connectivity](./img/arch_databricks.png)

Prophecy connects to Databricks using [Rest API](https://docs.databricks.com/dev-tools/api/latest/index.html). Each [Fabric](../../concepts/fabrics) defined in Prophecy connects to a single [Databricks workspace](https://docs.databricks.com/workspace/index.html) and each user is required to provide a [personal access token](https://docs.databricks.com/dev-tools/api/latest/authentication.html) to authenticate to it.

Security-conscious enterprises that use Databricks with limited network access have to additionally add the **Prophecy Data Plane IP address** (`3.133.35.237`) to the Databricks allowed [access list](https://docs.databricks.com/security/network/ip-access-list.html#add-an-ip-access-list).

Primarily Prophecy uses Databricks for the following functionalities:

- **Interactive Execution** - Prophecy allows its users to spin up new clusters or connect to existing clusters. When a cluster connection exists, Prophecy allows the user to run their code in the interactive mode. Interactive code queries are sent to Databricks using the [Databricks Command API 1.2](https://docs.databricks.com/dev-tools/api/1.2/index.html).
- **Scheduling** - Prophecy allows the user to build and orchestrate Databricks Jobs. This works through the [Databricks Jobs API 2.1](https://docs.databricks.com/dev-tools/api/latest/jobs.html).

By default, Prophecy does not store any data samples when executing code using Databricks. Data samples can be optionally stored for observability purposes (execution metrics).

:::note
When using **Active Directory**, Prophecy takes care of auto-generation and refreshing of the Databricks personal access tokens. Read more about it [here](https://docs.microsoft.com/en-us/azure/databricks/dev-tools/api/latest/aad/).
:::

### Git

While all code generated by Prophecy is stored in a User’s Git repository, we temporarily store some of the generated code used during Interactive development in an encrypted cache.

Supported Git providers:

- **Prophecy Managed** - Prophecy automatically sets up the connectivity between itself and the repositories. Prophecy Managed is based on open-source [GitTea](https://github.com/go-gitea/gitea).
- **GitHub** (including GitHub Enterprise) - authenticates using per-user personal access tokens. [How to generate PAT?](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- **Bitbucket** (including Bitbucket self-hosted) - authenticates using per-user personal access tokens. [How to generate PAT?](https://confluence.atlassian.com/bitbucketserver072/personal-access-tokens-1005335924.html)
- **GitLab** (including GitLab self-hosted) - authenticates using per-user personal access tokens. [How to generate PAT?](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
- **Azure DevOps** - authenticates using per-user personal access tokens. [How to generate PAT?](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows)

Security-conscious enterprises that use Git Providers within private networks behind firewalls have to add the Prophecy Control Plane IP address (`3.133.35.237`) to the private network allow-list or to the Git provider [allow-list](https://github.blog/2019-12-12-ip-allow-lists-now-in-public-beta/).

:::info
**Coming Soon**
Users will be able to connect to common Git providers, by leveraging their respective OAuth functionalities. E.g. [GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) or Azure AD.
:::

## Security and Privacy Practices

The Prophecy team employs top-notch industry practices to safeguard the security of their application and maintain the privacy of customer data. Below are just a few components of our comprehensive security strategy and system structure:

- **General** - An annual penetration test is performed to validate Prophecy’s posture and identify vulnerabilities. Our latest penetration test report was issued in November 2022. Prophecy maintains SOC-2 compliance as audited by PrescientAssurance.

- **Public SaaS** - Prophecy IDE is hosted on secure servers on AWS. All storage systems are encrypted, and all servers are tightly access controlled and audited. Data is encrypted in transit at all times.

- **Private SaaS** - Alternatively, Prophecy’s IDE can be installed within an Enterprise network as desired. Prophecy’s IDE accesses your environment through a single IP address dedicated to you, allowing you to protect access to your data resources at the network level. The credentials are stored per user, and only a fully authenticated user can access their environment.

- **On-Premise** - Prophecy complies with your security requirements on-premise; [reach out](https://www.prophecy.io/request-a-demo) to start the discussion.

Read more details on Prophecy’s security and compliance posture at our Security Portal [here.](https://security.prophecy.io/)
