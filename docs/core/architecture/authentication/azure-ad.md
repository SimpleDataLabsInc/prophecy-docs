This document describes how to configure Azure Active Directory as the identity provider for Prophecy.


## Register a new Azure App
- In a new browser tab, log into [Azure Portal](https://portal.azure.com/) as an administrator and register a new app "ProphecyAzureADApp"

- In the home page search bar, search for "App Registrations"

- Click "New Registration"
- Give name as "ProphecyAzureADApp"
- Supported account type as "Accounts in this organizational directory only (xxxxx only - Single tenant)"
- Redirect URI : Choose "Web" in drop down
- Redirect URI : https://your-prophecy-ide-url/api/oauth/azureadCallback
- Click Register


### API Permission
- Go to "API permissions" on the left hand side and add these set of API permissions 
<img width="799" alt="Screenshot 2022-06-13 at 9 57 16 PM" src="https://user-images.githubusercontent.com/59466885/173400731-acb084df-31a7-4858-b6ba-f395e888e60e.png">

### Certificates & Secrets
- Go to "Certificates & Secrets" add a new secret and note down the "value" of this secret. 

## Note down Azure AD params for Prophecy IDE configuration
### Client ID
- Click on "Overview" on the left hand side and note down the Application(client) ID. This will be used as client id in prophecy ide

### Client Secret
- You have already noted down the "value" of the secret you create earlier.


## Configure Prophecy to connect with your Okta setup
- Login to Prophecy IDE using admin user
- Go to settings and Admin tab and choose "Authentication Provider" as Azure Active Directory and fill up the information you noted down earlier. Save it.
- Logout and you will be able to see "Login with Azure Active Directory" option. Now users your Azure AD users will be able to login to Prophecy IDE using "Login with Azure Active Directory" option
