"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[75707],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),m=l(r),g=a,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return r?n.createElement(d,i(i({ref:t},y),{},{components:r})):n.createElement(d,i({ref:t},y))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},63437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={title:"Use a custom artifact repository (Sparkedge)",id:"configure-sparkedge",description:"Connect to private artifact repositories or mirrors",sidebar_position:5,sidebar_label:"Custom artifact repository",tags:["sparkedge","mirror","artifact repository","artifactory","custom","private","jfrog","library"]},i=void 0,p={unversionedId:"administration/self-hosted/configure-sparkedge",id:"administration/self-hosted/configure-sparkedge",title:"Use a custom artifact repository (Sparkedge)",description:"Connect to private artifact repositories or mirrors",source:"@site/docs/administration/self-hosted/configure-sparkedge.md",sourceDirName:"administration/self-hosted",slug:"/administration/self-hosted/configure-sparkedge",permalink:"/administration/self-hosted/configure-sparkedge",draft:!1,tags:[{label:"sparkedge",permalink:"/tags/sparkedge"},{label:"mirror",permalink:"/tags/mirror"},{label:"artifact repository",permalink:"/tags/artifact-repository"},{label:"artifactory",permalink:"/tags/artifactory"},{label:"custom",permalink:"/tags/custom"},{label:"private",permalink:"/tags/private"},{label:"jfrog",permalink:"/tags/jfrog"},{label:"library",permalink:"/tags/library"}],version:"current",sidebarPosition:5,frontMatter:{title:"Use a custom artifact repository (Sparkedge)",id:"configure-sparkedge",description:"Connect to private artifact repositories or mirrors",sidebar_position:5,sidebar_label:"Custom artifact repository",tags:["sparkedge","mirror","artifact repository","artifactory","custom","private","jfrog","library"]},sidebar:"adminSidebar",previous:{title:"Upgrades and backups",permalink:"/administration/self-hosted/upgrade-backup-restore"},next:{title:"Resource monitoring",permalink:"/administration/self-hosted/resource-monitoring"}},s={},l=[{value:"Requirements",id:"requirements",level:3},{value:"Maven",id:"maven",level:2},{value:"Ivy",id:"ivy",level:2},{value:"PyPI",id:"pypi",level:2},{value:"Proxy configuration (optional)",id:"proxy-configuration-optional",level:2}],y={toc:l},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This page outlines how to configure the Sparkedge pod to use a private Maven or PyPI artifact repository (mirror)."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Sparkedge is responsible for actions like running unit tests, building Gem packages with custom Gems, and installing Pipeline dependencies in sandboxes.")),(0,a.yg)("h3",{id:"requirements"},"Requirements"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Condition")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Action Required")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Using a custom artifactory for hosting Scala packages"),(0,a.yg)("td",{parentName:"tr",align:null},"Update both ",(0,a.yg)("strong",{parentName:"td"},"Maven")," and ",(0,a.yg)("strong",{parentName:"td"},"Ivy")," settings")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Working on PySpark projects and using a custom PyPI mirror"),(0,a.yg)("td",{parentName:"tr",align:null},"Update ",(0,a.yg)("strong",{parentName:"td"},"PyPI")," settings")))),(0,a.yg)("h2",{id:"maven"},"Maven"),(0,a.yg)("p",null,"To configure custom artifact repository for Maven in Sparkedge, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Either create or locate the settings.xml file to hold the Maven configuration."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Example settings.xml"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">\n   <servers>\n      <server>\n            <id>prophecy-repository</id>\n            <username>${env.ARTIFACTORY_USERNAME}</username>\n            <password>${env.ARTIFACTORY_PASSWORD}</password>\n      </server>\n      <server>\n            <id>release-http-unblocker</id>\n            <username>${env.ARTIFACTORY_USERNAME}</username>\n            <password>${env.ARTIFACTORY_PASSWORD}</password>\n      </server>\n   </servers>\n   <profiles>\n      <profile>\n            <id>maven-https</id>\n            <activation>\n               <activeByDefault>true</activeByDefault>\n            </activation>\n            <properties>\n               <altDeploymentRepository>prophecy-repository::default::http://artifactory:8081/artifactory/repository/maven-internal/</altDeploymentRepository>\n            </properties>\n            <repositories>\n               <repository>\n                  <id>central1</id>\n                  <url>https://your.private-mirror.com/artifactory/maven-external/</url>\n                  <snapshots>\n                        <enabled>false</enabled>\n                  </snapshots>\n                  <releases>\n                        <updatePolicy>always</updatePolicy>\n                  </releases>\n               </repository>\n               <repository>\n                  <id>oss1-staging-repo</id>\n                  <name>oss1-staging-repository</name>\n                  <url>https://s01.oss.sonatype.org/content/groups/staging//</url>\n                  <releases>\n                        <updatePolicy>always</updatePolicy>\n                  </releases>\n               </repository>\n               <repository>\n                  <id>prophecy-internal-repo</id>\n                  <name>prophecy-repository</name>\n                  <url>http://artifactory:8081/artifactory/repository/maven-internal/</url>\n                  <releases>\n                        <updatePolicy>always</updatePolicy>\n                  </releases>\n               </repository>\n            </repositories>\n            <pluginRepositories>\n               <pluginRepository>\n                  <id>central1</id>\n                  <url>https://your.private-mirror.com/artifactory/maven-external/</url>\n                  <snapshots>\n                        <enabled>false</enabled>\n                  </snapshots>\n               </pluginRepository>\n            </pluginRepositories>\n      </profile>\n   </profiles>\n   <mirrors>\n      <mirror>\n            <id>release-http-unblocker</id>\n            <mirrorOf>prophecy-internal-repo</mirrorOf>\n            <name>prophecy-repository</name>\n            <url>http://artifactory:8081/artifactory/repository/maven-internal/</url>\n      </mirror>\n   </mirrors>\n</settings>\n')))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If you want to modify the existing file, you can retrieve it from the Sparkedge pod using the following command:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"kubectl cp -n <namespace> <sparkedgepod>:/opt/docker/apache-maven-3.9.6/conf/settings.xml settings.xml\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Edit the settings.xml file to include the details of your custom artifact repository.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run the following to create a Kubernetes secret:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"kubectl create secret generic <secretname>-maven --from-file=settings.xml -n <namespace>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl edit prophecycluster -n <namespace>")," to edit the prophecycluster YAML.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the editor, add the following under ",(0,a.yg)("inlineCode",{parentName:"p"},"sparkedge"),":"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"external-repo:\n   overwrite-maven-settings: true\n   maven-settings-secret: <maven-secret-name>\n   maven-settings-path: /home/demiourgos728/.m2/settings.xml\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Save and exit the editor.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Validate the settings.xml file inside the Sparkedge pod by running:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"kubectl -n <namespace> exec <sparkedgepod name> -- cat /home/demiourgos728/.m2/settings.xml\n")))),(0,a.yg)("h2",{id:"ivy"},"Ivy"),(0,a.yg)("p",null,"For custom Maven repository access in Ivy, use the following steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a new ivysettings.xml file that contains your custom repository credentials and resolver configuration. The file ",(0,a.yg)("strong",{parentName:"p"},"must")," be named ivysettings.xml. Example:"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Example ivysettings.xml"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'<ivysettings>\n   <settings defaultResolver="default"/>\n   <credentials>\n      <credential host="https://your.private-mirror.com/artifactory/maven-external/"\n                  realm="Your Realm" username="your-username" passwd="your-password"/>\n   </credentials>\n   <resolvers>\n      <ibiblio name="custom-artifactory" m2compatible="true"\n               root="https://your.private-mirror.com/artifactory/maven-external/"/>\n      <ibiblio name="central" m2compatible="true"/>\n      <chain name="default">\n            <resolver ref="custom-artifactory"/>\n      </chain>\n   </resolvers>\n</ivysettings>\n')))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a Kubernetes secret for your ivysettings.xml file:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"kubectl create secret generic <secretname>-ivy --from-file=ivysettings.xml -n <namespace>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl edit prophecycluster -n <namespace>")," to edit the prophecycluster YAML.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the editor, add the following under ",(0,a.yg)("inlineCode",{parentName:"p"},"sparkedge"),":"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"external-repo:\n   overwrite-ivy-settings: true\n   ivy-settings-path: /app/.m2/ivysettings.xml\n   ivy-settings-secret: <ivy-secret-name>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Save and exit the editor.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"To ensure the ivysettings.xml file persists across restarts, copy it to the persistent volume:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"kubectl -n <namespace> cp ./ivysettings.xml <sparkedge_pod_name>:/app/.m2/ivysettings.xml\n")))),(0,a.yg)("h2",{id:"pypi"},"PyPI"),(0,a.yg)("p",null,"To configure PyPI for custom artifact repository in Sparkedge, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"First, create a pip.conf file and define the custom PyPI repository. The file ",(0,a.yg)("strong",{parentName:"p"},"must")," be named pip.conf."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Example pip.conf"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"[global]\nindex-url=https://yourcompany.com/artifactory/api/pypi/pypi/simple\n")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run the following to create a Kubernetes secret:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"kubectl create secret generic <secretname>-pypi --from-file=pip.conf -n <namespace>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl edit prophecycluster -n <namespace>")," to edit the prophecycluster YAML.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the editor, add the following under ",(0,a.yg)("inlineCode",{parentName:"p"},"sparkedge"),":"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"external-repo:\n   overwrite-pypi-settings: true\n   pypi-settings-secret: <pip-secret-name>\n   pypi-settings-path: /etc/pip.conf\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Save and exit the editor.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Verify that your custom PyPI configuration has been applied:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"kubectl -n <namespace> exec <sparkedgepod name> -- cat /etc/pip.conf\n")))),(0,a.yg)("h2",{id:"proxy-configuration-optional"},"Proxy configuration (optional)"),(0,a.yg)("p",null,"If your Maven repositories are behind a proxy, you\u2019ll need to add proxy settings to your settings.xml file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<proxies>\n  <proxy>\n    <id>httpproxy</id>\n    <active>true</active>\n    <protocol>http</protocol>\n    <host>your-proxy-host</host>\n    <port>your-proxy-port</port>\n    <nonProxyHosts>local.net|some.host.com</nonProxyHosts>\n  </proxy>\n  <proxy>\n    <id>httpsproxy</id>\n    <active>true</active>\n    <protocol>https</protocol>\n    <host>your-proxy-host</host>\n    <port>your-proxy-port</port>\n    <nonProxyHosts>local.net|some.host.com</nonProxyHosts>\n  </proxy>\n</proxies>\n")))}c.isMDXComponent=!0}}]);