---
title: Team-based access
id: team-based-access
draft: true
description: Manage access by team
tags: []
---

In Prophecy, access control is managed at the team level. Each user belongs to a team, and permissions are granted based on team membership. Team admins have special team privileges, and there can be multiple team admins configured per team.

## Projects and fabrics

Teams can own many projects and fabrics, but each project and fabric can only be assigned to one team.

## Share project access

If a project is shared with you, you can use its components from the package hub in a read-only manner. This means you can reference and incorporate transformations, datasets, and other reusable assets from the project without modifying them.

This approach ensures that core business rules and standard transformations remain consistent across teams. By preventing direct edits, organizations can maintain data integrity, enforce best practices, and avoid fragmentation of logic across multiple projects.

## Restrict pipeline editing

Business apps enable users to execute pipelines without needing full access to modify them. If a project containing a business app is shared with you, you can run the app but cannot edit the underlying pipelines, datasets, or configurations.

This restriction is beneficial for operational teams that need to trigger workflows without risking unintended changes. It also helps maintain compliance by ensuring that only authorized developers can alter critical business logic while still allowing users to execute necessary processes.
