---
title: Project sharing
id: project-sharing
slug: /analysts/project-sharing
description: Collaborate by sharing projects for development or viewing
tags: []
---

Share your Prophecy projects with team members or external stakeholders. You can grant full editing access through team membership or provide read-only access via public links.

## Share with your team

Give users project access by adding them to the team that owns the project. Team members can view and edit all projects owned by their team.

### Add users from the project

:::edition Free and Professional
You can add users from a project in [Free and Professional Editions](/getting-started/editions/) only.
:::

To invite team members directly from your project:

1. Open the version control menu in the top right corner of the project editor.
1. Select **Share Project & Replays**. This opens the sharing dialog.
1. Navigate to the **Team Access** tab.
1. Enter one or more email addresses.
1. Click **Send Invitation**.

Prophecy sends an invitation link to each email address. When clicked, Prophecy adds the recipient to the project's team.

### Add users from team settings

To invite team members from a team's Metadata page:

1. Navigate to **Metadata** > **Teams**.
1. Select the team that owns your project.
1. Open the **Members** tab.
1. Click **+ Invite Users**.
1. Enter one or more email addresses.
1. Choose a role: **User** or **Admin**.
1. Click **Send Invitation**.

Prophecy sends an invitation link to each email address. When clicked, Prophecy adds the recipient to the project's team.

## Share publicly

:::edition Free and Professional
Public sharing is available in [Free and Professional Editions](/getting-started/editions/) only.
:::

Share your project with anyone using a public link. This provides read-only access without requiring authentication, making it ideal for demos, training, or stakeholder reviews.

:::caution Data visibility
Public links expose metadata from your fabric, including schema names, table lists, connection details, and data previews. Only share projects publicly when this information can be safely disclosed.
:::

### Enable public sharing

To create a public share link to a Prophecy project:

1. Open the version control menu in the top right corner of the project editor.
1. Select **Share Project & Replays**. This opens the sharing dialog.
1. Click on the **Public Share** tab.
1. Choose your sharing method:

   - Copy the link to share manually
   - Enter email addresses to send the link automatically

To revoke public access, change the **Anyone on the internet with the link** dropdown to **No access**.

### Read-only capabilities

Users with the public link can:

- View pipeline structure and gem configurations.
- Run pipelines and see execution results.
- Inspect interim data samples between pipeline steps.
- Use the AI agent to ask questions about data and logic.

Users cannot:

- Edit pipeline components or configurations.
- Use the AI agent to modify the pipeline.

### Cloning shared projects

When you click **Edit** while in read-only mode:

1. You are prompted to log in (if not authenticated).
1. When logged in, you will see the **Clone Project to Edit** dialog.
1. You can click **Clone Now** to create a copy of the project in your personal team.

When you clone a project, the data ingress/egress gems (Source, Target, and Table) retain their original [connection](/analysts/connections) configurations from the original team's fabric. If you don't have access to that fabric, you'll need to update these gems to use connections available in your personal team's fabric instead.

For example, if the original pipeline has a gem that reads from Snowflake using a connection called `Snowflake_Prod_Data`, you can either replace this connection with one from your personal fabric or request access to the original fabric.
