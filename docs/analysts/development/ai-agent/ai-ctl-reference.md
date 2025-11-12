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

Markers use this structure:

```
[MARKER_TYPE]()
```

`MARKER_TYPE` tells the agent what type of special component to create. For example, `[TRANSFORMATIONS]()` creates a formatted section listing all transformation steps in your pipeline. Each marker generates a specific type of component—like interactive forms, visual diagrams, or structured data tables—that standard Markdown cannot create on its own.

### Marker arguments

Some markers accept additional information to customize what appears in your documentation. You provide this information in parentheses after the marker name:

**Text argument (for questions):**

```
[COPILOT_QUESTION]('Specify the number of transformation steps in the pipeline.')
```

**Named argument (for file references):**

```
[PIPELINES](template=foobar.md)
```

:::note
Currently, different markers use different syntax for their arguments. `COPILOT_QUESTION` uses text in quotes, while `PIPELINES` uses a named parameter like `template=filename.md`. This will be standardized in a future release.
:::

## Available markers

### OVERVIEW

Creates a summary section and an embedded visual diagram of your pipeline or project.

**Usage:**

```
[OVERVIEW]()
```

**Where to use:** Works in both pipeline and project documentation templates.

In pipeline documentation, this creates a summary and shows the pipeline canvas diagram. In project documentation, this creates an overview of the entire project and its pipelines.

### SOURCES

Creates a formatted section that lists all data sources used in the pipeline, including descriptions and column information.

**Usage:**

```
[SOURCES]()
```

**Where to use:** Pipeline documentation templates only.

### TARGETS

Creates a formatted section that lists all output tables or files created by the pipeline, including descriptions and column information.

**Usage:**

```
[TARGETS]()
```

**Where to use:** Pipeline documentation templates only.

### TRANSFORMATIONS

Creates a formatted section with a summary and detailed explanation of each data transformation step in the pipeline.

**Usage:**

```
[TRANSFORMATIONS]()
```

**Where to use:** Pipeline documentation templates only.

### COPILOT_QUESTION

Creates an interactive question form in your documentation. The AI agent tries to answer the question automatically based on the pipeline or project. If the agent can't answer, the question appears as a form field for users to fill in after the documentation is generated.

**Usage:**

```
[COPILOT_QUESTION]('Your question here')
```

**Arguments:**

- Text in quotes: The question you want to include in the documentation.

**Where to use:** Works in both pipeline and project documentation templates.

**Example:**

```
[COPILOT_QUESTION]('Specify the number of transformation steps in the pipeline.')
```

### QUESTION

Creates an interactive question form in your documentation that users must answer manually. Unlike `COPILOT_QUESTION`, the agent does not try to answer this question—it always appears as a form field for users to complete.

**Usage:**

```
[QUESTION]('Your question here')
```

**Arguments:**

- Text in quotes: The question you want to include in the documentation.

**Where to use:** Works in both pipeline and project documentation templates.

### PIPELINES

Repeats a sub-template for each pipeline in your project. The agent processes the sub-template separately for each pipeline, filling in the details specific to that pipeline.

**Usage:**

```
[PIPELINES](template=subtemplate.md)
```

**Arguments:**

- `template=filename.md`: The name of the template file to use for each pipeline.

**Where to use:** Project documentation templates only.

The sub-template can include any markers that work in pipeline documentation templates, such as `SOURCES`, `TARGETS`, `TRANSFORMATIONS`, and `OVERVIEW`.

**Example:**

```
[PIPELINES](template=pipeline-detail.md)
```

## Marker context summary

| Marker             | Pipeline templates | Project templates |
| ------------------ | ------------------ | ----------------- |
| `OVERVIEW`         | ✓                  | ✓                 |
| `SOURCES`          | ✓                  | ✗                 |
| `TARGETS`          | ✓                  | ✗                 |
| `TRANSFORMATIONS`  | ✓                  | ✗                 |
| `COPILOT_QUESTION` | ✓                  | ✓                 |
| `QUESTION`         | ✓                  | ✓                 |
| `PIPELINES`        | ✗                  | ✓                 |
