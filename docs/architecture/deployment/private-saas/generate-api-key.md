---
title: Generate API Key
id: generate-api-key
description: This page shows you how to generate your own custom API key per deployment.
sidebar_position: 3
tags:
  - Generate
  - API
  - Key
  - Security
---

Prophecy provides secure way to generate an API Key per Prophecy deployment which can be used to trigger various secure operations like backup/restore. This API supportability will be enhanced in future to support other such use cases. Follow the below setups to generate a new key.

### Generate a fresh API Key

To configure object store settings in the Prophecy UI, follow these steps:

1. Log in to the Prophecy UI as an admin user.
1. Click on the `three dots` at the bottom left corner and select the `settings icon` from the submenu.
1. Navigate to the `Access Tokens` main tab.
1. Click on `Generate Token` and a window will pop up.
1. Fill in the details like `Token Name` and `Expiration`.
1. You will be provided with a new token. You may use the copy button to copy it to use it for various API activities.

### Delete an existing API Key

1. In the above tab.
1. Click on the delete icon against the key which you wish to delete.
1. After confirmation is done, the token will be deleted.
