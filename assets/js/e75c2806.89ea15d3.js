"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[82047],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3514:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),i=n(20053),o=n(84142),a=n(75489),l=n(16654),s=n(21312);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return r.createElement(a.A,{href:t,className:(0,i.A)("card padding--lg",c.cardContainer)},n)}function u(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.A)("text--truncate",c.cardTitle),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.A)("text--truncate",c.cardDescription),title:a},a))}function m(e){let{item:t}=e;const n=(0,o._o)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.$S)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const a=(0,o.d1)(t);return r.createElement("section",{className:(0,i.A)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},50199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(58168),i=(n(96540),n(15680)),o=n(3514),a=n(84142);const l={title:"Pipeline Monitoring",id:"pipeline-monitoring",description:"About Pipeline Monitoring for Spark",sidebar_position:1,tags:["concept","monitoring","spark"]},s=void 0,c={unversionedId:"Spark/pipeline-monitoring/pipeline-monitoring",id:"Spark/pipeline-monitoring/pipeline-monitoring",title:"Pipeline Monitoring",description:"About Pipeline Monitoring for Spark",source:"@site/docs/Spark/pipeline-monitoring/pipeline-monitoring.md",sourceDirName:"Spark/pipeline-monitoring",slug:"/Spark/pipeline-monitoring/",permalink:"/Spark/pipeline-monitoring/",draft:!1,tags:[{label:"concept",permalink:"/tags/concept"},{label:"monitoring",permalink:"/tags/monitoring"},{label:"spark",permalink:"/tags/spark"}],version:"current",sidebarPosition:1,frontMatter:{title:"Pipeline Monitoring",id:"pipeline-monitoring",description:"About Pipeline Monitoring for Spark",sidebar_position:1,tags:["concept","monitoring","spark"]},sidebar:"defaultSidebar",previous:{title:"Unit Testing",permalink:"/Spark/tests"},next:{title:"Enable Pipeline Monitoring",permalink:"/Spark/pipeline-monitoring/enable-pipeline-monitoring"}},p={},u=[{value:"Pipeline Monitoring features",id:"pipeline-monitoring-features",level:2},{value:"Possible Pipeline errors and failures",id:"possible-pipeline-errors-and-failures",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],m={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Pipeline Monitoring enables you as a Spark Copilot user to monitor and debug your scheduled and interactive Pipeline runs through Prophecy. The primary goal of Pipeline, Model, and Job observability is to assist you in quickly pinpointing errors, minimize the cost of fixes, and reduce downtime."),(0,i.yg)("p",null,"When enabled, Prophecy highlights the Gem that causes the failure at runtime. You can view log stack traces in the Prophecy UI in order to to debug runtime issues. Pipeline Monitoring is available for any scheduled Job runs and all interactive runs through the Prophecy UI."),(0,i.yg)("h2",{id:"pipeline-monitoring-features"},"Pipeline Monitoring features"),(0,i.yg)("p",null,"You can seamlessly address data health issues and monitor scheduled or ad-hoc runs without the need to switch to Databricks or Snowflake by using the following features:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Detect and monitor"),": Identify errors at runtime, and monitor scheduled production runs."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Alert"),": Get prompt alerts in case of failures according to severity."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Troubleshoot and fix with recommended solutions"),": Identify the cause of failures, fix them AI recommended solutions, and rerun failed or skipped tasks. Prophecy's Pipeline Monitoring encompasses all functionalities equivalent to those found in Databricks Workflows and Airflow Jobs.")),(0,i.yg)("h2",{id:"possible-pipeline-errors-and-failures"},"Possible Pipeline errors and failures"),(0,i.yg)("p",null,"During runtime, a Pipeline can fail due to different kinds of errors or failures such as the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Failure before plan execution started by Spark"),(0,i.yg)("li",{parentName:"ul"},"Failure when the Gem has diagnostics or compilation issues because of a change in some common component"),(0,i.yg)("li",{parentName:"ul"},"Runtime error due to unexpected data, such as data type mismatch"),(0,i.yg)("li",{parentName:"ul"},"Error during write, such as write mode error or target data type mismatch"),(0,i.yg)("li",{parentName:"ul"},"Driver/Executor errors like exceeding memory limits (OOMs)")),(0,i.yg)("h2",{id:"whats-next"},"What's next"),(0,i.yg)("p",null,"To enable and use Pipeline Monitoring, see the following pages:"),(0,i.yg)(o.A,{items:(0,a.$S)().items,mdxType:"DocCardList"}),(0,i.yg)("p",null,"For information on the stored execution metrics, see ",(0,i.yg)("a",{parentName:"p",href:"/../../Spark/execution/execution-metrics"},"Execution Metrics"),"."))}g.isMDXComponent=!0}}]);