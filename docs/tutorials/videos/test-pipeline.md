---
title: Test a Pipeline
id: test-Pipeline
description: How to add unit tests to a Pipeline
sidebar_position: 3
tags:
  - Pipelines
  - tutorial
  - test
  - custom
  - unit
---

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/hs4r7qlsxo?wtime=0s?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Summary

Generate unit tests to ensure each transformation functions as expected.

### Description

Generate unit tests using Prophecy's template test builder, run tests and check results all in Prophecy's visual interface. Create custom data samples or configure Prophecy to generate a data sample based on your Pipeline. Go further with custom predicate expressions. Commit your tests, and Prophecy will run the tests any time the main branch is updated. Maintain tests in Prophecy and gate releases based on test outcomes. Achieve greater test coverage with Prophecy!

### Transcript

Welcome back! In the last trainings, we designed a Pipeline, scheduled the Pipeline, and now we’ll test the Pipeline. Let’s get started!

[Basic test: Output Rows Equality](https://fast.wistia.net/embed/iframe/hs4r7qlsxo?wtime=18s?seo=false?videoFoam=true)  
We’ll start with a test to make sure our aggregate function works as expected. Our SumAmounts Gem groups by return and delivery status. We’ll focus on the SUM_QTY column for simplicity. Here we’ll use the first option "Output rows equality." We will define input data and output data so that our Aggregate function always transforms the input data into the output data. (If preferred, there’s an option to generate a data sample from the larger Dataset.) Select the columns you’d like to include in the test. Notice the input and output Datasets have been started for us. These are the input columns that are needed to compute our desired output columns. Remember this Gem should group by returnflag and delivery status. Let’s say our return flags could be A or B, and our delivery status could be C or D. For simplicity, let’s say each order has quantity of one. We have created our input sample data. Now let’s create the output sample data. We expect the data should be grouped by return flag, then by delivery status. The quantity from each group is summed.

[Run the basic test](https://fast.wistia.net/embed/iframe/hs4r7qlsxo?wtime=1m47s?seo=false?videoFoam=true)  
We have created our test. Run the test right here in Prophecy. The test passed! So our Aggregate function, called SumAmounts, is working exactly as we thought.

[See the basic test code](https://fast.wistia.net/embed/iframe/hs4r7qlsxo?wtime=2m3s?seo=false?videoFoam=true)  
Let’s see what the code looks like behind the scenes. For this unit test here is the input data sample and the output data sample. This test computes sumAmounts given the input DataFrame and asserts the columns match the expected output Dataset. Wow, so that’s it! Creating a test in Prophecy is easy. Commit the code and your tests can be used to gate your releases.

[Custom test: Output predicates](https://fast.wistia.net/embed/iframe/hs4r7qlsxo?wtime=2m39s?seo=false?videoFoam=true)  
For those Prophecy users who want to dig deeper, we have a bonus segment to explore customizing tests. Here we’ll create a unit test for the Cleanup Gem. I created the expression here which handles erroneous zero tax values and replaces them with a default value. So this is the expression i want to test. Last time we created a test using the "Output rows equality" option, wherein we specify the input and output Datasets. Here we’ll customize our test with "Output predicates." Select the columns of interest. Define the expression your function should satisfy. Define some sample rows. Hopefully our function will replace the zero with the default value.

[Run the custom test](https://fast.wistia.net/embed/iframe/hs4r7qlsxo?wtime=3m43s?seo=false?videoFoam=true)  
We have created our test! Let’s run it right here in Prophecy. It passed! Before we save our work I want to find a scenario where I can make my test fail. If I remove this expression in my Cleanup Function - if I just pass the input Tax as it is with the zeros included - then my tests should fail. The predicate expression is not always true for this input Dataset. Great! Let’s return the expression to cleanup the data in the Cleanup Gem and save our work.

[See the custom test code](https://fast.wistia.net/embed/iframe/hs4r7qlsxo?wtime=4m28s?seo=false?videoFoam=true)  
Let’s see this code behind the scenes! Assert the computed output satisfies our custom predicate.

[Recap](https://fast.wistia.net/embed/iframe/hs4r7qlsxo?wtime=4m38s?seo=false?videoFoam=true)  
Wow, we created unit tests for the SumAmounts and Cleanup functions. We used two types of tests, including custom predicates, to make sure our functions are working as designed. Just commit this new code, merge, and release a version tag, exactly as in the previous video training. Your tests will be included in your Pipeline release sequence, so you can be alerted if your functions stop passing these code quality tests. Nice! In the next training we’ll see how to monitor our Pipelines over time.

See you next time!

### Follow along checklist

Databricks and Prophecy credentials are needed. Set Prophecy credentials while signing up for a free trial here: [App.Prophecy.io](https://App.Prophecy.io/). If you don't have Databricks credentials, the Prophecy app will guide you to use our "managed" Databricks cluster during your 14 day free trial.

My repository is located [here](https://Github.com/SimpleDataLabsInc/ShippingReports); I just created an empty repository, designed, scheduled, and tested my Pipeline as shown in Prophecy, then committed the generated code from the Prophecy UI.

Go for it! Follow the steps outlined in the video above; ask questions on Prophecy's [Slack](https://join.slack.com/t/Prophecy-io-support/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ)
