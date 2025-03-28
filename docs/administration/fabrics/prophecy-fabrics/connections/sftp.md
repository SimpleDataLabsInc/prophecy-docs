---
title: SFTP
id: sftp
description: Learn how to set up an SFTP connection in Prophecy
tags:
  - connections
  - sftp
---

To configure an SFTP connection in Prophecy, enter the following parameters:

| Parameter             | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| Connection Name       | Unique name for the connection (e.g., `MySFTPConnection`)     |
| Host                  | Hostname or IP address of the SFTP server                     |
| Port                  | Port number for SFTP (default is `22`)                        |
| Username              | Your SFTP username                                            |
| Authentication Method | Choice between **Password** or **Private Key** authentication |

## Authentication methods

You can configure your SFTP connection with one of the following authentication methods:

- **Password.** Use a [secret](docs/administration/secrets/secrets.md) to enter your SFTP password.
- **Private key**. Upload a file that contains your SFTP private key.
