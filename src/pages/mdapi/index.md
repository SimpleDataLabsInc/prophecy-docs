---
title: Prophecy Metadata API
id: mdapi
description: Metadata API
sidebar_position: 1
tags: []
---

Please note that this document is subject to change at any time without notice.

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

1. [Type](./mdapi/types)s
2. [Enum](./mdapi/enum)s
3. [Input](./mdapi/input)s
