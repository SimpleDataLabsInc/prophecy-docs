---
title: Prophecy API
id: prophecyAPI
description: Prophecy metadata available through the Prophecy API
sidebar_position: 6
tags:
  - PAT
  - token
  - Personal Access Token
  - graphqlAPI
---

## Prophecy metadata available through the Prophecy API

Prophecy users can access their metadata using the Prophecy API. To access these APIs, users just create a Personal Access Token (PAT).
One popular use case is to access the Prophecy metadata through automated scripts and integrate this data into an existing data visualization system. Use the Prophecy API to create a single pane of glass interface for data stewards and engineers to see pipelines, datasets, Lineage, etc.

## Personal Access Token (PAT)

A Personal Access Token(PAT) is the token which customer can use for authentication to our API servers.
This will enable customers to use PAT in their scripts and integrate Prophecy seamlessly to their data visualization ecosystem.

## Generate a PAT

Create and Manage API tokens from the Access Tokens tab in [Settings](https://app.prophecy.io/metadata/settings)) page. You can create, delete, check usage, expiry etc of the tokens from this page. Please copy the token you have generated, as this will not be displayed on Prophecy UI again.
You can use this token for Accessing any Read/Write APIs to access Metadata, Lineage , etc.

Please note, These tokens are per user and will inherit all the Access from that user.

![AccessToken](./img/PAT.gif)

:::info
**Coming Soon**
We will soon launch a detailed Documentation and a playground to try these APIs
:::
