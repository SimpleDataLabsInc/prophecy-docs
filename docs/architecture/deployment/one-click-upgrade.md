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
2. The platform will be upgraded to the released selected and chosen for an upgrade without any hassle of communicating over calls or emails
3. For One-Click Upgrade, the prophecy IDE user should be an Admin user

## Benefits of this new solution

1. This whole process is a self-served process and can be carried on by customers by themselves or reach out to us at support@prophecy.io if you need assistance.
3. No sophisticated tools, like Helm, kubectl, etc., are required anymore for the upgrade
4. No Kubernetes access is necessary for the upgrade

## How to do it?

One-Click Upgrade follows slightly different steps based on the type of Prophecy clusters:

1. **Non-Dark Cluster** - The Kubernetes cluster where Prophecy backend is running, has access to Prophecy Helm Repository
   1. Here, Prophecy pulls the update from the [Prophecy Helm Repository](https://prophecy-chart.s3.us-west-2.amazonaws.com/)
   2. [One-Click Upgrade on Non-Dark Cluster (connected to internet)](#one-click-upgrade-on-non-dark-cluster-connected-to-internet)
2. **Dark Cluster** -  The Kubernetes cluster where Prophecy backend is running, does not have access to [Prophecy Helm Repository](https://prophecy-chart.s3.us-west-2.amazonaws.com/)
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
    * This opens a tabular structure, with a list of users and when were those created in the system
    * On the right top corner of this table, you’ll find the button “Upgrade Version”
    * Click on “Upgrade Version”

<img src={require('./img/step2.png').default} alt="step2" width="95%" />


#### Step 3: Load the “Upgrade Version” pop-up

1. On clicking the “Upgrade Version”, a pop-up will appear on the screen
2. The pop-up contains a text box “Version”

<img src={require('./img/step3.png').default} alt="step3" width="75%" />


#### Step 4: Select from the list of versions releases

1. On clicking upon the inside of the “Version” text box, the user will see the list of releases from the last release the customer is on currently to the latest release deployed by Prophecy.
2. Refer to the image below

<img src={require('./img/step4.png').default} alt="step4" width="75%" />


#### Step 5: Select the version user wants to upgrade to

1. Select the version user wants to platform to be upgraded to
2. Since prophecy can connect to URL
3. Since Prophecy can connect to its Helm repository, we’ll get list of all versions that are available in the drop-down

<img src={require('./img/step5.png').default} alt="step5" width="75%" />


#### Step 6: Click on Upgrade

1. Since it is a non-dark cluster, the selected package is retrieved from Prophecy’s Helm repository
2. Click on Upgrade

<img src={require('./img/step6.png').default} alt="step6" width="75%" />


#### Refer [Appendix B for Disable Rollback](#appendix---a--one-click-downgrade)

On clicking Upgrade, the customer will get to see the following screen

<img src={require('./img/step7.png').default} alt="step7" width="75%" />


### One-Click Upgrade on Dark Clusters (not connected to internet)

* These clusters do not have access to the internet, hence users can’t see what all versions are released.
* In this case, the Version list would be empty
    1. hence, the user can manually put the release number in the “Version” Text box and can trigger the “Upgrade”
* We package the helm charts with one Prophecy service, named Athena, not to be confused with AWS Athena.
    1. Helm charts are basically the next package to which to be upgraded.

    
### Appendix - A | One-Click Downgrade

---

1. Consider a scenario wherein the version selected for upgrade is not stable or say the latest released version has some build verification test failure, that results into the upgrade failure
* Now, the user would want to downgrade to the previous version
    1. If the version to which the user wants to downgrade is among the latest version, they can select from the Version drop-down options.
    2. Else, for the older version they need to manually enter the version

Note:

1. We do not recommend and expect the user to downgrade without asking the Prophecy Cloud team, as things might not be backward compatible and the environment may become unstable.


### Appendix - B | Disable Rollback

---

1. In an event of upgrade failure, the rollback to previous stable version will take place.
2. To prevent this rollback from happening, **disable rollback** functionality can be used.
3. Therefore, when Disable Rollback is active, the upgrade failure would not result in rollback to previous stable version

Note:

1. Though exposed to customer, it is **not** recommended for them to use Disable Rollback. This functionality is mainly for debugging purposes to reproduce the failure scenario and to analyze the root cause for the upgrade failure by the Prophecy team.
