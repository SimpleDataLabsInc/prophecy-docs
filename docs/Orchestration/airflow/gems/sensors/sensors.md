---
sidebar_position: 1
title: Sensors
id: sensors
description: Gems designed to wait for specific events to occur before allowing downstream tasks to run
tags: []
---

Sensors are a Gems that are designed to do exactly one thing - wait for something to occur. It can be time-based, or waiting for a file, or an external event, but all they do is wait until something happens, and then succeed so their downstream tasks can run.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
