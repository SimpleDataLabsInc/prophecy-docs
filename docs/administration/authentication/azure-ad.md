---
title: "Azure Active Directory"
id: azure-ad
description: Authentication using Azure Active Directory
sidebar_position: 3
tags:
  - authentication
  - active-directory
  - azure
---

This document describes how to configure Azure Active Directory for Prophecy authentication.

## Register a new Azure App

First, you need to log in to the [Azure portal](https://portal.azure.com/) as an administrator and register a new app.

1. In the Azure portal, open the **App registrations** page.
2. Click **New Registration**.
3. Name it `ProphecyAzureADApp`.
4. Choose the supported account type: **Accounts in this organizational directory only (xxxxx only - Single tenant)**
5. For the Redirect URI, choose **Web** in the dropdown and use:  
   `https://your-prophecy-ide-url.domain/api/oauth/azureadCallback`
6. Click **Register**.

## API Permission

Next, go to **API permissions** on the left-hand side and add this set of API permissions:

<br /><img width="799" alt="Screenshot 2022-06-13 at 9 57 16 PM" src="https://user-images.githubusercontent.com/59466885/173400731-acb084df-31a7-4858-b6ba-f395e888e60e.png" />

## Certificates and Secrets

Then, go to **Certificates and Secrets**, add a new secret, and note down the value of this secret.

## Client ID

Finally, click on **Overview** on the left-hand side and note down the Application (client) ID.

## Configure Prophecy to connect with Azure Active Directory

1. Log in to Prophecy as an admin user.
2. Navigate to the **SSO** tab of the Prophecy **Settings** page.
3. Under **Authentication Provider**, select Azure Active Directory.
4. Enter the **Client ID** and the **Client Secret** at minimum.
5. Click **Save**.

Once you have logged out, you will be able to see a **Login with Azure Active Directory** option. Now, your Azure AD users will be able to login to Prophecy with this option.
