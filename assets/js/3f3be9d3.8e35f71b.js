"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[71606],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||g[m]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const o={sidebar_position:1,id:"August_2024",description:"Release notes for August",title:"August 2024",tags:["release notes","changelog","august"]},l=void 0,i={unversionedId:"release_notes/2024/August_2024",id:"release_notes/2024/August_2024",title:"August 2024",description:"Release notes for August",source:"@site/docs/release_notes/2024/august2024.md",sourceDirName:"release_notes/2024",slug:"/release_notes/2024/August_2024",permalink:"/release_notes/2024/August_2024",draft:!1,tags:[{label:"release notes",permalink:"/tags/release-notes"},{label:"changelog",permalink:"/tags/changelog"},{label:"august",permalink:"/tags/august"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"August_2024",description:"Release notes for August",title:"August 2024",tags:["release notes","changelog","august"]},sidebar:"defaultSidebar",previous:{title:"Release Notes",permalink:"/release_notes/"},next:{title:"July 2024",permalink:"/release_notes/2024/July_2024"}},s={},u=[{value:"3.3.9.* (August 6, 2024)",id:"339-august-6-2024",level:2},{value:"Features",id:"Features339",level:3},{value:"Spark Copilot Enhancements",id:"spark-copilot-enhancements",level:4},{value:"SQL Copilot Enhancements",id:"sql-copilot-enhancements",level:4},{value:"Enhancements in Low-Code SQL",id:"enhancements-in-low-code-sql",level:5},{value:"Airflow Copilot Enhancements",id:"airflow-copilot-enhancements",level:4},{value:"Minor Enhancements",id:"minor-enhancements",level:3}],p={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"339-august-6-2024"},"3.3.9.","*"," (August 6, 2024)"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Prophecy Python libs version: 1.9.9"),(0,r.yg)("li",{parentName:"ul"},"Prophecy Scala libs version: 8.0.29")),(0,r.yg)("h3",{id:"Features339"},"Features"),(0,r.yg)("h4",{id:"spark-copilot-enhancements"},"Spark Copilot Enhancements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Support custom artifactory resolve plibs version"),": We now support adding custom Pypi or Maven dependencies for Pipelines running on all Spark Fabrics including EMR, Dataproc, etc.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Support for config resolution inside call_func()"),": Config variables inside of the ",(0,r.yg)("inlineCode",{parentName:"p"},"call_function()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"call_func()")," are now supported. The new syntax is ",(0,r.yg)("inlineCode",{parentName:"p"},'call_function("{{catalogName}}.{{database}}.{{funcName}}", "{{firstArg}}")'),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Support for proxy-user impersonation in Kerberos Livy Fabric Auth"),": As an admin user, you can configure multiple Keytab accounts in the ",(0,r.yg)("a",{parentName:"p",href:"/settings/admin-settings"},"Admin Settings"),". You can upload the Keytab files and set up proxy-user impersonation in Kerberos for secure authentication to Livy Fabrics."))),(0,r.yg)("h4",{id:"sql-copilot-enhancements"},"SQL Copilot Enhancements"),(0,r.yg)("h5",{id:"enhancements-in-low-code-sql"},"Enhancements in Low-Code SQL"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Target Model"),": In this release, we've updated the UX and capabilities of the target model in SQL projects. There are now the following tabs within the model:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Type & Format"),": Update the format of the model from View to Table"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Location"),": Update the location by overwriting the Database, Schema, or Alias"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Schema"),": Make schema changes"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"SQL Query"),": View and enable your custom SQL query"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Write Options"),": Use Write Modes such as Overwrite, Append, and Merge")))),(0,r.yg)("h4",{id:"airflow-copilot-enhancements"},"Airflow Copilot Enhancements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Support for partial run for Airflow Jobs"),": We've added play buttons on Gems, which you can use to start partial runs for Airflow Jobs.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Ability to create a model from the model dropdown"),": While configuring the model Gem in your Job, you now have the option to create a model from the Model dropdown."))),(0,r.yg)("h3",{id:"minor-enhancements"},"Minor Enhancements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Clone a Prophecy Job"),": You can now clone a Prophecy Job just as you may clone a Pipeline. This is useful for Job renaming issues.")))}g.isMDXComponent=!0}}]);