"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[56534],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),i=r(20053),c=r(84142),o=r(75489),a=r(16654),l=r(21312);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(o.A,{href:t,className:(0,i.A)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.A)("text--truncate",s.cardTitle),title:c},r," ",c),o&&n.createElement("p",{className:(0,i.A)("text--truncate",s.cardDescription),title:o},o))}function m(e){let{item:t}=e;const r=(0,c._o)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.$S)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,c.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},50259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(58168),i=(r(96540),r(15680)),c=r(3514),o=r(84142);const a={title:"Execution",id:"execution",description:"Execution",tags:["execution","spark"],sidebar_position:3},l=void 0,s={unversionedId:"Spark/execution/execution",id:"Spark/execution/execution",title:"Execution",description:"Execution",source:"@site/docs/Spark/execution/execution.md",sourceDirName:"Spark/execution",slug:"/Spark/execution/",permalink:"/Spark/execution/",draft:!1,tags:[{label:"execution",permalink:"/tags/execution"},{label:"spark",permalink:"/tags/spark"}],version:"current",sidebarPosition:3,frontMatter:{title:"Execution",id:"execution",description:"Execution",tags:["execution","spark"],sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Table Iterator",permalink:"/Spark/gems/subgraph/table-iterator"},next:{title:"Interactive Execution",permalink:"/Spark/execution/interactive-execution"}},u={},p=[],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Spark Execution includes the following topics:"),(0,i.yg)(c.A,{items:(0,o.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);