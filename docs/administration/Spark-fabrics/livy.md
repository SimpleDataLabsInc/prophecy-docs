---
title: "Livy"
id: livy
description: Configure a Livy fabric
sidebar_position: 4
tags:
  - fabric
  - configuration
  - livy
---

[Apache Livy](https://livy.apache.org/) is a service that enables easy interaction with a Spark cluster over a REST interface. If you're running Hadoop, most Hadoop distributions (CDP/MapR) come with Livy bundled. For Spark-on-k8s, you can put a Livy in the K8s cluster, which exposes Spark over a REST API.
You can create a generic Livy fabric to connect Prophecy to any Spark cluster accessible via Apache Livy.

## Create the Livy fabric

Let's get started with creating Livy fabric.

1. Click on the **Create Entity** button from the left navigation bar.
1. Click on the **Fabric** tile.
1. Fill out the basic information:
   - **Name**
   - **Description**
   - **Team**
1. Click **Continue**.
1. Fill in the information about the Spark provider.
   - **Provider Type**: Spark
   - **Provider**: Livy
   - **Livy URL**: The URL to your Livy environment
   - **Use mTLS Encryption (optional)**: The Client Certificate and Client Key required for mTLS.
   - **Authentication type**: How you will authenticate Livy in Prophecy
1. Test the connection to validate the fabric.

### Authentication types

Prophecy supports the following authentication types for Livy.

- **None**: This applies when Livy and Prophecy are on the same private network or when Prophecy can securely communicate with Livy through IP whitelisting.

- **Bearer Token**: Use this option to authenticate using a secure token-based system. All team members who use this fabric will use the same token configured by a team admin here for authentication.

- **Kerberos**: If using a Kerberized Hadoop cluster, you can authenticate via Kerberos. For this option, Prophecy cluster admins must first add Keytab files in **Settings > Admin > Security**.

  You can also enable the **impersonate using Proxy-user** toggle to allow user-level authorization. Prophecy cluster admins can configure the proxy-user settings in **Settings > Admin > Security**.

## Additional Livy configurations

Once the connection is validated:

1. Edit or add job sizes. A job size consists of the following.
   - Name
   - Drivers: The number of cores and amount of memory of the drivers
   - Executors: The number of cores and the amount of memory of the executors, and the total number of executors
1. Configure the Prophecy Library settings.
   - Spark version: Version that is used when a user attaches to a cluster using this fabric
   - Scala version: Version that is used when a user attaches to a cluster using this fabric
   - Scala/Python resolution mode: Location of libraries to use for Scala or Python

## Advanced settings

You can provide advanced options like Yarn queue, extra jars, and Spark configs here. Spark configs are additional [Spark properties](https://spark.apache.org/docs/latest/configuration.html#available-properties), which you can set to be applied at Spark session initialization. For example, if your Spark installation is configured to enable dynamic allocation, you can disable it for sessions created through Prophecy.

## Connections and secrets

Connections are not supported for Livy fabrics. However, you can still add secrets to your fabric. Team admins can learn how to set up and use secrets [here](docs/administration/secrets/secret-providers.md).

## What's next

Once you are using your Livy fabric in Prophecy, you might want to learn more about [Livy execution metrics](/docs/Spark/execution/execution-metrics-on-livy.md).
