"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[6633],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),d=a(67392),p=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,d]=g({queryString:a,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=s??u;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=d[a].value;r!==i&&(u(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},47501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={title:"Avro",id:"avro",description:"Avro",sidebar_position:3,tags:["gems","file","avro"]},s=void 0,d={unversionedId:"low-code-spark/gems/source-target/file/avro",id:"low-code-spark/gems/source-target/file/avro",title:"Avro",description:"Avro",source:"@site/docs/low-code-spark/gems/source-target/file/avro.md",sourceDirName:"low-code-spark/gems/source-target/file",slug:"/low-code-spark/gems/source-target/file/avro",permalink:"/low-code-spark/gems/source-target/file/avro",draft:!1,tags:[{label:"gems",permalink:"/tags/gems"},{label:"file",permalink:"/tags/file"},{label:"avro",permalink:"/tags/avro"}],version:"current",sidebarPosition:3,frontMatter:{title:"Avro",id:"avro",description:"Avro",sidebar_position:3,tags:["gems","file","avro"]},sidebar:"defaultSidebar",previous:{title:"Parquet",permalink:"/low-code-spark/gems/source-target/file/parquet"},next:{title:"Text",permalink:"/low-code-spark/gems/source-target/file/text"}},p={},u=[{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Schema Evolution",id:"schema-evolution",level:4},{value:"Ignoring the File Extension",id:"ignoring-the-file-extension",level:4},{value:"Example",id:"source",level:3},{value:"Schema used in example above",id:"schema-used-in-example-above",level:4},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Supported Write Modes",id:"supported-write-modes",level:3},{value:"Example",id:"target",level:3},{value:"Generated Code",id:"target-code",level:3}],m={toc:u},c="wrapper";function g(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Avro format is a row-based storage format for Hadoop, which is widely used as a serialization platform.\nAvro format stores the schema in JSON format, making it easy to read and interpret by any program.\nThe data itself is stored in a binary format making it compact and efficient."),(0,n.kt)("p",null,"This Gem allows you to read from or write to an Avro file."),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("h3",{id:"source-parameters"},"Source Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Location"),(0,n.kt)("td",{parentName:"tr",align:null},"File path where avro files are present"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Schema"),(0,n.kt)("td",{parentName:"tr",align:null},"Schema to be applied on the loaded data. Can be defined/edited as JSON or inferred using ",(0,n.kt)("inlineCode",{parentName:"td"},"Infer Schema")," button"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Recursive File Lookup"),(0,n.kt)("td",{parentName:"tr",align:null},"This is used to recursively load files and it disables partition inferring. If data source explicitly specifies the partitionSpec when recursiveFileLookup is true, an exception will be thrown."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path Global Filter"),(0,n.kt)("td",{parentName:"tr",align:null},"An optional glob pattern to only include files with paths matching the pattern. The syntax follows ",(0,n.kt)("a",{parentName:"td",href:"https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html"},"GlobFilter"),". It does not change the behavior of partition discovery."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Modified Before"),(0,n.kt)("td",{parentName:"tr",align:null},"An optional timestamp to only include files with modification times occurring before the specified Time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00)"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Modified After"),(0,n.kt)("td",{parentName:"tr",align:null},"An optional timestamp to only include files with modification times occurring after the specified Time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00)"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Avro Schema"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional schema in JSON format. See ",(0,n.kt)("a",{parentName:"td",href:"#schema-evolution"},"here")," for more details."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ignoreExtension"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"DEPRECATED")),". Enable to load files without the ",(0,n.kt)("inlineCode",{parentName:"td"},".avro")," extension. See caveats ",(0,n.kt)("a",{parentName:"td",href:"#ignoring-the-file-extension"},"here")),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h4",{id:"schema-evolution"},"Schema Evolution"),(0,n.kt)("p",null,"When reading Avro, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Avro Schema")," option can be set to a newer evolved schema which is compatible but different from the schema written to storage. The resulting DataFrame will follow the newer, evolved schema. For example, if we set an evolved schema containing one additional column with a default value, the resulting DataFrame will contain the new column too."),(0,n.kt)("h4",{id:"ignoring-the-file-extension"},"Ignoring the File Extension"),(0,n.kt)("p",null,"If the ",(0,n.kt)("inlineCode",{parentName:"p"},"ignoreExtension")," option is enabled, all files (with and without .avro extension) are loaded. The option has been deprecated, and it will be removed in the future releases. Please ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-data-sources-generic-options.html#path-global-filter"},"pathGlobFilter")," for filtering file names."),(0,n.kt)("h3",{id:"source"},"Example"),(0,n.kt)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,n.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,n.kt)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174399585-40067429-953e-4157-a5db-d80e25713d24.mp4",title:"Avro Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,n.kt)("h4",{id:"schema-used-in-example-above"},"Schema used in example above"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Avro schema used",src:a(54770).Z,width:"736",height:"492"})),(0,n.kt)("h3",{id:"source-code"},"Generated Code"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def read_avro(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("avro")\\\n        .option("ignoreExtension", True)\\\n        .option(\n          "avroSchema",\n          "{\\"type\\":\\"record\\",\\"name\\":\\"Person\\",\\"fields\\":[{\\"name\\":\\"firstname\\",\\"type\\":\\"string\\"},{\\"name\\":\\"middlename\\",\\"type\\":\\"string\\"},{\\"name\\":\\"lastname\\",\\"type\\":\\"string\\"},{\\"name\\":\\"dob_year\\",\\"type\\":\\"int\\"},{\\"name\\":\\"dob_month\\",\\"type\\":\\"int\\"},{\\"name\\":\\"gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"salary\\",\\"type\\":\\"int\\"}]}"\n        )\\\n        .load("dbfs:/FileStore/Users/abhinav/avro/test.avro")\n\n'))),(0,n.kt)(o.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'object read_avro {\n\n  def apply(spark: SparkSession): DataFrame =\n    spark.read\n        .format("avro")\n        .option("ignoreExtension", true)\n        .option(\n          "avroSchema",\n          "{\\"type\\":\\"record\\",\\"name\\":\\"Person\\",\\"fields\\":[{\\"name\\":\\"firstname\\",\\"type\\":\\"string\\"},{\\"name\\":\\"middlename\\",\\"type\\":\\"string\\"},{\\"name\\":\\"lastname\\",\\"type\\":\\"string\\"},{\\"name\\":\\"dob_year\\",\\"type\\":\\"int\\"},{\\"name\\":\\"dob_month\\",\\"type\\":\\"int\\"},{\\"name\\":\\"gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"salary\\",\\"type\\":\\"int\\"}]}"\n        )\n        .load("dbfs:/FileStore/Users/abhinav/avro/test.avro")\n\n}\n')))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"target"},"Target"),(0,n.kt)("h3",{id:"target-parameters"},"Target Parameters"),(0,n.kt)("p",null,"Write data as avro files at the specified path."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Location"),(0,n.kt)("td",{parentName:"tr",align:null},"Locaiton to write the Avro files to present"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Avro Schema"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional schema provided by a user in JSON format. This option can be set if the expected output Avro schema doesn't match the schema converted by Spark. For example, the expected schema of one column is of ",(0,n.kt)("inlineCode",{parentName:"td"},"enum")," type, instead of ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," type in the default converted schema."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Record Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Top level record name in write result, which is required in Avro spec."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"topLevelRecord")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Record Namespace"),(0,n.kt)("td",{parentName:"tr",align:null},"Record namespace in write result."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compression"),(0,n.kt)("td",{parentName:"tr",align:null},"Compression codec used when writing.",(0,n.kt)("br",null)," Currently supported codecs are ",(0,n.kt)("inlineCode",{parentName:"td"},"uncompressed"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"snappy"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"deflate"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"bzip2"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"xz")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"zstandard"),". Defaults to whatever ",(0,n.kt)("inlineCode",{parentName:"td"},"spark.sql.avro.compression.codec")," is set to."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"snappy"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Write Mode"),(0,n.kt)("td",{parentName:"tr",align:null},"How to handle existing data. See ",(0,n.kt)("a",{parentName:"td",href:"#supported-write-modes"},"this table")," for a list of available options."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"error"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Partition Columns"),(0,n.kt)("td",{parentName:"tr",align:null},"List of columns to partition the avro files by"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("h3",{id:"supported-write-modes"},"Supported Write Modes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Write Mode"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"overwrite"),(0,n.kt)("td",{parentName:"tr",align:null},"If data already exists, overwrite with the contents of the DataFrame")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"append"),(0,n.kt)("td",{parentName:"tr",align:null},"If data already exists, append the contents of the DataFrame")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ignore"),(0,n.kt)("td",{parentName:"tr",align:null},"If data already exists, do nothing with the contents of the DataFrame. This is similar to a ",(0,n.kt)("inlineCode",{parentName:"td"},"CREATE TABLE IF NOT EXISTS")," in SQL.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"If data already exists, throw an exception.")))),(0,n.kt)("h3",{id:"target"},"Example"),(0,n.kt)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,n.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,n.kt)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4",title:"Avro Target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,n.kt)("h3",{id:"target-code"},"Generated Code"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def write_avro(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("avro")\\\n        .mode("overwrite")\\\n        .partitionBy("dob_year","dob_month")\\\n        .save("dbfs:/data/test_output.avro")\n'))),(0,n.kt)(o.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'object write_avro {\n  def apply(spark: SparkSession, in: DataFrame): Unit =\n    in.write\n        .format("avro")\n        .mode("overwrite")\n        .partitionBy("dob_year","dob_month")\n        .save("dbfs:/data/test_output.avro")\n}\n')))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To know more about tweaking Avro related properties in Spark config ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-data-sources-avro.html"},"click here"),".")))}g.isMDXComponent=!0},54770:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/avro_schema_eg1-217e0799fe8eebba43d02a30cd1011a7.png"}}]);