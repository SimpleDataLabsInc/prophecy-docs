---
title: Table
id: table
slug: /analysts/table
description: Tables in the SQL warehouse
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

Tables represent structured datasets in the SQL warehouse of your fabric. In a pipeline, tables can serve as sources, targets, or intermediate stages. This is useful for adding checkpoints to long-running jobs, persisting intermediate results for debugging or auditing, and enabling downstream reuse of cleaned or transformed data.

:::note
Tables in pipelines do not support dbt properties, which are only applicable to [model sources and targets](/analysts/model-sources-and-targets).
:::

## What's next

Take a close look at using tables in the following pages.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
