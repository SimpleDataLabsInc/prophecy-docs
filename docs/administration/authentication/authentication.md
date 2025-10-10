---
title: Prophecy authentication
id: authentication
description: Use your identity provider to sign in to Prophecy
tags:
  - SSO
  - authentication
  - admin
---

:::edition Enterprise and Express
Custom authentication is available for the Enterprise and Express Editions only.
:::

When logging in to Prophecy, you can either credentials managed directly by Prophecy, or set up SSO. Prophecy integrates with multiple identity providers to let you log in using your external credentials. You can configure SSO under **Settings > SSO**.

Only [Prophecy cluster admins](docs/administration/user-management/access/role-based-access.md) have permission to view and edit SSO settings.

## Prophecy-managed authentication

By default, Prophecy uses **Prophecy Managed** authentication. This option requires no external identity provider.

- User accounts are created and managed inside Prophecy.
- Passwords are stored securely within Prophecy.
- Use this mode if you don’t have an external SSO requirement.

If you set up SSO after creating users in Prophecy, sign-ins will map to existing users if the sign-in email matches the user email in Prophecy.

## What's next

Learn how to set up different authentication methods in the following pages.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
