"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[1375],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||s;return a?i.createElement(m,n(n({ref:t},c),{},{components:a})):i.createElement(m,n({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,n=new Array(s);n[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,n[1]=r;for(var p=2;p<s;p++)n[p]=a[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17929:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var i=a(87462),o=(a(67294),a(3905));const s={title:"Data Copilot",id:"copilot",description:"The AI assistant for data Pipelines and models",sidebar_position:8,tags:["concepts","copilot","generativeai"]},n=void 0,r={unversionedId:"concepts/copilot",id:"concepts/copilot",title:"Data Copilot",description:"The AI assistant for data Pipelines and models",source:"@site/docs/concepts/copilot.md",sourceDirName:"concepts",slug:"/concepts/copilot",permalink:"/concepts/copilot",draft:!1,tags:[{label:"concepts",permalink:"/tags/concepts"},{label:"copilot",permalink:"/tags/copilot"},{label:"generativeai",permalink:"/tags/generativeai"}],version:"current",sidebarPosition:8,frontMatter:{title:"Data Copilot",id:"copilot",description:"The AI assistant for data Pipelines and models",sidebar_position:8,tags:["concepts","copilot","generativeai"]},sidebar:"defaultSidebar",previous:{title:"Teams and Users",permalink:"/concepts/teamuser"},next:{title:"Metadata",permalink:"/metadata/"}},l={},p=[{value:"Building Models and Pipelines with Prophecy\u2019s Data Copilot",id:"building-models-and-pipelines-with-prophecys-data-copilot",level:3},{value:"Capabilities",id:"capabilities",level:2},{value:"Text to build Pipelines",id:"text-to-build-pipelines",level:3},{value:"Start a Pipeline",id:"start-a-pipeline",level:4},{value:"Modify an existing Pipeline",id:"modify-an-existing-pipeline",level:4},{value:"Next-transformation suggestions",id:"next-transformation-suggestions",level:3},{value:"Suggest Gems",id:"suggest-gems",level:4},{value:"Suggest Expressions",id:"suggest-expressions",level:4},{value:"Auto Documentation - Coming soon",id:"auto-documentation---coming-soon",level:3},{value:"Data Tests and Quality Checks - Coming soon",id:"data-tests-and-quality-checks---coming-soon",level:3},{value:"Settings",id:"settings",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Knowledge Graph",id:"knowledge-graph",level:3},{value:"Data Privacy",id:"data-privacy",level:3},{value:"FAQ",id:"faq",level:2},{value:"How is Prophecy Copilot different than Github Copilot?",id:"how-is-prophecy-copilot-different-than-github-copilot",level:4},{value:"Which Datasets are accessible to Prophecy Data Copilot?",id:"which-datasets-are-accessible-to-prophecy-data-copilot",level:4},{value:"How much will I pay for use of Prophecy Copilot?",id:"how-much-will-i-pay-for-use-of-prophecy-copilot",level:4},{value:"Try Data Copilot",id:"try-data-copilot",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Prophecy Data Copilot is a Public Beta release and is constantly evolving to meet the needs of our customers. This document is current as of Prophecy Release 3.1. As with all applications that interface with Large Language Models (LLMs), Data Copilot can generate results which are incorrect and/or misleading.")),(0,o.kt)("h3",{id:"building-models-and-pipelines-with-prophecys-data-copilot"},"Building Models and Pipelines with Prophecy\u2019s Data Copilot"),(0,o.kt)("div",{class:"wistia_responsive_padding",style:{padding:"62.5% 0 0 0",position:"relative"}},(0,o.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,o.kt)("iframe",{src:"https://fast.wistia.net/embed/iframe/t7m3boc575?seo=false?videoFoam=true",title:"Design a Pipeline Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,o.kt)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),(0,o.kt)("p",null,"Prophecy\u2019s low-code platform makes data Pipeline development faster and accessible to more users. Starting now, you\u2019ve got an AI assistant to boost that productivity even further."),(0,o.kt)("p",null,"We are open to feedback! Please send us an email (",(0,o.kt)("a",{parentName:"p",href:"mailto:contact@Prophecy.io"},"contact@Prophecy.io"),") or reach out in our Slack ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/prophecy-io-support/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ"},"community.")),(0,o.kt)("h2",{id:"capabilities"},"Capabilities"),(0,o.kt)("p",null,"Prophecy Data Copilot provides suggestions from an AI model as you develop your data Pipelines. You can view and incorporate suggestions directly within the Prophecy visual editor and code editor. Data Copilot makes suggestions for your entire Pipeline, for a single Gem (transformation), and even for individual expressions within each Gem."),(0,o.kt)("h3",{id:"text-to-build-pipelines"},"Text to build Pipelines"),(0,o.kt)("p",null,"Get started quickly by typing your query into the text box. Prophecy Data Copilot can generate a new Pipeline or edit an existing Pipeline."),(0,o.kt)("h4",{id:"start-a-pipeline"},"Start a Pipeline"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Start a Pipeline",src:a(43969).Z,width:"2880",height:"1726"})),(0,o.kt)("p",null,"Data Copilot can assist with starting a Pipeline. Just ",(0,o.kt)("strong",{parentName:"p"},"(1) type a prompt with English text,")," such as \u201cWhich customers shipped the largest orders this year?\u201d ",(0,o.kt)("strong",{parentName:"p"},"(2) Data Copilot will use metadata")," from the accessible Datasets, seeds, models, Pipelines, etc. to create a Knowledge Graph. Using the Knowledge Graph, text prompt, and a selected LLM, ",(0,o.kt)("strong",{parentName:"p"},"(3) Data Copilot creates a Pipeline.")," This Pipeline is accessible in the visual editor as well as the code editor. The user can explore the individual components, ",(0,o.kt)("strong",{parentName:"p"},"(4) keep or reject the Pipeline,")," and interactively execute."),(0,o.kt)("h4",{id:"modify-an-existing-pipeline"},"Modify an existing Pipeline"),(0,o.kt)("p",null,"The user can also call Data Copilot to modify an existing Pipeline. Select which Gem should be the starting point for modifications downstream, and type a new text prompt. Data Copilot will suggest a new sequence of data transformations following from the selected starting point."),(0,o.kt)("h3",{id:"next-transformation-suggestions"},"Next-transformation suggestions"),(0,o.kt)("h4",{id:"suggest-gems"},"Suggest Gems"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Suggest Gems",src:a(8603).Z,width:"2880",height:"1726"})),(0,o.kt)("p",null,"Data Copilot can suggest the next transformation in a series. Here, the user ",(0,o.kt)("strong",{parentName:"p"},"(1) selects a Dataset")," of interest, then ",(0,o.kt)("strong",{parentName:"p"},"(2) Data Copilot suggests Datasets")," which are frequently used with the selected Dataset. ",(0,o.kt)("strong",{parentName:"p"},"(3) Data Copilot then suggests a next transformation,")," in this case a Join Gem."),(0,o.kt)("h4",{id:"suggest-expressions"},"Suggest Expressions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Suggest expressions",src:a(62667).Z,width:"2880",height:"1726"})),(0,o.kt)("p",null,"At the more granular level, Data Copilot can suggest expressions within Gems. Simply ",(0,o.kt)("strong",{parentName:"p"},"(1) type an English text prompt")," and ",(0,o.kt)("strong",{parentName:"p"},"(2) Data Copilot generates a code expression")," for a particular column. ",(0,o.kt)("strong",{parentName:"p"},"(3) Click to accept")," the code expression or try again with a different prompt. Data Copilot\u2019s returns are non-deterministic, so a retry can return a different expression. ",(0,o.kt)("strong",{parentName:"p"},"(4) Run")," the Pipeline upto and including this Gem, and observe the resulting ",(0,o.kt)("strong",{parentName:"p"},"data preview sample.")),(0,o.kt)("h3",{id:"auto-documentation---coming-soon"},"Auto Documentation - Coming soon"),(0,o.kt)("div",{class:"wistia_responsive_padding",style:{padding:"62.5% 0 0 0",position:"relative"}},(0,o.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,o.kt)("iframe",{src:"https://fast.wistia.net/embed/iframe/rec6bcdwet?seo=false?videoFoam=true",title:"Design a Pipeline Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_responsive_wrapper",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,o.kt)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),(0,o.kt)("p",null,"Understanding data assets is much easier with Data Copilot\u2019s auto documentation, to be offered in an upcoming release. Data Copilot will deliver summary documentation suggestions for all Datasets, Pipelines, and Orchestrations. How did a Dataset change? Data Copilot will recommend a description of the change for every edit you make. How was a column computed? Data Copilot suggests a description that explains how every column generated for analytics was computed and what it represents."),(0,o.kt)("h3",{id:"data-tests-and-quality-checks---coming-soon"},"Data Tests and Quality Checks - Coming soon"),(0,o.kt)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,o.kt)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,o.kt)("iframe",{src:"https://fast.wistia.net/embed/iframe/i1bjyf2zae?seo=false?videoFoam=true",title:"Design a Pipeline Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,o.kt)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),(0,o.kt)("p",null,"Unit tests and data quality checks are crucial for Pipeline and model productionization, yet many teams leave little time to develop these tests or worse, don\u2019t build them at all. With Data Copilot, you\u2019ll have a suggested unit test - with code provided - for Prophecy to run on every committed change. Data Copilot also suggests data quality checks based on the data profile and expectations."),(0,o.kt)("h3",{id:"settings"},"Settings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Data Copilot is available for all customers using Prophecy\u2019s managed, Public SaaS offering. For companies who run Prophecy within their own VPC (",(0,o.kt)("a",{parentName:"li",href:"/architecture/deployment/#private-saas-customer-vpc"},"link"),"), admins may choose to enable or disable Data Copilot across their Prophecy Platform at deployment time."),(0,o.kt)("li",{parentName:"ol"},"Coming soon, Prophecy Administrators will have the option to connect Prophecy Data Copilot to their private subscription OpenAI."),(0,o.kt)("li",{parentName:"ol"},"Data Copilot is designed with simplicity in mind, with minimal configurations for the user. If there\u2019s a setting you\u2019d like to see, let us know!")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Project Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Code Suggested by Copilot"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Orchestration"),(0,o.kt)("th",{parentName:"tr",align:null},"Features coming soon for Data Copilot"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Spark (Scala)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Spark SQL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Databricks Jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"Airflow, Private LLM options, AutoDoc, Data Tests and Quality Checks")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PySpark"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Spark SQL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Databricks Jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"Airflow, Private LLM options, AutoDoc, Data Tests and Quality Checks")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SQL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"SQL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Databricks Jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"Airflow, Private LLM options, AutoDoc, Data Tests and Quality Checks")))),(0,o.kt)("p",null,"For Spark and PySpark projects, Data Copilot suggests code written in Spark SQL, which is Apache Spark\u2019s module for working with structured data (",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-programming-guide.html"},"link"),"). Data co-pilot currently supports Databricks jobs, and Airflow support is coming soon."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("h3",{id:"knowledge-graph"},"Knowledge Graph"),(0,o.kt)("p",null,"Briefly, Data Copilot works by enhancing the user\u2019s prompt using a knowledge graph."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Knowledge Graph",src:a(16861).Z,width:"2880",height:"1868"})),(0,o.kt)("p",null,"In particular, the knowledge graph includes metadata for the Project\u2019s entities (eg Datasets, Schemas, Seeds, Models, and Pipelines) and statistical usages of these entities. We built the knowledge graph intentionally to include metadata but not data. Individual Dataset records, for example, are not included in the knowledge graph."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:a(23677).Z,width:"2880",height:"2026"})),(0,o.kt)("p",null,"Prophecy sends the enhanced Prompt to OpenAI (or the user\u2019s preferred LLM). The model will return a set of SQL or SparkSQL code, and Prophecy will verify whether this code is valid. Once Prophecy fixes the code, Prophecy generates a visual Pipeline and displays this Pipeline to the user for review."),(0,o.kt)("h3",{id:"data-privacy"},"Data Privacy"),(0,o.kt)("p",null,"The Prophecy team employs top-notch industry practices to safeguard the security of their application and maintain the privacy of customer data. Below are just a few components of our comprehensive security strategy and system structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prophecy IDE is hosted on secure servers on AWS. All storage systems are encrypted, and all servers are tightly access controlled and audited. Data is encrypted in-transit at all times."),(0,o.kt)("li",{parentName:"ul"},"Alternatively, Prophecy\u2019s IDE can be installed within an Enterprise network as desired."),(0,o.kt)("li",{parentName:"ul"},"Prophecy\u2019s IDE accesses your environment through a single IP address dedicated to you, allowing you to protect access to your data resources at the network level. The credentials are stored per-user, and only a fully authenticated user can access their environment."),(0,o.kt)("li",{parentName:"ul"},"Prophecy does not store or send any data to any third party LLM providers. Instead, Prophecy makes use of rich metadata to construct the knowledge graph. As a result, Data Copilot can interface with LLM providers while maintaining privacy of the data itself."),(0,o.kt)("li",{parentName:"ul"},"An annual penetration test is performed to validate Prophecy\u2019s posture and identify vulnerabilities. Our latest penetration test report was issued in November 2022."),(0,o.kt)("li",{parentName:"ul"},"Prophecy maintains SOC-2 compliance as audited by PrescientAssurance."),(0,o.kt)("li",{parentName:"ul"},"Read more details on Prophecy\u2019s security and compliance posture at our Security Portal ",(0,o.kt)("a",{parentName:"li",href:"https://security.Prophecy.io/"},"here"),".")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:""}),(0,o.kt)("h4",{id:"how-is-prophecy-copilot-different-than-github-copilot"},"How is Prophecy Copilot different than Github Copilot?"),(0,o.kt)("p",null,"Github Copilot is a great tool to boost productivity and extend the reach for the coding community. However, not every problem is solved with direct coding. More importantly, users need a Copilot with some context of the interesting data."),(0,o.kt)("p",null,"For teams of analysts, data platform providers, or line-of-business users, the pain points are not resolved by teaching every team member how to code. Data Copilot empowers less technical users because they don\u2019t have to code. Importantly, technical and coding users benefit from Data Copilot because visual Pipelines are easier to understand, explain, and leverage. Prophecy\u2019s Data Copilot boosts the productivity of the low-code user and the more technical coding team members."),(0,o.kt)("p",null,"When all of these data practitioners reach for an AI assistant, they\u2019ll need one specific to the data space. The assistant should collect metadata from the Databricks Workspace, for example. Prophecy Data Copilot has the context of your data. Data Copilot can guide Pipeline and model development by suggesting which Datasets to use and how to use them."),(0,o.kt)("p",null,"Github Copilot and Prophecy Data Copilot are both excellent tools to boost productivity, but Prophecy Data Copilot is accessible to a larger user base and can make data suggestions because it maintains data context."),(0,o.kt)("h4",{id:"which-datasets-are-accessible-to-prophecy-data-copilot"},"Which Datasets are accessible to Prophecy Data Copilot?"),(0,o.kt)("p",null,"In Prophecy\u2019s 3.1 release, any Dataset, Source, or Seed within a Project are accessible when Data Copilot is called from that Project. In an upcoming release this behavior will change as follows: The assets need only to be part of the linked (Databricks, Snowflake, etc) catalog. That is, if the user can access the Datasets with their token, the Datasets should appear in the Environment tab and Copilot can access them."),(0,o.kt)("h4",{id:"how-much-will-i-pay-for-use-of-prophecy-copilot"},"How much will I pay for use of Prophecy Copilot?"),(0,o.kt)("p",null,"Copilot features are included with Prophecy\u2019s Low-Code Spark and Low-Code SQL offerings. There would be an additional cost if you chose to use a private subscription Large Language Model (LLM) service. In this case, the cost depends on (1) the number of tokens sent to the LLM provider, (2) the size of the Datasets, and (3) the number of iterations Prophecy sends requests to the LLM provider."),(0,o.kt)("h2",{id:"try-data-copilot"},"Try Data Copilot"),(0,o.kt)("p",null,"Learn more about Prophecy ",(0,o.kt)("a",{parentName:"p",href:"https://www.prophecy.io/"},"here"),", where you can sign up for a free trial account or schedule a demo. We'd love to hear your feedback!"))}h.isMDXComponent=!0},23677:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/copilot_arch-e7c7014b7ffbffef8e9b281764ac72c0.png"},16861:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/copilot_knowledge_graph-18e8a0c69b21f5b71875a485369ee716.png"},8603:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/copilot_next_suggestion-e0b4b0b6e3bd22c3aa5946d7d87e63b3.png"},62667:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/copilot_next_suggestion_expression-162cf08f207a335f93ac49011a113280.png"},43969:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/copilot_text_to_Pipeline-ecd12fa1eaf5c95aebf48944f71f7dff.png"}}]);