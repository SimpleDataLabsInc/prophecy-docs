---
title: Replays
id: project-replays
slug: /analysts/replays
description: Share interactive, step-by-step walkthroughs of pipeline development
tags: []
---

:::edition Free and Professional
Replays are available in Free and Professional Editions only.
:::

Replays transform your pipeline development history into interactive tutorials. By breaking down the build process into step-by-step walkthroughs, replays help viewers understand not just what your pipeline does, but how and why you built it.

:::caution Data visibility
A replay exposes fabric metadata including schemas, tables, connections, and data previews. Only share replays when this information can be safely disclosed.
:::

## Prophecy onboarding

Prophecy's onboarding experience uses replays to introduce new users to the platform. To revisit these replays after your initial setup, click **Onboarding** from the homepage.

Reviewing the onboarding replays can help you become familiar with the tool before using it yourself.

## Share an existing replay

1. Open the version control menu in the top right corner of the project editor.
1. Select **Share Project & Replays**. This opens the sharing dialog.
1. Click on the **Replays** tab.
1. Copy the link and send it to your audience.

Anyone with the link will be able to view the replay, no login required.

## Build a new replay

To create a replay from your pipeline's commit history:

1. Click the version control menu and select **Share Project & Replays**.
1. Navigate to the **Replays** tab.
1. Click **Build Replay** to open the Replay Builder.
1. Click **Get Started**.

Prophecy automatically generates replay steps based on your pipeline's saved commits. Each step appears in the bottom panel with a default title and description.

:::tip
To learn more about commit history, visit [Versioning](/analysts/versioning).
:::

### Customize your replay

To refine the replay experience:

1. Click the gear icon in the bottom panel to edit:
   - Step order (drag to reorder)
   - Step titles and descriptions
   - Which commits to include (uncheck to skip)
1. Mark steps as **Challenge Mode** to create interactive learning steps.

Note that while you can reorganize steps and disable commits, you cannot change the order of commits.

### Challenge mode

Challenge mode transforms passive viewing into active learning. When you mark a step as a challenge:

- Viewers must recreate the pipeline transformations themselves
- The replay validates their work against the original implementation
- Viewers can switch to **Watch** mode if they need help completing the challenge

This makes replays powerful training tools for teaching data transformation techniques in Prophecy.

## Viewer experience

Users who open your replay link can:

- Progress through each commit step-by-step
- See data samples automatically as the replay advances
- Pause the replay to explore the pipeline
- Attempt challenge mode steps to test their skills
- Validate their work against your original pipeline logic

If a replay exists, you can copy the link and send it to someone.

### Resuming and exiting

If viewers leave a replay before finishing, they can resume from where they left off from the homepage.

When viewers click **Exit** on a replay, they enter **View** mode, which is the same read-only interface used for [public sharing](/analysts/project-sharing). In View mode, they can explore the completed pipeline but cannot make changes.
