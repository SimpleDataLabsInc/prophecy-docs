"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[14481],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,y=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},62164:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const a={title:"Prophecy IR",id:"prophecy-ir",description:"Hidden page describing the Prophecy IR and how to generate the Prophecy Pipelines using an API",hide_table_of_contents:!1,tags:["prophecy","internal representation"]},i=void 0,s={type:"mdx",permalink:"/prophecy-ir",source:"@site/src/pages/prophecy-ir.md",title:"Prophecy IR",description:"Hidden page describing the Prophecy IR and how to generate the Prophecy Pipelines using an API",frontMatter:{title:"Prophecy IR",id:"prophecy-ir",description:"Hidden page describing the Prophecy IR and how to generate the Prophecy Pipelines using an API",hide_table_of_contents:!1,tags:["prophecy","internal representation"]}},p=[{value:"Prophecy IR",id:"prophecy-ir",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Prophecy IR format",id:"prophecy-ir-format",level:3},{value:"Visual Representation",id:"visual-representation",level:4},{value:"workflow.latest.json",id:"workflowlatestjson",level:4},{value:"Complete example",id:"complete-example",level:3}],l={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(c,(0,r.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"prophecy-ir"},"Prophecy IR"),(0,o.yg)("h3",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"This page describes how to generate the Prophecy Pipelines programmatically. Prophecy generates code directly based on\nthe Prophecy IR representation. Prophecy IR is the Prophecy internal representation format the generically describes\nthe Prophecy PySpark, Spark, and SQL Pipelines and expressions."),(0,o.yg)("admonition",{title:"Beta",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"This documentation is only accessible to a select subset of design customers and is subject to change.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Code Generation Steps",src:n(56918).A,width:"3200",height:"1696"})),(0,o.yg)("p",null,"The Prophecy IR lifecycle follows the following steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Read Prophecy IR")," - Prophecy IR stores the current visual state of the Pipeline as a\nserialized ",(0,o.yg)("inlineCode",{parentName:"li"},"workflow.latest.json")," file. This file is stored on a Git repository, alongside the generated code.\nProphecy IR reads the state file, parses and validates it."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Read available Gems")," - Prophecy reads available Gems specifications and validates the state file against them."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Visualize Pipeline")," - Prophecy visualizes the Pipeline on the Prophecy IDE, based on the loaded state and Gem\nspecifications."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Generate code")," - After the Pipeline is successfully visualized, Prophecy saves the Pipelines code on the Git\nrepository.")),(0,o.yg)("h3",{id:"prophecy-ir-format"},"Prophecy IR format"),(0,o.yg)("h4",{id:"visual-representation"},"Visual Representation"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Simple Pipeline",src:n(84379).A,width:"2884",height:"1642"})),(0,o.yg)("h4",{id:"workflowlatestjson"},"workflow.latest.json"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{\n  "metainfo": {\n    // Pipeline id in the format {project_id}/{repository_path}\n    "id" : "826/pipelines/customers_orders",\n    // backend language name (scala, python, or sql - coming soon)\n    "language" : "scala",\n    // expressions language type (scala, python, or sql)\n    "frontEndLanguage" : "sql",\n    // functions definitions and configurations\n    "udfs" : { "language" : "scala", "udfs" : [ ... ] },\n    "udafs" : { "language" : "scala", "code" : "..." },\n    "configuration" : { },\n    // spark configurations\n    "sparkConf" : [ ],\n    "hadoopConf" : [ ],\n    // default build system\n    "buildSystem" : "maven",\n    // dependencies\n    "externalDependencies" : [ ],\n    // metrics settings\n    "isImported" : false,\n    "interimMode" : "Full",\n    "interimModeEnabled" : true,\n    "visualCodeInterimMode" : "Disabled",\n    "recordsLimit" : {\n      "enabled" : false,\n      "value" : 1000\n    }\n  },\n  // definitions of connections between the components\n  "connections" : [\n      { "id" : "1", "source" : "source_id", "sourcePort" : "source_output", "target" : "reformat_id", "targetPort" : "reformat_input" },\n      { "id" : "1", "source" : "reformat_id", "sourcePort" : "reformat_output", "target" : "target_id", "targetPort" : "target_input" }\n  ],\n  // instances of Gems\n  "processes" : {\n    // each Gem instance is composed of:\n    "source_id" : {\n      // 1. unique id\n      "id" : "source_id",\n      // 2. type of the Gem\n      "component" : "Source",\n      // 3. Gem descriptions and position\n      "metadata" : { "label" : "Customers", "slug" : "Customers", "x" : 120, "y" : 320, /* ... */ },\n      // 4. definition of inputs and outputs\n      "ports" : { "inputs" : [ ], "outputs" : [ { "id" : "source_output", "slug" : "out" } ] },\n      // 5. properties describing the data source (for Source / Target only)\n      "properties" : { "datasetId" : "826/datasets/customers" }\n    },\n    "target_id" : {\n      "id" : "target_id",\n      "component" : "Target",\n      "metadata" : { "label" : "CustomersCleaned", "slug" : "CustomersCleaned", "x" : 1370, "y" : 220 },\n      "ports" : { "inputs" : [ { "id" : "target_input", "slug" : "in" } ], "outputs" : [ ], /* ... */ },\n      "properties" : { "datasetId" : "826/datasets/customers_cleaned" }\n    },\n    "reformat_id" : {\n      "id" : "reformat_id",\n      "component" : "Reformat",\n      "metadata" : { "label" : "Cleanup", "slug" : "Cleanup", "x" : 565, "y" : 220, /* ... */ },\n      "ports" : { "inputs" : [ { "id" : "reformat_input", "slug" : "in" } ], "outputs" : [ { "id" : "reformat_output", "slug" : "out" } ] /* ... */ },\n      // 6. properties describing the transformation logic\n      "properties" : {\n         /* ... */\n        "expressions" : [ {\n          "target" : "account_length_days",\n          "expression" : { "format" : "sql", "expression" : "datediff(current_date(), account_open_date)" },\n          "description" : ""\n        } ]\n      }\n    }\n  }\n}\n')),(0,o.yg)("h3",{id:"complete-example"},"Complete example"),(0,o.yg)("p",null,"For a complete example open any of the ",(0,o.yg)("inlineCode",{parentName:"p"},"workflow.latest.json"),"'s of the default Pipelines in the HelloWorld project!"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Example Pipelines",src:n(30314).A,width:"1467",height:"449"})))}d.isMDXComponent=!0},56918:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/code-generation-steps-afd7cbee700117f4e4d0f989460c6201.png"},30314:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/example-pipelines-f83d2b2568a7423365028a62a77f0105.png"},84379:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/simple-pipeline-a8440736c3a001b976b009f34a798a74.png"}}]);