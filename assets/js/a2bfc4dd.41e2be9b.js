"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[6280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Azure Synapse Analytics",id:"azure-synapse-fabric-guide",description:"Configuring Synapse Fabric",sidebar_position:4,tags:["deployment","configuration","azure","synapse","livy"]},i=void 0,s={unversionedId:"low-code-spark/fabrics/azure-synapse-fabric-guide",id:"low-code-spark/fabrics/azure-synapse-fabric-guide",title:"Azure Synapse Analytics",description:"Configuring Synapse Fabric",source:"@site/docs/low-code-spark/fabrics/synapsefabric.md",sourceDirName:"low-code-spark/fabrics",slug:"/low-code-spark/fabrics/azure-synapse-fabric-guide",permalink:"/low-code-spark/fabrics/azure-synapse-fabric-guide",draft:!1,tags:[{label:"deployment",permalink:"/tags/deployment"},{label:"configuration",permalink:"/tags/configuration"},{label:"azure",permalink:"/tags/azure"},{label:"synapse",permalink:"/tags/synapse"},{label:"livy",permalink:"/tags/livy"}],version:"current",sidebarPosition:4,frontMatter:{title:"Azure Synapse Analytics",id:"azure-synapse-fabric-guide",description:"Configuring Synapse Fabric",sidebar_position:4,tags:["deployment","configuration","azure","synapse","livy"]},sidebar:"defaultSidebar",previous:{title:"Amazon EMR",permalink:"/low-code-spark/fabrics/EMR-fabric-configuration"},next:{title:"Google Cloud Dataproc",permalink:"/low-code-spark/fabrics/gcp-dataproc-fabric-guide"}},p={},l=[{value:"An existing Azure Synapse Analytics environment",id:"an-existing-azure-synapse-analytics-environment",level:2},{value:"Configure connectivity between Synapse and Prophecy",id:"configure-connectivity-between-synapse-and-prophecy",level:3}],c={toc:l},u="wrapper";function y(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the context of Spark execution engines, users have the flexibility to opt for Azure Synapse Analytics while utilizing Prophecy. This comprehensive documentation aims to provide users with a clear understanding of the configuration process for Azure Synapse Analytics. Additionally, it offers step-by-step guidance on creating a Fabric that enables seamless connectivity to the Azure Synapse Workspace via Livy."),(0,a.kt)("p",null,"Feel free to explore the following sections to gain insights into the integration of Azure Synapse Analytics with Prophecy."),(0,a.kt)("h2",{id:"an-existing-azure-synapse-analytics-environment"},"An existing Azure Synapse Analytics environment"),(0,a.kt)("p",null,"A properly configured Azure Synapse Analytics environment is required before configuring a Synapse Fabric on Prophecy. Prophecy configurations include the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A Synapse workspace with proper security configured. If you don't have an existing workspace, you may deploy one from the ",(0,a.kt)("a",{parentName:"p",href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft.synapse?tab=overview"},"Azure Marketplace"),"."),(0,a.kt)("img",{src:n(57277).Z,alt:"Synapse security",width:"75%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy a Synapse Spark Pool if one doesn't already exist."),(0,a.kt)("img",{src:n(50998).Z,alt:"Synapse pool",width:"75%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the Application is registered."),(0,a.kt)("img",{src:n(43288).Z,alt:"Synapse security",width:"75%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a secret for your Application."),(0,a.kt)("img",{src:n(29965).Z,alt:"Synapse security",width:"75%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make a note of your secret. We need this information for your Fabric."),(0,a.kt)("img",{src:n(76937).Z,alt:"Synapse security",width:"75%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure Application, Workspace, Storage roles to ensure proper access."))),(0,a.kt)("p",null,"Find more information on assigning roles from ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/synapse-analytics/security/how-to-set-up-access-control"},"Azure's documentation"),"."),(0,a.kt)("h3",{id:"configure-connectivity-between-synapse-and-prophecy"},"Configure connectivity between Synapse and Prophecy"),(0,a.kt)("p",null,"Please note that the Prophecy public IP is ",(0,a.kt)("inlineCode",{parentName:"p"},"3.133.35.237"),"."),(0,a.kt)("p",null,"Navigate to Prophecy's UI and click on ",(0,a.kt)("strong",{parentName:"p"},"Create Fabric"),". The Fabric will establish a connection with your Synapse environment and utilize it as the execution engine for your Pipelines."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Choose Synapse")," as your ",(0,a.kt)("strong",{parentName:"p"},"Provider"),"."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("img",{src:n(66722).Z,alt:"Synapse connect",width:"75%"}),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Copy and paste")," your ",(0,a.kt)("strong",{parentName:"p"},"Application Client ID"),", ",(0,a.kt)("strong",{parentName:"p"},"Secret Value")," and ",(0,a.kt)("strong",{parentName:"p"},"Tenant ID")," from the App Registration page."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("img",{src:n(67135).Z,alt:"Synapse connect",width:"75%"}),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Copy and paste")," your Synapse ",(0,a.kt)("strong",{parentName:"p"},"Resource Group Name")," and ",(0,a.kt)("strong",{parentName:"p"},"Subscription ID")," from your Synapse workspace."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("img",{src:n(96734).Z,alt:"Synapse connect",width:"75%"}),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click")," on ",(0,a.kt)("strong",{parentName:"p"},"Fetch environments"),"."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Select")," your Spark pool from the ",(0,a.kt)("em",{parentName:"p"},"Spark environment")," dropdown. All other fields should be automatically populated after selecting your Spark Pool."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("img",{src:n(31693).Z,alt:"Synapse connect",width:"75%"}),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click")," on ",(0,a.kt)("strong",{parentName:"p"},"Add Job Size")," and configure the Job size that you would like to use for processing."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("img",{src:n(8368).Z,alt:"Synapse connect",width:"75%"}),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Now we configure the dependencies."),(0,a.kt)("p",null,"Under ",(0,a.kt)("strong",{parentName:"p"},"Scala")," enter ",(0,a.kt)("strong",{parentName:"p"},"Path")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://prophecypublicazure.blob.core.windows.net/prophecy-public-libs/prophecy-scala-libs/")),(0,a.kt)("p",null,"Under ",(0,a.kt)("strong",{parentName:"p"},"Python")," enter ",(0,a.kt)("strong",{parentName:"p"},"Path")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://prophecypublicazure.blob.core.windows.net/prophecy-public-libs/prophecy-python-libs/")),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click")," on ",(0,a.kt)("strong",{parentName:"p"},"Complete"),"."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Your Fabric for Azure Synapase Fabric is configured! Try creating a cluster using the Fabric that you've just created and attach to it."),(0,a.kt)("p",null,"Run a simple Pipeline and make sure that the interim returns data properly."))}y.isMDXComponent=!0},43288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add_app-937bdc1428ee0a97e3acea501772e31a.png"},8368:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/addjsize-ec782a5eff9f50e2262c40a1a6119949.png"},67135:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/appconfig-789fe02f6fa14e7f82f5efc59de14f1a.png"},66722:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provider1-0e071e211d1877540e95952cb5b2bb69.png"},29965:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/secret-8c889e31442b5be84a4c5fad20548931.png"},76937:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/secret2-1656c462b0ffbe7727121c767b70b650.png"},31693:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selectsparkpool-0ef94c63f173e425a9264e33bbb130a5.png"},50998:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sparkpool-f11414709c16f4a952aca06d4b200923.png"},96734:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/workspaceconfig-60630470c8dad38b02232738cd1c73e4.png"},57277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/workspaceiam-60537a0ed72b6c75d6cc8621e28aab15.png"}}]);