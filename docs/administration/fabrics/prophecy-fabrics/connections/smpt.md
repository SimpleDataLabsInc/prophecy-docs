---
title: SMTP
id: smtp
description: Learn how to configure an SMTP connection
tags:
  - connections
  - smtp
---

To create an SMTP connection, enter the following parameters:

| Parameter                                                            | Description                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------- |
| Connection Name                                                      | Unique name for the connection (e.g., `MySMTPConnection`) |
| URL                                                                  | SMTP server URL (e.g., `smtp.gmail.com`)                  |
| Port                                                                 | SMTP port. Port options may vary between SMTP services.   |
| Username                                                             | Your SMTP username                                        |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Your SMTP password                                        |

<!-- You can leverage your SMTP connection to send emails with the [Email](docs/analysts/development/gems/report/email.md) gem. -->
