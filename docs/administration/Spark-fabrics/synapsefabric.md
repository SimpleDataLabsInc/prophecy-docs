---
title: "Azure Synapse Analytics"
id: azure-synapse-fabric-guide
description: Configuring Synapse Fabric
sidebar_position: 7
tags:
  - deployment
  - configuration
  - open-source-spark
  - livy
---

In the context of Spark execution engines, users have the flexibility to opt for Azure Synapse Analytics while utilizing Prophecy. This comprehensive documentation aims to provide users with a clear understanding of the configuration process for Azure Synapse Analytics. Additionally, it offers step-by-step guidance on creating a Fabric that enables seamless connectivity to the Azure Synapse Workspace via Livy.

Feel free to explore the following sections to gain insights into the integration of Azure Synapse Analytics with Prophecy.

## An existing Azure Synapse Analytics environment

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

6. Configure Application, Workspace, Storage roles to ensure proper access.

Find more information on assigning roles from [Azure's documentation](https://learn.microsoft.com/en-us/azure/synapse-analytics/security/how-to-set-up-access-control).

### Configure connectivity between Synapse and Prophecy

Note that the Prophecy public IP is `3.133.35.237`.

Navigate to Prophecy's UI and click on **Create Fabric**. The Fabric will establish a connection with your Synapse environment and utilize it as the execution engine for your pipelines.
<br/> <br/>

Choose **Synapse** as your **Provider**.
<br/> <br/>

<img src={require('./img/provider1.png').default} alt="Synapse connect" width="75%" />
<br/> <br/>

Copy and paste your **Application Client ID**, **Secret Value**, and **Tenant ID** from the App Registration page.
<br/> <br/>

<img src={require('./img/appconfig.png').default} alt="Synapse connect" width="75%" />
<br/> <br/>

Copy and paste your Synapse **Resource Group Name** and **Subscription ID** from your Synapse workspace.
<br/> <br/>

<img src={require('./img/workspaceconfig.png').default} alt="Synapse connect" width="75%" />
<br/> <br/>

Click on **Fetch environments**.
<br/> <br/>

Select your Spark pool from the _Spark environment_ dropdown. All other fields should be automatically populated after selecting your Spark Pool.
<br/> <br/>

<img src={require('./img/selectsparkpool.png').default} alt="Synapse connect" width="75%" />
<br/> <br/>

Click on **Add Job Size** and configure the Job size that you would like to use for processing.
<br/> <br/>

<img src={require('./img/addjsize.png').default} alt="Synapse connect" width="55%" />
<br/> <br/>

Now we configure the dependencies.

Under **Scala** enter the following **Path**:

`https://prophecypublicazure.blob.core.windows.net/prophecy-public-libs/prophecy-scala-libs/`

Under **Python** enter the following **Path**:

`https://prophecypublicazure.blob.core.windows.net/prophecy-public-libs/prophecy-python-libs/`

<br/> <br/>

Click on **Complete**.
<br/> <br/>

Your Fabric for Azure Synapase Fabric is configured! Try creating a cluster using the Fabric that you've just created and attach to it.

Run a simple pipeline and make sure that the interim returns data properly.
