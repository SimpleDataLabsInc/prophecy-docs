"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[78334],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),y=a,g=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},96325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const i={sidebar_position:2,id:"July_2024",description:"Release notes for July",title:"July 2024",tags:["release notes","changelog","july"]},o=void 0,l={unversionedId:"release_notes/2024/July_2024",id:"release_notes/2024/July_2024",title:"July 2024",description:"Release notes for July",source:"@site/docs/release_notes/2024/july2024.md",sourceDirName:"release_notes/2024",slug:"/release_notes/2024/July_2024",permalink:"/release_notes/2024/July_2024",draft:!1,tags:[{label:"release notes",permalink:"/tags/release-notes"},{label:"changelog",permalink:"/tags/changelog"},{label:"july",permalink:"/tags/july"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"July_2024",description:"Release notes for July",title:"July 2024",tags:["release notes","changelog","july"]},sidebar:"defaultSidebar",previous:{title:"August 2024",permalink:"/release_notes/2024/August_2024"},next:{title:"June 2024",permalink:"/release_notes/2024/June_2024"}},s={},u=[{value:"3.3.8.* (July 8, 2024)",id:"338-july-8-2024",level:2},{value:"Features",id:"Features338",level:3},{value:"Supporting maven dependencies for Livy",id:"supporting-maven-dependencies-for-livy",level:4},{value:"Airflow Copilot enhancements",id:"airflow-copilot-enhancements",level:4},{value:"Pipeline Monitoring (beta)",id:"pipeline-monitoring-beta",level:4},{value:"Minor Enhancements",id:"minor-enhancements",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"338-july-8-2024"},"3.3.8.","*"," (July 8, 2024)"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Prophecy Python libs version: 1.9.9"),(0,a.yg)("li",{parentName:"ul"},"Prophecy Scala libs version: 8.0.22")),(0,a.yg)("h3",{id:"Features338"},"Features"),(0,a.yg)("h4",{id:"supporting-maven-dependencies-for-livy"},"Supporting maven dependencies for Livy"),(0,a.yg)("p",null,"Prophecy now supports adding Maven dependencies to Pipelines, which are automatically installed on a cluster during Pipeline attachment. This feature, previously available for Databricks, is now extended to Livy Fabrics."),(0,a.yg)("h4",{id:"airflow-copilot-enhancements"},"Airflow Copilot enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"New Categories And Gems"),": We have introduced new categories and Gems, including SFTP Sensor, SFTP to Snowflake, Tableau Extract, and SFTP to S3. The Gem Palette has been re-categorized with new sections for Data Transfer, Trigger/Notify, etc., to enhance Gem discovery."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Simplified Model Gem"),": The UX for the Model Gem in Airflow has been simplified. The Model Gem now automatically handles running the current working branch for the selected model and schedules the same upon release. Users can still choose to override these settings in the UI.")),(0,a.yg)("h4",{id:"pipeline-monitoring-beta"},"Pipeline Monitoring (beta)"),(0,a.yg)("p",null,"Pipeline Monitoring enables Spark Copilot users to monitor and debug their scheduled and interactive Pipeline runs through Prophecy. When enabled, Prophecy highlights the Gem that causes the failure at runtime. Users can view log stack traces in the Prophecy UI to debug runtime issues faster. This feature is available for all interactive runs through the Prophecy UI and any scheduled Job runs."),(0,a.yg)("p",null,"To enable this, update the Prophecy Library version in your Project dependencies to the latest (1.9.9), and add the Enable Pipeline monitoring flag in Pipeline Settings.\nNote that this feature is currently in beta."),(0,a.yg)("h3",{id:"minor-enhancements"},"Minor Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Support for Apache Iceberg in Sources and Targets"),": Users can now use Iceberg Catalog tables for reading and writing data in Spark Copilot. This feature is currently available only in Python projects."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Duplicate Shared Pipelines"),': Users can now duplicate a shared Pipeline from a dependency project into their current project. This is useful for teams sharing a "starter" Pipeline with basic Gems and configurations, allowing other users to copy and start new Pipeline development.'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Support DBR 14.x and 15.x"),": Prophecy now supports Databricks Runtime versions 14.x and 15.x for all interactive and scheduled runs via Prophecy.")))}d.isMDXComponent=!0}}]);