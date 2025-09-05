---
title: Schedule trigger types
id: triggers
slug: /analysts/triggers
description: Learn about different trigger types for schedules
tags:
  - schedule
  - trigger
---

Prophecy's built-in scheduler allows you to orchestrate your pipelines with user-defined automation logic. Schedules support two trigger types:

- [Time-based](#time-based-trigger): The scheduled pipeline runs at defined intervals.
- [File arrival or change](#file-arrival-or-change-trigger): The scheduled pipeline runs only if a file arrives or changes.

## Time-based trigger

### Frequency

Time-based trigger configurations vary according to the frequency of the trigger. The following sections describe the parameters needed for each frequency.

:::info
When using time-based triggers, the default timezone is the timezone from where you access Prophecy.
:::

#### Minute

| Parameter    | Description                                                                          | Default  |
| ------------ | ------------------------------------------------------------------------------------ | -------- |
| Repeat every | The interval in minutes between pipeline runs.<br/>Example: Repeat every 10 minutes. | 1 minute |

#### Hourly

| Parameter             | Description                                                                                                                | Default                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Repeat every ... from | The interval in hours between pipeline runs, starting at a specific time.<br/>Example: Repeat every 2 hours from 12:00 AM. | Every 1 hour<br/>starting at 12:00 AM |

#### Daily

| Parameter | Description                                                                | Default |
| --------- | -------------------------------------------------------------------------- | ------- |
| Repeat at | The time of day when the schedule will run.<br/>Example: Repeat at 9:00 AM | 2:00 AM |

#### Weekly

| Parameter | Description                                                                                         | Default  |
| --------- | --------------------------------------------------------------------------------------------------- | -------- |
| Repeat on | The day(s) of the week that the pipeline will run.<br/>Example: Repeat on Monday, Wednesday, Friday | Sunday   |
| Repeat at | The time of the day that the pipeline will run.<br/>Example: Repeat at 9:00 AM                      | 12:00 AM |

#### Monthly

| Parameter | Description                                                                                     | Default  |
| --------- | ----------------------------------------------------------------------------------------------- | -------- |
| Repeat on | The day of the month that the pipeline will run.<br/>Example: Repeat on the first of the month. | 1        |
| Repeat at | The time of the day that the pipeline will run.<br/>Example: Repeat at 9:00 AM                  | 12:00 AM |

#### Yearly

| Parameter     | Description                                                                                         | Default  |
| ------------- | --------------------------------------------------------------------------------------------------- | -------- |
| Repeat every  | The day and month that the pipeline will run each year.<br/>Example: Repeat every March 15.         | None     |
| Repeat on the | The specific occurrence of a day in a given month.<br/>Example: Repeat on the third Monday of June. | None     |
| Repeat at     | The time of the day that the pipeline will run.<br/>Example: Repeat at 9:00 AM                      | 12:00 AM |

## File arrival or change trigger

Use this trigger type to run a scheduled pipeline only when a new file is added or an existing file changes in a specified directory.

:::info
Prophecy supports file change detection (data change sensors) for [S3](/core/prophecy-fabrics/connections/s3) and [SFTP](/core/prophecy-fabrics/connections/sftp) connections only.
:::

### Trigger configuration

Each trigger configuration defines where and how Prophecy detects file changes. Provide the following:

| Parameter          | Description                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration name | A label to help you identify this trigger configuration.                                                                                                                                                                                                                                                                                                                           |
| Connection         | The **S3** or **SFTP** connection where the system should watch for file changes.                                                                                                                                                                                                                                                                                                  |
| File path          | The full path to the directory being monitored. The pipeline runs when a file is added or modified in this location. You can use either a fixed directory path, such as `/user/documents/`, or a regular expression to match specific file patterns. <br/><br/>Example: `/user/*/*.{csv,jar}` finds all subdirectories under` /user` and watches files ending in `.csv` or `.jar`. |

#### Add multiple trigger configurations

You can define multiple trigger configurations to monitor more than one location for file updates. Use AND or OR logic to control when the pipeline runs.

- **AND**: All conditions must be met before the pipeline runs.
- **OR**: Any one condition must be met to trigger the pipeline.

For example, you may want to add the following trigger configurations:

| Configuration name | Connection | File path                     |
| ------------------ | ---------- | ----------------------------- |
| Transactions       | S3         | `/finance/transactions/*.csv` |
| Exchange Rates     | SFTP       | `/finance/fx_rates/`          |

- With AND logic, the pipeline runs when a change is detected for **both** Transactions and Exchange Rates.
- With OR logic, the pipeline runs when a change is detected in **either** Transactions or Exchange Rates.

### Advanced settings

These advanced settings determine how the poll-based data sensors work. For additional details, jump to the following sections.

| Parameter                 | Description                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| Poke Interval (seconds)   | How often to check the condition. Defaults to 60 seconds.                                   |
| Sensor Timeout (seconds)  | Maximum duration for the sensor to keep checking. If not set, the sensor runs indefinitely. |
| Exponential Backoff Retry | Enables increasing delay between polling attempts to reduce system load.                    |
| Poll Mode                 | Determines whether to use **Poke** or **Reschedule** mode.                                  |

#### Poke Interval

The Poke Interval specifies how frequently the sensor checks for file updates, such as new files appearing or existing files changing. The default interval is 60 seconds.

#### Sensor Timeout

The Sensor Timeout value determines the maximum amount of time the sensor continues to check for file updates. By default, the sensor runs indefinitely. Set a timeout only if there's a point at which you know the check is no longer useful or relevant.

#### Exponential Backoff Retry

Sometimes, the sensor does not detect any file updates when it checks the directory. When Exponential Backoff Retry is enabled, the wait time between checks increases every time the sensor must retry the operation after failure (no file updated).

When active, the delay between each polling attempt increases exponentially—e.g., 60 seconds, 2 minutes, 4 minutes, 8 minutes—while adding randomness (jitter) to avoid system-wide contention. This option is enabled by default to reduce system load.

#### Poll Mode

Choose between the following modes:

- **Poke**: Keeps resources active between checks. Best for short intervals when quick response times are needed.
- **Reschedule**: Frees resources and reschedules itself after each interval. Recommended for long intervals to reduce resource usage.
