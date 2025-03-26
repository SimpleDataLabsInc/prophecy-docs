---
title: Email
id: email
slug: /analysts/email
description: Email
tags:
  - gems
  - analyst
  - report
---

<span class="badge">Prophecy Automate</span><br/><br/>

## Email attachments

Each row of the input will correspond to one email sent.

Columns

- sender (must be included in smtp server, otherwise will always send from the user that is configured in smtp)
- recipients list (one string like `'user1@gmail.com,user2@gmail.com'`)
- attachments (path in dbfs that contains the attachment)

## Email data

The input is the dataset that will be sent in the email.

Data does not need to be stored to be sent.

You can choose the number of rows to send.

Recipients are simple text fields.

Sender must be included in smtp server, otherwise will always send from the user that is configured in smtp
