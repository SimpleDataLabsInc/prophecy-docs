"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[8266],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),s=a(57485),u=a(31682),p=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:a,groupId:n}),[d,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var f=a(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(N,(0,n.A)({},e,t)))}function w(e){const t=(0,f.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},545:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),l=a(11470),i=a(19365);const o={sidebar_position:5,title:"Rest API Enrich",id:"rest-api-enrich",description:"Enrich DataFrame with content from rest API response based on configuration",tags:["gems","api","custom","rest"]},s=void 0,u={unversionedId:"low-code-spark/gems/custom/rest-api-enrich",id:"low-code-spark/gems/custom/rest-api-enrich",title:"Rest API Enrich",description:"Enrich DataFrame with content from rest API response based on configuration",source:"@site/docs/low-code-spark/gems/custom/rest-api-enrich.md",sourceDirName:"low-code-spark/gems/custom",slug:"/low-code-spark/gems/custom/rest-api-enrich",permalink:"/low-code-spark/gems/custom/rest-api-enrich",draft:!1,tags:[{label:"gems",permalink:"/tags/gems"},{label:"api",permalink:"/tags/api"},{label:"custom",permalink:"/tags/custom"},{label:"rest",permalink:"/tags/rest"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Rest API Enrich",id:"rest-api-enrich",description:"Enrich DataFrame with content from rest API response based on configuration",tags:["gems","api","custom","rest"]},sidebar:"defaultSidebar",previous:{title:"Delta Table Operations",permalink:"/low-code-spark/gems/custom/delta-ops"},next:{title:"Machine Learning",permalink:"/low-code-spark/gems/machine-learning/"}},p={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Generated Code",id:"generated-code",level:4}],c={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Enriches the DataFrame by adding column(s) with content from REST API output based on the given configuration."),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"Each property can either be set as a static value or a value from an existing column of the input DataFrame. Please refer\nto the examples in the description column of each parameter for reference on how the string value should be formed."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"method"),(0,r.yg)("td",{parentName:"tr",align:null},"method for the new Request object: ",(0,r.yg)("inlineCode",{parentName:"td"},"GET"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"OPTIONS"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"HEAD"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"POST"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"PUT"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"PATCH"),", or ",(0,r.yg)("inlineCode",{parentName:"td"},"DELETE"),"."),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"URL for the REST API."),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},"Dictionary, list of tuples or bytes to send in the query string for the Request. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},'{"key1":"value1", "key2": value2, "key3": ["value1", "value2"]}')),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"Dictionary to send in the body of the Request. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},'{"key1":"value1", "key2": value2}')),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON"),(0,r.yg)("td",{parentName:"tr",align:null},"A JSON serializable Python object to send in the body of the Request. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},'{"key1":"value1", "key2": value2}')),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"headers"),(0,r.yg)("td",{parentName:"tr",align:null},"Dictionary of HTTP Headers to send with the Request. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},'{"key1":"value1", "key2": "value2"}')),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cookies"),(0,r.yg)("td",{parentName:"tr",align:null},"Dictionary to send with the Request. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},'{"key1":"value1", "key2": "value2"}')),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auth"),(0,r.yg)("td",{parentName:"tr",align:null},"Auth tuple to enable Basic/Digest/Custom HTTP Auth. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"user:pass")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"How many seconds to wait for the server to send data before giving up, as a float, eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"0.5")," or a (connect timeout, read timeout) tuple. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"0.5:0.25")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"allow redirects"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable/disable ",(0,r.yg)("inlineCode",{parentName:"td"},"GET/OPTIONS/POST/PUT/PATCH/DELETE/HEAD redirection"),". eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"true")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"proxies"),(0,r.yg)("td",{parentName:"tr",align:null},"Dictionary mapping protocol to the URL of the proxy. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},'{"https" : "https://1.1.0.1:80"}')),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"verify"),(0,r.yg)("td",{parentName:"tr",align:null},"Either a boolean, in which case it controls whether we verify the server\u2019s TLS certificate eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"true")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," or a string, in which case it must be a path to a CA bundle to use. Defaults to True. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"dbfs:/path-to-file")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stream"),(0,r.yg)("td",{parentName:"tr",align:null},"if False, the response content will be immediately downloaded. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"true")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cert"),(0,r.yg)("td",{parentName:"tr",align:null},"if String, path to SSL client cert file (.pem). eg. ",(0,r.yg)("inlineCode",{parentName:"td"},"dbfs:/path-to-file"),". If Tuple, (\u2018cert\u2019, \u2018key\u2019) pair. eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"cert:key"),"."),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parse content"),(0,r.yg)("td",{parentName:"tr",align:null},"Parse content as JSON (to make the schema available, please enable ",(0,r.yg)("inlineCode",{parentName:"td"},"custom schema")," and click ",(0,r.yg)("inlineCode",{parentName:"td"},"infer from cluster")," at the bottom left in the output tab)"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false")))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"To store sensitive information like API key (headers), auth etc., ",(0,r.yg)("inlineCode",{parentName:"li"},"Databricks secrets")," can be used as shown in ",(0,r.yg)("a",{parentName:"li",href:"#example-1"},"Example")," below."),(0,r.yg)("li",{parentName:"ol"},"If the expected number of rows are very large, it's better to provide ",(0,r.yg)("inlineCode",{parentName:"li"},"await time")," in the ",(0,r.yg)("inlineCode",{parentName:"li"},"advanced tab")," so you don't overwhelm the source server or exceed any request limits."),(0,r.yg)("li",{parentName:"ol"},"For APIs which takes list of parameters as inputs, window functions like ",(0,r.yg)("inlineCode",{parentName:"li"},"collect_list")," can be used before ",(0,r.yg)("inlineCode",{parentName:"li"},"RestApiEnrich")," Gem to reduce the number of API calls.")),(0,r.yg)("p",{parentName:"admonition"},"Please make sure that cluster is connected while using the ",(0,r.yg)("inlineCode",{parentName:"p"},"parse content")," option to ",(0,r.yg)("inlineCode",{parentName:"p"},"infer the schema from cluster")," for the first time.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"All input parameters are expected to be in string format. Other column types such as ",(0,r.yg)("inlineCode",{parentName:"p"},"array/JSON/struct")," can be created\nusing combination of aggregate/window Gems along with reformat component and then can be cast as string prior to passing the column in ",(0,r.yg)("inlineCode",{parentName:"p"},"RestAPIEnrich Gem"),"\nas needed.")),(0,r.yg)("h3",{id:"example-1"},"Example 1"),(0,r.yg)("p",null,"Let's try to fetch prices for few cryptocurrencies from ",(0,r.yg)("a",{parentName:"p",href:"https://www.coinapi.io/"},"Coin-API"),"."),(0,r.yg)("p",null,"We would be taking cryptocurrency and currency as input from DataFrame and pass url, headers as static values.\nPlease note that URL in this example is created using static base url and adding cryptocurrency and currency as inputs\nfrom DataFrame."),(0,r.yg)("p",null,"Also, we would be using Databricks-secrets to pass headers as it requires API-key."),(0,r.yg)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,r.yg)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,r.yg)("iframe",{src:"https://user-images.githubusercontent.com/103921419/184725747-88115fa5-b70b-4caf-b3e0-1f2476e15d6e.mp4",title:"Rest API example 1",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,r.yg)("h3",{id:"example-2"},"Example 2"),(0,r.yg)("p",null,"Let's take a more complex example, where all method, url, headers, params etc are passed as values from DataFrame\ncolumns."),(0,r.yg)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,r.yg)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,r.yg)("iframe",{src:"https://user-images.githubusercontent.com/103921419/184725732-5cafc278-c1cf-4bad-9078-9f810ede008a.mp4",title:"Rest API example 2",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,r.yg)("h4",{id:"generated-code"},"Generated Code"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-py"},'def get_data_from_api(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    requestDF = in0.withColumn(\n        "api_output",\n        get_rest_api(\n          to_json(struct(lit("GET").alias("method"), col("url"), lit(Config.coin_api_key).alias("headers"))),\n          lit("")\n        )\n    )\n\n    return requestDF.withColumn(\n        "content_parsed",\n        from_json(col("api_output.content"), schema_of_json(requestDF.select("api_output.content").take(1)[0][0]))\n    )\n\n'))),(0,r.yg)(i.A,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Coming Soon!!!\n\n")))))}g.isMDXComponent=!0}}]);