---
title: Configure a Custom Artifact Repository (Sparkedge)
id: configure-sparkedge
description: Connect to private artifact repositories or mirrors
sidebar_position: 5
sidebar_label: Custom Artifact Repository
tags:
  - sparkedge
  - mirror
  - artifact repository
  - artifactory
  - custom
  - private
  - jfrog
  - library
---

import TOCInline from '@theme/TOCInline';

Learn how to configure the Sparkedge pod to use a private Maven or Pypi artifact repository (mirror). This is necessary when you want to connect your development environment to private repositories or mirrors.

:::tip
Sparkedge is responsible for actions like running unit tests, building Gem packages with custom Gems, and installing Pipeline dependencies in sandboxes.
:::

## Maven configuration

To configure custom artifact repository for Maven in Sparkedge, follow these steps:

1. Either create or locate the settings.xml file to hold the Maven configuration.
1. If you want to modify the existing file, you can retrieve it from the Sparkedge pod using the following command:

   ```
   kubectl cp -n <namespace> <sparkedgepod>:/opt/docker/apache-maven-3.9.6/conf/settings.xml settings.xml
   ```

1. Edit the settings.xml file to include the details of your custom artifact repository.
1. Run the following to create a Kubernetes secret:

   ```
   kubectl create secret generic <secretname>-maven --from-file=settings.xml -n <namespace>
   ```

1. Run `kubectl edit prophecycluster -n <namespace>` to edit the prophecycluster YAML.
1. In the editor, add the following under `sparkedge`:

   ```
   external-repo:
   overwrite-maven-settings: true
   maven-settings-secret: <Name of the maven config secret>
   maven-settings-path: /home/demiourgos728/.m2/settings.xml
   ```

1. Save and exit the editor.
1. Validate the settings.xml file inside the Sparkedge pod by running:

   ```
   kubectl -n <namespace> exec <sparkedgepod name> -- cat /home/demiourgos728/.m2/settings.xml
   ```

## PyPI configuration

To configure PyPI for custom artifact repository in Sparkedge, follow these steps:

1. First, create a pip.conf file and define the custom PyPI repository. The file **must** be named pip.conf. Example:

   ```
   [global]
   index-url=https://yourcompany.com/artifactory/api/pypi/pypi/simple
   ```

1. Run the following to create a Kubernetes secret:

   ```
   kubectl create secret generic <secretname>-pypi --from-file=pip.conf -n <namespace>
   ```

1. Run `kubectl edit prophecycluster -n <namespace>` to edit the prophecycluster YAML.
1. In the editor, add the following under `sparkedge`:

   ```
   external-repo:
   overwrite-pypi-settings: true
   pypi-settings-secret: <Name of the pypi config secret>
   pypi-settings-path: /etc/pip.conf
   ```

1. Save and exit the editor.
1. Verify that your custom PyPI configuration has been applied:

   ```
   kubectl -n <namespace> exec <sparkedgepod name> -- cat /etc/pip.conf
   ```

## Ivy configuration

For custom Maven repository access in Ivy, use the following steps:

1. Create a new ivysettings.xml file that contains your custom repository credentials and resolver configuration. The file **must** be named ivysettings.xml. Example:

   ```
   <ivysettings>
       <settings defaultResolver="default"/>
       <credentials>
           <credential host="https://your.private-mirror.com/artifactory/maven-external/"
                       realm="Your Realm" username="your-username" passwd="your-password"/>
       </credentials>
       <resolvers>
           <ibiblio name="custom-artifactory" m2compatible="true"
                    root="https://your.private-mirror.com/artifactory/maven-external/"/>
           <ibiblio name="central" m2compatible="true"/>
           <chain name="default">
               <resolver ref="custom-artifactory"/>
           </chain>
       </resolvers>
   </ivysettings>
   ```

1. Create a Kubernetes secret for your ivysettings.xml file:

   ```
   kubectl create secret generic <secretname>-ivy --from-file=ivysettings.xml -n <namespace>
   ```

1. To ensure the ivysettings.xml file persists across restarts, copy it to the persistent volume:

   ```
   kubectl -n <namespace> cp ./ivysettings.xml <sparkedge_pod_name>:/app/.m2/ivysettings.xml
   ```

## Proxy configuration (optional)

If your Maven repositories are behind a proxy, you’ll need to add proxy settings to your settings.xml file.

```
<proxies>
  <proxy>
    <id>httpproxy</id>
    <active>true</active>
    <protocol>http</protocol>
    <host>your-proxy-host</host>
    <port>your-proxy-port</port>
    <nonProxyHosts>local.net|some.host.com</nonProxyHosts>
  </proxy>
  <proxy>
    <id>httpsproxy</id>
    <active>true</active>
    <protocol>https</protocol>
    <host>your-proxy-host</host>
    <port>your-proxy-port</port>
    <nonProxyHosts>local.net|some.host.com</nonProxyHosts>
  </proxy>
</proxies>
```
