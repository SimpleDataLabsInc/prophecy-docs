"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[76065],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),a=r(20053),o=r(84142),c=r(75489),i=r(16654),s=r(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,a.A)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.A)("text--truncate",l.cardTitle),title:o},r," ",o),c&&n.createElement("p",{className:(0,a.A)("text--truncate",l.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,o._o)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.$S)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const c=(0,o.d1)(t);return n.createElement("section",{className:(0,a.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},22084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),o=r(3514),c=r(84142);const i={title:"Warehouse",id:"warehouse",description:"Supported warehouses",tags:[]},s=void 0,l={unversionedId:"Spark/gems/source-target/warehouse/warehouse",id:"Spark/gems/source-target/warehouse/warehouse",title:"Warehouse",description:"Supported warehouses",source:"@site/docs/Spark/gems/source-target/warehouse/warehouse.md",sourceDirName:"Spark/gems/source-target/warehouse",slug:"/Spark/gems/source-target/warehouse/",permalink:"/Spark/gems/source-target/warehouse/",draft:!1,tags:[],version:"current",frontMatter:{title:"Warehouse",id:"warehouse",description:"Supported warehouses",tags:[]},sidebar:"defaultSidebar",previous:{title:"XLSX (Excel)",permalink:"/Spark/gems/source-target/file/xlsx"},next:{title:"BigQuery",permalink:"/Spark/gems/source-target/warehouse/bigquery"}},u={},p=[],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"List of supported warehouses:"),(0,a.yg)(o.A,{items:(0,c.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);