---
title: Generate expressions
id: expression-generation
slug: /analysts/expression-generation
description: Automatically generate expressions with natural language
tags:
  - analyst
  - copilot
---

Copilot enhances the expression-building experience within gem configurations by generating context-aware suggestions and expressions based on your input and column metadata.

In many cases, Copilot pre-populates expressions based on semantic cues from your column names. For best results, use descriptive column names.

- `customer_email` → Clear intent, likely to produce accurate suggestions.

- `col1` → Ambiguous, may result in less reliable output.

![Copilot expressions](./img/copilot-expressions.gif)

If you want to change the expression or build one from scratch, you can ask Copilot to help you. In both the visual and code expression builder, Copilot can generate your desired logic.

## Example prompts {#example-prompts-expressions}

The following are example prompts you can use to generate expressions in gems.

| Scenario             | Prompt                                                             |
| -------------------- | ------------------------------------------------------------------ |
| Basic transformation | “Extract the domain from the `email` column.”                      |
| String formatting    | “Capitalize the first letter of each word in `customer_name`.”     |
| Date parsing         | “Convert `order_date` to YYYY-MM format.”                          |
| Conditional logic    | “If `amount` > 1000, then label as ‘high value’, else ‘standard’.” |
| Null handling        | “Replace null values in `zipcode` with ‘00000’.”                   |
| Math calculation     | “Calculate discount as `price` \* `discount_rate`.”                |
