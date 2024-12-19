---
title: "Authentication"
sidebar_position: 2
id: authentication
description: >
  Prophecy support for identity providers for authentication and authorization
tags:
  - SSO
  - authentication
  - admin
---

Prophecy integrates with identity providers to let you log in using your external credentials.
When accessing execution infrastructure (including Spark, schedulers, storage, and other cloud resources), Prophecy securely passes your identity in compliance with your existing authorization mechanisms.

We currently support the following options for Prophecy login:

| Method                 | Description                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| Prophecy Managed       | Use credentials managed directly by Prophecy.                                                             |
| LDAP                   | Authenticate via LDAP, integrating with your organization's directory services.                           |
| SAML                   | Leverage SAML to log in with identity providers such as Google, Okta, Azure Active Directory, and others. |
| Azure Active Directory | Use Microsoft's cloud-based identity and access management service for authentication.                    |
| Google                 | Log in using your Google account credentials.                                                             |

:::info
Only cluster admins on self-hosted environments have permission to view and edit SSO settings.
:::

If you require some other authentication mechanism, please reach out to our team.

## What's next

To learn more about with authentication with Prophecy, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
