---
title: SFTP
id: sftp
description: Learn how to set up an SFTP connection in Prophecy
tags:
  - connections
  - sftp
---

Prophecy supports reading and writing files using an SFTP connection. Data is read using `io.Reader`. The impact of network latency depends on server proximity. If the SFTP server is close to our server, network latency is minimal and does not significantly affect performance. However, when the server is far away, latency increases.

| Features    | Supported |
| ----------- | --------- |
| Read data   | ✔         |
| Write data  | ✔         |
| Browse data | ✔         |

## Parameters

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

## Scope

The SFTP connection can be shared between all users of a team. Individuals do not need to authenticate to leverage an established SFTP connection.

## Sync

Data from connection are synced whenever:

- A pipeline runs
- The environment browser is refreshed

## Limitations
