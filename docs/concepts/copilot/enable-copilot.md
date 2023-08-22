---
title: Enable copilot
id: enable-copilot
description: How to enable for private VPC SaaS environments.
sidebar_position: 1
tags:
  - concepts
  - copilot
  - installation
  - upgrade
---

From the kubernetes cluster where Prophecy services are running:

1. The `prophecy-operator`, `edweb`, `metagraph`, and other Prophecy services must be running version `3.1.0.0` or greater.
2. The above services should all be running the same release-version as the `copilot` service defined in the image below, eg `3.1.0.0`
3. The `athena` Prophecy service should be running version `3.1.0.0` or greater. This is only required if using the Pipeline approach to the upgrade.
4. In the `ProphecyCluster` CR, do the following:

- add `copilot` to `enabledapps`
- add `image` section if required as below, else defaults to `latest`
- add the `copilot` section as below in the same level as other enabled apps

```
copilot:
    image:  gcr.io/prophecy-share/copilot:<release-version>
```

5. Once deployed, wait for the `copilot-cm` to be created. Then edit the default values in the configmap to match the ENVs required.
6. Supply the API keys for the appropriate ENV:

```
AZURE_DEPLOYMENT_NAME: "< add value here >"
AZURE_OPENAI_API_KEY: "< add value here >"
AZURE_OPENAI_ENDPOINT: ""< add value here >"
AZURE_OPENAI_VERSION: "< add value here >"
NUM_WORKERS: "< add value here >"
OPENAI_API_KEY: "< add value here >"
PORT: "< add value here >"
```

7. Enable the below variable on the common CP config map
   `COPILOT_ENABLED: "true"`
8. The app pod, especially `copilot`, may redeploy itself. If not, restart the app pod.
