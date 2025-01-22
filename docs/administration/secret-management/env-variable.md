---
sidebar_position: 1
title: Environment Variables
id: env-variable
description: Working with Environment Variables
tags: [env-var, environment, variable, secrets]
---

For users who prefer simplicity in secret management, Prophecy provides seamless integration with Environment Variables, allowing for straightforward and secure configuration.
You can use all environment variable present in your Spark clusters.

## Managing Environment Variables Secret Provider

To add an Environment Variables Secret Provider, click on the **(1) Add Provider** button, opening the Secret Provider form.

Provide a **(2) Name**, select **(3) Provider type** as **Environment**, and add a **(4) Description** of your choice.
There is no authentication required for Environment Variables secret provider.
Once done, click **(5) Save**.

## Managing Environment Variables Secrets

You can now add in Prophecy, what all environment variables are present in your Spark Cluster/Fabric. We dont currently support fetching all environment variables which are already set in the cluster.
To create a new Secret, click on the **(1) Add Secret** button, opening the Add secret form.

Provide a **(2) Secret Name**, and add a **(3) Description**. Once done, click **(4) Save**. This will store the mapping of secret with the given key in Prophecy.

:::info

Please be aware that these environment variables cannot be created, edited, or deleted through Prophecy in your Spark clusters. When you create a secret in Prophecy, you're essentially setting up a mapping for environment variables. Ensure that the same environment variable exists on your Spark cluster with the correct value.
:::

You can delete an existing env variable from the button next to the Secret in the table.

## Using Environment Variables Secrets in Pipelines

Once you have added an Environment Variables Secret Provider and stored secrets, you can effortlessly [use](./using-secrets.md) them in your pipelines.
