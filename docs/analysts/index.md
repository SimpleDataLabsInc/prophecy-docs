---
title: Overview
id: index
slug: /guides/index
description: Navigate through our Platform guides to learn about the project lifecycle
tags: []
---

import { Card, CardContainer } from "@site/src/components/card";

Prophecy supports multiple personas on the platform. Search our documentation based on your role and use case.

### Business Analysts

<CardContainer>
  <Card title="Pipeline Development" to="/analysts/pipeline-development" icon="/img/icons/pipeline.svg">
    Build pipelines using gems, functions, tests, visual expressions, and more.
  </Card>
  <Card title="Scheduling" to="/analysts/scheduling" icon="/img/icons/calendar.svg">
    Configure pipelines to run on an automated schedule.
  </Card>
  <Card title="Prophecy Apps" to="/analysts/business-applications" icon="/img/icons/publish-to-app.svg">
    Run data pipelines through intuitive, form-based interfaces.
  </Card>
</CardContainer>
<br />

### Data Engineering

:::edition Enterprise Only

These guides apply to users on the [Enterprise Edition](/getting-started/editions/) of Prophecy only.

:::

<CardContainer>
  <Card title="Fabric Setup" to="/administration/fabrics/prophecy-fabrics/" icon="/img/icons/environment.svg">
    Create Spark fabrics or data modeling fabrics to run pipelines and models.
  </Card>
  <Card title="Pipeline Development" to="/analysts/pipeline-development" icon="/img/icons/pipeline.svg">
    Build Spark pipelines using gems, UDFs, business rules, and more.
  </Card>
  <Card title="CI/CD" to="/engineers/ci-cd" icon="/img/icons/GIT-PULL-REQUEST.svg">
    Learn how to set up continuous integration and deployment using environment separation and testing.
  </Card>
</CardContainer>
<br />
