---
title: "Active Directory with LDAP"
id: active_directory
description: Authentication using Active Directory with LDAP
sidebar_position: 2
tags:
  - authentication
  - ad
  - active-directory
---

Learn how to configure Active Directory with LDAP as an identity provider for Prophecy.

## Overview

Here are the basics steps to follow connect Prophecy with your LDAP:

1. Log in to Prophecy as an admin user.
2. Navigate to the **SSO** tab of the Prophecy **Settings** page.
3. Under **Authentication Provider**, select LDAP.
4. Fill out the rest of the information and click **Save**. More information about the available fields can be found below.

## Host and Certs

| Parameter                     | Description                                                                                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host                          | Host and optional port of the LDAP server in the form `host:port`. If the port is not supplied, it will be guessed based on "Disable SSL" and "Start TLS" flags. |
| Disable SSL                   | Required if the LDAP host is not using TLS (port 389). This option inherently leaks passwords to anyone on the same network.                                     |
| Skip Certificate Verification | If a custom certificate isn't provided, this option can be used to turn on TLS certificate checks.                                                               |
| Certificates                  | Upload trusted Root certs, client certs, and client keys.                                                                                                        |

## Binds

| Parameter               | Description                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Bind Distinguished Name | The distinguished name for an application service account. The connector uses these credentials to search for users and groups.     |
| Bind Password           | The distinguished password for an application service account. The connector uses these credentials to search for users and groups. |
| Username Prompt         | The attribute to display in the provided password prompt.                                                                           |

## User Search

| Parameter               | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| Base Distinguished Name | BaseDN to start the search from.                       |
| Filter                  | Optional filter to apply when searching the directory. |
| User Name               | Username attribute used for comparing user entries.    |
| ID Attribute            | String representation of the user.                     |
| Email Attribute         | Attribute to map to Email.                             |
| Name Attribute          | Maps to display name of users.                         |

## Group Search

| Parameter               | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| Base Distinguished Name | BaseDN to start the search from.                       |
| Filter                  | Optional filter to apply when searching the directory. |
| Name Attribute          | Maps to display name of users.                         |

## User Matchers

This list contains field pairs that are used to match a user to a group. It adds a requirement to the filter that an attribute in the group must match the user's attribute value.
