"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[1840],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,u=s["".concat(p,".").concat(k)]||s[k]||f[k]||l;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},74866:(t,e,a)=>{a.d(e,{Z:()=>D});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),p=a(91980),m=a(67392),d=a(50012);function s(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function f(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??s(a);return function(t){const e=(0,m.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function k(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function u(t){let{queryString:e=!1,groupId:a}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function c(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=f(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[p,m]=u({queryString:a,groupId:n}),[s,c]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),g=(()=>{const t=p??s;return k({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!k({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),m(t),c(t)}),[m,c,l]),tabValues:l}}var g=a(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(t){let{className:e,block:a,selectedValue:o,selectValue:p,tabValues:m}=t;const d=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),f=t=>{const e=t.currentTarget,a=d.indexOf(e),n=m[a].value;n!==o&&(s(e),p(n))},k=t=>{let e=null;switch(t.key){case"Enter":f(t);break;case"ArrowRight":{const a=d.indexOf(t.currentTarget)+1;e=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(t.currentTarget)-1;e=d[a]??d[d.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},m.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>d.push(t),onKeyDown:k,onClick:f},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===e})}),a??e)})))}function b(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=c(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(h,(0,n.Z)({},t,e)),r.createElement(b,(0,n.Z)({},t,e)))}function D(t){const e=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(e)},t))}},1217:(t,e,a)=>{a.d(e,{Z:()=>p});var n=a(67294),r=a(44996);const l=t=>{let{children:e}=t;return n.createElement("div",{style:{position:"relative",display:"flex","justify-content":"center","align-items":"center"}},e)},i=t=>{let{source:e,children:a}=t;return n.createElement("img",{src:(0,r.Z)(e),style:{"object-fit":"cover"}})},o=t=>{let{slides:e}=t;const[a,r]=(0,n.useState)(0);return n.createElement(l,null,n.createElement("i",{class:"fa fa-chevron-left",onClick:()=>{r(0===a?e.length-1:a-1)},style:{position:"absolute",top:"50%",left:"0px","font-size":"2rem"}}),n.createElement("i",{class:"fa fa-chevron-right",onClick:()=>{r(a===e.length-1?0:a+1)},style:{position:"absolute",top:"50%",right:"0px","font-size":"2rem"}}),n.createElement("div",{style:{padding:"30px"}},n.createElement(i,{source:e[a].image}),e[a].description))};function p(t){let{ImageData:e}=t;return n.createElement(o,{slides:e,style:{"font-family":" sans-serif","text-align":"center"}})}},70967:(t,e,a)=>{a.r(e),a.d(e,{ImageData:()=>k,assets:()=>s,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>f});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162),o=a(1217);const p={sidebar_position:1,title:"Join",id:"join",description:"Join one or more DataFrames on conditions",tags:["gems","join","inner","outer","left join","right join","hints","merge"]},m=void 0,d={unversionedId:"low-code-spark/gems/join-split/join",id:"low-code-spark/gems/join-split/join",title:"Join",description:"Join one or more DataFrames on conditions",source:"@site/docs/low-code-spark/gems/join-split/join.md",sourceDirName:"low-code-spark/gems/join-split",slug:"/low-code-spark/gems/join-split/join",permalink:"/low-code-spark/gems/join-split/join",draft:!1,tags:[{label:"gems",permalink:"/tags/gems"},{label:"join",permalink:"/tags/join"},{label:"inner",permalink:"/tags/inner"},{label:"outer",permalink:"/tags/outer"},{label:"left join",permalink:"/tags/left-join"},{label:"right join",permalink:"/tags/right-join"},{label:"hints",permalink:"/tags/hints"},{label:"merge",permalink:"/tags/merge"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Join",id:"join",description:"Join one or more DataFrames on conditions",tags:["gems","join","inner","outer","left join","right join","hints","merge"]},sidebar:"defaultSidebar",previous:{title:"Join & Split",permalink:"/low-code-spark/gems/join-split/"},next:{title:"Repartition",permalink:"/low-code-spark/gems/join-split/Repartition"}},s={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Adding a new input",id:"adding-a-new-input",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1 - Join with three DataFrame inputs",id:"example-1---join-with-three-dataframe-inputs",level:3},{value:"Example 2 - Join with Hints",id:"example-2---join-with-hints",level:3},{value:"Example 3 - Join with Propagate Columns",id:"example-3---join-with-propagate-columns",level:3},{value:"Types of Join",id:"types-of-join",level:2},{value:"Table A",id:"table-a",level:3},{value:"Table B",id:"table-b",level:3},{value:"INNER JOIN",id:"inner-join",level:3},{value:"LEFT JOIN",id:"left-join",level:3},{value:"RIGHT JOIN",id:"right-join",level:3},{value:"FULL OUTER JOIN",id:"full-outer-join",level:3},{value:"LEFT SEMI JOIN",id:"left-semi-join",level:3},{value:"LEFT ANTI JOIN",id:"left-anti-join",level:3}],k=[{image:"/img/join/join-eg3-conditions.png",description:(0,r.kt)("h3",{style:{padding:"10px"}},"Step 1 - Specify join condition")},{image:"/img/join/join-eg3-expressions.png",description:(0,r.kt)("h3",{style:{padding:"10px"}},"Step 2 - Choose required columns from dataframe")},{image:"/img/join/join-eg3-advanced.png",description:(0,r.kt)("h3",{style:{padding:"10px"}},"Step 3 - Select Propagate all columns from in0")},{image:"/img/join/join-eg3-output.png",description:(0,r.kt)("h3",{style:{padding:"10px"}},"Output - Output with all columns from in0 and selected columns from in1")}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},c=u("Tabs1"),g=u("Tabs2"),N={toc:f,ImageData:k},h="wrapper";function b(t){let{components:e,...p}=t;return(0,r.kt)(h,(0,n.Z)({},N,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Joins 2 or more DataFrames based on the given configuration."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DataFrame 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"First input DataFrame"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DataFrame 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Second input DataFrame"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DataFrame N"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nth input DataFrame"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Join Condition (Conditions tab)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The join condition specifies how the rows will be combined."),(0,r.kt)("td",{parentName:"tr",align:"left"},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type (Conditions tab)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of JOIN ",(0,r.kt)("inlineCode",{parentName:"td"},"(Inner, Full Outer, Left , Right , Left Semi, Left Anti)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Where Clause (Conditions tab)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Filter")," applied after the Join operation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Target column (Expressions)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output column name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Expression (Expressions)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expression to compute target column. If no expression is given, then all columns from all DataFrames would reflect in output."),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hint Type (Advanced)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of Join Hint (",(0,r.kt)("inlineCode",{parentName:"td"},"Broadcast"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Merge"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Shuffle Hash"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Shuffle Replicate NL")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"None"),"). To read more about join hints ",(0,r.kt)("a",{parentName:"td",href:"https://developpaper.com/analysis-of-five-join-strategies-of-spark/"},"click here")),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Propagate All Columns (Advanced)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", all columns from that DataFrame would be propagated to output DataFrame. Equivalent to selecting ",(0,r.kt)("inlineCode",{parentName:"td"},"df.*")," for the selected DataFrame."),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")))),(0,r.kt)("h2",{id:"adding-a-new-input"},"Adding a new input"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the plus icon to add a new input."),(0,r.kt)("li",{parentName:"ol"},"Then add your condition expression for the newly added input.\n",(0,r.kt)("img",{alt:"Example usage of Join - Add new input to join gem",src:a(10773).Z,width:"1616",height:"802"}))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-1---join-with-three-dataframe-inputs"},"Example 1 - Join with three DataFrame inputs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example usage of Join - Join three DataFrame inputs",src:a(25248).Z,width:"1618",height:"806"})),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def Join_1(spark: SparkSession, in0: DataFrame) -> DataFrame:\n        return in0\\\n        .alias("in0")\\\n        .join(in1.alias("in1"), (col("in0.customer_id") == col("in1.customer_id")), "inner")\\\n        .join(in2.alias("in2"), (col("in1.customer_id") == col("in2.customer_id")), "inner")\n'))),(0,r.kt)(i.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'object Join_1 {\n   def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame, in2: DataFrame): DataFrame =\n    in0\n      .as("in0")\n      .join(in1.as("in1"), col("in0.customer_id") === col("in1.customer_id"), "inner")\n      .join(in2.as("in2"), col("in1.customer_id") === col("in2.customer_id"), "inner")\n}\n')))),(0,r.kt)("h3",{id:"example-2---join-with-hints"},"Example 2 - Join with Hints"),(0,r.kt)("p",null,"Join hints allow users to suggest the join strategy that Spark should use. For a quick overview, see Spark's Join Hints ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/3.0.0/sql-ref-syntax-qry-select-hints.html#join-hints"},"documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example usage of Join - Join with hints",src:a(62749).Z,width:"1644",height:"668"})),(0,r.kt)(c,{mdxType:"Tabs1"},(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def Join_1(spark: SparkSession, in0: DataFrame, in1: DataFrame, in2: DataFrame) -> DataFrame:\n    df1 = in1.hint("merge")\n\n    return in0\\\n        .alias("in0")\\\n        .hint("broadcast")\\\n        .join(df1.alias("in1"), col("in0.customer_id") == col("in1.customer_id"), "inner")\\\n        .join(in2.alias("in2"), col("in0.customer_id") == col("in1.customer_id"), "inner")\n'))),(0,r.kt)(i.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'object Join_1 {\n   def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame, in2: DataFrame): DataFrame =\n    in0\n      .as("in0")\n      .hint("broadcast")\n      .join(in1.as("in1").hint("merge"), col("in0.customer_id") === col("in1.customer_id"), "inner")\n      .join(in2.as("in2"),               col("in1.customer_id") === col("in2.customer_id"), "inner")\n}\n')))),(0,r.kt)("h3",{id:"example-3---join-with-propagate-columns"},"Example 3 - Join with Propagate Columns"),(0,r.kt)(o.Z,{ImageData:k,mdxType:"App"}),(0,r.kt)(g,{mdxType:"Tabs2"},(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def Join_1(spark: SparkSession, in0: DataFrame, in1: DataFrame, ) -> DataFrame:\n    return in0\\\n        .alias("in0")\\\n        .join(in1.alias("in1"), (col("in0.customer_id") == col("in1.customer_id")), "inner")\\\n        .select(*[col("in1.email").alias("email"), col("in1.phone").alias("phone")], col("in0.*"))\n'))),(0,r.kt)(i.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'object Join_1 {\n\n  def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame): DataFrame =\n    in0\n      .as("in0")\n      .join(in1.as("in1"), col("in0.customer_id") === col("in1.customer_id"), "inner")\n      .select(col("in1.phone").as("phone"), col("in1.email").as("email"), col("in0.*"))\n\n}\n')))),(0,r.kt)("h2",{id:"types-of-join"},"Types of Join"),(0,r.kt)("p",null,"Suppose there are 2 tables TableA and TableB with only 2 columns (Ref, Data) and following contents:"),(0,r.kt)("h3",{id:"table-a"},"Table A"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A31")))),(0,r.kt)("h3",{id:"table-b"},"Table B"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B41")))),(0,r.kt)("h3",{id:"inner-join"},"INNER JOIN"),(0,r.kt)("p",null,"Inner Join on column Ref will return columns from both the tables and only the matching records as long as the condition is satisfied:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B23")))),(0,r.kt)("h3",{id:"left-join"},"LEFT JOIN"),(0,r.kt)("p",null,"Left Join (or Left Outer join) on column Ref will return columns from both the tables and match records with records from the left table. The result-set will contain null for the rows for which there is no matching row on the right side."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A31"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL")))),(0,r.kt)("h3",{id:"right-join"},"RIGHT JOIN"),(0,r.kt)("p",null,"Right Join (or Right Outer join) on column Ref will return columns from both the tables and match records with records from the right table. The result-set will contain null for the rows for which there is no matching row on the left side."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B41")))),(0,r.kt)("h3",{id:"full-outer-join"},"FULL OUTER JOIN"),(0,r.kt)("p",null,"Full Outer Join on column Ref will return columns from both the tables and matching records with records from the left table and records from the right table . The result-set will contain NULL values for the rows for which there is no matching."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A31"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B41")))),(0,r.kt)("h3",{id:"left-semi-join"},"LEFT SEMI JOIN"),(0,r.kt)("p",null,"Left Semi Join on column Ref will return columns only from left table and matching records only from left table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_B41")))),(0,r.kt)("h3",{id:"left-anti-join"},"LEFT ANTI JOIN"),(0,r.kt)("p",null,"Left anti join on column Ref will return columns from the left for non-matched records :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ref"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data_A31"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL")))))}b.isMDXComponent=!0},10773:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add_new_input-2ce622c38f55019de1600c2bd52c1041.png"},62749:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/join_with_hints-0bed10c358bdb7a5a6710f283cf3704b.png"},25248:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/join_without_hints-3c24895b7c58f07bea0b290f5ca459f7.png"}}]);