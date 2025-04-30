---
title: Collaboration
id: collaboration
slug: /analysts/collaboration
description: Work together on projects simultaneously
tags: []
---

Prophecy is built for collaboration. To support a variety of personas including data engineers and data analysts, Prophecy has built a robust set of features that bridges the gap between teams and speeds up time to production.

## Real-time collaboration

When multiple teammates collaborate on the same project simultaneously, Prophecy offers robust mechanisms to prevent conflicting changes. This is primarily managed through Git integration and a project's configured Git mode. Depending on the chosen mode, Prophecy employs either:

- **Branch-based isolation:** Where each user works on their own Git branch, merging changes when ready.
- **Locking mechanisms:** Where Prophecy prevents simultaneous edits of critical components.

This ensures project integrity and avoids overwriting edits. To learn more about specific Git modes and their impact on collaboration, visit [Real-time collaboration](docs/analysts/development/collaboration/collaboration-modes.md).

## Comments and annotations

Prophecy enhances pipeline readability and comprehension through several annotation features:

- **Gem comments:** Copilot generates comments and documentation for individual pipeline components (gems), providing context and explaining complex transformations. You can also create and update gem comments yourself.
- **Canvas annotations:** Add free-form text annotations directly on the pipeline canvas, highlighting key steps, providing explanations, or documenting assumptions.
- **Gem labels and icons:** Labels and icons on each gem allow users to visually categorize and identify pipeline components, improving overall pipeline clarity and organization.

## Package sharing

The Package Hub facilitates efficient team collaboration by enabling the sharing and reuse of pipeline components.

- **Component reuse:** Share and import pre-built pipeline segments, transformations, and Prophecy Apps, eliminating redundant development.
- **Consistency:** Standardized components ensure uniform pipeline design and execution across teams.
- **Access control:** Leverage shared components without access to change the original project.

Teams can collaborate more effectively by creating and sharing reusable pipeline components through packages. To learn more, visit [Extensibility](docs/analysts/extensibility/extensibility.md).

## Prophecy Apps

Prophecy Apps enable users to generate reports and run data flows without extensive pipeline engineering. This is beneficial for:

- Quick execution of common data tasks by eliminating the need to build pipelines from scratch.
- Sharing and reusing standardized pipeline patterns, while preventing duplication of effort.
- Minimizing the risk of errors for reliable pipeline execution.

To learn more, visit [Prophecy Apps](docs/analysts/business-apps/business-apps.md).
