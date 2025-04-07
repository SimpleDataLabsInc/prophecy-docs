---
title: SFTP
id: sftp
description: Learn how to set up an SFTP connection in Prophecy
tags:
  - connections
  - sftp
---

SFTP (Secure File Transfer Protocol) is a secure way to transfer files over the internet using an encrypted connection between a client and a server. It’s commonly used to exchange data between systems, especially in enterprise environments where security and reliability are critical.

In Prophecy, you can use an SFTP connection to read from and write to remote file systems directly in your data pipelines. This is useful when your data is stored outside cloud storage or databases, such as in on-premise servers or partner systems.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

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

## SFTP permissions

When you create an SFTP connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the files and folders your SFTP credentials have permission to access. Any actions you perform—such as reading or writing files—are done using those credentials.

To fully leverage an SFTP connection in Prophecy, you need the following SFTP permissions:

- Example
- Example

## Sharing connections within teams

Connections are stored inside fabrics that are assigned to certain teams. Once an SFTP connection is added to a fabric:

- Anyone in the team can use that connection in pipelines and browse it in the Environment browser.
- Team members do not need to reauthenticate. They inherit the same access and permissions as the original connection setup.

Everyone who uses the connection will operate with the same access level granted by the stored credentials.

:::caution
Be mindful of what permissions the credentials provide. If they allow access to sensitive data, anyone on the team using that connection will have the same level of access.
:::

## Sync connection

As you start using SFTP connections in Prophecy, it’s important to understand how data is fetched and kept up to date in a project.

- When you browse an SFTP connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.

## Limitations

The speed and reliability of your SFTP connection can be affected by network latency, which depends on how far the SFTP server is from Prophecy’s infrastructure. If the server is geographically close, data transfers will generally be fast and smooth. If the server is far away, you may notice slower performance due to higher latency. For the best experience, use SFTP servers that are located in the same region as your Prophecy environment whenever possible.
