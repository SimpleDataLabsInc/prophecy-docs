---
title: Prophecy Metadata API
id: mdapi
draft: true
description: Metadata API
tags: []
---

Please note that this document is subject to change at any time without notice.

## Overview

For an overview of the concepts used in the Metadata API, see [this blog post](https://www.prophecy.io/blog/prophecyhub-metadata-re-invented-with-git-graphql-for-data-engineering)

## Request URL

There are two components to the request URL: The base and the path.

The base will depend on the endpoint that you use to access Prophecy, i.e `https://app.prophecy.io/`.

The path is always the same for all deployments: `api/md/graphql`.

## Authentication

Authentication with the Prophecy GraphQL API is via including a Prophecy API token with the appropriate header.

## Schema

The base schema for all GraphQL queries is:

```
schema {
    query: Query
    mutation: Mutate
}
```

There are three kinds of entites in use in the API:

1. [Types](/mdapi/types)
2. [Enums](/mdapi/enums)
3. [Inputs](/mdapi/inputs)
