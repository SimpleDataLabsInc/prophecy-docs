"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[2657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),i=r(86010),a=r(53438),c=r(39960),o=r(13919),s=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c},c))}function d(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:i?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},42159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905)),a=r(52991),c=r(53438);const o={title:"Prophecy Fabrics",description:"Fabrics defines execution engine",id:"Fabrics",tags:["Livy","Fabrics","Execution"]},s=void 0,l={unversionedId:"low-code-spark/fabrics/Fabrics",id:"low-code-spark/fabrics/Fabrics",title:"Prophecy Fabrics",description:"Fabrics defines execution engine",source:"@site/docs/low-code-spark/fabrics/fabrics.md",sourceDirName:"low-code-spark/fabrics",slug:"/low-code-spark/fabrics/",permalink:"/low-code-spark/fabrics/",draft:!1,tags:[{label:"Livy",permalink:"/tags/livy"},{label:"Fabrics",permalink:"/tags/fabrics"},{label:"Execution",permalink:"/tags/execution"}],version:"current",frontMatter:{title:"Prophecy Fabrics",description:"Fabrics defines execution engine",id:"Fabrics",tags:["Livy","Fabrics","Execution"]},sidebar:"defaultSidebar",previous:{title:"Execution on Livy",permalink:"/low-code-spark/execution/executions_on_livy_clusters"},next:{title:"Databricks",permalink:"/low-code-spark/fabrics/create-a-Fabric"}},p={},u=[{value:"Databricks Fabric",id:"databricks-fabric",level:2},{value:"Databricks Execution",id:"databricks-execution",level:2},{value:"Fabrics Using Apache Livy",id:"fabrics-using-apache-livy",level:2},{value:"Execution on Livy",id:"execution-on-livy",level:2}],d={toc:u},f="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Fabric is a logical execution environment. Teams can organize their data engineering into multiple environments such as development, staging, and production."),(0,i.kt)("h2",{id:"databricks-fabric"},"Databricks Fabric"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/fabrics/create-a-Fabric#databricks"},"Databricks Configurations")),(0,i.kt)("h2",{id:"databricks-execution"},"Databricks Execution"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/execution/executions_on_databricks_clusters"},"Execution on Databricks")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/execution/interactive-execution"},"Interactive Execution")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/execution/execution-metrics"},"Execution Metrics")),(0,i.kt)("h2",{id:"fabrics-using-apache-livy"},"Fabrics Using Apache Livy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/fabrics/EMR-fabric-configuration#create-a-fabric-to-connect-prophecy-to-emr"},"Amazon EMR Configurations")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/fabrics/azure-synapse-fabric-guide#configure-connectivity-between-synapse-and-prophecy"},"Azure Synapase Analytics Configurations")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/fabrics/gcp-dataproc-fabric-guide#create-a-dataproc-fabric"},"Google Cloud Dataproc Configurations")),(0,i.kt)("h2",{id:"execution-on-livy"},"Execution on Livy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/execution/executions_on_livy_clusters"},"Execution on Livy")),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);