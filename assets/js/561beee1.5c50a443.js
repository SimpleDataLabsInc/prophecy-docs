"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3379],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>d});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,d=u["".concat(i,".").concat(h)]||u[h]||c[h]||n;return r?a.createElement(d,s(s({ref:t},g),{},{components:r})):a.createElement(d,s({ref:t},g))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},89041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var a=r(58168),o=(r(96540),r(15680));const n={title:"Subgraph",id:"subgraph",description:"Working with Subgraphs",tags:[],todo:!0},s=void 0,p={unversionedId:"low-code-spark/gems/subgraph/subgraph",id:"low-code-spark/gems/subgraph/subgraph",title:"Subgraph",description:"Working with Subgraphs",source:"@site/docs/low-code-spark/gems/subgraph/subgraph.md",sourceDirName:"low-code-spark/gems/subgraph",slug:"/low-code-spark/gems/subgraph/",permalink:"/low-code-spark/gems/subgraph/",draft:!1,tags:[],version:"current",frontMatter:{title:"Subgraph",id:"subgraph",description:"Working with Subgraphs",tags:[],todo:!0},sidebar:"defaultSidebar",previous:{title:"Pinecone Lookup",permalink:"/low-code-spark/gems/machine-learning/ml-pinecone-lookup"},next:{title:"Basic Subgraph",permalink:"/low-code-spark/gems/subgraph/basic-subgraph"}},i={},l=[{value:"Types of Subgraphs",id:"types-of-subgraphs",level:2},{value:"Create your own type of Subgraph",id:"create-your-own-type-of-subgraph",level:2}],g={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Subgraph allows you to take multiple different Gems and wrap them under a single reusable parent Gem. It allows the user to decompose complex logic into reusable components. See how to ",(0,o.yg)("strong",{parentName:"p"},"create")," and ",(0,o.yg)("strong",{parentName:"p"},"publish")," a Subgraph in the video below."),(0,o.yg)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,o.yg)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,o.yg)("iframe",{src:"https://fast.wistia.net/embed/iframe/e1q56n0gjb?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,o.yg)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),(0,o.yg)("h2",{id:"types-of-subgraphs"},"Types of Subgraphs"),(0,o.yg)("p",null,"There are three types of Subgraph available by default. The ",(0,o.yg)("a",{parentName:"p",href:"./basic-subgraph"},"Basic")," Subgraph is a great introduction to using Subgraphs."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"./basic-subgraph"},"Basic")),(0,o.yg)("td",{parentName:"tr",align:null},"Captures one or more Gems within a Pipeline to reuse across other Pipelines and Projects.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"./table-iterator"},"Table Iterator")),(0,o.yg)("td",{parentName:"tr",align:null},"Iterates over one or more Gems for each row of the first input DataFrame. Table iterator is available for Python Projects only.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"/low-code-spark/gems/subgraph/#create-your-own-type-of-subgraph"},"Novel Type")),(0,o.yg)("td",{parentName:"tr",align:null},"Apply any custom logic to the group of Gems present inside the Subgraph.")))),(0,o.yg)("h2",{id:"create-your-own-type-of-subgraph"},"Create your own type of Subgraph"),(0,o.yg)("p",null,"You can also create your own Subgraph to apply any custom logic on the group of Gems present inside it. For example Try Catch, other kinds of Iterators, etc."),(0,o.yg)("p",null,"To create your own Subgraph type, Go to the project you want to create the Gem in.\nClick on the ",(0,o.yg)("strong",{parentName:"p"},"(1) Create Gem")," button. This will open up the ",(0,o.yg)("strong",{parentName:"p"},"Create Gem")," Form. Provide a ",(0,o.yg)("strong",{parentName:"p"},"(2) Name")," for the Gem, and select the mode as ",(0,o.yg)("strong",{parentName:"p"},"Control Flow Gem"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Create_subgraph_gem",src:r(69277).A,width:"2880",height:"1084"})),(0,o.yg)("p",null,"This takes to you the Gem Code Editor with a basic structure of the code generated. Here you can start modifying your dialog, validation and the actual logic of the Gem.\nRead ",(0,o.yg)("a",{parentName:"p",href:"/package-hub/package-builder/Gem-builder"},"here")," for more details of the Gem code. More detailed docs on writing Subgraph Gems to follow soon."),(0,o.yg)("p",null,"The newly constructed Subgraph Gem can be utilized within any Pipeline of this Project, accessible through the Subgraph menu as demonstrated below.\nFurthermore, you have the option to Release this project, enabling its use as a dependency in other projects, thus incorporating the created Gem into various projects.\nRead ",(0,o.yg)("a",{parentName:"p",href:"/package-hub/"},"here")," for more details on project as a dependency."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Use_subgraph",src:r(93338).A,width:"2880",height:"1726"})))}c.isMDXComponent=!0},93338:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Use_new_subgraph-1d2cc10b5e0989582c58f34e83837f63.png"},69277:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/create_subgraph_type-4b13fe95ed8b8624a3920930f2ec4809.png"}}]);