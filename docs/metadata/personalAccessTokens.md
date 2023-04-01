---
title: Personal Access Tokens
id: personalAccessTokens
description: Personal Access Tokens (PAT) support
sidebar_position: 5
tags:
  - PAT
  - token
  - Personal Access Token
---

A Personal Access Token(PAT) is the token which customer can use for authentication to our API servers.
This will enable customers to use PAT in their scripts and integrate Prophecy seamlessly to their data visualization ecosystem.
They would be able to access Prophecy metadata through APIs and create a single pane of glass interface for their data stewards and engineers to see pipelines, datasets, Lineage, etc.

## Generate an API token

Create and Manage API tokens from the Access Tokens tab in [Settings](https://app.prophecy.io/metadata/settings)) page. You can create, delete, check usage, expiry etc of the tokens from this page. Please copy the token you have generated, as this will not be displayed on Prophecy UI again.
You can use this token for Accessing any Read/Write APIs to access Metadata, Lineage , etc.

Please note, These tokens are per user and will inherit all the Access from that user.

![AccessToken](./img/PAT.gif)

:::info
**Coming Soon**
We will soon launch a detailed Documentation and a playground to try these APIs
:::
