"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[36081],{15680:(e,r,t)=>{t.d(r,{xA:()=>y,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},y=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return t?n.createElement(g,i(i({ref:r},y),{},{components:t})):n.createElement(g,i({ref:r},y))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30101:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(58168),a=(t(96540),t(15680));const o={title:"Prophecy versions support",id:"versions_support",description:"Prophecy versions support",sidebar_position:1,tags:["compatibility","matrix","version","chart","library","plib","plibs"]},i=void 0,l={unversionedId:"release_notes/version_chart/versions_support",id:"release_notes/version_chart/versions_support",title:"Prophecy versions support",description:"Prophecy versions support",source:"@site/docs/release_notes/version_chart/versions_support.md",sourceDirName:"release_notes/version_chart",slug:"/release_notes/version_chart/versions_support",permalink:"/release_notes/version_chart/versions_support",draft:!1,tags:[{label:"compatibility",permalink:"/tags/compatibility"},{label:"matrix",permalink:"/tags/matrix"},{label:"version",permalink:"/tags/version"},{label:"chart",permalink:"/tags/chart"},{label:"library",permalink:"/tags/library"},{label:"plib",permalink:"/tags/plib"},{label:"plibs",permalink:"/tags/plibs"}],version:"current",sidebarPosition:1,frontMatter:{title:"Prophecy versions support",id:"versions_support",description:"Prophecy versions support",sidebar_position:1,tags:["compatibility","matrix","version","chart","library","plib","plibs"]},sidebar:"mySidebar",previous:{title:"Version Chart",permalink:"/release_notes/version_chart/"},next:{title:"Release Notes",permalink:"/release_notes/"}},s={},p=[{value:"Release version system",id:"release-version-system",level:2},{value:"Extended Maintenance release",id:"extended-maintenance-release",level:2},{value:"Required resources",id:"required-resources",level:3},{value:"Prophecy support lifecycles",id:"prophecy-support-lifecycles",level:2},{value:"Prophecy version lifecycle",id:"prophecy-version-lifecycle",level:3},{value:"Prophecy version",id:"prophecy-version",level:2},{value:"Software Version API",id:"software-version-api",level:3}],y={toc:p},u="wrapper";function c(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This page describes the Prophecy versioning system, version types, and version lifecycles."),(0,a.yg)("h2",{id:"release-version-system"},"Release version system"),(0,a.yg)("p",null,"The following table shows details of the different Prophecy version types."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Version type"),(0,a.yg)("th",{parentName:"tr",align:null},"Example"),(0,a.yg)("th",{parentName:"tr",align:null},"Frequency (approx.)"),(0,a.yg)("th",{parentName:"tr",align:null},"End-of-support"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Extended Maintenance (EM) release"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"v3.4.1.0 EM")),(0,a.yg)("td",{parentName:"tr",align:null},"Every four months"),(0,a.yg)("td",{parentName:"tr",align:null},"After one year")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Major"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"v3.4.0.0")),(0,a.yg)("td",{parentName:"tr",align:null},"Every four months"),(0,a.yg)("td",{parentName:"tr",align:null},"After six months")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Minor"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"v3.3.11.0")),(0,a.yg)("td",{parentName:"tr",align:null},"Every three weeks"),(0,a.yg)("td",{parentName:"tr",align:null},"After six months")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Patch"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"v3.3.11.7")),(0,a.yg)("td",{parentName:"tr",align:null},"When needed"),(0,a.yg)("td",{parentName:"tr",align:null},"After six months")))),(0,a.yg)("h2",{id:"extended-maintenance-release"},"Extended Maintenance release"),(0,a.yg)("p",null,"Extended Maintenance (EM) releases provide you with a long-term support Prophecy version, along with the following benefits:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Upgraded third party libraries for robust security posture"),(0,a.yg)("li",{parentName:"ul"},"Full performance and scale testing to check resource guidance"),(0,a.yg)("li",{parentName:"ul"},"Direct upgrade path from a previous EM release to the next one"),(0,a.yg)("li",{parentName:"ul"},"One year of technical support and hotfixes for critical issues")),(0,a.yg)("p",null,"You can expect a new Extended Maintenance release two to six weeks after each Major release."),(0,a.yg)("h3",{id:"required-resources"},"Required resources"),(0,a.yg)("p",null,"Starting with ",(0,a.yg)("inlineCode",{parentName:"p"},"v3.4.1.0 EM"),", SQL Sandbox is enabled, so every SQL Pipeline session will spin up an additional pod with the following configuration:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"CPU: 500m"),(0,a.yg)("li",{parentName:"ul"},"Memory: 512Mi")),(0,a.yg)("p",null,"After upgrading to 3.4.1, you must enable SQL Sandbox Config in the UI by navigating to the ",(0,a.yg)("strong",{parentName:"p"},"Sandbox Config")," tab in the Config sub tab of the Admin Settings."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'"sqlSandboxPoolSize"')," must be set to a minimum of ",(0,a.yg)("inlineCode",{parentName:"p"},"2"),". This parameter determines the number of pods that are kept in a ready state. You will need additional SQL Sandbox resources for each simultaneous user session."),(0,a.yg)("h2",{id:"prophecy-support-lifecycles"},"Prophecy support lifecycles"),(0,a.yg)("p",null,"The following table describes the support stages for Prophecy versions. Prophecy supports GA versions for six months, unless the version is an Extended Maintenance (EM) release, which Prophecy supports for one year. For information on supported Prophecy versions, see ",(0,a.yg)("a",{parentName:"p",href:"/release_notes/version_chart/"},"Version Chart"),"."),(0,a.yg)("p",null,"Workloads on unsupported Prophecy versions may continue to run, but Prophecy doesn't provide support or fixes."),(0,a.yg)("h3",{id:"prophecy-version-lifecycle"},"Prophecy version lifecycle"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Phase"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GA, full support for Extended Maintenance releases"),(0,a.yg)("td",{parentName:"tr",align:null},"Critical stability and security fixes are backported only for EM releases.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"End of support"),(0,a.yg)("td",{parentName:"tr",align:null},"If a version is unsupported, then workloads running on these versions receive no Prophecy support.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"End of Life"),(0,a.yg)("td",{parentName:"tr",align:null},"Prophecy reserves the right to completely remove a release version at any time after support ends.")))),(0,a.yg)("h2",{id:"prophecy-version"},"Prophecy version"),(0,a.yg)("p",null,"You can use the Software Version API to retrieve your current Prophecy version number."),(0,a.yg)("h3",{id:"software-version-api"},"Software Version API"),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -s 'https://<prophecy-env-url>/athena/api/v1/cluster' | jq -r .current_version.controlplane_version\n")),(0,a.yg)("p",null,"Response:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"3.4.1.0\n")))}c.isMDXComponent=!0}}]);