"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[82872],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),y=p(a),m=r,s=y["".concat(d,".").concat(m)]||y[m]||u[m]||l;return a?n.createElement(s,i(i({ref:t},o),{},{components:a})):n.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var g={};for(var d in t)hasOwnProperty.call(t,d)&&(g[d]=t[d]);g.originalType=e,g[y]="string"==typeof e?e:r,i[1]=g;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={title:"Syncing audit logs from SAAS",id:"audit-logging",description:"Prophecy Audit logs available to be exported in S3",sidebar_position:7,tags:["audit logs","s3"]},i=void 0,g={unversionedId:"metadata/audit-logging",id:"metadata/audit-logging",title:"Syncing audit logs from SAAS",description:"Prophecy Audit logs available to be exported in S3",source:"@site/docs/metadata/configure-audit-logging.md",sourceDirName:"metadata",slug:"/metadata/audit-logging",permalink:"/metadata/audit-logging",draft:!1,tags:[{label:"audit logs",permalink:"/tags/audit-logs"},{label:"s3",permalink:"/tags/s-3"}],version:"current",sidebarPosition:7,frontMatter:{title:"Syncing audit logs from SAAS",id:"audit-logging",description:"Prophecy Audit logs available to be exported in S3",sidebar_position:7,tags:["audit logs","s3"]},sidebar:"defaultSidebar",previous:{title:"Prophecy API",permalink:"/metadata/prophecyAPI"},next:{title:"Pull request templates",permalink:"/metadata/pr-templates"}},d={},p=[{value:"Configure S3 bucket for logs",id:"configure-s3-bucket-for-logs",level:2},{value:"Audit events",id:"audit-events",level:2}],o={toc:p},y="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Prophecy provides access to audit logs of activities performed by Prophecy users, allowing your enterprise to monitor detailed usage patterns.\nThe Prophecy admin can configure a S3 bucket to sync these events from Prophecy to their environment."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This is only available for our SaaS Users only. Also, the initial Setup to enable this would require Manual Effort. Please ",(0,r.yg)("a",{parentName:"p",href:"https://www.prophecy.io/request-a-demo"},"contact us")," to learn more about this in detail.")),(0,r.yg)("p",null,"An empty AWS S3 bucket with read/write permissions is required. Follow the guidelines below to set up the bucket correctly."),(0,r.yg)("h2",{id:"configure-s3-bucket-for-logs"},"Configure S3 bucket for logs"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create the S3 Bucket:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Log in to your AWS account and navigate to the S3 service."),(0,r.yg)("li",{parentName:"ul"},'Click on "Create Bucket" to initiate the bucket creation process.'),(0,r.yg)("li",{parentName:"ul"},"Choose a unique name for your bucket, following the format: ",(0,r.yg)("inlineCode",{parentName:"li"},"prophecy-customer-backend-events-xyz"),", where ",(0,r.yg)("inlineCode",{parentName:"li"},"xyz")," represents your name or any identifier of your choice."),(0,r.yg)("li",{parentName:"ul"},"Select the desired AWS Region for the bucket. Ideally, choose the ",(0,r.yg)("inlineCode",{parentName:"li"},"us-east-1 (N. Virginia)"),". If this region is not available, please inform us which region you selected as it requires additional configuration on our end."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set Object Ownership:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"After creating the bucket, ensure that the object ownership is set to ",(0,r.yg)("inlineCode",{parentName:"li"},"ACLs disabled (recommended)"),". This can be done during or after the bucket creation process."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configuring Bucket Permissions for Prophecy:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Open the newly created bucket in the AWS Management Console."),(0,r.yg)("li",{parentName:"ul"},'Go to the "Permissions" section and locate the "Bucket Policy" tab.'),(0,r.yg)("li",{parentName:"ul"},"Apply the following permissions to allow Prophecy's IAM role to sync S3 objects using AWS DataSync.")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "Version": "2008-10-17",\n  "Statement": [\n    {\n      "Sid": "DataSyncCreateS3LocationAndTaskAccess",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::133450206866:role/AWSDataSyncS3BucketAccessCustomerBackendEventsRole"\n      },\n      "Action": [\n        "s3:GetBucketLocation",\n        "s3:ListBucket",\n        "s3:ListBucketMultipartUploads",\n        "s3:AbortMultipartUpload",\n        "s3:GetObject",\n        "s3:ListMultipartUploadParts",\n        "s3:PutObject",\n        "s3:GetObjectTagging",\n        "s3:PutObjectTagging",\n        "s3:DeleteObject"\n      ],\n      "Resource": [\n        "arn:aws:s3:::prophecy-customer-backend-events-xyz",\n        "arn:aws:s3:::prophecy-customer-backend-events-xyz/*"\n      ]\n    },\n    {\n      "Sid": "DataSyncCreateS3Location",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::133450206866:user/s3access"\n      },\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::prophecy-customer-backend-events-xyz"\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"In the sample above, replace ",(0,r.yg)("inlineCode",{parentName:"p"},"arn:aws:s3:::prophecy-customer-backend-events-xyz")," with the ARN of your destination bucket."),(0,r.yg)("p",null,"Note that we need the Prophecy user principal (",(0,r.yg)("inlineCode",{parentName:"p"},"s3access"),") to be able to create S3 location at Prophecy's account and hence require this role with Sid ",(0,r.yg)("inlineCode",{parentName:"p"},"DataSyncCreateS3Location"),".\nPlease ",(0,r.yg)("a",{parentName:"p",href:"mailto:success@Prophecy.io"},"contact us")," with bucket ARN and region to enable this in your account."),(0,r.yg)("h2",{id:"audit-events"},"Audit events"),(0,r.yg)("p",null,"This table lists events for each Entity/Action along with the Request parameters grouped by the entity."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Prophecy Uses GraphQL queries so you may find some difference in Request and Response parameters depending upon where the Queries are used from.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Entity"),(0,r.yg)("th",{parentName:"tr",align:null},"Query"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Request Parameters"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Fabric"),(0,r.yg)("td",{parentName:"tr",align:null},"fabricDetailQuery"),(0,r.yg)("td",{parentName:"tr",align:null},"Get Fabric Details"),(0,r.yg)("td",{parentName:"tr",align:null},'["id"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addFabric"),(0,r.yg)("td",{parentName:"tr",align:null},"Add a Fabric"),(0,r.yg)("td",{parentName:"tr",align:null},'["name", "ownerUid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"updateOwnedBy"),(0,r.yg)("td",{parentName:"tr",align:null},"Update Team owing the Fabric"),(0,r.yg)("td",{parentName:"tr",align:null},'["id","targetUid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"userFabricQuery"),(0,r.yg)("td",{parentName:"tr",align:null},"Get all Fabrics for User"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Project"),(0,r.yg)("td",{parentName:"tr",align:null},"addProject"),(0,r.yg)("td",{parentName:"tr",align:null},"Add a project"),(0,r.yg)("td",{parentName:"tr",align:null},'["name","forkMode","language", "ownerUid", "mainBranchModificationAllowed"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"getDetails"),(0,r.yg)("td",{parentName:"tr",align:null},"Get Details of a Project"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"project"),(0,r.yg)("td",{parentName:"tr",align:null},"List all projects for User"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"teamProjectAvailable"),(0,r.yg)("td",{parentName:"tr",align:null},"Available Projects for that Team"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "language"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addProjectDependency"),(0,r.yg)("td",{parentName:"tr",align:null},"Add a dependency Project to Current"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId", "DependencyProjectUid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"updateProjectDependency"),(0,r.yg)("td",{parentName:"tr",align:null},"Update dependency Project to a new released version"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId", "DependencyProjectUid", "ReleaseTag"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"removeProjectDependency"),(0,r.yg)("td",{parentName:"tr",align:null},"Removed an added dependency"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId", "DependencyProjectUid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"projectDependenciesQuery"),(0,r.yg)("td",{parentName:"tr",align:null},"List all project Dependencies"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"projectReleaseStatus"),(0,r.yg)("td",{parentName:"tr",align:null},"Gives Status of last Release for given project"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectID", "statuses"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"projectSyncFromGit"),(0,r.yg)("td",{parentName:"tr",align:null},"Status of Git sync of project"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"releaseProject"),(0,r.yg)("td",{parentName:"tr",align:null},"Release a Project"),(0,r.yg)("td",{parentName:"tr",align:null},'["branch", "message","version","projectID", "CommitHash"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"gitFooter"),(0,r.yg)("td",{parentName:"tr",align:null},"Details for Git for commit/branchNAme etc"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addSubscriberToProject"),(0,r.yg)("td",{parentName:"tr",align:null},"Add Subscriber to a Project"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "teamId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"projectBranches"),(0,r.yg)("td",{parentName:"tr",align:null},"List of available branches for this project"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"cloneProject"),(0,r.yg)("td",{parentName:"tr",align:null},"Created clone of current project"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "name", "teamUid", "copyMainBranchReleaseTags"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pipeline"),(0,r.yg)("td",{parentName:"tr",align:null},"addPipeline"),(0,r.yg)("td",{parentName:"tr",align:null},"Add a new Pipeline"),(0,r.yg)("td",{parentName:"tr",align:null},'["name", "branch", "ownerId", "doCheckout"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"tableQueryPipeline"),(0,r.yg)("td",{parentName:"tr",align:null},"Lists all pipelines for project"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId", "sortOrder", "sortColumn"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"tableQueryPipeline"),(0,r.yg)("td",{parentName:"tr",align:null},"Lists all pipelines for User"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "sortOrder", "sortColumn"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"pipelineDetailsQuery"),(0,r.yg)("td",{parentName:"tr",align:null},"Get Details of Pipeline"),(0,r.yg)("td",{parentName:"tr",align:null},'["Uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"clonePipeline"),(0,r.yg)("td",{parentName:"tr",align:null},"Cloned a Pipeline"),(0,r.yg)("td",{parentName:"tr",align:null},'["branch", "sourcePipelineId", "targetPipelineName", "ownerUid", "doCheckout"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addSubgraph"),(0,r.yg)("td",{parentName:"tr",align:null},"When Subgraph is added to a Pipeline"),(0,r.yg)("td",{parentName:"tr",align:null},'["mode", "name", "language", "ownerUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addUDFBulk"),(0,r.yg)("td",{parentName:"tr",align:null},"UDFs added to a Project"),(0,r.yg)("td",{parentName:"tr",align:null},'["udfs.name","udfs.description", "projectUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"removeUDFBulk"),(0,r.yg)("td",{parentName:"tr",align:null},"UDFs removed form a project"),(0,r.yg)("td",{parentName:"tr",align:null},'["uids"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"getSubgraph"),(0,r.yg)("td",{parentName:"tr",align:null},"Get Subgraph by given Id"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Job"),(0,r.yg)("td",{parentName:"tr",align:null},"addJob"),(0,r.yg)("td",{parentName:"tr",align:null},"Add a Job"),(0,r.yg)("td",{parentName:"tr",align:null},'["name", "branch","fabricUID", "scheduler", "doCheckout", "projectUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"updateJobConfiguration"),(0,r.yg)("td",{parentName:"tr",align:null},"Job configurations are updated"),(0,r.yg)("td",{parentName:"tr",align:null},'["emails", "jobUID", "enabled", "onStart", "fabricId", "onFailure", "onSuccess", "clusterMode", "scheduleCron"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"latestJobReleaseByJobIdAndFabricID"),(0,r.yg)("td",{parentName:"tr",align:null},"Get Jobs Release by Fabric Id"),(0,r.yg)("td",{parentName:"tr",align:null},'["jobUID", "fabricUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"jobReleaseByProjectRelease"),(0,r.yg)("td",{parentName:"tr",align:null},"Gets Jobs Released by Project ID"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectReleaseUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"jobQuery"),(0,r.yg)("td",{parentName:"tr",align:null},"Geta a Job by gievn Id"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addJobRelease"),(0,r.yg)("td",{parentName:"tr",align:null},"Adds a Job released mapping to project Release"),(0,r.yg)("td",{parentName:"tr",align:null},'["jobUID", "fabricUID", "scheduler", "schedulerJobUID", "projectReleaseUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"tableQueryJob"),(0,r.yg)("td",{parentName:"tr",align:null},"list query for Jobs"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "sortOrder", "sortColumn"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Dataset"),(0,r.yg)("td",{parentName:"tr",align:null},"queryDataset"),(0,r.yg)("td",{parentName:"tr",align:null},"When Datasets are queried from any page"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "optionalProjectUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addDataset"),(0,r.yg)("td",{parentName:"tr",align:null},"Added a new Dataset"),(0,r.yg)("td",{parentName:"tr",align:null},'["mode", "name", "ownerUID", "fabricUID", "datasetType"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addMultipleDatasets"),(0,r.yg)("td",{parentName:"tr",align:null},"Add Multiple Datasets"),(0,r.yg)("td",{parentName:"tr",align:null},'["names", "ownerUID", "tableNameList", "schemaNameList", "descriptionsList", "schemaAspectList", "databaseNamesList]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Team"),(0,r.yg)("td",{parentName:"tr",align:null},"addTeam"),(0,r.yg)("td",{parentName:"tr",align:null},"Added a new Team"),(0,r.yg)("td",{parentName:"tr",align:null},'["name", "adminUid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"getUserTeam"),(0,r.yg)("td",{parentName:"tr",align:null},"Get Teams for a User"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addteamAdmin"),(0,r.yg)("td",{parentName:"tr",align:null},"Add a user as Admin"),(0,r.yg)("td",{parentName:"tr",align:null},'["teamUid", "userUid", "invitationAccepted"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"List All teams for Users with Members"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"User"),(0,r.yg)("td",{parentName:"tr",align:null},"getUser"),(0,r.yg)("td",{parentName:"tr",align:null},"Get User"),(0,r.yg)("td",{parentName:"tr",align:null},'["email"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"tableQueryUser"),(0,r.yg)("td",{parentName:"tr",align:null},"List query for the User"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "sortOrder", "sortColumn"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"userAllFabricInfoAspect"),(0,r.yg)("td",{parentName:"tr",align:null},"Get User Details"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"setPassword"),(0,r.yg)("td",{parentName:"tr",align:null},"user Sets a new Password"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "newPassword"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Git"),(0,r.yg)("td",{parentName:"tr",align:null},"deleteBranch"),(0,r.yg)("td",{parentName:"tr",align:null},"Deleted a Branch"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId", "branchName"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"checkout"),(0,r.yg)("td",{parentName:"tr",align:null},"Checkout a new branch"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId" , "branchName"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"prCreationRedirectUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"Pr Creation button clicked"),(0,r.yg)("td",{parentName:"tr",align:null},'["to", "from", "projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"createPR"),(0,r.yg)("td",{parentName:"tr",align:null},"Pr Creation button clicked"),(0,r.yg)("td",{parentName:"tr",align:null},'["to", "from", "toFork", "fromFork":, "projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"cleanCommit"),(0,r.yg)("td",{parentName:"tr",align:null},"Committed any changes"),(0,r.yg)("td",{parentName:"tr",align:null},'["message", "projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"commit"),(0,r.yg)("td",{parentName:"tr",align:null},"Commit button clicked"),(0,r.yg)("td",{parentName:"tr",align:null},'["branch", "message", "projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"pullOrigin"),(0,r.yg)("td",{parentName:"tr",align:null},"pull origin branch"),(0,r.yg)("td",{parentName:"tr",align:null},'["branch", "projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"checkGitConnection"),(0,r.yg)("td",{parentName:"tr",align:null},"Test Git connection"),(0,r.yg)("td",{parentName:"tr",align:null},'["externalUriArg", "pushAccessCheck", "userGitCredsUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"linkSavedCredsToExternalGit"),(0,r.yg)("td",{parentName:"tr",align:null},"Linked Saved Creds to a project"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectUID", "userGitCredsUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"unlinkExternalGit"),(0,r.yg)("td",{parentName:"tr",align:null},"Unlink the saved creds"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"checkout"),(0,r.yg)("td",{parentName:"tr",align:null},"When USer checks out a new branch"),(0,r.yg)("td",{parentName:"tr",align:null},'["branchName","projectUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"branchDivergence"),(0,r.yg)("td",{parentName:"tr",align:null},"When user compares two branches for commit screen"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId", "branchName", "baseBranchName"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"branchInfo"),(0,r.yg)("td",{parentName:"tr",align:null},"Gives details of a particular working branch"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId", "branchName", "remoteType"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"setPrCreationTemplate"),(0,r.yg)("td",{parentName:"tr",align:null},"When user Sets PR creation template"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId", "customPrTemplate", "prCreationEnabled"}]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"getPrCreationTemplate"),(0,r.yg)("td",{parentName:"tr",align:null},"Gets PR creation template"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectId"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"deleteUserGitCreds"),(0,r.yg)("td",{parentName:"tr",align:null},"When user deleted saved Git creds"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"linkExternalGit"),(0,r.yg)("td",{parentName:"tr",align:null},"Link saved Git creds"),(0,r.yg)("td",{parentName:"tr",align:null},'["projectUID", "externalRepoUri", "userGitCredsUID"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"mergeMaster"),(0,r.yg)("td",{parentName:"tr",align:null},"Merge to master branch"),(0,r.yg)("td",{parentName:"tr",align:null},'["prNumber", "projectId", "entityConflicts", "projectConflicts", "resolvedConflicts"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Transpiler"),(0,r.yg)("td",{parentName:"tr",align:null},"transpilerImport"),(0,r.yg)("td",{parentName:"tr",align:null},"Transpiler Import started"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"addTranspilerImport"),(0,r.yg)("td",{parentName:"tr",align:null},"Importing files to Prophecy Transpiler"),(0,r.yg)("td",{parentName:"tr",align:null},'["name", "status", "storagePath", "transpilerType"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Generic"),(0,r.yg)("td",{parentName:"tr",align:null},"removeEntity"),(0,r.yg)("td",{parentName:"tr",align:null},"When any entity is removed"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "entityKind"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"updateEntity"),(0,r.yg)("td",{parentName:"tr",align:null},"When any entity is updated"),(0,r.yg)("td",{parentName:"tr",align:null},'["uid", "entityKind", "entityFieldName", "entityFieldValue"]')))))}u.isMDXComponent=!0}}]);