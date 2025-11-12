---
title: Copilot Template Language (CTL)
id: ai-ctl-reference
description: Find definitions for markers in Copilot Template Language
slug: /analysts/ai-ctl-reference
tags:
  - agent
---

Copilot Template Language (CTL) extends Markdown with special markers that create components in your documentation that standard Markdown doesn't support. These markers enable features like interactive question forms, visual pipeline diagrams, and dynamic content that automatically updates based on your pipeline structure.

## Marker syntax

Use CTL markers directly inside your documentation template Markdown file. Markers use this structure:

```
[MARKER_TYPE]()
```

The `MARKER_TYPE` tells the agent what type of special component to create. Each marker generates a specific type of component—like interactive forms, visual diagrams, or structured data tables—that standard Markdown cannot create on its own.

For example, when the agent comes across the `[TRANSFORMATIONS]()` marker in the template file, it will replace marker with a formatted section listing all transformation steps in your pipeline in the generated documentation file.

Each marker may accept zero, one, or multiple arguments. Review the specific marker to see its correct format.

## Marker reference

The Copilot Template Language includes the following markers.

### Overview

```
[OVERVIEW]()
```

The agent-generated documentation will have a summary section and embed visual diagram of the pipeline (for pipeline-level templates) or pipelines (for project-level templates). This marker does not accept any parameters.

### Sources

```
[SOURCES]()
```

The agent-generated documentation will have a formatted section that lists all data sources used in the pipeline, including descriptions and column information. This marker does not accept any parameters. This marker is compatible with pipeline-level templates only.

### Targets

```
[TARGETS]()
```

The agent-generated documentation will have a formatted section that lists all output tables or files created by the pipeline, including descriptions and column information. This marker does not accept any parameters. This marker is compatible with pipeline-level templates only.

### Transformations

```
[TRANSFORMATIONS]()
```

The agent-generated documentation will have a formatted section with a summary and detailed explanation of each data transformation step in the pipeline. This marker does not accept any parameters. This marker is compatible with pipeline-level templates only.

### Copilot question

```
[COPILOT_QUESTION]('Your question here')
```

The agent-generated documentation will have an interactive question form in your documentation. The AI agent tries to answer the question automatically based on the pipeline or project. If the agent can't answer, the question appears as a form field for users to fill in after the documentation is generated.

This marker accepts one string parameter that contains your question or prompt. For example: `'[COPILOT_QUESTION]('Specify the number of transformation steps in the pipeline.')`

### Question

```
[QUESTION]('Your question here')
```

The agent-generated documentation will have an interactive question form in your documentation that users must answer manually. Unlike `COPILOT_QUESTION`, the agent does not try to answer this question. It always appears as a form field for users to complete.

This marker accepts one string parameter that contains your question or prompt. For example: `'[QUESTION]('Define the expected outcome of this pipeline')`

<!-- Are there any limitations on the types of prompts you can include in the copilot questions and regular questions? Can you give some examples? -->

### Pipelines

```
[PIPELINES](template=subtemplate.md)
```

The agent will use a pipeline template to generate documentation and embed that documentation in the higher-level project documentation. The agent processes the template separately for each pipeline, filling in the details specific to that pipeline. The template must already exist in the project for the agent to locate it.

To learn how to upload a new template, see [Document pipelines](docs/analysts/development/ai-agent/ai-documentation.md).

<!-- Can you only call one template at a time? -->

## Marker-template compatibility

This table describes which markers are compatible with which template types.

| Marker             | Pipeline templates | Project templates |
| ------------------ | ------------------ | ----------------- |
| `OVERVIEW`         | ✓                  | ✓                 |
| `SOURCES`          | ✓                  |                   |
| `TARGETS`          | ✓                  |                   |
| `TRANSFORMATIONS`  | ✓                  |                   |
| `COPILOT_QUESTION` | ✓                  | ✓                 |
| `QUESTION`         | ✓                  | ✓                 |
| `PIPELINES`        |                    | ✓                 |
