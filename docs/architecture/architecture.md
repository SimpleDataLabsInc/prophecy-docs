---
title: Architecture
id: architecture
description: Describing the architecture of Prophecy and how it can integrate into your use cases
tags: []
---

Prophecy deployment is simple and flexible. Prophecy is written as a set of Microservices that run on Kubernetes and is
built to be multi-tenant.

| Deployment Model                                                      | Customers Who Prefer it                                         |
| --------------------------------------------------------------------- | --------------------------------------------------------------- |
| [Prophecy Managed SaaS](./deployment#public-saas)                     | Midsize Companies and Startups                                  |
| [Private SaaS (Customer VPC)](./deployment#private-saas-customer-vpc) | Enterprises in the Cloud                                        |
| [On-Premise](./deployment#on-premise-deployment)                      | Large Enterprises in the middle of cloud migration (rare cases) |

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

To allow for SQL query execution Prophecy can connect to Snowflake and Databricks warehouses. Connectors for additional SQL warehouses will be announced as they are added.

#### Snowflake

To connect with data stored in a SQL Warehouse, or to allow for interactive SQL execution, Prophecy can connect to an existing Snowflake execution environment through secure and performant [Snowpark](https://docs.snowflake.com/en/developer-guide/snowpark/index) or [Snowflake](https://docs.snowflake.com/en/developer-guide/sql-api/reference) APIs.

Each [Fabric](../../concepts/fabrics) defined in Prophecy connects to a single Snowflake Warehouse and each user is required to provide credentials to authenticate to it.

![Arch_Diagram](./img/arch_snowflake.png)

Notice the data provider (eg Snowflake) matches up to a Fabric. For another scenario, consider the same architecture diagram where the Fabric connects to a Databricks SQL warehouse instead of Snowflake.

### Spark

To allow for interactive code execution Prophecy can connect to either [Databricks](#databricks) or any other Spark through [Apache Livy](https://livy.apache.org/) (e.g. MapR, CDP, HDP, Spark on Kubernetes).

#### Databricks

![Prophecy to Databricks Connectivity](./img/arch_databricks.png)

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

## Security and Privacy Practices

The Prophecy team employs top-notch industry practices to safeguard the security of their application and maintain the privacy of customer data. Below are just a few components of our comprehensive security strategy and system structure:

- **General** - An annual penetration test is performed to validate Prophecy’s posture and identify vulnerabilities. Our latest penetration test report was issued in November 2022. Prophecy maintains SOC-2 compliance as audited by PrescientAssurance.

- **Public SaaS** - Prophecy IDE is hosted on secure servers on AWS. All storage systems are encrypted, and all servers are tightly access controlled and audited. Data is encrypted in transit at all times.

- **Private SaaS** - Alternatively, Prophecy’s IDE can be installed within an Enterprise network as desired. Prophecy’s IDE accesses your environment through a single IP address dedicated to you, allowing you to protect access to your data resources at the network level. The credentials are stored per user, and only a fully authenticated user can access their environment.

- **On-Premise** - Prophecy complies with your security requirements on-premise; [reach out](https://www.prophecy.io/request-a-demo) to start the discussion.

Read more details on Prophecy’s security and compliance posture at our Security Portal [here.](https://security.prophecy.io/)

## What's next

To learn more about Prophecy's architecture, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
