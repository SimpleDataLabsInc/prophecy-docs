---
title: Security
id: security
description: Learn about Prophecy's security practices
tags:
  - security
  - network
---

Prophecy employs top-notch industry practices to safeguard application security and maintain the privacy of customer data. Below are just a few components of our comprehensive security strategy and system structure:

- **Built-in data privacy**: While Prophecy code is stored in Git repositories, your data is not. Prophecy only temporarily stores some data used during interactive development in an encrypted cache. Data samples can be optionally stored for observability purposes (execution metrics).
- **Annual testing**: Prophecy performs an annual penetration test to validate its posture and identify vulnerabilities. Prophecy maintains SOC-2 compliance audited by PrescientAssurance.
- **SaaS**: Prophecy is hosted on secure AWS servers. All storage systems are encrypted, and all servers are tightly access-controlled and audited. Data is encrypted in transit at all times.
- **Self-hosted**: Prophecy can be installed on your Virtual Private Cloud (VPC) and can access your environment through a single IP address dedicated to you, allowing you to protect access to your data resources at the network level. The credentials are stored per user, and only a fully authenticated user can access their environment.

Read more details on Prophecy’s security and compliance posture at our Security Portal [here](https://security.prophecy.io/).

## Network configuration

If you or your organization uses a firewall, VPN, or proxy, Prophecy might not work as expected.

| Configuration         | Description                                                                                                                                                                                                                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WebSocket connection  | Prophecy uses a WebSocket connection while talking to certain backend services. Modify your setup to allow this WebSocket connection.                                                                                                                                                                                            |
| Whitelist URLs        | If you are using SaaS, you must whitelist the following URLs in your network:<ul><li>`http://app.prophecy.io/`</li><li>`http://execution.dp.app.prophecy.io/`</li></ul>                                                                                                                                                          |
| Git providers         | Prophecy project code is stored in Git repositories. If you use Git providers within private networks behind firewalls, you must add the Prophecy Control Plane IP address `3.133.35.237` to the private network allow-list or the Git provider [allow-list](https://github.blog/2019-12-12-ip-allow-lists-now-in-public-beta/). |
| Databricks connection | If you limit Databricks network access, you must add the **Prophecy Data Plane IP address** `3.133.35.237` to the Databricks allowed [access list](https://docs.databricks.com/security/network/ip-access-list.html#add-an-ip-access-list).                                                                                      |
