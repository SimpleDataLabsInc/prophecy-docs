"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[8678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5,title:"Flatten Schema",id:"flatten-schema",description:"Flatten nested data",tags:["gems","schema","explode","flatten"]},s=void 0,l={unversionedId:"low-code-spark/gems/transform/flatten-schema",id:"low-code-spark/gems/transform/flatten-schema",title:"Flatten Schema",description:"Flatten nested data",source:"@site/docs/low-code-spark/gems/transform/flattenschema.md",sourceDirName:"low-code-spark/gems/transform",slug:"/low-code-spark/gems/transform/flatten-schema",permalink:"/low-code-spark/gems/transform/flatten-schema",draft:!1,tags:[{label:"gems",permalink:"/tags/gems"},{label:"schema",permalink:"/tags/schema"},{label:"explode",permalink:"/tags/explode"},{label:"flatten",permalink:"/tags/flatten"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Flatten Schema",id:"flatten-schema",description:"Flatten nested data",tags:["gems","schema","explode","flatten"]},sidebar:"defaultSidebar",previous:{title:"Aggregate",permalink:"/low-code-spark/gems/transform/aggregate"},next:{title:"Schema Transform",permalink:"/low-code-spark/gems/transform/schema-transform"}},i={},p=[{value:"The Input",id:"the-input",level:2},{value:"The Expressions",id:"the-expressions",level:2},{value:"The Output",id:"the-output",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When processing raw data it can be useful to flatten complex data types like ",(0,r.kt)("inlineCode",{parentName:"p"},"Struct"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),"s into simpler, flatter schemas."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The FlattenSchema gem",src:n(68386).Z,width:"290",height:"305"})),(0,r.kt)("h2",{id:"the-input"},"The Input"),(0,r.kt)("p",null,"FlattenSchema works on DataFrames that have nested columns that you'd like to extract into a flat schema."),(0,r.kt)("p",null,"For example, with an input schema like so:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Input schema",src:n(93666).Z,width:"376",height:"434"})),(0,r.kt)("p",null,"And the data looks like so:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Input data",src:n(67555).Z,width:"2764",height:"416"})),(0,r.kt)("p",null,"We want to extract ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),", and all of the columns from the ",(0,r.kt)("inlineCode",{parentName:"p"},"struct"),"s in ",(0,r.kt)("inlineCode",{parentName:"p"},"events")," into a flattened schema."),(0,r.kt)("h2",{id:"the-expressions"},"The Expressions"),(0,r.kt)("p",null,"Having added a ",(0,r.kt)("inlineCode",{parentName:"p"},"FlattenSchema")," Gem to your Pipeline, all you need to do is click the column names you wish to extract and they'll be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Expressions")," section. Once added you can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"Target Column")," for a given row to change the name of the Column in the output."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding Expressions",src:n(51129).Z,width:"630",height:"432"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Columns Delimiter")," dropdown allows you to control how the names of the new columns are derived. Currently dashes and underscores are supported."),(0,r.kt)("h2",{id:"the-output"},"The Output"),(0,r.kt)("p",null,"If we check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," tab in the Gem, you'll see the schema that we've created using the selected columns."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Output schema",src:n(27635).Z,width:"404",height:"531"})),(0,r.kt)("p",null,"And here's what the output data looks like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Output interim",src:n(97793).Z,width:"2766",height:"1436"})),(0,r.kt)("p",null,"No more nested structures!"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more advanced use cases, the Spark ",(0,r.kt)("inlineCode",{parentName:"p"},"explode")," function is available to use in the ",(0,r.kt)("a",{parentName:"p",href:"/low-code-spark/gems/transform/reformat"},"Reformat")," Gem, ",(0,r.kt)("a",{parentName:"p",href:"/low-code-spark/gems/custom/sql-statement"},"Custom SQL")," Gem, or anywhere else that accepts Spark expressions.")))}d.isMDXComponent=!0},51129:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flatten_add_exp-9b144921f044f3a1ad68091d823283a1.gif"},68386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flatten_gem-088dcb90a9e1679a18b6f2497692a93b.png"},93666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flatten_input-252ad05824ac1130f88196d0d1132dde.png"},67555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flatten_input_interim-895ec66b9df67847cfb7df93737c7236.png"},27635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flatten_output-2377e8e555ac97a7dcd5c9faf7a32045.png"},97793:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flatten_output_interim-66b78f2b754bce19f56ff25afa3c2037.png"}}]);