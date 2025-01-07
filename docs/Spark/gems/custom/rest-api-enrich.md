---
sidebar_position: 5
title: RestAPIEnrich
id: rest-api-enrich
description: Enrich DataFrame with content from rest API response based on configuration
tags:
  - gems
  - api
  - custom
  - rest
---

import Requirements from "../\_gem-requirements.mdx";

<h3><span class="badge">Spark Gem</span></h3>

<Requirements packagename="ProphecySparkBasicPython"
  packageversion="0.0.1"
  scalalib=""
  pythonlib=""
  packageversion122="Not Supported"
  packageversion143="Not Supported"
  packageversion154="Supported 0.0.1+"
/>

Enriches the DataFrame by adding column(s) with content from REST API output based on the given configuration.

### Parameters

Each property can either be set as a static value or a value from an existing column of the input DataFrame. Please refer
to the examples in the description column of each parameter for reference on how the string value should be formed.

| Parameter       | Description                                                                                                                                                                                                                     | Required | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| method          | method for the new Request object: `GET`, `OPTIONS`, `HEAD`, `POST`, `PUT`, `PATCH`, or `DELETE`.                                                                                                                               | true     |         |
| url             | URL for the REST API.                                                                                                                                                                                                           | true     |         |
| params          | Dictionary, list of tuples or bytes to send in the query string for the Request. eg: `{"key1":"value1", "key2": value2, "key3": ["value1", "value2"]}`                                                                          | false    |         |
| data            | Dictionary to send in the body of the Request. eg: `{"key1":"value1", "key2": value2}`                                                                                                                                          | false    |         |
| JSON            | A JSON serializable Python object to send in the body of the Request. eg: `{"key1":"value1", "key2": value2}`                                                                                                                   | false    |         |
| headers         | Dictionary of HTTP Headers to send with the Request. eg: `{"key1":"value1", "key2": "value2"}`                                                                                                                                  | false    |         |
| cookies         | Dictionary to send with the Request. eg: `{"key1":"value1", "key2": "value2"}`                                                                                                                                                  | false    |         |
| auth            | Auth tuple to enable Basic/Digest/Custom HTTP Auth. eg: `user:pass`                                                                                                                                                             | false    |         |
| timeout         | How many seconds to wait for the server to send data before giving up, as a float, eg: `0.5` or a (connect timeout, read timeout) tuple. eg: `0.5:0.25`                                                                         | false    |         |
| allow redirects | Enable/disable `GET/OPTIONS/POST/PUT/PATCH/DELETE/HEAD redirection`. eg: `true` or `false`                                                                                                                                      | false    | true    |
| proxies         | Dictionary mapping protocol to the URL of the proxy. eg: `{"https" : "https://1.1.0.1:80"}`                                                                                                                                     | false    |         |
| verify          | Either a boolean, in which case it controls whether we verify the server’s TLS certificate eg: `true` or `false` or a string, in which case it must be a path to a CA bundle to use. Defaults to True. eg: `dbfs:/path-to-file` | false    | true    |
| stream          | if False, the response content will be immediately downloaded. eg: `true` or `false`                                                                                                                                            | false    |         |
| cert            | if String, path to SSL client cert file (.pem). eg. `dbfs:/path-to-file`. If Tuple, (‘cert’, ‘key’) pair. eg: `cert:key`.                                                                                                       | false    |         |
| parse content   | Parse content as JSON (to make the schema available, enable `custom schema`, and click `infer from cluster` at the bottom left in the output tab)                                                                               | false    | false   |

:::info

1. To store sensitive information like API key (headers), auth etc., `Databricks secrets` can be used as shown in [Example](#example-1) below.
2. If the expected number of rows are very large, it's better to provide `await time` in the `advanced tab` so you don't overwhelm the source server or exceed any request limits.
3. For APIs which takes list of parameters as inputs, window functions like `collect_list` can be used before `RestApiEnrich` Gem to reduce the number of API calls.

Please make sure that cluster is connected while using the `parse content` option to `infer the schema from cluster` for the first time.
:::

:::note
All input parameters are expected to be in string format. Other column types such as `array/JSON/struct` can be created
using combination of aggregate/window Gems along with reformat component and then can be cast as string prior to passing the column in `RestAPIEnrich Gem`
as needed.
:::

### Example 1 {#example-1}

Let's try to fetch prices for few cryptocurrencies from [Coin-API](https://www.coinapi.io/).

We would be taking cryptocurrency and currency as input from DataFrame and pass url, headers as static values.
Note that URL in this example is created using static base url and adding cryptocurrency and currency as inputs
from DataFrame.

Also, we would be using Databricks-secrets to pass headers as it requires API-key.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/184725747-88115fa5-b70b-4caf-b3e0-1f2476e15d6e.mp4" title="Rest API example 1" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Example 2

Let's take a more complex example, where all method, url, headers, params etc are passed as values from DataFrame
columns.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/184725732-5cafc278-c1cf-4bad-9078-9f810ede008a.mp4" title="Rest API example 2" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

#### Generated Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def get_data_from_api(spark: SparkSession, in0: DataFrame) -> DataFrame:
    requestDF = in0.withColumn(
        "api_output",
        get_rest_api(
          to_json(struct(lit("GET").alias("method"), col("url"), lit(Config.coin_api_key).alias("headers"))),
          lit("")
        )
    )

    return requestDF.withColumn(
        "content_parsed",
        from_json(col("api_output.content"), schema_of_json(requestDF.select("api_output.content").take(1)[0][0]))
    )

```

</TabItem>
</Tabs>

````
