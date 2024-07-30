---
title: Private SAAS
id: private SAAS
description: Private SAAS deployments. Bring Your Own Hardware
sidebar_position: 2
tags:
  - deployment
  - private SAAS
  - cdp
  - hdp
  - mapr
---

Prophecy can be deployed private SAAS for customers who require maximum security or want to run on their own private SAAS
Spark versions (e.g. CDP, HDP, MapR). As for the cloud deployments, also for private SAAS, Prophecy is deployed on a
Kubernetes cluster. With that setup, Prophecy seamlessly integrates with the rest of your infrastructure.

Prophecy is installed through a Prophecy Kubernetes operator, which automatically takes care of the common ops tasks,
like maintenance of the service, health checks, updates, version rollback etc.

![Customer VPC deployment](../img/arch_customervpc.png)

## Requirements

To install Prophecy private SAAS the following infrastructure requirements must be satisfied:

### Cluster

- **Kubernetes Version (minimum):** 1.21
- **Images:** Accessible from a secure container registry available at `gcr.io`. This location can be configured to a customer's internal container registry.

Minimum service requirements:

| Namespace     | Description                                                                 | # Cores  | # RAM | # Block Storage |
| ------------- | --------------------------------------------------------------------------- | -------- | ----- | --------------- |
| Control Plane | Main services (front-end, code editor, metadata, lineage, etc)              | 34 Cores | 68GB  | 150GB           |
| Data Plane    | Services serving as a bridge between Spark and Prophecy UI                  | 6 Cores  | 10GB  | 10GB            |
| Platform      | Backup(Twice-a-day, configurable) , Monitoring, logging services (optional) | 4 Cores  | 8GB   | 200GB           |

\*Platform Services can also run on File-based storage

### Storage

Prophecy requires:

- **Block storage** needs to be available in the Kubernetes cluster
- Kubernetes cluster configured in either **multi-AZ** or **single-AZ** mode. For multi-AZ mode, the block storage has
  to have the volume binding mode set to `waitforfirstconsumer`
- **Dynamic provisioning** of block and file storage
- Prophecy supports any storage class out of the box.

### Role

Prophecy requires:

- `ClusterRole` permissions are optional for CRD installation
- If not available, the customer can create the required CRDs by deploying a single helm chart (shared on request)

### Networking

Prophecy requires:

- **Ingress**

  - Prophecy supports a Prophecy-managed or customer-managed nginx ingress controller. Either Kubernetes `nginx` or official
    `nginx` controllers of any version are supported. We recommend the latest stable version.
  - Non-`nginx` controller configuration is possible, however, not recommended.
  - Prophecy supports Istio-based ingress gateways as well.

- **Certificates** - Wildcard certificates for path-based routing. Certificates are to be managed by the `cert-manager`,
  which can be Prophecy or customer-managed. Certificates are automatically generated for every ingress resource
  created.
- **External-DNS** - To successfully resolve the service host names. Prophecy supports a Prophecy-managed or
  customer-managed `external-dns` or equivalent.

### Authentication

Prophecy supports all of the most popular **authentication providers** as per the [Authentication](../../authentication/authentication.md) documentation.

### Spark

For interactive development, Prophecy requires:

- **Databricks API 1.2** - for Databricks-based Spark deployments or
- **Livy 0.7.x** - for any other Spark-deployment support (e.g. CDP, HDP, MapR, Spark on Kubernetes)

### Airflow

For interactive and jobs deployment to Airflow, Prophecy requires a customer-managed **Airflow deployment version 2.x.x** (latest recommended). **Astronomer**'s managed Airflow offering is supported.

### Logging / Metrics

- Prophecy comes with a built-in **lightweight infrastructure for monitoring** (based on Loki & Grafana)
  and **logging** (based on Prometheus, Grafana and alert-manager, etc.).
- A Customer can optionally connect to it to **redirect the logs and metrics** to their own logging services.

## Scaling

The requirements outlined [above](#cluster) can support up to 25 concurrent developers (users actively developing
pipelines at the same time). To enable more concurrent users, Prophecy supports vertical and horizontal scaling.

Scaling is taken care of by the **Autoscaler** component in our platform. Therefore, e.g., if the number of
users increases by 10 times, the Prophecy deployment can be scaled appropriately.

The following are estimated recommended cluster sizes depending on the number of concurrent users:

| Number of users           | 25       | 50       | 150       |
| ------------------------- | -------- | -------- | --------- |
| CPUs                      | 44 vCPUs | 80 vCPUs | 230 vCPUs |
| Memory                    | 86 GB    | 160 GB   | 460 GB    |
| Disk space (with backups) | 360 GB   | 720 GB   | 1440 GB   |

:::info
Please, note that the recommended resource may vary based on the intensity of the usage of each developer. The numbers
presented above are based on the average recorded usage of Prophecy customers.
:::
