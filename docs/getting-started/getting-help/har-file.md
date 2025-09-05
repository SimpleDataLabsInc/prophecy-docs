---
title: Download HAR files
id: har-file
description: Download HAR files to help Prophecy troubleshoot
tags: []
---

If you need help from Prophecy Support, it can be helpful to provide HAR files that contain additional information about a certain action you want to debug.

This can be especially helpful if the issue involves connections to an execution environment, as the HAR file includes information like timing of network connections and failure messages from API calls.

## Steps

To capture the HAR file:

1. Open the page in Prophecy where the problem persists.
1. Right click on the webpage and select **Inspect** (or equivalent).
1. Open the **Network** tab.
1. Refresh the page. You should see websockets created in the Network tab.
1. Perform the action(s) that you want to capture.
1. Export the HAR file.
1. Upload the HAR file to your support ticket on Zendesk.

These steps may vary among browsers. Luckily, [Zendesk provides documentation](https://support.zendesk.com/hc/en-us/articles/4408828867098-Generating-a-HAR-file-for-troubleshooting) that outlines these steps for different browsers.
