---
title: SMTP
id: smtp
description: Learn how to configure an SMTP connection
tags:
  - connections
  - smtp
---

SMTP (Simple Mail Transfer Protocol) connections are used to send emails over the internet by allowing communication between email clients and servers. When you create an SMTP connection in Prophecy, the user credentials you provide are used to establish the connection. This user will always be the sender of an email when you use the Email gem with this connection.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | No        |
| Write data with an [Email gem](/analysts/email)               | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | No        |

## Limitations

Only basic authentication is supported. The SMTP server must support plain username and password authentication. Prophecy does not currently support OAuth or other advanced authentication methods for SMTP connections.

## Parameters

To create an SMTP connection, enter the following parameters:

| Parameter                                                            | Description                                                 |
| -------------------------------------------------------------------- | ----------------------------------------------------------- |
| Connection Name                                                      | Unique name for the connection                              |
| URL                                                                  | SMTP server URL<br/>Example: `smtp.gmail.com`               |
| Port                                                                 | SMTP port.<br/>Port options may vary between SMTP services. |
| Username                                                             | Your SMTP username                                          |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Your SMTP password                                          |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once an SMTP connection is added to a fabric, anyone in the team can use that connection to send emails from a pipeline.
