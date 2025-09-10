---
title: Comparing Alteryx and Prophecy Filters
id: alteryx-filter
slug: /transpiler/alteryx-filter
description: learn how prophecy filters compare to Alteryx filters
tags:
  - SQL
  - filter
  - transpiler
---
### Alteryx — Filter Tool

Alteryx's Filter ToolfFilters rows  based on a condition. Records that satisfy the condition go to the **True (T)** output anchor; those that don't go to the **False (F)** anchor. ([help.alteryx.com](https://help.alteryx.com/current/en/designer/tools/preparation/filter-tool.html?utm_source=chatgpt.com))  

Alteryx offers two kinds of filters:
- **Basic Filter**: Select one column, choose an operator (e.g., '=', '>', 'Contains', 'Is Null'), and enter a value. ([help.alteryx.com](https://help.alteryx.com/current/en/designer/tools/preparation/filter-tool.html?utm_source=chatgpt.com))  
- **Custom Filter**: Write complex expressions using multiple fields combined with logical operators (AND, OR). ([help.alteryx.com](https://help.alteryx.com/current/en/designer/tools/preparation/filter-tool.html?utm_source=chatgpt.com))  
**Common Use Cases**: Filter by static values, date/time ranges, missing data, compound logic, etc.  
**Anchors**: Input ⇒ Filter ⇒ T (True) / F (False) outputs for easy branching in the workflow.

### Prophecy — Filter Gem

**Purpose**: Filters a dataset (model or DataFrame) using a boolean condition—similar to Alteryx but in a pipeline “gem”. ([docs.prophecy.io](https://docs.prophecy.io/analysts/filter/))  
**Configuration**:  
- Requires:
  - **Model**: the input dataset to which the filter applies.  
  - **Filter Condition**: a boolean expression (SQL-like or supported by Spark in Python/Scala).  
- Example: Filtering where `order_category == 'Marketing' AND (order_status == 'Finished' OR order_status == 'Approved') AND NOT is_discounted`.  
- The tool generates equivalent Spark code under the hood.

### Transition Guide: Alteryx User → Prophecy

| Alteryx Filter Tool                     | Prophecy Filter Gem                          |
|----------------------------------------|----------------------------------------------|
| Visual tool with T/F anchors           | Pipeline gem with inline boolean condition   |
| Basic and Custom filters via GUI       | Conditions entered as expressions (SQL, Python, Scala) |
| Outputs branch into True/False anchors | Passes filtered result downstream—no explicit false branch |
| Instant preview in workflow canvas     | Visual interface but tests via running pipeline |

### Key Differences to Note

- **Branching**: Alteryx gives you two explicit outputs (True and False). In Prophecy, you typically route only the True (filtered) output forward—handle the rest via subsequent transformations if needed.  
- **Expression Handling**: Alteryx offers guided editors and functions; Prophecy requires a single condition expression using SQL/Spark syntax.  
- **Execution Context**: Alteryx processes rows within the workflow; Prophecy filters happen within the Spark or SQL execution environment.
```
