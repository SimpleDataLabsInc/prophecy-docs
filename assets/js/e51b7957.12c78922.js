"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[908],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>d});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=n,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||i;return t?a.createElement(d,o(o({ref:r},p),{},{components:t})):a.createElement(d,o({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68946:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(58168),n=(t(96540),t(15680));const i={title:"Fabrics",description:"Fabrics define execution engines",id:"Fabrics",tags:["Fabric","SQL","Execution","Snowflake","Databricks"]},o=void 0,s={unversionedId:"SQL/fabrics/Fabrics",id:"SQL/fabrics/Fabrics",title:"Fabrics",description:"Fabrics define execution engines",source:"@site/docs/SQL/fabrics/fabrics.md",sourceDirName:"SQL/fabrics",slug:"/SQL/fabrics/",permalink:"/SQL/fabrics/",draft:!1,tags:[{label:"Fabric",permalink:"/tags/fabric"},{label:"SQL",permalink:"/tags/sql"},{label:"Execution",permalink:"/tags/execution"},{label:"Snowflake",permalink:"/tags/snowflake"},{label:"Databricks",permalink:"/tags/databricks"}],version:"current",frontMatter:{title:"Fabrics",description:"Fabrics define execution engines",id:"Fabrics",tags:["Fabric","SQL","Execution","Snowflake","Databricks"]},sidebar:"defaultSidebar",previous:{title:"Copilot for SQL users",permalink:"/SQL/"},next:{title:"Databricks SQL",permalink:"/SQL/fabrics/databricks"}},c={},l=[{value:"Job Scheduling",id:"job-scheduling",level:2}],p={toc:l},u="wrapper";function b(e){let{components:r,...i}=e;return(0,n.yg)(u,(0,a.A)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A Fabric is a logical execution environment. Teams can organize their data engineering into multiple environments such as development, staging, and production. SQL Fabrics define the credentials for Prophecy to connect to the SQL Warehouse or Lakehouse. Importantly, each user must update the relevant Fabric with their own credentials. Once a SQL Fabric is created, Prophecy can access data, execute data models and generate target tables."),(0,n.yg)("p",null,"Prophecy supports Databricks and Snowflake SQL Warehouses, with more options coming soon.\n",(0,n.yg)("img",{alt:"Providers",src:t(88294).A,width:"2880",height:"1542"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/SQL/fabrics/snowflake"},"Snowflake SQL Fabrics"))," - Provide Prophecy access to use the Snowflake warehouse data storage and compute engine capabilities.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/SQL/fabrics/databricks"},"Databricks SQL Fabrics"))," - Provide Prophecy access to use the Databricks' Warehouse storage and compute engine capabilities."))),(0,n.yg)("h2",{id:"job-scheduling"},"Job Scheduling"),(0,n.yg)("p",null,"In addition to secure, ad-hoc model runs on Snowflake and Databricks, Job scheduling is done with a visual, easy-to-use interface."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Snowflake users schedule Jobs with Airflow. Prophecy's ",(0,n.yg)("a",{parentName:"p",href:"/Orchestration/airflow/setup/"},"Airflow Fabric")," facilitates a ",(0,n.yg)("a",{parentName:"p",href:"/Orchestration/airflow/setup/MWAA_fabric#setting-up-snowflake-connection"},"Connection")," to the Snowflake Fabric.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Databricks users schedule Jobs with ",(0,n.yg)("a",{parentName:"p",href:"/Orchestration/databricks-jobs"},"Databricks Jobs")," in Prophecy."))),(0,n.yg)("p",null,"Once a Snowflake or Databricks SQL Fabric is setup, Prophecy's interface makes it easy to run Models on a daily, weekly, or monthly basis using Airflow or Databricks Jobs."))}b.isMDXComponent=!0},88294:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/Providers-d2905b04c56b8a1650d07c3b547b79bf.png"}}]);