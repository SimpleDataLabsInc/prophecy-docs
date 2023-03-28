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

## Requirements

To install Prophecy, the following infrastructure requirements must be satisfied:

- **Kubernetes Version (minimum):** 1.14
- **Helm** client to install Prophecy Helm chart
- **Container Registry:** Prophecy publishes all its docker images in GCR(Google Container Registry: `gcr.io/prophecy-share`).
  Kubernetes cluster should be able to pull images from here. Alternatively, customers can use their internal container registry
  which needs to be pre-populated with images from GCR by them. [Details of the images to be pulled are given below.]
- **Namespace** in Kubernetes cluster to install Prophecy
- **CRDs installation:** Since the installation is primarily done by Prophecy Kubernetes operator which works on a custom resource,
  CRDs installation is a must before the rest of the components can be installed. Note that only this operation requires a cluster-wide role.
- **Persistent Storage with Dynamic Provisioning:** A Few Prophecy services require persistent storage. With Prophecy Operator not expecting a cluster-wide role for installation,
  it becomes necessary to have dynamic provisioning enabled for persistent volumes (e.g. gp2)
- **Ingress Controller:** To expose a few services externally on a hostname/FQDN, Prophecy installs its own managed Nginx ingress controller.
  If the Kubernetes cluster already has one running we can leverage that. Note that the Nginx controller service is exposed via a `LoadBalancer` type
  service and hence the creation of external `LoadBalancer`s should be allowed within the cluster.
- **Hostname Resolution and SSL Certificate:** Installed Prophecy services can either be exposed on Prophecy's domain `*.cloud.prophecy.io` or via a
  customer-owned domain. For Prophecy's domain, we are responsible for ensuring the resolution of the hostname and managing SSL certs (issued by Let's Encrypt) via our
  Controlcenter service hosted in our infrastructure. For customer-owned domains, the customer is responsible for managing SSL certs and
  hostname resolution (by making entries in a DNS zone).
- Connectivity from Kubernetes cluster to **Spark Environment** (Databricks, Livy, etc.) and vice-versa.

## Installation Instructions

As mentioned above, Prophecy is installed via Helm chart whose values can be set as below based on the requirement.

| Parameter                             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                       | Default value                                |
| ------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| **global.customer.name**\*            | string | Name of the customer                                                                                                                                                                                                                                                                                                                                                                                              | ""                                           |
| **global.prophecy.rootUrl**\*         | string | Base URL to be used for hosting Prophecy IDE                                                                                                                                                                                                                                                                                                                                                                      | ""                                           |
| global.prophecy.isRootUrlFQDN         | bool   | If true, it indicates that `global.prophecy.rootUrl` can be resolved independently and can be used for Prophecy IDE. Else, `prophecy` will be prepended to the base URL                                                                                                                                                                                                                                           | true                                         |
| version                               | string | Prophecy version to be installed. Our versions are of the format `a.b.c.d`. E.g. `2.9.0.0`                                                                                                                                                                                                                                                                                                                        | <Prophecy chart version in format `a.b.c.d`> |
| serviceAccount.create                 | bool   | If false, service account will be assumed to be existing already and won't be created.                                                                                                                                                                                                                                                                                                                            | true                                         |
| tls.enabled                           | bool   | If true, Prophecy will be hosted on given rootUrl with TLS enabled and plain `http` requests won't work.                                                                                                                                                                                                                                                                                                          | true                                         |
| **athena.controlcenter.disabled**     | bool   | If false, then different events will be published to controlcenter by athena from customer's Kubernetes cluster regarding health of Prophecy services for better support. Also, SSL certificate and DNS resolution is managed by Prophecy provided the customer uses Prophecy's domain. If true, then customer needs to provide SSL cert and make sure that `prophecy.wildcardCert.useExternal` is set to `true`. | false                                        |
| **athena.isDarkCluster**              | bool   | Set to true if your Kubernetes cluster is a dark cluster and has no internet connectivity. In this case, helm charts won't be pulled from Prophecy's public helm repository and will be packaged in docker image of Athena (Prophecy's management service)                                                                                                                                                        | false                                        |
| **athena.imageRegistry**              | string | Image Registry from where the Prophecy docker images. Prophecy publishes images to a public GCR but if you wish to pull images from your internal container registry, its path can be set using this parameter. Make sure that name of the images for each service remain the same as used by Prophecy for publishing in its public registry and should already be pushed before installation is triggered        | gcr.io/prophecy-share                        |
| athena.enableSignup                   | bool   | Set this to true if Signup flow is to be enabled in Prophecy setup. If this parameter is set to true, make sure that SMTP ports are open for Kubernetes cluster so that verification e-mail can be sent during signup process.                                                                                                                                                                                    | false                                        |
| **prophecy.imagePullSecret**          | string | Secret name deployed in the namespace to pull images from private container registry. This is to be set if you use your own internal container registry.                                                                                                                                                                                                                                                          | ""                                           |
| **prophecy.wildcardCert.useExternal** | bool   | If true, SSL certificate is provided by customer. Else, the certificate management is handled by prophecy provided that rootUrl belongs to `cloud.prophecy.io` domain.                                                                                                                                                                                                                                            | false                                        |
| **prophecy.wildcardCert.name**        | string | Name of the wildcard certificate secret. This is required only when `prophecy.wildcardCert.useExternal` is `true` and customer is providing the SSL certificate as an installed secret in the namespace                                                                                                                                                                                                           | ""                                           |
| prophecy.wildcardCert.tlsCert         | string | Base64 encoded wildcard certificate file path. This is required when customer is providing the SSL certificate in form of base64 encoded cert and key files                                                                                                                                                                                                                                                       | ""                                           |
| prophecy.wildcardCert.tlsKey          | string | Base64 encoded key file path. This is required when customer is providing the SSL certificate in form of base64 encoded cert and key files                                                                                                                                                                                                                                                                        | ""                                           |
| platform.enabled                      | bool   | If true, prophecy platform components like Nginx Ingress controller will be installed unless individual components are disabled as specified by parameters below                                                                                                                                                                                                                                                  | true                                         |
| platform.ingressNginx.enabled         | bool   | If true, nginx will be installed as the ingress controller for exposing different Prophecy services. Else, the existing ingress controller will be used                                                                                                                                                                                                                                                           | true                                         |
| ingressController.type                | string | Prophecy supports two types of ingress controllers as of now. `nginx` and `istio`                                                                                                                                                                                                                                                                                                                                 | nginx                                        |
| ingressController.class               | string | This is to be set if `ingressController` is set to `nginx`                                                                                                                                                                                                                                                                                                                                                        | prophecy-nginx                               |
| istio.enabled                         | bool   | Set it to `true` if `istio` is already installed in the cluster, irrespective of whether you wish to use `istio` or `nginx` as ingress controller.                                                                                                                                                                                                                                                                | false                                        |
| istio.gateway.name                    | string | Name of the `istio` gateway to be used to pass to virtual service resource (created for exposing prophecy services when `istio` is used as ingress controller)                                                                                                                                                                                                                                                    | istio-gateways/istio-gateway                 |

:::warning

Parameters marked with an asterisk(\*) are mandatory.
:::

### Sample Helm commands for different use-cases

#### When the certificate is provided by Prophecy

```
helm -n <namespace> install prophecy prophecy/prophecy-marketplace --version <prophecy-chart-version>
--set global.customer.name=<customer name> --set global.prophecy.rootUrl=<Base URL>
```

#### When the certificate is provided by the Customer and there is no internet connectivity

```
helm -n <namespace> install prophecy prophecy/prophecy-marketplace --version <prophecy-chart-version>
--set global.customer.name=<customer name>  --set global.prophecy.rootUrl=<Base URL> --set prophecy.wildcardCert.useExternal=true
--set prophecy.wildcardCert.name=<wildcard cert secret name> --set athena.controlcenter.disabled=true
--set athena.imageRegistry=<Image registry> --set prophecy.imagePullSecret=<Image pull secret name> --set athena.isDarkCluster=true
```

## Prophecy Services: Images and Resource Details

This is the minimum configuration for test/PoC installations. Prophecy support can help find the right size for each
of these resources based on the usage.

| Name                                        | Image name           | Resources (CPU / Memory) | Storage Size           | External Access required? |
| ------------------------------------------- | -------------------- | ------------------------ | ---------------------- | ------------------------- |
| App                                         | `app`                | 2000m, 4000Mi            | -                      | Y                         |
| MetadataUI                                  | `metadataui`         | 2000m, 4000Mi            | 5Gi                    | Y                         |
| Edweb                                       | `editorweb`          | 2000m, 4000Mi            | 5Gi                    | N                         |
| Metagraph                                   | `metadatagraph`      | 2000m, 4000Mi            | 2 volumes of 30Gi each | N                         |
| Gitserver                                   | `gitserver`          | 1500m, 2000Mi            | 30Gi                   | N                         |
| Openidfederator                             | `openidfederator`    | 2000m, 4000Mi            | 5Gi                    | N                         |
| Sparkedge                                   | `sparkedge`          | 2000m, 4000Mi            | 30Gi                   | N                         |
| Lineage (deployed in same pod as sparkedge) | `lineageweb`         | 2000m, 4000Mi            | -                      | N                         |
| Postgres                                    | `postgres`           | 2000m, 4000Mi            | 5Gi                    | N                         |
| Transpiler                                  | `transpilerweb`      | 2000m, 4000Mi            | 5Gi                    | N                         |
| Execution                                   | `execution`          | 2000m, 4000Mi            | 5Gi                    | Y                         |
| Kafka                                       | `kafka`              | 500m, 512Mi              | 5Gi                    | N                         |
| Zookeeper                                   | `zookeeper `         | 250m, 500Mi              | 2 volumes of 5Gi each  | N                         |
| Schema Registry                             | `schemaregistry`     | 250m, 500Mi              | -                      | N                         |
| Package Manager                             | `pkg-manager`        | -                        | -                      | N                         |
| AdminPanel                                  | `adminpanel`         | -                        | -                      | Y                         |
| Athena                                      | `athena`             | 500m, 1000Mi             | 10Gi                   | Y                         |
| Platform Postgres                           | `postgres`           | 2000m, 4000Mi            | 5Gi                    | N                         |
| Prophecy Controlplane Operator              | `prophecy-operator`  | 100m, 128Mi              | -                      | N                         |
| Prophecy Dataplane Operator                 | `dataplane-operator` | 100m, 128Mi              | -                      | N                         |
| Elasticsearch (3 Replicas)                  | `elasticsearch`      | 4000Mi, 8000Mi           | 50Gi (per replica)     | N                         |
