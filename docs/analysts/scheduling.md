---
title: Scheduling
id: scheduling
description: Schedule pipeline runs
tags: []
---

Prophecy lets you schedule and automate your data pipeline runs. Once you have developed a pipeline, you can run it at specific frequencies using Prophecy's native scheduler. Schedules define when the pipeline will run and whether to send alerts about the pipeline run.

## Schedule pipeline

If you want to schedule pipeline runs, expand the options menu in the header and click **Schedule**. A schedule requires the following parameters:

| Parameter              | Description                                                                       |
| ---------------------- | --------------------------------------------------------------------------------- |
| Frequency              | How often the pipeline will run                                                   |
| Repeat at              | The time that the pipeline will run                                               |
| Timezone               | The timezone of **Repeat at** time                                                |
| Alerts on the full job | Enable to send an email on the start, success, and/or failure of the pipeline run |

Once the schedule is created, you'll be able to view the frequency at the top right corner of the pipeline canvas.

## Enable a schedule

Your schedule will not be enabled until you [publish](docs/analysts/development/version-control/version-control.md) your project.
