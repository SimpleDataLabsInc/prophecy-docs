---
title: EmailData
id: email-data
slug: /engineers/email-data
description: Send data from your Spark pipeline to others via email
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

| Parameter                        | Description                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| SMTP Url                         | SMTP server URL like `smtp.gmail.com`                                                  |
| SMTP Port                        | Default is `587`. Port options may vary between SMTP services.                         |
| SMTP Username                    | Your SMTP username                                                                     |
| SMTP Password                    | Your SMTP password                                                                     |
| Email From (Sender)              | Email address of the sender (same as SMTP connection)                                  |
| Email To (Receiver)              | Email address of the receiver. You can list multiple recipients.                       |
| Email Subject                    | Subject line of the email                                                              |
| Email Cc (Comma separated)       | CC recipient(s)                                                                        |
| Email Bcc (Comma separated)      | BCC recipient(s)                                                                       |
| Embed data as table in mail body | Whether to display the table in the email body                                         |
| Number of rows to add to email   | The maximum number of rows that will be displayed in the email body                    |
| Attach data as email attachment  | Whether to send the data as an attachment in the email                                 |
| Format                           | Dropdown where you can select whether to attach the file as a CSV, Excel, or JSON file |
| Attachment File Name             | How the file will be named when sent as an attachment                                  |
