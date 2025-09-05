---
title: Amazon EMR
id: emr
description: Use Amazon EMR via Livy as your Spark execution engine
tags:
  - emr
  - livy
  - fabric
  - serverless
---

:::edition Enterprise Only
This feature requires the [Enterprise Edition](/getting-started/editions/prophecy-editions) of Prophecy.
:::

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Prophecy supports using Amazon EMR via Livy as your Spark execution engine for running pipelines.

These page includes steps to configure both **Amazon EMR** and **Amazon EMR Serverless** fabrics.

## Create Amazon EMR cluster with Apache Livy

In your Amazon EMR service, create a cluster. When doing so:

1. Under **Application bundle** select **Custom**.

2. When selecting applications, make sure **Livy** and **Spark** are included in the install.

<img
src={require("./img/livy.png").default}
alt="EMR create cluster"
width="75%"
/>

## Configure network settings

To make sure that EMR can communicate with Prophecy, you need to configure specific network settings. Specifically, you need to modify the security groups of your EMR cluster.

1. Modify the **Primary Node** security group to allow incoming connections to port `8998` from the Prophecy IP. You can do so by adding an inbound rule to the Master security group that permits incoming traffic on port `8998` from the Prophecy IP address.

2. Modify the **Core Node** security group to allow outgoing connections to the Prophecy public IP `3.133.35.237` over HTTPS. Do this by adding an outbound rule to the Core security group that allows outgoing traffic over HTTPS protocol to the Prophecy public IP.

## Create a fabric

To connect EMR and Prophecy, you must create a fabric. You can either create an EMR fabric (suggested), or a [Livy fabric](livy.md).

<Tabs>
  <TabItem value="emr" label="EMR" default>
    To create an EMR fabric:

    1. Open Prophecy and click **Create Entity** from the left navigation menu. Then, click on the fabric tile.

    1. Name your fabric and click **Continue**.

    1. Keep the Provider Type as **Spark**, and choose **EMR** as the Provider.

    1. Choose an authentication method (Static or SAML).

       - **Static**: Enter your AWS credentials under **Access Key** and **Secret Key**. Then, enter the region that your EMR cluster runs in.

       - **SAML**: Use an Okta application to authenticate the EMR connection. Learn more in [Configure EMR SAML authentication with Okta](docs/administration/authentication/emr-saml.md).


    1. Click on **Fetch environments**.

    1. Under **Spark Environment**, select the EMR cluster that you would like to connect to.

    1. Enter the S3 path that points to the location where you would like your logs to persist.

    <img
      src={require("./img/emr-setup.png").default}
      alt="EMR dependencies"
      width="75%"
    />

    1. Add the job size to your environment by clicking on **Add job Size**. Configure your job size and click on **Add**.

    1. Select File System under **Scala Resolution mode** and input `s3://prophecy-public-bucket/prophecy-libs`

    1. Select File System under **Python Resolution mode** and input `s3://prophecy-public-bucket/python-prophecy-libs`

    1. Click **Complete** to save your new EMR fabric.

  </TabItem>

  <TabItem value="emr-serverless" label="EMR Serverless">
    To create an EMR fabric for your serverless cluster:

    1. Open Prophecy and click **Create Entity** from the left navigation menu. Then, click on the fabric tile.

    1. Name your fabric and click **Continue**.

    1. Keep the Provider Type as **Spark**, and choose **EMR** as the Provider.

    1. Choose an authentication method (Static or SAML).

       - **Static**: Enter your AWS credentials under **Access Key** and **Secret Key**. Then, enter the region that your EMR cluster runs in.

       - **SAML**: Use an Okta application to authenticate the EMR connection. Learn more in [Configure EMR SAML authentication with Okta](docs/administration/authentication/emr-saml.md).

    1. Click on **Fetch environments**.

    1. Under **Spark Environment**, select the EMR serverless cluster that you would like to connect to. From the list of active clusters, you can identify your EMR Serverless cluster by finding `emr-serverless-services` within the Livy URL. This will automatically populate some of the following fields.

    <img
      src={require("./img/emr-serverless-dev-select.png").default}
      alt="EMR Serverless select"
      width="80%"
    />

    1. For the **Authentication type**, select `AWS Sig V4`. This is the only option that will work for EMR Serverless.

    1. Select your **Runtime Role**. The role must have enough permissions to use the selected Serverless App.

    1. Enter the S3 path that points to the location where you would like your logs and pipeline artifacts to persist.

    1. Add the job size to your environment by clicking on **Add Job Size**. Configure your job size and click on **Add**.

    1. Note that the Spark and Scala versions are fixed.

    1. Select File System under Scala Resolution mode and input `s3://prophecy-public-bucket/prophecy-libs`.

    1. Select File System under Python Resolution mode and input `s3://prophecy-public-bucket/python-prophecy-libs`.

    1. Click **Complete** to save your new EMR fabric.

  </TabItem>

  <TabItem value="livy" label="Livy">

    :::caution
    Livy does not work with Python version 3.8 and above.
    :::

    To create a Livy fabric:

    1. Open Prophecy and click **Create Entity** from the left navigation menu. Then, click on the fabric tile.

    1. Name your fabric and click **Continue**.

    1. Keep the Provider Type as **Spark**, and choose **Livy** as the Provider.

    1. Paste your Livy URL. You can find your Livy URL under the **Applications** tab on your EMR cluster page.

    1. Choose your Authentication type.

    1. Click **Test Connection**.

    Once your connection is tested, you'll have to configure a few more settings:

    1. Fill out the Spark and Scala version based on the values found in your EMR console. Refer to [Spark documentation](https://spark.apache.org/docs) to find the Scala version in relation to your Spark version.

    1. For the Prophecy Library configurations, choose the File System Resolution mode and provide the S3 folder names for dependencies.

    <img
      src={require("./img/library.png").default}
      alt="EMR create cluster"
      width="75%"
    />

    1. Click **Complete** to save your new Livy fabric.

  </TabItem>
</Tabs>
