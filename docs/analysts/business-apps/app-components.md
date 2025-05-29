---
title: App components
id: app-components
slug: /analysts/business-application-components
description: Learn about the different components to configure in an app
tags: []
---

**Components** are the building blocks of your application. You can add, configure, and preview components in the App Builder. There are three types of components that you can add.

- **Interactive:** Lets users add their own values to the pipeline configuration.
- **Data Integration:** Allows users to upload data or view data outputs.
- **Content:** Embed static text and images into your Prophecy Apps.

The **Layers** tab of the App Builder defines the structure of your components. You can drag and drop components within containers to rearrange them in the app. The **Inspect** tab lets you configure component settings. This determines how the components will appear and behave in your application. All component settings are described below.

## Interactive

Review the interactive components that you can add to your Prophecy App. Users will provide their own input to these fields, and you can add default values for them.

### Text Input

The user can enter any text into the field. Only string-type parameters are supported.

| Setting             | Description                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                              |
| Default value       | The value used if the user leaves the field blank. If not specified here, the pipeline will use the default value defined in the pipeline parameter settings. |
| Label               | A descriptive label for the text input field.                                                                                                                 |
| Help text           | Additional information displayed below the input field to guide the user.                                                                                     |
| Tooltip             | A tooltip providing extra context when the user hovers over the field.                                                                                        |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                             |

### Number Input

The user can enter any number into the field. The number type (e.g., `int`, `double`, `long`) is determined by the pipeline parameter.

| Setting             | Description                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                              |
| Default value       | The value used if the user leaves the field blank. If not specified here, the pipeline will use the default value defined in the pipeline parameter settings. |
| Label               | A descriptive label for the number input field.                                                                                                               |
| Format              | Defines how the number is displayed. Options include `Standard`, `Percent`, and `Currency`.                                                                   |
| Help text           | Additional information displayed below the input field to guide the user.                                                                                     |
| Tooltip             | A tooltip providing extra context when the user hovers over the field.                                                                                        |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                             |

### Text Area

The user can enter any text in the field. Only string-type parameters are supported.

| Setting             | Description                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                              |
| Default value       | The value used if the user leaves the field blank. If not specified here, the pipeline will use the default value defined in the pipeline parameter settings. |
| Label               | A descriptive label for the text input field.                                                                                                                 |
| Help text           | Additional information displayed below the input field to guide the user.                                                                                     |
| Tooltip             | A tooltip providing extra context when the user hovers over the field.                                                                                        |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                             |

:::note
The Text Area component has the same settings as the Text Input component. However, it offers a larger text input area for the user to write in.
:::

### Dropdown

The user can select a value from a predefined list. Array-type parameters are not supported.

| Setting             | Description                                                                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                                        |
| Default value       | The value used if the user leaves the field blank. If not specified here, the pipeline will use the default value defined in the pipeline parameter settings.           |
| Label               | A descriptive label for the dropdown field.                                                                                                                             |
| Help text           | Additional guidance displayed below the dropdown.                                                                                                                       |
| Tooltip             | A tooltip providing extra context when the user hovers over the field.                                                                                                  |
| Options             | Where you define each dropdown option. Each option should have a value (what is passed to the pipeline) and a label. You can add a tooltip to each option if necessary. |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                                       |

### Checkbox

The user can select or unselect a checkbox. Only boolean-type configurations are supported.

| Setting             | Description                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                                                  |
| Default value       | The value used if the user leaves the field blank (`True` or `False`). If not specified here, the pipeline will use the default value defined in the pipeline parameter settings. |
| Label               | A descriptive label for the checkbox itself.                                                                                                                                      |
| Caption             | Additional guidance displayed below the checkbox.                                                                                                                                 |
| Tooltip             | A tooltip providing extra context when the user hovers over the field.                                                                                                            |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                                                 |

### Checkbox Group

The user can select or unselect a list of checkboxes. Only array-type configurations are supported.

| Setting             | Description                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                              |
| Default value       | The value used if the user leaves the field blank. If not specified here, the pipeline will use the default value defined in the pipeline parameter settings. |
| Options             | Where you define each checkbox option.                                                                                                                        |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                             |

For each option that you add to the checkbox group, you can define the:

- Value: The value that will be passed to the pipeline.
- Label: A descriptive label for the checkbox itself.
- Caption (Optional): Additional guidance displayed below the checkbox.
- Tooltip (Optional): A tooltip providing extra context when the user hovers over the field.

### Radio Group

The user can select a single option from a predefined list. Array-type configurations are not supported.

| Setting             | Description                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                                 |
| Default value       | The value used if the user does not select an option. If not specified here, the pipeline will use the default value defined in the pipeline parameter settings. |
| Options             | The list of available choices. At least one option is required.                                                                                                  |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                                |

For each option that you add to the checkbox group, you can define the:

- Value: The value that will be passed to the pipeline.
- Label: A descriptive label for the radio button itself.
- Caption (Optional): Additional guidance displayed below the radio button.
- Tooltip (Optional): A tooltip providing extra context when the user hovers over the field.

### Toggle

The user can enable or disable a toggle. Only boolean-type configurations are supported.

| Setting             | Description                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                                                  |
| Default value       | The value used if the user leaves the field blank (`True` or `False`). If not specified here, the pipeline will use the default value defined in the pipeline parameter settings. |
| Label               | A descriptive label for the toggle itself.                                                                                                                                        |
| Caption             | Additional guidance displayed below the toggle.                                                                                                                                   |
| Tooltip             | A tooltip providing extra context when the user hovers over the field.                                                                                                            |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                                                 |

### Date

The user can enter a date from a date picker. Only date-type configurations are supported.

| Setting             | Description                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Configuration field | The name of the pipeline parameter to reference.                                                                                                             |
| Default value       | The default date if the user does not select one. If not specified here, the pipeline will use the default value defined in the pipeline parameter settings. |
| Format              | Defines how the date is displayed. The default format is `MMMM d, yyyy`.                                                                                     |
| First day           | Specifies the first day of the week in the date picker. The default is Sunday.                                                                               |
| Label               | A descriptive label for the date input field.                                                                                                                |
| Help text           | Additional guidance displayed below the date picker.                                                                                                         |
| Tooltip             | A tooltip providing extra context when the user hovers over the field.                                                                                       |
| Is required         | A checkbox to select to make the field mandatory.                                                                                                            |

## Data Integration

Data integration components help users interact with the data that flows into and out of the app.

### File Upload

Let the user upload their own file to replace the data of a Source gem in the pipeline. When a user uploads a file to the Prophecy App, they will have to configure the file and write it to the primary SQL warehouse of the attached fabric. This is the same mechanism that the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature uses.

| Setting          | Description                                                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source component | Choose the source table that users will replace with an uploaded file.                                                                              |
| File types       | Restrict the type of files that users can upload. If you do not select any checkboxes, the user can upload any type of file that Prophecy supports. |
| Tooltip          | Add a tooltip to your component to provide help or context.                                                                                         |
| Is required      | Select the checkbox to make the field mandatory.                                                                                                    |

### Data Preview

Let the user view the output of their app configuration.

| Setting    | Description                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Data table | The target [table](docs/analysts/development/gems/source-target/table/table.md) that stores the pipeline output. |
| Label      | A label to describe the data preview.                                                                            |

### Charts

To view information about each chart configuration, visit [Charts](/charts)

## Content

Content components let you embed static text and images into your Prophecy Apps.

### Text

Add context to your Prophecy App. Use the Inspect tab to add formatting to text, such as heading type, bold, italics, links, and more.

| Setting | Description                     |
| ------- | ------------------------------- |
| Content | Text to be displayed in the app |

### Image

Embed an image into your Prophecy App.

| Setting      | Description                              |
| ------------ | ---------------------------------------- |
| Image source | How Prophecy retrieves the image.        |
| Source URL   | The URL of the image.                    |
| Alt text     | The option to add alt text to the image. |
