"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3814],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Event-based",id:"streaming-event-apps",description:"Event-based Source and Target Gems for Streaming Data Applications",sidebar_position:1,tags:["spark","streaming","kafka"]},s=void 0,o={unversionedId:"low-code-spark/spark-streaming/streaming-sources-and-targets/streaming-event-apps",id:"low-code-spark/spark-streaming/streaming-sources-and-targets/streaming-event-apps",title:"Event-based",description:"Event-based Source and Target Gems for Streaming Data Applications",source:"@site/docs/low-code-spark/spark-streaming/streaming-sources-and-targets/streaming-event-gem.md",sourceDirName:"low-code-spark/spark-streaming/streaming-sources-and-targets",slug:"/low-code-spark/spark-streaming/streaming-sources-and-targets/streaming-event-apps",permalink:"/low-code-spark/spark-streaming/streaming-sources-and-targets/streaming-event-apps",draft:!1,tags:[{label:"spark",permalink:"/tags/spark"},{label:"streaming",permalink:"/tags/streaming"},{label:"kafka",permalink:"/tags/kafka"}],version:"current",sidebarPosition:1,frontMatter:{title:"Event-based",id:"streaming-event-apps",description:"Event-based Source and Target Gems for Streaming Data Applications",sidebar_position:1,tags:["spark","streaming","kafka"]},sidebar:"defaultSidebar",previous:{title:"Streaming Sources and Targets",permalink:"/category/streaming-sources-and-targets"},next:{title:"File-based",permalink:"/low-code-spark/spark-streaming/streaming-sources-and-targets/streaming-file-apps"}},l={},p=[{value:"Event-based Sources and Targets",id:"event-based-sources-and-targets",level:2},{value:"Create a Kafka Source Gem",id:"create-a-kafka-source-gem",level:2},{value:"Entering Authentication Credentials",id:"entering-authentication-credentials",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"event-based-sources-and-targets"},"Event-based Sources and Targets"),(0,n.kt)("p",null,"Prophecy supports ",(0,n.kt)("strong",{parentName:"p"},"Kafka Streaming")," Source and Target. More information on supported Kafka Source and Target options are available ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html"},"here"),"."),(0,n.kt)("p",null,"The Kafka Gem allows inferring the schema of the events by automatically populating the ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," column. Schema inference works with both JSON and AVRO file formats. A user is required to provide an example event for schema inference."),(0,n.kt)("h2",{id:"create-a-kafka-source-gem"},"Create a Kafka Source Gem"),(0,n.kt)("p",null,"A Kafka Source Gem allows the Streaming Pipeline continuously pull data from a Kafka topic. The following options are supported:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Property")),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Default Value")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Comment")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Broker List"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"List of Kafka brokers separated by commas. For eg. ",(0,n.kt)("inlineCode",{parentName:"td"},"kdj-ibg1.us-east-2.aws.cloud:9092, kdj-ibg2.us-east-2.aws.cloud:9092,kdj-ibg3.us-east-2.aws.cloud:9092"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Group ID")),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Consumer group ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Session Timeout")),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"6000"),(0,n.kt)("td",{parentName:"tr",align:null},"Corresponds to the ",(0,n.kt)("inlineCode",{parentName:"td"},"session.timeout.ms")," field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Security Protocol")),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"SASL_SSL"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported values are ",(0,n.kt)("inlineCode",{parentName:"td"},"SASL_SSL"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"PLAINTEXT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"SSL"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"SSL_PLAINTEXT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SASL Mechanisms")),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"SCRAM-SHA-256"),(0,n.kt)("td",{parentName:"tr",align:null},"SASL mechanism to handle username/password authentication. Supported values are ",(0,n.kt)("inlineCode",{parentName:"td"},"PLAIN"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"SCRAM-SHA-256")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"SCRAM-SHA-512"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"GSSAPI"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"OAUTHBEARER"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Kafka Topic")),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of Kafka Topic to Consume")))),(0,n.kt)("h3",{id:"entering-authentication-credentials"},"Entering Authentication Credentials"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Databricks Secrets (recommended)"),": Use Databricks to manage your credentials"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"UserName, Password"),": Use ",(0,n.kt)("strong",{parentName:"li"},"ONLY")," for test deployments and during development. This writes credentials to Git repository, which isn't good practice.")))}u.isMDXComponent=!0}}]);