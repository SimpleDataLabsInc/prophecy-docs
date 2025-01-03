---
title: "SAML Using Okta"
id: saml-okta
description: SAML authentication using OKTA
sidebar_position: 5
tags:
  - authentication
  - saml
  - okta
---

Single sign-on (SSO) enables you to authenticate your users using your organization’s identity provider.
This document focuses on using Okta as SAML IdP for Prophecy and enabling SCIM provisioning for syncing users and
groups.

## Configure Okta

1. Log in to Okta as an administrator.
2. On the homepage, navigate to **Applications** > **Applications**.
3. Click **Create App Integration**.
4. Select **SAML 2.0** and click **Next**.
5. Enter **App Name** as _Prophecy SAML App_ and click **Next**.
6. For **Single Sign-On URL**, specify `https://your-prophecy-ide-url.domain/api/oauth/samlCallback`.
7. Select **Use this** for both **Recipient URL** and **Destination URL**.
8. In **Audience URI (SP Entity ID)**, provide a name to serve as the entity issuer ID (e.g., _prophecyokta_).
9. Set **Name ID format** to **EmailAddress** from the dropdown.
10. For **Application Username**, select **Email**.
11. Under **Attribute Statements**, add two attributes **name** and **email**.

![Okta config example](./img/okta_example.png)

12. Click **Next**.
13. Choose **I’m an Okta customer adding an internal app**.
14. Click **Finish**. The _Prophecy SAML App_ is now displayed.

## Configure Prophecy to connect to Okta

### Information required from Okta

#### Download SAML Signing Certificate

1. Navigate to the **Sign On** tab of _Prophecy SAML App_ in Okta.
2. Locate the **SAML Signing Certificates** section.
3. Click the download button, as shown in the example below, to download the certificate:

![Download Okta Cert](./img/okta_dl_cert.png)

#### SSO URL

1. In the same **Sign On** tab under **SAML Signing Certificates**, click **View IdP metadata**.
2. This action opens an XML file in a new browser tab.
3. Copy the red-highlighted text in the **Location** section of the XML file and use it as the **SSO URL** in Prophecy IDE.

![IDP Metadata](./img/okta_idp_metadata_xml.png)

#### Entity and SSO Issuer

1. Go to the **General** tab, then navigate to the **SAML Settings** section and click **Edit**.
2. Click **Next** to reach the **Configure SAML** section.
3. Scroll to the bottom and click the **Preview the SAML assertion** button.
4. This opens a new browser tab.
5. Copy the highlighted information from the preview and use it as the **Entity Issuer** and **SSO Issuer** in Prophecy IDE.

![SAML Assertion](./img/okta_xml.png)

### Configuring Prophecy

1. Log in to Prophecy IDE as an admin user.
2. Navigate to the **SSO** tab of the Prophecy **Settings** page.
3. Under **Authentication Provider**, select **Prophecy Managed**.

![SSO Settings](./img/sso_settings.png)

4. Enter the **Organization ID** and **Team Name** for your organization and team, respectively.
5. Click **Configure** to generate a SCIM Token. Make a record of this token, as it will be required later for provisioning SCIM in Okta.

![SSO Settings With SCIM token](./img/sso_settings_with_token.png)

6. Click **Save**.
7. Enter the information noted during the Okta setup and click **Save**.
8. Once SCIM Provisioning is enabled for the _Prophecy SAML App_ in Okta and users/groups are assigned to it, logout from Prophecy IDE. The assigned users will then be able to log in to Prophecy IDE via Okta.

![SSO Detailed Settings](./img/sso_settings_detailed.png)

### Assigning Users to Prophecy in Okta

1. Navigate to the **Assignment** tab of _Prophecy SAML App_ in Okta.
2. Click **Assign** > **Assign to People**.
3. Search for your users and assign them to the Prophecy app.

## Sync Users and Groups from Okta using SCIM

This section describes how to configure your Okta and Prophecy to provision users and groups to Prophecy using SCIM,
or System for Cross-domain Identity Management, an open standard that allows you to automate user provisioning.

### About SCIM provisioning in Prophecy

Prophecy provides a SCIM connector that lets you use Okta to create/update users and groups/teams in Prophecy, give them the proper level of access,
and remove access (de-provision them) when they leave your organization or no longer need access to Prophecy.

The _Prophecy SAML App_ in Okta must be assigned to users/groups in Okta for the SCIM connector to be triggered and
create corresponding users in Prophecy.

Note:

- Any app assignments made to a group in Okta will only create new users in Prophecy which belonged to this
  group in Okta. A `Push Group` operation should be triggered by admin in Okta to create a new team/group in Prophecy.

- A `Push Group` operation only creates group/team in Prophecy and not users. To create users, the app must be assigned
  to the group

- Importing user/groups from Okta to Prophecy is supported but not vice-versa i.e. any changes made to a synced user in
  Prophecy IDE will not be synced back to Okta and will get overwritten whenever any update to user is synced from Okta.

- Updates to primary email is not supported in Prophecy via SCIM.

- Login via secondary emails registered with Okta is not supported in Prophecy.

- De-provisioning of a user from Okta deletes that user from Prophecy and not deactivates it. As a result, a
  de-provisioned user will lose their personal projects in Prophecy.

#### Requirements

To provision users/groups to your Prophecy account using SCIM,

- you must be Okta admin
- you must be a Prophecy account admin.

### Enable SCIM Provisioning for _Prophecy SAML App_ in Okta

- Go to `General` tab of _Prophecy SAML App_ in Okta and click `Edit` in the `App Settings` section.
- Select the checkbox in Provisioning sub-section which says `Enable SCIM provisioning`.
- Click `Save`.

#### Choose provisioning options

1. From the app integration's settings page, choose the `Provisioning` tab. The SCIM connection settings appear under `Settings` > `Integration`.
2. Click `Edit`.
3. Specify the SCIM connector base URL as `https://your-prophecy-ide-url.domain/proscim`
4. Specify the field name of the Unique identifier for users as `userName`.
5. Under Supported provisioning actions, choose the following provisioning actions:

- `Push New Users`
- `Push Profile Updates`
- `Push Groups`

6. For Authentication Mode, choose `HTTP Header` from the dropdown box and in `Authorization`, provide the SCIM token as generated in Prophecy IDE above.
7. Click on `Test Connector Configuration` to check the connectivity to the SCIM server.
8. If the connection test succeeds, click Save. A new tab will appear on app integration's settings page named `Push Groups`.

![Scim Provisioning](./img/scim_provisioning.png)

#### User/Group Assignment to _Prophecy SAML App_ in Okta

1. Go to the `Assignment` tab of _Prophecy SAML App_ in Okta
2. To assign to individual people, click `Assign` -> `Assign to People`. Search your users and assign them to the Prophecy app.
3. To assign to groups, click `Assign` -> `Assign to Groups`. Search your groups and assign them to the Prophecy app.

![Assign App](./img/app_assign.png)

As mentioned earlier, assigning app to Group only creates new users in Prophecy IDE belonging to this group but doesn't create a group in Prophecy. To create a group:

1. Go to the `Push Groups` tab of the _Prophecy SAML App_ in Okta
2. Click `Push Groups` -> `Find groups by name/rule`, enter the name/rule.

![Find Groups](./img/push_groups_find.png)

3. Select the checkbox to `Push group memberships immediately`.
4. In dropdown of Create/Link Group, select `Create Group` (leave as is if already selected)
5. Click `Save`.

![Push Groups by Name](./img/push_groups_by_name.png)
