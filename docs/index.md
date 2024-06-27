---
sidebar_position: 1
title: Prophecy Data Transformation Copilot
id: index
sidebar_label: Prophecy
description: get a little help from Copilot
tags:
  - visual
  - code
  - copilot
---

Prophecy's Copilot is designed to enable all users to be productive with data engineering. It also replaces legacy ETL products. Following are the primary pillars of Prophecy Copilot:

## Visual Interface

Prophecy's designer provides a visual drag-and-drop canvas to develop data Pipelines, where business logic can be written as simple SQL expressions. We believe it is superior in every way to developing custom scripts:

- **Many data users:** Our users do not need to be experts in Spark or Airflow, and this enables all the data users - data engineers, visual ETL developers, data scientists and data analysts to succeed.
- **Productive development:** It is very quick to develop Pipelines - you can drag and drop visual blocks into a Pipeline and interactively run them to see the data after every step along the journey. Even coding data engineers are more productive with our product.

![Data Pipeline](./img/datapipeline.png)

## Code & DevOps

Running at scale requires bringing the best software engineering practices to the refinement of data. Rapid development & deployment of data Pipeline can be achieved by code on Git & high test coverage, coupled with continuous integration & continuous deployment. Prophecy does the following to make this process work:

- **Visual data Pipelines as code:** Prophecy's code editor stores visual data Pipelines as high-quality code on Git
- **High test coverage:** Prophecy makes test-generation & editing easy, and this results in high test coverage for our users after the switch
- **Metadata as code:** Much of the metadata from projects including workflows, schedules and datasets, and computed metadata such as column-level lineage are also stored on Git with Prophecy.

These provide the following benefits:

- **DevOps practices:** For data projects, the Pipeline code, schedules & tests are stored on Git - with every developer working on her branch. Every change gets reviewed, and on every commit tests are run. The code is then deployed to be run per the schedule. Bad changes can be rolled back reliably. This process enables data teams to quickly move new and edited changes to production with high confidence.
- **Zero lock-in:** Prophecy generated code is in 100% open-source format with data Pipelines in Apache Spark format and schedules in Apache Airflow format. This ensures freedom from lock-in and cost management.
- **Git versioning for time travel:** Given that data projects including metadata are stored together on Git, the user can traverse across time, and for example see how a value is computed today, and compare it with how it was computed a month earlier to understand why a breakage has occurred.

## Complete Product

In the cloud, data engineering only has point products forcing the customer data platform teams to stitch together custom solutions. However, this means that development, deployment and metadata is spread across multiple systems - this is not sustainable over the medium term.

Prophecy instead chooses to provide a complete product:

- Build data Pipelines on Spark
- Deploy & Schedule data Pipelines on Airflow
- Get unified metadata with search that includes business logic, datasets, execution information
- Column level lineage to see how values flow end-to-end

![Complete](./img/complete.png)

## Extensibility

Standardization is essential to scale but the scope of Data Engineering has increased quite beyond what traditional ETL or data integration products provide. It is no longer acceptable to only have a limited palette of visual components, where users get stuck if something does not fit the paradigm.

Prophecy provides extensibility - not as an afterthought - but as the concept at the heart of our architecture. Prophecy provides a set of inbuilt visual operators - such as Spark standard library, and Delta lake library. New visual operators are defined by our customers - usually the data platform teams develop these extensions as data products for their organizations. These extensions include custom connectors and transforms such as an encryption library. Customers also ask us to develop new operators as they need them and we're happy to add new libraries as requested.

![Extensible](./img/extensible.png)

### Gems

Prophecy enables you to construct data Pipelines from predefined visual blocks (like Lego pieces), that we call Gems. Prophecy provides dozens of Gems ready to use out of the box. We also offer Gem customization. The custom Gems require users to be able to write Spark code and our customers often rely on Prophecy to help out. Gems include Spark code, properties that are blanks to be filled by the user from UI, and a function to describe the visual layout of the Gem.

In the Gem builder UI, the left half is where you write the template code for the Gem. The top right has a functional UI generated in real time from the template code. You can fill business logic values into this generated UI, and you can immediately see the generated code at the bottom right. You can run this generated code against input data and see the results to ensure everything is working well.

![Complete](./img/gem-builder.png)
