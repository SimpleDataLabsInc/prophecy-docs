"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[50039],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),y=r,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},89786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const i={title:"Data Quality",id:"data-quality",description:"Data Quality",sidebar_position:8,tags:["spark","development","functions","expressions"]},o=void 0,s={unversionedId:"Spark/data-quality",id:"Spark/data-quality",title:"Data Quality",description:"Data Quality",source:"@site/docs/Spark/data-quality.md",sourceDirName:"Spark",slug:"/Spark/data-quality",permalink:"/Spark/data-quality",draft:!1,tags:[{label:"spark",permalink:"/tags/spark"},{label:"development",permalink:"/tags/development"},{label:"functions",permalink:"/tags/functions"},{label:"expressions",permalink:"/tags/expressions"}],version:"current",sidebarPosition:8,frontMatter:{title:"Data Quality",id:"data-quality",description:"Data Quality",sidebar_position:8,tags:["spark","development","functions","expressions"]},sidebar:"defaultSidebar",previous:{title:"Unit Testing",permalink:"/Spark/tests"},next:{title:"Extensibility",permalink:"/Spark/extensibility/"}},l={},c=[{value:"Expectations",id:"expectations",level:2},{value:"How to set expectations on your Dataset",id:"how-to-set-expectations-on-your-dataset",level:3},{value:"How to enable and schedule the Expectations",id:"how-to-enable-and-schedule-the-expectations",level:3},{value:"Data Observability view",id:"data-observability-view",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Data quality refers to the accuracy, relevance, completeness, and consistency of data. In today's data-driven world, the quality of data is paramount to making informed decisions. Poor quality data can lead to incorrect decisions, which can have a significant impact on businesses and organizations."),(0,r.yg)("p",null,"There are several factors that affect data quality. These include data entry errors, data duplication, missing data, inconsistent data, and outdated data. These issues can arise from human error, system errors, or technical issues such as data integration problems.\nTo ensure data quality, it is important to establish a data governance framework. This framework includes policies, procedures, and standards that ensure data is accurate, complete, and consistent."),(0,r.yg)("p",null,"In Prophecy, you, as a user, can now easily set ",(0,r.yg)("strong",{parentName:"p"},"Expectations")," on your data such as uniqueness, range, and more. You can then schedule these ",(0,r.yg)("strong",{parentName:"p"},"expectations")," to run at fixed ",(0,r.yg)("strong",{parentName:"p"},"Schedules"),", and receive alerts whenever any mismatch occurs, empowering you to maintain the quality of your data."),(0,r.yg)("h2",{id:"expectations"},"Expectations"),(0,r.yg)("p",null,"Expectations are the measures that you can set on your Dataset to ensure data quality. These measures can check for duplication, missing data, inconsistencies, and more."),(0,r.yg)("h3",{id:"how-to-set-expectations-on-your-dataset"},"How to set expectations on your Dataset"),(0,r.yg)("p",null,'To set expectations in Prophecy, click on the "Expectations" tab in the Dataset view. From there, you can choose from a variety of expectation types, such as "No Duplicates," "Range Check," and "Not null." and many more.'),(0,r.yg)("h3",{id:"how-to-enable-and-schedule-the-expectations"},"How to enable and schedule the Expectations"),(0,r.yg)("p",null,"Once expectations are added, users can enable them and release their project to start running them on their data."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Please note, Expectations should be enabled and Project needs to be released via Prophecy, to be able to Run the Expecations")),(0,r.yg)("h3",{id:"data-observability-view"},"Data Observability view"),(0,r.yg)("p",null,"In the Data Observability tab, users can monitor their expectations as well as Job runs. This page should be monitored closely for all scheduled expectations and jobs, as users would be able to see past runs, filter out failed runs/quality incidents, and filter by project/timeline, among other features."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Coming soon: Prophecy will add the ability to view detailed statistics and visualizations of their data, such as data distribution, missing values, and outliers. This will allow users to quickly identify any potential issues with their data and take corrective action as needed.")))}p.isMDXComponent=!0}}]);