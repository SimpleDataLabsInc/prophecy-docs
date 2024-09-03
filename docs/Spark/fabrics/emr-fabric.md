---
title: "Amazon EMR"
id: EMR-fabric-configuration
description: Configuring the EMR Fabric
sidebar_position: 4
tags:
  - deployment
  - fabric
  - emr
---

In the context of Spark execution engines, you have the flexibility to opt for Amazon EMR. This guide offers step-by-step instructions on creating a Fabric that enables seamless connectivity to the EMR environment.

## Create Amazon EMR cluster with Apache Livy

Navigate to Amazon EMR service and create a cluster. Under **Application bundle** select **Custom**.

Choose appropriate applications to include in your installation. At a minimum, make sure sure **Livy** and **Spark** are included in the install.

<img src={require('./img/livy.png').default} alt="EMR create cluster" width="75%" />

### Allow network connectivity between Amazon EMR and Prophecy

To configure the necessary network settings for seamless integration, specific modifications to the security groups of your EMR cluster are required. Follow the instructions outlined below:
If you intend to utilize Prophecy as a SaaS (Software as a Service) solution, note that the Prophecy public IP is `3.133.35.237`. Ensure that the Core security group's outbound rule allows connections to this IP address.

1. Modify the **Primary Node** security group:
   - Allow incoming connections to port `8998` from the Prophecy IP.
   - This can be achieved by adding an inbound rule to the Master security group that permits incoming traffic on port `8998` from the Prophecy IP address.
2. Modify the **Core Node** security group:
   - Allow outgoing connections to the Prophecy public IP over HTTPS.
   - To enable this, add an outbound rule to the Core security group that allows outgoing traffic over HTTPS protocol to the Prophecy public IP.

By implementing these adjustments to your EMR cluster's security groups, you will establish the necessary network configuration for effective integration with Prophecy.

## Create a Fabric to connect Prophecy to EMR

Navigate to Prophecy's UI and click on **Create Fabric**. The Fabric will establish a connection with your EMR cluster and use it as the execution engine for your Pipelines.
<img src={require('./img/create-entity-emr.png').default} alt="EMR create cluster" width="75%" />
<br/>
<br/>

**Name** your EMR Fabric and click on **Continue**.

<br/>
<br/>

<img src={require('./img/name-emr.png').default} alt="EMR create Fabric" width="75%" />

Choose **EMR** as your **Provider**.

<img src={require('./img/emr-f-abric.png').default} alt="EMR create Fabric" width="75%" />

Before proceeding, it is crucial to ensure that all the required settings are properly configured. If you are uncertain about the necessary configurations, we recommend reaching out to your cloud infrastructure team for additional guidance and assistance. They will be able to provide you with the specific information and support needed to ensure a successful setup.

Enter your AWS credentials under **Access Key** and **Secret Key**. Choose the **Region** that your EMR cluster is running in.

Click on **Fetch environments**.
<img src={require('./img/emr-aws-cred.png').default} alt="EMR cred" width="75%" />

Select your EMR cluster that you would like to connect to under **Spark Environment**.

<img src={require('./img/emr-cluster-select.png').default} alt="EMR select" width="75%" />

Most of the fields should be automatically populated after selecting a EMR cluster. Enter the S3 path that points to the location where you would like your logs to persist.

<img src={require('./img/emr-setup.png').default} alt="EMR dependencies" width="75%" />

Add the Job size to your environment by clicking on **Add Job Size**. Configure your Job size and click on **Add**.
<img src={require('./img/configure-j-ob-size.png').default} alt="EMR Job size" width="49%" />

Configure the Prophecy Library:

Select **File System** under **Scala Resolution mode** and provide the following path:

`s3://prophecy-public-bucket/prophecy-libs`

Select **File System** under **Python Resolution mode** and provide the following path:

`s3://prophecy-public-bucket/python-prophecy-libs`

<img src={require('./img/library.png').default} alt="EMR Job size" width="75%" />

Click on **Complete** and your EMR Fabric is ready!
<img src={require('./img/complete-f-abric.png').default} alt="EMR create cluster" width="95%" />

Run a simple Pipeline and make sure that the interim returns data properly.
