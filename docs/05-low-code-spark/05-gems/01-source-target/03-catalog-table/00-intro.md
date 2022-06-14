---
title: Catalog Table
---

Constitutes various catalog based providers that can be read from and written to as using the `Source` and `Target` gems.

Spark (and more specifically Hadoop) environments have built-in Metastore (Hive Metastore) that has databases and
tables registered, for which it also keeps statistics that help with query planning. Databricks additionally
has the delta catalog of delta tables.


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
