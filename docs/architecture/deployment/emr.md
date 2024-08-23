---
title: "Amazon EMR with Apache Livy"
id: EMR-livy-installation-guide
description: Installation Guide
sidebar_position: 3
tags:
  - deployment
  - installation
  - emr
  - livy
---

In the context of Spark execution engines, users have the flexibility to opt for Amazon EMR while utilizing Prophecy. This comprehensive documentation aims to provide users with a clear understanding of the installation process for Amazon EMR and Apache Livy. Additionally, it offers step-by-step guidance on creating a Fabric that enables seamless connectivity to the EMR environment via Livy.

Feel free to explore the following sections to gain insights into the integration of Amazon EMR and Apache Livy with Prophecy.

## Create Amazon EMR cluster with Apache Livy

:::caution Warning
Livy does not work with Python version 3.8 and above.
:::

Navigate to Amazon EMR service and create a cluster. Under **Application bundle** select **Custom**.

Choose appropriate applications to include in your installation. At a minimum, make sure sure **Livy** and **Spark** are included in the install.

<img src={require('./img/livy.png').default} alt="EMR create cluster" width="75%" />

### Configure network connectivity between Livy and Prophecy

To configure the necessary network settings for seamless integration, specific modifications to the security groups of your EMR cluster are required. Follow the instructions outlined below:
If you intend to utilize Prophecy as a SaaS (Software as a Service) solution, note that the Prophecy public IP is `3.133.35.237`. Ensure that the Core security group's outbound rule allows connections to this IP address.

1. Modify the **Primary Node** security group:
   - Allow incoming connections to port `8998` from the Prophecy IP.
   - This can be achieved by adding an inbound rule to the Master security group that permits incoming traffic on port `8998` from the Prophecy IP address.
2. Modify the **Core Node** security group:
   - Allow outgoing connections to the Prophecy public IP over HTTPS.
   - To enable this, add an outbound rule to the Core security group that allows outgoing traffic over HTTPS protocol to the Prophecy public IP.

By implementing these adjustments to your EMR cluster's security groups, you will establish the necessary network configuration for effective integration with Prophecy.

## Create a Fabric to connect Prophecy to Livy

Navigate to Prophecy's UI and click on **Create Fabric**. The Fabric will establish a connection with your EMR cluster and utilize it as the execution engine for your Pipelines.

<img src={require('./img/livyfabric.png').default} alt="EMR create cluster" width="75%" />

Choose **Livy** as your **Provider**.

<img src={require('./img/provider.png').default} alt="EMR create cluster" width="75%" />

Before proceeding, it is crucial to ensure that all the required settings are properly configured. If you are uncertain about the necessary configurations, we recommend reaching out to your cloud infrastructure team for additional guidance and assistance. They will be able to provide you with the specific information and support needed to ensure a successful setup.

You may find your **Livy URL** under the **Applications** tab on your EMR Cluster page.
<img src={require('./img/livyurl.png').default} alt="EMR create cluster" width="75%" />

Copy/paste your Livy URL under **Spark Connection** and choose the appropriate **Spark Version** and _Scala Version_ You may find the Spark version from your EMR console. Refer to [Spark documentation](https://spark.apache.org/docs) to find the Scala version in relation to your Spark version.
<img src={require('./img/sparkversion.png').default} alt="EMR create cluster" width="75%" />

Configure appropriate **Prophecy Library** based on your Spark and Scala version. and click on **Complete**.

<img src={require('./img/library.png').default} alt="EMR create cluster" width="75%" />

Your Fabric for Amazon EMR is configured! Try creating a cluster using the Fabric that you've just created and attach to it.
<img src={require('./img/attach.png').default} alt="EMR create cluster" width="75%" />

Run a simple Pipeline and make sure that the interim returns data properly.
