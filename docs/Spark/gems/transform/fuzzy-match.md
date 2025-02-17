---
title: FuzzyMatch
id: fuzzy-match
description: Identify non-identical duplicates in your data
tags:
  - gems
  - fuzzy match
---

<h3><span class="badge">Spark Gem</span></h3>

Use the FuzzyMatch gem to identify non-identical duplicates in your data.

## Input and Output

| DataFrame | Description                                                 |
| --------- | ----------------------------------------------------------- |
| **in0**   | Includes the DataFrame on which duplicates will be checked. |
| **out**   | Generates one record per fuzzy match.                       |

## Parameters

| Parameter                  | Tab           | Description                                                                                  |
| -------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| Merge/Purge Mode           | Configuration | Records are either compared from a single source (Purge) or across multiple sources (Merge). |
| Source ID Field            | Configuration | Unique identifier for each source when using **Merge** mode.                                 |
| Record ID Field            | Configuration | Unique identifier for each record.                                                           |
| Match threshold percentage | Configuration | If the match score is less than the threshold, the record does not qualify as a match.       |
| Include similarity score   | Configuration | Checkbox to enable for an additional output column that includes the similarity score.       |
| Field name                 | Match Fields  | Name of the column that you want to check for duplicates.                                    |
| Match function             | Match Fields  | The method that generates the similarity score.                                              |

## Example

One common use case for the FuzzyMatch gem is to match similarly spelled names. This can be useful for identifying accidentally misspelled names.

1. Create a FuzzyMatch gem and use the **customer_id** as the Record ID. Then, add a match field for the **first_name** column.

   ![FuzzyMatch names](img/fuzzy-match-fields.png)

2. Run the gem and see that the output includes the Record IDs of the records with fuzzy matches.

   ![FuzzyMatch output](img/fuzzy-match-output.png)

3. Join the output with the original dataset to view the matched names.

   ![FuzzyMatch joined](img/fuzzy-match-join.png)
