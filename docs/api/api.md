---
title: Prophecy API
id: api
sidebar_class_name: hidden
description: Prophecy metadata available through the Prophecy API
tags:
  - PAT
  - token
  - Personal Access Token
  - graphqlAPI
---

## Prophecy metadata available through the Prophecy API

Prophecy users can access their metadata using the Prophecy API. To access these APIs, users just create a Personal Access Token (PAT). Try accessing the Prophecy [GraphQL Schema](#get-the-prophecy-graphql-schema). One popular use case is to access Prophecy metadata through automated scripts and integrate this data into an existing data visualization system.

## Personal Access Token

A Personal Access Token (PAT) is the token which customer can use for authentication to our API servers.
This will enable customers to use PAT in their scripts and integrate Prophecy seamlessly to their data visualization ecosystem.

### Generate a PAT

Create and Manage API tokens from the Access Tokens tab in the Prophecy UI [Settings](https://app.prophecy.io/metadata/settings) page. Also, check token usage and expiration. Copy the token you have generated, as this will not be displayed on Prophecy UI again. You can use this token for accessing any Read/Write APIs to access Metadata, Lineage, etc.

:::note
These tokens are per user and will inherit all the access from that user.
:::

## Get the Prophecy GraphQL Schema

You can use Prophecy API Endpoints to create a single pane of glass interface for data stewards and engineers to see Pipelines, Datasets, and Lineage.

Use this short guide to get started with Postman by importing Prophecy's GraphQL schema.

1. Install [Postman](https://www.postman.com/downloads/).
2. Create a new GraphQL request.
3. Enter the GraphQL API endpoint as the URL `https://app.prophecy.io/api/md/graphql`.
4. Go to the Headers Tab and enter `X-Auth-Token` for the key and your API token as the value.
5. Go to the Schema Tab and refresh the schema using GraphQL Introspection.
6. Go to the Query Tab to see the schema.

If you need help using the Prophecy APIs, reach out to Prophecy support team for additional guidance and assistance.
