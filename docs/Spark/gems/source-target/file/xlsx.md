---
title: XLSX (Excel)
id: xlsx
description: XLSX (Excel)
sidebar_position: 12
tags:
  - gems
  - file
  - xlsx
---

If you've ever done anything with numbers in your line of work odds are you've worked with Excel at one point or another. Prophecy supports the format as both a data source and data target, so if you're migrating from a legacy system or you need to produce an Excel-compatible file for a report, we've got you covered.

## Prerequisites

:::caution
If you receive an error about the `excel` format not being available you must add `spark-excel` library as a dependency.

Follow the instructions on [this page](../../../extensibility/dependencies.md) to add the Maven coordinate `com.crealytics:spark-excel_2.12:3.5.1_0.20.4` to your Pipeline.
:::

## Parameters

### Source Parameters

The following is a list of options that are available while using XLSX as a **_Source_**:

| Parameter                     | Description                                                                                                                                                                                                                   | Required | Default           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------- |
| Column Name of Corrupt Record | Name of the column to create for corrupt records                                                                                                                                                                              | False    | None              |
| Column Name of Row Number     | Name of the column to create using the original row number                                                                                                                                                                    | False    | None              |
| Data Address                  | Data address to read (see [here](https://github.com/crealytics/spark-excel#data-addresses)) for more information                                                                                                              | True     | `A1` (Everything) |
| Date Format                   | Date format to use                                                                                                                                                                                                            | False    | Spark default     |
| Excerpt Size                  | Except Size                                                                                                                                                                                                                   | False    |                   |
| File Extension                | Input file extension                                                                                                                                                                                                          | False    | `xlsx`            |
| Header                        | First line in input is a header                                                                                                                                                                                               | True     | `True`            |
| Ignore After Header           | Number of rows to ignore after header                                                                                                                                                                                         | False    | `0`               |
| Ignore Leading Whitespace     |                                                                                                                                                                                                                               | False    | `False`           |
| Ignore Trailing Whitespace    |                                                                                                                                                                                                                               | False    | `False`           |
| Infer Schema                  | Infer the schema of the input. <br /><br />**Note:** This setting is provided directly by the `spark-excel` library and is different than the `Infer Schema` button in the Prophecy UI. Both should provide the same results. | False    | `False`           |
| Keep Undefined Rows           | If true, keeps undefined Excel rows                                                                                                                                                                                           | False    | `False`           |
| Locale                        | A language tag in the IETF BCP 47 format                                                                                                                                                                                      | False    | `"US"`            |
| NaN Value                     | Value to use in the case of NaN                                                                                                                                                                                               | False    | `"NaN"`           |
| Negative Infinity             | Value to use in the case of negative infinity                                                                                                                                                                                 | False    | `"Inf"`           |
| Null Value                    | Value to use for Null                                                                                                                                                                                                         | False    | (empty)           |
| Parse Mode                    | Parsing mode. Supports `Permissive`, `Drop Malformed` and `Fail Fast`.                                                                                                                                                        | False    | `Permissive`      |
| Positive Infinity             | Value to use in case of positive infinity                                                                                                                                                                                     | False    | `"Inf"`           |
| Sampling Ratio                | Defines how much of the input to sample from when inferring the schema.                                                                                                                                                       | False    | `1.0`             |
| Timestamp Format              | Format to parse timestamps from text cells                                                                                                                                                                                    | False    | Spark default     |
| Use Null for Error Cells      | Use null value for error cells                                                                                                                                                                                                | False    | `True`            |
| Workbook Password             | Password to secure workbook                                                                                                                                                                                                   | False    | (empty)           |
| Timezone ID                   | Timezone ID for `Date`s/`Timestamp`s taken from the IANA Time Zone Database.<br /><br /> **Note:** See [here](https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html) for valid values.                              | False    | (empty)           |

### Target Parameters

The following is a list of options that are available while using XLSX as a **_Target_**:

| Parameter               | Description                                                         | Required | Default       |
| ----------------------- | ------------------------------------------------------------------- | -------- | ------------- |
| Data Address            | Data address to write output to                                     | False    | `A1`          |
| File Extension          | File extension used when writing                                    | False    | `"xlsx"`      |
| Header                  | Write header to file                                                | False    | `True`        |
| Locale                  | A language tag in the IETF BCP 47 format                            | False    | `"US"`        |
| Date Format             | Format to use for `Date` columns                                    | False    | Spark default |
| Use Plain Number Format | If true, format the cells without rounding and scientific notations | False    | `False`       |
| Workbook Password       | Password to secure workbook                                         | False    | (empty)       |
| Write Mode              | Write mode, same as underlying Spark write mode                     | False    | `"append"`    |
| Parition Columns        | Columns to partition output files by                                | False    | (empty)       |

## Example output

Below is a snippet of the optimized code that is generated when using the XLSX source.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def Demo_XLSX_Source(spark: SparkSession) -> DataFrame:
    if Config.fabricName == "dev":
        return spark.read\
            .format("excel")\
            .option("header", True)\
            .option("dataAddress", "A1")\
            .option("inferSchema", True)\
            .load("dbfs:/FileStore/Users/scott/plain_number.xlsx")
    else:
        raise Exception("No valid dataset present to read fabric")
```

</TabItem>
</Tabs>

````
