---
title: "Connectivity Tips"
id: gcp-dataproc-fabric-tips
description: If your cluster doesn't connect, try these tips
sidebar_position: 1
tags:
  - deployment
  - configuration
  - google
  - gcp
  - dataproc
  - livy
---

:::tip
Sometimes the Livy Cluster cannot access the Scala or Python libraries.
:::

### Error

```
Creating new Livy Session...
Using prophecy libs path...repo1.maven.org...
Using python libraries...files.pythonhosted.org...
...
org.apache.spark.deploy.SparkSubmit.main(SparkSubmit.scala)\n\nYARN Diagnostics: ","level":"error"
```

### Corrective Actions

**Option 1:**  
Adjust network settings on the Livy Cluster to allow traffic from the Scala Prophecy Library url
`repo1.maven.org` and the Python Prophecy Library url
`files.pythonhosted.org`.

**Option 2:**  
Configure the Scala and Python Library Paths as mentioned [here](./dataproc.md).  
Configure Scala Library Path.
`gs://prophecy-public-gcp/prophecy-scala-libs/`.  
Configure Python Library Path.
`gs://prophecy-public-gcp/prophecy-python-libs/`.

**Option 3:**  
Setup an GCS bucket internally. Create two folders as in the previous option, and add `prophecy-scala-libs` and `prophecy-python-libs` in those folders.
