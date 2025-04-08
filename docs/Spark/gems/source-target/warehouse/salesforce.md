---
title: Salesforce
id: salesforce
slug: /engineers/salesforce
description: Salesforce
tags:
  - gems
  - warehouse
  - salesforce
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecyWebAppPython"
  python_package_version="0.0.1+"
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="Not Supported"
  uc_shared="Not Supported"
  livy="Not Supported"
/>

:::info Built on
This connector is built on top of the already available [Spark Salesforce Library](https://github.com/springml/spark-salesforce/).

Install the `com.springml:spark-salesforce_2.12:1.1.4` Maven external dependency on your cluster.
To learn about installing dependencies in Prophecy UI, see [Spark dependencies](/engineers/dependencies).
:::

With the Source and Target gem, you can perform the following with Salesforce:

- Create datasets in Salesforce Wave from Spark `DataFrame`.
- Read a Salesforce Wave dataset where the user provides a SAQL to read data from Salesforce Wave. The Source gem constructs the query result as a `DataFrame`.
- Read a Salesforce object where the user provides a SOQL to read data from Salesforce object. The Source gem constructs a query result as a `DataFrame`.
- Update a Salesforce object where the Target gem updates the Salesforce object with the details present in `DataFrame`.

## Prerequisites

Before you specify parameters and properties, select the Salesforce application:

1. Open the gem configuration.
1. On the **Type & Format** page, navigate to the **Applications** tab.
1. Select **Salesforce**.

## Parameters

| Parameter   | Tab      | Description                                                                                                                                                                                                                                                          |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Credentials | Location | How to provide your credentials. <br/>You can select: `Databricks Secrets`, `Username & Password`, or `Environment variables`                                                                                                                                        |
| User Name   | Location | Salesforce Wave username. <br/>This user must have privileges to upload datasets or execute SAQL or SOQL.                                                                                                                                                            |
| Password    | Location | Salesforce Wave Password. <br/>**Append your security token along with password.** <br/>To reset your Salesforce security token, see [Reset Your Security Token](https://help.salesforce.com/s/articleView?id=xcloud.user_security_token.htm&language=en_US&type=5). |
| Login URL   | Location | Salesforce Login URL. <br/>Default: `https://login.salesforce.com.`                                                                                                                                                                                                  |
| Data Source | Location | Strategy to read data in the Source gem. <br/>Possible values are: `SAQL`, or `SOQL`.                                                                                                                                                                                |
| SAQL Query  | Location | If you select `SAQL` as the **Data Source**, SAQL query to use to query Salesforce Wave.                                                                                                                                                                             |
| SOQL Query  | Location | If you select `SOQL` as the **Data Source**, SOQL query to used to query Salesforce Object.                                                                                                                                                                          |

## Source

The Source gem reads data from Salesforce objects and allows you to optionally specify the following additional properties.

### Source properties

| Properties                                              | Description                                                                                                                                                              | Default  |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Description                                             | Description of your dataset.                                                                                                                                             | None     |
| Primary key chunking (Optional)                         | Whether to enable automatic primary key chunking for bulk query job. <br/>This splits bulk queries into separate batches of the size defined by **Chunk size** property. | `100000` |
| Chunk size                                              | Number of records to include in each batch. <br/>You can only use this property when you enable **Primary key chunking**. Maximum size is `250000`.                      | `100000` |
| Timeout                                                 | Maximum time spent polling for the completion of bulk query job.<br/>You can only use this property when you **enable bulk query**.                                      | false    |
| Max Length of column (Optional)                         | Maximum length of a column. <br/>You can only use this property when you **enable bulk query**.                                                                          | `4096`   |
| External ID field name for Salesforce Object (Optional) | Name of the external ID field in a Salesforce object.                                                                                                                    | `Id`     |
| Enable bulk query (Optional)                            | Whether to enable bulk query. <br/>This is the preferred method when loading large sets of data. Salesforce processes batches in the background.                         | false    |
| Retrieve deleted and archived records (Optional)        | Whether to retrieve deleted and archived records for SOQL queries.                                                                                                       | false    |
| Infer Schema                                            | Whether to infer schema from the query results. <br/>The Source gem takes sample rows to find the datatype.                                                              | false    |
| Date Format                                             | String that indicates the format for `java.text.SimpleDateFormat` to follow when reading timestamps. <br/>This applies to `TimestampType`.                               | null     |
| Salesforce API Version (Optional)                       | Version of the Salesforce API to use.                                                                                                                                    | `35.0`   |

## Example

The following example uses a `SOQL` query to query our leads dataset on the sales cloud.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/193517497-54c5544d-3b98-45ae-95e1-cb036bad6e4c.mp4" title="Salesforce Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Compiled code {#source-code}

:::tip
To see the compiled code of your project, [switch to the Code view](/engineers/pipelines#project-editor) in the project header.
:::

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def read_salesforce(spark: SparkSession) -> DataFrame:
    return spark.read\
        .format("com.springml.spark.salesforce")\
        .option("username", "your_salesforce_username")\
        .option("password", "your_salesforce_password_with_secutiry_token")\
        .option("soql", "select id, name, email from lead")\
        .load()
```
</TabItem>
</Tabs>
````

---

## Target

The Target gem writes data to Salesforce objects and allows you to optionally specify the following additional properties.

### Target properties

| Property                                                | Description                                                                                                                                                                                                                                     | Default |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description                                             | Description of your dataset.                                                                                                                                                                                                                    | None    |
| SF object to be updated (Optional)                      | Salesforce object to update when you enable **bulk query**.                                                                                                                                                                                     | false   |
| Name of the dataset to be created in Salesforce Wave    | Name of the Dataset to create in Salesforce Wave.                                                                                                                                                                                               | None    |
| Metadata configuration in json (Optional)               | JSON formatted metadata configuration to construct a [Salesforce Wave Dataset Metadata](https://resources.docs.salesforce.com/sfdc/pdf/bi_dev_guide_ext_data_format.pdf).                                                                       | None    |
| External ID field name for Salesforce Object (Optional) | Name of the external ID field in a Salesforce object when the Target gem updates or upserts into Salesforce.                                                                                                                                    | `Id`    |
| Flag to upsert data to Salesforce (Optional)            | Whether to upsert data to Salesforce. <br/>This property performs an insert or update operation using the `externalIdFieldName` as the primary ID. The Target gem does not update existing fields that are not in the `DataFrame` being pushed. | false   |

### Compiled code {#target-code}

:::tip
To see the compiled code of your project, [switch to the Code view](/engineers/pipelines#project-editor) in the project header.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def write_salesforce(spark: SparkSession, in0: DataFrame):
    in0.write.format("com.springml.spark.salesforce")\
		  .option("username", "your_salesforce_username")\
		  .option("password", "your_salesforce_password_with_secutiry_token")\
		  .option("DatasetName", "your_Dataset_name")
		  .save()
```
</TabItem>
</Tabs>
````
