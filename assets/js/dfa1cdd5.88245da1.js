"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3101],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,k=p["".concat(i,".").concat(c)]||p[c]||m[c]||l;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),u=a(67392),d=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=k({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=i??p;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var g=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==s&&(p(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},2590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const s={title:"Salesforce",id:"salesforce",description:"Salesforce",sidebar_position:6,tags:["gems","warehouse","salesforce"]},i=void 0,u={unversionedId:"low-code-spark/gems/source-target/warehouse/salesforce",id:"low-code-spark/gems/source-target/warehouse/salesforce",title:"Salesforce",description:"Salesforce",source:"@site/docs/low-code-spark/gems/source-target/warehouse/salesforce.md",sourceDirName:"low-code-spark/gems/source-target/warehouse",slug:"/low-code-spark/gems/source-target/warehouse/salesforce",permalink:"/low-code-spark/gems/source-target/warehouse/salesforce",draft:!1,tags:[{label:"gems",permalink:"/tags/gems"},{label:"warehouse",permalink:"/tags/warehouse"},{label:"salesforce",permalink:"/tags/salesforce"}],version:"current",sidebarPosition:6,frontMatter:{title:"Salesforce",id:"salesforce",description:"Salesforce",sidebar_position:6,tags:["gems","warehouse","salesforce"]},sidebar:"defaultSidebar",previous:{title:"BigQuery",permalink:"/low-code-spark/gems/source-target/warehouse/bigquery"},next:{title:"Hive Table",permalink:"/low-code-spark/gems/source-target/catalog-table/hive"}},d={},p=[{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Example",id:"example",level:2},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Generated Code",id:"target-code",level:3}],m={toc:p},c="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This Gem has below features:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Dataset Creation - Create Dataset in Salesforce Wave from Spark DataFrame."),(0,n.kt)("li",{parentName:"ol"},"Read Salesforce Wave Dataset - User has to provide SAQL to read data from Salesforce Wave. The query result will be constructed as DataFrame."),(0,n.kt)("li",{parentName:"ol"},"Read Salesforce Object - User has to provide SOQL to read data from Salesforce object. The query result will be constructed as DataFrame."),(0,n.kt)("li",{parentName:"ol"},"Update Salesforce Object - Salesforce object will be updated with the details present in DataFrame.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This connector is built on top of the already available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/springml/spark-salesforce/"},(0,n.kt)("inlineCode",{parentName:"a"},"spark-salesforce connector"))),(0,n.kt)("p",{parentName:"admonition"},"To use this Gem in Prophecy, ",(0,n.kt)("inlineCode",{parentName:"p"},"com.springml:spark-salesforce_2.12:1.1.4")," Maven external dependency needs to be installed on cluster.\nFor installing dependencies from Prophecy UI. Please check ",(0,n.kt)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/extensibility/dependencies"},"dependency management docs"))),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,"Reads data from Salesforce object and wave Datasets."),(0,n.kt)("h3",{id:"source-parameters"},"Source Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Credential Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Credential Type: ",(0,n.kt)("inlineCode",{parentName:"td"},"Databricks Secrets")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"Username & Password")),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,n.kt)("td",{parentName:"tr",align:null},"Databricks credential name , else username and password for the snowflake account"),(0,n.kt)("td",{parentName:"tr",align:null},"Required if ",(0,n.kt)("inlineCode",{parentName:"td"},"Credential Type")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"Databricks Secrets"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"Salesforce Wave Username. This user should have privilege to upload Datasets or execute SAQL or execute SOQL"),(0,n.kt)("td",{parentName:"tr",align:null},"Required if ",(0,n.kt)("inlineCode",{parentName:"td"},"Credential Type")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"Username & Password"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"Salesforce Wave Password. Please append security token along with password.For example, if a user\u2019s password is mypassword, and the security token is XXXXXXXXXX, the user must provide mypasswordXXXXXXXXXX"),(0,n.kt)("td",{parentName:"tr",align:null},"Required if ",(0,n.kt)("inlineCode",{parentName:"td"},"Credential Type")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"Username & Password"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Login Url"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Salesforce Login URL. Default value ",(0,n.kt)("a",{parentName:"td",href:"https://login.salesforce.com"},"https://login.salesforce.com")),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Read from source"),(0,n.kt)("td",{parentName:"tr",align:null},"Strategy to read data: ",(0,n.kt)("inlineCode",{parentName:"td"},"SAQL")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"SOQL"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SAQL Query"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) SAQL query to used to query Salesforce Wave. Mandatory for reading Salesforce Wave Dataset"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SOQL Query"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) SOQL query to used to query Salesforce Object. Mandatory for reading Salesforce Object like Opportunity"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Version"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Salesforce API Version. Default 35.0"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Infer Schema"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Infer schema from the query results. Sample rows will be taken to find the datatype"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Date Format"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) A string that indicates the format that follow java.text.SimpleDateFormat to use when reading timestamps. ",(0,n.kt)("br",null)," This applies to TimestampType. By default, it is null which means trying to parse timestamp by ",(0,n.kt)("inlineCode",{parentName:"td"},"java.sql.Timestamp.valueOf()")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result Variable"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) result variable used in SAQL query. To paginate SAQL queries this package will add the required offset and limit.",(0,n.kt)("br",null)," For example, in this SAQL query q = load \\\"<Dataset_id>/<Dataset_version_id>\\\"; q = foreach q generate 'Name' as 'Name', 'Email' as 'Email'; q is the result variable"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Page Size"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Page size for each query to be executed against Salesforce Wave. Default value is 2000.",(0,n.kt)("br",null)," This option can only be used if resultVariable is set"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bulk"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Flag to enable bulk query. This is the preferred method when loading large sets of data. Salesforce will process batches",(0,n.kt)("br",null)," in the background. Default value is false."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PK Chunking"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Flag to enable automatic primary key chunking for bulk query Job. This splits bulk queries into separate batches",(0,n.kt)("br",null)," that of the size defined by chunkSize option. By default false and the default chunk size is 100,000."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Chunk size"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) The size of the number of records to include in each batch. Default value is 100,000. This option can only be used when pkChunking is true. Maximum size is 250,000."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) The maximum time spent polling for the completion of bulk query Job.",(0,n.kt)("br",null)," This option can only be used when bulk is true."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max chars per column"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) The maximum length of a column. This option can only be used when bulk is true. Default value is 4096."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Query All"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Toggle to retrieve deleted and archived records for SOQL queries. Default value is false."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Steps to reset your Salesforce security token can be found at this ",(0,n.kt)("a",{parentName:"p",href:"https://www.mcafee.com/blogs/enterprise/cloud-security/what-is-salesforce-security-token-and-how-do-i-find-it/"},"link."))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Below is an example of fetching all leads from sales cloud using Prophecy IDE.\nWe will be using ",(0,n.kt)("inlineCode",{parentName:"p"},"SOQL")," query to query our leads Dataset on sales cloud."),(0,n.kt)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,n.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,n.kt)("iframe",{src:"https://user-images.githubusercontent.com/103921419/193517497-54c5544d-3b98-45ae-95e1-cb036bad6e4c.mp4",title:"Salesforce Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,n.kt)("h3",{id:"source-code"},"Generated Code"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def read_salesforce(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("com.springml.spark.salesforce")\\\n        .option("username", "your_salesforce_username")\\\n        .option("password", "your_salesforce_password_with_secutiry_token")\\\n        .option("soql", "select id, name, email from lead")\\\n        .load()\n\n'))),(0,n.kt)(o.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"Coming soon!!!\n")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"target"},"Target"),(0,n.kt)("p",null,"Create/update Datasets and Salesforce objects."),(0,n.kt)("h3",{id:"target-parameters"},"Target Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Credential Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Credential Type: ",(0,n.kt)("inlineCode",{parentName:"td"},"Databricks Secrets")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"Username & Password")),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,n.kt)("td",{parentName:"tr",align:null},"Databricks credential name , else username and password for the snowflake account"),(0,n.kt)("td",{parentName:"tr",align:null},"Required if ",(0,n.kt)("inlineCode",{parentName:"td"},"Credential Type")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"Databricks Secrets"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"Salesforce Wave Username. This user should have privilege to upload Datasets or execute SAQL or execute SOQL"),(0,n.kt)("td",{parentName:"tr",align:null},"Required if ",(0,n.kt)("inlineCode",{parentName:"td"},"Credential Type")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"Username & Password"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"Salesforce Wave Password. Please append security token along with password.For example, if a user\u2019s password is mypassword, and the security token is XXXXXXXXXX, the user must provide mypasswordXXXXXXXXXX"),(0,n.kt)("td",{parentName:"tr",align:null},"Required if ",(0,n.kt)("inlineCode",{parentName:"td"},"Credential Type")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"Username & Password"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Login Url"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Salesforce Login URL. Default value ",(0,n.kt)("a",{parentName:"td",href:"https://login.salesforce.com"},"https://login.salesforce.com")),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Salesforce Dataset name"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Name of the Dataset to be created in Salesforce Wave. Required for Dataset Creation"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Salesforce object name"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Salesforce Object to be updated. (e.g.) Contact. Mandatory if bulk is true."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Metadata Config in JSON"),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) Metadata configuration which will be used to construct ","[Salesforce Wave Dataset Metadata]"," ",(0,n.kt)("br",null)," (",(0,n.kt)("a",{parentName:"td",href:"https://resources.docs.salesforce.com/sfdc/pdf/bi_dev_guide_ext_data_format.pdf"},"https://resources.docs.salesforce.com/sfdc/pdf/bi_dev_guide_ext_data_format.pdf"),"). Metadata configuration has to be provided in JSON format"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Upsert"),(0,n.kt)("td",{parentName:"tr",align:null},'(Optional) Flag to upsert data to Salesforce. This performs an insert or update operation using the "externalIdFieldName" as the primary ID. Existing fields that are not in the DataFrame being pushed will not be updated. Default "false".'),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"External Id Field Name"),(0,n.kt)("td",{parentName:"tr",align:null},'(Optional) The name of the field used as the external ID for Salesforce Object. This value is only used when doing an update or upsert. Default "Id".'),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"target-code"},"Generated Code"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def write_salesforce(spark: SparkSession, in0: DataFrame):\n    in0.write.format("com.springml.spark.salesforce")\\\n          .option("username", "your_salesforce_username")\\\n          .option("password", "your_salesforce_password_with_secutiry_token")\\\n          .option("DatasetName", "your_Dataset_name")\n          .save()\n'))),(0,n.kt)(o.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"Coming Soon!!!\n")))))}k.isMDXComponent=!0}}]);