---
title: SMTP
id: smtp
description: Learn how to configure an SMTP connection
tags:
  - connections
  - smtp
---

SMTP (Simple Mail Transfer Protocol) connections are used to send emails over the internet by allowing communication between email clients and servers. When you create an SMTP connection in Prophecy, the user credentials you provide are used to establish the connection. The user you authenticate in Prophecy will always be the sender of an email when you use the Email gem.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | No        |
| Write data with a Report gem                                  | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | No        |

## Parameters

To create an SMTP connection, enter the following parameters:

| Parameter                                                            | Description                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------- |
| Connection Name                                                      | Unique name for the connection (e.g., `MySMTPConnection`) |
| URL                                                                  | SMTP server URL (e.g., `smtp.gmail.com`)                  |
| Port                                                                 | SMTP port. Port options may vary between SMTP services.   |
| Username                                                             | Your SMTP username                                        |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Your SMTP password                                        |

<!-- You can leverage your SMTP connection to send emails with the [Email](docs/analysts/development/gems/report/email.md) gem. -->

## SMTP permissions

When you create an SMTP connection in Prophecy, access permissions are tied to the credentials you use. To fully leverage an SMTP connection in Prophecy, you need the following SMTP permissions:

- Example
- Example

## Sharing connections within teams

Connections are stored inside fabrics that are assigned to certain teams. Once an SMTP connection is added to a fabric:

- Anyone in the team can use that connection to send emails from a pipeline. Everyone who uses the connection will operate with the same access level granted by the stored credentials.

## Limitations
