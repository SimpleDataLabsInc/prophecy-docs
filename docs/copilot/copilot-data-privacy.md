---
title: Data privacy with Copilot
id: copilot-data-privacy
slug: /data-copilot-data-privacy
sidebar_label: Data privacy
description: The AI assistant data privacy for data pipelines and models
tags:
  - concepts
  - copilot
  - generativeai
  - data privacy
---

The Prophecy team employs top-notch industry practices to safeguard the security of the Prophecy application and maintain the privacy of customer data. Below are just a few components of our comprehensive security strategy and system structure:

- Prophecy **does not** store or send anything from your data plane to any third-party large language model (LLM) providers. Instead, Prophecy makes use of rich metadata to construct the knowledge graph. As a result, Data Copilot can interface with LLM providers while maintaining the privacy of the data itself.
- Prophecy IDE is hosted on secure servers on AWS. All storage systems are encrypted, and all servers are tightly access controlled and audited. Metadata is encrypted in transit at all times.
- Alternatively, Prophecy’s IDE can be installed within an Enterprise network as desired.
- Prophecy’s IDE accesses your environment through a single IP address dedicated to you, allowing you to protect access to your data resources at the network level. The credentials are stored per user, and only a fully authenticated user can access their environment.
- An annual penetration test is performed to validate Prophecy’s posture and identify vulnerabilities. For our latest penetration test report, see the [Pentest Report](https://security.prophecy.io/?itemUid=722b9671-c0d5-4a19-a5f7-0ad8fd81307c&source=click).
- Prophecy maintains SOC-2 compliance as audited by PrescientAssurance.
- Read more details on Prophecy’s security and compliance posture at our [Security Portal](https://security.Prophecy.io/).
