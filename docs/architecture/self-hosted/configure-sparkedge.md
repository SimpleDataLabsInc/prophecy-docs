---
title: Configure custom library access for Sparkedge pods
id: configure-sparkedge
description: Connect to private repositories or mirrors
sidebar_position: 5
sidebar_label: Custom library access
tags:
  - sparkedge
---

import TOCInline from '@theme/TOCInline';

Learn how to configure custom library access in Sparkedge pods using Maven, PyPI, and Ivy configurations. This is necessary when you want to connect your development environment to private repositories or mirrors.

Navigate to the section that corresponds to your use case:

<TOCInline toc={toc} maxHeadingLevel={2} />

## Maven configuration

To configure custom library access for Maven in Sparkedge, follow these steps:

1. Either create or locate the settings.xml file to hold the Maven configuration.
1. If you want to modify the existing file, you can retrieve it from the Sparkedge pod using the following command:

   ```
   kubectl cp -n <namespace> <sparkedgepod>:/opt/docker/apache-maven-3.9.6/conf/settings.xml settings.xml
   ```

1. Edit the settings.xml file to include the details of your custom library repository.
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

To configure PyPI for custom library access in Sparkedge, follow these steps:

1. First, create a pip.conf file and define the custom PyPI repository. The file **must** be named pip.conf. Example:

   ```
   [global]
   index-url=https://yourcompany.com/library/api/pypi/pypi/simple
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
           <credential host="https://your.private-mirror.com/library/maven-external/"
                       realm="Your Realm" username="your-username" passwd="your-password"/>
       </credentials>
       <resolvers>
           <ibiblio name="custom-library" m2compatible="true"
                    root="https://your.private-mirror.com/library/maven-external/"/>
           <ibiblio name="central" m2compatible="true"/>
           <chain name="default">
               <resolver ref="custom-library"/>
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

## Proxy configuration

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
