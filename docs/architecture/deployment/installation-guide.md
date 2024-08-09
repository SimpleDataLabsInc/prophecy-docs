---
title: "Installation Guide"
id: installation-guide
description: Installation Guide
sidebar_position: 2
tags:
  - deployment
  - installation
---

Prophecy installation requires a Kubernetes cluster. Its installation and upgrades are managed by our infrastructure management plane called `Athena`.
Athena is installed through helm chart which internally deploys Prophecy Kubernetes Operator to manage different Prophecy services.

:::caution

The following documentation pertains to the Helm installer for Prophecy version 3.3 and above. If you're considering migrating your current Helm installer chart to this version, we encourage you to reach out to the Prophecy support team for personalized assistance and guidance.

:::

## Requirements

To install Prophecy, the following infrastructure requirements must be satisfied:

- **Kubernetes Version (minimum):** 1.21
- **Helm** client to install Prophecy Helm chart
- **Container Registry:** Prophecy publishes all its docker images in GCR(Google Container Registry: `gcr.io/prophecy-share`).
  Kubernetes cluster should be able to pull images from here. Alternatively, customers can use their internal container registry
  which needs to be pre-populated with images from GCR by them. Details of the images to be pulled are given below.
- **Namespace** in Kubernetes cluster to install Prophecy
- **CRDs installation:** Since the installation is primarily done by Prophecy Kubernetes operator which works on a custom resource,
  CRDs installation is a must before the rest of the components can be installed. Note that only this operation requires a cluster-wide role.
- **Persistent Storage with Dynamic Provisioning:** A few Prophecy services require persistent storage. With Prophecy Operator not expecting a cluster-wide role for installation,
  it becomes necessary to have dynamic provisioning enabled for persistent volumes (e.g. `gp2`)
- **Ingress Controller:** To expose a few services externally on a hostname/FQDN, Prophecy installs its own managed Nginx ingress controller.
  If the Kubernetes cluster already has one running we can leverage that. Note that the Nginx controller service is exposed via a `LoadBalancer` type
  service and hence the creation of external `LoadBalancer`s should be allowed within the cluster.
- **Hostname Resolution and SSL Certificate:** Installed Prophecy services can either be exposed on Prophecy's domain `*.cloud.prophecy.io` or via a
  customer-owned domain. For Prophecy's domain, we are responsible for ensuring the resolution of the hostname and managing SSL certs (issued by Let's Encrypt) via our
  Controlcenter service hosted in our infrastructure. For customer-owned domains, the customer is responsible for managing SSL certs and
  hostname resolution (by making entries in a DNS zone).
- Connectivity from Kubernetes cluster to **Spark Environment** (Databricks, Livy, etc.) and vice-versa.

## Installation Instructions

As mentioned above, Prophecy is installed via Helm chart called the Prophecy-installer. The following are the commonly used values which can be configured for this helm chart. The helm chart values can be broadly classified into 5 different sections

1. **Athena:** Configurations which are used to configure the management plane.
1. **Global:** Configurations which are used to configure all the common values between different components like Athena, Postgres and Platform components.
1. **Postgres:** Is the section used to configure various postgres/database level configurations used by Prophecy.
1. **Platform:** Is the section used to configure the various platform components like - elastic-search, promethus, grafana, loki etc.
1. **Version:** The Prophecy version to be deployed

:::note

Parameters marked with an asterisk(\*) are mandatory.

:::

| Parameter                                  | Type                     | Description                                                                                                                                                                                                                        | Default value                       |
| ------------------------------------------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| **ATHENA**                                 |
| `athena.config`                            | -                        |                                                                                                                                                                                                                                    |                                     |
| `athena.config.fromFile`                   | bool                     | Set this to `false` if you want to pass different environment and Prophecy application level configurations values inline here. If you keep it to `true`, the values are taken from the `../configs` directory of the helm chart   | `true`                              |
| `athena.config.athenaEnvs`                 | map[string]string        | Provide the values you wish to override in athena ENV variables. Passed in the format of `KEY: "value"`. Value is type sensitive. This field is only respected when fromFile is set to `false`.                                    | `./configs/athena-env-cluster.yaml` |
| `athena.config.envs`                       | map[string]string        | Provide the values you wish to override in Prophecy application ENV variables. Passed in the format of `KEY: "value"`. Value is type sensitive. This field is only respected when fromFile is set to `false`.                      | `./configs/env-cluster.yaml`        |
| `athena.config.prophecyCluster`            | prophecyCluster (custom) | Provide the values you wish to override in Prophecy cluster spec. This field is only respected when fromFile is set to `false`.                                                                                                    | `./configs/prophecy-cluster.yaml`   |
| `athena.enableSandboxing`                  | bool                     | Set this to true to enable sandboxing feature.                                                                                                                                                                                     | `false`                             |
| `athena.enableSignup`                      | bool                     | Set this to true if you want to allow signups using a verified email-id.                                                                                                                                                           | `false`                             |
| `athena.enableSlimImages`                  | bool                     | Set this to true to deploy Prophecy slim images (images without Spark).                                                                                                                                                            | `false`                             |
| `athena.isDarkCluster`                     | bool                     | Set this to true if the cluster doesn't have internet access.                                                                                                                                                                      | `false`                             |
| `athena.resources`                         | -                        |                                                                                                                                                                                                                                    |                                     |
| `athena.resources.requests`                | -                        |                                                                                                                                                                                                                                    |                                     |
| `athena.resources.requests.cpu`            | string                   | Guaranteed value of CPU required to deploy Athena                                                                                                                                                                                  | `200m`                              |
| `athena.resources.requests.memory`         | string                   | Guaranteed value of memory required to deploy Athena                                                                                                                                                                               | `512Mi`                             |
| `athena.resources.limits`                  | -                        |                                                                                                                                                                                                                                    |                                     |
| `athena.resources.limits.cpu`              | string                   | Maximum usage of CPU for Athena                                                                                                                                                                                                    | `200m`                              |
| `athena.resources.limits.memory`           | string                   | Maximum usage of memory for Athena                                                                                                                                                                                                 | `512Mi`                             |
| `athena.trustCA`                           | bool                     | set this variable if you want metagraph and execution to trust local self signed certificates.                                                                                                                                     | `true`                              |
| **GLOBAL**                                 |
| `global.blockStorage`                      | -                        | Kubernetes PVC block storage options for for Athena, Postgres and Platform components. Prophecy services takes storage values from Prophecy cluster in configs dir.                                                                |                                     |
| `global.blockStorage.storageClassName`     | string                   | Kubernetes storage class (SC) name to be used by PVCs                                                                                                                                                                              | `default`                           |
| `global.blockStorage.pvcAnnotations`       | map[string]string        | Any additional kubernetes annotations to be set on the PVCs                                                                                                                                                                        | `""`                                |
| `global.customer`                          | -                        |                                                                                                                                                                                                                                    |                                     |
| `global.customer.name`\*                   | string                   | Name of the customer to uniquely identify                                                                                                                                                                                          | `""`                                |
| `global.customer.cluster`\*                | string                   | Name of the cluster to uniquely identify the cluster for a customer                                                                                                                                                                | `prophecy`                          |
| `global.disableIngressCreation`            | bool                     | Set this to true, if the customer wishes to manually manage their ingress entries                                                                                                                                                  | `false`                             |
| `global.imagePullPolicy`                   | string                   | Image pull policy for all the containers deployed                                                                                                                                                                                  | `Always`                            |
| `global.ingressController`                 | -                        |                                                                                                                                                                                                                                    |                                     |
| `global.ingressController.type`            | string                   | Type of ingress controller being used. Currently we support `nginx` and `istio`                                                                                                                                                    | `nginx`                             |
| `global.ingressController.class`           | string                   | Name of the controller class which is to be used for ingress resources                                                                                                                                                             | `prophecy-nginx`                    |
| `global.istio`                             | -                        |                                                                                                                                                                                                                                    |                                     |
| `global.istio.enabled`                     | bool                     | Set this to true to allow usage of istio as an ingress controller/gateway. We don't support sidecars yet. Istio isn't installed or managed by Prophecy.                                                                            | `false`                             |
| `global.istio.gateway`                     | -                        |                                                                                                                                                                                                                                    |                                     |
| `global.istio.gateway.name`                | string                   | Name of the Istio gateway                                                                                                                                                                                                          | `istio-gateways/istio-gateway`      |
| `global.istio.gateway.create`              | bool                     | Set this to true, when you wish to create the Istio gateway                                                                                                                                                                        | `false`                             |
| `global.prophecy`                          | -                        |                                                                                                                                                                                                                                    |                                     |
| `global.prophecy.domainValue`              | string                   | domain value used for cookies. Used to configure multiple URLs.                                                                                                                                                                    | `""`                                |
| `global.prophecy.envSecret`                | -                        | Is configured when Prophecy credentials are fetched as a kubernetes secret                                                                                                                                                         |                                     |
| `global.prophecy.envSecret.create`         | bool                     | Set to true if the secret is to be created. With `false` the secret is expected to be created by the customer.                                                                                                                     | `false`                             |
| `global.prophecy.envSecret.data`           | map[string]string        | Provide the values you wish to override in Prophecy secret ENV variables. Passed in the format of `METADATA_DB_PASSWORD: dummyPassword123`.                                                                                        |                                     |
| `global.prophecy.envSecret.name`           | string                   | Name of the Kubernetes secret to be used.                                                                                                                                                                                          | `env-secrets`                       |
| `global.prophecy.imagePullSecret`          | string                   | Name of the Kubernetes secret which contains the image pull credentials to the container registry.                                                                                                                                 | `""`                                |
| `global.prophecy.rootUrl`\*                | string                   | Root URL where the Prophecy deployment will be hosted. You may provider a list of comma separated urls if you wish to work with multiple urls. Note that the first url in the provided list will be considered as the primary url. | `""`                                |
| `global.prophecy.wildcardCert`             | -                        |                                                                                                                                                                                                                                    |                                     |
| `global.prophecy.wildcardCert.name`        | string                   | The number of secrets passed should either be one or equal to the number of rootUrls provided which should be generated for each of these URLs in respective order.                                                                | `""`                                |
| `global.prophecy.wildcardCert.useExternal` | bool                     | Setting this to true will require the customer to provide a secret name here.                                                                                                                                                      | `false`                             |
| `global.repository`                        | string                   | Container registry prefix to be used.                                                                                                                                                                                              | `gcr.io/prophecy-share`             |
| `global.tls`                               | -                        |                                                                                                                                                                                                                                    |                                     |
| `global.tls.enabled`                       | bool                     | Specifies if TLS is to be enabled                                                                                                                                                                                                  | `true`                              |
| `global.tls.certOnLB`                      | bool                     | Specifies whether TLS termination is to be done at the loadbalancer                                                                                                                                                                | `false`                             |
| **POSTGRES**                               |
| `postgres.isExternalPostgres`              | bool                     | Setting this to true, will allow Prophecy services to use a externally managed Postgres instance and will not use a Prophecy managed instance.                                                                                     | `false`                             |
| `postgres.host`                            | string                   | Specifies the host name for the postgres service. If isExternalPostgres, pass the DNS host name (Not IP) for the external postgres here.                                                                                           | `postgres`                          |
| `postgres.port`                            | int                      | Specifies the port used to communicate with postgres.                                                                                                                                                                              | `5432`                              |
| `postgres.resources`                       | -                        |                                                                                                                                                                                                                                    |                                     |
| `postgres.resources.requests`              | -                        |                                                                                                                                                                                                                                    |                                     |
| `postgres.resources.requests.cpu`          | string                   | Guaranteed value of CPU required to deploy Postgres                                                                                                                                                                                | `1`                                 |
| `postgres.resources.requests.memory`       | string                   | Guaranteed value of memory required to deploy Postgres                                                                                                                                                                             | `2000Mi`                            |
| `postgres.resources.limits`                | -                        |                                                                                                                                                                                                                                    |                                     |
| `postgres.resources.limits.cpu`            | string                   | Maximum usage of CPU for Postgres                                                                                                                                                                                                  | `2`                                 |
| `postgres.resources.limits.memory`         | string                   | Maximum usage of memory for Postgres                                                                                                                                                                                               | `4000Mi`                            |
| `postgres.secretName`                      | string                   | Specifies the postgres AWS secret manager name from where postgres credentials are to be fetched from.                                                                                                                             |                                     |
| `postgres.secretLocation`                  | string                   | Specifies the postgres AWS secret manager region from where postgres credentials are to be fetched from.                                                                                                                           |                                     |
| `postgres.volume`                          | -                        |                                                                                                                                                                                                                                    |                                     |
| `postgres.volume.requests`                 | string                   | Specifies the volume size of the PVC used by postgres                                                                                                                                                                              | `25Gi`                              |
| **PLATFORM**                               |
| `platform.enabled`                         | bool                     | Specifies if one/more of the platform components are to be enabled                                                                                                                                                                 | `true`                              |
| `platform.elasticsearch.enabled`           | bool                     | Specifies if elasticsearch is to be enabled and deployed for supporting Prophecy search feature                                                                                                                                    | `true`                              |
| `platform.ingressNginx.enabled`            | bool                     | Specifies if nginx controller is to be deployed for ingress routing                                                                                                                                                                | `true`                              |
| `platform.namespace`                       | string                   | Specifies the namespace used to deploy the platform components                                                                                                                                                                     | `prophecy`                          |
| `platform.tracing.enabled`                 | bool                     | Specifies if Jaeger based tracing is to be enabled and deployed                                                                                                                                                                    | `true`                              |
| **VERSION**                                |
| `version`                                  | string                   | Specifies the Prophecy version to be deployed                                                                                                                                                                                      | `""`                                |

### Sample Helm commands for different use-cases

#### When the certificate is provided by Prophecy

```
helm -n <namespace> install prophecy prophecy/prophecy-installer --version <prophecy-chart-version>
--set global.customer.name=<customer name> --set global.prophecy.rootUrl=<Base URL>
```

#### When the certificate is provided by the Customer and there is no internet connectivity

```
helm -n <namespace> install prophecy prophecy/prophecy-installer --version <prophecy-chart-version>
--set global.customer.name=<customer name>  --set global.prophecy.rootUrl=<Base URL> --set global.prophecy.wildcardCert.useExternal=true
--set global.prophecy.wildcardCert.name=<wildcard cert secret name> --set athena.controlcenter.disabled=true
--set global.repository=<Image repository> --set global.prophecy.imagePullSecret=<Image pull secret name> --set athena.isDarkCluster=true
```

#### When an external SQL database is provided

1. Create a external SQL Database (e.g. Google SQL instance).

2. Run the following commands by connecting to the external SQL Database.

```
CREATE USER sdl WITH PASSWORD '<custom-sdl-password>';

CREATE DATABASE gogs;
GRANT ALL PRIVILEGES ON DATABASE gogs TO sdl;

CREATE DATABASE federator;
GRANT ALL PRIVILEGES ON DATABASE federator TO sdl;
```

3. Run the following helm command to complete the installation.

```
helm -n <namespace> upgrade -i prophecy-installer prophecy/prophecy-installer --version 3.3.1-1 --set version=3.3.1.1
 --set global.customer.cluster={cluster-name} --set global.prophecy.rootUrl={cluster-name}-{customer-name}.dev.cloud.prophecy.io
 --set global.customer.name={customer-name} --set postgres.isExternalPostgres=true --set postgres.host={googlesql-dns-name}
 --set postgres.user={google-sql-user-name} --set postgres.password={google-sql-user-password} --debug
```
