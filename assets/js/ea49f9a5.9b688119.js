"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[20857],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54960:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(58168),i=(a(96540),a(15680));const r={title:"Variant schema",id:"variant-schema",description:"About variant schema",sidebar_position:2,tags:["concept","variant","sql"]},o=void 0,s={unversionedId:"SQL/development/visual-editor/variant-schema",id:"SQL/development/visual-editor/variant-schema",title:"Variant schema",description:"About variant schema",source:"@site/docs/SQL/development/visual-editor/variant-schema.md",sourceDirName:"SQL/development/visual-editor",slug:"/SQL/development/visual-editor/variant-schema",permalink:"/SQL/development/visual-editor/variant-schema",draft:!1,tags:[{label:"concept",permalink:"/tags/concept"},{label:"variant",permalink:"/tags/variant"},{label:"sql",permalink:"/tags/sql"}],version:"current",sidebarPosition:2,frontMatter:{title:"Variant schema",id:"variant-schema",description:"About variant schema",sidebar_position:2,tags:["concept","variant","sql"]},sidebar:"mySidebar",previous:{title:"Visual Expression Builder reference",permalink:"/SQL/development/visual-editor/visual-expression-builder/visual-expression-builder-reference"},next:{title:"Code editor",permalink:"/SQL/development/code-editor"}},l={},c=[{value:"Inferring the variant schema",id:"inferring-the-variant-schema",level:2},{value:"Editing the variant schema",id:"editing-the-variant-schema",level:3},{value:"Variant sampling setting",id:"variant-sampling-setting",level:2},{value:"Adding a nested column",id:"adding-a-nested-column",level:2},{value:"Default casting",id:"default-casting",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"You can use Prophecy to convert your variant schemas into flat, structured formats to make them easier to understand and use for analytics. This is available for when you want to determine the variant schema of your Snowflake array or object."),(0,i.yg)("p",null,"Using the variant schema functionality, you can do the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Infer the variant schema"),(0,i.yg)("li",{parentName:"ul"},"Configure the parsing limit for inferring the column structure"),(0,i.yg)("li",{parentName:"ul"},"Use a nested column inside of the Visual Expression Builder")),(0,i.yg)("h2",{id:"inferring-the-variant-schema"},"Inferring the variant schema"),(0,i.yg)("p",null,"Variant schemas are not stored within the table definition and can vary for each row, making them difficult to infer and use. Fortunately, you don't have to infer the schema yourself. You can use the column selector inside of your Gems to automatically infer the variant schema, explore the multi-type variant structure, and later select a nested column to use in your transformations."),(0,i.yg)("p",null,"To automatically infer the variant schema, start by opening a Gem that uses a variant column input."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Select the variant column, and click ",(0,i.yg)("strong",{parentName:"li"},"Infer Schema"),".")),(0,i.yg)("p",null,"Prophecy will automatically detect and identify the variant types in your input data."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Schema and column selector",src:a(50124).A,width:"2620",height:"1507"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The inferred schema is cached so that you can use it again in the future whenever you reopen the Model, Gem, or another Gem connected to the same input port. Check the bottom of the column selector to see the last time the variant schema was inferred."),(0,i.yg)("p",{parentName:"admonition"},"To refresh the schema, simply click ",(0,i.yg)("strong",{parentName:"p"},"Infer Schema")," again.")),(0,i.yg)("h3",{id:"editing-the-variant-schema"},"Editing the variant schema"),(0,i.yg)("p",null,"After you infer the schema, you can click ",(0,i.yg)("strong",{parentName:"p"},"Edit Schema")," to view the variant schema and make edits to it. Use the Type dropdowns to manually choose the data type of each nested schema."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Edit schema view",src:a(6210).A,width:"2620",height:"1507"})),(0,i.yg)("p",null,"Editing the variant schema is useful in cases where not all of the schema cases were covered while sampling the records."),(0,i.yg)("h2",{id:"variant-sampling-setting"},"Variant sampling setting"),(0,i.yg)("p",null,"When Prophecy infers the variant schema, it samples the records to identify all potential iterations of keys and values within the schema."),(0,i.yg)("p",null,"The default number of records that Prophecy parses to understand the nested data schema is 100. You can update this limit under the Development Settings, which you can navigate to by clicking ",(0,i.yg)("strong",{parentName:"p"},"... > Development Settings"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Variant sampling setting",src:a(94744).A,width:"2812",height:"899"})),(0,i.yg)("p",null,"We recommend that you increase the limit for small structures, or decrease it for larger ones."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This setting does not rely on the ratio of the data since that would require a complete count of the data records.")),(0,i.yg)("h2",{id:"adding-a-nested-column"},"Adding a nested column"),(0,i.yg)("p",null,"With in the column selector, you can add a nested column by clicking ",(0,i.yg)("strong",{parentName:"p"},"Add Column")," next to the input field name."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Add column",src:a(25628).A,width:"2620",height:"1507"})),(0,i.yg)("p",null,"When adding a column nested within a variant, the output column name, expression, and data type are automatically generated according to the following rules:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Column name: The column name matches the input field name, and is prefixed with the parent field path. If there's a conflict, Prophecy appends numbers starting with ",(0,i.yg)("inlineCode",{parentName:"p"},"_0")," until it becomes unique."),(0,i.yg)("p",{parentName:"li"},"For example, if the column name ",(0,i.yg)("inlineCode",{parentName:"p"},"customers_name")," already exists, the new field might be named ",(0,i.yg)("inlineCode",{parentName:"p"},"customers_name_0"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Expression: The expression represents the full path to the selected field, and uses existing flattened subpaths.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Data type: The data type is automatically ",(0,i.yg)("inlineCode",{parentName:"p"},"CAST")," to the closest inferred type."))),(0,i.yg)("h3",{id:"default-casting"},"Default casting"),(0,i.yg)("p",null,"Prophecy automatically adds a ",(0,i.yg)("inlineCode",{parentName:"p"},"CAST")," to any column you add from a nested type. By default, the column is cast using the standard ",(0,i.yg)("inlineCode",{parentName:"p"},"CAST(x AS y)")," syntax."),(0,i.yg)("p",null,"In some cases, a path within a variant may hold different value types across rows. For instance, consider a Dataset where each row\u2019s value key contains different data types, such as integer, object, and boolean."),(0,i.yg)("p",null,"Prophecy supports this scenario by presenting each detected data type for a given key, array, or object as a separate item in the column selector. When you add one of those columns to the expression, we use explicit casting, which may error out if the cast is not possible. You can change this behavior by using ",(0,i.yg)("inlineCode",{parentName:"p"},"TRY_CAST"),", which returns ",(0,i.yg)("inlineCode",{parentName:"p"},"null")," if the cast is not possible."))}d.isMDXComponent=!0},25628:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/variant-add-column-b2a643560e3b0a89167186a5f4876379.png"},6210:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/variant-edit-schema-c34b2b0d6d41c85e241e355c0be408b4.png"},50124:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/variant-infer-schema-77134126e589a14820f81792a352645d.png"},94744:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/variant-sampling-setting-90f03ebaac15557b12a806a246d9ee87.png"}}]);