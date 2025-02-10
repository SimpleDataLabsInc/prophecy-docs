---
title: Email
id: email
description: Email
tags: []
---

Each row of the input will correspond to one email sent.

Columns

- sender (must be included in smtp server, otherwise will always send from the user that is configured in smtp)
- recipients list (one string like `'user1@gmail.com,user2@gmail.com'`)
- attachments (path in dbfs that contains the attachment)
