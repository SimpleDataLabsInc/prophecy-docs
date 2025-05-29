---
title: Charts
id: charts
slug: /charts
description: Charts
tags:
  - charts
---

### Bar Chart

| Parameter       | Description                                 |
| --------------- | ------------------------------------------- |
| X-axis column   | Column used for the X-axis categories.      |
| Y-axis column   | Column used for the Y-axis values.          |
| Min. Value      | Minimum value displayed on the Y-axis.      |
| Max. Value      | Maximum value displayed on the Y-axis.      |
| Tick Interval   | Interval between tick marks on the Y-axis.  |
| Display Legends | Whether to display the legend on the chart. |
| Enable Tooltips | Whether to display tooltips on hover.       |
| Show Grid Lines | Whether to display grid lines on the chart. |

### Line Chart

| Parameter       | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| X-axis column   | Column used for the X-axis values, typically time or sequence. |
| Y-axis column   | Column with aggregated values used for the Y-axis.             |
| Min. Value      | Minimum value displayed on the Y-axis.                         |
| Max. Value      | Maximum value displayed on the Y-axis.                         |
| Tick Interval   | Interval between tick marks on the Y-axis.                     |
| Display Legends | Whether to display the legend on the chart.                    |
| Enable Tooltips | Whether to display tooltips on hover.                          |
| Show Grid Lines | Whether to display grid lines on the chart.                    |

### Area Chart

| Parameter            | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| X-axis column        | Column used for the X-axis values, typically time or sequence. |
| Y-axis column        | Column with aggregated values used for the Y-axis.             |
| Min. Value           | Minimum value displayed on the Y-axis.                         |
| Max. Value           | Maximum value displayed on the Y-axis.                         |
| Tick Interval        | Interval between tick marks on the Y-axis.                     |
| Enable Gradient Fill | Whether to apply a gradient fill under the area curve.         |
| Stack Data Series    | Whether to stack multiple data series on top of one another.   |
| Display Legends      | Whether to display the legend on the chart.                    |
| Enable Tooltips      | Whether to display tooltips on hover.                          |
| Show Grid Lines      | Whether to display grid lines on the chart.                    |

### Pie Chart

| Parameter           | Description                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Category column     | Column used for pie chart segments.                                                                                         |
| Y-axis column       | Column containing values to aggregate into segment sizes.                                                                   |
| Chart angle         | Starting angle in degrees for rendering the chart.                                                                          |
| Chart style         | Style of chart, either pie or donut.                                                                                        |
| Radius %            | Percentage of the chart canvas used for the pie's radius (the overall size of the pie chart).                               |
| Horizontal center % | Percentage from the left edge of the chart canvas for positioning the pie's center (the horizontal alignment of the chart). |
| Vertical center %   | Percentage from the top edge of the chart canvas for positioning the pie's center (the vertical alignment of the chart).    |
| Display Legends     | Whether to display the legend on the chart.                                                                                 |
| Enable Tooltips     | Whether to display tooltips on hover.                                                                                       |

### Candle Chart

| Parameter                       | Description                                                       |
| ------------------------------- | ----------------------------------------------------------------- |
| X-axis column                   | Column used for the X-axis values, typically a timestamp or date. |
| Choose column for open price    | Column containing the opening price.                              |
| Choose column for close price   | Column containing the closing price.                              |
| Choose column for lowest price  | Column containing the lowest price.                               |
| Choose column for highest price | Column containing the highest price.                              |
| Display Legends                 | Whether to display the legend on the chart.                       |
| Enable Tooltips                 | Whether to display tooltips on hover.                             |

### Scatter Chart

| Parameter       | Description                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| X-axis config   | Configuration for the X-axis, including min value, max value, and tick interval. |
| Y-axis config   | Configuration for the Y-axis, including min value, max value, and tick interval. |
| Chart style     | Style of chart, either scatter or bubble.                                        |
| Display Legends | Whether to display the legend on the chart.                                      |
| Enable Tooltips | Whether to display tooltips on hover.                                            |

### Map Chart

| Parameter           | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| Map Type            | Style of map, either marker or displacement.                                         |
| Column              | Column that contains geo points in WKT format.                                       |
| Marker Label Column | Column that contains the name of each geo point (for example, a `city_name` column). |
| Tooltip Columns     | Column that contains information that will show up in the geo point tooltip.         |
| Fit Bounds          | Whether to fit the map to the bounds in the points.                                  |
