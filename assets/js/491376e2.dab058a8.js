"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[8688],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(t),y=r,u=p["".concat(d,".").concat(y)]||p[y]||m[y]||i;return t?a.createElement(u,o(o({ref:n},g),{},{components:t})):a.createElement(u,o({ref:n},g))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={title:"Sandbox Configuration",id:"sandbox-config",description:"Prophecy installations allows configuration of various sandbox configuration",sidebar_position:4,tags:["sandbox","configuration","Scala","Python","reserve pods"]},o=void 0,l={unversionedId:"architecture/deployment/private-saas/sandbox-config",id:"architecture/deployment/private-saas/sandbox-config",title:"Sandbox Configuration",description:"Prophecy installations allows configuration of various sandbox configuration",source:"@site/docs/architecture/deployment/private-saas/sandbox-configuration.md",sourceDirName:"architecture/deployment/private-saas",slug:"/architecture/deployment/private-saas/sandbox-config",permalink:"/architecture/deployment/private-saas/sandbox-config",draft:!1,tags:[{label:"sandbox",permalink:"/tags/sandbox"},{label:"configuration",permalink:"/tags/configuration"},{label:"Scala",permalink:"/tags/scala"},{label:"Python",permalink:"/tags/python"},{label:"reserve pods",permalink:"/tags/reserve-pods"}],version:"current",sidebarPosition:4,frontMatter:{title:"Sandbox Configuration",id:"sandbox-config",description:"Prophecy installations allows configuration of various sandbox configuration",sidebar_position:4,tags:["sandbox","configuration","Scala","Python","reserve pods"]},sidebar:"defaultSidebar",previous:{title:"Object Store Configuration",permalink:"/architecture/deployment/private-saas/object-store-config"},next:{title:"Amazon EMR with Apache Livy",permalink:"/architecture/deployment/EMR-livy-installation-guide"}},d={},s=[{value:"What is sandboxing",id:"what-is-sandboxing",level:2},{value:"How to configure sandboxes",id:"how-to-configure-sandboxes",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Configuration Variables",id:"configuration-variables",level:3}],g={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In the traditional Prophecy deployment model, a single microservice known as the editor web was tasked with managing all user requests using a threading approach. Each user request corresponds to a browser tab (session) utilized by individuals to execute operations on their pipelines within our integrated development environment (IDE). However, this model encountered constraints in isolation and vertically scaling the micro-service to accommodate the growing volume of user requests. As a result, this engendered significant resource consumption within the editor web microservice, ultimately impairing its ability to efficiently handle requests."),(0,r.yg)("h2",{id:"what-is-sandboxing"},"What is sandboxing"),(0,r.yg)("p",null,"To tackle the aforementioned challenge, in Prophecy version 3.2, we introduced a novel approach to isolation and load manaGement known as sandboxing. This feature enables the provisioning of a pair of microservices for each user request: the Gem Plugin and Schema Analysis together termed as a single sandbox. This empowers users to execute their pipelines independently within dedicated environments. For instance, in a scenario where there are three users each with two browser tabs open in the IDE, this results in the provisioning of six pods each for the Gem Plugin and Schema Analysis. Consequently, users can seamlessly run their pipelines without interference in complete isolation."),(0,r.yg)("h2",{id:"how-to-configure-sandboxes"},"How to configure sandboxes"),(0,r.yg)("p",null,"Newer versions of Prophecy are defaulted to use sandboxing (",(0,r.yg)("inlineCode",{parentName:"p"},"ENABLE_SANDBOXING: true"),") as the default way to deploy Prophecy services. To configure object store settings in the Prophecy UI, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Log in to the Prophecy UI as an admin user."),(0,r.yg)("li",{parentName:"ol"},"Click on the ",(0,r.yg)("inlineCode",{parentName:"li"},"three dots")," at the bottom left corner and select the ",(0,r.yg)("inlineCode",{parentName:"li"},"settings icon")," from the submenu."),(0,r.yg)("li",{parentName:"ol"},"Navigate to the ",(0,r.yg)("inlineCode",{parentName:"li"},"Admin")," main tab."),(0,r.yg)("li",{parentName:"ol"},"Within the Admin main tab, access the ",(0,r.yg)("inlineCode",{parentName:"li"},"Config")," sub tab."),(0,r.yg)("li",{parentName:"ol"},"Finally, click on the ",(0,r.yg)("inlineCode",{parentName:"li"},"sandboxConfig")," sub tab to configure the settings.")),(0,r.yg)("h2",{id:"configuration-options"},"Configuration options"),(0,r.yg)("p",null,"Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Please make sure to maintain a JSON format mentioned below while configuring the different options."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "enableSandboxSharing": false,\n  "PythonSandbox": {\n    "GemPluginPod": {\n      "cpu": {\n        "limit": "2",\n        "request": "0.5"\n      },\n      "memory": {\n        "limit": "2.5Gi",\n        "request": "2.5Gi"\n      }\n    },\n    "schemaAnalysisPod": {\n      "cpu": {\n        "limit": "2",\n        "request": "0.5"\n      },\n      "memory": {\n        "limit": "2.5Gi",\n        "request": "2.5Gi"\n      }\n    }\n  },\n  "PythonSandboxPoolSize": 2,\n  "sandboxImageRegistry": "gcr.io/prophecy-share",\n  "sandboxImageTag": "<current-prophecy-version>",\n  "sandboxMaxTotalPods": 100,\n  "sandboxMonitoringInterval": 2,\n  "sandboxPoolHealthCheckInterval": 100,\n  "sandboxStalePodsCleanupInterval": 4,\n  "ScalaSandbox": {\n    "GemPluginPod": {\n      "cpu": {\n        "limit": "2",\n        "request": "0.5"\n      },\n      "memory": {\n        "limit": "2.5Gi",\n        "request": "2.5Gi"\n      }\n    },\n    "schemaAnalysisPod": {\n      "cpu": {\n        "limit": "2",\n        "request": "0.5"\n      },\n      "memory": {\n        "limit": "2.5Gi",\n        "request": "2.5Gi"\n      }\n    }\n  },\n  "ScalaSandboxPoolSize": 3\n}\n')),(0,r.yg)("h3",{id:"configuration-variables"},"Configuration Variables"),(0,r.yg)("p",null,"These are the generic configurations which are required to be set irrespective of the provider."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Configuration variable name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"enableSandboxSharing")),(0,r.yg)("td",{parentName:"tr",align:null},"is an advanced feature that let's users share a sandbox between multiple sessions"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandbox.GemPluginPod.cpu.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the CPU limit of the Python Gem plugin pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandbox.GemPluginPod.cpu.request")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the CPU request of the Python Gem plugin pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0.5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandbox.GemPluginPod.memory.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the Memory limit of the Python Gem plugin pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2.5Gi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandbox.GemPluginPod.memory.request")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the Memory request of the Python Gem plugin pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2.5Gi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandbox.schemaAnalysisPod.cpu.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the CPU limit of the Python schema analysis pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandbox.schemaAnalysisPod.cpu.request")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the CPU request of the Python schema analysis pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0.5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandbox.schemaAnalysisPod.memory.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the Memory limit of the Python schema analysis pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2.5Gi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandbox.schemaAnalysisPod.memory.request")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the Memory request of the Python schema analysis pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2.5Gi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PythonSandboxPoolSize")),(0,r.yg)("td",{parentName:"tr",align:null},"number of concurrent Python sessions/tabs startup (reserved) allowed"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sandboxImageRegistry")),(0,r.yg)("td",{parentName:"tr",align:null},"image registry to be used for pulling sandbox images from"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcr.io/prophecy-share"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sandboxImageTag")),(0,r.yg)("td",{parentName:"tr",align:null},"image tag to be used for pulling sandbox images. Defaulted to current Prophecy version"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<current-prophecy-version-running>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sandboxMaxTotalPods")),(0,r.yg)("td",{parentName:"tr",align:null},"maximum number of Scala + Python (Gem plugin + schema analysis) pods allowed. This is used to restrict the number of pods spun up in case of surge of users."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sandboxMonitoringInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring interval used to spin up new sandbox pods as per session requests in seconds (s)."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sandboxPoolHealthCheckInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"Pool health check interval used to check the health of each pod in seconds (s)."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"100"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sandboxStalePodsCleanupInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"Clean up period used to clean up unused pods in seconds (s)."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"4"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandbox.GemPluginPod.cpu.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the CPU limit of the Scala Gem plugin pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandbox.GemPluginPod.cpu.request")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the CPU request of the Scala Gem plugin pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0.5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandbox.GemPluginPod.memory.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the Memory limit of the Scala Gem plugin pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2.5Gi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandbox.GemPluginPod.memory.request")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the Memory request of the Scala Gem plugin pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2.5Gi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandbox.schemaAnalysisPod.cpu.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the CPU limit of the Scala schema analysis pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandbox.schemaAnalysisPod.cpu.request")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the CPU request of the Scala schema analysis pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0.5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandbox.schemaAnalysisPod.memory.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the Memory limit of the Scala schema analysis pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2.5Gi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandbox.schemaAnalysisPod.memory.request")),(0,r.yg)("td",{parentName:"tr",align:null},"Configures the Memory request of the Scala schema analysis pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2.5Gi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ScalaSandboxPoolSize")),(0,r.yg)("td",{parentName:"tr",align:null},"number of concurrent Scala sessions/tabs startup (reserved) allowed"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"3"))))))}m.isMDXComponent=!0}}]);