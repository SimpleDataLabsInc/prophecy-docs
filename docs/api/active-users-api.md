---
title: Active and Total Users API
id: active-users-api
sidebar_class_name: hidden
description: Use this API to get current and total logged in users
tags: []
---

You can use the Active Users and Total Users APIs to find out the number of current and total users who are logged in to Prophecy. This can help you understand usage and times of high traffic, enabling you to manage capacity more effectively.

### Active Users API

Example:

```
curl --location 'https://<prophecy-env-url>/api/auth/userDetails' \
--header 'Cookie: prophecy-token=<prophecy-access-token>' | jq -r .activeUsers
```

Response:

```
{
  200
}
```

### Total Users API

Example:

```
curl --location 'https://<prophecy-env-url>/api/auth/userDetails' \
--header 'Cookie: prophecy-token=<prophecy-access-token>' | jq -r .userDetails.totalUsers
```

Response:

```
{
  1023
}
```
