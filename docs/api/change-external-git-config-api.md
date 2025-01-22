---
title: Change External Git Provider API
id: change-external-git-api
sidebar_class_name: hidden
description: Use this API to manage the Git provider configured for specific Prophecy projects
tags: [git, api, gitlab, bitbucket, github]
---

If you've migrated Git providers, you'll need to update Prophecy Projects to use the new Git provider. You can use the git migration API to configure Prophecy Projects to point to the migrated repositories.

You'll be able to perform the API call manually or using [Postman](#anchor1). If you need to migrate projects in bulk, [follow these steps](#anchor2) before running the git migration API.

### Steps

The steps below will work for all the Git providers supported in Prophecy.

1. Login to Prophecy as the Team Admin.
2. Generate a  [Prophecy API token](https://docs.prophecy.io/api/#personal-access-token).
3. Craft the API calls as below.

Example:

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
import requests
import json

url = "https://****.prophecy.io/api/md/graphql"

payload = json.dumps({
  "query": "mutation {\n  updateRemoteUri(\n    projectUID: \"123\"\n    externalRepoUri: \"https://gitlab.com/****/my-destination-repo.git\"\n    externalGitProvider: GitLab\n    externalRepoEmail: \"****@****.com\"\n    externalRepoUsername: \"****\"\n    externalRepoAccessToken: \"glpat-****\"\n  )\n}",
  "variables": {}
})
headers = {
  'X-Auth-Token': '****',
  '': '',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

</TabItem>
<TabItem value="curl" label="curl">

```curl
curl --location 'https://****.prophecy.io/api/md/graphql' \
--header 'X-Auth-Token: ****' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": "mutation {\n  updateRemoteUri(\n    projectUID: \"123\"\n    externalRepoUri: \"https://gitlab.com/****/my-destination-repo.git\"\n    externalGitProvider: GitLab\n    externalRepoEmail: \"****@****.com\"\n    externalRepoUsername: \"****\"\n    externalRepoAccessToken: \"glpat-***\"\n  )*\n}",
    "variables": {}
}'

```

</TabItem>
</Tabs>

````

4. Submit the API call

Response:

```
{

}
```

:::tip
If you see an `access denied` error:

1. Verify the Prophecy API token is created by the team admin
2. Verify the token for the target git provider  
    a. has permission to push to the repo  
    b. has permission to push to the branch  
    c. is the right type of token (app token for gitlab, personal access token for github, etc.)  
   :::

### What to do after the migration

Each user should

1. Open the new git provider (eg Gitlab) and create a new token. Be sure the new token has permission to write on all the important repositories.
2. Open Prophecy. Add a new Git credential for the new provider (eg Gitlab). Configure Projects to use the new Git credential.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/mwg1ku3drp?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
