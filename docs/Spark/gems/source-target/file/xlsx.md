---
title: XLSX (Excel)
id: xlsx
description: Parameters and properties to read from and write too XLSX (Excel) files
tags:
  - gems
  - file
  - xlsx
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared=""
  livy=""
/>

The XLSX (Excel) file type:

- Is in XML format, which is easier for data access, manipulation, and compatibility with various software applications.
- Offers password protection options, which allow users to secure sensitive data.

## Prerequisites

- If you receive an error about the `excel` format not being available you must add `spark-excel` library as a dependency.

- To add the Maven coordinate `com.crealytics:spark-excel_2.12:3.5.1_0.20.4` to your pipeline, see [Spark dependencies](docs/extensibility/dependencies/spark-dependencies.md).

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                     |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the XLSX file.                                                                                                                                               |
| Schema    | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code. |

## Source

The Source gem reads data from XLSX files and allows you to optionally specify the following additional properties.

### Source properties

| Property name                            | Description                                                                                                                                                                                                                                                                              | Default                            |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --- |
| Enforce Schema                           | Whether to use the schema you define.                                                                                                                                                                                                                                                    | false                              |
| Header                                   | Whether to read the first line as a header.                                                                                                                                                                                                                                              | true                               |
| Description                              | Description of your dataset.                                                                                                                                                                                                                                                             | None                               |
| Data Address                             | Location to read data addresses from. To learn more, see [Data Addresses](https://github.com/crealytics/spark-excel#data-addresses).                                                                                                                                                     | `A1` (Everything)                  |
| Column Name of Corrupt Record            | Rename the field the PERMISSIVE mode creates to store malformed data.                                                                                                                                                                                                                    | `_corrupt_records`                 |
| Column Name of Row Number                | Name of the column to create using the original row number.                                                                                                                                                                                                                              | None                               |
| Date Format                              | String that indicates a date format.                                                                                                                                                                                                                                                     | `yyyy-MM-dd`                       |
| Excerpt Size                             | Excerpt Size.                                                                                                                                                                                                                                                                            | None                               |
| File Extension                           | Extension of the file to read in.                                                                                                                                                                                                                                                        | `xlsx`                             |
| Ignore After Header                      | Number of rows to ignore after the header.                                                                                                                                                                                                                                               | None                               |
| Ignore leading white spaces from values  | Whether to skip the leading whitespaces from values the Source gem reads.                                                                                                                                                                                                                | false                              |
| Ignore trailing white spaces from values | Whether to skip the trailing whitespaces from values the Source gem reads.                                                                                                                                                                                                               | false                              |
| Infer Schema                             | Whether to automatically infer the input schema from the data. This requires one extra pass over the data. <br/><br/>**Note:** The `spark-excel` library provides this setting and is different than the `Infer Schema` button in the Prophecy UI. Both should provide the same results. | false                              |
| Locale                                   | Sets a locale as language tag in IETF BCP 47 format.                                                                                                                                                                                                                                     | `en-US`                            |
| NaN Value                                | Sets the string representation of a non-number value.                                                                                                                                                                                                                                    | `NaN`                              |
| Negative Infinite value                  | Sets the string representation of a negative infinity value.                                                                                                                                                                                                                             | `-Inf`                             |
| Null Value                               | Sets the string representation of a null value.                                                                                                                                                                                                                                          | None                               |
| Parse Mode                               | How to handle corrupt data. <br/>For a list of the possible values, see [Supported parse modes](#supported-parse-modes).                                                                                                                                                                 | `Permissive`                       |
| Positive Infinite value                  | Sets the string representation of a positive infinity value.                                                                                                                                                                                                                             | `Inf`                              |     |
| Sampling Ratio                           | Defines a fraction of rows to use for schema inferring                                                                                                                                                                                                                                   | `1.0`                              |
| Timestamp Format                         | Sets the string that indicates a timestamp format.                                                                                                                                                                                                                                       | `yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]` |
| Use Null for Error Cells                 | Whether to use null for cells with errors.                                                                                                                                                                                                                                               | false                              |
| Workbook Password                        | Password to secure your workbook.                                                                                                                                                                                                                                                        | None                               |
| Time Zone ID                             | Timezone ID for the `Date` and `Timestamp` from the IANA Time Zone Database.<br/>**Note:** For a list of valid values, see [Class ZoneId](https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html).                                                                              | None                               |
| Temporary file threshold                 | When the Source gem should start writing data to temporary files on disk instead of keeping it in memory.                                                                                                                                                                                | None                               |
| Maximum rows in memory                   | Maximum amount of rows to have in memory.                                                                                                                                                                                                                                                | None                               |
| Maximum byte array size                  | Maximum size of your array.                                                                                                                                                                                                                                                              | None                               |

### Supported parse modes

| Mode           | Description                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- |
| Permissive     | Put the malformed string into the corrupt records column, and set the malformed fields to null. |
| Drop Malformed | Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions.   |
| Fail Fast      | Throw an exception when it meets a corrupted record.                                            |

## Target

The Target gem writes data to XLSX files and allows you to optionally specify the following additional properties.

### Target properties

| Property name                 | Description                                                                                                                         | Default      |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Data Address                  | Location to write data addresses to. To learn more, see [Data Addresses](https://github.com/crealytics/spark-excel#data-addresses). | `A1`         |
| File Extension                | File extension of the file to write to.                                                                                             | `xlsx`       |
| Header                        | Whether to write a header to the file.                                                                                              | true         |
| Locale                        | Sets a locale as language tag in IETF BCP 47 format.                                                                                | `en-US`      |
| Date Format                   | String that indicates a date format.                                                                                                | `yyyy-MM-dd` |
| Use Plain Number Format       | Whether to format the cells without rounding and scientific notations.                                                              | false        |
| Workbook Password             | Password to secure your workbook.                                                                                                   | None         |
| Write Mode                    | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                | `append`     |
| Partition Columns             | List of columns to partition the XLSX files by.                                                                                     | None         |
| Create single named XLSX file | Whether to create a single XLSX file.                                                                                               | false        |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |

## Writing a single output file

Due to Spark's distributed nature, when you work with text-based files, your output is a directory containing multiple partitioned files.

For example, if you write to the following location: **dbfs:/FileStore/Users/test/customers.xlsx**, you see the following in the DBFS:

- A **customers.xlsx** directory.
- Partitions within the **customers.xlsx** directory.

Each partition is a separate valid XLSX file with a segment of the overall output data.

If you want the Target gem to output a single file:

1. Add a Repartition gem in **Coalesce** mode with the **Partition Count** set to `1`.

   ![Coalesce using Repartition](img/xlsx_tgt_5.5.png)

2. Connect the Repartition gem between your second-to-last transformation and the `Target` gem.

   ![Attach coalesce before desired target](img/xlsx_tgt_6.png)

3. Run your pipeline.

   After you run your pipeline, your output is still a directory, but this time it only contains a single output file.

## Example code

:::tip
To see the generated source code, [switch to the Code view](/getting-started/tutorials/spark-with-databricks#review-the-code) at the top of the page.
:::

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
