---
title: Prophecy secrets
id: secrets
slug: /analysts/secrets
description: Use the Prophecy-native secret manager
tags:
  - secrets
  - credentials
---

A **secret** is stored sensitive data such as passwords, API keys, or certificates. Prophecy includes a built-in secret manager to store secrets securely and allow [Prophecy Automate](docs/administration/architecture.md) to access them at runtime. This prevents credentials from being hardcoded or shared in plain text.

| Secret type         | Description                                                       | Example use case                  |
| ------------------- | ----------------------------------------------------------------- | --------------------------------- |
| Text                | A string value.                                                   | Access token value                |
| Binary              | A file that you upload.                                           | SSL certificate                   |
| Username & Password | Two-field credential for a username and password.                 | Basic authentication for RestAPIs |
| M2M OAuth           | Multi-field credential used for client credential authentication. | REST APIs using bearer tokens     |

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
1. In the dialog, choose the **Secret Type**.

   | Secret Type         | Parameters                                                                                                                                                                                                                                                                  |
   | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Text                | <ul><li>**Name**: Label to identify the secret</li><li>**Value**: String value</li></ul>                                                                                                                                                                                    |
   | Binary              | <ul><li>**Name**: Label to identify the secret</li><li>**Value**: Upload a file (such as a certificate)</li></ul>                                                                                                                                                           |
   | Username & Password | <ul><li>**Name**: Label to identify the secret</li><li>**Username**: Username for authentication</li><li>**Password**: Password for authentication</li></ul>                                                                                                                |
   | M2M OAuth           | <ul><li>**Name**: Label to identify the secret</li><li>**Client ID**: OAuth client identifier</li><li>**Client Secret**: OAuth client secret key</li><li>**Auth URL**: OAuth authorization server endpoint</li><li>**Scope** (Optional): OAuth permissions scopes</li></ul> |

1. Click **Create** to save it to the fabric.

## Reference a secret

Secrets are often used to hide credentials in [connections](/analysts/connections).

1. Create a new connection.
2. In fields that require credentials, a secret picker appears automatically.
3. If the secret doesn’t exist yet, click the **New Secret** button, which opens the fabric’s **Add Secret** dialog.
4. Once saved, the secret will appear in the picker.
5. Select it, and Prophecy will validate the connection securely using that secret.
