---
title: Run apps
id: run-apps
slug: /analysts/run-apps
description: Learn how to use applications that have been shared with you
tags: []
---

A Prophecy App is a visual application built on top of a Prophecy pipeline. When you run a Prophecy App, you execute the underlying pipeline using your own parameters.

## Access and sharing

Access to Prophecy Apps is controlled by Prophecy’s team-based permission model. If your team owns a project, you have full edit access. This means that you can build, edit, and delete Prophecy Apps in the project.

If a project is shared with your team, you **cannot** edit pipelines or Prophecy App structure. However, you can **run** Prophecy Apps from the shared project. This ensures that your data engineering team can safely share pipelines they developed with analysts or business users.

:::info See Also
To learn more, reference the documentation on [team-based access](/administration/teams-users/team-based-access).
:::

## Configs

Prophecy Apps can be run using different values. These sets of values are stored in **configs** that enable you to save different values for different scenarios or teams.

Each config acts like your personal instance of the Prophecy App. You can:

- Name your config (e.g., `Q1 Sales Report`, `NY Region Data Pull`).
- Customize input values based on your use case.
- Save and reuse the config later.
- Schedule the config to run at defined intervals.

:::note
Configs are stored per team. Other team members can access and run your configs if they belong to the same team.
:::

### Create config

Follow the steps below to create a new config for an app.

1. Navigate to the **App Browser**.
1. Open the Prophecy App you want to use.
1. If no configs exist yet, you’ll be prompted to create one. Otherwise:
   1. Hover over the app name in the sidebar.
   1. Click the **+** icon to add a new config.
1. Fill in the required inputs (form fields that map to pipeline parameters).
1. Click **Run** to execute the app.

## Schedules

You can set each app config to periodically run using a **schedule**.

### Schedule a config

To create and enable an app schedule:

1. Open the Prophecy App.
1. Select the config you want to schedule.
1. From the app header, click the **...** options meu.
1. Click **Schedule**.
1. Define the frequency.
1. Turn on the **Enable** toggle.
1. Click **Schedule**.

After you create the schedule, publish it to the appropriate fabric (the execution environment that the pipeline will run on). This is the same process as [scheduling pipelines](/analysts/scheduling) themselves.

## What's next

To learn more about how Prophecy Apps work behind the scenes, explore the following pages.

- [Create a Prophecy App](/analysts/create-business-applications)
- [Define pipeline parameters](/analysts/pipeline-parameters)
- [Publish a project](/analysts/project-publication)
