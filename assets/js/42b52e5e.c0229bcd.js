"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[78659],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,g=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,y=u["".concat(g,".").concat(c)]||u[c]||s[c]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={title:"Object Store Configuration",id:"configure-object-store",description:"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.",sidebar_position:5,tags:["object store","configuration","disaster recovery","AWS","s3","azure blob","NFS","GCP","GCS"]},i=void 0,l={unversionedId:"administration/self-hosted/configurations/configure-object-store",id:"administration/self-hosted/configurations/configure-object-store",title:"Object Store Configuration",description:"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.",source:"@site/docs/administration/self-hosted/configurations/configure-object-store.md",sourceDirName:"administration/self-hosted/configurations",slug:"/administration/self-hosted/configurations/configure-object-store",permalink:"/administration/self-hosted/configurations/configure-object-store",draft:!1,tags:[{label:"object store",permalink:"/tags/object-store"},{label:"configuration",permalink:"/tags/configuration"},{label:"disaster recovery",permalink:"/tags/disaster-recovery"},{label:"AWS",permalink:"/tags/aws"},{label:"s3",permalink:"/tags/s-3"},{label:"azure blob",permalink:"/tags/azure-blob"},{label:"NFS",permalink:"/tags/nfs"},{label:"GCP",permalink:"/tags/gcp"},{label:"GCS",permalink:"/tags/gcs"}],version:"current",sidebarPosition:5,frontMatter:{title:"Object Store Configuration",id:"configure-object-store",description:"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.",sidebar_position:5,tags:["object store","configuration","disaster recovery","AWS","s3","azure blob","NFS","GCP","GCS"]},sidebar:"adminSidebar",previous:{title:"Audit Events Configuration",permalink:"/administration/self-hosted/configurations/configure-audit-logs"},next:{title:"Sandbox Configuration",permalink:"/administration/self-hosted/configurations/sandbox-configuration"}},g={},p=[{value:"Edit Object Store Configurations",id:"edit-object-store-configurations",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Generic Configuration Variables",id:"generic-configuration-variables",level:3},{value:"Provider specific configuration",id:"provider-specific-configuration",level:3},{value:"AWS S3",id:"aws-s3",level:4},{value:"Azure Blob Storage",id:"azure-blob-storage",level:4},{value:"GCP Cloud Storage",id:"gcp-cloud-storage",level:4},{value:"Local PV (NFS)",id:"local-pv-nfs",level:4}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Prophecy supports storing essential data, including backups and audit logs, by integrating with cloud object stores like AWS S3, Azure Blob Storage, GCP Cloud Storage, and local persistent volumes (e.g., NFS-backed). This section explains how to configure these storage options."),(0,r.yg)("h2",{id:"edit-object-store-configurations"},"Edit Object Store Configurations"),(0,r.yg)("p",null,"To edit object store configurations in Prophecy, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Log in to Prophecy as an admin user."),(0,r.yg)("li",{parentName:"ol"},"Navigate to the ",(0,r.yg)("strong",{parentName:"li"},"Admin")," tab of the Prophecy ",(0,r.yg)("strong",{parentName:"li"},"Settings")," page."),(0,r.yg)("li",{parentName:"ol"},"Within the Admin main tab, select the ",(0,r.yg)("strong",{parentName:"li"},"Config")," subtab."),(0,r.yg)("li",{parentName:"ol"},"Finally, click on the ",(0,r.yg)("strong",{parentName:"li"},"Object Store Config")," subtab to configure the object store settings.")),(0,r.yg)("h2",{id:"configuration-options"},"Configuration options"),(0,r.yg)("p",null,"Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"All sensitive keys are displayed in ",(0,r.yg)("inlineCode",{parentName:"p"},"********")," format. However, you may supply the new values in normal text and save the JSON to update the keys.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "aws": {\n    "accessKey": "********",\n    "s3": {\n      "bucketName": "athena-ondemand-backup",\n      "endpoint": "https://s3.us-west-2.amazonaws.com",\n      "forcePathStyle": true,\n      "region": "us-west-2"\n    },\n    "secretKey": "********"\n  },\n  "azure": {\n    "accessKey": "********",\n    "blobStorage": {\n      "accountName": "prophecyathenabackup",\n      "containerName": "athena-ondemand-backup",\n      "serviceURL": "https://prophecyathenabackup.blob.core.windows.net/"\n    },\n    "useManagedIdentityToAuthenticate": false\n  },\n  "cloudProvider": "gcp",\n  "gcp": {\n    "cloudStorage": {\n      "bucketName": "athena-ondemand-backup"\n    },\n    "serviceAccount": "********"\n  },\n  "localLocation": "/backup",\n  "locationType": "gcp-cloud-stoage"\n}\n')),(0,r.yg)("h3",{id:"generic-configuration-variables"},"Generic Configuration Variables"),(0,r.yg)("p",null,"These are the generic configurations which are required to be set irrespective of the provider."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Configuration variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Which provider to use for the object store. Supports ",(0,r.yg)("inlineCode",{parentName:"td"},"local"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"s3"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"azure-blob-storage"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"gcp-cloud-storage")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"local"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with where local backup is done. Is required even for provider based object stores for a temporary location."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))))),(0,r.yg)("h3",{id:"provider-specific-configuration"},"Provider specific configuration"),(0,r.yg)("p",null,"This section outlines there various configurations at each provider level."),(0,r.yg)("h4",{id:"aws-s3"},"AWS S3"),(0,r.yg)("p",null,"For this provider, set ",(0,r.yg)("inlineCode",{parentName:"p"},"locationType")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"s3")," and configure using the following variables:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.s3.bucketName")),(0,r.yg)("td",{parentName:"tr",align:null},"S3 Bucket name"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"athena-ondemand-backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.s3.endpoint")),(0,r.yg)("td",{parentName:"tr",align:null},"S3 Endpoint used to communicate with"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"https://s3.us-west-2.amazonaws.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.s3.forcePathStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"If S3 should use path style for bucket name"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.s3.region")),(0,r.yg)("td",{parentName:"tr",align:null},"S3 Region"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"us-west-2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.accessKey")),(0,r.yg)("td",{parentName:"tr",align:null},"AWS Access key with the required privileges"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.secretKey")),(0,r.yg)("td",{parentName:"tr",align:null},"AWS Secret key with the required privileges"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to AWS S3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3"))))),(0,r.yg)("h4",{id:"azure-blob-storage"},"Azure Blob Storage"),(0,r.yg)("p",null,"For this provider, set ",(0,r.yg)("inlineCode",{parentName:"p"},"locationType")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"azure-blob-storage")," and configure using the following variables:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.blobStorage.accountName")),(0,r.yg)("td",{parentName:"tr",align:null},"Storage Account name"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"prophecyathenabackup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.blobStorage.serviceURL")),(0,r.yg)("td",{parentName:"tr",align:null},"Storage Account Service URL"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"https://prophecyathenabackup.blob.core.windows.net/"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.blobStorage.containerName")),(0,r.yg)("td",{parentName:"tr",align:null},"Container name within the Storage Account"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"athena-ondemand-backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.useManagedIdentityToAuthenticate")),(0,r.yg)("td",{parentName:"tr",align:null},"Wheather to use system managed identity (role) to authenticate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.accessKey")),(0,r.yg)("td",{parentName:"tr",align:null},"Storage Access key"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to Azure Blob Storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure-blob-storage"))))),(0,r.yg)("h4",{id:"gcp-cloud-storage"},"GCP Cloud Storage"),(0,r.yg)("p",null,"For this provider, set ",(0,r.yg)("inlineCode",{parentName:"p"},"locationType")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"gcp-cloud-storage")," and configure using the following variables:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcp.serviceAccount")),(0,r.yg)("td",{parentName:"tr",align:null},"Is the GCP Service Account in Base64 Encoded format with the required privileges"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcp.cloudStorage.bucketName")),(0,r.yg)("td",{parentName:"tr",align:null},"Container name within the Storage Account"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"athena-ondemand-backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to GCP Cloud Storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcp-cloud-storage"))))),(0,r.yg)("h4",{id:"local-pv-nfs"},"Local PV (NFS)"),(0,r.yg)("p",null,"As this utilizes the local persistent volumes (PVs) offered by Kubernetes, no extra configuration is needed. All backups are stored directly on the disk, which can be supported by protocols such as NFS."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to local"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"local"))))))}s.isMDXComponent=!0}}]);