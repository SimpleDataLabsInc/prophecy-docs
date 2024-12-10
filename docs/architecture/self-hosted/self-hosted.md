---
title: Self Hosted
id: self-hosted
description: Self Hosted
tags:
  - deployment
  - installation
  - self-hosted
---

Prophecy is written as a set of microservices that run on a Kubernetes cluster. Our recommended platforms to run Kubernetes are:

- Amazon Web Services managed EKS
- Microsoft Azure managed AKS
- Google Cloud Platform managed GKE

There are a couple of ways to install the self-managed version of Prophecy:

- Installation via [Helm](https://helm.sh/docs/intro/quickstart/).
- Installation via Marketplaces.

Once Prophecy is installed, you'll have to manually perform upgrades, backups, restores, etc.

### Spark

After installation, Prophecy requires the following for interactive development:

- **Databricks API 1.2** for Databricks-based Spark deployments, or
- **Livy 0.7.x** for any other Spark deployment support (like CDP, HDP, MapR, Spark on Kubernetes).

### Airflow

For interactive and jobs deployment to Airflow, Prophecy requires a customer-managed **Airflow deployment version 2.x.x** (latest recommended). **Astronomer**'s managed Airflow offering is supported.

### Logging / Metrics

- Prophecy comes with a built-in **lightweight infrastructure for monitoring** (based on Loki & Grafana)
  and **logging** (based on Prometheus, Grafana and alert-manager, etc.).
- You can optionally **redirect the logs and metrics** to your own logging services.

To learn more about installation methods and management, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
