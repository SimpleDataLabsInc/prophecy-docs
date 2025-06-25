---
title: Metadata API
id: metadata
sidebar_class_name: hidden
slug: /api-internal/metadata
description: Retrieve metadata with the GraphQL API
tags: []
---

Prophecy users can access their metadata using the Prophecy API. To access these APIs, users just create a Personal Access Token (PAT). Try accessing the Prophecy [GraphQL Schema](#get-the-prophecy-graphql-schema). One popular use case is to access Prophecy metadata through automated scripts and integrate this data into an existing data visualization system.

## Get the Prophecy GraphQL Schema

You can use Prophecy API Endpoints to create a single pane of glass interface for data stewards and engineers to see pipelines, datasets, and lineage.

Use this short guide to get started with Postman by importing Prophecy's GraphQL schema.

1. Install [Postman](https://www.postman.com/downloads/).
2. Create a new GraphQL request.
3. Enter the GraphQL API endpoint as the URL `https://app.prophecy.io/api/md/graphql`.
4. Go to the Headers Tab and enter `X-Auth-Token` for the key and your API token as the value.
5. Go to the Schema Tab and refresh the schema using GraphQL Introspection.
6. Go to the Query Tab to see the schema.

If you need help using the Prophecy APIs, reach out to Prophecy support team for additional guidance and assistance.
