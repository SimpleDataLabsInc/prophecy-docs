---
title: "Google Cloud Dataproc"
id: gcp-dataproc-fabric-guide
description: Configuring GCP Dataproc Fabric
sidebar_position: 7
tags:
  - deployment
  - configuration
  - google
  - gcp
  - dataproc
  - livy
---

In the context of Spark execution engines, users have the flexibility to opt for Google Cloud Dataproc. This guide offers step-by-step instructions on creating a Fabric that enables seamless connectivity to the Dataproc environment.

## Create a Dataproc Cluster

<br/><br/>

:::caution
Livy is required for the Fabric. Prophecy provides a script required to deploy a Dataproc Cluster.
:::

<br/><br/>

1. If you don't already have a private key, create a private key for the service account that you're using.
   <br/><br/>
   <img src={require('./img/createkey.png').default} alt="dataproc security" width="75%" />
   <br/><br/>
2. Ensure you have the following permissions configured.

```
  gcloud projects add-iam-policy-binding <project-name> \
 --member "<service-account-name>" \
 --role "roles/serviceusage.serviceUsageViewer"

  gcloud projects add-iam-policy-binding <project-name> \
 --member "<service-account-name>" \
 --role "roles/dataproc.worker"

  gcloud projects add-iam-policy-binding core-shard-398601 \
 --member "<service-account-name>" \
 --role "storage.objects.get"

  gcloud storage buckets add-iam-policy-binding gs://<bucket-name> \
 --member="<service-account-name>" --role=roles/storage.admin --project <project-name>
```

3. Associate secret key to service account.

```
gcloud config set account meitestserviceaccount@core-shard-398601.iam.gserviceaccount.com \
--key-file=<local-private-key-location>
```

4. Start a Dataproc cluster using `install-livy.sh`.

   ```
    gcloud dataproc clusters create <cluster-name> \
   --scopes <permission-scope> \
   --region <cluster-region> \
   --initialization-actions 'gs://prophecy-public-gcp/livy-installer-script/install-livy.sh' \
   --properties "hive:hive.metastore.warehouse.dir=<gs://bucket/datasets>" \
   --metadata "enable-cloud-sql-proxy-on-workers=false" \
   --bucket <cluster-data-bucket-name> \
   --region <region> \
   --zone <zone> \
   --single-node \
   --master-machine-type n2-standard-4 \
   --master-boot-disk-size 500 \
   --image-version 2.0-debian10 \
   --project <project-name> \
   --service-account="<service-account-name>" \
   --dataproc-metastore=projects/<project-name>/locations/<region>/services/<metastore-service-name>
   ```

## Create a Dataproc Fabric

1. Create a Fabric and select **Dataproc**.
   <br/><br/>
   <img src={require('./img/selectdataproc.png').default} alt="select dataproc" width="75%" />
   <br/><br/>
2. Fill out your **Project Name** and **Region**, and upload the **Private Key**.
   <br/><br/>
   <img src={require('./img/configuredataproc.png').default} alt="configure dataproc" width="75%" />
   <br/><br/>
3. Click on **Fetch environments** and select the Dataproc **cluster** that you created earlier.
   <br/><br/>
   <img src={require('./img/selectenv.png').default} alt="select cluster" width="75%" />
   <br/><br/>
4. Leave everything as default and provide the **Livy URL**. Locate the **External IP** of your cluster instance. Optionally, you may configure the DNS instead of using the IP. The URL is `http://<external-ip>:8998`.
   <br/><br/>
   <img src={require('./img/externalip.png').default} alt="livy ip" width="75%" />
   <br/><br/>
5. Configure the bucket associated with your cluster.
   <br/><br/>
   <img src={require('./img/bucketloc.png').default} alt="bucket location" width="75%" />
   <br/><br/>
6. Add the **Job Size**.
   <br/><br/>
   <img src={require('./img/procjobsize.png').default} alt="Job Size" width="55%" />
   <br/><br/>
7. Configure Scala Library Path.
   `gs://prophecy-public-gcp/prophecy-scala-libs/`.
8. Configure Python Library Path.
   `gs://prophecy-public-gcp/prophecy-python-libs/`.
   <br/><br/>
   <img src={require('./img/proclib.png').default} alt="dependences" width="85%" />
   <br/><br/>
9. Click on **Complete**.
   <br/><br/>
   Run a simple Pipeline and make sure that the interim returns data properly.
