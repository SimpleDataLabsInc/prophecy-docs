---
title: XLSX (Excel)
id: xlsx
description: XLSX (Excel)
tags:
  - gems
  - file
  - xlsx
---

The XLSX (Excel) file type:

-

## Prerequisites

:::caution
If you receive an error about the `excel` format not being available you must add `spark-excel` library as a dependency.

Follow the instructions on [this page](docs/extensibility/dependencies/spark-dependencies.md) to add the Maven coordinate `com.crealytics:spark-excel_2.12:3.5.1_0.20.4` to your pipeline.
:::

## Parameters

### Source parameters

The following is a list of options that are available while using XLSX as a **_Source_**:

| Parameter                     | Description                                                                                                                                                                                                                              | Default            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Data Address                  | Location to read data addresses from. To learn more, see [Data Addresses](https://github.com/crealytics/spark-excel#data-addresses).                                                                                                     | `A1` (Everything)  |
| Column Name of Corrupt Record | Name of the column to create for corrupt records.                                                                                                                                                                                        | `_corrupt_records` |
| Column Name of Row Number     | Name of the column to create using the original row number.                                                                                                                                                                              | None               |
| Date Format                   | String that indicates a date format.                                                                                                                                                                                                     | Spark default      |
| Excerpt Size                  | Except Size                                                                                                                                                                                                                              |                    |
| File Extension                | File extension of the file to read in.                                                                                                                                                                                                   | `xlsx`             |
| Ignore After Header           | Number of rows to ignore after the header.                                                                                                                                                                                               | `0`                |
| Ignore Leading Whitespace     | Whether to skip the leading whitespaces from values the Target gem reads.                                                                                                                                                                | `False`            |
| Ignore Trailing Whitespace    | Whether to skip the trailing whitespaces from values the Target gem reads.                                                                                                                                                               | `False`            |
| Infer Schema                  | Whether to infer the schema of the input. <br /><br />**Note:** This setting is provided directly by the `spark-excel` library and is different than the `Infer Schema` button in the Prophecy UI. Both should provide the same results. | `False`            |
| Locale                        | Sets a locale as language tag in IETF BCP 47 format.                                                                                                                                                                                     | `"US"`             |
| NaN Value                     | Sets the string representation of a non-number value.                                                                                                                                                                                    | `"NaN"`            |
| Negative Infinite value       | Sets the string representation of a negative infinity value.                                                                                                                                                                             | `"Inf"`            |
| Null value                    | Sets the string representation of a null value.                                                                                                                                                                                          | (empty)            |
| Parse Mode                    | How to handle corrupt data. For a list of the possible values, see [Supported parse modes](#supported-parse-modes).                                                                                                                      | `Permissive`       |
| Positive Infinite value       | Sets the string representation of a positive infinity value.                                                                                                                                                                             | `"Inf"`            |
| Sampling Ratio                | Defines a fraction of rows to use for schema inferring. <br/>CSV built-in functions ignore this option.                                                                                                                                  | `1.0`              |
| Timestamp Format              | Sets the string that indicates a timestamp format.                                                                                                                                                                                       | Spark default      |
| Use Null for Error Cells      | Whether to use null for cells with errors.                                                                                                                                                                                               | `True`             |
| Workbook Password             | Password to secure workbook.                                                                                                                                                                                                             | (empty)            |
| Time Zone ID                  | Timezone ID for `Date`s/`Timestamp`s taken from the IANA Time Zone Database.<br /><br /> **Note:** See [here](https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html) for valid values.                                         | (empty)            |

### Supported parse modes

| Mode          | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| PERMISSIVE    | Put the malformed string into the corrupt records column, and set the malformed fields to null. |
| DROPMALFORMED | Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions.   |
| FAILFAST      | Throw an exception when it meets a corrupted record.                                            |

### Target parameters

The following is a list of options that are available while using XLSX as a **_Target_**:

| Parameter               | Description                                                                                                                         | Default       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Data Address            | Location to write data addresses to. To learn more, see [Data Addresses](https://github.com/crealytics/spark-excel#data-addresses). | `A1`          |
| File Extension          | File extension of the file to write to.                                                                                             | `"xlsx"`      |
| Header                  | Whether to write a header to the file.                                                                                              | `True`        |
| Locale                  | Sets a locale as language tag in IETF BCP 47 format.                                                                                | `"US"`        |
| Date Format             | String that indicates a date format.                                                                                                | Spark default |
| Use Plain Number Format | Whether to format the cells without rounding and scientific notations.                                                              | `False`       |
| Workbook Password       | Password to secure workbook.                                                                                                        | (empty)       |
| Write Mode              | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).       | `"append"`    |
| Parition Columns        | List of columns to partition the XLSX files by.                                                                                     | (empty)       |

### Supported write modes

| Write mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |

## Writing a single output file

When you work with text-based files in Spark, your output is a directory containing multiple partitioned files due to Spark's distributed nature.

For example, if you write to the following location: **dbfs:/FileStore/Users/test/customers.xlsx**, you see the following in the DBFS:

- A **customers.xlsx** directory.
- Partitions within the **customers.xlsx** directory.

Each partition is a separate valid XLSX file with a segment of the overall output data.

If you want to output only a single file:

1. Add a Repartition gem in **Coalesce** mode with the **Partition Count** set to `1`.

   ![Coalesce using Repartition](img/xlsx_tgt_5.5.png)

2. Connect the Repartition gem between your second-to-last transformation and the `Target` gem.

   ![Attach coalesce before desired target](img/xlsx_tgt_6.png)

3. Run your pipeline.

   After you run your pipeline, your output is still a directory, but this time it only contains a single output file.

## Example code

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
