---
title: Databricks OAuth
id: databricks-oauth
slug: /databricks-oauth-authentication
description: Prophecy Databricks OAuth integration
tags:
  - authentication
  - databricks
  - oauth
---

Prophecy provides Databricks OAuth to align with industry-standard authentication flows. This gives you more granular access control and better security, making it a good alternative to Personal Access Tokens (PATs). This integration works with both Spark clusters and SQL warehouses.

## Requirements

To leverage Databricks OAuth in your Prophecy deployment, you need:

- Prophecy 3.4.3.1 or later.
- An app connection between Databricks and Prophecy. This connection is set up by default in [SaaS](https://app.prophecy.io/).

  :::info
  For Dedicated SaaS and self-hosted deployments, [follow the steps below](#app-connection). Prior to performing this one-time registration process, users will see the OAuth option in fabrics **but will be unable to use it.**
  :::

## Set up app connection {#app-connection}

Follow these steps to register Prophecy as an app connection in Databricks.

### Create a new app connection in Databricks

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

### Add credentials to Prophecy

Then, the Prophecy cluster admin has to add the Databricks credentials to Prophecy:

1. Navigate to **Admin Settings > Security**.

1. Under **Databricks OAuth Application (U2M)**, paste the **Client ID** and the **Client Secret** into the respective fields.

1. Finally, **the Prophecy Kubernetes cluster must be restarted** to enact these changes.

![Security settings in Prophecy](./img/databricks-oauth-admin.png)

## Use cases supported by Databricks

In Prophecy, you can use Databricks OAuth in two ways: either using user identities or a [service principal](https://docs.databricks.com/aws/en/admin/users-groups/service-principals).

| Type                                                                                          | Identity                 | Use Cases                                        | Behavior                                                                                                | Notes                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [User-based OAuth](https://docs.databricks.com/en/dev-tools/auth/oauth-u2m.html) (U2M)        | Individual user accounts | Pipeline development, job development            | Executes actions with the user's Databricks permissions. Users sign in via the Databricks login screen. | Requires periodic login based on Databricks OAuth timeout settings. Default timeouts are used in SaaS, but are configurable in Dedicated SaaS/self-hosted deployments. |
| [Service Principal OAuth](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html) (M2M) | Service principal        | Project deployment, scheduled pipeline execution | Authenticates using service principal credentials. All scheduled jobs run as the service principal.     | Required for automation and CI/CD. You will see a warning if service principal credentials are missing.                                                                |

:::note
The minimum level of access that your service principal requires (including access to clusters, tables, etc.) will vary per use case.
:::

## Fabric setup

To learn how to configure Databricks OAuth for different fabric types, see:

- [Databricks connection in a Prophecy fabric](/administration/fabrics/prophecy-fabrics/connections/databricks)
- [Databricks connection in a Spark fabric](/administration/fabrics/Spark-fabrics/databricks/#credentials)
- [Databricks connection in a SQL fabric](/administration/fabrics/sql-fabrics/databricks)

## Security

Prophecy ensures robust security measures during the OAuth authentication process, following best practices documented by Databricks. For example:

- The authentication process follows a three-step OAuth flow to generate tokens, leveraging Proof Key for Code Exchange (PKCE) to enhance security. Prophecy uses a Prophecy-hosted callback URL to capture and process authorization codes, issuing and securely storing access tokens.
- Prophecy securely stores the refresh token, which is used to renew itself and obtain new access tokens, to ensure uninterrupted authenticated connectivity to Databricks. Tokens are encrypted before being stored, following the same stringent encryption standards applied to other credentials managed by Prophecy.
