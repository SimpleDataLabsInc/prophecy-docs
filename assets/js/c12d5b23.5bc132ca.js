"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[1660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,y=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return a?r.createElement(y,s(s({ref:t},l),{},{components:a})):r.createElement(y,s({ref:t},l))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27920:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Prophecy API",id:"prophecyAPI",description:"Prophecy metadata available through the Prophecy API",sidebar_position:6,tags:["PAT","token","Personal Access Token","graphqlAPI"]},s=void 0,i={unversionedId:"metadata/prophecyAPI",id:"metadata/prophecyAPI",title:"Prophecy API",description:"Prophecy metadata available through the Prophecy API",source:"@site/docs/metadata/prophecyAPI.md",sourceDirName:"metadata",slug:"/metadata/prophecyAPI",permalink:"/metadata/prophecyAPI",draft:!1,tags:[{label:"PAT",permalink:"/tags/pat"},{label:"token",permalink:"/tags/token"},{label:"Personal Access Token",permalink:"/tags/personal-access-token"},{label:"graphqlAPI",permalink:"/tags/graphql-api"}],version:"current",sidebarPosition:6,frontMatter:{title:"Prophecy API",id:"prophecyAPI",description:"Prophecy metadata available through the Prophecy API",sidebar_position:6,tags:["PAT","token","Personal Access Token","graphqlAPI"]},sidebar:"defaultSidebar",previous:{title:"Lineage",permalink:"/metadata/lineage"},next:{title:"Syncing audit logs from SAAS",permalink:"/metadata/audit-logging"}},c={},p=[{value:"Prophecy metadata available through the Prophecy API",id:"prophecy-metadata-available-through-the-prophecy-api",level:2},{value:"Personal Access Token (PAT)",id:"personal-access-token-pat",level:2},{value:"Generate a PAT",id:"generate-a-pat",level:2}],l={toc:p},h="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prophecy-metadata-available-through-the-prophecy-api"},"Prophecy metadata available through the Prophecy API"),(0,n.kt)("p",null,"Prophecy users can access their metadata using the Prophecy API. To access these APIs, users just create a Personal Access Token (PAT).\nOne popular use case is to access the Prophecy metadata through automated scripts and integrate this data into an existing data visualization system. Use the Prophecy API to create a single pane of glass interface for data stewards and engineers to see pipelines, datasets, Lineage, etc."),(0,n.kt)("h2",{id:"personal-access-token-pat"},"Personal Access Token (PAT)"),(0,n.kt)("p",null,"A Personal Access Token(PAT) is the token which customer can use for authentication to our API servers.\nThis will enable customers to use PAT in their scripts and integrate Prophecy seamlessly to their data visualization ecosystem."),(0,n.kt)("h2",{id:"generate-a-pat"},"Generate a PAT"),(0,n.kt)("p",null,"Create and Manage API tokens from the Access Tokens tab in ",(0,n.kt)("a",{parentName:"p",href:"https://app.prophecy.io/metadata/settings"},"Settings"),") page. You can create, delete, check usage, expiry etc of the tokens from this page. Please copy the token you have generated, as this will not be displayed on Prophecy UI again.\nYou can use this token for Accessing any Read/Write APIs to access Metadata, Lineage , etc."),(0,n.kt)("p",null,"Please note, These tokens are per user and will inherit all the Access from that user."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AccessToken",src:a(13999).Z,width:"3456",height:"2158"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Coming Soon"),"\nWe will soon launch a detailed Documentation and a playground to try these APIs")))}u.isMDXComponent=!0},13999:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PAT-bc3c04eeab3f2562c47fdf4de424296b.gif"}}]);