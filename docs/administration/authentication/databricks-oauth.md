---
title: "Databricks OAuth"
id: databricks_oauth
description: Prophecy Databricks OAuth integration
sidebar_position: 6
tags:
  - authentication
  - databricks
  - oauth
---

Prophecy provides Databricks OAuth to align with industry-standard authentication flows. This gives you more granular access control, making it a good alternative to Personal Access Tokens (PATs).

## Use cases supported by Databricks

In Prophecy, you can use Databricks OAuth in two ways:

- [User-to-Machine (U2M)](https://docs.databricks.com/en/dev-tools/auth/oauth-u2m.html). This method is used for **Pipeline development** and **Job configuration**. Any user can authenticate individually via Databricks. In this case, users access data based on their individual identity and the permissions already defined within the Databricks Unity Catalog. No additional credentials are required for this flow.
- [Machine-to-Machine (M2M)](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html). This method is used by Team Admins for **Automation** and **Project deployment**. Authentication is performed using a Service Principal in Databricks, which enables unattended operations (such as automated deployment). The permissions for this flow are determined by the Service Principal’s configuration within the Databricks Unity Catalog.

This integration works with both Spark clusters and SQL warehouses.

<details>
  <summary>Required if you are on a Dedicated SaaS or Self Hosted deployment</summary>

### Register Prophecy as an App Connection in Databricks

First, the Databricks Account Admin needs to complete the following steps **once** for your Prophecy deployment:

1. On Databricks, navigate to **Account Settings > App connections**.
2. Create a new App connection for Prophecy. This process generates Databricks OAuth Application fields on the Prophecy side.
3. Under Client ID, copy your **OAuth Client ID** for the application, and share it with your Prophecy Cluster Admin.
4. Under Client secret, select **Generate a client secret**. Share it with your Prophecy Cluster Admin.
5. Click **Save**.

Then, the Prophecy Cluster Admin has to add the Databricks credentials to Prophecy:

1. Navigate to **Admin Settings > Security**.
2. Under **Databrick OAuth Application (U2M)**, paste the **Client ID** and the **Client Secret** into the respective fields.

</details>

## Configure new Fabrics using OAuth

To configure new Spark and SQL Fabrics within Prophecy using OAuth:

1. When creating a new Databricks Fabric, select **OAuth** under **Credentials**.
2. Enter the **Service Principal Client ID** and **Service Principal Client Secret** into the respective fields to take advantage of M2M authentication.

Visit the Databricks documentation to learn more about creating a [Service Principal](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html).

## Pipeline development and Job configuration

As mentioned previously, members of your team developing Pipelines and Jobs can leverage their own personal identity via OAuth to gain access to all Databricks resources from within Prophecy. That means that whatever permissions they have within Databricks (including permissions governed by Unity Catalog) will be enforced in Prophecy as well.

When you need to connect to Databricks, you will see a login window appear in Prophecy. This includes when you:

- Select a Fabric in the Pipeline IDE
- Select a Fabric in the Jobs IDE
- Access the settings page in the Jobs IDE

<img
src={require("./img/data-bricks-oauth-select-fab.png").default}
alt="Select a Fabric"
width="70%"
/>

When you click **Continue**, a separate browser tab opens, and you can log in to Databricks.

:::note
You only need to perform this authentication periodically, depending on the OAuth timeout settings within Databricks. SaaS deployments automatically use the default time period. If you have a Dedicated SaaS or Self Hosted deployment, your Databricks Account Administrator can adjust the timeout setting.
:::

## Automated Jobs

When you run a job manually, you have the option to run the job as a user or Service Principal. In contrast, **scheduled jobs will always run as the Service Principal** specified in the Fabric, regardless of the job settings.

![Job configuration](img/data-bricks-oauth-job-configuration.png)

In the Airflow and Databricks Job IDE, a warning will display if the Fabric does not contain Service Principal OAuth Credentials.

## Project release and deployment

Your Prophecy Team Admin is the only member of your team able to perform deployment of the Pipelines and jobs created by the team. Prophecy uses a Databricks Service Principal via Databricks OAuth to perform this task on behalf of the Team Admin. The Team Admin is the only user who can use this Service Principal and only for the purpose of deploying team projects.

## Security

Prophecy ensures robust security measures during the OAuth authentication process.

- **Authentication flow.** The authentication process follows a three-step OAuth flow to generate tokens, leveraging Proof Key for Code Exchange (PKCE) to enhance security. Prophecy uses a Prophecy-hosted callback URL to capture and process authorization codes, issuing and securely storing access tokens.
- **Token storage.** Prophecy securely stores the refresh token, which is used to renew itself and obtain new access tokens, ensuring uninterrupted authenticated connectivity to Databricks. Tokens are encrypted before being stored in the database, following the same stringent encryption standards applied to other credentials managed by Prophecy.
