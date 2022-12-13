---
title: Schedule a Pipeline
id: schedule-Pipeline
description: How to schedule a versioned Prophecy Pipeline on Databricks Workflows.
sidebar_position: 2
tags:
  - Pipelines
  - tutorial
  - schedule
  - Job
  - databricksworkflow
  - Git
  - commit
  - pullrequest
  - merge
  - release
  - version
---

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/dvayf1k9us?wtime=0s?seo=false?videoFoam=true" title="Schedule Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Summary

Schedule a data Pipeline on Databricks using best software development practices.

### Description

Schedule a data Pipeline using best software development practices: commit to Git, pull request, merge, release a version of the Pipeline, see the scheduled Job in Databricks Workflows.

### Transcript

[Overview](https://fast.wistia.net/embed/iframe/dvayf1k9us?wtime=7s?seo=false?videoFoam=true)  
Welcome back! Today we’ll schedule our Pipeline which is integrated with Databricks Jobs. You’ll see everything is encoded on Git.

In the last training, we designed a Pipeline and we committed our code to Git. We started with a repository and a main branch. Prophecy created a feature branch and we committed our code to the feature branch. So the feature branch, dev/Anya, contains our Pipeline which reads a Dataset from snowflake, transforms the data, and writes a report to a Delta Catalog table.

Today, we’ll schedule our Pipeline and commit our schedule details to our feature branch.

[Create Schedule](https://fast.wistia.net/embed/iframe/dvayf1k9us?wtime=1m3s?seo=false?videoFoam=true)  
It’s very easy to design and commit to Git using best software development practices in Prophecy’s low-code canvas. From our Pipeline, create a schedule to run the Pipeline at regular intervals and setup alerts.

[Git Branches](https://fast.wistia.net/embed/iframe/dvayf1k9us?wtime=1m30s?seo=false?videoFoam=true)  
Enable the Job, and prepare to release. Prophecy makes it easy for everyone to work with Git. On the left is our feature branch; on the right is our main branch. The main branch is where your final code should exist. We have done some new work, designing a new Pipeline and new schedule for the Pipeline. Let’s commit our work to our feature branch.

[Commit, pull request, merge](https://fast.wistia.net/embed/iframe/dvayf1k9us?wtime=1m57s?seo=false?videoFoam=true)  
With this commit, the feature branch contains both the Pipeline and the schedule. We like our Pipeline, we want our Pipeline and schedule to be a part of the main codebase.

We could merge straightaway, but the best practice is to create a pull request so that our team can review our changes. Create the pull request according to your team’s standards. We’ve defined our pull request template in Prophecy here. If there are no further changes needed, let’s merge the feature branch to the main branch.

[Release scheduled Job and version tag](https://Prophecy-1.wistia.com/medias/dvayf1k9us?wtime=3m9s)  
Now the main branch contains the Pipeline and the scheduled Job. Let’s release the Job to run in Databricks and make sure everything is included in a specific version tag. That way we know exactly what Pipeline is running in our production environment.

We have released the Job to run in Databricks workflows. At the same time, We have created a versioned release of our codebase. So, our Pipeline and schedule are now on the main branch, and a versioned tag has been created.

[CI/CD](https://fast.wistia.net/embed/iframe/dvayf1k9us?wtime=4m9s?seo=false?videoFoam=true)  
You’re probably curious if Prophecy’s deployments integrate with your jenkins, Github actions, or existing deployment toolset. YES! Use Prophecy Build tool to integrate with these in-house CI/CD tools.

[Prophecy Build Tool](https://fast.wistia.net/embed/iframe/dvayf1k9us?wtime=4m9s?seo=false?videoFoam=true) (available [here](https://Github.com/SimpleDataLabsInc/Prophecy-build-tool))

- Triggers on every change that is pushed to the main branch

- Sets the variables and dependencies

- Builds the Pipelines and generates a jar or wheel file

- Runs all unit tests

- If the tests pass, Prophecy build tool will deploy a jar or wheel file to the configured Databricks location

That concludes this training! We learned how to schedule our Pipeline, ommit to our feature branch, merge the feature branch with the main branch, release a version of our project. Now we know exactly what code will be deployed and we can see the Job running on Databricks.

In the next training, we’ll see how to test our Pipeline.
See you next time!

### Follow along checklist

Databricks and Prophecy credentials are needed. Set Prophecy credentials while signing up for a free trial here: [App.Prophecy.io](https://App.Prophecy.io/). If you don't have Databricks credentials, the Prophecy app will guide you to use our "managed" Databricks cluster during your 14 day free trial.

My repository is located [here](https://Github.com/SimpleDataLabsInc/ShippingReports); I just created an empty repository, designed Pipeline, scheduled, and committed the generated code from the Prophecy UI.

Go for it! Follow the steps outlined in the video above; ask questions on Prophecy's [Slack](https://join.slack.com/t/Prophecy-io-support/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ)
