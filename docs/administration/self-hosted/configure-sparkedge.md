---
title: Use a custom artifact repository (Sparkedge)
id: configure-sparkedge
description: Connect to private artifact repositories or mirrors
sidebar_position: 5
sidebar_label: Custom artifact repository
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

This page outlines how to configure the Sparkedge pod to use a private Maven or PyPI artifact repository (mirror).

:::tip
Sparkedge is responsible for actions like running unit tests, building Gem packages with custom Gems, and installing Pipeline dependencies in sandboxes.
:::

### Requirements

| **Condition**                                              | **Action Required**                        |
| ---------------------------------------------------------- | ------------------------------------------ |
| Using a custom artifactory for hosting Scala packages      | Update both **Maven** and **Ivy** settings |
| Working on PySpark projects and using a custom PyPI mirror | Update **PyPI** settings                   |

## Maven

To configure custom artifact repository for Maven in Sparkedge, follow these steps:

1. Either create or locate the settings.xml file to hold the Maven configuration.

   <details>

     <summary>Example settings.xml</summary>

   ```
   <?xml version="1.0" encoding="UTF-8"?>
   <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
      <servers>
         <server>
               <id>prophecy-repository</id>
               <username>${env.ARTIFACTORY_USERNAME}</username>
               <password>${env.ARTIFACTORY_PASSWORD}</password>
         </server>
         <server>
               <id>release-http-unblocker</id>
               <username>${env.ARTIFACTORY_USERNAME}</username>
               <password>${env.ARTIFACTORY_PASSWORD}</password>
         </server>
      </servers>
      <profiles>
         <profile>
               <id>maven-https</id>
               <activation>
                  <activeByDefault>true</activeByDefault>
               </activation>
               <properties>
                  <altDeploymentRepository>prophecy-repository::default::http://artifactory:8081/artifactory/repository/maven-internal/</altDeploymentRepository>
               </properties>
               <repositories>
                  <repository>
                     <id>central1</id>
                     <url>https://your.private-mirror.com/artifactory/maven-external/</url>
                     <snapshots>
                           <enabled>false</enabled>
                     </snapshots>
                     <releases>
                           <updatePolicy>always</updatePolicy>
                     </releases>
                  </repository>
                  <repository>
                     <id>oss1-staging-repo</id>
                     <name>oss1-staging-repository</name>
                     <url>https://s01.oss.sonatype.org/content/groups/staging//</url>
                     <releases>
                           <updatePolicy>always</updatePolicy>
                     </releases>
                  </repository>
                  <repository>
                     <id>prophecy-internal-repo</id>
                     <name>prophecy-repository</name>
                     <url>http://artifactory:8081/artifactory/repository/maven-internal/</url>
                     <releases>
                           <updatePolicy>always</updatePolicy>
                     </releases>
                  </repository>
               </repositories>
               <pluginRepositories>
                  <pluginRepository>
                     <id>central1</id>
                     <url>https://your.private-mirror.com/artifactory/maven-external/</url>
                     <snapshots>
                           <enabled>false</enabled>
                     </snapshots>
                  </pluginRepository>
               </pluginRepositories>
         </profile>
      </profiles>
      <mirrors>
         <mirror>
               <id>release-http-unblocker</id>
               <mirrorOf>prophecy-internal-repo</mirrorOf>
               <name>prophecy-repository</name>
               <url>http://artifactory:8081/artifactory/repository/maven-internal/</url>
         </mirror>
      </mirrors>
   </settings>
   ```

   </details>

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
      maven-settings-secret: <maven-secret-name>
      maven-settings-path: /home/demiourgos728/.m2/settings.xml
   ```

1. Save and exit the editor.
1. Validate the settings.xml file inside the Sparkedge pod by running:

   ```
   kubectl -n <namespace> exec <sparkedgepod name> -- cat /home/demiourgos728/.m2/settings.xml
   ```

## Ivy

For custom Maven repository access in Ivy, use the following steps:

1. Create a new ivysettings.xml file that contains your custom repository credentials and resolver configuration. The file **must** be named ivysettings.xml. Example:

   <details>
      <summary>Example ivysettings.xml</summary>

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

   </details>

1. Create a Kubernetes secret for your ivysettings.xml file:

   ```
   kubectl create secret generic <secretname>-ivy --from-file=ivysettings.xml -n <namespace>
   ```

1. Run `kubectl edit prophecycluster -n <namespace>` to edit the prophecycluster YAML.
1. In the editor, add the following under `sparkedge`:

   ```
   external-repo:
      overwrite-ivy-settings: true
      ivy-settings-path: /app/.m2/ivysettings.xml
      ivy-settings-secret: <ivy-secret-name>
   ```

1. Save and exit the editor.
1. To ensure the ivysettings.xml file persists across restarts, copy it to the persistent volume:

   ```
   kubectl -n <namespace> cp ./ivysettings.xml <sparkedge_pod_name>:/app/.m2/ivysettings.xml
   ```

## PyPI

To configure PyPI for custom artifact repository in Sparkedge, follow these steps:

1. First, create a pip.conf file and define the custom PyPI repository. The file **must** be named pip.conf.

   <details>
      <summary>Example pip.conf</summary>

   ```
   [global]
   index-url=https://yourcompany.com/artifactory/api/pypi/pypi/simple
   ```

   </details>

1. Run the following to create a Kubernetes secret:

   ```
   kubectl create secret generic <secretname>-pypi --from-file=pip.conf -n <namespace>
   ```

1. Run `kubectl edit prophecycluster -n <namespace>` to edit the prophecycluster YAML.
1. In the editor, add the following under `sparkedge`:

   ```
   external-repo:
      overwrite-pypi-settings: true
      pypi-settings-secret: <pip-secret-name>
      pypi-settings-path: /etc/pip.conf
   ```

1. Save and exit the editor.
1. Verify that your custom PyPI configuration has been applied:

   ```
   kubectl -n <namespace> exec <sparkedgepod name> -- cat /etc/pip.conf
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
