---
title: Prophecy APIs
id: index
description: Explore reference documentation for various Prophecy APIs
tags:
  - PAT
  - api
---

Prophecy provides a set of APIs for interacting with your Prophecy deployment. Use these APIs to trigger pipeline runs, fetch metadata, integrate Prophecy with external systems, and more.

## Getting started

To start using Prophecy APIs, understand the following.

- You must use a valid API Key to send requests to the API endpoints. Jump to [Access Tokens](#access-tokens) for instructions.
- Prophecy has an additional set of APIs that you can request through Prophecy Support. Reach out to [Support](mailto:support@prophecy.io) to learn more.

## Access Tokens

Prophecy uses your Personal Access Token (PAT) for authentication with our API servers. To manage your access tokens:

1. Open your Prophecy environment.
1. At the bottom of the left sidebar, click the **...** menu.
1. Click the **gear** icon to open Settings.
1. Navigate to the **Access Tokens** tab.

Here, you will see any PATs you have previously created. You can also find information such as creation date, expiration status, and time of last use.

:::note
Access tokens are per user. API permissions are scoped to your user permissions.
:::

### Generate an access token

To generate a new access token:

1. Open the **Access Tokens** tab in Settings.
1. Click **Generate Token**.
1. Name your token.
1. Choose an expiration date from the dropdown menu.
1. Click **Create**.
1. Copy your newly-generated token before closing the dialog. You will not be able to access the token value again.
