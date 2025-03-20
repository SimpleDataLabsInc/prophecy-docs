---
title: Repartition
id: Repartition
description: Repartition or coalesce a DataFrame
tags:
  - gems
  - join-split
  - partition
  - repartition
  - coalesce
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1+"
/>

This will repartition or coalesce the input DataFrame based on the specified configuration. There are four different repartitioning options:

## Hash Repartitoning

Repartitions the data evenly across various partitions based on the hash value of the specified key.

### Parameters {#hash-repartitoning}

| Parameter                    | Description                                   | Required |
| ---------------------------- | --------------------------------------------- | -------- |
| DataFrame                    | Input DataFrame                               | True     |
| Overwrite default partitions | Flag to overwrite default partitions          | False    |
| Number of partitions         | Integer value specifying number of partitions | False    |
| Repartition expression(s)    | List of expressions to repartition by         | True     |

### Generated Code {#hash-repartitoning}

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def hashRepartition(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.repartition(5, col("customer_id"))
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object hashRepartition {

  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.repartition(5, col("customer_id"))

}
```

</TabItem>
</Tabs>

````

## Random Repartitioning

Repartitions without data distribution defined.

### Parameters {#random-repartitioning}

| Parameter            | Description                                   | Required |
| :------------------- | :-------------------------------------------- | :------- |
| DataFrame            | Input DataFrame                               | True     |
| Number of partitions | Integer value specifying number of partitions | True     |

### Generated Code {#random-repartitioning}

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def randomRepartition(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.repartition(5)
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object randomRepartition {

  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.repartition(5)

}
```

</TabItem>
</Tabs>

````

## Range Repartitoning

Repartitions the data with tuples having keys within the same range on the same worker.

### Parameters {#range-repartitoning}

| Parameter                              | Description                                                            | Required |
| -------------------------------------- | ---------------------------------------------------------------------- | -------- |
| DataFrame                              | Input DataFrame                                                        | True     |
| Overwrite default partitions           | Flag to overwrite default partitions                                   | False    |
| Number of partitions                   | Integer value specifying number of partitions                          | False    |
| Repartition expression(s) with sorting | List of expressions to repartition by with corresponding sorting order | True     |

### Generated Code {#range-repartitoning}

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def RepartitionByRange(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.repartitionByRange(5, col("customer_id").asc())
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object RepartitionByRange {

  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.repartitionByRange(5, col("customer_id").asc())

}
```

</TabItem>
</Tabs>

````

## Coalesce

Reduces the number of partitions without shuffling the dataset.

### Parameters {#coalesce}

| Parameter            | Description                                   | Required |
| :------------------- | :-------------------------------------------- | :------- |
| DataFrame            | Input DataFrame                               | True     |
| Number of partitions | Integer value specifying number of partitions | True     |

### Generated Code {#coalesce}

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def Coalesce(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.coalesce(5)
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Coalesce {

  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.coalesce(5)

}
```

</TabItem>
</Tabs>

````

## Video demo

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174014498-277e1037-8634-4752-a4f1-e0e1aae66659.mp4" title="Repartition" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
