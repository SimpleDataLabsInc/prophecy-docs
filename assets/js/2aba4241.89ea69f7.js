"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[8216],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20408:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const s={sidebar_position:4,title:"Using Secrets in Pipelines",id:"using-secrets",description:"Working with Secrets in Pipelines and Gems",tags:["env-var","environment","variable","secrets"]},i=void 0,o={unversionedId:"low-code-spark/secret-management/using-secrets",id:"low-code-spark/secret-management/using-secrets",title:"Using Secrets in Pipelines",description:"Working with Secrets in Pipelines and Gems",source:"@site/docs/low-code-spark/secret-management/using-secrets.md",sourceDirName:"low-code-spark/secret-management",slug:"/low-code-spark/secret-management/using-secrets",permalink:"/low-code-spark/secret-management/using-secrets",draft:!1,tags:[{label:"env-var",permalink:"/tags/env-var"},{label:"environment",permalink:"/tags/environment"},{label:"variable",permalink:"/tags/variable"},{label:"secrets",permalink:"/tags/secrets"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Using Secrets in Pipelines",id:"using-secrets",description:"Working with Secrets in Pipelines and Gems",tags:["env-var","environment","variable","secrets"]},sidebar:"defaultSidebar",previous:{title:"HashiCorp Vault",permalink:"/low-code-spark/secret-management/hashicorp-vault"},next:{title:"Expression Builder",permalink:"/low-code-spark/expression-builder"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:r,...s}=e;return(0,a.yg)(u,(0,n.A)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Once you have Secrets and ",(0,a.yg)("a",{parentName:"p",href:"/low-code-spark/secret-management/"},"Secret Providers")," created in Fabrics, you can ",(0,a.yg)("a",{parentName:"p",href:"/low-code-spark/secret-management/using-secrets"},"Use a secret")," in your Source and Target Gems in your Pipelines directly.\nAny Gem which requires a Authentication Field like Username or password,you will have an option to Insert Secret as shown below."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"use_secret",src:t(2218).A,width:"2880",height:"1084"})),(0,a.yg)("p",null,"Click on ",(0,a.yg)("strong",{parentName:"p"},"(1) Insert Secret"),", this will open the dropdown for all secrets and secrets providers available in your Fabric.\nIf you don't see your secrets, confirm you have correct Fabric selected in the top right corner.\nAttach a Cluster from top right corner to be able to ",(0,a.yg)("strong",{parentName:"p"},"(2) Refresh Secrets")," for any Provider."))}m.isMDXComponent=!0},2218:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/Use_secret-a1e811f96018f92edfe2ee315b0b7fe1.png"}}]);