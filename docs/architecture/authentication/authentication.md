---
title: "Authentication"
date: 2022-03-21T14:45:52-07:00
sidebar_position: 2
id: authentication
description: >
  Prophecy support for identity providers for authentication and authorization
tags: []
---

Prophecy can connect with Identity providers to ensure that you can login into Prophecy with an external identity
provider. For authorization, when you access the execution infrastructure (that includes Spark, scheduler, storage and
other cloud resources), your identity is passed through by Prophecy, ensuring that your existing authorization mechanisms
are respected.

We currently support

- [Active Directory (LDAP)](./active-directory.md)
- [Azure Active Directory](./azure-ad.md)
- [Azure Active Directory with SCIM](./azuread-scim.md)
- [Okta (SAML)](./saml-okta.md)

If you require some other authentication mechanism, please reach out to our team.
