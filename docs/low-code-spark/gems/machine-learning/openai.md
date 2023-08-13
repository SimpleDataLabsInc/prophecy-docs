---
sidebar_position: 2
title: OpenAI
id: ml-openai
description: Request OpenAI to generate a vector embedding or request OpenAI to answer a question with an optional context.
tags:
  [
    generative-ai,
    machine-learning,
    llm,
    openai,
    embedding,
    vector,
    answer,
    question,
  ]
---

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/8fuwr9738t?seo=false?videoFoam=true" title="Getting Started With SQL Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

The OpenAI Gem allows the Prophecy user to interact with the OpenAI API using two different functions:

1. Compute text embeddings
2. Answer a question (optionally) with a given context.

## Compute text embeddings

Input and Output

![Overview of the Gem showing the input and output for computing a text embedding](./img/openai-intro-compute-text-embeddings.png)

Gem function

Configure

![Configure the Gem to compute a text embedding](./img/openai-configure-embedding.png)

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def vectorize(spark: SparkSession, question_seed: DataFrame) -> DataFrame:
    from spark_ai.llms.openai import OpenAiLLM
    from pyspark.dbutils import DBUtils
    OpenAiLLM(api_key = DBUtils(spark).secrets.get(scope = "open_ai_sparklearner", key = "api_key"))\
        .register_udfs(spark = spark)

    return question_seed\
        .withColumn("_row_num", row_number().over(Window.partitionBy().orderBy(col("input"))))\
        .withColumn("_group_num", ceil(col("_row_num") / 20))\
        .withColumn("_data", struct(col("*")))\
        .groupBy(col("_group_num"))\
        .agg(collect_list(col("_data")).alias("_data"), collect_list(col("input")).alias("_texts"))\
        .withColumn("_embedded", expr(f"openai_embed_texts(_texts)"))\
        .select(
          col("_texts"),
          col("_embedded.embeddings").alias("_embeddings"),
          col("_embedded.error").alias("openai_error"),
          col("_data")
        )\
        .select(expr("explode_outer(arrays_zip(_embeddings, _data))").alias("_content"), col("openai_error"))\
        .select(col("_content._embeddings").alias("openai_embedding"), col("openai_error"), col("_content._data.*"))\
        .drop("_row_num")\
        .drop("_group_num")
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
[under construction]
```
</TabItem>
</Tabs>

````

## Answer a question with a given context

Input and Output

![Overview of the Gem showing the input and output for answering a question](./img/openai-intro-answer-question-context.png)

Configure the OpenAI Gem

![Configure the gem to answer a question with a given context](./img/openai-configure-answer.png)

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def OpenAI_1(spark: SparkSession, collect_context: DataFrame) -> DataFrame:
    from spark_ai.llms.openai import OpenAiLLM
    from pyspark.dbutils import DBUtils
    OpenAiLLM(api_key = DBUtils(spark).secrets.get(scope = "[redacted]", key = "[redacted]"))\
        .register_udfs(spark = spark)

    return collect_context\
        .withColumn("_context", col("context"))\
        .withColumn("_query", col("input"))\
        .withColumn(
          "openai_answer",
          expr(
            "openai_answer_question(_context, _query, \" Answer the question based on the context below.\nContext:\n```\n{context}\n```\nQuestion: \n```\n{query}\n```\nAnswer:\n \")"
          )
        )\
        .drop("_context", "_query")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
  [page under construction]
```

</TabItem>
</Tabs>

````

Credentials

Storing the API token as a Databricks Secret is highly recommended. For instructions click [here.](https://docs.databricks.com/en/security/secrets/index.html) Be sure to use the Fabric connection to the Databricks workspace which contains the Databricks scope and secrets configured in this Gem.

Hardcoding the credential is not recommended. Selecting this option could send credentials to be stored hardcoded in Git; use only for credentials that should be shared with the world. Contact us to understand the integrations with other secret managers.

## FAQ

### Troubleshooting
