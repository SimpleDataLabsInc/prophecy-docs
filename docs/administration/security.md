---
title: Security
id: security
description: Learn about Prophecy's security practices
tags:
  - security
  - network
---

Prophecy is SOC 2 compliant and safeguards data at every level across the product stack. Whether you use our multi-tenant, cloud-native SaaS platform or a self-hosted deployment, Prophecy is designed to meet the rigorous security requirements that are standard for enterprises.

## Framework

The following is the framework we employ to ensure security with Prophecy.

### Product

Prophecy incorporates robust product security features to safeguard user access, data integrity, and compliance.

- **Authentication**. Authentication methods, including Single Sign-On (SSO) and Multi-Factor Authentication (MFA), ensure only authorized individuals can access the platform.
- **Authorization**. Role-Based Access Control (RBAC) enforces a "least privilege" model, granting users only the permissions they need.
- **Auditing**. Detailed auditing capabilities log all user and admin activities for complete transparency and accountability.
- **Data protection**. Data is protected through encryption at rest and in motion, with compliant key management practices to safeguard sensitive information. While Prophecy code is stored in Git repositories, your data is not.

### AI and LLMs

Prophecy takes a thoughtful approach to AI Large Language Model (LLM) security. While AI is used to make suggestions, it is never used to directly transform data or make business decisions. Prophecy Data Transformation Copilot is classified as a “minimal risk” AI application, in accordance with the EU Artificial Intelligence Act. Prophecy ensures that AI functionality remains transparent, secure, and trustworthy.

:::note
Using an LLM with Prophecy is optional.
:::

### Deployments

Here’s the full range of deployment options:

- **SaaS**. Our highly secure and scalable default offering that employs multi-tenant architecture with multiple layers of logical isolation. Runs on Prophecy’s AWS VPC.
- **Dedicated SaaS**. A single-tenant deployment option for organizations that prefer more isolated infrastructure deployed on a dedicated Prophecy AWS or Azure VPC.
- **Self-hosted**. Deployed in the customer’s own network or Virtual Private Cloud (VPC). Not generally recommended. Contact Prophecy for more information.

With these flexible options, Prophecy ensures every organization can adopt the deployment model that best suits their security and operational requirements.

### Operations

Operational security is a key pillar of Prophecy’s approach. The platform is built on hardened infrastructure designed to withstand external threats. Regular penetration testing ensures that vulnerabilities are identified and addressed promptly, while continuous vulnerability scanning and management further strengthen defenses. These practices ensure that Prophecy remains secure, reliable, and resilient against emerging threats.

## Network configuration

If you or your organization uses a firewall, VPN, or proxy, Prophecy might not work as expected. Review the following table to help you troubleshoot any issues.

| Configuration         | Description                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WebSocket connection  | Prophecy uses a WebSocket connection while talking to certain backend services. Modify your setup to allow this WebSocket connection.                                                                                                                                                                                                                             |
| Whitelist URLs        | If you are using SaaS, you must whitelist the following URLs in your network:<ul class="table-list"><li>`http://app.prophecy.io/`</li><li>`http://execution.dp.app.prophecy.io/`</li></ul>                                                                                                                                                                        |
| Git providers         | Prophecy project code is stored in Git repositories. If you use Git providers within private networks behind firewalls, you must add the Prophecy Control Plane IP address `3.133.35.237` to the private network allow-list or the Git provider [allow-list](https://github.blog/2019-12-12-ip-allow-lists-now-in-public-beta/).                                  |
| Databricks connection | If you limit Databricks network access, you must add the **Prophecy Data Plane IP address** `3.133.35.237` to the Databricks allowed [access list](https://docs.databricks.com/security/network/ip-access-list.html#add-an-ip-access-list). If using Databricks OAuth, you need to ensure network connectivity between your browser and the Databricks workspace. |
