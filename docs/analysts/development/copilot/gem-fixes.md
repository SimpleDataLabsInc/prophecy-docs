---
title: Error fixing
id: generate-fix
slug: /analysts/generate-fix
description: Fix gems errors with one click
tags:
  - analyst
  - copilot
---

Troubleshooting pipeline errors manually can be time-consuming. Prophecy simplifies this process by offering multiple ways to detect and resolve issues quickly. After Copilot makes the fix, Prophecy will always provide a summary of the changes made.

## Inline fix

Click an expression inside a gem with an error and select **Fix it** to apply an automatic correction.

![Copilot inline fix](./img/copilot-expression-fix.gif)

## Fix on save

When saving a gem with detected errors, Prophecy prompts you to either **Save without fixing** or **Fix Diagnostics**.

**Fix Diagnostics** triggers Copilot to resolve the issues for you.

![Copilot fix on save](./img/copilot-fix-diagnostics.png)

## Gem-level fix

On the pipeline canvas, open a gem’s action menu and select **Fix** to automatically correct errors within that component.

![Copilot fix gem](./img/copilot-fix-gem.png)
