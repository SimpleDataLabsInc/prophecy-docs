"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[20753],{15680:(e,n,o)=>{o.d(n,{xA:()=>s,yg:()=>f});var t=o(96540);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(o),g=r,f=m["".concat(l,".").concat(g)]||m[g]||d[g]||a;return o?t.createElement(f,i(i({ref:n},s),{},{components:o})):t.createElement(f,i({ref:n},s))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},77747:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var t=o(58168),r=(o(96540),o(15680));const a={sidebar_position:5,title:"Email Connection",id:"prophecy_managed_airflow_fabric_email_connections",description:"How to create Email connection in Prophecy Managed Airflow Fabric",tags:["scheduling","airflow","jobs","prophecyManaged","fabric","connections","email","smtp"]},i=void 0,c={unversionedId:"Orchestration/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_email_connections",id:"Orchestration/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_email_connections",title:"Email Connection",description:"How to create Email connection in Prophecy Managed Airflow Fabric",source:"@site/docs/Orchestration/airflow/setup/prophecy-managed/connections/email-connection.md",sourceDirName:"Orchestration/airflow/setup/prophecy-managed/connections",slug:"/Orchestration/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_email_connections",permalink:"/Orchestration/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_email_connections",draft:!1,tags:[{label:"scheduling",permalink:"/tags/scheduling"},{label:"airflow",permalink:"/tags/airflow"},{label:"jobs",permalink:"/tags/jobs"},{label:"prophecyManaged",permalink:"/tags/prophecy-managed"},{label:"fabric",permalink:"/tags/fabric"},{label:"connections",permalink:"/tags/connections"},{label:"email",permalink:"/tags/email"},{label:"smtp",permalink:"/tags/smtp"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Email Connection",id:"prophecy_managed_airflow_fabric_email_connections",description:"How to create Email connection in Prophecy Managed Airflow Fabric",tags:["scheduling","airflow","jobs","prophecyManaged","fabric","connections","email","smtp"]},sidebar:"defaultSidebar",previous:{title:"Databricks SQL Connection",permalink:"/Orchestration/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_dbx_sql_connections"},next:{title:"Snowflake Connection",permalink:"/Orchestration/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_snowflake_connections"}},l={},p=[{value:"Adding Email connection",id:"adding-email-connection",level:3}],s={toc:p},m="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"adding-email-connection"},"Adding Email connection"),(0,r.yg)("p",null,"To be able to send Email via Airflow using an Email Gem, you need to have Email connection in Prophecy Managed Airflow. Click on Add Connection button and select Email in (",(0,r.yg)("strong",{parentName:"p"},"1) Connection Type"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Add_connection",src:o(23879).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"Provide a ",(0,r.yg)("strong",{parentName:"p"},"(2) Connection Name")," to identify your connection, add a ",(0,r.yg)("strong",{parentName:"p"},"(3) Description")," of your choice, and provide the ",(0,r.yg)("strong",{parentName:"p"},"(4) Host")," as your SMTP host example ",(0,r.yg)("inlineCode",{parentName:"p"},"smtp.gmail.com"),". Provide the login credentials for this server in ",(0,r.yg)("strong",{parentName:"p"},"(5)Login")," and ",(0,r.yg)("strong",{parentName:"p"},"(6)Password")," and provide your SMTP port in ",(0,r.yg)("strong",{parentName:"p"},"(7) Port"),". Once done, hit ",(0,r.yg)("strong",{parentName:"p"},"(8) Save"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Email_connection",src:o(39632).A,width:"2880",height:"1726"})))}d.isMDXComponent=!0},23879:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/Add_Connection-e52b200f2986cda3be090212a02ff872.png"},39632:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/Email_connection-6f392517477fe16388989d4f089be6ed.png"}}]);