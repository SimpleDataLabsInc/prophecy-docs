---
title: Limit
id: limit
description: Limit the number of rows
tags:
  - gems
  - limit
---

import Requirements from "../\_gem-requirements.mdx";

<h3><span class="badge">Spark Gem</span></h3>

Limits the number of rows in the output.

## Requirements

<Requirements
  packagename="ProphecySparkBasicsPython"
  packageversion="0.0.1"
  scalalib=""
  pythonlib=""
  packageversion143="Supported"
  packageversion154="Supported"
  additional_requirements=""
/>

### Parameters

| Parameter | Description                                                               | Required |
| :-------- | :------------------------------------------------------------------------ | :------- |
| DataFrame | Input DataFrame                                                           | True     |
| Limit     | Number of rows required in output (Allowed range: [0, 2<sup>31</sup> -1]) | True     |

### Example

![Example usage of Limit](./img/limit_eg_1.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def limit(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.limit(10)

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object limit {
  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.limit(10)
}
```

</TabItem>
</Tabs>

````
