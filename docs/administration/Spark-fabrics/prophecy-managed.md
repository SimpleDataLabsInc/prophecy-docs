---
title: "Prophecy Managed"
id: prophecy-managed-databricks
description: Configuring Prophecy Managed Databricks Fabric
sidebar_position: 1
tags:
  - deployment
  - configuration
  - google
  - gcp
  - dataproc
  - livy
---

If you don't have a Databricks environment, use the Prophecy Managed Databricks fabric to get started.
Using this option, you can create a 14-Day Free Trial fabric using Prophecy Managed Databricks. You can use this when trying out Prophecy and when you don't want to connect your own Spark Execution Environment to Prophecy. We already have some sample data and tables created to try out the different functionalities.
Please refer to the video below for a step-by-step example.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/121796483/217787623-1cf01df2-54d6-4338-bd59-bd921e101ce9.mp4" title="Databricks fabric" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

In this fabric you can only change the [Databricks Runtime version](https://docs.databricks.com/runtime/dbr.html#databricks-runtime). The auto-termination timeout, Executor and Driver Machine Type and job sizes are uneditable.
