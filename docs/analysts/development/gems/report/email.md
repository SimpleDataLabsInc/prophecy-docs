---
title: Email
id: email
slug: /analysts/email
description: Send your pipeline output tables to others via email
tags:
  - gems
  - analyst
  - report
---

<span class="badge">Prophecy Automate</span><br/><br/>

Use the Email gem to send your pipeline output tables to others via email.

## Input

| Port    | Description                                                                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | The table that will be sent with the email. You can only configure one input. <br/>You do not need to write the input table to storage to send it in an email. |

The gem will send email(s) when it runs. No output table will be written to your data warehouse.

## Parameters

| Parameter                   | Description                                                                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Select or create connection | Defines which [SMTP connection](docs/administration/fabrics/prophecy-fabrics/connections/smtp.md) to use for the gem. This will also determine the **sender** of the email. |
| To                          | Specifies the recipient(s) of the email. You can add multiple recipients.                                                                                                   |
| Cc                          | Specifies the recipients to be included in the CC field.                                                                                                                    |
| Bc                          | Specifies the recipients to be included in the BCC field.                                                                                                                   |
| Subject                     | Defines the subject of the email, providing a brief summary of its content.                                                                                                 |
| Body                        | Contains the main content or body of the email, where you can provide the message.                                                                                          |
| Include Data as Attachment  | Checkbox that enables sending input data as an attachment in the email. <br/>You can send the data as an XLSX or CSV file.                                                  |
