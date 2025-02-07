---
title: Pipeline settings
id: pipeline-settings
description: Control how your pipeline runs
tags:
  - spark
  - pipeline
  - settings
---

Review the various settings available for each pipeline, including Spark settings, code customization, development preferences, job sampling, run settings, and initialization code.

![Pipeline settings](img/pipeline-settings.png)

## Spark

```mdx-code-block
<table className="fixed-table">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Spark version</td>
      <td>The Spark version associated with the pipeline.</td>
    </tr>
    <tr>
      <td>Mode</td>
      <td>The pipeline's mode (either batch or streaming).</td>
    </tr>
    <tr>
      <td>Spark configuration</td>
      <td>
        Name-value pairs will be set inside the Spark runtime configurations as <code>spark.conf.set(name, value)</code>.
      </td>
    </tr>
    <tr>
      <td>Hadoop configuration</td>
      <td>
        Name-value pairs will be set inside the Hadoop configuration as <code>spark.sparkContext.hadoopConfiguration.set(name, value)</code>.
      </td>
    </tr>
  </tbody>
</table>
```

## Code

```mdx-code-block
<table className="fixed-table">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Package Name</td>
      <td>
        The name of the package if the project is published to the <a href="docs/extensibility/package-hub/package-hub.md">Package Hub</a>.
      </td>
    </tr>
    <tr>
      <td>Config Package Name</td>
      <td>
        A unique name for the pipeline's configuration package.<br />Only pipelines made before Prophecy 3.4.5.0 may need to have a custom config package name.
      </td>
    </tr>
    <tr>
      <td>Custom Application Name</td>
      <td>The name of the Spark job that appears in the Spark interface.</td>
    </tr>
    <tr>
      <td>Allow Configuration Updates (Scala only)</td>
      <td>
        When enabled, you can override configuration values using a script.<br />For example, if you add a Script gem to the
        pipeline, you can write something like <code>Config.current_date_var = "2024"</code> to set the value of that variable.
      </td>
    </tr>
    <tr>
      <td>Enable pipeline monitoring</td>
      <td>The option to turn pipeline monitoring on or off.</td>
    </tr>
    <tr>
      <td>Enable jinja based configuration</td>
      <td>
        The option to turn <a href="docs/Spark/configuration.md#syntax">jinja-based</a> configuration on or off.
      </td>
    </tr>
  </tbody>
</table>
```

## Development

```mdx-code-block
<table className="fixed-table">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Visual Language</td>
      <td>
        The programming language (SQL, Scala, or Python) used for expressions inside of gems. If you change the visual
        language while developing your pipeline, Prophecy will automatically convert expressions into the chosen language.
        The <a href="docs/Spark/expression-builder.md">Expression Builder</a> will adapt to the language as well.
      </td>
    </tr>
  </tbody>
</table>
```

## Job

In the Job section, you can choose how data is sampled during job runs. If you enable job data sampling, you must choose a sampling mode.

```mdx-code-block
<table className="fixed-table">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Job Data Sampling</td>
      <td>A toggle to enable or disable data sampling during job runs.</td>
    </tr>
    <tr>
      <td>Job Data Sampling Mode</td>
      <td>The sampling mode used during job runs.</td>
    </tr>
  </tbody>
</table>
```

## Run Settings

```mdx-code-block
<table className="fixed-table">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Limit Input Records</td>
      <td>When enabled, this limits the number of rows being operated on, makes development time faster, and reduces computation cost. <br /><br /> Depending on how your pipeline is constructed, you might run into some issues when limiting records. If the number of records is too small, you might accidentally exclude records that, for example, match a join condition. This would result in an empty output.</td>
    </tr>
    <tr>
      <td>Data Sampling</td>
      <td>
        Data sampling is enabled by default so you can view interim data samples while developing your pipeline. There are a few data sampling modes to choose from. <br /><br />
        <ul>
          <li>All: Every interim is generated.</li>
          <li>Sources: Interims only generated after Source gems.</li>
          <li>Targets: Interims only generated before Target gems.</li>
          <li>IO: Interims only generated after Source gems or before Target gems (not between intermediate gems).</li>
          <li>Vanilla: Databricks-specific setting.</li>
          <li>Selective: Interims load a large data sample (up to 10,000 rows).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Configuration</td>
      <td>This setting determines which <a href="docs/Spark/configuration.md">configuration</a> will be used during a pipeline run.</td>
    </tr>
  </tbody>
</table>
```

## Initialization Code

```mdx-code-block
<table className="fixed-table">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>UDF initialization code</td>
      <td>
        The code that is run before initializing any UDF method. In this field, you can define variables, add common classes, include common imports, and more.
      </td>
    </tr>
  </tbody>
</table>
```
