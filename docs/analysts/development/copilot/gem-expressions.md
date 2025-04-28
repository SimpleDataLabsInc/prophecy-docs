---
title: Generate expressions
id: expression-generation
slug: /analysts/expression-generation
description: Automatically generate expressions with natural language
tags:
  - analyst
  - copilot
---

Copilot enhances the expression-building experience within gem configurations in two ways:

- Suggesting context-aware expressions based on your input and column metadata.
- Accepting natural language prompts to build new expressions.

## Copilot suggestions

Copilot suggests expressions based on semantic cues from your column names. To accept Copilot suggestions, click `tab` or click on the expression itself in the gem.

For best results, use descriptive column names.

- **Recommended**: `customer_email`

  Clear intent, likely to produce accurate suggestions.

- **Not recommended**: `col1`

  Ambiguous, may result in less reliable output.

![Copilot expressions](./img/copilot-expressions.gif)

## Copilot prompts

If you want to build your own expression, you can ask Copilot to help. Copilot is available for writing expressions in both the visual and code view.

1. Click on an expression field in a gem.
1. Click **Ask AI** to enter a prompt.
1. Copilot uses your prompt to generate an expression.

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
