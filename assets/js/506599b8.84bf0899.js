"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[2042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"JSON",id:"json",description:"JSON",sidebar_position:6,tags:["gems","file","json"]},o=void 0,s={unversionedId:"low-code-spark/gems/source-target/file/json",id:"low-code-spark/gems/source-target/file/json",title:"JSON",description:"JSON",source:"@site/docs/low-code-spark/gems/source-target/file/json.md",sourceDirName:"low-code-spark/gems/source-target/file",slug:"/low-code-spark/gems/source-target/file/json",permalink:"/low-code-spark/gems/source-target/file/json",draft:!1,tags:[{label:"gems",permalink:"/tags/gems"},{label:"file",permalink:"/tags/file"},{label:"json",permalink:"/tags/json"}],version:"current",sidebarPosition:6,frontMatter:{title:"JSON",id:"json",description:"JSON",sidebar_position:6,tags:["gems","file","json"]},sidebar:"defaultSidebar",previous:{title:"Delta",permalink:"/low-code-spark/gems/source-target/file/delta"},next:{title:"ORC",permalink:"/low-code-spark/gems/source-target/file/orc"}},i={},p=[{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Generated Code",id:"target-code",level:3},{value:"Producing a single output file",id:"producing-a-single-output-file",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("Tabs"),m=d("TabItem"),c={toc:p},k="wrapper";function g(e){let{components:t,...l}=e;return(0,n.kt)(k,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Read and write JSON formatted files"),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("h3",{id:"source-parameters"},"Source Parameters"),(0,n.kt)("p",null,"JSON ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Source"))," supports all the available ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-data-sources-json.html"},"Spark read options for JSON"),"."),(0,n.kt)("p",null,"The below list contains the additional parameters to read a JSON file:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Location"),(0,n.kt)("td",{parentName:"tr",align:null},"Location of the file(s) to be loaded ",(0,n.kt)("br",null)," Eg: ",(0,n.kt)("inlineCode",{parentName:"td"},"dbfs:/data/test.json")),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Schema"),(0,n.kt)("td",{parentName:"tr",align:null},"Schema to applied on the loaded data. Can be defined/edited as JSON or inferred using ",(0,n.kt)("inlineCode",{parentName:"td"},"Infer Schema")," button"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"source-example"},"Example"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"JSON source example",src:a(75119).Z,width:"717",height:"376"})),(0,n.kt)("h3",{id:"source-code"},"Generated Code"),(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(m,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def ReadDelta(spark: SparkSession) -> DataFrame:\n    return spark.read.format("json").load("dbfs:/FileStore/data/example.json")\n'))),(0,n.kt)(m,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'object ReadJson {\n\ndef apply(spark: SparkSession): DataFrame =\nspark.read\n.format("json")\n.load("dbfs:/FileStore/data/example.json")\n\n}\n')))),(0,n.kt)("h2",{id:"target"},"Target"),(0,n.kt)("h3",{id:"target-parameters"},"Target Parameters"),(0,n.kt)("p",null,"JSON ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Target"))," supports all the available ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-data-sources-json.html"},"Spark write options for JSON"),"."),(0,n.kt)("p",null,"The below list contains the additional parameters to write a JSON file:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Location"),(0,n.kt)("td",{parentName:"tr",align:null},"Location of the file(s) to be loaded ",(0,n.kt)("br",null)," Eg: ",(0,n.kt)("inlineCode",{parentName:"td"},"dbfs:/data/output.json")),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"target-code"},"Generated Code"),(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(m,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'def write_json(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("json")\\\n        .mode("overwrite")\\\n        .save("dbfs:/data/test_output.json")\n'))),(0,n.kt)(m,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'object write_json {\n  def apply(spark: SparkSession, in: DataFrame): Unit =\n    in.write\n        .format("json")\n        .mode("overwrite")\n        .save("dbfs:/data/test_output.json")\n}\n')))),(0,n.kt)("h3",{id:"producing-a-single-output-file"},"Producing a single output file"),(0,n.kt)("p",null,"Because of Spark's distributed nature, output files are written as multiple separate partition files. If you need a single output file for some reason (such as reporting or exporting to an external system), use a ",(0,n.kt)("inlineCode",{parentName:"p"},"Repartition")," Gem in ",(0,n.kt)("inlineCode",{parentName:"p"},"Coalesce")," mode with 1 output partition:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Coalesce example",src:a(56183).Z,width:"1172",height:"582"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Note: This is not recommended for extremely large data sets as it may overwhelm the worker node writing the file.")))}g.isMDXComponent=!0},56183:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/coalesce-d33a29eb3a5d7288134b79aea66bf549.gif"},75119:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/json_source-7a13c3f53fdb98d65c7a67fec53fa0db.gif"}}]);