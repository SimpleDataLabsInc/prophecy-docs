---
title: Change External Git Provider API
id: change-external-git-api
sidebar_class_name: hidden
description: Use this API to manage the Git provider configured for specific Prophecy projects
tags: [git, api, gitlab, bitbucket, github]
---

If you've migrated Git providers, you'll need to update Prophecy Projects to use the new Git provider. You can use the `updateRemoteURI` API to configure Prophecy Projects to point to the migrated repositories.

You'll be able to perform the API call manually or using [Postman](#tips). If you need to migrate projects in bulk, [follow these steps](#tips) before calling the `updateRemoteURI` API.

### Steps

The steps below will work for all the Git providers supported in Prophecy.

1. Login to Prophecy as the Team Admin.
2. Generate a [Prophecy API token](https://docs.prophecy.io/api/#personal-access-token).
3. Craft the API calls as below.
4. Submit the API call

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
  "query": "mutation {\n  updateRemoteUri(\n    projectUID: \"***123***\"\n    externalRepoUri: \"https://gitlab.com/****/my-destination-repo.git\"\n    externalGitProvider: GitLab\n    externalRepoEmail: \"****@****.com\"\n    externalRepoUsername: \"****\"\n    externalRepoAccessToken: \"glpat-****\"\n  )\n}",
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
    "query": "mutation {\n  updateRemoteUri(\n    projectUID: \"***123***\"\n    externalRepoUri: \"https://gitlab.com/****/my-destination-repo.git\"\n    externalGitProvider: GitLab\n    externalRepoEmail: \"****@****.com\"\n    externalRepoUsername: \"****\"\n    externalRepoAccessToken: \"glpat-***\"\n  )*\n}",
    "variables": {}
}'

```

</TabItem>
<TabItem value="Readable" label="Readable">

```Readable
Url:
https://****.prophecy.io/api/md/graphql

Headers:
X-Auth-Token: '****'
Content-Type: 'application/json'

Body:
Body:
"query": "mutation {
            updateRemoteUri(
              projectUID: \"***123***\"
              externalRepoUri: \"https://gitlab.com/****/my-destination-repo.git\"
              externalGitProvider: GitLab
              externalRepoEmail: \"****@****.com\"
              externalRepoUsername: \"****\"
              externalRepoAccessToken: \"glpat-***\"
            )
         }"
```

</TabItem>
</Tabs>

````

Response:

```
{
 200
}
```

| Parameter               | Description                                                                                                              | Required | Example                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------- |
| projectUID              | Prophecy Project ID, found in the Project URL                                                                            | Required | "11"                                      |
| externalRepoUri         | Repository target for migration. Be sure to use the \*.git suffix as appropriate for cloning using https or SSH options. | Required | "https://gitlab.com/****/examplerepo.git" |
| externalGitProvider     | Possible values (case sensitive): Github, GithubEnterprise, GitLab, GitLabEnterprise, BitBucket, AzureDevOps, Other      | Required | GitLab                                    |
| externalRepoEmail       | If provided, the API call will validate the two repos are the same.                                                      | Optional | "myemail@mycompany.com"                   |
| externalRepoUsername    | If provided, the API call will validate the two repos are the same.                                                      | Optional | "myGitLabUsername"                        |
| externalRepoAccessToken | If provided, the API call will validate the two repos are the same.                                                      | Optional | "gitlab-token"                            |

### Each user needs to update their Git credential

After each Project is configured for a new Git provider's repo, the Prophecy users will need to update their Git credentials.

1. Open the new Git provider (eg Gitlab) and create a new token. Be sure the new token has permission to write to all the important repositories.
2. Open Prophecy. Add a new Git credential for the new provider (eg Gitlab). Configure Projects to use the new Git credential.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/mwg1ku3drp?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Tips

<details>
<summary> Use Postman to craft the API call </summary>

- Install [Postman](https://www.postman.com/downloads/).
- Create a new POST API request in Postman
  - Enter your Prophecy GraphQL API endpoint, eg https://\*\*\*\*.prophecy.io/api/md/graphql.
- Go to the Headers Tab and enter X-Auth-Token for the key and your API token as the value.
- Go to the Body tab and enter the following to call updateRemoteUri:

```
mutation {
  updateRemoteUri(
    projectUID: "<insert_project_UID_here>"
    externalRepoUri: "<insert_target_repo_here>"
    externalGitProvider: <insert_target_git_provider_here>
    externalRepoEmail: "<insert_your_email_here>"
    externalRepoUsername: "<insert_your_git_provider_username_here>"
    externalRepoAccessToken: "<insert_gitlab_token_here>"
  )
}
```

</details>

<details>
<summary> Error response </summary>
If you see an `access denied` error response when calling the Git migration API:

1. Verify the Prophecy API token is created by the team admin
2. Verify the token for the target Git provider
   [a] has permission to push to the repo
   [b] has permission to push to the branch, and
   [c] is the right type of token (app token for gitlab, personal access token for github, etc.).

</details>

<details>
<summary> Bulk repository migrations </summary>

If you have many projects to change, use a separate API call to list your team’s project IDs and URLs. Duplicate the query, modify the Body tab, and enter the following:

```
tableQueryProject(<insert_project_uid_here>: String!) {
  Team(uid: <insert_team_uid_here>) {
    _id
    name
    projects {
      _id
      name
      externalOriginUri
    }
  }
}
```

Now you can use the returned list of Project UIDs to call the Git migration API, once per Project UID.
This can be automated using a simple script.

</details>
