---
sidebar_position: 1
title: ML Text Processing
id: ml-text-processing
description: Text processing to prepare data to submit to a foundational model API.
tags:
  [
    generative-ai,
    machine-learning,
    llm,
    text-processing,
    web-scraping,
    chunk,
    extract,
  ]
---

[page under construction]

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/7v6y4ldt5x?seo=false?videoFoam=true" title="Getting Started With SQL Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

<br />

The TextProcessing Gem enables text data preparation for machine learning in two different ways:

1. [Load](/docs/low-code-spark/gems/machine-learning/ml-text-processing.md#1-load-web-urls-and-extract-text) web URLs and extract text.
2. [Split](/docs/low-code-spark/gems/machine-learning/ml-text-processing.md#2-split-text-data-into-equal-chunks) text data into equal chunks.

Follow along to see how to use the TextProcessing Gem. For an example set of Pipelines that uses this Gem to create a Generative AI Chatbot, see this [guide.](/docs/getting-started/genaichatbot.md)

### 1. Load web URLs and Extract Text

Given a column with web URLs, the `Load web URLs` operation will scrape the content from each URL, and output the content as a binary format or as a human readable text format, depending on the operation type selected.

![Overview web scrape](./img/ml-text-proc-scrape-overview.png)

![Overview web scrape and extract text](./img/ml-text-proc-scrape-extract-overview.png)

#### 1a. Configure web scrape

![Configure to web scrape](./img/ml-text-proc-scrape-configure.png)

Configure the **(1) Operation Type** to Load url (web scrape), and optionally extract the text. Specify which input **(2) Column name** contains the web urls. If the `extract text` operation is selected, the text will be converted from binary to human readable format.

#### 1b. Input

| Parameter                      | Description                                                      | Required |
| ------------------------------ | ---------------------------------------------------------------- | -------- |
| Column name (string with urls) | string - the input column which contains the strings of web URLs | True     |

### 1c. Output

| Parameter                                               | Description                                                                          |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Result content `Load url (web scrape)`                  | binary - the contents of each web page                                               |
| Result content `Load url (web scrape) and extract text` | string - the contents of each web page, converted from binary to human readable text |

#### 1d. Generated Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def scrape_pages(spark: SparkSession, in0: DataFrame) -> DataFrame:
    from pyspark.sql.functions import expr, array, struct
    from spark_ai.webapps import WebUtils
    WebUtils().register_udfs(spark)

    return in0.withColumn("result_content", expr(f"web_scrape(loc)"))
```

</TabItem>
<TabItem value="scala" label="Scala">

```
[Not yet supported]
```

</TabItem>
</Tabs>

````

### 2. Split text data into equal chunks

![Overview Chunkify](./img/ml-text-proc-overview-chunkify.png)

#### 2a. Configure text splitting

Given a text input, the `Split data` operation will separate the input column entries into chunks of specified `size`.

![Configure to Chunkify](./img/ml-text-proc-configure-chunkify.png)

Select the **(1) Operation type** to split text into equal chunks. Specify which input **(2) Column name** contains the relevant content. Specify an integer chunk **(3) Size** relevant for your generative AI use case.

#### 2b. Input

| Parameter   | Description                                                             | Required |
| ----------- | ----------------------------------------------------------------------- | -------- |
| Column name | string - the text content which should be split into equal chunks       | True     |
| Size        | integer - the size of each chunk, number of characters. Example: `1000` | True     |

#### 2c. Output

| Parameter     | Description                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| result_chunks | array(string) - an array of text strings, each string representing one chunk of the larger text content |

#### 2d. Generated code

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def Chunkify(spark: SparkSession, web_bronze_content: DataFrame) -> DataFrame:
    from pyspark.sql.functions import expr, array, struct
    from spark_ai.files.text import FileTextUtils
    FileTextUtils().register_udfs(spark)

    return web_bronze_content.withColumn("result_chunks", expr(f"text_split_into_chunks(content, 1000)"))
```

</TabItem>
<TabItem value="scala" label="Scala">

```
[Not yet supported]
```

</TabItem>
</Tabs>


### FAQ

**How does this Gem fit into the bigger picture of building a generative AI application?**

For an example set of Pipelines that uses this Gem to create a Generative AI Chatbot, see this [guide.](/docs/getting-started/genaichatbot.md). Feel free to contact us (contact.us@Prophecy.io) to explore your use case.

#### Troubleshooting

Select a chunk size according to the limitations of your vector database index.
````
