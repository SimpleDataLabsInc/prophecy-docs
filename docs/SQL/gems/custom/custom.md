---
title: Custom
id: custom-sql-gems
description: Gems that don't fit an existing category
sidebar_position: 12
tags:
  - custom
  - sql
---

Prophecy allows you to define new functions and gems by leveraging dbt macros as the underlying format. Both functions and gems can be easily defined visually and in code.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
