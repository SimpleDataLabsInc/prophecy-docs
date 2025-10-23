---
title: Prophecy secrets
id: secrets
slug: /analysts/secrets
description: Use the Prophecy-native secret manager
tags:
  - secrets
  - credentials
---

A secret is sensitive data you don’t want exposed—such as passwords, API keys, or certificates. Prophecy includes its own secret manager, built into fabrics, to securely store:

- Text secrets (string values, like credentials)
- Binary secrets (uploaded files, like certificates)

Storing secrets in a fabric ensures that [Prophecy Automate](docs/administration/architecture.md) running in that fabric can access them at runtime, while keeping the actual values hidden from users. This prevents credentials from being hardcoded or shared in plain text.

## Access control

Access to secrets is related to fabric access.

- Secrets are tied to the fabric where they’re created.
- Anyone with access to that fabric can reference its secrets in projects.
- The secret value is never visible, even to the user who created it.

## Create a secret

To add a new secret to a fabric:

1. From the left sidebar, open the **Metadata** page.
1. Open the fabric where you want to store the secret.
1. Go to the **Secrets** tab.
1. Click **+ Add Secret**.
1. In the dialog, choose whether the secret is:

   - **Text** → enter a string value.
   - **Binary** → upload a file (such as a certificate).

1. Give the secret a descriptive name.
1. Click **Create** to save it to the fabric.

## Reference a secret

Secrets are often used to hide credentials in [connections](/analysts/connections).

1. Create a new connection.
2. In fields that require credentials, a secret picker appears automatically.
3. If the secret doesn’t exist yet, click the **New Secret** button, which opens the fabric’s **Add Secret** dialog.
4. Once saved, the secret will appear in the picker.
5. Select it, and Prophecy will validate the connection securely using that secret.
