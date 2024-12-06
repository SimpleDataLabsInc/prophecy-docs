---
title: "Installation and Maintenance"
id: installation-maintenance
description: Installation and Maintenance
tags:
  - deployment
  - installation
---

Prophecy is written as a set of microservices that run on a Kubernetes cluster. For Prophecy, the most commonly used platforms to run Kubernetes are AWS, Azure, and GCP.

There are a couple of ways to install the self-managed version of Prophecy:

- Installation via [Helm](https://helm.sh/docs/intro/quickstart/).
- Installation via Marketplaces.

Once Prophecy is installed, you'll have to manually perform upgrades, backups, restores, etc.

To learn more about installation methods and maintenance, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
