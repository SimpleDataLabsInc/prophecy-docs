---
title: Email
id: email
slug: /engineers/email
description: Send emails via your Spark pipeline
tags:
  - gems
  - webapp
  - email
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecyWebAppPython"
  python_package_version="0.1.2+"
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single=""
  uc_shared=""
  livy=""
/>

## Parameters

| Parameter                          | Description                                                      |
| ---------------------------------- | ---------------------------------------------------------------- |
| SMTP Url                           | SMTP server URL like `smtp.gmail.com`                            |
| SMTP Port                          | Default is `587`. Port options may vary between SMTP services.   |
| SMTP Username                      | Your SMTP username                                               |
| SMTP Password                      | Your SMTP password                                               |
| Email From (Sender)                | Email address of the sender (same as SMTP connection)            |
| Email To (Receiver)                | Email address of the receiver. You can list multiple recipients. |
| Email Subject                      | Subject line of the email                                        |
| Email Cc (Comma separated)         | CC recipient(s)                                                  |
| Email Bcc (Comma separated)        | BCC recipient(s)                                                 |
| Email Body                         | Content of the email                                             |
| Email Attachment (Comma separated) | File paths or names that point to the attachment(s)              |
