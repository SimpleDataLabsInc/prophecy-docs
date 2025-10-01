---
title: OAuth app registrations
id: oauth-setup
slug: /oauth-setup
description: Create app registrations in Prophecy for OAuth setup
tags:
  - authentication
  - oauth
---

Configure OAuth authentication for Prophecy by creating app registrations for supported identity providers.

## Prerequisites

Before you configure OAuth in Prophecy, ensure you have:

- Cluster admin access to Prophecy
- An OAuth application created with your identity provider. See [Create provider-side OAuth applications](#create-provider-side-oauth-applications).
- The client ID and client secret from your provider's OAuth application

## Supported providers

Prophecy supports OAuth authentication with the following providers:

- **Databricks**: Authenticate with Databricks workspaces
- **Google**: Authenticate with Google Cloud services
- **ID Anywhere**: Authenticate with custom identity providers

## Create an app registration

To add a new OAuth app registration:

1. Sign in to Prophecy as a cluster admin.

2. In the navigation menu, go to **Settings** > **Admin**.

3. Select the **Security** tab.

4. Click **Add App Registration**.

5. Configure the registration settings:

   | Field                  | Description                                                                                                                                                                                            | Required         |
   | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
   | Provider               | Select your identity provider (Databricks, Google, or ID Anywhere).                                                                                                                                    | Yes              |
   | Default for Provider   | When enabled, this registration becomes the default OAuth configuration for fabrics for the selected provider. The default is always used for Spark fabrics and cannot be changed at the fabric level. | No               |
   | Name                   | A descriptive name to identify this registration. Useful when managing multiple registrations for the same provider.                                                                                   | Yes              |
   | App Client ID          | The client ID from your OAuth application.                                                                                                                                                             | Yes              |
   | App Client Secret      | The client secret from your OAuth application.                                                                                                                                                         | Yes              |
   | Token Lifetime         | Override the default token lifetime set by your provider.                                                                                                                                              | No               |
   | Authorization Endpoint | The authorization URL for your identity provider.                                                                                                                                                      | ID Anywhere only |
   | Scopes                 | Space-separated list of OAuth scopes. Required for ID Anywhere. Optional for Databricks and Google to override default scopes.                                                                         | Depends          |

6. Click **Save**.

:::info

Each provider requires specific OAuth scopes:

- **Databricks**: See [Custom app integration scopes](https://docs.databricks.com/api/account/customappintegration/create) in the Databricks documentation
- **Google**: See [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes) in the Google documentation
- **ID Anywhere**: You must specify the required scopes manually, as Prophecy cannot add default scopes for custom providers

:::

## Create provider-side OAuth applications

Before adding an app registration in Prophecy, you need to create the corresponding OAuth application with your provider.

### Databricks

First, a Databricks [account admin](https://docs.databricks.com/en/admin/index.html#what-are-account-admins) needs to complete the following steps **once** for your Prophecy deployment:

1. On Databricks, navigate to **Account Settings > App connections** in your account console.
1. [Create a new App connection](https://docs.databricks.com/en/integrations/enable-disable-oauth.html#enable-custom-oauth-applications-using-the-databricks-ui) for Prophecy. Ensure that:

   - Access scopes are set to **ALL APIs**.
   - The redirect URL contains the following URLs:

     ```
     https://<your_prophecy_url>/api/databricks/oauthredirect
     https://<your_prophecy_url>/metadata/oauthCallback
     ```

1. This process generates Databricks OAuth Application fields on the Prophecy side.
1. Under Client ID, copy your **OAuth Client ID** for the application, and share it with your Prophecy Cluster Admin.
1. Under Client secret, select **Generate a client secret**. Share it with your Prophecy Cluster Admin.
1. Click **Save**.

### Google Cloud

Create an OAuth 2.0 client in Google Cloud Console:

1. Sign in to [Google Cloud Console](https://console.cloud.google.com).
2. Select your project.
3. Go to **APIs & Services** > **Credentials**.
4. Click **Create Credentials** > **OAuth client ID**.
5. Configure the OAuth consent screen if prompted.
6. Select the application type and configure authorized redirect URIs.
7. Save the generated client ID and secret for use in Prophecy.

For detailed instructions, see [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849) in the Google Cloud documentation.

### ID Anywhere

For custom identity providers, consult your provider's documentation to:

- Create an OAuth 2.0 application or client.
- Configure the authorization endpoint.
- Define the required scopes.
- Generate client credentials.
- Set up redirect URIs to point to your Prophecy instance.
