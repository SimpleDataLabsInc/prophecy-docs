"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[711],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=s,d=u["".concat(l,".").concat(h)]||u[h]||b[h]||o;return t?a.createElement(d,n(n({ref:r},c),{},{components:t})):a.createElement(d,n({ref:r},c))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,n=new Array(o);n[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:s,n[1]=i;for(var p=2;p<o;p++)n[p]=t[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},83213:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),s=(t(67294),t(3905));const o={sidebar_position:2,title:"Shareable Subgraphs",id:"shareable-subgraphs",description:"Sharable Subgraphs within the project and to other projects",tags:[]},n=void 0,i={unversionedId:"low-code-spark/pubsub/shareable-subgraphs",id:"low-code-spark/pubsub/shareable-subgraphs",title:"Shareable Subgraphs",description:"Sharable Subgraphs within the project and to other projects",source:"@site/docs/low-code-spark/pubsub/ShareableSubgraphs.md",sourceDirName:"low-code-spark/pubsub",slug:"/low-code-spark/pubsub/shareable-subgraphs",permalink:"/low-code-spark/pubsub/shareable-subgraphs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Shareable Subgraphs",id:"shareable-subgraphs",description:"Sharable Subgraphs within the project and to other projects",tags:[]},sidebar:"defaultSidebar",previous:{title:"Shareable UDFs",permalink:"/low-code-spark/pubsub/sharable-udfs"},next:{title:"Shareable Pipelines",permalink:"/low-code-spark/pubsub/shareable-pipelines"}},l={},p=[{value:"Configurable Subgraphs",id:"configurable-subgraphs",level:2},{value:"Sharing Subgraphs Across Pipelines",id:"sharing-subgraphs-across-pipelines",level:2},{value:"Sharing Subgraphs Across Projects",id:"sharing-subgraphs-across-projects",level:2}],c={toc:p},u="wrapper";function b(e){let{components:r,...t}=e;return(0,s.kt)(u,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Users can share published ",(0,s.kt)("a",{parentName:"p",href:"/low-code-spark/gems/subgraph"},"Subgraphs"),' across their Pipelines and Projects. This allows central Data Platform teams to build reusable code to cover a wide variety of business needs, such as Encryption/Decryption or Identity Masking, and have their "consumers" (the Data Practitioners) take a dependency on that reusable code.'),(0,s.kt)("h2",{id:"configurable-subgraphs"},"Configurable Subgraphs"),(0,s.kt)("p",null,"Use can add ",(0,s.kt)("a",{parentName:"p",href:"/low-code-spark/gems/subgraph#subgraph-configurations"},"configuration variables")," to Reusable Subgraphs and use these in the Gems of the Subgraph."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Please note only subgraph Configs can be used inside a Subgraph. Pipeline config variables cannot be used in Gems inside a subgraph. Similarly, Subgraph configs are not available outside to other gems of the Pipeline.\nThese subgraph configs can only be edited from inside the Subgraph."),(0,s.kt)("p",{parentName:"admonition"},"These subgraph configurations will also be shown as part of Pipeline configs.")),(0,s.kt)("p",null,"Please see this video for an example"),(0,s.kt)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,s.kt)("iframe",{src:"https://www.loom.com/embed/0aead9d3957b40d48574e3dfd09d2740",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,s.kt)("h2",{id:"sharing-subgraphs-across-pipelines"},"Sharing Subgraphs Across Pipelines"),(0,s.kt)("p",null,"Once a subgraph is Published, a User can simply add it to any other Pipeline of the same project.\nPlease see this video for an example"),(0,s.kt)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,s.kt)("iframe",{src:"https://www.loom.com/embed/c7a5bc325e574c8181cb011f193fd1d4",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,s.kt)("h2",{id:"sharing-subgraphs-across-projects"},"Sharing Subgraphs Across Projects"),(0,s.kt)("p",null,"Once a Project (let's call it ",(0,s.kt)("em",{parentName:"p"},"BaseProject"),") is Released and added as a ",(0,s.kt)("a",{parentName:"p",href:"/low-code-spark/pubsub#project-dependency"},"Dependency")," to another Project(let's call it ",(0,s.kt)("em",{parentName:"p"},"AppProject"),"), all Subgraphs from ",(0,s.kt)("em",{parentName:"p"},"BaseProject")," are available in all Pipelines of ",(0,s.kt)("em",{parentName:"p"},"AppProject"),"."),(0,s.kt)("p",null,"Please see this video for an example"),(0,s.kt)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,s.kt)("iframe",{src:"https://www.loom.com/embed/dc107ed4ebf54fa08a832e7fb40f4c03",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})))}b.isMDXComponent=!0}}]);