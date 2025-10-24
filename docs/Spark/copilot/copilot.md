---
title: Copilot for Spark projects
id: copilot-for-spark
slug: /engineers/copilot
description: Use Copilot to develop and explain your Spark pipelines
sidebar_label: Copilot
tags:
  - spark
  - copilot
---

:::edition Enterprise
Applicable to the [Enterprise Edition](/getting-started/editions/) only.
:::

Prophecy's Copilot provides suggestions from an AI model as you develop your data pipelines and models. You can view and incorporate suggestions directly within the Prophecy visual editor and code editor.

- [Start a new pipeline](#text-to-pipelines)
- [Suggest gems](#suggest-gems)
- [Suggest expressions](#suggest-expressions)
- [Generate scripts](#generate-with-ai)
- [Generate functions](#generate-with-ai)
- [Auto documentation](#auto-documentation)
- [Suggest unit tests](#data-tests-and-quality-checks)

## Text to pipelines

Get started on a new pipeline quickly by typing your prompt into the text box and Data Copilot will generate a new pipeline or modify an existing one.

### Start a new pipeline

You can use Data Copilot to start a new pipeline by typing a simple English text prompt.

![Start a pipeline](img/copilot_text_to_Pipeline.png)

The following example uses Data Copilot to help start a pipeline:

1. Type a prompt with English text, such as `Which customers shipped the largest orders this year?`
2. Data Copilot uses metadata from the accessible datasets, seeds, pipelines, and models, to create a Knowledge Graph.
3. Data Copilot creates the pipeline based on the text prompt, using the Knowledge Graph as the context. This pipeline is accessible in both the visual editor and the code editor.
4. If you'd like, review the suggested changes before you decide to keep or reject the suggested pipeline. Then interactively execute it to see the results.
5. View Data Copilot's suggested changes in the visual editor.

### Modify an existing pipeline

You can also call Data Copilot to modify an existing model. Type a new text prompt, and Data Copilot will suggest a new sequence of data transformations. You don't necessarily have to select where you want to make your modification for Data Copilot to make its suggestion.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/a2x6kkzy8y?videoFoam=true" title="Modify an existing Pipeline" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

Added/updated gems are highlighted in yellow.

## Next-transformation suggestions

Data Copilot can suggest the next transformation in a series or the next expression within a gem.

### Suggest gems

Data Copilot can suggest the next transformation for Leaf Nodes in a graph.

![Suggest gems](img/copilot_next_suggestion.png)

See the following Join suggestion example:

1. Select and drop a dataset of interest on the canvas.
2. Data Copilot suggests datasets which are frequently used with the selected dataset.
3. Data Copilot then suggests a next transformation, in this case, a Join gem.

### Suggest Expressions

As we continue development within gems, Data Copilot can suggest expressions within gems.

![Suggest expressions](img/copilot_next_suggestion_expression.png)

Within our [advanced Expression Builder](/engineers/expression-builder) you can:

1. Type an English text prompt.
2. Data Copilot generates a code expression for a particular column.
3. Review the code expression, and if you'd like, try again with a different prompt.
4. Run the pipeline up to and including this gem, and observe the resulting data sample.

## Generate with AI

Data Copilot can generate script gems, user-defined functions in Spark, or macro functions in SQL.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/vhf63tjnun?videoFoam=true" title="Modify an existing Pipeline" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Map with AI

You don't have to worry about mapping the schema across your model. Data Copilot will map the target schema with the existing gems and datasets.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/p5ab7sgfdw?videoFoam=true" title="Modify an existing Pipeline" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Code with AI

In addition to the visual editor above, you'll also see code completion suggestions in the code editor.

Data Copilot helps you build your model in the code interface by making predictions as you type your code. And when you go back to the visual interface, you'll see your code represented as a model.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/7lff0jpqnm?videoFoam=true" title="Modify an existing Pipeline" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Fix with AI

If there are any errors in your gems, perhaps introduced upstream without your knowledge, Data Copilot will automatically suggest one-click fixes.

The Fix with AI option appears on the diagnostic screen where you see the error messages or directly with the expression itself.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/17q9stsz6n?videoFoam=true" title="Drag and Drop model Graph Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Auto Documentation

Understanding data assets is much easier with Data Copilot’s auto-documentation. Data Copilot delivers summary documentation suggestions for all aatasets, pipelines, models, and orchestrations.

### Explain gems

Here Data Copilot provides a high-level summary of a pipeline and more detailed description of each gem.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/9r86rl0lbz?videoFoam=true" title="Edit Code Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Describe Datasets and Metadata

How did a dataset change? Data Copilot recommends a description of the change for every edit you make.
How was a column computed? Data Copilot suggests a plain English description that explains data sources and how every column is generated and what it represents.

<div class="wistia_responsive_padding" style={{padding:'62.5% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/rec6bcdwet?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_responsive_wrapper" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

This is a big time saver! You can edit the documentation suggestions and commit them to your repository.

### Write Commit Messages and Release Notes

Data Copilot auto-documents anywhere you need it - from the granular data sources and columns to gem labels, all the way to project descriptions. Copilot even helps you write commit messages and release notes.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/z3x5tfu1cf?videoFoam=true" title="Drag and Drop model Graph Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Data Tests and Quality Checks

Unit tests and data quality checks are crucial for pipeline and job productionalization, yet many teams leave little time to develop these tests or worse, don’t build them at all. With Data Copilot, you’ll have one or more suggested [unit tests](/engineers/unit-tests) that can be seamlessly integrated into your CI/CD process.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/i1bjyf2zae?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

Data Copilot also suggests data quality checks based on the data profile and expectations.
