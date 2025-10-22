---
title: Credits
id: credits
description: How credit consumption in Prophecy corresponds to platform usage
tags: []
---

import Mermaid from '@theme/Mermaid';

:::edition Free and Professional
Credits apply to the [Free and Professional Editions](/getting-started/editions/) only.
:::

In Prophecy, **credits** represent a unified measure of usage across the platform.

Plans, teams, and fabrics define how billing and credit consumption are organized.

- A plan is the top-level billing unit. Each plan includes exactly one team.
- A [team](//administration/teams-users/teams-users) represents a group of users who share access to resources through one fabric.
- A [fabric](/administration/fabrics/prophecy-fabrics/) points to a dedicated Prophecy warehouse database and compute resources.

:::info
To learn about monitoring credit usage and buying additional credits, see [Usage and billing](/administration/usage-billing/).
:::

## How credits are charged

The following actions consume the corresponding number of credits.

| Action            | Description                                                 | Credits Consumed |
| ----------------- | ----------------------------------------------------------- | ---------------- |
| **Team Members**  | Number of users allowed on your plan                        | 20 / user        |
| **AI Requests**   | Each time you click on Copilot or interact with an AI agent | 0.04 / request   |
| **Compute**       | Processing required when running a gem or pipeline          | 3 / CPU hour     |
| **Data Egressed** | Data sent outside the Prophecy warehouse                    | 0.045 / GB       |
| **Data Storage**  | Data stored in the Prophecy warehouse                       | 0.02 / GB        |

:::note
The Prophecy warehouse is powered by DuckDB. Advanced users can update the DuckDB SQL queries in the **Code** view of their project to optimize computation and reduce credit consumption.
:::

## Relationship diagram

The following diagram shows how credit consumption actions relate to plans, teams, and fabrics.

<Mermaid
value={`
flowchart LR
A[Plan] --> B[Team]
B --> C[Fabric / Prophecy Warehouse]

subgraph "Credit Consumption Actions"
direction LR
E[Team Members]
F[AI Requests]
G[Compute]
H[Data Storage]
I[Data Egressed]
end

B -.-> E
C -.-> F
C -.-> G
C -.-> H
C -.-> I

%% Styling
classDef entity fill:#f5f5f5,stroke:#bdbdbd,stroke-width:1px,color:#1c1e21
classDef metric fill:#e1f5fe,stroke:#bdbdbd,stroke-width:1px,color:#1c1e21
classDef cluster fill:transparent,stroke:#bdbdbd,stroke-width:1px

class A,B,C entity
class E,F,G,H,I metric
`}
/>
