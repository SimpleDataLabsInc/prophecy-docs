---
title: ColumnParser
id: column-parser
slug: /engineers/column-parser
description: Parse XML or JSON inside a table
tags:
  - gems
  - transform
  - parse
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.2.27+"
  scala_package_name=""
  scala_package_version=""
  scala_lib="8.2.1"
  python_lib="1.9.16"
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="Not Supported"
/>

The ColumnParser lets you parse XML or JSON that is included in a column of your table.

## Parameters

| Parameter          | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| Source Column Name | Name of the column that contains the XML or JSON records.                |
| Parser Type        | Format of the column you want to parse (XML or JSON).                    |
| Parsing Method     | How Prophecy will derive the schema that will be used to parse the data. |

When you select a parsing method, you have three options:

- **Parse automatically.** Prophecy infers the schema by reading the first 40 records.
- **Parse from sample record.** Prophecy uses the schema that you provide in the sample record.
- **Parse from schema.** Prophecy uses the schema that you provide in the form of a schema struct.

## Output

The schema of the ColumnParser gem output includes the parsed content as a **struct** data type, in addition to all of the input columns.

![New output struct](img/new-output-struct.png)

## Example code

:::tip
To see the compiled code of your project, [switch to the Code view](/engineers/pipelines#project-editor) in the project header.
:::

This example shows the code to parse XML.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def xml_column_parser(spark: SparkSession, in0: DataFrame) -> DataFrame:
    from prophecy.libs.utils import xml_parse

    return xml_parse(in0, "XML", "parseAuto", None, None)
```

</TabItem>
</Tabs>
````
