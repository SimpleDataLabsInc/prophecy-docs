---
title: Troubleshooting
id: troubleshooting
description: View common issues and solutions encountered in Prophecy
tags: []
---

Prophecy projects can run into occasional issues related to version control, deployments, connections, or runtime environments. This page collects common problems and their solutions.

<details>
<summary>Changes to project are not persisted</summary>

If you are working on a project and don't see changes that you previously made, several issues could be the cause:

- You are on a different branch than the one containing your changes.
- Another user may have overwritten your changes or reverted commits.
- Multiple tabs were open, and one version overwrote another. This happens in the Normal Git Storage Model. The Simple Git Storage Model's single-user mode prevents this. Learn more in [Real-time collaboration](/analysts/collaboration-modes).

</details>

<details>
<summary>My pipeline is read-only</summary>

If you cannot make edits in the pipeline canvas:

- The pipeline may have been imported from another project, which makes it non-editable. Pipelines are only editable from the original project.
- The pipeline might be [locked](/analysts/collaboration-modes) to prevent merge conflicts when others are editing the same project. If this is the case, you'll be able to see who is editing the pipeline at that time and can request control of the pipeline.

</details>

<details>
<summary>Pipeline run fails</summary>

A pipeline run may fail with generic or unknown errors.

- Check runtime logs for detailed error messages.
- Confirm that all inputs, expressions, and connections are correctly configured.

</details>

<details>
<summary>I can't view someone else's project</summary>

A project may not appear in your workspace if you are not part of the assigned team.

- Verify your team membership for the project.
- Ask an admin to update team access if necessary.

</details>

<details>
<summary>No data was written to the target</summary>

Even if a pipeline runs successfully, the target table may remain empty.

- Confirm that the target connection is valid and not expired.
- Check that the write mode settings are correctly configured.

</details>

<details>
<summary>The wrong data was written to the target</summary>

Output may not match expectations due to incorrect pipeline logic or write mode settings.

- Verify write mode settings (Append vs. Overwrite).
- Check filters and expressions in the pipeline logic.

</details>

<details>
<summary>My schedule didn't run</summary>

Scheduled pipelines may fail to trigger if the project containing the schedule is unpublished.

- Ensure the project is published and the schedule is active.

</details>

<details>
<summary>My SQLStatement gem won't run</summary>

Custom SQL may fail if syntax is incorrect or the dialect is unsupported.

- Verify SQL syntax and ensure the dialect used matches your SQL warehouse dialect.

</details>

<details>
<summary>My connection stopped working</summary>

Pipeline errors — especially with Source and Target gems — may occur if credentials or tokens have expired.

- Update connection credentials and any saved secrets.

</details>

<details>
<summary>Scheduled pipeline runs start failing</summary>

Previously successful pipelines may fail if connections expire, schemas change, or other edits occur.

- Update expired connection credentials.
- Check Source/Target gems for schema changes.
- Review pipeline version history to identify changes made by others.

</details>

<details>
<summary>I don't see some datasets from my connections</summary>

Prophecy cannot retrieve datasets if the authenticated identity does not have access on the connection side.

- Confirm that your credentials grant access to the required datasets in the origin data source.

</details>
