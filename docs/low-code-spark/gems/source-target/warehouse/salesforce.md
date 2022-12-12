---
title: Salesforce
id: salesforce
description: Salesforce
sidebar_position: 6
tags:
  - gems
  - warehouse
  - salesforce
---

This Gem has below features:

1. Dataset Creation - Create Dataset in Salesforce Wave from Spark DataFrame.
2. Read Salesforce Wave Dataset - User has to provide SAQL to read data from Salesforce Wave. The query result will be constructed as DataFrame.
3. Read Salesforce Object - User has to provide SOQL to read data from Salesforce object. The query result will be constructed as DataFrame.
4. Update Salesforce Object - Salesforce object will be updated with the details present in DataFrame.

:::note
This connector is built on top of the already available [`spark-salesforce connector`](https://github.com/springml/spark-salesforce/)

To use this Gem in Prophecy, `com.springml:spark-salesforce_2.12:1.1.4` Maven external dependency needs to be installed on cluster.
For installing dependencies from Prophecy UI. Please check [dependency management docs](https://docs.prophecy.io/low-code-spark/extensibility/dependencies)
:::


## Source

Reads data from Salesforce object and wave Datasets.

### Source Parameters

| Parameter            | Description                                                                                                                                                                                                                                                                                             | Required                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Dataset Name         | Name of the Dataset                                                                                                                                                                                                                                                                                     | True                                                   |
| Credential Type      | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                                                                                                                                                                          | True                                                   |
| Credentials          | Databricks credential name , else username and password for the snowflake account                                                                                                                                                                                                                       | Required if `Credential Type` is `Databricks Secrets`  |
| Username             | Salesforce Wave Username. This user should have privilege to upload Datasets or execute SAQL or execute SOQL                                                                                                                                                                                            | Required if `Credential Type` is `Username & Password` |
| Password             | Salesforce Wave Password. Please append security token along with password.For example, if a user’s password is mypassword, and the security token is XXXXXXXXXX, the user must provide mypasswordXXXXXXXXXX                                                                                            | Required if `Credential Type` is `Username & Password` |
| Login Url            | (Optional) Salesforce Login URL. Default value https://login.salesforce.com                                                                                                                                                                                                                             | True                                                   |
| Read from source     | Strategy to read data: `SAQL` or `SOQL`.                                                                                                                                                                                                                                                                | True                                                   |
| SAQL Query           | (Optional) SAQL query to used to query Salesforce Wave. Mandatory for reading Salesforce Wave Dataset                                                                                                                                                                                                   |                                                        |
| SOQL Query           | (Optional) SOQL query to used to query Salesforce Object. Mandatory for reading Salesforce Object like Opportunity                                                                                                                                                                                      |                                                        |
| Version              | (Optional) Salesforce API Version. Default 35.0                                                                                                                                                                                                                                                         |                                                        |
| Infer Schema         | (Optional) Infer schema from the query results. Sample rows will be taken to find the datatype                                                                                                                                                                                                          |                                                        |
| Date Format          | (Optional) A string that indicates the format that follow java.text.SimpleDateFormat to use when reading timestamps. <br/> This applies to TimestampType. By default, it is null which means trying to parse timestamp by `java.sql.Timestamp.valueOf()`                                                |                                                        |
| Result Variable      | (Optional) result variable used in SAQL query. To paginate SAQL queries this package will add the required offset and limit.<br/> For example, in this SAQL query q = load \"<Dataset_id>/<Dataset_version_id>\"; q = foreach q generate 'Name' as 'Name', 'Email' as 'Email'; q is the result variable |                                                        |
| Page Size            | (Optional) Page size for each query to be executed against Salesforce Wave. Default value is 2000.<br/> This option can only be used if resultVariable is set                                                                                                                                           |                                                        |
| Bulk                 | (Optional) Flag to enable bulk query. This is the preferred method when loading large sets of data. Salesforce will process batches<br/> in the background. Default value is false.                                                                                                                     |                                                        |
| PK Chunking          | (Optional) Flag to enable automatic primary key chunking for bulk query Job. This splits bulk queries into separate batches<br/> that of the size defined by chunkSize option. By default false and the default chunk size is 100,000.                                                                  |                                                        |
| Chunk size           | (Optional) The size of the number of records to include in each batch. Default value is 100,000. This option can only be used when pkChunking is true. Maximum size is 250,000.                                                                                                                         |                                                        |
| Timeout              | (Optional) The maximum time spent polling for the completion of bulk query Job.<br/> This option can only be used when bulk is true.                                                                                                                                                                    |                                                        |
| Max chars per column | (Optional) The maximum length of a column. This option can only be used when bulk is true. Default value is 4096.                                                                                                                                                                                       |                                                        |
| Query All            | (Optional) Toggle to retrieve deleted and archived records for SOQL queries. Default value is false.                                                                                                                                                                                                    |                                                        |

:::info
Steps to reset your Salesforce security token can be found at this [link.](https://www.mcafee.com/blogs/enterprise/cloud-security/what-is-salesforce-security-token-and-how-do-i-find-it/)
:::

## Example

Below is an example of fetching all leads from sales cloud using Prophecy IDE.
We will be using `SOQL` query to query our leads Dataset on sales cloud.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/193517497-54c5544d-3b98-45ae-95e1-cb036bad6e4c.mp4" title="Salesforce Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

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
<TabItem value="scala" label="Scala">

```scala
Coming soon!!!
```

</TabItem>
</Tabs>


````

---

## Target

Create/update Datasets and Salesforce objects.

### Target Parameters

| Parameter               | Description                                                                                                                                                                                                                                            | Required                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| Dataset Name            | Name of the Dataset                                                                                                                                                                                                                                    | True                                                   |
| Credential Type         | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                                                                                                                         | True                                                   |
| Credentials             | Databricks credential name , else username and password for the snowflake account                                                                                                                                                                      | Required if `Credential Type` is `Databricks Secrets`  |
| Username                | Salesforce Wave Username. This user should have privilege to upload Datasets or execute SAQL or execute SOQL                                                                                                                                           | Required if `Credential Type` is `Username & Password` |
| Password                | Salesforce Wave Password. Please append security token along with password.For example, if a user’s password is mypassword, and the security token is XXXXXXXXXX, the user must provide mypasswordXXXXXXXXXX                                           | Required if `Credential Type` is `Username & Password` |
| Login Url               | (Optional) Salesforce Login URL. Default value https://login.salesforce.com                                                                                                                                                                            | True                                                   |
| Salesforce Dataset name | (Optional) Name of the Dataset to be created in Salesforce Wave. Required for Dataset Creation                                                                                                                                                         |                                                        |
| Salesforce object name  | (Optional) Salesforce Object to be updated. (e.g.) Contact. Mandatory if bulk is true.                                                                                                                                                                 |                                                        |
| Metadata Config in JSON | (Optional) Metadata configuration which will be used to construct [Salesforce Wave Dataset Metadata] <br/> (https://resources.docs.salesforce.com/sfdc/pdf/bi_dev_guide_ext_data_format.pdf). Metadata configuration has to be provided in JSON format |                                                        |
| Upsert                  | (Optional) Flag to upsert data to Salesforce. This performs an insert or update operation using the "externalIdFieldName" as the primary ID. Existing fields that are not in the DataFrame being pushed will not be updated. Default "false".          |                                                        |
| External Id Field Name  | (Optional) The name of the field used as the external ID for Salesforce Object. This value is only used when doing an update or upsert. Default "Id".                                                                                                  |                                                        |

### Generated Code {#target-code}

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
<TabItem value="scala" label="Scala">

```scala
Coming Soon!!!
```

</TabItem>
</Tabs>
````
