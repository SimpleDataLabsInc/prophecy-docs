"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[9733],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},w=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),w=n,d=f["".concat(s,".").concat(w)]||f[w]||u[w]||a;return t?o.createElement(d,i(i({ref:r},c),{},{components:t})):o.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=w;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[f]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},44675:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={sidebar_position:1,title:"Setup",id:"setup_airflow",description:"How Prophecy integrates with Airflow",tags:["scheduling","airflow","jobs"]},i=void 0,l={unversionedId:"low-code-jobs/airflow/setup/setup_airflow",id:"low-code-jobs/airflow/setup/setup_airflow",title:"Setup",description:"How Prophecy integrates with Airflow",source:"@site/docs/low-code-jobs/airflow/setup/setup.md",sourceDirName:"low-code-jobs/airflow/setup",slug:"/low-code-jobs/airflow/setup/",permalink:"/low-code-jobs/airflow/setup/",draft:!1,tags:[{label:"scheduling",permalink:"/tags/scheduling"},{label:"airflow",permalink:"/tags/airflow"},{label:"jobs",permalink:"/tags/jobs"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Setup",id:"setup_airflow",description:"How Prophecy integrates with Airflow",tags:["scheduling","airflow","jobs"]},sidebar:"defaultSidebar",previous:{title:"Airflow",permalink:"/low-code-jobs/airflow/"},next:{title:"Prophecy Managed",permalink:"/low-code-jobs/airflow/setup/prophecy-managed/"}},s={},p=[{value:"Create an Airflow Job",id:"create-an-airflow-job",level:2}],c={toc:p},f="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(f,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To connect to a running Airflow Instance, you would need to create a ",(0,n.kt)("a",{parentName:"p",href:"/concepts/fabrics/"},"Fabric")," of type Airflow.\nProphecy provides you with three different types of Fabrics depending upon where your Airflow Instance is running."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/low-code-jobs/airflow/setup/prophecy-managed/"},"Prophecy Managed Airflow"))," - for those who are new to Airflow and do not have an Airflow instance, we provide a Prophecy Managed Airflow to expedite your trial and POC.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/low-code-jobs/airflow/setup/MWAA_fabric"},"MWAA"))," - for those who are using Amazon Web Services and have an Amazon Managed Workflows for Apache Airflow instance running.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/low-code-jobs/airflow/setup/composer_fabric"},"Composer"))," - for those who are using Google Cloud Platform and have a GCP Cloud Composer Airflow instance running."))),(0,n.kt)("h2",{id:"create-an-airflow-job"},"Create an Airflow Job"),(0,n.kt)("p",null,"Once the Airflow Fabric is setup, Airflow Job scheduling is done with a low-code easy-to-user interface. Follow this guide to ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/airflow-with-databricks#2-create-an-airflow-job"},"Create an Airflow Job"),"."))}u.isMDXComponent=!0}}]);