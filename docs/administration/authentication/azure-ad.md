---
title: Microsoft Entra ID SSO
id: azure-ad
description: Sign-in to Prophecy using your Microsoft Entra ID credentials
tags:
  - authentication
  - azure
---

:::edition Express and Enterprise
Available for Express and Enterprise Editions only.
:::

Prophecy supports **direct OAuth integration** with Microsoft Entra ID (formerly Azure Active Directory).

## Step 1: Register a new app

First, you need to log in to the [Azure portal](https://portal.azure.com/) as an administrator and register a new app.

1. In the Azure portal, open the **App registrations** page.
2. Click **New Registration**.
3. Name it `ProphecyEntraIDApp`.
4. Choose the supported account type: **Accounts in this organizational directory only (xxxxx only - Single tenant)**
5. For the Redirect URI, choose **Web** in the dropdown and use:  
   `https://your-prophecy-ide-url.domain/api/oauth/azureadCallback`
6. Click **Register**.

## Step 2 (Optional): Enable automatic team creation

To automatically create new teams in Prophecy via [group mappings](docs/administration/authentication/group-team-mapping.md), follow these steps.

1. In your Prophecy deployment, set the `ENABLE_AUTO_TEAM_CREATION` flag to `true`.
1. Open the Azure portal.
1. Open the app that you registered in [Step 1](#step-1-register-a-new-app).
1. Under **Manage**, select **Token configuration**.
1. Select **Add groups claim**.
1. Select the **Groups assigned to the application** checkbox.

   - To change the groups assigned to the application, select the corresponding application from the **Enterprise applications** list. Select **Users and groups** and then **Add user/group**. Select the group(s) you want to add to the application from **Users and groups**.

1. Click **Save**.

:::note
These steps are also listed in the [Configure groups optional claims](https://learn.microsoft.com/en-us/entra/identity-platform/optional-claims?tabs=appui#configure-groups-optional-claims) section of the Microsoft documentation.
:::

## Step 3: API Permission

Next, go to **API permissions** on the left-hand side and add this set of API permissions:

<br /><img width="799" alt="Screenshot 2022-06-13 at 9 57 16 PM" src="https://user-images.githubusercontent.com/59466885/173400731-acb084df-31a7-4858-b6ba-f395e888e60e.png" />

## Step 4: Certificates and Secrets

Then, go to **Certificates and Secrets**, add a new secret, and note down the value of this secret.

## Step 5: Client ID

Finally, click on **Overview** on the left-hand side and note down the Application (client) ID.

## Step 6: Configure Prophecy to connect with Microsoft Entra ID

1. Log in to Prophecy as an admin user.
2. Navigate to the **SSO** tab of the Prophecy **Settings** page.
3. Under **Authentication Provider**, select Azure Active Directory.
4. Enter the **Client ID** and the **Client Secret** at minimum.
5. Click **Save**.

Once you have logged out, you will be able to see a **Login with Azure Active Directory** option. Now, your Azure AD users will be able to login to Prophecy with this option.
