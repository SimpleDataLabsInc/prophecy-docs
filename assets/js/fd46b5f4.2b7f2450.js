"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[6055],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>g});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(o),f=a,g=d["".concat(l,".").concat(f)]||d[f]||m[f]||r;return o?t.createElement(g,i(i({ref:n},s),{},{components:o})):t.createElement(g,i({ref:n},s))}));function g(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},97407:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=o(87462),a=(o(67294),o(3905));const r={sidebar_position:5,title:"Email Connection",id:"prophecy_managed_airflow_fabric_email_connections",description:"How to create Email connection in Prophecy Managed Airflow Fabric",tags:["scheduling","airflow","jobs","prophecyManaged","fabric","connections","email","smtp"]},i=void 0,c={unversionedId:"low-code-jobs/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_email_connections",id:"low-code-jobs/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_email_connections",title:"Email Connection",description:"How to create Email connection in Prophecy Managed Airflow Fabric",source:"@site/docs/low-code-jobs/airflow/setup/prophecy-managed/connections/email-connection.md",sourceDirName:"low-code-jobs/airflow/setup/prophecy-managed/connections",slug:"/low-code-jobs/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_email_connections",permalink:"/low-code-jobs/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_email_connections",draft:!1,tags:[{label:"scheduling",permalink:"/tags/scheduling"},{label:"airflow",permalink:"/tags/airflow"},{label:"jobs",permalink:"/tags/jobs"},{label:"prophecyManaged",permalink:"/tags/prophecy-managed"},{label:"fabric",permalink:"/tags/fabric"},{label:"connections",permalink:"/tags/connections"},{label:"email",permalink:"/tags/email"},{label:"smtp",permalink:"/tags/smtp"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Email Connection",id:"prophecy_managed_airflow_fabric_email_connections",description:"How to create Email connection in Prophecy Managed Airflow Fabric",tags:["scheduling","airflow","jobs","prophecyManaged","fabric","connections","email","smtp"]},sidebar:"defaultSidebar",previous:{title:"Databricks SQL Connection",permalink:"/low-code-jobs/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_dbx_sql_connections"},next:{title:"Snowflake Connection",permalink:"/low-code-jobs/airflow/setup/prophecy-managed/connections/prophecy_managed_airflow_fabric_snowflake_connections"}},l={},p=[{value:"Adding Email connection",id:"adding-email-connection",level:3}],s={toc:p},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"adding-email-connection"},"Adding Email connection"),(0,a.kt)("p",null,"To be able to send Email via Airflow using an Email Gem, you need to have Email connection in Prophecy Managed Airflow. Click on Add Connection button and select Email in (",(0,a.kt)("strong",{parentName:"p"},"1) Connection Type"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add_connection",src:o(49269).Z,width:"2880",height:"1084"})),(0,a.kt)("p",null,"Provide a ",(0,a.kt)("strong",{parentName:"p"},"(2) Connection Name")," to identify your connection, add a ",(0,a.kt)("strong",{parentName:"p"},"(3) Description")," of your choice, and provide the ",(0,a.kt)("strong",{parentName:"p"},"(4) Host")," as your SMTP host example ",(0,a.kt)("inlineCode",{parentName:"p"},"smtp.gmail.com"),". Provide the login credentials for this server in ",(0,a.kt)("strong",{parentName:"p"},"(5)Login")," and ",(0,a.kt)("strong",{parentName:"p"},"(6)Password")," and provide your SMTP port in ",(0,a.kt)("strong",{parentName:"p"},"(7) Port"),". Once done, hit ",(0,a.kt)("strong",{parentName:"p"},"(8) Save"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Email_connection",src:o(66915).Z,width:"2880",height:"1726"})))}m.isMDXComponent=!0},49269:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/Add_Connection-e52b200f2986cda3be090212a02ff872.png"},66915:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/Email_connection-6f392517477fe16388989d4f089be6ed.png"}}]);