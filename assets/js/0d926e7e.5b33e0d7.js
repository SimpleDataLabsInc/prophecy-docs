"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[87725],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),y=r,s=c["".concat(g,".").concat(y)]||c[y]||u[y]||l;return a?n.createElement(s,i(i({ref:t},d),{},{components:a})):n.createElement(s,i({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},15449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={title:"Object Store Configuration",id:"object-store-config",description:"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.",sidebar_position:5,tags:["object store","configuration","disaster recovery","AWS","s3","azure blob","NFS","GCP","GCS"]},i=void 0,o={unversionedId:"architecture/deployment/private-saas/object-store-config",id:"architecture/deployment/private-saas/object-store-config",title:"Object Store Configuration",description:"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.",source:"@site/docs/architecture/deployment/private-saas/configure-object-store.md",sourceDirName:"architecture/deployment/private-saas",slug:"/architecture/deployment/private-saas/object-store-config",permalink:"/architecture/deployment/private-saas/object-store-config",draft:!1,tags:[{label:"object store",permalink:"/tags/object-store"},{label:"configuration",permalink:"/tags/configuration"},{label:"disaster recovery",permalink:"/tags/disaster-recovery"},{label:"AWS",permalink:"/tags/aws"},{label:"s3",permalink:"/tags/s-3"},{label:"azure blob",permalink:"/tags/azure-blob"},{label:"NFS",permalink:"/tags/nfs"},{label:"GCP",permalink:"/tags/gcp"},{label:"GCS",permalink:"/tags/gcs"}],version:"current",sidebarPosition:5,frontMatter:{title:"Object Store Configuration",id:"object-store-config",description:"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.",sidebar_position:5,tags:["object store","configuration","disaster recovery","AWS","s3","azure blob","NFS","GCP","GCS"]},sidebar:"defaultSidebar",previous:{title:"Backup/Restore Configuration",permalink:"/architecture/deployment/private-saas/backup-restore"},next:{title:"Generate API Key",permalink:"/architecture/deployment/private-saas/generate-api-key"}},g={},p=[{value:"Navigate to the OS config UI",id:"navigate-to-the-os-config-ui",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Generic Configuration Variables",id:"generic-configuration-variables",level:3},{value:"Provider specific configuration",id:"provider-specific-configuration",level:3},{value:"AWS S3",id:"aws-s3",level:4},{value:"Azure Blob Storage",id:"azure-blob-storage",level:4},{value:"GCP Cloud Storage",id:"gcp-cloud-storage",level:4},{value:"Local PV (NFS)",id:"local-pv-nfs",level:4}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Prophecy provides reliable support for storing essential data such as backups and audit logs. However, to enable this functionality, a storage location is required. Prophecy seamlessly integrates with the industry's leading cloud (provider) object stores, including AWS S3, Azure Blob Storage, and GCP Cloud Storage, as well as local persistent volumes (which could be backed by a NFS). This section outlines how to configure these storage options effectively."),(0,r.yg)("h2",{id:"navigate-to-the-os-config-ui"},"Navigate to the OS config UI"),(0,r.yg)("p",null,"To configure object store settings in the Prophecy UI, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Log in to the Prophecy UI as an admin user."),(0,r.yg)("li",{parentName:"ol"},"Click on the ",(0,r.yg)("inlineCode",{parentName:"li"},"three dots")," at the bottom left corner and select the ",(0,r.yg)("inlineCode",{parentName:"li"},"settings icon")," from the submenu."),(0,r.yg)("li",{parentName:"ol"},"Navigate to the ",(0,r.yg)("inlineCode",{parentName:"li"},"Admin")," main tab."),(0,r.yg)("li",{parentName:"ol"},"Within the Admin main tab, access the ",(0,r.yg)("inlineCode",{parentName:"li"},"Config")," sub tab."),(0,r.yg)("li",{parentName:"ol"},"Finally, click on the ",(0,r.yg)("inlineCode",{parentName:"li"},"objectStoreConfig")," sub tab to configure the object store settings.")),(0,r.yg)("h2",{id:"configuration-options"},"Configuration options"),(0,r.yg)("p",null,"Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"All sensitive keys are displayed in ",(0,r.yg)("inlineCode",{parentName:"p"},"********")," format. However, you may supply the new values in normal text and save the JSON to update the keys.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "aws": {\n    "accessKey": "********",\n    "s3": {\n      "bucketName": "athena-ondemand-backup",\n      "endpoint": "https://s3.us-west-2.amazonaws.com",\n      "forcePathStyle": true,\n      "region": "us-west-2"\n    },\n    "secretKey": "********"\n  },\n  "azure": {\n    "accessKey": "********",\n    "blobStorage": {\n      "accountName": "prophecyathenabackup",\n      "containerName": "athena-ondemand-backup",\n      "serviceURL": "https://prophecyathenabackup.blob.core.windows.net/"\n    },\n    "useManagedIdentityToAuthenticate": false\n  },\n  "cloudProvider": "gcp",\n  "gcp": {\n    "cloudStorage": {\n      "bucketName": "athena-ondemand-backup"\n    },\n    "serviceAccount": "********"\n  },\n  "localLocation": "/backup",\n  "locationType": "gcp-cloud-stoage"\n}\n')),(0,r.yg)("h3",{id:"generic-configuration-variables"},"Generic Configuration Variables"),(0,r.yg)("p",null,"These are the generic configurations which are required to be set irrespective of the provider."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Configuration variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Which provider to use for the object store. Supports ",(0,r.yg)("inlineCode",{parentName:"td"},"local"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"s3"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"azure-blob-storage"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"gcp-cloud-storage")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"local"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with where local backup is done. Is required even for provider based object stores for a temporary location."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))))),(0,r.yg)("h3",{id:"provider-specific-configuration"},"Provider specific configuration"),(0,r.yg)("p",null,"This section outlines there various configurations at each provider level."),(0,r.yg)("h4",{id:"aws-s3"},"AWS S3"),(0,r.yg)("p",null,"For this provider, set ",(0,r.yg)("inlineCode",{parentName:"p"},"locationType")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"s3")," and configure using the following variables:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.s3.bucketName")),(0,r.yg)("td",{parentName:"tr",align:null},"S3 Bucket name"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"athena-ondemand-backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.s3.endpoint")),(0,r.yg)("td",{parentName:"tr",align:null},"S3 Endpoint used to communicate with"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"https://s3.us-west-2.amazonaws.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.s3.forcePathStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"If S3 should use path style for bucket name"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.s3.region")),(0,r.yg)("td",{parentName:"tr",align:null},"S3 Region"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"us-west-2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.accessKey")),(0,r.yg)("td",{parentName:"tr",align:null},"AWS Access key with the required privileges"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.secretKey")),(0,r.yg)("td",{parentName:"tr",align:null},"AWS Secret key with the required privileges"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to AWS S3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3"))))),(0,r.yg)("h4",{id:"azure-blob-storage"},"Azure Blob Storage"),(0,r.yg)("p",null,"For this provider, set ",(0,r.yg)("inlineCode",{parentName:"p"},"locationType")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"azure-blob-storage")," and configure using the following variables:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.blobStorage.accountName")),(0,r.yg)("td",{parentName:"tr",align:null},"Storage Account name"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"prophecyathenabackup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.blobStorage.serviceURL")),(0,r.yg)("td",{parentName:"tr",align:null},"Storage Account Service URL"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"https://prophecyathenabackup.blob.core.windows.net/"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.blobStorage.containerName")),(0,r.yg)("td",{parentName:"tr",align:null},"Container name within the Storage Account"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"athena-ondemand-backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.useManagedIdentityToAuthenticate")),(0,r.yg)("td",{parentName:"tr",align:null},"Wheather to use system managed identity (role) to authenticate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure.accessKey")),(0,r.yg)("td",{parentName:"tr",align:null},"Storage Access key"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to Azure Blob Storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"azure-blob-storage"))))),(0,r.yg)("h4",{id:"gcp-cloud-storage"},"GCP Cloud Storage"),(0,r.yg)("p",null,"For this provider, set ",(0,r.yg)("inlineCode",{parentName:"p"},"locationType")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"gcp-cloud-storage")," and configure using the following variables:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcp.serviceAccount")),(0,r.yg)("td",{parentName:"tr",align:null},"Is the GCP Service Account in Base64 Encoded format with the required privileges"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcp.cloudStorage.bucketName")),(0,r.yg)("td",{parentName:"tr",align:null},"Container name within the Storage Account"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"athena-ondemand-backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to GCP Cloud Storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcp-cloud-storage"))))),(0,r.yg)("h4",{id:"local-pv-nfs"},"Local PV (NFS)"),(0,r.yg)("p",null,"As this utilizes the local persistent volumes (PVs) offered by Kubernetes, no extra configuration is needed. All backups are stored directly on the disk, which can be supported by protocols such as NFS."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"localLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"Any PVC Mount point with storage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/backup"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"locationType")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to local"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"local"))))))}u.isMDXComponent=!0}}]);