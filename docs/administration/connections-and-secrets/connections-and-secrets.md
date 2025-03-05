---
title: Connections and secrets
id: connections-and-secrets
description: Connect to external data providers using secrets
sidebar_position: 1
sidebar_class_name: hidden
tags: [connections, secrets, vault]
---

Connections let you integrate your data from external data providers right in the Prophecy platform. This way, you can browse and search for your data natively while developing a project.

When you create connections, you'll always need to provide credentials to authenticate the connection. This is why Prophecy lets you create **secrets** that securely encrypt your sensitive information. These secrets can be used in your connections or throughout your pipelines (in gems, for example).

We provide a Prophecy-hosted secret manager, as well as other [secret providers](docs/administration/connections-and-secrets/secret-providers.md) such as Databricks.

## What's next

To learn more about how to set up connections and secrets, explore the following pages.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
