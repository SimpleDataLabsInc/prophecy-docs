---
title: Email gem
sidebar_label: Email
id: email
slug: /analysts/email
description: Send your output tables from your pipeline to others via email
tags:
  - gems
  - analyst
  - report
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Use the Email gem to send output tables from your pipeline to others via email. You can configure static values for recipients, subject, and body, or dynamically populate these fields from columns in your input dataset using the **Use column** option.

## Input

The Email gem supports one or two input ports, depending on how you want to provide email content and attachments.

- **Single input port**: The dataset can be used for both email content (To, Cc, Bc, Subject, Body) and attachment data (if enabled).
- **Two input ports**: The first input port provides email content and parameters, while the second port provides attachment data.

The gem will send email(s) when it runs. No output table will be written to your data warehouse.

## Parameters

Review the following Email gem parameters.

Parameters can be set manually or configured dynamically using the **Use column** option. When you enable the **Use column** checkbox, the gem field is automatically populated with the value from the specified column in your input dataset.

| Parameter                   | Description                                                                                                                                                                            | Use column checkbox |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Select or create connection | Defines which [SMTP connection](docs/administration/fabrics/prophecy-fabrics/connections/smtp.md) to use for the gem. <br/>This will also determine the **sender** of the email.       | Not applicable      |
| To                          | Specifies the recipient(s) of the email. You can add multiple recipients.                                                                                                              | Supported           |
| Cc                          | Specifies the recipients to be included in the CC field.                                                                                                                               | Supported           |
| Bc                          | Specifies the recipients to be included in the BCC field.                                                                                                                              | Supported           |
| Subject                     | Defines the subject of the email, providing a brief summary of its content.                                                                                                            | Supported           |
| Body                        | Contains the main content or body of the email, where you can provide the message. <br/>Enable the **Use Custom HTML** to paste HTML directly into the email body.                     | Supported           |
| Include Data as Attachment  | Checkbox that enables sending input data as an attachment in the email. <br/>You can send the data as an XLSX or CSV file. <br/>File extensions are not required when naming the file. | Not applicable      |

## Example

Suppose you have a dataset that you want to sent to different recipients.

- **Input port 1**: Email parameters

  | Recipients          | Body                                          |
  | ------------------- | --------------------------------------------- |
  | `team1@example.com` | Hello Team 1, please see the attached report. |
  | `team2@example.com` | Hello Team 2, please see the attached report. |
  | `team3@example.com` | Hello Team 3, please see the attached report. |

- **Input port 2**: Attachment data

To send the attachment data to the recipients in the table:

1. Connect the email parameters dataset to port 1 of the Email gem.
1. Connect the attachment dataset to port 2 of the Email gem.
1. Open the Email gem.
1. Enable the **Use column** checkbox for **To** and **Body** fields.
1. Select the columns from input 1 that correspond to the email parameters.
1. Enable **Include Data as Attachment** to attach the dataset as an XLSX or CSV file.
