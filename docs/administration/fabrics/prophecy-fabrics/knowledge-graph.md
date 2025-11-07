---
title: Knowledge graph crawling
id: knowledge-graph-config
description: Configure knowledge graph crawling for a fabric
tags:
  - fabric
  - knowledge graph
  - configuration
---

Knowledge graphs enables Prophecy's AI features to understand your data environment by indexing tables, schemas, and other entities from your SQL warehouse. This page explains how to configure knowledge graph crawling for a fabric.

## Overview

The crawler scans your SQL warehouse to build an index of available tables and their metadata.

Knowledge graph crawling runs independently from pipeline execution. You configure the crawler identity separately from the pipeline execution identity, which allows you to choose different authentication methods for each operation.

You can schedule the crawler to run automatically at defined intervals. Scheduled crawling keeps your knowledge graph up to date as your warehouse data changes. When configuring a schedule, you specify the frequency, timezone, and start time for the crawler.

## Enable knowledge graph crawling

To configure knowledge graph crawling for a fabric:

1. Open your fabric settings.
1. Navigate to the **Knowledge Graph Crawler** section.
1. Toggle **Enable Knowledge Graph Crawling** to on.
1. Configure the authentication method and identity as described below.
1. Optionally, configure a schedule to run the crawler automatically.

## Authentication configuration

The knowledge graph crawler uses its own authentication configuration, independent from the pipeline execution identity. This separation allows you to optimize each operation for its specific use case.

### Understanding pipeline execution vs crawler authentication

Pipeline execution and knowledge graph crawling use separate authentication identities. This means you can configure different authentication methods for each operation.

**Pipeline execution identity** controls how pipelines authenticate when they run. This identity is configured in the **Pipeline Development and Scheduled Execution** section of your fabric settings.

**Crawler identity** controls how the knowledge graph crawler authenticates when it indexes your warehouse. This identity is configured in the **Knowledge Graph Crawler** section of your fabric settings.

These identities are independent. For example, you can configure:

- User OAuth (U2M) for pipeline execution
- Service Principal OAuth (M2M) for knowledge graph crawling

This separation is useful when you want to use user credentials for interactive pipeline development but need stable service principal credentials for scheduled crawling operations.

#### Why use different identities?

**User OAuth (U2M) for pipeline execution** is suitable when:

- Developers need to run pipelines with their individual permissions
- You want to track which user executed which pipeline
- Interactive development requires user-specific access

**Service Principal OAuth (M2M) for scheduled crawling** is recommended when:

- You schedule the crawler to run automatically
- You need credentials that don't expire
- You want stable, unattended operations

The use case: If your fabric is configured for OAuth U2M login (user-based authentication for pipeline execution), you can still provide a service principal for scheduled crawling. This ensures that scheduled crawler runs don't fail due to expired user credentials.

When using this configuration, the crawler indexes all tables that the service principal can access. However, when users interact with Copilot, the knowledge graph scopes results to their individual U2M credentials (the same credentials used for pipeline execution). This means that while the knowledge graph technically contains all indexed tables, each user only sees and can reference tables they have permission to access based on their individual user credentials.

### Authentication method

Select the authentication method for the crawler. This must match the authentication method configured for your SQL warehouse connection. For example, if your warehouse connection uses OAuth, select OAuth for the crawler.

### Identity selection

Choose whether the crawler runs as a user or a service principal.

#### User identity

When you select **User**, the crawler uses user-to-machine (U2M) credentials. This option is suitable for smaller deployments or proof-of-concept environments where service principals are not available.

:::note
User credentials can expire, which may cause scheduled crawling to fail. If you plan to schedule the crawler, use a service principal instead.
:::

#### Service Principal identity

When you select **Service Principal**, the crawler uses machine-to-machine (M2M) credentials. This is the recommended approach for production environments and scheduled crawling because service principal credentials do not expire and provide stable access for automated operations.

If you've already configured a service principal for pipeline execution, you can reuse those credentials:

1. Select **Service Principal** as the identity.
1. Toggle **Use same Service Principal as above** to on.

This reuses the service principal client ID and secret from the **Pipeline Development and Scheduled Execution** section.

To use a different service principal for crawling:

1. Select **Service Principal** as the identity.
1. Toggle **Use same Service Principal as above** to off.
1. Enter the **Service Principal Client ID**.
1. Enter the **Service Principal Client Secret**.

## Service principal permissions

The service principal used for knowledge graph crawling must have sufficient permissions to access and index your warehouse data. Configure the following permissions:

- **Catalog access**: The service principal must have at least "manage" access on the catalog specified in your warehouse connection.
- **Table listing**: The service principal must be able to list tables in the catalog and schemas you want to index.
- **Metadata access**: The service principal must be able to fetch table schemas, column information, and other metadata required for indexing.

The crawler indexes all tables that the service principal can access, building a complete knowledge graph. When users interact with Copilot, the knowledge graph scopes results based on the pipeline execution authentication method:

- **If pipeline execution uses User OAuth (U2M)**: The knowledge graph scopes results to each user's individual credentials. Each user only sees and can reference tables they have permission to access based on their individual user credentials.
- **If pipeline execution uses Service Principal OAuth (M2M)**: The knowledge graph scopes results to the service principal's permissions. All users see the same set of tables that the service principal has access to, regardless of their individual user permissions.

## Schedule configuration

You can schedule the knowledge graph crawler to run automatically at defined intervals. Scheduled crawling keeps your knowledge graph index up to date as your warehouse data changes.

### Configure a schedule

To configure a schedule for the crawler:

1. In the **Knowledge Graph Crawler** section, configure the schedule settings.
1. Select a **Frequency** from the dropdown. Options include:
   - **Minute**: Run the crawler at specified minute intervals.
   - **Hourly**: Run the crawler at specified hour intervals, starting at a specific time.
   - **Daily**: Run the crawler once per day at a specific time.
   - **Weekly**: Run the crawler on specified days of the week at a specific time.
   - **Monthly**: Run the crawler on a specific day of the month at a specific time.
1. Select a **Timezone** from the dropdown. The default timezone is the timezone from where you access Prophecy.
1. Configure the repetition settings based on your selected frequency:
   - For **Hourly**: Set the interval (e.g., "1 hour") and the start time (e.g., "12:00 AM").
   - For **Daily**: Set the time of day when the crawler will run.
   - For **Weekly**: Set the day(s) of the week and the time when the crawler will run.
   - For **Monthly**: Set the day of the month and the time when the crawler will run.

### Schedule considerations

When configuring a schedule for the crawler, consider the following:

- **Frequency**: Choose a frequency that balances freshness with system load. For frequently changing data, consider hourly or daily schedules. For stable data, weekly or monthly schedules may be sufficient.
- **Timezone**: Select a timezone that aligns with your team's working hours or your data update patterns.
- **Authentication**: Use a service principal for scheduled crawling. User credentials can expire, which may cause scheduled runs to fail.

:::info
The scheduling interface for knowledge graph crawling uses the same UI as pipeline scheduling. For more information about scheduling options and parameters, see [Schedule trigger types](/analysts/triggers).
:::

## Configuration scenarios

### Development or POC environment (not recommended)

For smaller deployments or proof-of-concept environments:

- **Pipeline execution**: User OAuth
- **Knowledge graph crawler**: User OAuth

This configuration uses user credentials for both operations. It's simpler to set up but may experience token expiration issues with scheduled crawling.

### Production environment

For production environments with scheduled crawling:

- **Pipeline execution**: Service Principal OAuth
- **Knowledge graph crawler**: Service Principal OAuth (same as above)
- **Crawler schedule**: Configured with appropriate frequency (e.g., daily or hourly)

This configuration uses a single service principal for both operations, providing stable credentials that don't expire. It's the recommended approach for production workloads with scheduled crawling.

When using this configuration, the knowledge graph scopes results to the service principal's permissions. All users see the same set of tables that the service principal has access to, regardless of their individual user permissions.

### Production with separate crawler identity

For environments where you want to separate crawler permissions from pipeline execution:

- **Pipeline execution**: Service Principal OAuth (Identity A)
- **Knowledge graph crawler**: Service Principal OAuth (Identity B)

This configuration uses different service principals for each operation, allowing you to apply different permission scopes to each identity.

### User OAuth for pipelines, Service Principal for scheduled crawling

For environments where you use user-based authentication for pipeline execution but need stable credentials for scheduled crawling:

- **Pipeline execution**: User OAuth (U2M)
- **Knowledge graph crawler**: Service Principal OAuth (M2M)
- **Crawler schedule**: Configured with appropriate frequency (e.g., daily or hourly)

This configuration allows developers to run pipelines with their individual user credentials while ensuring scheduled crawler runs use stable service principal credentials that don't expire.

The crawler indexes all tables that the service principal can access, building a complete knowledge graph. However, when users interact with Copilot, the knowledge graph scopes results to their individual U2M credentials (the same credentials used for pipeline execution). Each user only sees and can reference tables they have permission to access based on their individual user credentials, even though the knowledge graph technically contains all indexed tables. This ensures that users don't see or reference data they don't have access to, while the crawler maintains a comprehensive index of available tables.

## How crawling works

When the knowledge graph crawler runs, it:

1. Connects to your SQL warehouse using the configured credentials.
2. Scans the catalog and schemas specified in your warehouse connection.
3. Indexes table names, schemas, column names, data types, and other metadata.

The crawler does not store your actual data. It only indexes metadata about your data structure to help Copilot understand your environment.

When users interact with Copilot, the knowledge graph scopes results based on the pipeline execution authentication method:

- **If pipeline execution uses User OAuth (U2M)**: The knowledge graph scopes results to each user's individual credentials. Each user only sees and can reference tables they have permission to access based on their individual user credentials.
- **If pipeline execution uses Service Principal OAuth (M2M)**: The knowledge graph scopes results to the service principal's permissions. All users see the same set of tables that the service principal has access to, regardless of their individual user permissions.

In both cases, the knowledge graph technically contains all indexed tables, but users only see results scoped to the appropriate permissions.

:::info
For more information about how knowledge graphs work and how to refresh the index, see [Knowledge graph](/knowledge-graph).
:::
