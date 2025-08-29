---
title: SFTP connection
sidebar_label: SFTP
id: sftp
description: Learn how to set up an SFTP connection in Prophecy
tags:
  - connections
  - sftp
---

SFTP (Secure File Transfer Protocol) is a secure way to transfer files over the internet using an encrypted connection between a client and a server. It’s commonly used to exchange data between systems, especially in enterprise environments.

In Prophecy, you can use an SFTP connection to read from and write to remote file systems directly in your data pipelines. This is useful when your data is stored outside cloud storage or databases.

## Prerequisites

When you use an SFTP connection in Prophecy, permissions depend on the underlying SSH server and filesystem permissions on the server. Ensure you have the correct access to the files you need before setting up and using this connection.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                                                     | Supported |
| ----------------------------------------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/sftp-gem)                                                           | Yes       |
| Write data with a [Target gem](/analysts/sftp-gem)                                                          | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar)                                  | Yes       |
| Trigger scheduled pipeline upon [file arrival or change](/analysts/triggers#file-arrival-or-change-trigger) | Yes       |

## Limitations

Keep in mind the following limitations when using an SFTP connection.

- **Simultaneous writes can cause file corruption.** If multiple processes—such as different Prophecy jobs—try to write to the same file at the same time using the same SFTP connection details, it can result in race conditions or corrupted files. This happens because the connector doesn't perform any client-side locking to coordinate access.

- **Network latency affects transfer performance.** The speed and reliability of SFTP transfers depend on the physical distance between the SFTP server and Prophecy’s infrastructure. Servers that are geographically closer to your Prophecy environment will generally provide faster, more stable performance. Servers located farther away may introduce higher latency, leading to slower or less consistent data transfers. For best results, use SFTP servers in the same region as your Prophecy environment.

## Connection parameters

To configure an SFTP connection in Prophecy, enter the following parameters:

| Parameter             | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| Connection Name       | Unique name for the connection                                |
| Host                  | Hostname or IP address of the SFTP server                     |
| Port                  | Port number for SFTP (default is `22`)                        |
| Username              | Your SFTP username                                            |
| Authentication Method | Choice between **Password** or **Private Key** authentication |

## Authentication methods

You can configure your SFTP connection with one of the following authentication methods:

- **Password:** Use a [secret](docs/administration/secrets/secrets.md) to enter your SFTP password.

- **Private Key:** Upload a file that contains your SFTP private key. The file must be in [PEM format](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) (`.pem` file).

  - There must be a header and a footer.
  - The content between the headers is a valid base64-encoded private key.
  - There are no extra spaces or newline characters.

## Supported ciphers

Prophecy supports multiple encryption ciphers for SFTP connections to ensure both security and compatibility across different server configurations. Our SFTP client prioritizes modern, secure ciphers while maintaining fallback support for legacy systems.

- `aes256-gcm@openssh.com`
- `aes128-gcm@openssh.com`
- `chacha20-poly1305@openssh.com`
- `aes256-ctr`
- `aes192-ctr`
- `aes128-ctr`

:::note
For compatibility with older SFTP servers, Prophecy also supports CBC legacy ciphers as fallbacks. We strongly recommend upgrading your SFTP servers to support GCM or CTR modes for enhanced security.
:::

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once an SFTP connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from SFTP connections in the following ways:

- When you browse an SFTP connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema changes in the external connection, you will need to re-infer the schema in Prophecy.
