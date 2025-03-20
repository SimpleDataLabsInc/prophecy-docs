---
title: DataQualityCheck
id: data-quality-check
description: Ensure your data adhere to predefined constraints
tags:
  - gems
  - data quality
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkDataQualityPython"
  python_package_version="0.0.1+"
  scala_package_name=""
  scala_package_version=""
  scala_lib="8.2.1"
  python_lib="1.9.16"
  uc_single="14.3+"
  uc_shared="Not Supported"
  livy="Not Supported"
/>

The DataQualityCheck gem includes a variety of checks that are built on the open source tool [Deequ](https://github.com/awslabs/deequ). Use this gem to make sure your data adheres to predefined constraints.

## Requirements

### Dependencies

- ProphecySparkDataQualityPython 0.0.1+

### Cluster requirements

- Set the `SPARK_VERSION` environment variable to a Spark version 3.3+
- Install the [PyDeequ](https://pypi.org/project/pydeequ/#:~:text=1.8%2B%2C%20we%20now%20officially%20support%20Spark3%20!) library on the cluster
- Install the [Maven Deequ](https://mvnrepository.com/artifact/com.amazon.deequ/deequ) library on the cluster (choose the version that matches your Spark version)

## Input and Output

| DataFrame | Description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| **in0**   | Includes the DataFrame for which the data quality will be checked.                                                    |
| **out0**  | Passes through the **in0** DataFrame unchanged.                                                                       |
| **out1**  | Outputs a DataFrame with the verification results and failure messages (if applicable) that you can define per check. |

## Data Quality Checks

| Check Type                                        | Success Criteria                                                                         |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Completeness                                      | Fraction of non-null values is greater than `X`. The default is 100% non-null.           |
| Row count                                         | Input DataFrame has at least `X` number of rows.                                         |
| Distinct count                                    | Number of distinct values in selected columns is equal to `X`.                           |
| Uniqueness                                        | Values in selected columns are unique (occurring exactly once).                          |
| Data type                                         | Selected columns have a certain data type.                                               |
| Min-max length                                    | Strings in selected columns have a minimum length of `X` and a maximum length of `Y`.    |
| Total sum                                         | Sum of values in selected columns is equal to `X`.                                       |
| Mean value                                        | Mean of values in selected columns is equal to `X`.                                      |
| Standard deviation                                | Standard deviation of values in selected columns is equal to `X`.                        |
| Non-negative value                                | Fraction of non-negative values is at least `X` percent.                                 |
| Positive value                                    | Fraction of positive values is at least `X` percent.                                     |
| Lookup                                            | Fraction of values in selected columns that match lookup values is at least `X` percent. |
| Column to constant value greater than             | Selected column values are greater than a constant value `X`.                            |
| Column to constant value greater than or equal to | Selected column values are greater than or equal to a constant value `X`.                |
| Column to constant value less than                | Selected column values are less than a constant value `X`.                               |
| Column to constant value less than or equal to    | Selected column values are less than or equal to a constant value `X`.                   |
| Column to column greater than                     | All values in left column are greater than all values in right column.                   |
| Column to column greater than or equal to         | All values in left column are greater than or equal to all values in right column.       |
| Column to column less than                        | All values in left column are less than all values in right column.                      |
| Column to column less than or equal to            | All values in left column are less than or equal to all values in right column.          |

## Post Actions

| Action              | Description                                                                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Continue execution  | Continue pipeline execution regardless of data quality success or failure.                                                                                                                                      |
| Terminate execution | Stop pipeline execution after the DataQualityCheck gem runs based on a maximum number of failed checks. Review [gem phases](docs/concepts/project/gems.md#gem-phase) to understand the order in which gems run. |

## Example code

Each check is compiled into highly decipherable code. When you switch to the code view and open the DataQualityCheck file, you can see that every check includes a **hint** that populates the **out1** _constraint_message_ column if you do not define a custom failure message. Below is an example of the generated code with a few checks configured.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def data_quality_check(spark: SparkSession, in0: DataFrame) -> (DataFrame, DataFrame):
    import re
    from pydeequ.checks import Check, CheckLevel, ConstrainableDataTypes
    from pydeequ.verification import VerificationSuite, VerificationResult

    return (in0,
            VerificationResult\
              .checkResultsAsDataFrame(
                spark,
                VerificationSuite(spark)\
                  .onData(in0.withColumn("amount_gt_const", lit("10")))\
                  .addCheck(
                    Check(spark, CheckLevel.Warning, "Data Quality Checks")\
                      .hasCompleteness("order_id", lambda x: x >= 1.0, hint = f"{1.0 * 100}% values should be non-null for order_id")\
                      .hasSize(lambda x: x >= 10, hint = "The number of rows should be at least 10")\
                      .hasDataType(
                        "order_id",
                        ConstrainableDataTypes.Numeric,
                        lambda x: x == True,
                        hint = "Column order_id is not of Numeric data type"
                      )\
                      .hasMaxLength(
                        "customer_id",
                        lambda x: x >= 5 and x <= 20,
                        hint = "Length of column customer_id does not lie between 5 and 20"
                      )\
                      .hasSum("amount", lambda x: x == 100000.0, hint = "Total sum of column amount is not equals to 100000.0")\
                      .hasMean("amount", lambda x: x == 40.0, hint = "Mean value of column amount is not equals to 40.0")\
                  )\
                  .run()
              )\
              .selectExpr("constraint_status", "constraint_message", "udf_extract_check_and_column(constraint) as parsed")\
              .selectExpr("parsed._1 as check_type", "parsed._2 as column", "constraint_status", "constraint_message"))
```

</TabItem>
</Tabs>
````
