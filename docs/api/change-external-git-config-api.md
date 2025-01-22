---
title: Change External Git Provider API
id: change-external-git-api
sidebar_class_name: hidden
description: Use this API to manage the Git provider configured for specific Prophecy projects
tags: [git, api, gitlab, bitbucket, github]
---

If you've migrated Git providers, you'll need to update Prophecy Projects to use the new Git provider. You can use the GraphQL API to configure Prophecy Projects to point to the migrated repositories. The steps below will work for all the Git providers supported in Prophecy.

### Steps

1. Login to Prophecy as the Team Admin
2. Generate a Prophecy API token
3. Craft the API calls as below.

Example:

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
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

Response:

```
{

}
```

4. Submit the API call
