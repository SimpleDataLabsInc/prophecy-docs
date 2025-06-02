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

:::note
Optional interactive fields left blank by the user will use the default value defined in pipeline parameter settings if a default value is not defined in the component.
:::

### Text Input

The user can enter any text into the field. Only string-type parameters are supported.

| Setting             | Description                                                                                  | Required |
| ------------------- | -------------------------------------------------------------------------------------------- | -------- |
| Configuration field | Name of the pipeline parameter to reference.                                                 | True     |
| Default value       | Value that appears in the field by default. Users can update this value in their app config. | False    |
| Label               | Descriptive label for the text input field.                                                  | True     |
| Help text           | Additional information displayed below the input field to guide the user.                    | False    |
| Tooltip             | Tooltip providing extra context when the user hovers over the field.                         | False    |
| Is required         | Whether to make the field mandatory.                                                         | False    |

### Number Input

The user can enter any number into the field. The number type (e.g., `int`, `double`, `long`) is determined by the pipeline parameter.

| Setting             | Description                                                                                  | Required |
| ------------------- | -------------------------------------------------------------------------------------------- | -------- |
| Configuration field | Name of the pipeline parameter to reference.                                                 | True     |
| Default value       | Value that appears in the field by default. Users can update this value in their app config. | False    |
| Label               | Descriptive label for the number input field.                                                | True     |
| Format              | Defines how the number is displayed. Options include `Standard`, `Percent`, and `Currency`.  | False    |
| Help text           | Additional information displayed below the input field to guide the user.                    | False    |
| Tooltip             | Tooltip providing extra context when the user hovers over the field.                         | False    |
| Is required         | Whether to make the field mandatory.                                                         | False    |

### Text Area

The user can enter any text in the field. Only string-type parameters are supported.

| Setting             | Description                                                                                  | Required |
| ------------------- | -------------------------------------------------------------------------------------------- | -------- |
| Configuration field | Name of the pipeline parameter to reference.                                                 | True     |
| Default value       | Value that appears in the field by default. Users can update this value in their app config. | False    |
| Label               | Descriptive label for the text input field.                                                  | True     |
| Help text           | Additional information displayed below the input field to guide the user.                    | False    |
| Tooltip             | Tooltip providing extra context when the user hovers over the field.                         | False    |
| Is required         | Whether to make the field mandatory.                                                         | False    |

:::note
The Text Area component has the same settings as the Text Input component. However, it offers a larger text input area for the user to write in.
:::

### Dropdown

The user can select a value from a predefined list. Array-type parameters are not supported.

| Setting                          | Description                                                                                                                        | Required |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Configuration field              | Name of the pipeline parameter to reference.                                                                                       | True     |
| Default value                    | Value selected in the dropdown by default. Users can select a different option in their app config.                                | False    |
| Label                            | Descriptive label for the dropdown field.                                                                                          | True     |
| Help text                        | Additional guidance displayed below the dropdown.                                                                                  | False    |
| Tooltip                          | Tooltip providing extra context when the user hovers over the field.                                                               | False    |
| Options                          | Where you define each dropdown option. Each option should have a value to pass to the pipeline and a label. Tooltips are optional. | True     |
| Is required                      | Whether to make the field mandatory.                                                                                               | False    |
| Allow selecting multiple options | Whether the user can select multiple options from the dropdown list.                                                               | False    |

### Checkbox

The user can select or unselect a checkbox. Only boolean-type configurations are supported.

| Setting             | Description                                                                                                                     | Required |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Configuration field | Name of the pipeline parameter to reference.                                                                                    | True     |
| Default value       | Whether the checkbox is selected by default (`True` or `False`). Users can select or unselect the checkbox in their app config. | False    |
| Label               | Descriptive label for the checkbox itself.                                                                                      | True     |
| Caption             | Additional guidance displayed below the checkbox.                                                                               | False    |
| Tooltip             | Tooltip providing extra context when the user hovers over the field.                                                            | False    |
| Is required         | Whether to make the field mandatory.                                                                                            | False    |

### Checkbox Group

The user can select or unselect a list of checkboxes. Only array-type configurations are supported.

| Setting             | Description                                                                                                                                                                              | Required |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Configuration field | Name of the pipeline parameter to reference.                                                                                                                                             | True     |
| Default value       | Whether the checkboxes are selected by default. Provide this using a comma-separated list of `True` and `False` values. Users can select or unselect the checkboxes in their app config. | False    |
| Options             | Where you define each checkbox option.                                                                                                                                                   | True     |
| Is required         | Whether to make the field mandatory.                                                                                                                                                     | False    |

For each option that you add to the checkbox group, you can define the:

| Setting | Description                                                          | Required |
| ------- | -------------------------------------------------------------------- | -------- |
| Value   | Value to pass to the pipeline.                                       | True     |
| Label   | Descriptive label for the checkbox itself.                           | True     |
| Caption | Additional guidance displayed below the checkbox.                    | False    |
| Tooltip | Tooltip providing extra context when the user hovers over the field. | False    |

### Radio Group

The user can select a single option from a predefined list. Array-type configurations are not supported.

| Setting             | Description                                                                        | Required |
| ------------------- | ---------------------------------------------------------------------------------- | -------- |
| Configuration field | Name of the pipeline parameter to reference.                                       | True     |
| Default value       | Radio button selected by default. Users can update this value in their app config. | False    |
| Options             | List of available choices. At least one option is required.                        | True     |
| Is required         | Whether to make the field mandatory.                                               | False    |

For each option that you add to the checkbox group, you can define the:

| Option Setting | Description                                                          | Required |
| -------------- | -------------------------------------------------------------------- | -------- |
| Value          | Value that to pass to the pipeline.                                  | True     |
| Label          | Descriptive label for the radio button itself.                       | True     |
| Caption        | Additional guidance displayed below the radio button.                | False    |
| Tooltip        | Tooltip providing extra context when the user hovers over the field. | False    |

### Toggle

The user can enable or disable a toggle. Only boolean-type configurations are supported.

| Setting             | Description                                                                                                     | Required |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | -------- |
| Configuration field | Name of the pipeline parameter to reference.                                                                    | True     |
| Default value       | Whether to toggle is on or off by default (`True` or `False`). Users can update this value in their app config. | False    |
| Label               | Descriptive label for the toggle itself.                                                                        | True     |
| Caption             | Additional guidance displayed below the toggle.                                                                 | False    |
| Tooltip             | Tooltip providing extra context when the user hovers over the field.                                            | False    |
| Is required         | Whether to make the field mandatory.                                                                            | False    |

### Date

The user can enter a date from a date picker. Only date-type configurations are supported.

| Setting             | Description                                                                                 | Required |
| ------------------- | ------------------------------------------------------------------------------------------- | -------- |
| Configuration field | Name of the pipeline parameter to reference.                                                | True     |
| Default value       | Date that appears in the field by default. Users can update this value in their app config. | False    |
| Format              | Defines how the date is displayed. The default format is `MMMM d, yyyy`.                    | True     |
| First day           | Specifies the first day of the week in the date picker. The default is Sunday.              | True     |
| Label               | Descriptive label for the date input field.                                                 | True     |
| Help text           | Additional guidance displayed below the date picker.                                        | False    |
| Tooltip             | Tooltip providing extra context when the user hovers over the field.                        | False    |
| Is required         | Whether to make the field mandatory.                                                        | False    |

## Data Integration

Data integration components help users interact with the data that flows into and out of the app.

### File Upload

Let the user upload their own file to replace the data of a Source gem in the pipeline. When a user uploads a file to the Prophecy App, they will have to configure the file and write it to the primary SQL warehouse of the attached fabric. This is the same mechanism that the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature uses.

| Setting          | Description                                                                                                                                         | Required |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Source component | Choose the source table that users will replace with an uploaded file.                                                                              | True     |
| File types       | Restrict the type of files that users can upload. If you do not select any checkboxes, the user can upload any type of file that Prophecy supports. | False    |
| Tooltip          | Add a tooltip to your component to provide help or context.                                                                                         | False    |
| Is required      | Select the checkbox to make the field mandatory.                                                                                                    | False    |

### Data Preview

Let the user view sample data of a table in the pipeline.

| Setting    | Description                                                                                       | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | -------- |
| Data table | [Table](docs/analysts/development/gems/source-target/table/table.md) that will appear in the app. | True     |
| Label      | Label to describe the data preview.                                                               | True     |

### Charts

Display a visualization of a table from the pipeline. Prophecy provides multiple chart types that you can integrate in your app.

| Setting             | Description                                                                                                            | Required |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| Data table          | [Table](docs/analysts/development/gems/source-target/table/table.md) that contains data to visualize.                  | True     |
| Label               | Label to describe the chart.                                                                                           | True     |
| Chart type          | Type of chart you wish to display (for example, bar chart or line chart).                                              | True     |
| Chart configuration | Configure how the chart appears. To view information about each chart configuration, visit [Charts](/analysts/charts). | True     |

## Content

Content components let you embed static text and images into your Prophecy Apps.

### Text

Add context to your Prophecy App. Use the Inspect tab to add formatting to text, such as heading type, bold, italics, links, and more.

| Setting | Description                     | Required |
| ------- | ------------------------------- | -------- |
| Content | Text to be displayed in the app | True     |

### Image

Embed an image into your Prophecy App.

| Setting      | Description                              | Required |
| ------------ | ---------------------------------------- | -------- |
| Image source | How Prophecy retrieves the image.        | True     |
| Source URL   | The URL of the image.                    | True     |
| Alt text     | The option to add alt text to the image. | False    |
