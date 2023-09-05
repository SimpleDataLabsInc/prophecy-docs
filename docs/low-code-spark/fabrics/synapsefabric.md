---
title: "Azure Synapse Fabric"
id: azure-synapse-fabric-guide
description: fabric configuration guide
sidebar_position: 4
tags:
  - deployment
  - configuration
  - azure
  - synapse
  - livy
---

In the context of Spark execution engines, users have the flexibility to opt for Azure Synapse Analytics while utilizing Prophecy. This comprehensive documentation aims to provide users with a clear understanding of the configuration process for Azure Synapse Analytics and Apache Livy. Additionally, it offers step-by-step guidance on creating a Fabric that enables seamless connectivity to the Azure Synapse environment via Livy.

Feel free to explore the following sections to gain insights into the integration of Azure Synapse Analytics and Apache Livy with Prophecy.

## An existing Azure Synapse Analytics environment

:::caution Warning
Livy does not work with Python version 3.8 and above.
:::

A properly configured Azure Synapse Analytics environment is required before configuring a Synapse Fabric on Prophecy. Prophecy configurations include the following:

1. A Synapse workspace with proper security configured. If you don't have an existing workspace, you may deploy one from the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft.synapse?tab=overview).
   <img src={require('./img/workspaceiam.png').default} alt="Synapse security" width="75%" />
2. Deploy a Synapse Spark Pool if one doesn't already exist.
   <img src={require('./img/sparkpool.png').default} alt="Synapse pool" width="75%" />
3. Make sure the Application is registered.
   <img src={require('./img/add_app.png').default} alt="Synapse security" width="75%" />
4. Create a secret for your Application.
   <img src={require('./img/secret.png').default} alt="Synapse security" width="75%" />
5. Make a note of your secret. We need this information for your Fabric.
   <img src={require('./img/secret2.png').default} alt="Synapse security" width="75%" />
6. Configure Subscription, Workspace, Storage roles to ensure proper access.

Find more information on assigning roles from [Azure's documentation](https://learn.microsoft.com/en-us/azure/synapse-analytics/security/how-to-set-up-access-control).

### Configure connectivity between Synapse and Prophecy

Please note that the Prophecy public IP is `3.133.35.237`.

Navigate to Prophecy's UI and click on **Create Fabric**. The Fabric will establish a connection with your Synapse environment and utilize it as the execution engine for your Pipelines.

**Choose Synapse** as your **Provider**.
<img src={require('./img/provider.png').default} alt="Synapse connect" width="75%" />

**Copy and paste** your **Application Client ID**, **Secret Value** and **Tenant ID** from the App Registration page.
<img src={require('./img/appconfig.png').default} alt="Synapse connect" width="75%" />

**Copy and paste** your Synapse **Resource Group Name** and **Subscription ID** from your Synapse workspace.
<img src={require('./img/workspaceconfig.png').default} alt="Synapse connect" width="75%" />

**Click** on **Fetch environments**.

**Select** your Spark pool from the _Spark environment_ dropdown. All other fields should be automatically populated after selecting your Spark Pool.
<img src={require('./img/selectsparkpool.png').default} alt="Synapse connect" width="75%" />

**Click** on **Add Job Size** and configure the Job size that you would like to use for processing.
<img src={require('./img/addjsize.png').default} alt="Synapse connect" width="75%" />

Now we configure the dependencies.

Under **Scala** enter **Path**

`https://prophecydevpublic.blob.core.windows.net/prophecy-libs/prophecy-libs-assembly-3.3.0-ml-7.1.4.jar`

Under **Python** enter **Path**

`https://prophecydevpublic.blob.core.windows.net/python-prophecy-libs/prophecy_libs-1.5.9-py3.9.egg`
<img src={require('./img/lib.png').default} alt="Synapse connect" width="75%" />

**Click** on **Complete**.

Your Fabric for Azure Synapase Fabric is configured! Try creating a cluster using the Fabric that you've just created and attach to it.

Run a simple Pipeline and make sure that the interim returns data properly.
