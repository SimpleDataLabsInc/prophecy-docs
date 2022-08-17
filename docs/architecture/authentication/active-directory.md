---
title: "Active-Directory"
id: active_directory
description: Authentication using Active Directory
sidebar_position: 2
tags:
  - authentication
  - ad
  - active-directory
---

This document describes how to configure LDAP(Active Directory) as an identity provider for Prophecy.

## Configure Prophecy to connect with your LDAP

- Login to Prophecy IDE using admin user
- Go to settings and Admin tab and choose "Authentication Provider" as LDAP and fill up below set of information and
  click Save.
- Logout and now you will be able to login using to Prophecy your LDAP/Active Directory credentials.

These are the set of informations which we are supposed to provide for LDAP configuration.

<img width="766" alt="Screenshot 2022-06-27 at 1 31 56 PM" src="https://user-images.githubusercontent.com/59466885/176030504-1420d323-5969-4f3f-98ae-996e1e63ed38.png" />

### Host and Certs

**Host**: Host and optional port of the LDAP server in the form "host:port". If the port is not supplied, it will be guessed based on "Disable SSL", and "Start TLS" flags.

**Disable SSL**: Following field is required if the LDAP host is not using TLS (port 389). Because this option inherently leaks passwords to anyone on the same network.

**Skip Certificate Verification**: If a custom certificate isn't provided, this option can be used to turn on TLS certificate checks.

**Certificates**: Please upload trusted Root certs, client certs and client keys

### Binds

**Bind Distinguished Name**: The distinguished name for an application service account. The connector uses these
credentials to search for users and groups.

**Bind Password**: The distinguished password for an application service account. The connector uses these credentials
to search for users and groups.

**Username Prompt**: The attribute to display in the provided password prompt.

### User Search

**Base Distinguished Name**: BaseDN to start the search from.
**Filters**: Optional filter to apply when searching the directory.
**Username**: Username attribute used for comparing user entries.
**ID Attribute**: String representation of the user.
**Email Attribute**: Attribute to map to Email.
**Name Attribute**: Maps to display name of users.

### Group Search

**Base Distinguished Name**: BaseDN to start the search from.
**Filter**: Optional filter to apply when searching the directory.
**Name Attribute**: Maps to display name of users.

### User Matchers

Add the list contains field pairs that are used to match a user to a group. It adds an additional requirement to the filter that an attribute in the group must match the user's attribute value.
