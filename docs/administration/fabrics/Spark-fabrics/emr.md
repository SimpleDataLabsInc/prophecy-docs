---
title: Amazon EMR
id: emr
description: Use Amazon EMR via Livy as your Spark execution engine
sidebar_position: 5
tags:
  - deployment
  - installation
  - emr
  - livy
  - fabric
  - serverless
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

This page outlines how to use Amazon EMR via Livy as your Spark execution engine in Prophecy.

These instructions work for both **Amazon EMR** and **Amazon EMR Serverless**.

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

```mdx-code-block
<Tabs>
  <TabItem value="emr" label="EMR" default>
    <p>To create an EMR fabric:</p>
    <ol>
      <li>
        Open Prophecy and click <strong>Create Entity</strong> from the left
        navigation menu. Then, click on the fabric tile.
      </li>
      <li>
        Name your fabric and click <strong>Continue</strong>.
      </li>
      <li>
        Keep the Provider Type as <strong>Spark</strong>, and choose{" "}
        <strong>EMR</strong> as the Provider.
      </li>
      <br />
      <img
        src={require("./img/emr-f-abric.png").default}
        alt="EMR Provider"
        width="75%"
      />
      <li>
        Enter your AWS credentials under <strong>Access Key</strong> and{" "}
        <strong>Secret Key</strong>. Then, enter the region that your EMR
        cluster is running in.
      </li>
      <li>
        Click on <strong>Fetch environments</strong>.
      </li>
      <li>
        Under <strong>Spark Environment</strong>, select the EMR cluster that
        you would like to connect to.
      </li>
      <li>
        Enter the S3 path that points to the location where you would like your
        logs to persist.
      </li>
      <br />
      <img
        src={require("./img/emr-setup.png").default}
        alt="EMR dependencies"
        width="75%"
      />
      <li>
        Add the job size to your environment by clicking on{" "}
        <strong>Add job Size</strong>. Configure your job size and click on{" "}
        <strong>Add</strong>.
      </li>
      <li>
        Select File System under <strong>Scala Resolution mode</strong> and
        input <code>s3://prophecy-public-bucket/prophecy-libs</code>
      </li>
      <li>
        Select File System under <strong>Python Resolution mode</strong> and
        input <code>s3://prophecy-public-bucket/python-prophecy-libs</code>
      </li>
    </ol>
    <p>
      Click <strong>Complete</strong> to save your new EMR fabric.
    </p>
  </TabItem>
  <TabItem value="emr-serverless" label="EMR Serverless">
    <p>To create an EMR fabric for your serverless cluster:</p>
    <ol>
      <li>
        Open Prophecy and click <strong>Create Entity</strong> from the left
        navigation menu. Then, click on the fabric tile.
      </li>
      <li>
        Name your fabric and click <strong>Continue</strong>.
      </li>
      <li>
        Keep the Provider Type as <strong>Spark</strong>, and choose{" "}
        <strong>EMR</strong> as the Provider.
      </li>
      <br />
      <img
        src={require("./img/emr-f-abric.png").default}
        alt="EMR Provider"
        width="75%"
      />
      <li>
        Enter your AWS credentials under <strong>Access Key</strong> and{" "}
        <strong>Secret Key</strong>. Then, enter the region that your EMR
        cluster is running in.
      </li>
      <li>
        Click on <strong>Fetch environments</strong>.
      </li>
      <li>
        Under <strong>Spark Environment</strong>, select the EMR serverless
        cluster that you would like to connect to. From the list of active
        clusters, you can identify your EMR Serverless cluster by finding{" "}
        <code>emr-serverless-services</code> within the Livy URL. This will
        automatically populate some of the following fields.
      </li>
      <br />
      <img
        src={require("./img/emr-serverless-dev-select.png").default}
        alt="EMR Serverless select"
        width="80%"
      />
      <li>
        For the <strong>Authentication type</strong>, select{" "}
        <code>AWS Sig V4</code>. This is the only option that will work for EMR
        Serverless.
      </li>
      <li>
        Select your <strong>Runtime Role</strong>. The role must have enough
        permissions to use the selected Serverless App.
      </li>
      <li>
        Enter the S3 path that points to the location where you would like your
        logs and pipeline artifacts to persist.
      </li>
      <li>
        Add the job size to your environment by clicking on{" "}
        <strong>Add Job Size</strong>. Configure your job size and click on{" "}
        <strong>Add</strong>.
      </li>
      <li>Note that the Spark and Scala versions are fixed.</li>
      <li>
        Select File System under Scala Resolution mode and input{" "}
        <code>s3://prophecy-public-bucket/prophecy-libs</code>
      </li>
      <li>
        Select File System under Python Resolution mode and input{" "}
        <code>s3://prophecy-public-bucket/python-prophecy-libs</code>
      </li>
    </ol>
    <p>
      Click <strong>Complete</strong> to save your new EMR fabric.
    </p>
  </TabItem>
  <TabItem value="livy" label="Livy">
    <p>
      <strong>
        Note: Livy does not work with Python version 3.8 and above.
      </strong>
      <br />
      <br />
      To create a Livy fabric:
    </p>
    <ol>
      <li>
        Open Prophecy and click <strong>Create Entity</strong> from the left
        navigation menu. Then, click on the fabric tile.
      </li>
      <li>
        Name your fabric and click <strong>Continue</strong>.
      </li>
      <li>
        Keep the Provider Type as <strong>Spark</strong>, and choose{" "}
        <strong>Livy</strong> as the Provider.
      </li>
      <br />
      <img
        src={require("./img/provider.png").default}
        alt="Livy provider"
        width="75%"
      />
      <li>
        Paste your Livy URL. You can find your Livy URL under the{" "}
        <strong>Applications</strong> tab on your EMR cluster page.
      </li>
      <li>Choose your Authentication type.</li>
      <li>
        Click <strong>Test Connection</strong>.
      </li>
    </ol>
    <p>
      Once your connection is tested, you'll have to configure a few more
      settings:
    </p>
    <ol start="7">
      <li>
        Fill out the Spark and Scala version based on the values found in your
        EMR console. Refer to{" "}
        <a href="https://spark.apache.org/docs">Spark documentation</a> to find
        the Scala version in relation to your Spark version.
      </li>
      <li>
        For the Prophecy Library configurations, choose the File System
        Resolution mode and provide the S3 folder names for dependencies.
      </li>
      <br />
      <img
        src={require("./img/library.png").default}
        alt="EMR create cluster"
        width="75%"
      />
    </ol>
    <p>
      Click <strong>Complete</strong> to save your new Livy fabric.
    </p>
  </TabItem>
</Tabs>
```

At this point, you can test your fabric. Open a project, connect to a cluster, and try to run a pipeline!
