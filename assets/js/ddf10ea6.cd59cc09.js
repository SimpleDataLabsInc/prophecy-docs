"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[89636],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),y=n,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},17007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const o={title:"Data privacy with Data Copilot",id:"copilot-data-privacy",description:"The AI assistant data privacy for data Pipelines and models",sidebar_position:11,tags:["concepts","copilot","generativeai","data privacy"]},i=void 0,c={unversionedId:"concepts/copilot/copilot-data-privacy",id:"concepts/copilot/copilot-data-privacy",title:"Data privacy with Data Copilot",description:"The AI assistant data privacy for data Pipelines and models",source:"@site/docs/concepts/copilot/copilot-data-privacy.md",sourceDirName:"concepts/copilot",slug:"/concepts/copilot/copilot-data-privacy",permalink:"/concepts/copilot/copilot-data-privacy",draft:!1,tags:[{label:"concepts",permalink:"/tags/concepts"},{label:"copilot",permalink:"/tags/copilot"},{label:"generativeai",permalink:"/tags/generativeai"},{label:"data privacy",permalink:"/tags/data-privacy"}],version:"current",sidebarPosition:11,frontMatter:{title:"Data privacy with Data Copilot",id:"copilot-data-privacy",description:"The AI assistant data privacy for data Pipelines and models",sidebar_position:11,tags:["concepts","copilot","generativeai","data privacy"]},sidebar:"defaultSidebar",previous:{title:"Enable Data Copilot",permalink:"/concepts/copilot/enable-data-copilot"},next:{title:"Metadata",permalink:"/metadata/"}},s={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Prophecy team employs top-notch industry practices to safeguard the security of their application and maintain the privacy of customer data. Below are just a few components of our comprehensive security strategy and system structure:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Prophecy ",(0,n.yg)("strong",{parentName:"li"},"does not")," store or send anything from your data plane to any third-party large language model (LLM) providers. Instead, Prophecy makes use of rich metadata to construct the knowledge graph. As a result, Data Copilot can interface with LLM providers while maintaining the privacy of the data itself."),(0,n.yg)("li",{parentName:"ul"},"Prophecy IDE is hosted on secure servers on AWS. All storage systems are encrypted, and all servers are tightly access controlled and audited. Data is encrypted in transit at all times."),(0,n.yg)("li",{parentName:"ul"},"Alternatively, Prophecy\u2019s IDE can be installed within an Enterprise network as desired."),(0,n.yg)("li",{parentName:"ul"},"Prophecy\u2019s IDE accesses your environment through a single IP address dedicated to you, allowing you to protect access to your data resources at the network level. The credentials are stored per user, and only a fully authenticated user can access their environment."),(0,n.yg)("li",{parentName:"ul"},"An annual penetration test is performed to validate Prophecy\u2019s posture and identify vulnerabilities. Our latest penetration test report was issued in November 2022."),(0,n.yg)("li",{parentName:"ul"},"Prophecy maintains SOC-2 compliance as audited by PrescientAssurance."),(0,n.yg)("li",{parentName:"ul"},"Read more details on Prophecy\u2019s security and compliance posture at our Security Portal ",(0,n.yg)("a",{parentName:"li",href:"https://security.Prophecy.io/"},"here"),".")))}u.isMDXComponent=!0}}]);