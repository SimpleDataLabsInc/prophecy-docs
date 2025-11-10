---
title: Document pipelines
id: ai-documentation
description: Automatically create comprehensive documentation for your data pipelines using Prophecy's AI agent
slug: /analysts/ai-documentation
tags:
  - agent
---

Use Prophecy's AI agent to generate pipeline documentation automatically. The agent uses either a default template or a custom template to generate a Markdown file that describes your pipeline.

## Generate documentation for a pipeline

Generate documentation for the currently open pipeline:

1. Open your pipeline in Prophecy.
1. Click **Chat** in the left sidebar.
1. Prompt the agent to document your pipeline.

### Example prompts

To use the default documentation template, use a generic prompt:

```
Create documentation for the current pipeline
```

If you have one or more custom templates, you can reference the one you want to use with an @ mention:

```
Generate pipeline documentation using @custom_template
```

![Ask agent to generate documentation](img/agent-generate-docs.png)

### How the agent generates documentation

During generation, the agent:

1. Displays a preparation checklist with progress.
1. Analyzes pipeline components.
1. References the template that defines the document structure.
1. Generates the pipeline documentation.
1. Saves the Markdown file to the `documents` directory in your project.

View the generated document in **Documents** in the project sidebar.

![Generated documentation](img/agent-docs-list.png)

### Update generated documentation

After generation, you can:

- View and edit the document in the visual editor.
- Switch to the **Code** tab to edit the Markdown code.

Since the document is stored in your project repository, all changes are version-controlled with your code.

:::note
In the Code tab, you may see encoded or complex strings. These contain embedded data. Don't edit them, as changes will break the visual output.
:::

## Pipeline documentation templates

Templates inform the agent how to structure the pipeline documentation output. Use the default template or build your own templates.

### Use the default template structure

Documentation generated with the default template uses this structure:

- **Introduction**: Overview of the pipeline's purpose, business context, and strategy.
- **Input sources**: Each data source with its full name, description, and fields used in the pipeline (not all input fields).
- **Output targets**: Each output table with its description, dependencies, complete column schema, and transformation logic.
- **Transformation steps**: Ordered list of data processing steps with logic mapped to gems.

### Create custom documentation templates

Use Markdown and Copilot Template Language (CTL) to create your custom documentation templates. CTL is a Prophecy-specific language that lets the agent extends Markdown to work with Prophecy components. See [CTL reference](docs/analysts/development/ai-agent/ai-ctl-reference.md) for complete specifications.

Once you have written the template file, you need to upload the file to your project:

1. Open the project where you want to upload the template.
1. In the **Project** tab of the left sidebar, click **Add Entity**.
1. Click **Template**. Your file browser opens.
1. Select the Markdown file to upload.
1. Click **Open**.

:::note
To create a custom template, you must upload a file from your local file system. You cannot create a blank template from the project editor.
:::
