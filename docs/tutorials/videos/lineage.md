---
title: Data Lineage
id: data-lineage
description: How to Track Data Lineage
sidebar_position: 4
tags:
  - Pipelines
  - tutorial
  - lineage
  - search
  - audit
---

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/etvhm3xvn8?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Summary


### Description


### Transcript

Welcome Back! We’ve been building pipelines, manipulating datasets, and writing reports. How do we track the lineage for all this data? Today we’ll explore how to track lineage across datasets and even column level lineage.

From the landing page, click to view metadata across all my projects. Let’s view all the entities related to my latest project, ShippingReports. Let’s explore lineage for my Pricing pipeline. First I’ll browse datasets. This Pricing pipeline reads from my shipping dataset, does some transformations, and writes the report. 


[Column Level Lineage](https://fast.wistia.net/embed/channel/s98lbj0pfs?wchannelid=s98lbj0pfs&wvideoid=etvhm3xvn8?wtime=57s)  
Let’s search the columns in my shipping dataset. How is the column RETURNFLAG used? There are two expressions that use RETURNFLAG. First the Cleanup gem uses my column of interest, RETURNFLAG, in a case_when statement which labels items on CLEARANCE. Then, the SumAmounts gem counts the number of clearance items. 

If I’ve forgotten how my gems are laid out in my pipeline, I can zoom into my pipeline, click a gem, like the cleanup gem. See the Python (or scala) code for the cleanup gem. See the input dataframe columns which are feeding into this cleanup gem. See the output dataframe columns.

Coming back to the summary, we can dig into the dataset to see each column, datatype, and how the column is used upstream or downstream. For this source dataset - shipments - the columns are used in expressions only downstream. So I have a great way to view each column, and how it gets used by each gem in my pipeline. 

[Search](https://fast.wistia.net/embed/channel/s98lbj0pfs?wchannelid=s98lbj0pfs&wvideoid=etvhm3xvn8?wtime=2m24s)  
What if I want to search for my column among multiple pipelines? I can search across projects, filter by a column that was modified this month or this week. I can see exactly which gems and expressions use my column of interest. 

We can use this lineage information to track sensitive data for compliance, or to understand the context of data before including it in a new pipeline. That concludes this short training on data lineage in Prophecy. See you next time!

### Follow along checklist

Set Prophecy credentials while signing up for a free trial here: [App.Prophecy.io](https://App.Prophecy.io/)

Go for it! 

In order to have some data to track, try following the "Design a Pipeline" Tutorial, or use your own data. 

Follow the steps outlined in the Lineage video above. 

Ask questions on Prophecy's [Slack](https://join.slack.com/t/prophecy-io-support/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ). 
