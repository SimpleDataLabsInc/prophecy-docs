---
title: "SAML Using Okta"
id: saml_okta
description: SAML authentication using OKTA
sidebar_position: 2
tags:
  - authentication
  - saml
  - okta
---

This document describes how to configure SAML using Okta as the identity provider for Prophecy.

## Configure Okta

- log into Okta as an administrator.
- In the home page, click Applications > Applications.
- Click Create App Integration.
- Select SAML 2.0 and click Next.
- Set App name to "Prophecy SAML App" and click Next.
- Single Sign On URL: https://your-prophecy-ide-url.domain/api/oauth/samlCallback
- Select Use this for Recipient URL and Destination URL
- Audience URI (SP Entity ID): Give a name which will be used as entity issuer ID. For example: `prophecyokta`
- Name ID format: Choose "EmailAddress" from drop down
- Application username: Email
- Attribute Statements: Please add two attributes name and email with the same details as given in below screenshot.

![Screenshot 2022-06-11 at 5 30 31 PM](https://user-images.githubusercontent.com/59466885/173188607-ed5c89c9-8fcc-47a2-ba8c-966d45729b50.png)

- Click Next.
- Select I’m an Okta customer adding an internal app.
- Click Finish. The "Prophecy SAML app" is shown.

## User Assignment to "Prophecy SAML App" in Okta

- Go to Assignment tab of "Prophecy SAML App" in Okta
- Click Assign -> Assign to People. Search your users and assign them to Prophecy app.

## Note down Okta params for Prophecy IDE configuration

### SSO URL

- Go to General tab of "Prophecy SAML App" in Okta and go towards the bottom of the page and find the section "App Embed Link". Note down the URL.
  ![Screenshot 2022-06-11 at 5 46 10 PM](https://user-images.githubusercontent.com/59466885/173188012-d6885bc4-3d32-42e5-b42c-89574343bd35.png)

### Certificate

- Go to Sign On tab and find out "SAML Signing Certificates" section. Download the certificate by clicking on marked place in below image
  <img width="569" alt="Screenshot 2022-06-11 at 5 39 06 PM" src="https://user-images.githubusercontent.com/59466885/173188121-6324269d-c883-44b5-8462-32fb9014dc61.png" />

### Entity and SSO Issuer

- Go to General tab-> SAML Settings section -> Edit
- Click Next to go to "Configure Saml" section and go to the bottom and click on "Preview the SAML assertion" button, it will open another tab in browser, and please note down the highlighted info from here to use as Entity Issuer and SSO Issuer in Prophecy IDE

![Screenshot 2022-06-11 at 5 41 41 PM](https://user-images.githubusercontent.com/59466885/173188309-17494cc7-7a1c-407e-bc80-3bd1bc122f67.png)

## Configure Prophecy to connect with your Okta setup

- Login to Prophecy IDE using admin user
- Go to settings and Admin tab and choose "Authentication Provider" as SAML and fill up the information you noted down in your Okta setup and click Save.
- Logout and you will be able to see "Login with SAML" option. Now users assigned to "Prophecy SAML app" in Okta will be able to login to Prophecy IDE using "Login with SAML" option

![Screenshot 2022-06-11 at 6 11 56 PM](https://user-images.githubusercontent.com/59466885/173188539-b445f4f9-d83e-4cab-98fc-7e2447f60ebb.png)
