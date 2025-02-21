---
title: Secrets in pipelines
id: using-secrets
description: Working with secrets in pipelines and gems
tags: [env-var, environment, variable, secrets]
---

Once you have secrets and [Secret Providers](docs/administration/connections-and-secrets/secret-providers.md) created in fabrics, you can use a secret in your Source and Target gems in your pipelines directly.

If any gem requires a authentication field like **username** or **password**, you will have the option to **Insert Secret** as shown below.

![use_secret](img/Use_secret.png)

1. Click on **Insert Secret** to will open the dropdown for all secrets and secrets providers available in your fabric. If you don't see your secrets, confirm you have correct fabric selected in the top right corner.
2. Attach a cluster from top right corner to be able to **Refresh Secrets** for any provider.
