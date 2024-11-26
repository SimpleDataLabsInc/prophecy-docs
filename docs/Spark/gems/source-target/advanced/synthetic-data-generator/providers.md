---
title: Providers
id: providers
description: What kind of random data can I generate?
sidebar_position: 1
tags:
  - provider
  - synthetic
  - random
  - fake
  - mock
  - data
  - generator
---

To generate a new column of random data, select one of the [providers](#providers) below. There are some properties [common](#common-properties) to all providers. If you prefer, provide the same information as a JSON schema.

## Providers

| Data Provider             | Description                                                                                                                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Random Name               | Generates random names. Select Full Name, First Name, or Last Name as the sub-types.                                                                                                                                                                        |
| Random Address            | Generates random addresses.                                                                                                                                                                                                                                 |
| Random Email              | Generates random emails.                                                                                                                                                                                                                                    |
| Random Phone Number       | Generates random phone numbers based on specified or default pattern. Example: specify the pattern for a phone number as (###) ###-####.                                                                                                                    |
| Random String UUID        | Generates random UUIDs in string form.                                                                                                                                                                                                                      |
| Random Boolean Values     | Generates random boolean values (True/False).                                                                                                                                                                                                               |
| Random Integer Numbers    | Generates random integers within the range from Start Value to End Value.                                                                                                                                                                                   |
| Random Elements From List | Generates random values from the list of values. Just type into the `List Of Values` field.                                                                                                                                                                 |
| Random Date               | Generates random dates within the given range.                                                                                                                                                                                                              |
| Random DateTime           | Generates random datetime values within the given range.                                                                                                                                                                                                    |
| Random Foreign Key Values | Picks values randomly from specified foreign key column. Select another table to act as the reference table and provide the location, e.g., `catalog`.`database`.`table`. Select any column from the reference table to designate as Reference Column Name. |

## Common properties

Properties common to all providers

| Name                       | Description                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------- |
| Column Name                | Custom name for the output column.                                                    |
| Data Type                  | Data type of output column.                                                           |
| Null Percentage (Optional) | X percent of values will be populated as null in generated column based on Row Count. |
