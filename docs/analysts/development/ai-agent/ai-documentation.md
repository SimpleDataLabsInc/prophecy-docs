---
title: Document pipelines
id: ai-documentation
description: Automatically create comprehensive documentation for your data pipelines using Prophecy's AI agent
slug: /analysts/ai-documentation
tags:
  - agent
---

Use Prophecy's AI agent to generate documentation for pipelines or entire projects. The agent uses templates to structure the output as Markdown files that describe your data pipelines.

## Generate documentation

You can generate documentation for a single pipeline or for an entire project.

### Generate pipeline documentation

Generate documentation for the currently open pipeline:

1. Open your pipeline in Prophecy.
1. Click **Chat** in the left sidebar.
1. Prompt the agent to document your pipeline.

### Generate project documentation

Generate documentation for all pipelines in a project:

1. Open your project in Prophecy.
1. Click **Chat** in the left sidebar.
1. Prompt the agent to document your project.

### Example prompts

If you don't specify a template, the agent looks for a default template file in your project:

- For pipeline documentation: `pipeline-template.md`
- For project documentation: `project-template.md`

If the default template exists, the agent uses it. Otherwise, the agent asks you to upload or specify a template.

To use a custom template, reference it with an @ mention:

```
Generate pipeline documentation using @custom_template
```

```
Generate project documentation using @project_template
```

![Ask agent to generate documentation](img/agent-generate-docs.png)

### How the agent generates documentation

During generation, the agent:

1. Displays a preparation checklist with progress.
1. Analyzes pipeline or project components.
1. References the template that defines the document structure.
1. Generates the documentation.
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

## Documentation templates

Templates define how the agent structures documentation output. Templates use Markdown for standard formatting and Copilot Template Language (CTL) markers to create special components—like interactive forms, visual diagrams, and dynamic content—that standard Markdown doesn't support.

### Default template files

The agent looks for default template files in your project:

- **Pipeline documentation**: `pipeline-template.md`
- **Project documentation**: `project-template.md`

If you upload multiple templates, the agent uses these default names when you don't specify a template in your prompt. If no default template exists, the agent asks you to upload or specify one.

### Template structure

Templates use Markdown for standard formatting and CTL markers to create special components that Markdown doesn't support. CTL markers generate interactive elements, visual diagrams, and dynamic content that automatically reflect your pipeline structure. See [CTL reference](/analysts/ai-ctl-reference) for marker specifications.

Some markers work only in pipeline documentation templates, while others work only in project documentation templates. Markers like `OVERVIEW` and `COPILOT_QUESTION` work in both contexts.

Once you have written the template file, you need to upload the file to your project:

1. Open the project where you want to upload the template.
1. In the **Project** tab of the left sidebar, click **Add Entity**.
1. Click **Template**. Your file browser opens.
1. Select the Markdown file to upload.
1. Click **Open**.

:::note
To create a custom template, you must upload a file from your local file system. You cannot create a blank template from the project editor.
:::
