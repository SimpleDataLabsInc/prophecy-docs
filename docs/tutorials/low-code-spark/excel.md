---
title: Working with XLSX (Excel) files
id: working-with-excel
sidebar_position: 1
tags:
  - gems
  - devops
  - file
  - tutorial
  - xlsx
description: Explore the basics of working with XLSX (Excel) files with Prophecy
---

# Working with XLSX (Excel) files

If you've worked with numbers in your day-to-day operations, odds are you've run into a need to use Excel at one point or another. This tutorial is going to cover the two most basic scenarios: Reading and Writing.

:::info For a full list of options supported by Prophecy when interacting with Excel files [see here](../../../low-code-spark/gems/source-target/file/xlsx.md) :::

### Reading XLSX files

Reading an Excel file is quite easy in Prophecy! Simply follow these steps to create a new XLSX source.

1. Select the XLSX format\
   ![Select XLSX source type](img/xlsx\_src\_1.png)\

2. Navigate to the desired XLSX source file\
   ![Navigate to XLSX source file](img/xlsx\_src\_2.png)\

3. Customize any properties you might need and tweak the schema to your liking\
   ![Adjust parameters and schema](img/xlsx\_src\_3.png)\

4. Preview the file and double-check that the schema matches your intentions\
   ![Preview the input file](img/xlsx\_src\_4.png)

Once the `Source` Gem is created and validation passes you'll be able to find the code of your new `Source` in the `graph` directory of your Pipeline code.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def Source_0(spark: SparkSession) -> DataFrame:
    if Config.fabricName == "demos":
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

### Writing XLSX files

Writing an Excel file is just as easy, with only one small caveat to be discussed after. Let's look at an example Pipeline with an XLSX output target:

![Sample Pipeline with XLSX output](img/xlsx\_tgt\_0.png)

In this scenario we're building a report of spending by customer and want an XLSX file as output.

1. Select the XLSX format\
   ![Select the XLSX target type](img/xlsx\_tgt\_1.png)\

2. Navigate to the target location\
   ![Select destination filename](img/xlsx\_tgt\_2.png)\

3. Customize any properties needed when writing the output file\
   ![Set output parameters](img/xlsx\_tgt\_3.png)\

4. Run the Pipeline!

Once the `Target` Gem is created and validation passes you'll be able to find the code of your new `Target` in the `graph` directory of your Pipeline code.

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def ExcelTarget(spark: SparkSession, in0: DataFrame):
    if Config.fabricName == "demos":
        in0.write\
            .format("excel")\
            .option("header", True)\
            .option("dataAddress", "A1")\
            .option("usePlainNumberFormat", False)\
            .mode("overwrite")\
            .save("dbfs:/FileStore/Users/scott/customers.xlsx")
    else:
        raise Exception("No valid dataset present to read fabric")
```

</TabItem>
</Tabs>
````

#### Writing a single output file

As mentioned above, there's a caveat when working with any text-based files in Spark. Because of the distributed nature of the framework, you'll find that your output file is not just a single output file but instead a directory with multiple separately partitioned files within it.

For example, using `dbfs:/FileStore/Users/scott/customers.xlsx` as my Target location I can see the following in DBFS after running my Pipeline:

1. `customers.xlsx` is, in reality, a directory...\
   ![Target output is a directory](img/xlsx\_tgt\_4.png)\

2. ... that contains multiple partitions within it\
   ![Target output is partitioned](img/xlsx\_tgt\_5.png)\


Each file within this directory will be a separate valid XLSX file with a segment of the overall output data. If you want to output only a single file, you'll need to change your Pipeline as such:

1. Add a `Repartition` Gem in `Coalesce` mode with the `Partition Count` set to `1`.\
   ![Coalesce using Repartition](img/xlsx\_tgt\_5.5.png)\

2. Connect it between your second-to-last transformation and the `Target` Gem\
   ![Attach coalesce before desired target](img/xlsx\_tgt\_6.png)\


After running, your output will still be a directory, but this time it will only contain a single output file.

![Single output after coalesce](img/xlsx\_tgt\_7.png)
