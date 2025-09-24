---
title: Google SSO
id: google-sso
description: Sign-in to Prophecy using your Google account credentials
tags: [authentication, sso]
---

Prophecy supports direct OAuth integration with **Google Identity**.

## Configuration steps

First, create a new OAuth client in Google.

1. Create an **OAuth client** in Google Cloud Console.
1. Collect the **Client ID** and **Client Secret**.
1. Add Prophecy’s **Redirect URI** to the OAuth client.

Next, add these values in Prophecy.

1. Log in to Prophecy as a cluster admin.
1. Navigate to **Settings > SSO**.
1. Under **Authentication Provider**, select **Google**.
1. Fill in the **Client ID** and **Client Secret**.
1. Click **Save** at the bottom of the page to save your changes.

This allows users to sign in to Prophecy with their Google Workspace credentials.
