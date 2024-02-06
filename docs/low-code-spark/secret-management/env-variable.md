---
sidebar_position: 1
title: Environment Variables
id: env-variable
description: Working with Environment Variables
tags: [env-var, environment, variable, secrets]
---

For users who prefer simplicity in secret management, Prophecy provides seamless integration with Environment Variables, allowing for straightforward and secure configuration.

Let's explore how to effortlessly manage and utilize secrets stored as Environment Variables in Prophecy.

## Managing Environment Variables Secret Provider

To add an Environment Variables Secret Provider, click on the **(1) Add Provider** button, opening the Secret Provider form.

Provide a **(2) Name**, select **(3) Provider type** as **Environment Variables**, and add a **(4) Description** of your choice.
For authentication, Prophecy requires the following fixed Environment variables to be set:

- **(5) PROPHECY_ENV_SECRET_KEY**: This variable should contain the secret key.
- **(6) PROPHECY_ENV_SECRET_VALUE**: This variable should contain the secret value.

Ensure your Spark cluster has these environment variables correctly configured. You can verify the configuration by clicking the **(7) Test connection** button.

Once done, click **(8) Save**.

## Managing Environment Variables Secrets

After adding your Environment Variables provider, click on the **(1) Refresh** button to fetch secrets stored as Environment Variables. Ensure your Spark cluster has the required access.

To create a new Secret, click on the **(2) Add Secret** button, opening the Add secret form.

Provide a **(3) Secret Name**, and add a **(4) Description**. Specify the **(5) Key** and **(6) Value** for your secret. Once done, click **(7) Save**. This will store the secret with the given key and value.

You can also Edit/Delete an existing secret from the button next to the Secret in the table.

## Using Environment Variables Secrets in Pipelines

Once you have added an Environment Variables Secret Provider and stored secrets, you can effortlessly [use](./using-secrets.md) them in your Pipelines, ensuring straightforward configuration and execution.
