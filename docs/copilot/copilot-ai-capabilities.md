---
title: Data Copilot AI capabilities
id: copilot-ai-capabilities
description: The AI assistant capabilities for data Pipelines and models
sidebar_position: 9
tags:
  - concepts
  - copilot
  - generativeai
  - capabilities
---

Prophecy Data Copilot provides suggestions from an AI model as you develop your data Pipelines and Models. You can view and incorporate suggestions directly within the Prophecy visual editor and code editor. Data Copilot makes suggestions for your entire Pipeline, for a single Gem (transformation), and even for individual expressions within each Gem.

## Supported AI capabilities by engine

Data Copilot supports the following capabilities for the Spark and SQL engines:

| AI Capability                                      | Spark                    | SQL                      |
| -------------------------------------------------- | ------------------------ | ------------------------ |
| Start a new Pipeline (Spark) or Model (SQL)        | ![Tick](./img/tick.svg)  | ![Tick](./img/tick.svg)  |
| Modify an existing Pipeline (Spark) or Model (SQL) | ![Tick](./img/cross.svg) | ![Tick](./img/tick.svg)  |
| Suggest Gems                                       | ![Tick](./img/tick.svg)  | ![Tick](./img/tick.svg)  |
| Suggest Expressions                                | ![Tick](./img/tick.svg)  | ![Tick](./img/tick.svg)  |
| Generate with AI, Scripts                          | ![Tick](./img/tick.svg)  | ![Tick](./img/cross.svg) |
| Generate with AI, Functions                        | ![Tick](./img/tick.svg)  | ![Tick](./img/tick.svg)  |
| Map with AI                                        | ![Tick](./img/cross.svg) | ![Tick](./img/tick.svg)  |
| Code with AI                                       | ![Tick](./img/cross.svg) | ![Tick](./img/tick.svg)  |
| Fix with AI, Gems                                  | ![Tick](./img/cross.svg) | ![Tick](./img/tick.svg)  |
| Fix with AI, Expressions                           | ![Tick](./img/tick.svg)  | ![Tick](./img/tick.svg)  |
| Auto Documentation                                 | ![Tick](./img/tick.svg)  | ![Tick](./img/tick.svg)  |
| Data Tests and Quality Checks                      | ![Tick](./img/tick.svg)  | ![Tick](./img/tick.svg)  |

## Text to Pipelines

Get started on a new Pipeline quickly by typing your prompt into the text box and Data Copilot will generate a new Pipeline or modify an existing one.

### Start a new Pipeline

You can use Data Copilot to start a new Pipeline by typing a simple English text prompt.

![Start a Pipeline](img/copilot_text_to_Pipeline.png)

The following example uses Data Copilot to help start a Pipeline:

1. Type a prompt with English text, such as `Which customers shipped the largest orders this year?`
2. Data Copilot uses metadata from the accessible Datasets, Seeds, Pipelines, and Models, to create a Knowledge Graph.
3. Data Copilot creates the Pipeline based on the text prompt, using the Knowledge Graph as the context. This Pipeline is accessible in both the visual editor and the code editor.
4. If you'd like, review the suggested changes before you decide to keep or reject the suggested Pipeline. Then interactively execute it to see the results.
5. View Data Copilot's suggested changes in the visual editor.

### Modify an existing Pipeline

You can also call Data Copilot to modify an existing Model. Type a new text prompt, and Data Copilot will suggest a new sequence of data transformations. You don't necessarily have to select where you want to make your modification for Data Copilot to make its suggestion.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/a2x6kkzy8y?videoFoam=true" title="Modify an existing Pipeline" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

Added/updated Gems are highlighted in yellow.

## Next-transformation suggestions

Data Copilot can suggest the next transformation in a series or the next expression within a Gem.

### Suggest Gems

Data Copilot can suggest the next transformation for Leaf Nodes in a graph.

![Suggest Gems](img/copilot_next_suggestion.png)

See the following Join suggestion example:

1. Select and drop a Dataset of interest on the canvas.
2. Data Copilot suggests Datasets which are frequently used with the selected Dataset.
3. Data Copilot then suggests a next transformation, in this case, a Join Gem.

### Suggest Expressions

As we continue development within Gems, Data Copilot can suggest expressions within Gems.

![Suggest expressions](img/copilot_next_suggestion_expression.png)

Within our [advanced Expression Builder](/Spark/expression-builder) you can:

1. Type an English text prompt.
2. Data Copilot generates a code expression for a particular column.
3. Review the code expression, and if you'd like, try again with a different prompt.
4. Run the Pipeline up to and including this Gem, and observe the resulting data sample.

## Generate with AI

Data Copilot can generate script Gems, user-defined functions in Spark, or macro functions in SQL.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/vhf63tjnun?videoFoam=true" title="Modify an existing Pipeline" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Map with AI

You don't have to worry about mapping the schema across your Model. Data Copilot will map the target schema with the existing Gems and Datasets.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/p5ab7sgfdw?videoFoam=true" title="Modify an existing Pipeline" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Code with AI

In addition to the visual editor above, you'll also see code completion suggestions in the code editor.

Data Copilot helps you build your Model in the code interface by making predictions as you type your code. And when you go back to the visual interface, you'll see your code represented as a Model.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/7lff0jpqnm?videoFoam=true" title="Modify an existing Pipeline" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Fix with AI

If there are any errors in your Gems, perhaps introduced upstream without your knowledge, Data Copilot will automatically suggest one-click fixes.

The Fix with AI option appears on the diagnostic screen where you see the error messages or directly with the expression itself.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/17q9stsz6n?videoFoam=true" title="Drag and Drop Model Graph Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Auto Documentation

Understanding data assets is much easier with Data Copilot’s auto-documentation. Data Copilot delivers summary documentation suggestions for all Datasets, Pipelines, Models, and Orchestrations.

### Explain Gems

Here Data Copilot provides a high-level summary of a Pipeline and more detailed description of each Gem.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/9r86rl0lbz?videoFoam=true" title="Edit Code Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Describe Datasets and Metadata

How did a Dataset change? Data Copilot recommends a description of the change for every edit you make.
How was a column computed? Data Copilot suggests a plain English description that explains data sources and how every column is generated and what it represents.

<div class="wistia_responsive_padding" style={{padding:'62.5% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/rec6bcdwet?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_responsive_wrapper" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

This is a big time saver! You can edit the documentation suggestions and commit them to your repository.

### Write Commit Messages and Release Notes

Data Copilot auto-documents anywhere you need it - from the granular data sources and columns to Gem labels, all the way to project descriptions. Copilot even helps you write commit messages and release notes.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/z3x5tfu1cf?videoFoam=true" title="Drag and Drop Model Graph Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Data Tests and Quality Checks

Unit tests and data quality checks are crucial for Pipeline and Job productionalization, yet many teams leave little time to develop these tests or worse, don’t build them at all. With Data Copilot, you’ll have one or more suggested [unit tests](/Spark/tests) that can be seamlessly integrated into your CICD process.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/i1bjyf2zae?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

Data Copilot also suggests data quality checks based on the data profile and expectations.
