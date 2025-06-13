---
title: FuzzyMatch
id: fuzzy-match
slug: /analysts/fuzzy-match
description: Match records that are not exactly identical
tags:
  - gems
  - analyst
  - join
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.4+"
/>

Use the FuzzyMatch gem to identify non-identical duplicates in your data.

## Input and Output

| Table   | Description                                                                                              |
| ------- | -------------------------------------------------------------------------------------------------------- |
| **in0** | Includes the table on which duplicates will be checked. <br/>**Note: FuzzyMatch only allows one input.** |
| **out** | Generates one record per fuzzy match.                                                                    |

## Parameters

### Configuration

| Parameter                  | Description                                                                                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Merge/Purge Mode           | Records are either compared from a single source (Purge) or across multiple sources (Merge). <br/> Merge mode assumes that multiple sources exist in the same table **in0**. |
| Source ID Field            | Unique identifier for each source when using **Merge** mode. <br/>This is necessary because the different sources exist in the same table **in0**.                           |
| Record ID Field            | Unique identifier for each record.                                                                                                                                           |
| Match threshold percentage | If the match score is less than the threshold, the record does not qualify as a match.                                                                                       |
| Include similarity score   | Checkbox to enable for an additional output column that includes the similarity score.                                                                                       |

### Match Fields

| Parameter      | Description                                               |
| -------------- | --------------------------------------------------------- |
| Field name     | Name of the column that you want to check for duplicates. |
| Match function | The method that generates the similarity score.           |

## Example

One common use case for the FuzzyMatch gem is to match similarly spelled names. Here's a table with two entries for `Alex Taylor`, whose phone number was updated.

<div class="table-example">

| id  | email                 | phone        | first_name | last_name | date_added |
| --- | --------------------- | ------------ | ---------- | --------- | ---------- |
| 1   | `alex.t@example.com`  | 123-456-7890 | Alex       | Taylor    | 2023-01-01 |
| 2   | `alex.t@example.com`  | 123-456-9542 | Alex       | Ttaylor   | 2023-07-01 |
| 3   | `sam.p@example.com`   | 987-654-3210 | Sam        | Patel     | 2024-03-15 |
| 4   | `casey.l@example.com` | 555-111-2222 | Casey      | Lee       | 2024-05-01 |

</div>

You can use the FuzzyMatch gem to find the closely spelled name. In the gem configuration:

1. Set the Merge/Purge Mode to **Purge mode**.
1. For the Record ID, use the **id** column.
1. Keep the threshold at `80` percent.
1. Enable the **Include similarity score column** checkbox.
1. In the Match Fields tab, add a match field for the **last_name** column.
1. Set the Match Function to **Name**.
1. Save and run the gem.

### Result

The output includes the Record IDs of the records with fuzzy matches above the defined threshold.

<div class="table-example">

| id  | id2 | similarityScore    |
| --- | --- | ------------------ |
| 1   | 2   | 0.9111111111111111 |

</div>

:::info
Depending on your SQL provider, you might see different similarity scores based on the algorithm that runs under the hood.
:::

:::tip
To view the names per record, [join](/analysts/join) the FuzzyMatch output with the original dataset.
:::
