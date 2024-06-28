---
title: Data Copilot data privacy
id: copilot-data-privacy
description: The AI assistant for data Pipelines and models
sidebar_position: 11
tags:
  - concepts
  - copilot
  - generativeai
---

The Prophecy team employs top-notch industry practices to safeguard the security of their application and maintain the privacy of customer data. Below are just a few components of our comprehensive security strategy and system structure:

- Prophecy **does not** store or send _anything_ from your data plane to any third-party LLM providers. Instead, Prophecy makes use of rich metadata to construct the knowledge graph. As a result, Data Copilot can interface with LLM providers while maintaining the privacy of the data itself.
- Prophecy IDE is hosted on secure servers on AWS. All storage systems are encrypted, and all servers are tightly access controlled and audited. Data is encrypted in transit at all times.
- Alternatively, Prophecy’s IDE can be installed within an Enterprise network as desired.
- Prophecy’s IDE accesses your environment through a single IP address dedicated to you, allowing you to protect access to your data resources at the network level. The credentials are stored per user, and only a fully authenticated user can access their environment.
- An annual penetration test is performed to validate Prophecy’s posture and identify vulnerabilities. Our latest penetration test report was issued in November 2022.
- Prophecy maintains SOC-2 compliance as audited by PrescientAssurance.
- Read more details on Prophecy’s security and compliance posture at our Security Portal [here](https://security.Prophecy.io/).

## FAQ

###

#### Which Datasets are accessible to Prophecy Data Copilot?

In Prophecy’s 3.1 release, any Dataset, Source, or Seed within a Project are accessible when Data Copilot is called from that Project. In an upcoming release, this behavior will change as follows: The assets need only to be part of the linked (Databricks, Snowflake, etc) catalog. That is, if the user can access the Datasets with their personal access token, then Datasets should appear in the Environment tab and Copilot can access them.
