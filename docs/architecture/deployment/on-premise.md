---
title: "On premise"
id: on-premise
description: Schema, meet Data.
sidebar_position: 2
---

Prophecy can be deployed on-premise for customers who require maximum security or want to run on their own on-premise
Spark versions (e.g. CDP, HDP, MapR). As for the cloud deployments, also for on-premise, Prophecy is deployed on a
Kubernetes cluster. With that setup, Prophecy seamlessly integrates with the rest of your infrastructure.

Prophecy is installed through a Prophecy kubernetes operator, which automatically takes care of the common ops tasks,
like maintenance of the service, health checks, updates, version rollback etc.

<img src={require('./img/arch_customervpc.png').default} alt="Example banner" width="75%" />

## Requirements

To install Prophecy on-premise the following infrastructure requirements must be satisfied

### Cluster

- **Kubernetes Version (minimum): ** 1.14
- **Images: ** Accessible from a secure container registry available at gcr.io. This location can be configured to
  customer's internal container registry.

Minimum service requirements:

| Namespace     | Description                                                    | # Cores  | # RAM | # Block Storage |
|---------------|----------------------------------------------------------------|----------|-------|-----------------|
| Control Plane | Main services (front-end, code editor, metadata, lineage, etc) | 31 Cores | 62GB  | 150GB           |
| Data Plane    | Services serving as a bridge between Spark and Prophecy UI     | 8 Cores  | 15GB  | 40GB            |
| Backup        | Twice-a-day snapshot-based backups service (configurable)      | 1 Core   | 2GB   | 90GB            |
| Search        | Metadata search engine and storage                             | 6 Proces | 12GB  | 90GB            |
| ProService    | Prophecy maintance service used to e.g. update the platform    | 3 Cores  | 6GB   | 8GB             |
| Platform      | Monitoring, logging services (optional)                        | 16 Cores | 36GB  | N / A           |

### Storage

Prophecy requires:

- Both **block and file storage** available in the kubernetes cluster
- Kubernetes cluster configured in either **multi-AZ** or **single-AZ** mode. For multi-AZ mode, the block storage has
  to have
  volume binding mode as `waitforfirstconsumer`
- **Dynamic provisioning** of block and file storage
- Prophecy supports any storage-class out of the box.

### Role

Prophecy requires:

- `ClusterRole` permissions are optional for CRD installation
- If not available, the customer can create the required CRDs, by deploying of a single helm chart (shared on request)

### Networking

Prophecy requires:

- **Ingress** - Prophecy supports a Prophecy-managed or customer-managed nginx ingress controller. Either k8s nginx or
  official nginx controllers are supported of any version (the latest stable recommended).
    - Non-nginx controller configuration is possible, however, not recommended.
- **Certificates** - Wildcard certificates for path-based routing. Certificates are to be managed by the `cert-manager`,
  which can be Prophecy or customer-managed. Certificates are automatically generated for every ingress resource
  created.
- **External-DNS** - To successfully resolve the service host names.

### Authentication

Prophecy supports all most popular **authentication providers** as
per [Authentication](/architecture/authentication/) documentation.

### Spark

For interactive development, Prophecy requires:

- **Databricks API 1.2** - for Databricks-based Spark deployments or
- **Livy 0.7.x** - for any other Spark-deployment support (e.g. CDP, HDP, MapR, Spark on Kubernetes)

For jobs deployment, Prophecy requires

### Airflow

For interactive and jobs deployment to Airflow, Prophecy requires a customer-managed **Airflow deployment version
2.x.x** (latest recommended). **Astronomer**'s managed Airflow offering is supported.

### Logging / Metrics

- Prophecy comes with its own built-in **lightweight infrastructure for monitoring** (based on Elasticsearch & Kibana)
  and
  **logging** (based on Prometheus, Grafana and alert-manager, etc.).
- Customer can connect to it, to **redirect the logs and metrics**, to their logging services (optionally).

## Scaling

The requirements outlined [above](#cluster) can support up-to 25 concurrent developers (folks actively developing
pipelines at the same time). To enable more concurrent users, Prophecy supports vertical and horizontal scalling and
the following estimates are available:

It is taken care of by the **Autoscaler** component in our platform. The initial pod size specification that we provided
is for a single pod only, that can be used by around 10 users, depending on the usage. Therefore, e.g., if the number of
users increases by 10 times, the Prophecy deployment will automatically scale appropriately and require up to 10 times
the amount of resources (pod replicas).

For 150 concurrent users, around 640 CPUs, 1010GB RAM, and 1TB would be required (in practice much less, due to
most of the containers running lean).

| Number of users           | 30        | 90       | 150       |
|---------------------------|-----------|----------|-----------|
| CPUs                      | 60 vCPUs  | 90 vCPUs | 200 vCPUs |
| Memory                    | 256 GB    | 512 GB   | 1,280 GB  |
| Disk space (with backups) | 500 GB    | 1 TB     | 2 TB      |

Please, note that the recommended resource may vary based on the intensity of the usage of each developer. The numbers
presented above are based on the average recorded usage of the Prophecy customers. 
