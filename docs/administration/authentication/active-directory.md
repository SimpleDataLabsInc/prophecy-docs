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

### Configured LDAP Groups API

You can use the Configured LDAP Groups API to retrieve all config data for your LDAP groups.

Example:

```
curl 'https://<prophecy-env-url>/api/idp/getAllIDPsConfig' \
  -H 'Content-Type: application/json;charset=utf-8' \
  -H 'cookie: prophecy-token=<prophecy-access-token>'
```

<details>
  <summary>Response:</summary>

```
{
 "data": {
  "config": [
   {
    "id": "cp_ldap",
    "type": "ldap",
    "name": "",
    "idp": "others",
    "resourceVersion": "",
    "idpConfig": {
     "host": "host-name-here:host-port",
     "insecureNoSSL": true,
     "insecureSkipVerify": true,
     "startTLS": false,
     "rootCA": "",
     "clientCert": "",
     "clientKey": "",
     "rootCAData": "",
     "clientCertData": "",
     "clientKeyData": "",
     "bindDN": "*****",
     "bindPW": "*****",
     "usernamePrompt": "cn",
     "userSearch": {
      "baseDN": "dc=example,dc=org",
      "filter": "(objectClass=person)",
      "username": "cn",
      "scope": "",
      "idAttr": "DN",
      "emailAttr": "mail",
      "nameAttr": "cn",
      "preferredUsernameAttr": "",
      "emailSuffix": ""
     },
     "groupSearch": {
      "baseDN": "ou=users,dc=example,dc=org|ou=newusers,dc=example,dc=org",
      "filter": "(objectClass=groupOfNames)",
      "scope": "",
      "userAttr": "",
      "groupAttr": "",
      "userMatchers": null,
      "nameAttr": "cn"
     }
    }
   },
   {
    "id": "cp_saml",
    "type": "saml",
    "name": "",
    "idp": "okta",
    "resourceVersion": "",
    "idpConfig": {
     "caData": "-----BEGIN CERTIFICATE-----\nCERT-HERE\r\n-----END CERTIFICATE-----\n",
     "emailAttr": "email",
     "entityIssuer": "issuer",
     "groupsDelim": ", ",
     "nameIDPolicyFormat": "persistent",
     "redirectURI": "https://env-domain/api/oauth/samlCallback",
     "ssoIssuer": "http://www.okta.com/TOKEN",
     "ssoURL": "https://SSO-URL",
     "usernameAttr": "name"
    }
   }
  ]
 },
 "success": true
}
```

  </details>

## User Matchers

This list contains field pairs that are used to match a user to a group. It adds a requirement to the filter that an attribute in the group must match the user's attribute value.
