"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[79359],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return a?r.createElement(u,l(l({ref:t},p),{},{components:a})):r.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46807:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const o={sidebar_position:10,id:"Mar_2023",description:"Release notes for March",title:"March 2023",tags:["release notes","changelog"]},l=void 0,i={unversionedId:"release_notes/2023/Mar_2023",id:"release_notes/2023/Mar_2023",title:"March 2023",description:"Release notes for March",source:"@site/docs/release_notes/2023/mar2023.md",sourceDirName:"release_notes/2023",slug:"/release_notes/2023/Mar_2023",permalink:"/release_notes/2023/Mar_2023",draft:!1,tags:[{label:"release notes",permalink:"/tags/release-notes"},{label:"changelog",permalink:"/tags/changelog"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,id:"Mar_2023",description:"Release notes for March",title:"March 2023",tags:["release notes","changelog"]},sidebar:"mySidebar",previous:{title:"April 2023",permalink:"/release_notes/2023/Apr_2023"},next:{title:"February 2023",permalink:"/release_notes/2023/Feb_2023"}},s={},c=[{value:"2.10.0.* (Mar 31, 2023)",id:"2100-mar-31-2023",level:2},{value:"Improvements",id:"ImprovementsRelease2100",level:3},{value:"Search box on available clusters",id:"search-box-on-available-clusters",level:4},{value:"Performance Improvements for Projects with large Number of Entities",id:"performance-improvements-for-projects-with-large-number-of-entities",level:4},{value:"Datasets improvements",id:"datasets-improvements",level:4},{value:"Warning when deleting Teams",id:"warning-when-deleting-teams",level:4},{value:"2.9.0.* (Mar 24, 2023)",id:"290-mar-24-2023",level:2},{value:"Features",id:"UpdatesRelease290",level:3},{value:"Sharable Subgraphs and UDFs",id:"sharable-subgraphs-and-udfs",level:4},{value:"Ability to commit and Release from the Pipeline page",id:"ability-to-commit-and-release-from-the-pipeline-page",level:4},{value:"Improvements",id:"ImprovementsRelease290",level:3},{value:"Ability to rename a cluster while attaching",id:"ability-to-rename-a-cluster-while-attaching",level:4},{value:"Checkout remote branches",id:"checkout-remote-branches",level:4},{value:"Open Project lineage view",id:"open-project-lineage-view",level:4},{value:"Cluster auto-attach behavior",id:"cluster-auto-attach-behavior",level:4},{value:"Control Data Sampling behavior for Configured Pipelines",id:"control-data-sampling-behavior-for-configured-pipelines",level:4}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.yg)(d,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"2100-mar-31-2023"},"2.10.0.","*"," (Mar 31, 2023)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Prophecy Python libs version: 1.4.8"),(0,n.yg)("li",{parentName:"ul"},"Prophecy Scala libs version: 7.0.16")),(0,n.yg)("h3",{id:"ImprovementsRelease2100"},"Improvements"),(0,n.yg)("h4",{id:"search-box-on-available-clusters"},"Search box on available clusters"),(0,n.yg)("p",null,"Find clusters faster with cluster search"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"SearchCluster",src:a(479).A,width:"3456",height:"2158"})),(0,n.yg)("h4",{id:"performance-improvements-for-projects-with-large-number-of-entities"},"Performance Improvements for Projects with large Number of Entities"),(0,n.yg)("p",null,"With this release, we have optimized the Project Browser to handle Projects with more than 500 Pipelines/Datasets. User should not see delays and should be able to seamlessly browse Entities in large Projects."),(0,n.yg)("h4",{id:"datasets-improvements"},"Datasets improvements"),(0,n.yg)("p",null,"We have removed Restrictions to allow users to be able to save Datasets with Diagnostics errors like missing Input ports/Schema etc.\nAlong with this we have also added ability to Choose Source/Target while adding a Dataset to Pipeline from browser. Please see below video for example."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"SourceTargetGems",src:a(93047).A,width:"3456",height:"2158"})),(0,n.yg)("h4",{id:"warning-when-deleting-teams"},"Warning when deleting Teams"),(0,n.yg)("p",null,"Users will now see Warnings as shown below before deleting Teams etc. Similar warnings are shown while deleting a Project or Fabric too.",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("img",{alt:"DeleteTeam",src:a(49162).A,width:"1451",height:"942"})),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Deleting a Team, deletes all the Projects, Pipelines, Datasets, Jobs, Fabrics owned by that team.")),(0,n.yg)("h2",{id:"290-mar-24-2023"},"2.9.0.","*"," (Mar 24, 2023)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Prophecy Python libs version: 1.4.7"),(0,n.yg)("li",{parentName:"ul"},"Prophecy Scala libs version: 7.0.10")),(0,n.yg)("h3",{id:"UpdatesRelease290"},"Features"),(0,n.yg)("h4",{id:"sharable-subgraphs-and-udfs"},"Sharable Subgraphs and UDFs"),(0,n.yg)("p",null,"One of the best practices during Data-Project development is to ",(0,n.yg)("em",{parentName:"p"},"Use standardized components"),". Prophecy enables this standardization in a few ways:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Our standard Gems"),(0,n.yg)("li",{parentName:"ol"},"User-Defined Functions"),(0,n.yg)("li",{parentName:"ol"},"Reusable Subgraphs"),(0,n.yg)("li",{parentName:"ol"},"Custom Gems")),(0,n.yg)("p",null,"With this release, ",(0,n.yg)("inlineCode",{parentName:"p"},"Subgraph"),"s and ",(0,n.yg)("inlineCode",{parentName:"p"},"User-Defined Function"),'s can now be shared across multiple projects and teams. This allows central Data Platform teams to build reusable code to cover a wide variety of business needs, such as Encryption/Decryption or Identity Masking, and have their "consumers" (the Data Practitioners) take a dependency on that reusable code. Since it\'s all versioned, when the reusable code changes, the downstream consumers will be notified and can update accordingly.'),(0,n.yg)("p",null,"Data admins can also ",(0,n.yg)("em",{parentName:"p"},"Create deployment templates for the pipelines")," that have the best practices baked into them for authorization, notifications,\nhandling of errors, and logging the correct information."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Please note, Users will see new Uncommitted changes in their Pipelines when they open it. They can see UDF code being added to all Pipelines, Configs added to Subgraphs, etc.")),(0,n.yg)("p",null,"Please see ",(0,n.yg)("a",{parentName:"p",href:"/package-hub/package-builder/"},"here")," for more details on this Feature."),(0,n.yg)("h4",{id:"ability-to-commit-and-release-from-the-pipeline-page"},"Ability to commit and Release from the Pipeline page"),(0,n.yg)("p",null,"A user can complete the entire CI-CD process from ",(0,n.yg)("inlineCode",{parentName:"p"},"commit")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"release")," from the Pipeline editor. Please see the below video for an example."),(0,n.yg)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,n.yg)("iframe",{src:"https://www.loom.com/embed/5b62a4af13b243019705ee001875e773",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,n.yg)("h3",{id:"ImprovementsRelease290"},"Improvements"),(0,n.yg)("h4",{id:"ability-to-rename-a-cluster-while-attaching"},"Ability to rename a cluster while attaching"),(0,n.yg)("p",null,"When attaching to a cluster, User can now provide a custom name to the cluster (if creating a new cluster), to be able to identify it in the future again.\nPlease see the below video for an example."),(0,n.yg)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,n.yg)("iframe",{src:"https://www.loom.com/embed/d28f3ba9dd80482f983f5f7e753d1588",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,n.yg)("h4",{id:"checkout-remote-branches"},"Checkout remote branches"),(0,n.yg)("p",null,"Users can now check out branches created directly in Git(outside of Prophecy) for editing. On the checkout screen, users will now see a list of remote and local branches separately. Once checked out, the branch will be shown as a local branch.\nPlease see the below video for an example."),(0,n.yg)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,n.yg)("iframe",{src:"https://www.loom.com/embed/cd9fb2c1a43940c98683b6451625bac1",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,n.yg)("h4",{id:"open-project-lineage-view"},"Open Project lineage view"),(0,n.yg)("p",null,"When clicking ",(0,n.yg)("inlineCode",{parentName:"p"},"Open Project")," from a Project page, Users will now see a Birds-eye view of their entire Project. They will have shortcuts to edit Pipelines and access all Metadata from this screen. Please see the below video for an example."),(0,n.yg)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,n.yg)("iframe",{src:"https://www.loom.com/embed/69fcdee808af4b94844bd603ca93865e",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,n.yg)("h4",{id:"cluster-auto-attach-behavior"},"Cluster auto-attach behavior"),(0,n.yg)("p",null,"For Configured Pipelines (Read-Only mode from Dependencies) in Pipeline view, Cluster will auto-attach to the ",(0,n.yg)("inlineCode",{parentName:"p"},"last-used")," cluster from the Fabric. This behavior is now consistent for all Pipelines in Edit/Read-Only mode.\nPlease see the below video for an example."),(0,n.yg)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,n.yg)("iframe",{src:"https://www.loom.com/embed/09bb5a748d874382bbf6f6c0aebb3d25",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,n.yg)("h4",{id:"control-data-sampling-behavior-for-configured-pipelines"},"Control Data Sampling behavior for Configured Pipelines"),(0,n.yg)("p",null,"A User can now change the Data Sampling(",(0,n.yg)("a",{parentName:"p",href:"/Spark/execution/interactive-execution#interims"},"Interims"),") for Interactive Runs of Configured Pipelines(Read-Only mode from Dependencies).\nPlease see the below video for an example."),(0,n.yg)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,n.yg)("iframe",{src:"https://www.loom.com/embed/a30e25b0cfc842c4b198f8c36349a879",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})))}m.isMDXComponent=!0},479:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ClusterSearch-04a7220e044a82a023a46417befad583.gif"},93047:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/SourceTarget-f427a464203ce6006a55cdbc144f037a.gif"},49162:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/deleteTeam-d6ad9d79b5dd99096bc10357a8f2fb5b.png"}}]);