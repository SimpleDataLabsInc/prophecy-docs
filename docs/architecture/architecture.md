---
title: Architecture
id: architecture
description: Describing the architecture of Prophecy and how it can integrate into your use cases
tags: []
---

Prophecy deployment is simple and flexible. Prophecy is written as a set of Microservices that run on Kubernetes and is
built to be multi-tenant.

| Deployment Model                                                      | Customers Who Prefer it                                         |
| --------------------------------------------------------------------- | --------------------------------------------------------------- |
| [Prophecy Managed SaaS](./deployment#public-saas)                     | Midsize Companies and Startups                                  |
| [Private SaaS (Customer VPC)](./deployment#private-saas-customer-vpc) | Enterprises in the Cloud                                        |
| [On-Premise](./deployment#on-premise-deployment)                      | Large Enterprises in the middle of cloud migration (rare cases) |

## What's next

To learn more about Prophecy's architecture, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
