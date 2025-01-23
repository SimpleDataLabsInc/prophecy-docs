---
title: Visual expression builder
id: visual-expression-builder
description: About the Visual Expression Builder
tags:
  - concept
  - development
  - visual
  - functions
  - expression
  - sql
---

In order to perform data analysis tasks, it's important to be able to construct expressions that combine the SQL functions in various ways. Prophecy makes this easy with the support of the Visual Expression Builder. The Visual Expression Builder takes you through building your expressions, following a step-by-step visual guide.

![Visual Expression Builder](img/visual-expression-builder.png)

Using the SQL Visual Expression Builder can save you time and effort when constructing complex expressions, and can help you to better understand the relationships between different functions and their arguments.

## Supported gems and features

You can use the simplified Visual Expression Builder within the following data transformation gems:

- **Aggregate**
- **Filter**
- **Join**
- **Reformat**

And you can use it within the following Prophecy features:

- **Data Explorer**
  - Filter and Sort Options
- **Data Tests**

## Expression types

You can use the Visual Expression Builder to build expressions in accordance with the following expression types:

- **Static** (native to SQL):
  - Column selection - e.g. `customer_id`, `amounts`
  - Hardcoded value (based on the listed types) - e.g. `15`, `Poland`
  - Function call - e.g. `concat(amount, " ", currency)`
  - Case statement - e.g. `WHEN active_flag = True THEN first_name OTHERWISE last_name`
- **Dynamic** (native to Prophecy):
  - Configuration value - e.g. `$currency`
  - Secret value - e.g. `$jdbc_url`

## Expression syntax

As a data user, you'll never again need to remember the right syntax for your expressions. The Visual Expression Builder takes care of the semantics and syntax for you as you build your expressions.

If you're interested, you can check the syntax of your expressions by viewing the Code view of your expressions.

![Code Expression Builder](img/code-expression-builder.png)

## Converting from code

If you prefer, you can always choose to continue to write your expressions in the Code view.

All of the expressions you write in the Code view are converted to visual expressions by the Visual Expression Builder when you view the Visual view.

### Suggesting expressions and functions

As you build your expressions, Data Copilot can suggest expressions and functions to you, including nested and conditional functions.

While viewing the Code view of your expressions, you can click **Ask AI** to generate your expressions using an English text prompt. You can then review the code expressions, view them on the Visual view, and test them by running the model up to and including the gem with the expressions.

![Ask AI to generate](img/ask-ai-expression.png)

While you're viewing the Code view, you can also take advantage of the expression builder by clicking **Expand Editor** next to any of your expressions.

## What's next

To continue developing with the Visual Expression Builder, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
