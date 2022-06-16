---
title: "Deployment"
date: 2022-03-21T14:45:41-07:00
weight: 1
description: >
  Prophecy deployment is flexible and supports multiple mechanisms
---

Prophecy deployment is simple and flexible. Prophecy is written as a set of microservices that run on Kubernetes and is
built to be multi-tenant. There are three primary options

- Private SaaS
- Public SaaS
- On-premise

## Cloud Deployment

Prophecy in the cloud connects to your existing Spark and Scheduler/Orchestrator. Prophecy does not store any data,
however it does store metadata about your pipelines, datasets and schedules.

<img src={require('./img/arch_general.png').default} alt="Example banner" width="75%" />

### Private SaaS (Customer VPC)

Our Enterprise customers and midsize/startup customers in segments which deal with very sensitive data primarily use this
option. Here, Prophecy runs within the **Customer VPC** and connects to the identity, spark clusters and the scheduler
within the VPC

<img src={require('./img/arch_customervpc.png').default} alt="Example banner" width="75%" />

This is the default option when you go through the cloud marketplaces. You can install the software from the _[Azure
Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/simpledatalabsinc1635791235920.prophecy-data-engineering)_.
The install is very simple, takes about 20 minutes, and billing starts after 30 days (and a confirmation popup)

<img src={require('./img/prophecy_azure.png').default} alt="Example banner" width="75%" />

## Public SaaS

Public SaaS (Prophecy managed SaaS) is the default option when you connect from **Databricks Partner Connect** and is free for one user.
This option is heavily used by customers to try Prophecy. Our startup and midsize customers who like the convenience of
a managed service prefer this option. You can also use this by directly going to the [Prophecy Application](https://app.prophecy.io/)

<img src={require('./img/arch_separate_vpc.png').default} alt="Example banner" width="75%" />

## On-Premise Deployment

On rare occasions Prophecy will deploy on-premise for the large customers who are moving to the cloud. Often the order
is that the organizations will move pipelines from on-premise legacy ETL tools to Spark, then move it to Spark on the
cloud. For more information on this reach out to our team by using [request a demo](https://www.prophecy.io/request-a-demo).
