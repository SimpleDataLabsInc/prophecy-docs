---
title: Use project test
id: project-tests
description: Custom SQL query tests
sidebar_position: 8
tags:
  - how-to
  - testing
  - sql
---

Project tests are custom data tests that check for a passing condition, such as checking that the given query doesn’t return any unexpected rows. They are based on [dbt singular tests](https://docs.getdbt.com/docs/build/data-tests#singular-data-tests){:target="external"}, but you don’t need to know dbt to use project tests in Prophecy. Project tests are useful for data users who know the important business questions but wouldn’t necessarily know how to write tests.

Project tests perform a SQL query that checks the executed result of your project against a passing condition to see if it is successful. This is done by checking whether a generated table from your transformation meets a particular condition.

Note: There could be many tests within a project. Each test is checking a table created by your choice of input Models, data sources, and transformation Gems.

By default, and most often, the condition for a project test is simply a check that the given query does not return any failing rows.

<script src="https://fast.wistia.com/embed/medias/mvk1axfn7e.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_mvk1axfn7e seo=false videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/mvk1axfn7e/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>

## Set up a test

Since project tests share the same canvas as Models, you can set them up the same way you would develop and run a Pipeline.

### Develop a test

To develop a project test, start by opening a project:

1. Under the Project Browser, click **Add Test**.

   ![Add a new test](img/project-test-add-new.png)

2. Enter your **Test Name**. Project tests are saved to a tests SQL file by default.

3. Click **OK** to create your new test.

4. Create your test Model by dragging and dropping Gems to your Visual canvas. Connect them to your Data Test. You can also write your test on the Code view. You can use as many Models and other database objects as you’d like in your test.

### Run a test

After you’ve developed your project test and executed all of your Models, you can run the test.

1. Click the **Play** button on either the canvas or an individual Gem to execute your test. The outputted table from the Gem is what’s tested.
   1. Run a whole test. Clicking the canvas **Play** button executes the complete test and shows the interim data after the Data Test Gem. Additionally, it displays the final test status, succeeded, warning, or failed, in a summary.
   2. Run a partial test. Clicking the Gem **Play** button executes the test SQL only for a particular Gem, and displays that Gem’s data on the output. This option doesn’t execute the data test.
2. Click **See Run Details** to view the test Summary. Depending on the outcome of the test, the icon displays a different color.

   ![See Run Details](img/project-test-run-details.png)

   You can click to expand the test logs in the Summary to view the dbt logs.

   ![View test summary](img/project-test-summary.png)

In addition to the previous relational integrity test, you can create tests to check that the total payment amount from customers is positive or simply check that all of your tables are still accessible.

## Fix a failed test

If your project test fails, check your test Model for any changes.

![Failed test](img/project-test-fail.png)

Some examples of test failure causes include:

- Happy path: There is now a row in the table → you have detected the thing you were trying to detect!
- The table no longer exists since one or more input data sources were deleted or inaccessible
- Dataset schema changes, such as in the column or datatype
- The seed in the test is different from what’s in your warehouse
- Code releases that caused a breaking change

Note: Make sure you have write permission to create a new table in your data warehouse, otherwise you may run into errors while trying to run your own tests.

By default, project tests are configured to fail if the table has one or more rows. You can also modify the passing condition of your test through advanced options.

## Configure a test

You can configure your own passing condition of your project test.

You can use the configurations to help decide which tables to focus on if you have too many with failed rows. Or conversely, you might care less about cases with multiple failed rows. For example, you might have a customer churn use case where you have 50 complaints from one customer. Configuring your test can help you identify and take action, such as assigning more resources to assist that customer.

To configure a test:

1. Click on the test to open the test details.

2. Enter conditional values for the following options:

   ![Configure a test](img/project-test-config.png)

   - ![A](/docs/img/annotation-letter-a.png) - Sets the failure condition used to run against the test result. You can use any function that operates on a column or multiple columns.
   - ![B](/docs/img/annotation-letter-b.png) - Sets the maximum count of all failed rows queried by the test condition. You can set the limit to save resources and time by having the test stop its query as soon as it encounters a certain number of failed rows.
   - ![C](/docs/img/annotation-letter-c.png) - Determines whether the failure of the test returns an error or warning. The severity operates from the highest priority selection, error, to the lowest, warning. So if you select error, then the test first checks for errors. If it doesn’t find any, then it then checks for warnings. If you select warning, then the test only checks for warnings. If you don’t select a severity, then error is chosen by default.
   - ![D](/docs/img/annotation-letter-d.png) **Error If** and ![E](/docs/img/annotation-letter-e.png) **Warning If** - Sets the number of failed rows to determine a failed test. Depending on the selected severity, your test only returns a failed test for error checks. Warning won’t return a failed test.

3. Click **Save**.

## Schedule a test

When scheduling your project, you can opt in to run a test along with the project or Model. Scheduling a test allows you to ensure on a daily basis that your data is correct. You can only schedule a test with a project or Model. You cannot schedule one individually.

To Schedule your project to run with tests:

1. Under the Project Browser, click **Add Job**.

2. Select **Run tests** in the Model Gem in your Job.

   [Add a schedule job](img/project-test-schedule.png)

3. Select the database object you want to run the test on. The options are:

   - Run entire Project
   - Run a SQL Model
   - Run a Snapshot

4. Check that your **Project, Model**, and **Fabric** are correct.

5. Click **Save**. The Job runs automatically. You can see the Job status by clicking **Detail**.

   [Run a schedule job](img/project-test-schedule-detail.png)
