"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[87953],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const i={title:"Execution on Databricks",id:"executions_on_databricks_clusters",description:"Execution on Databricks clusters",sidebar_position:3,tags:["execution","interim","UnityCatalog","Shared","metrics","spark"]},s=void 0,o={unversionedId:"Spark/execution/executions_on_databricks_clusters",id:"Spark/execution/executions_on_databricks_clusters",title:"Execution on Databricks",description:"Execution on Databricks clusters",source:"@site/docs/Spark/execution/databricks-clusters-behaviors.md",sourceDirName:"Spark/execution",slug:"/Spark/execution/executions_on_databricks_clusters",permalink:"/Spark/execution/executions_on_databricks_clusters",draft:!1,tags:[{label:"execution",permalink:"/tags/execution"},{label:"interim",permalink:"/tags/interim"},{label:"UnityCatalog",permalink:"/tags/unity-catalog"},{label:"Shared",permalink:"/tags/shared"},{label:"metrics",permalink:"/tags/metrics"},{label:"spark",permalink:"/tags/spark"}],version:"current",sidebarPosition:3,frontMatter:{title:"Execution on Databricks",id:"executions_on_databricks_clusters",description:"Execution on Databricks clusters",sidebar_position:3,tags:["execution","interim","UnityCatalog","Shared","metrics","spark"]},sidebar:"mySidebar",previous:{title:"Execution Metrics",permalink:"/Spark/execution/execution-metrics"},next:{title:"Execution on Livy",permalink:"/Spark/execution/executions_on_livy_clusters"}},c={},l=[{value:"Cluster Types",id:"cluster-types",level:2},{value:"Interims",id:"interims",level:2},{value:"Regular Interims",id:"regular-interims",level:3},{value:"Vanilla Interims",id:"vanilla-interims",level:3},{value:"Execution Metrics",id:"execution-metrics",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.yg)(u,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"cluster-types"},"Cluster Types"),(0,a.yg)("p",null,"Databricks clusters come with various ",(0,a.yg)("a",{parentName:"p",href:"https://docs.databricks.com/clusters/create-cluster.html#what-is-cluster-access-mode"},"Access Modes"),". To use Unity Catalog Shared clusters, check for feature support ",(0,a.yg)("a",{parentName:"p",href:"./../fabrics/databricks/ucshared"},"here.")),(0,a.yg)("h2",{id:"interims"},"Interims"),(0,a.yg)("p",null,"During development, often the user will want to see their data to make more sense of it and to check whether the expected output is getting\ngenerated or not after the transformation. Prophecy generates these data samples as ",(0,a.yg)("inlineCode",{parentName:"p"},"Interims"),", which are temporarily cached previews of data after each Gem.\nTo check more about interims, please refer ",(0,a.yg)("a",{parentName:"p",href:"https://docs.prophecy.io/Spark/execution/interactive-execution#interims"},"here"),"."),(0,a.yg)("p",null,"Depending on the type of clusters, we have two modes of Interims"),(0,a.yg)("h3",{id:"regular-interims"},"Regular Interims"),(0,a.yg)("p",null,"For ",(0,a.yg)("inlineCode",{parentName:"p"},"Single User")," clusters, and ",(0,a.yg)("inlineCode",{parentName:"p"},"No isolation Shared")," clusters, we have interims available after each Gem of Pipeline. These are available on both Unity and Non Unity catalog workspaces."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Regular Interims",src:r(49861).A,width:"1664",height:"930"})),(0,a.yg)("h3",{id:"vanilla-interims"},"Vanilla Interims"),(0,a.yg)("p",null,"For ",(0,a.yg)("inlineCode",{parentName:"p"},"Shared mode")," clusters, we have added interims on all Tail nodes of the Pipeline.\nThese interims will come Just before Target Gems, and if there is no Target Gem, then as a dangling edge after last Gem. See below images for the same."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Vanilla Interims",src:r(27170).A,width:"1673",height:"938"})),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Vanilla Interims",src:r(75139).A,width:"1670",height:"931"})),(0,a.yg)("h2",{id:"execution-metrics"},"Execution Metrics"),(0,a.yg)("p",null,"When running Pipelines and Jobs, you may be interested to know few metrics related to execution like records\nread/written, bytes read/written, total time taken and Data samples b/w components. These Dataset, Pipeline-run and\nJob-run related metrics are accumulated and stored on your data plane and can be viewed later from Prophecy UI. For more details, refer ",(0,a.yg)("a",{parentName:"p",href:"./execution-metrics"},"here"),"."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"These metrics are ",(0,a.yg)("strong",{parentName:"p"},"not available")," for ",(0,a.yg)("inlineCode",{parentName:"p"},"Shared mode")," clusters (both normal workspaces and Unity catalog workspaces). You should see a proper error when trying to get historical runs of Pipelines/Jobs executed on ",(0,a.yg)("inlineCode",{parentName:"p"},"Shared mode")," clusters.")),(0,a.yg)("p",null,"Refer below images for Execution Metrics on Pipelines page."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Pipeline_Execution_Metrics",src:r(94626).A,width:"1727",height:"970"})),(0,a.yg)("p",null,"Each row here is one run of the Pipeline. You can click and go to a particular run and see the interims for that run or metrics like Rows read/written, time taken, etc."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Execution_Metrics",src:r(44010).A,width:"1669",height:"965"})),(0,a.yg)("p",null,"You can also see Execution Metrics for each Dataset in the Pipeline."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Dataset_metrcis",src:r(80477).A,width:"1670",height:"749"})),(0,a.yg)("p",null,"Each row here is one run where this Dataset was used. You can click and go to a particular run and see more detailed insights on your data along with preview."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Dataset_stats",src:r(17591).A,width:"1530",height:"886"})),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"When using ",(0,a.yg)("inlineCode",{parentName:"p"},"High Concurrency")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Shared Mode")," Databricks Clusters you may notice a delay when running the first command, or when your cluster is scaling up to meet demand. This delay is due to Prophecy and Pipeline dependencies (Maven or Python packages) being installed. For the best performance, it is recommended that you cache packages in an Artifactory or on DBFS. Please ",(0,a.yg)("a",{parentName:"p",href:"https://help.prophecy.io/support/tickets/new"},"contact us")," to learn more about this.")))}d.isMDXComponent=!0},44010:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ExecutionMetrics-06b0960ab08c45f832470523aefda3a6.png"},27170:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/SharedModeInterims-3005a6d15ddb02323a435d2595ceb8e1.png"},49861:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/SingleModeInterims-8ed0e1dd70211fec2c25756ba37f7b32.png"},17591:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/dataset-statistics-c2b3edf73209d1d054f2035cd6e2cc03.png"},80477:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/execution-metrcis-dataset1-0b8affae519ccc1b35e918a4621e56b4.png"},94626:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/execution-metrics-pipeline-5df685b641bb99e5b0bf0fcba5b884b6.png"},75139:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/vanillaInterims2-281e358b15a276f6d29d85d457364f90.png"}}]);