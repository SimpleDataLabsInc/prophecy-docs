"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[5128],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),p=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=s??d;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==i&&(d(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},60962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={title:"Delta Table",id:"delta",description:"Delta Table",sidebar_position:2,tags:["gems","catalog","delta"]},s=void 0,u={unversionedId:"low-code-spark/gems/source-target/catalog-table/delta",id:"low-code-spark/gems/source-target/catalog-table/delta",title:"Delta Table",description:"Delta Table",source:"@site/docs/low-code-spark/gems/source-target/catalog-table/delta.md",sourceDirName:"low-code-spark/gems/source-target/catalog-table",slug:"/low-code-spark/gems/source-target/catalog-table/delta",permalink:"/low-code-spark/gems/source-target/catalog-table/delta",draft:!1,tags:[{label:"gems",permalink:"/tags/gems"},{label:"catalog",permalink:"/tags/catalog"},{label:"delta",permalink:"/tags/delta"}],version:"current",sidebarPosition:2,frontMatter:{title:"Delta Table",id:"delta",description:"Delta Table",sidebar_position:2,tags:["gems","catalog","delta"]},sidebar:"defaultSidebar",previous:{title:"Hive Table",permalink:"/low-code-spark/gems/source-target/catalog-table/hive"},next:{title:"Lookup",permalink:"/low-code-spark/gems/source-target/lookup"}},p={},d=[{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Source Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Without filter predicate",id:"without-filter-predicate",level:4},{value:"With filter predicate",id:"with-filter-predicate",level:4},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Target Example",id:"target-example",level:3},{value:"Generated Code",id:"target-code",level:3}],m={toc:d},c="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reads and writes Delta tables that are managed by the execution environment's Metadata catalog (Metastore)."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please set the property ",(0,n.kt)("inlineCode",{parentName:"p"},"provider")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Delta")," on the properties page.")),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("h3",{id:"source-parameters"},"Source Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Database name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the database"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Table name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the table"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Must be set to ",(0,n.kt)("inlineCode",{parentName:"td"},"Delta")),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Filter Predicate"),(0,n.kt)("td",{parentName:"tr",align:null},"Where clause to filter the table"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Read Timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"Time travel to a specific timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Read Version"),(0,n.kt)("td",{parentName:"tr",align:null},"Time travel to a specific version of the table"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For time travel on Delta tables:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Only ",(0,n.kt)("inlineCode",{parentName:"li"},"Read Timestamp")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"OR"))," ",(0,n.kt)("inlineCode",{parentName:"li"},"Read Version")," can be selected, not both."),(0,n.kt)("li",{parentName:"ol"},"Timestamp should be between the first commit timestamp and the latest commit timestamp in the table."),(0,n.kt)("li",{parentName:"ol"},"Version needs to be an integer with value between min and max version of table.")),(0,n.kt)("p",{parentName:"admonition"},"By default most recent version of each row is fetched if no time travel option is used.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To read more about Delta time travel and its use cases ",(0,n.kt)("a",{parentName:"p",href:"https://databricks.com/blog/2019/02/04/introducing-delta-time-travel-for-large-scale-data-lakes.html"},"click here"),".")),(0,n.kt)("h3",{id:"source-example"},"Source Example"),(0,n.kt)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,n.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,n.kt)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173573367-057f47b0-c56c-4ffd-9ceb-27bc34444b41.mp4",title:"Catalog delta source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,n.kt)("h3",{id:"source-code"},"Generated Code"),(0,n.kt)("h4",{id:"without-filter-predicate"},"Without filter predicate"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def Source(spark: SparkSession) -> DataFrame:\n    return spark.read.table(f"test_db.test_table")\n\n'))),(0,n.kt)(o.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'object Source {\n\n  def apply(spark: SparkSession): DataFrame = {\n    spark.read.table("test_db.test_table")\n  }\n\n}\n')))),(0,n.kt)("h4",{id:"with-filter-predicate"},"With filter predicate"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def Source(spark: SparkSession) -> DataFrame:\n    return spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")\n\n'))),(0,n.kt)(o.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'object Source {\n\n  def apply(spark: SparkSession): DataFrame =\n    spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")\n\n}\n\n')))),(0,n.kt)("h2",{id:"target"},"Target"),(0,n.kt)("h3",{id:"target-parameters"},"Target Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Database name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the database"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Table name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the table"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Custom file path"),(0,n.kt)("td",{parentName:"tr",align:null},"Use custom file path to store underlying files"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Must be set to ",(0,n.kt)("inlineCode",{parentName:"td"},"Delta")),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Write Mode"),(0,n.kt)("td",{parentName:"tr",align:null},"How to handle existing data. See ",(0,n.kt)("a",{parentName:"td",href:"/low-code-spark/gems/source-target/file/delta#supported-write-modes"},"this table")," for a list of available options. (Default is set to ",(0,n.kt)("inlineCode",{parentName:"td"},"error"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Use insert into"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to use ",(0,n.kt)("inlineCode",{parentName:"td"},"insertInto")," method to write instead of ",(0,n.kt)("inlineCode",{parentName:"td"},"save")),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Optimize write"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, it optimizes Spark partition sizes based on the actual data"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Overwrite table schema"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, overwrites the schema of the Delta table"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Merge schema"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, then any columns that are present in the DataFrame but not in the target table are automatically added on to the end of the schema as part of a write transaction"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Partition Columns"),(0,n.kt)("td",{parentName:"tr",align:null},"List of columns to partition the Delta table by"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Overwrite partition predicate"),(0,n.kt)("td",{parentName:"tr",align:null},"If specified, then it selectively overwrites only the data that satisfies the given where clause expression."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Among these write modes ",(0,n.kt)("inlineCode",{parentName:"p"},"overwrite"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"append"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ignore")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," work the same way as with other native Spark-supported formats such as Parquet."),(0,n.kt)("p",{parentName:"admonition"},"To read more about using ",(0,n.kt)("inlineCode",{parentName:"p"},"merge")," write mode ",(0,n.kt)("a",{parentName:"p",href:"/low-code-spark/gems/source-target/file/delta#merge-write-mode-with-delta"},(0,n.kt)("strong",{parentName:"a"},"click here"))),(0,n.kt)("p",{parentName:"admonition"},"To read more about using ",(0,n.kt)("inlineCode",{parentName:"p"},"SCD2")," merge write mode ",(0,n.kt)("a",{parentName:"p",href:"/low-code-spark/gems/source-target/file/delta#scd2-merge-write-mode-with-delta"},(0,n.kt)("strong",{parentName:"a"},"click here")))),(0,n.kt)("h3",{id:"target-example"},"Target Example"),(0,n.kt)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,n.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,n.kt)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173573390-2295b399-f6af-49f1-b398-dfd66072d1b3.mp4",title:"Catalog Delta target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,n.kt)("h3",{id:"target-code"},"Generated Code"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def Target(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("delta")\\\n        .mode("overwrite")\\\n        .saveAsTable("test_db.test_table")\n\n'))),(0,n.kt)(o.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'object Target {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    in.write\n        .format("delta")\n        .mode("overwrite")\n        .saveAsTable("test_db.test_table")\n  }\n\n}\n')))))}k.isMDXComponent=!0}}]);