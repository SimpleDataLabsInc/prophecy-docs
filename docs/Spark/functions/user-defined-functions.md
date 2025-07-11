---
title: User-defined functions
id: udfs
slug: /engineers/user-defined-functions
description: User-defined functions
tags:
  - extensibility
  - udfs
  - udafs
  - SQL
  - python
---

Prophecy lets you create and import user-defined functions (UDFs), which can be used anywhere in the pipeline. Prophecy supports creating UDFs written in Python/Scala and importing UDFs written in SQL.

| Project Type | Create UDFs  | Import UDFs   |
| :----------- | :----------- | :------------ |
| Python       | Python/Scala | SQL           |
| Scala        | Python/Scala | Not supported |

:::info
Learn about UDF support in Databricks on our documentation on cluster [access modes](/administration/fabrics/Spark-fabrics/databricks/ucshared).
:::

## Create UDFs

Prophecy supports creating UDFs written in Python or Scala.

### Parameters

| Parameter               | Description                                                                                                                                 | Required |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| Function name           | The name of the function as it appears in your project.                                                                                     | True     |
| UDF Name                | The name of the UDF that will register it. All calls to the UDF will use this name.                                                         | True     |
| Definition              | Definition of the UDF function. <br/> For example, `udf((value:Int)=>value*value)`                                                          | True     |
| UDF initialization code | Code block that contains initialization of entities used by UDFs. This could, for example, contain any static mapping that a UDF might use. | False    |

### How to Create UDFs

1. Create a new function. You can find the **Functions** section in the left sidebar of a project page.

![Add a function to the pipeline](img/add-function.png)

2. Define the function.

![Define the function](img/define-function.png)

3. Call the function.

![Call the function](img/call-function.png)

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

## Import UDFs

UDFs from the Unity Catalog are automatically available in Python projects when you attach to the relevant Databricks fabric. You can call these UDFs from any gem in the project.

![img](./img/sql-call-function.png)

To view a function, open the Environment browser and expand the Catalog and Schema containing the function. Refresh the project editor to access any new functions added in Databricks.

![img](./img/sql-udf.png)

## UDFs across pipelines

User-defined functions (UDFs) are defined at the project level, so they are shared across all pipelines in the project.

However, each pipeline keeps its own local copy of the UDF code. Prophecy updates this copy only when you open the pipeline. So if someone edits or adds a UDF in one pipeline, those changes won’t automatically appear in other pipelines until you open them. At that point, Prophecy copies the latest UDF definitions into the pipeline, and you’ll see them as uncommitted changes in the code view.
