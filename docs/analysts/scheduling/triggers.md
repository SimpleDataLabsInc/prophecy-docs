---
title: Trigger types
id: triggers
slug: /analysts/triggers
description: Learn about different trigger types for schedules
tags:
  - schedule
  - trigger
---

Prophecy's built in scheduler allows you to orchestrate your pipelines with user-defined automation logic. Schedules support two trigger types:

- **Time-based**: The scheduled pipeline runs at defined intervals.
- **File arrival or change**: The scheduled pipeline runs only if a file arrives or changes.

## Time-based trigger

### Frequency

Time-based trigger configuration vary according to the frequency of the trigger. The following sections describe the parameters needed for each frequency.

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
Prophecy supports file change detection (data change sensors) for [S3](/administration/fabrics/prophecy-fabrics/connections/s3) and [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp) connections only.
:::

### Trigger configuration

Each trigger configuration defines where and how Prophecy detects file changes. Provide the following:

| Parameter          | Description                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| Configuration name | A label to help you identify this trigger configuration.                                                     |
| Connection         | The **S3** or **SFTP** connection where the system should watch for file changes.                            |
| File path          | The full path to the **directory** being monitored. The pipeline runs when a file is added or modified here. |

You can define multiple trigger configurations. Use AND or OR logic to control when the pipeline runs.

- **AND**: All conditions must be met before the pipeline runs.
- **OR**: Any one condition must be met to trigger the pipeline.

### Advanced settings

These advanced settings determine how the poll-based data sensors work. For additional details, jump to the following sections.

| Parameter                 | Description                                                                                                                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Poke Interval             | How often to check the condition in seconds. Defaults to 60 seconds.                                                                                                                                                          |
| Sensor Timeout (seconds)  | Maximum time in seconds for each sensor run. If not set, the sensor runs indefinitely.                                                                                                                                        |
| Exponential Backoff Retry | If enabled, increases the wait time between polling exponentially. This helps reduce system load when the condition isn’t immediately met.                                                                                    |
| Poll Mode                 | <ul class="table-list"><li>**Poke**: Keeps resources active between checks. Best for short intervals.</li><li> **Reschedule**: Frees resources and reschedules itself after each interval. Best for long intervals.</li></ul> |

| Parameter                 | Description                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| Poke Interval (seconds)   | How often to check the condition. Defaults to 60 seconds.                                          |
| Sensor Timeout (seconds)  | Maximum duration for the sensor to keep checking. If not set, the sensor runs indefinitely.        |
| Exponential Backoff Retry | Enables increasing delay with jitter between polling attempts to reduce system load.               |
| Poll Mode                 | Determines whether to user **Poke** or **Reschedule** mode. Learn more in [Poll mode](#poll-mode). |

#### Poke Interval

Defines how often Prophecy checks whether a new file has appeared or a file has changed. Default is 60 seconds. If the condition is not met (new file or a file changes), the sensor waits for the defined interval before checking again.

#### Sensor Timeout

Specifies how long a sensor instance keeps running and monitoring for file changes. The sensor runs continuously, checking at each poke interval. The sensor will only stop checking if a timeout is set, otherwise, it runs indefinitely.

#### Exponential Backoff Retry

If enabled, the sensor increases the delay between checks using an exponential backoff with jitter.

#### Poll Mode
