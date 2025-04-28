---
title: User settings
id: settings
description: Learn about the different Prophecy settings to configure
tags:
  - settings
  - admin
  - user
  - teams
---

Prophecy settings are applied at the user level. You can change settings to:

- Update your personal user profile.
- Manage your teams and team members.
- Add, edit, or delete Git credentials from your environment.
- Set up authentication.
- View the current version of your Prophecy environment.

Navigate to settings by clicking `...` in the left navigation menu and the **gear** icon.

![access-settings](img/Access_Settings_page.png)

:::note
Prophecy cluster admins will see an additional **Admin** tab in settings.
:::

## Settings tabs

### Info

In the **Info** tab, you can:

- Update your name
- Update your company
- Change your password
- Delete your account

:::caution
Deleting an account is irreversible. Once you delete an account, all associated data will be permanently removed from Prophecy, including personal teams, projects, and fabrics.
:::

### Teams

In the **Team** tab, you can:

- View teams that you are included in
- Create new teams
- View users in your teams
- Add users to or delete users from your teams
- Modify user roles (for example, making a user a team admin)

### Git

In the **Git** tab, you can:

- Review your existing Git credentials (Prophecy-Managed Git is present by default)
- Add new Git credentials
- Edit or delete existing Git credentials

These credentials can be used during project creation. Git connections are required to store Prophecy project metadata and code.

### Access Token

In the **Access Token** tab, you can:

- Review active or inactive Personal Access Tokens
- Create new Personal Access Tokens to access Prophecy APIs securely

### About

The **About** tab displays the current version of the Prophecy deployment.

## What's next

Learn more about our [settings for self-managed Prophecy administration](docs/administration/self-hosted/self-hosted.md).
