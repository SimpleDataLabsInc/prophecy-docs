---
sidebar_position: 4
title: Using Secrets in Pipelines
id: using-secrets
description: Working with Secrets in Pipelines and gems
tags: [env-var, environment, variable, secrets]
---

Once you have Secrets and [Secret Providers](./secret-management.md) created in Fabrics, you can [Use a secret](./using-secrets.md) in your Source and Target gems in your Pipelines directly.
Any gem which requires a Authentication Field like Username or password,you will have an option to Insert Secret as shown below.

![use_secret](img/Use_secret.png)

Click on **(1) Insert Secret**, this will open the dropdown for all secrets and secrets providers available in your Fabric.
If you don't see your secrets, confirm you have correct Fabric selected in the top right corner.
Attach a Cluster from top right corner to be able to **(2) Refresh Secrets** for any Provider.
