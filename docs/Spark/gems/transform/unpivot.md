---
title: Unpivot gem
id: unpivot
slug: /engineers/unpivot
description: Use the Unpivot gem to transform your data from a wide format to a long format
tags:
  - gems
  - unpivot
  - wideformat
  - longformat
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.2.36+"
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="Not Supported"
/>

Use the Unpivot gem to transform your data from a wide format to a long format.

:::note

If you want to pivot the data, rather than unpivot, use the [Aggregate](/engineers/aggregate) gem.

:::

## Parameters

| Parameter                       | Description                                                                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Column(s) to use as identifiers | The column(s) that will identify to which group or entity the observation corresponds to.                                    |
| Columns to unpivot              | The columns (wide format) that you would like to transform into a single column (long format).                               |
| Variable column name            | The name of the column that contains the names of the unpivoted columns. This helps describe the values in the value column. |
| Value column name               | The name of the column that will contain the values from the unpivoted columns.                                              |

## Example

Imagine you have sales data for different products, with each quarter's sales stored in its own column—this is known as wide format. Before modeling seasonal trends or doing time series analysis, it's often helpful to convert this into long format, where each row represents a single observation.

<div class="table-example">

| Product | Q1  | Q2  | Q3  | Q4  |
| ------- | --- | --- | --- | --- |
| A       | 100 | 150 | 130 | 170 |
| B       | 90  | 120 | 110 | 160 |

</div>

To configure a Unpivot gem for this table:

1. Select the identifier columns. In the example above, the `Product` column is the identifier column.
1. Select the columns to unpivot. In the example above, all of the quarter columns (`Q1`, `Q2`, etc.) are your columns to unpivot.
1. Name the variable column `Quarter` because it identifies the sales period.
1. Name the value column `UnitsSold` because it contains number of units sold per quarter.
1. Save and run the gem.

After the transformation:

- The quarter names (`Q1`, `Q2`, etc.) will move into a new `Quarter` column.
- The corresponding sales values will be stored in a `UnitsSold` column.

<div class="table-example">

| Product | Quarter | UnitsSold |
| ------- | ------- | --------- |
| A       | Q1      | 100       |
| A       | Q2      | 150       |
| A       | Q3      | 130       |
| A       | Q4      | 170       |
| B       | Q1      | 90        |
| B       | Q2      | 120       |
| B       | Q3      | 110       |
| B       | Q4      | 160       |

</div>

This makes your data easier to analyze over time, since each row now represents one product's sales for a specific quarter.

## Example code

:::tip
To see the compiled code of your project, [switch to the Code view](/engineers/pipelines#project-editor) in the project header.
:::

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def unpivot_products_by_quarter(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.unpivot(["Product"], [col for col in in0.columns if col not in ["Product"]], "Quarter", "UnitsSold")
```

</TabItem>
</Tabs>
````
