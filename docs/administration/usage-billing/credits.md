---
title: Credits
id: credits
description: How credit consumption in Prophecy corresponds to platform usage
tags: []
---

import Mermaid from '@theme/Mermaid';

In Prophecy, credits represent a unified measure of usage across the platform. Actions such as adding team members, submitting AI requests, or storing data, consume credits. Understanding credit consumption helps you manage costs and optimize usage effectively.

Credit consumption and payment is aggregated per **plan**, which always corresponds to a Prophecy team.

| Action            | Description                                                 | Credits Consumed |
| ----------------- | ----------------------------------------------------------- | ---------------- |
| **Team Members**  | Number of users allowed on your plan                        | 20 / user        |
| **AI Requests**   | Each time you click on Copilot or interact with an AI agent | 0.04 / request   |
| **Compute**       | Processing required when running a gem or pipeline          | 3 / CPU hour     |
| **Data Egressed** | Data sent outside the Prophecy warehouse                    | 0.045 / GB       |
| **Data Storage**  | Data stored in the Prophecy warehouse                       | 0.02 / GB        |

:::info
To learn more about credit allocation between plans, visit [Usage and billing](/administration/usage-billing/).
:::

## Relationship between credits and Prophecy entities

In Prophecy, each subscription plan corresponds to a single team, and each team is associated with one fabric. Credits are conceptually related to both teams and fabrics.

A fabric represents a dedicated instance of the Prophecy warehouse, which handles all compute and data storage operations. Usage of AI requests, compute, data storage, and data egress is related to actions handled by the fabric, which in turn is associated with the team corresponding to the billing plan.

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

:::note
The Prophecy warehouse is powered by DuckDB. Advanced users can update the DuckDB SQL queries in the **Code** view of their project to optimize computation and reduce credit consumption.
:::
