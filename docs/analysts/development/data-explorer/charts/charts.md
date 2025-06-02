---
title: Charts
id: charts
slug: /analysts/charts
description: Charts you can create with your interim data samples
tags:
  - charts
---

Visualize interim data samples in your pipeline with charts. To view your data in a chart, open a data sample and switch to the **Visualization** tab of the [Data Explorer](/analysts/data-explorer).

![VisualizationView](./img/visualization-view.png)

## Chart types

You can create the following charts in the **Visualization** tab

| Chart Type                                 | Description                                                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| [Bar](/analysts/bar-chart)                 | Group your data by categories with rectangular bars with heights or lengths proportional to the values that they represent. |
| [Line](/analysts/line-chart)               | Visually represent your data over time or along a continuous range.                                                         |
| [Area](/analysts/area-chart)               | Line chart with filled areas under the lines to represent quantitative data over time or categories.                        |
| [Pie](/analysts/pie-chart)                 | Circular graph that divides into slices, where the arc length of each slice is proportional to the quantity it represents.  |
| [Candlestick](/analysts/candlestick-chart) | Financial chart that displays how prices change for an asset over time, such as stocks and currency.                        |
| [Map](/analysts/map-chart)                 | Uses a map to show how data is distributed across a geographic region.                                                      |
| [Scatter](/analysts/scatter-chart)         | Uses dots to show the relationship between two variables.                                                                   |

## Filter fields

You can apply and remove filters to the visualized data. Filtering lets you focus on a specific portion of the dataset to gain further understanding without changing and rerunning your pipeline.

![FilterChart](./img/filter-chart.png)

### Apply a filter

For each filter you want to apply to your data:

1. Click **Filter** at the top of the chart.

1. Click **Add Filter**.

1. Configure your filter.

   Select the **Condition**, **Column**, and **Value** to filter for.

1. Click **Apply**.

### Remove a filter

For each filter you want to remove from your data:

1. Click **Filter** at the top of the chart.

1. Find the filter you want to remove.

1. Click the trash can icon at the top right corner.

## Add to business app

If you create a chart in the Data Explorer that would be useful in a Prophecy App, you can add it to an app template. Then, end users can view your chart to visualize the data generated when they run the app.

![AddChartToApp](./img/add-chart-to-app.png)

To add your chart to a business app:

1. Click **Add to App** at the top of the chart.

1. Select the business app you want to add it to.

   After you select the app, Prophecy opens your app in a new window.

   Enter a **Configuration Name**, then click **Save**. This adds the chart to your business app.

To see the chart in your business app, click **Run** at the top right corner.

![ViewChartInApp](./img/view-chart-in-app.png)

To learn more about business apps, see [Apps](/analysts/business-applications).
