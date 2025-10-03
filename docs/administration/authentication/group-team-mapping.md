---
title: Group-to-team mapping
id: group-team-mapping
description: Automatic team creation and user role assignment based on identity provider groups
tags: [authentication, roles]
---

:::edition Express and Enterprise
Available for Express and Enterprise Editions only.
:::

Prophecy supports automatic team creation and user role assignment based on identity provider groups using either SCIM or LDAP. To learn about roles in Prophecy, visit [Role-based access](/administration/rbac).

## Overview

When a user signs in through an identity provider, Prophecy checks their group memberships and uses naming conventions to:

- Create teams in Prophecy
- Assign users to those teams
- Set the user's roles

This applies to both **SCIM** and **LDAP**-based identity systems.

## Standard naming conventions

By default, Prophecy supports the following group naming patterns.

| Group Name Pattern | Role in Prophecy                |
| ------------------ | ------------------------------- |
| `<teamname>-user`  | Member of the `<teamname>` team |
| `<teamname>-admin` | Admin of the `<teamname>` team  |
| `prophecy-admin`   | Prophecy cluster admin          |

## Custom naming conventions

If your organization uses more complex naming schemes (for instance, with prefixes or suffixes), Prophecy can still infer team names and assign roles appropriately. The following custom patterns are supported.

| Group Name Pattern                                   | Example                               | Role in Prophecy               |
| ---------------------------------------------------- | ------------------------------------- | ------------------------------ |
| `(<prefix>-)prophecy-cluster-admin(-<suffix>)`       | `corp-prophecy-cluster-admin`         | Prophecy cluster admin         |
| `<prefix>-<teamname>-admin`                          | `corp-finance-admin`                  | Admin of the **finance** team  |
| `<prefix>-<teamname>-user`                           | `corp-finance-user`                   | Member of the **finance** team |
| `<prefix>-<teamname>-prophecy-team-admin(-<suffix>)` | `corp-sales-prophecy-team-admin-emea` | Admin of the **sales** team    |
| `<prefix>-<teamname>-prophecy-team(-<suffix>)`       | `corp-sales-prophecy-team-emea`       | Member of the **sales** team   |

Prophecy will automatically strip the `<prefix>` and `<suffix>` from group names to determine the team name. The prefix and suffix will **not** appear in the Prophecy UI.

## Required configurations

To enable automatic team creation using custom naming schemes, you must configure the following environment variables for your deployment.

:::info
Self-hosted customers can implement these configurations themselves. Dedicated SaaS customers need to reach out to us to set up these configurations.
:::

### For LDAP

To use automatic team creation, enable the following flag.

```
ENABLE_AUTO_TEAM_CREATION: "true"
```

This tells Prophecy to dynamically create teams when matching LDAP group names.

### For both SCIM and LDAP

To identify and remove prefixes from team names in Prophecy, add the prefix to the `PROPHECY_IDP_TEAMNAME_STRIP_REGEX` variable.

```
PROPHECY_IDP_TEAMNAME_STRIP_REGEX: "prefix-"
```

Replace `prefix-` with your actual prefix (for example, `corp-`, `info-`, etc.). Prophecy will strip this from group names before creating or matching teams.

:::tip
You can use regular expressions for the prefix value.
:::
