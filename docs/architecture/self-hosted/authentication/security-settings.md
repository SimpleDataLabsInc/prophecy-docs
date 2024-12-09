---
sidebar_position: 1
title: Security
description: security
id: security-settings
tags:
  - admin
  - settings
  - keytab
  - security
---

The **Security** page of the Admin settings in Prophecy lets you configure Keytab files and Proxy User settings.
These connect to Kerberised Livy Setup while setting up Kerberos Auth in the [Livy Fabric](/docs/Spark/fabrics/livy.md).

![admin_settings](img/Admin_Settings.png)

:::info
This is only available for admin users on Private Saas/On-prem installations of Prophecy.
:::

### Keytabs for Kerberos Authentication

Here, the Admins can upload Keytab files for secure Authentication to Livy Fabrics. These Keytabs are stored in Prophecy's metadata storage in encrypted format.
Simply click on the `Add Keytab` button and provide the Livy URL, Kerberos Principal, and Keytab File for the given Livy URL.

:::info
Any changes in the Kerberos Authentication section would require a restart of the execution service for the Prophecy installation.
:::

![keytab](img/Keytab.png)

### Proxy-user Settings (Per user)

If you want to use impersonation-enabled authentication to the Livy server, you can set how to obtain the proxy-user value for each user here.
Currently, Prophecy supports two ways to sync this proxy-user value from AAD or LDAP.
Note that these values will sync to Prophecy every time the user logs in.

![proxy-user](img/proxy-settings.png)
