"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[72321],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},96582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={sidebar_position:9,id:"Feb_2024",description:"Release notes for February",title:"February 2024",tags:["release notes","changelog"]},i=void 0,s={unversionedId:"release_notes/2024/Feb_2024",id:"release_notes/2024/Feb_2024",title:"February 2024",description:"Release notes for February",source:"@site/docs/release_notes/2024/feb2024.md",sourceDirName:"release_notes/2024",slug:"/release_notes/2024/Feb_2024",permalink:"/release_notes/2024/Feb_2024",draft:!1,tags:[{label:"release notes",permalink:"/tags/release-notes"},{label:"changelog",permalink:"/tags/changelog"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"Feb_2024",description:"Release notes for February",title:"February 2024",tags:["release notes","changelog"]},sidebar:"defaultSidebar",previous:{title:"March 2024",permalink:"/release_notes/2024/March_2024"},next:{title:"January 2024",permalink:"/release_notes/2024/Jan_2024"}},l={},c=[{value:"3.3.1.* (Feb 28, 2024)",id:"331-feb-28-2024",level:2},{value:"Features",id:"Features",level:3},{value:"Low code Airflow Enhancements",id:"low-code-airflow-enhancements",level:4},{value:"Copilot Enhancements",id:"copilot-enhancements",level:4},{value:"3.3.0.* (Feb 05, 2024)",id:"330-feb-05-2024",level:2},{value:"Features",id:"FeaturesRelease330",level:3},{value:"Table Iterator Subgraph And Custom Subgraphs",id:"table-iterator-subgraph-and-custom-subgraphs",level:4},{value:"Automatic Code Regeneration",id:"automatic-code-regeneration",level:4},{value:"Secret Management",id:"secret-management",level:4},{value:"Dependency Revamp",id:"dependency-revamp",level:4},{value:"Minor Improvements",id:"UXImprovements330",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"331-feb-28-2024"},"3.3.1.","*"," (Feb 28, 2024)"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Prophecy Python libs version: 1.8.7"),(0,a.yg)("li",{parentName:"ul"},"Prophecy Scala libs version: 7.1.72")),(0,a.yg)("h3",{id:"Features"},"Features"),(0,a.yg)("h4",{id:"low-code-airflow-enhancements"},"Low code Airflow Enhancements"),(0,a.yg)("p",null,"With this Prophecy release, you can connect your self-hosted Apache Airflow Fabric to Prophecy for DAG creation and management in Low code Airflow. Also, we have added a new Gem for OnPremPipeline, easing deployment of Spark pipelines to On Prem Spark."),(0,a.yg)("h4",{id:"copilot-enhancements"},"Copilot Enhancements"),(0,a.yg)("p",null,"We have further enhanced your Copilot experience by enabling using AI to generate Macros in Low code SQL. Just click on the Copilot icon and effortlessly generate any required function using the magic of AI."),(0,a.yg)("h2",{id:"330-feb-05-2024"},"3.3.0.","*"," (Feb 05, 2024)"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Prophecy Python libs version: 1.8.4"),(0,a.yg)("li",{parentName:"ul"},"Prophecy Scala libs version: 7.1.66")),(0,a.yg)("h3",{id:"FeaturesRelease330"},"Features"),(0,a.yg)("h4",{id:"table-iterator-subgraph-and-custom-subgraphs"},"Table Iterator Subgraph And Custom Subgraphs"),(0,a.yg)("p",null,"Introducing the ",(0,a.yg)("a",{parentName:"p",href:"/Spark/gems/subgraph/table-iterator"},"Table Iterator Subgraph")," in Prophecy version 3.3. This new subgraph empowers users to iterate over one or more Gems for each row of the first input DataFrame. Additionally, users can create their own ",(0,a.yg)("a",{parentName:"p",href:"/Spark/gems/subgraph/#create-your-own-type-of-subgraph"},"Custom Subgraph")," to incorporate custom Iterators or control flow logic such as try-catch, conditional, etc.\nRead ",(0,a.yg)("a",{parentName:"p",href:"/Spark/gems/subgraph/"},"here")," for detailed documentation."),(0,a.yg)("h4",{id:"automatic-code-regeneration"},"Automatic Code Regeneration"),(0,a.yg)("p",null,"Prophecy now facilitates automatic code regeneration whenever a user makes changes that could potentially impact the generated code for other Pipelines and Projects. For instance, when updating dependencies or reusable components like UDFs, Subgraph, Datasets, etc., the system automatically triggers updates to all Pipelines .\nThis ensures seamless synchronization and alerts users to any potential impacts on their codebase."),(0,a.yg)("h4",{id:"secret-management"},"Secret Management"),(0,a.yg)("p",null,"Enhancing security, Prophecy now supports three different ",(0,a.yg)("a",{parentName:"p",href:"/Spark/secret-management/"},"Secret Providers"),": ",(0,a.yg)("a",{parentName:"p",href:"/Spark/secret-management/databricks-secrets"},"Databricks Secrets"),", ",(0,a.yg)("a",{parentName:"p",href:"/Spark/secret-management/hashicorp-vault"},"HashiCorp Vault"),", and ",(0,a.yg)("a",{parentName:"p",href:"/Spark/secret-management/env-variable"},"Environment Variables"),". Users can link these providers in the Fabric they want to use and securely access secrets in their Gems and Pipelines. This ensures that sensitive authentication credentials are stored in their Secret Providers and used securely by Prophecy."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Prophecy never accesses the value of these secrets. It only uses the keys to generate and execute correct code.")),(0,a.yg)("p",null,"Read ",(0,a.yg)("a",{parentName:"p",href:"/Spark/secret-management/"},"here")," for detailed documentation."),(0,a.yg)("h4",{id:"dependency-revamp"},"Dependency Revamp"),(0,a.yg)("p",null,"A revamp in the user experience and management of dependencies in Prophecy. Users can now customize Package hub and Custom dependencies at the Project level or override them for a specific Pipeline within the Project. User-defined Gems can also have third-party custom dependencies for pipelines using the Gem."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Existing dependencies, previously managed at the Pipeline level, will now be moved to the Project level for easier management. Users may notice uncommitted changes in their POM files. This change does not impact the functionality of pipelines or jobs.")),(0,a.yg)("h3",{id:"UXImprovements330"},"Minor Improvements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Node Search"),": The Search in the Top left corner now includes searching for any Gem in the open Pipeline. It highlights the Gem Name on the canvas, and clicking it pans the Pipeline to bring the Gem into the user's view.")))}d.isMDXComponent=!0}}]);