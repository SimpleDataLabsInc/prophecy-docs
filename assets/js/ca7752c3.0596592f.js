"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[75518],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=r.createContext({}),d=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(g.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,m=s["".concat(g,".").concat(u)]||s[u]||y[u]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36910:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(58168),n=(a(96540),a(15680));const o={title:"Source & Target",id:"source-target",description:"Set of gems related to the input and output of data",tags:[]},l=void 0,i={unversionedId:"Spark/gems/source-target/source-target",id:"Spark/gems/source-target/source-target",title:"Source & Target",description:"Set of gems related to the input and output of data",source:"@site/docs/Spark/gems/source-target/source-target.md",sourceDirName:"Spark/gems/source-target",slug:"/Spark/gems/source-target/",permalink:"/Spark/gems/source-target/",draft:!1,tags:[],version:"current",frontMatter:{title:"Source & Target",id:"source-target",description:"Set of gems related to the input and output of data",tags:[]},sidebar:"defaultSidebar",previous:{title:"Standard Gems",permalink:"/Spark/gems/"},next:{title:"File",permalink:"/Spark/gems/source-target/file/"}},g={},d=[{value:"File",id:"file",level:2},{value:"Warehouse",id:"warehouse",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Lookup",id:"lookup",level:2},{value:"Synthetic Data Generator",id:"synthetic-data-generator",level:2}],p={toc:d},s="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(s,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Constitutes the set of Gems that help with loading and saving data."),(0,n.yg)("h2",{id:"file"},"File"),(0,n.yg)("p",null,"A collection of Gems related to working with various file-based formats."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/avro"},"Avro")),(0,n.yg)("td",{parentName:"tr",align:null},"Avro format is a row-based storage format for Hadoop, which is widely used as a serialization platform.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/csv"},"CSV")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write a delimited file (often called Comma Separated File, CSV).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/delta"},"Delta")),(0,n.yg)("td",{parentName:"tr",align:null},"Reads data from Delta files present at a path and writes Delta files to a path based on configuration.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/fixed-format"},"Fixed Format")),(0,n.yg)("td",{parentName:"tr",align:null},"Read data from fixed format files with expected schema, or write data to fixed format files with expected schema.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/iceberg"},"Iceberg")),(0,n.yg)("td",{parentName:"tr",align:null},"Reads data from Iceberg files present at a path and writes Iceberg files to a path based on configuration.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/json"},"JSON")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write a delimited file (often called Comma Separated File, CSV).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/kafka"},"Kafka")),(0,n.yg)("td",{parentName:"tr",align:null},"This source currently connects with Kafka Brokers in Batch mode.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/orc"},"ORC")),(0,n.yg)("td",{parentName:"tr",align:null},"ORC (Optimized Row Columnar) is a columnar file format designed for Spark/Hadoop workloads.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/parquet"},"Parquet")),(0,n.yg)("td",{parentName:"tr",align:null},"Parquet is an open source file format built to handle flat columnar storage data formats.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/text"},"Text")),(0,n.yg)("td",{parentName:"tr",align:null},"This Gem allows you to read from or write to text file.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./file/xlsx"},"XLSX (Excel)")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write Excel-compatible files.")))),(0,n.yg)("h2",{id:"warehouse"},"Warehouse"),(0,n.yg)("p",null,"A collection of Gems specializing in connecting to warehouse-style data sources."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/bigquery"},"BigQuery")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the BigQuery warehouse, using a high-performance connector. Enterprise only.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/cosmos"},"CosmosDB")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the CosmosDB database.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/db2"},"DB2")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the DB2 warehouse, using a high-performance connector. Enterprise only.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/jdbc"},"JDBC")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the JDBC database.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/mongodb"},"MongoDB")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the MongoDB database.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/oracle"},"Oracle")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the Oracle warehouse, using a high-performance connector. Enterprise only.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/redshift"},"Redshift")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the Redshift warehouse, using a high-performance connector. Enterprise only.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/salesforce"},"Salesforce")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the Salesforce warehouse.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/snowflake"},"Snowflake")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the Snowflake warehouse, using a high-performance connector. Enterprise only.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./warehouse/teradata"},"Teradata")),(0,n.yg)("td",{parentName:"tr",align:null},"Allows you to read or write data to the Teradata warehouse, using a high-performance connector. Enterprise only.")))),(0,n.yg)("h2",{id:"catalog"},"Catalog"),(0,n.yg)("p",null,"A collection of Gems related to working with various table-based formats."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./catalog-table/delta"},"Delta")),(0,n.yg)("td",{parentName:"tr",align:null},"Reads data from Delta tables saved in data catalog and writes data into Delta table in a managed Metastore.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./catalog-table/hive"},"Hive")),(0,n.yg)("td",{parentName:"tr",align:null},"Read from or write to Tables managed by a Hive metastore.")))),(0,n.yg)("h2",{id:"lookup"},"Lookup"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Spark/gems/source-target/advanced/lookup"},"Lookup")," is a special component that allows you to broadcast any data, to later be used anywhere in your Pipeline."),(0,n.yg)("h2",{id:"synthetic-data-generator"},"Synthetic Data Generator"),(0,n.yg)("p",null,"If you don't have the data you need, try generating fake data. Using the ",(0,n.yg)("a",{parentName:"p",href:"/Spark/gems/source-target/advanced/synthetic-data-generator/"},"Synthetic Data Generator Gem"),", you can specify columns with various datatypes and populate fields with randomly generated data. Specify the boundaries for each row, the percentage of rows which should have null values, etc. It's not real data but it's the next best thing!"))}y.isMDXComponent=!0}}]);