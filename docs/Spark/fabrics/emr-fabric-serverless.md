---
title: "Amazon EMR Serverless"
id: EMR-serverless-fabric-configuration
description: Configuring the EMR Serverless Fabric
sidebar_position: 5
tags:
  - deployment
  - fabric
  - emr
  - serverless
---

In the context of Spark execution engines, you have the flexibility to opt for Amazon EMR Serverless. This guide offers step-by-step instructions on creating a Fabric that enables seamless connectivity to the EMR Serverless environment.

## Create Amazon EMR Serverless cluster with Apache Livy

Navigate to Amazon EMR Serverless service and create a cluster. Under **Application bundle** select **Custom**.

Choose appropriate applications to include in your installation. At a minimum, make sure sure **Livy** and **Spark** are included in the install.

<img src={require('./img/livy.png').default} alt="EMR Serverless create cluster" width="75%" />

### Allow network connectivity between Amazon EMR Serverless and Prophecy

To configure the necessary network settings for seamless integration, specific modifications to the security groups of your EMR Serverless cluster are required. Follow the instructions outlined below:
If you intend to utilize Prophecy as a SaaS (Software as a Service) solution, note that the Prophecy public IP is `3.133.35.237`. Ensure that the Core security group's outbound rule allows connections to this IP address.

1. Modify the **Primary Node** security group:
   - Allow incoming connections to port `8998` from the Prophecy IP.
   - This can be achieved by adding an inbound rule to the Master security group that permits incoming traffic on port `8998` from the Prophecy IP address.
2. Modify the **Core Node** security group:
   - Allow outgoing connections to the Prophecy public IP over HTTPS.
   - To enable this, add an outbound rule to the Core security group that allows outgoing traffic over HTTPS protocol to the Prophecy public IP.

By implementing these adjustments to your EMR Serverless cluster's security groups, you will establish the necessary network configuration for effective integration with Prophecy.

## Create a Fabric to connect Prophecy to EMR Serverless

Navigate to Prophecy's UI and click on **Create Fabric**. The Fabric will establish a connection with your EMR Serverless cluster and use it as the execution engine for your Pipelines.
<img src={require('./img/create-entity-emr.png').default} alt="EMR Serverless create Fabric" width="75%" />
<br/>
<br/>

**Name** your EMR Serverless Fabric and click on **Continue**.

<br/>
<br/>

<img src={require('./img/name-emr-serverless.png').default} alt="EMR Serverless Fabric name" width="80%" />

Choose **EMR** as your **Provider**. At this point, there is no distinction between creating an EMR and an EMR Serverless Fabric.

<img src={require('./img/emr-f-abric.png').default} alt="EMR Serverless Provider" width="75%" />

Before proceeding, it is crucial to ensure that all the required settings are properly configured. If you are uncertain about the necessary configurations, we recommend reaching out to your cloud infrastructure team for additional guidance and assistance. They will be able to provide you with the specific information and support needed to ensure a successful setup.

Enter your AWS credentials under **Access Key** and **Secret Key**. Choose the **Region** that your EMR Serverless cluster is running in.

Click on **Fetch environments**.
<img src={require('./img/emr-aws-cred.png').default} alt="EMR Serverless cred" width="75%" />

Select your EMR Serverless cluster that you would like to connect to under **Spark Environment**. The EMR cluster listing also shows Serverless clusters. From the list of active clusters, you can identify your EMR Serverless cluster by finding `emr-serverless-services` within the Livy URL.

<img src={require('./img/emr-serverless-dev-select.png').default} alt="EMR Serverless select" width="80%" />

Most of the fields should be automatically populated after selecting a EMR Serverless cluster.

Optional: You can enable Lake Formation by clicking the toggle.

Select your Authentication type. We suggest choosing `AWS Sig V4`.
<img src={require('./img/emr-serverless-auth-type.png').default} alt="EMR Serverless Authentication type" width="50%" />

Select your Runtime Role. You will only see roles that you have access to.
<img src={require('./img/emr-serverless-runtime-role.png').default} alt="EMR Serverless Runtime Role" width="75%" />

Enter the S3 path that points to the location where you would like your logs and Pipeline artifacts to persist.

<img src={require('./img/emr-serverless-environment.png').default} alt="EMR Serverless dependencies" width="80%" />

Add the Job size to your environment by clicking on **Add Job Size**. Configure your Job size and click on **Add**.
<img src={require('./img/configure-j-ob-size.png').default} alt="EMR Job size" width="49%" />

Configure the Prophecy Library:

:::note

The Spark Version and Scala Version are fixed.

:::

Select **File System** under **Scala Resolution mode** and provide the following path:

`s3://prophecy-public-bucket/prophecy-libs`

Select **File System** under **Python Resolution mode** and provide the following path:

`s3://prophecy-public-bucket/python-prophecy-libs`

<img src={require('./img/emr-serverless-sizes-and-libraries.png').default} alt="EMR Serverless Library" width="78%" />

Click on **Complete** and your EMR Serverless Fabric is ready!

Run a simple Pipeline and make sure that the interim returns data properly.
