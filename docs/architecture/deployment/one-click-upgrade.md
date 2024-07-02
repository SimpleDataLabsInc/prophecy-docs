---
title: "One-click Upgrade"
id: One-click-Upgrade
description: One-click Upgrade
sidebar_position: 2
tags:
  - deployment
  - upgrade
  - one-click
  - one-click upgrade
---

1. With the introduction of the One-Click Upgrade process, any customer can upgrade their cluster to the latest released version with one single click on the UI.
2. The platform will be upgraded to the release selected and chosen for an upgrade without any hassle of communicating over calls or emails
3. For One-Click Upgrade, the Prophecy IDE user should be an Admin user

## Benefits of this new solution

1. With One-Click upgrade, Prophecy Admins can follow the steps below to upgrade Prophecy clusters. Please do reach out to us at Support@Prophecy.io for assistance.
2. No sophisticated tools, like Helm, kubectl, etc., are required anymore for the upgrade
3. No Kubernetes access is necessary for the upgrade

## How to do it?

One-Click Upgrade follows slightly different steps based on the type of Prophecy clusters:

1. **Non-Dark Cluster** - The Kubernetes cluster where Prophecy backend is running, has access to Prophecy Helm Repository
   1. Here, Prophecy pulls the update from the [Prophecy Helm Repository](https://prophecy-chart.s3.us-west-2.amazonaws.com/)
   2. [One-Click Upgrade on Non-Dark Cluster (connected to internet)](#one-click-upgrade-on-non-dark-cluster-connected-to-internet)
2. **Dark Cluster** - The Kubernetes cluster where Prophecy backend is running, does not have access to [Prophecy Helm Repository](https://prophecy-chart.s3.us-west-2.amazonaws.com/)
   1. Here, the update is triggered using the Helm package inside the Prophecy platform service (named Athena)
   2. [One-Click Upgrade on Dark Clusters (not connected to internet)](#one-click-upgrade-on-dark-clusters-not-connected-to-internet)

### One-Click Upgrade on Non-Dark Cluster (connected to internet)

#### Step 1: Click on Settings

1. Go to the left bottom corner and click on the three icon
2. This opens a side panel with a settings icon
3. Click on Settings

<img src={require('./img/step1.png').default} alt="step1" width="75%" />

#### Step 2: Click on “Upgrade Version”

1. On clicking the Settings icon, a page with various tabs will open
2. Click on the “Admin” tab
   - This opens a tabular structure, with a list of users and when were those created in the system
   - On the right top corner of this table, you’ll find the button “Upgrade Version”
   - Click on “Upgrade Version”

<img src={require('./img/step2.png').default} alt="step2" width="95%" />

#### Step 3: Load the “Upgrade Version” pop-up

1. On clicking the “Upgrade Version”, a pop-up will appear on the screen
2. The pop-up contains a text box “Version”

<img src={require('./img/step3.png').default} alt="step3" width="75%" />

#### Step 4: Select from the list of versioned releases

1. Click the “Version” text box. Since Prophecy can connect to its Helm repository, the dropdown will display a list of all available versions.
2. Select the desired version

<img src={require('./img/step4.png').default} alt="step4" width="75%" />

#### Step 5: Click Upgrade

1. Since it is a non-dark cluster, the selected package is retrieved from Prophecy’s Helm repository
2. Click Upgrade

<img src={require('./img/step6.png').default} alt="step6" width="75%" />

#### Refer [Appendix B for Disable Rollback](#appendix---a--one-click-downgrade)

The following screen appears during the upgrade. Afterward, try out Prophecy's new features.

<img src={require('./img/step7.png').default} alt="step7" width="75%" />

### One-Click Upgrade on Dark Clusters (not connected to internet)

- These clusters do not have access to the internet, so the list of released versions is not accessible.
- The Version list would be empty; just enter the release number in the `Version` Text box and trigger the `Upgrade`
- We package the helm charts with Prophecy Athena Service, not to be confused with AWS Athena.
  1. Helm charts are basically the next package to which to be upgraded.

### Appendix - A | One-Click Downgrade

---

1. If there is an upgrade failure, one option is to downgrade to the previous version.
   1. If the desired downgrade version is recent, select from the Version drop-down options.
   2. Else manually enter the version

:::caution

Although the downgrade button is available, we recommend instead asking the Prophecy team for help. Prophecy is frequently rolling out new features and we would love to assist to ensure a smooth transition.
:::

### Appendix - B | Disable Rollback

---

1. In an event of upgrade failure, the rollback to previous stable version will take place.
2. To prevent this rollback from happening, **disable rollback** functionality can be used.
3. Therefore, when Disable Rollback is active, the upgrade failure would not result in rollback to previous stable version

:::warning
Disabling rollback is **not** recommended. This functionality is mainly for troubleshooting purposes by the Prophecy team.
:::
