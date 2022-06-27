---
title: "On premise"
id: on-premise
description: Schema, meet Data.
sidebar_position: 2
---

Prophecy can be deployed on-premise for customers who require maximum security or want to run on their own on-premise
Spark versions (e.g. CDP, HDP, MapR). As for the cloud deployments, also for on-premise, Prophecy is deployed on a
Kubernetes cluster. With that setup, Prophecy seamlessly integrates with the rest of your infrastructure.

Prophecy is installed through a Prophecy kubernetes operator, which automatically takes care of the common ops tasks,
like maintenance of the service, health checks, updates, version rollback etc.

<img src={require('./img/arch_customervpc.png').default} alt="Example banner" width="75%" />

## Requirements

To install Prophecy on-premise the following infrastructure requirements must be satisfied:

1. Cluster
2. Storage
