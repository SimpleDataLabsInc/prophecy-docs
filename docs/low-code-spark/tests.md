---
title: Unit Testing
id: tests
description: Low-code Spark Unit testing
sidebar_position: 5
tags:
  - spark
  - development
  - CICD
  - testing
  - unit tests
---

Writing good unit tests is one of the key stages of the CI/CD process.
It ensures that the changes made by developers to projects will be verified and
all the functionality will work correctly after deployment.

Prophecy makes the process of writing unit cases easier by giving an interactive environment via which unit test cases
can be configured across each component.

There are 2 types of unit test cases which can be configured through Porphecy UI:

1. Output rows equality
2. Output predicates

Let us understand both types in detail:

## Output rows equality

Automatically takes a snapshot of the data for the component and allows to continuously test that the logic performs
as intended. This would simply check the equality of the output rows.

### Example {#output-rows-equality}

In the below example we would create below unit tests:

1. To check the join condition correctly for one-to-one mappings.
2. To check the join condition correctly for one-to-many mappings.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4" title="Output rows equality" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Output predicates

These are more advanced unit tests where multiple rules can be configured which needs to be satisfied.
Requires spark expression to be used as predicates.

### Example {#output-predicates}

In the below example we would create below unit tests:

1. Check that the value of amount column is `>0`.
2. Check whether first name is not equal to last name.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4" title="Output predicates" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Generating sample data for test cases automatically

To generate sample input data automatically from the source dataframe, this option can be enabled while creating unit test.

:::note
Pipeline needs to run once, to generate units test based on auto-generated sample data.
:::

Let's generate sample data automatically for the unit test case we created in above example.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4" title="Generate sample data" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Generated code

Behind the scenes, the code for unit tests is automatically generated in our repository.
Let's have a look at the generated code for our unit test above.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4" title="Generate code" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Renaming the name of unit test

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4" title="Generate code" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
