"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[54671],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),i=r(20053),a=r(84142),o=r(75489),c=r(16654),l=r(21312);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(o.A,{href:t,className:(0,i.A)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.A)("text--truncate",s.cardTitle),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.A)("text--truncate",s.cardDescription),title:o},o))}function d(e){let{item:t}=e;const r=(0,a._o)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.cC)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,a.$S)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(v,e);const o=(0,a.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},37688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=r(58168),i=(r(96540),r(15680)),a=r(3514),o=r(84142);const c={title:"Interactive Development",id:"interactive-development",description:"Interactive Development",sidebar_position:3,tags:["execution","explorer","sort","filter","interim","data"]},l=void 0,s={unversionedId:"SQL/development/interactive-development/interactive-development",id:"SQL/development/interactive-development/interactive-development",title:"Interactive Development",description:"Interactive Development",source:"@site/docs/SQL/development/interactive-development/interactive-development.md",sourceDirName:"SQL/development/interactive-development",slug:"/SQL/development/interactive-development/",permalink:"/SQL/development/interactive-development/",draft:!1,tags:[{label:"execution",permalink:"/tags/execution"},{label:"explorer",permalink:"/tags/explorer"},{label:"sort",permalink:"/tags/sort"},{label:"filter",permalink:"/tags/filter"},{label:"interim",permalink:"/tags/interim"},{label:"data",permalink:"/tags/data"}],version:"current",sidebarPosition:3,frontMatter:{title:"Interactive Development",id:"interactive-development",description:"Interactive Development",sidebar_position:3,tags:["execution","explorer","sort","filter","interim","data"]},sidebar:"defaultSidebar",previous:{title:"Custom",permalink:"/SQL/development/gems/custom/"},next:{title:"Data Explorer",permalink:"/SQL/development/interactive-development/data-explorer"}},p={},m=[],d={toc:m},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(a.A,{items:(0,o.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);