"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[4690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var b=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},59290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={sidebar_position:2,title:"OpenAI",id:"ml-openai",description:"Request OpenAI to generate a vector embedding or request OpenAI to answer a question with an optional context.",tags:["generative-ai","machine-learning","llm","openai","embedding","vector","answer","question"]},s=void 0,p={unversionedId:"low-code-spark/gems/machine-learning/ml-openai",id:"low-code-spark/gems/machine-learning/ml-openai",title:"OpenAI",description:"Request OpenAI to generate a vector embedding or request OpenAI to answer a question with an optional context.",source:"@site/docs/low-code-spark/gems/machine-learning/ml-openai.md",sourceDirName:"low-code-spark/gems/machine-learning",slug:"/low-code-spark/gems/machine-learning/ml-openai",permalink:"/low-code-spark/gems/machine-learning/ml-openai",draft:!1,tags:[{label:"generative-ai",permalink:"/tags/generative-ai"},{label:"machine-learning",permalink:"/tags/machine-learning"},{label:"llm",permalink:"/tags/llm"},{label:"openai",permalink:"/tags/openai"},{label:"embedding",permalink:"/tags/embedding"},{label:"vector",permalink:"/tags/vector"},{label:"answer",permalink:"/tags/answer"},{label:"question",permalink:"/tags/question"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"OpenAI",id:"ml-openai",description:"Request OpenAI to generate a vector embedding or request OpenAI to answer a question with an optional context.",tags:["generative-ai","machine-learning","llm","openai","embedding","vector","answer","question"]},sidebar:"defaultSidebar",previous:{title:"Text Processing",permalink:"/low-code-spark/gems/machine-learning/ml-text-processing"},next:{title:"Pinecone Lookup",permalink:"/low-code-spark/gems/machine-learning/ml-pinecone-lookup"}},u={},c=[{value:"1. Compute text embeddings",id:"1-compute-text-embeddings",level:3},{value:"1a. Configure",id:"1a-configure",level:4},{value:"1b. Input",id:"1b-input",level:4},{value:"1c. Output",id:"1c-output",level:4},{value:"1d. Generated code",id:"1d-generated-code",level:4},{value:"2. Answer a question with a given context",id:"2-answer-a-question-with-a-given-context",level:3},{value:"2a. Configure",id:"2a-configure",level:4},{value:"2b. Input",id:"2b-input",level:4},{value:"2c. Output",id:"2c-output",level:4},{value:"2d. Generated code",id:"2d-generated-code",level:4},{value:"FAQ",id:"faq",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Can I choose other OpenAI models?",id:"can-i-choose-other-openai-models",level:4}],d={toc:c},m="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,r.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,r.kt)("iframe",{src:"https://fast.wistia.net/embed/iframe/i1x7g14wn4?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,r.kt)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),(0,r.kt)("br",null),(0,r.kt)("p",null,"The OpenAI Gem allows the Prophecy user to interact with the OpenAI API using two different requests:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compute text embeddings (",(0,r.kt)("a",{parentName:"li",href:"/low-code-spark/gems/machine-learning/ml-openai#compute-text-embeddings"},"link"),")."),(0,r.kt)("li",{parentName:"ol"},"Answer a question, where the user has the option to provide context (",(0,r.kt)("a",{parentName:"li",href:"/low-code-spark/gems/machine-learning/ml-openai#answer-a-question-with-a-given-context"},"link"),").")),(0,r.kt)("p",null,"Follow along to learn how to interact with the OpenAI API using Prophecy's Low-code interface. For an example set of Pipelines that use these Gems to create a Generative AI Chatbot, see this ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/gen-ai-chatbot"},"guide.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"As with all applications that interface with Large Language Models (LLMs), the OpenAI Gem can generate results that are incorrect and/or misleading. The OpenAI Gem is subject to the same ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings/limitations-risks"},"limitations and risks")," as those posed by OpenAI itself.")),(0,r.kt)("h3",{id:"1-compute-text-embeddings"},"1. Compute text embeddings"),(0,r.kt)("p",null,"Given a question input, the OpenAI Gem will return a text embedding by calling the OpenAI ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings/how-to-get-embeddings"},"ada-002 model"),". View the input and output from this Gem to understand the data formats and sample."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Overview of the Gem showing the input and output for computing a text embedding",src:n(51899).Z,width:"2376",height:"814"})),(0,r.kt)("h4",{id:"1a-configure"},"1a. Configure"),(0,r.kt)("p",null,"Follow the steps below to configure the OpenAI Gem to compute text embeddings."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure the Gem to compute a text embedding",src:n(74573).Z,width:"2880",height:"1640"})),(0,r.kt)("p",null,"Storing the OpenAI API token as a ",(0,r.kt)("strong",{parentName:"p"},"(1) Databricks Secret")," is highly recommended. For instructions click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/security/secrets/index.html"},"here.")," Be sure to use the ",(0,r.kt)("strong",{parentName:"p"}," (2) Fabric connection")," to the Databricks workspace which contains the Databricks scope and secrets configured in this Gem. Contact us to understand the integrations with other secret managers."),(0,r.kt)("p",null,"Select the Operation type from the dropdown menu. ",(0,r.kt)("strong",{parentName:"p"},"(3) Compute text embeddings")," operation will send the selected ",(0,r.kt)("strong",{parentName:"p"},"(4) Texts column")," to the OpenAI API. For each entry in the Texts column, OpenAI's ada-002 model will return a text embedding."),(0,r.kt)("p",null,"Instead of sending a single row to OpenAI's API, select the ",(0,r.kt)("strong",{parentName:"p"},"(5) Group data")," option. Group data is a window function, using a window of size 20, ",(0,r.kt)("strong",{parentName:"p"},"(6) ordered by")," the selected column. Using the Group data option influences model performance based on the column selected."),(0,r.kt)("h4",{id:"1b-input"},"1b. Input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Question/Text"),(0,r.kt)("td",{parentName:"tr",align:null},"string - a question or text string of interest"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h4",{id:"1c-output"},"1c. Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openai_embedding"),(0,r.kt)("td",{parentName:"tr",align:null},"array(float) - The vector embedding returned from OpenAI corresponding to the input question/text. Each record is an array of ",(0,r.kt)("inlineCode",{parentName:"td"},"1536")," floating point numbers, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"[-0.0018493991, -0.0059955865, ... -0.02498541]"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openai_error"),(0,r.kt)("td",{parentName:"tr",align:null},"string - this column is provided to display any error message returned from the OpenAI API; helpful for troubleshooting.")))),(0,r.kt)("h4",{id:"1d-generated-code"},"1d. Generated code"),(0,r.kt)("p",null,"All the visual designs are converted to code and committed to the Prophecy user's Git repository. See below for a sample of the code which calls the OpenAI API to compute text embeddings."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def vectorize(spark: SparkSession, question_seed: DataFrame) -> DataFrame:\n    from spark_ai.llms.openai import OpenAiLLM\n    from pyspark.dbutils import DBUtils\n    OpenAiLLM(api_key = DBUtils(spark).secrets.get(scope = "<redacted>", key = "<redacted>"))\\\n        .register_udfs(spark = spark)\n\n    return question_seed\\\n        .withColumn("_row_num", row_number().over(Window.partitionBy().orderBy(col("input"))))\\\n        .withColumn("_group_num", ceil(col("_row_num") / 20))\\\n        .withColumn("_data", struct(col("*")))\\\n        .groupBy(col("_group_num"))\\\n        .agg(collect_list(col("_data")).alias("_data"), collect_list(col("input")).alias("_texts"))\\\n        .withColumn("_embedded", expr(f"openai_embed_texts(_texts)"))\\\n        .select(\n          col("_texts"),\n          col("_embedded.embeddings").alias("_embeddings"),\n          col("_embedded.error").alias("openai_error"),\n          col("_data")\n        )\\\n        .select(expr("explode_outer(arrays_zip(_embeddings, _data))").alias("_content"), col("openai_error"))\\\n        .select(col("_content._embeddings").alias("openai_embedding"), col("openai_error"), col("_content._data.*"))\\\n        .drop("_row_num")\\\n        .drop("_group_num")\n'))),(0,r.kt)(i.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"[Not yet supported]\n")))),(0,r.kt)("h3",{id:"2-answer-a-question-with-a-given-context"},"2. Answer a question with a given context"),(0,r.kt)("p",null,"In addition to computing text embeddings, OpenAI's ada-002 model is also very good at answering questions. The Prophecy low-code interface allows users to input a question (and optionally provide a context) as components of the ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt")," sent to OpenAI. In response, OpenAI's ada-002 model returns an answer(s) to the question. See the input and output data previews before and after the OpenAI Gem to understand the operation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Overview of the Gem showing the input and output for answering a question",src:n(49618).Z,width:"2376",height:"966"})),(0,r.kt)("h4",{id:"2a-configure"},"2a. Configure"),(0,r.kt)("p",null,"Follow the steps below to configure the OpenAI Gem to answer a question, and to understand how to provide a context if desired."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure the gem to answer a question with a given context",src:n(79e3).Z,width:"2880",height:"1834"})),(0,r.kt)("p",null,"Storing the OpenAI API token as a ",(0,r.kt)("strong",{parentName:"p"},"(1) Databricks Secret")," is highly recommended. For instructions click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/security/secrets/index.html"},"here.")," Be sure to use the ",(0,r.kt)("strong",{parentName:"p"}," (2) Fabric connection")," to the Databricks workspace which contains the Databricks scope and secrets configured in this Gem."),(0,r.kt)("p",null,"Hardcoding the OpenAI credential is not recommended. Selecting this option could send credentials to be stored hardcoded in Git; use only for credentials that should be shared with the world. Contact us to understand the integrations with other secret managers. (",(0,r.kt)("a",{parentName:"p",href:"mailto:contact.us@Prophecy.io"},"contact.us@Prophecy.io"),")"),(0,r.kt)("p",null,"Now it's time to craft a prompt to send to the OpenAI ada-002 model. Select the Operation type from the dropdown menu. The operation ",(0,r.kt)("inlineCode",{parentName:"p"},"Answer questions")," will prompt OpenAI's ada-002 model to answer the provided question using the datasets the model was trained on, which have some ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings/blindness-to-recent-events"},"blindness.")," For many users, you'll want to provide some context as part of your prompt. The operation ",(0,r.kt)("strong",{parentName:"p"},"(3) Answer questions for given context")," will likely generate answers more related to the context. Select the input column which has the question of interest as the ",(0,r.kt)("strong",{parentName:"p"},"(4) Question text column"),". To provide context in addition to the question, select ",(0,r.kt)("strong",{parentName:"p"},"(5) Context text column"),". For example, if the question is ",(0,r.kt)("inlineCode",{parentName:"p"},"Does Prophecy support on-premise environments?"),", an appropriate context would be some section of Prophecy's documentation. The ",(0,r.kt)("strong",{parentName:"p"},"(6) context")," and ",(0,r.kt)("strong",{parentName:"p"},"(7) question (query)")," comprise the prompt sent to OpenAI."),(0,r.kt)("h4",{id:"2b-input"},"2b. Input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Question"),(0,r.kt)("td",{parentName:"tr",align:null},"string - a question of interest to include in the prompt sent to OpenAI. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"What is Prophecy's AI Assistant feature?")),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Context"),(0,r.kt)("td",{parentName:"tr",align:null},"string - a text corpus related to the question of interest, also included in the prompt sent to OpenAI. Frequently the context column should undergo data transformations in the Gems preceding the OpenAI Gem. See ",(0,r.kt)("a",{parentName:"td",href:"/getting-started/gen-ai-chatbot"},"this guide")," for a great example of preparing the text corpus and transforming sufficiently to include in a useful prompt."),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("h4",{id:"2c-output"},"2c. Output"),(0,r.kt)("p",null,"Since OpenAI's models are probabalistic, they return at least one, and frequently more than one, answer. These responses are formatted as a json array of answer choices. The user would usually select the best answer from the choices; we recommend selecting the first answer if you wish to select one by default. This can be done in the Gem following the OpenAI Gem as in this ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/gen-ai-chatbot#3a-chatbot-live-pipeline"},"example"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openai_answer"),(0,r.kt)("td",{parentName:"tr",align:null},"struct - this column contains the response from OpenAI in as a json array. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},'{"choices":["Prophecy\'s AI Assistant feature is called Data Copilot."]}')," Select/filter from multiple answer choices in a Gem following the OpenAI Gem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openai_error"),(0,r.kt)("td",{parentName:"tr",align:null},"string - this column is provided to display any error message returned from the OpenAI API; helpful for troubleshooting.")))),(0,r.kt)("h4",{id:"2d-generated-code"},"2d. Generated code"),(0,r.kt)("p",null,"See below for a sample of the code which calls the OpenAI API to answer a question provided some context."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def OpenAI_1(spark: SparkSession, collect_context: DataFrame) -> DataFrame:\n    from spark_ai.llms.openai import OpenAiLLM\n    from pyspark.dbutils import DBUtils\n    OpenAiLLM(api_key = DBUtils(spark).secrets.get(scope = "[redacted]", key = "[redacted]"))\\\n        .register_udfs(spark = spark)\n\n    return collect_context\\\n        .withColumn("_context", col("context"))\\\n        .withColumn("_query", col("input"))\\\n        .withColumn(\n          "openai_answer",\n          expr(\n            "openai_answer_question(_context, _query, \\" Answer the question based on the context below.\\nContext:\\n```\\n{context}\\n```\\nQuestion: \\n```\\n{query}\\n```\\nAnswer:\\n \\")"\n          )\n        )\\\n        .drop("_context", "_query")\n'))),(0,r.kt)(i.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"  [page under construction]\n")))),(0,r.kt)("h3",{id:"faq"},"FAQ"),(0,r.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"The output data sample following the OpenAI Gem also contains a column for any error message(s) returned from OpenAI. This handy column surfaces errors including invalid OpenAI credentials, invalid input questions, or problems with data formatting."),(0,r.kt)("h4",{id:"can-i-choose-other-openai-models"},"Can I choose other OpenAI models?"),(0,r.kt)("p",null,"Currently we use ChatGPT 3.5 Turbo. Contact us for additional options: ",(0,r.kt)("a",{parentName:"p",href:"mailto:contact.us@Prophecy.io"},"contact.us@Prophecy.io")))}h.isMDXComponent=!0},79e3:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/openai-configure-answer-a2f543becfb0237af252fd218f0dc6ee.png"},74573:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/openai-configure-embedding-27b293504f71c3e4c49f5377eb4b887e.png"},49618:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/openai-intro-answer-question-context-b81d39354874965e789254f90c6fae32.png"},51899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/openai-intro-compute-text-embeddings-31cbbb227cfe0f3c9c39b1bdb698f95d.png"}}]);