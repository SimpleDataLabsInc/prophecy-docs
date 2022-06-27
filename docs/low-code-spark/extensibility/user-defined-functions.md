---
sidebar_position: 2
title: User-defined functions
id: udfs
description: User-defined functions
tags:
  - extensibility
  - udfs
  - udafs
---

Allows you to create user defined functions (UDF) which are then usable anywhere in the pipeline

### Parameters

| Parameter               | Description                                                                                                                              | Required |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| UDF Name                | Name of the udf to be used to register it. All calls to the udf will use this name                                                       | True     |
| Definition              | Definition of the UDF function. <br/> Eg: `udf((value:Int)=>value*value)`                                                                | True     |
| UDF initialization code | Code block that contains initialization of entities used by UDFs. This could for example contain any static mapping that a UDF might use | False    |

### Examples

---

#### Defining and Using UDF

```mdx-code-block
import App from '@site/src/components/slider';

export const ImageData = [
  {
    "image":"/img/udf/1.png",
    "description":<h3 style={{padding:'10px'}}>Step 1 - Open UDF definition window</h3>,
  },
  {
    "image":"/img/udf/2.1.png",
    "description":<h3 style={{padding:'10px'}}>Step 2 (Python)- Define Python UDF</h3>,
  },
  {
    "image":"/img/udf/2.2.png",
    "description":<h3 style={{padding:'10px'}}> Step 2 (Scala) - Define Scala UDf</h3>
  },
  {
    "image":"/img/udf/3.png",
    "description":<h3 style={{padding:'10px'}}>Step 3 - UDFs can now be called by their defined names</h3>,
  },
];

<App ImageData={ImageData}></App>
```

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
country_code_map = {"Mexico" : "MX", "USA" : "US", "India" : "IN"}

def registerUDFs(spark: SparkSession):
    spark.udf.register("get_country_code", get_country_code)

@udf(returnType = StringType())
def get_country_code(country: str):
    return country_code_map.get(country, "Not Found")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object UDFs extends Serializable {
  val country_code_map = Map("Mexico" -> "MX", "USA" -> "US", "India" -> "IN")

  def registerUDFs(spark: SparkSession) =
    spark.udf.register("get_country_code", get_country_code)

  def get_country_code =
    udf { (country: String) =>
      country_code_map.getOrElse(country, "Not Found")
    }

}
```

</TabItem>
</Tabs>


````
