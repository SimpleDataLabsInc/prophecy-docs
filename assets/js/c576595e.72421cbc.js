"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[192],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},T=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),T=r,d=p["".concat(l,".").concat(T)]||p[T]||N[T]||i;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=T;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}T.displayName="MDXCreateElement"},42824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>N,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const i={title:"Execution Metrics",id:"execution-metrics",description:"Execution Metrics",sidebar_position:2,tags:["execution","metrics","spark"]},o=void 0,s={unversionedId:"low-code-spark/execution/execution-metrics",id:"low-code-spark/execution/execution-metrics",title:"Execution Metrics",description:"Execution Metrics",source:"@site/docs/low-code-spark/execution/execution-metrics.md",sourceDirName:"low-code-spark/execution",slug:"/low-code-spark/execution/execution-metrics",permalink:"/low-code-spark/execution/execution-metrics",draft:!1,tags:[{label:"execution",permalink:"/tags/execution"},{label:"metrics",permalink:"/tags/metrics"},{label:"spark",permalink:"/tags/spark"}],version:"current",sidebarPosition:2,frontMatter:{title:"Execution Metrics",id:"execution-metrics",description:"Execution Metrics",sidebar_position:2,tags:["execution","metrics","spark"]},sidebar:"defaultSidebar",previous:{title:"Interactive Execution",permalink:"/low-code-spark/execution/interactive-execution"},next:{title:"Execution on Databricks",permalink:"/low-code-spark/execution/executions_on_databricks_clusters"}},l={},c=[{value:"What are execution metrics?",id:"what-are-execution-metrics",level:3},{value:"Team level access-control",id:"team-level-access-control",level:3},{value:"Pre-requisite",id:"pre-requisite",level:3},{value:"Creating Tables (For Databricks)",id:"creating-tables-for-databricks",level:3},{value:"Restrictions",id:"restrictions",level:4},{value:"Creating Tables (For Livy)",id:"creating-tables-for-livy",level:3}],u={toc:c},p="wrapper";function N(e){let{components:n,...i}=e;return(0,r.yg)(p,(0,a.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"what-are-execution-metrics"},"What are execution metrics?"),(0,r.yg)("p",null,"When running Pipelines and Jobs, you may be interested to know few metrics related to execution like records\nread/written, bytes read/written, total time taken and Data samples between components. These Dataset, Pipeline-run and\nJob-run related metrics are accumulated and stored on your data plane and can be viewed later from Prophecy UI."),(0,r.yg)("h3",{id:"team-level-access-control"},"Team level access-control"),(0,r.yg)("p",null,"For clusters with table ACL enabled, users may have limited access on catalogs, schemas and tables. Here we advise\nusers to setup the execution metrics tables beforehand. Data is stored in the workspace storage itself and the\ntables can be chosen from Team view in Prophecy UI.\nYou will have the option to choose the following at the time of team creation:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Pipeline Metrics Table - contains metrics and code for Pipeline runs"),(0,r.yg)("li",{parentName:"ol"},"Component (Dataset) Metrics Table - contains metrics for individual component runs"),(0,r.yg)("li",{parentName:"ol"},"Interim Table - contains samples of data, depending on the interim mode selected")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"ExecutionMetricsConfig.png",src:t(18703).A,width:"1518",height:"896"})),(0,r.yg)("h3",{id:"pre-requisite"},"Pre-requisite"),(0,r.yg)("p",null,"Workspace / Catalog Admin will have to create tables and grant appropriate permissions to the users if they choose\nto mention tables of their choice.\nIt is recommended that this should be done at the time of team creation itself, to ensure best experience for the users.\nDDLs and Grant accesses are defined below"),(0,r.yg)("h3",{id:"creating-tables-for-databricks"},"Creating Tables (For Databricks)"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Pipeline Metrics"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE IF NOT EXISTS <database.pipeline_runs_table_name>\n  (\n      uid STRING NOT NULL,\n      pipeline_uri STRING NOT NULL,\n      job_uri STRING,\n      job_run_uid STRING NOT NULL,\n      task_run_uid STRING NOT NULL,\n      status STRING,\n      fabric_uid STRING NOT NULL,\n      time_taken LONG,\n      rows_read LONG,\n      rows_written LONG,\n      created_at TIMESTAMP,\n      created_by STRING NOT NULL,\n      run_type STRING,\n      input_datasets ARRAY<STRING>,\n      output_datasets ARRAY<STRING>,\n      workflow_code MAP<STRING, STRING>,\n      expired Boolean,\n      branch STRING,\n      pipeline_config STRING,\n      user_config STRING,\n      expected_interims INT,\n      actual_interims INT,\n      logs STRING\n  )\n  USING DELTA\n  PARTITIONED BY (fabric_uid, pipeline_uri, created_by)\n  LOCATION '<table_path>'\n  TBLPROPERTIES (delta.autoOptimize.optimizeWrite = true, delta.autoOptimize.autoCompact = true)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Component Metrics"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE IF NOT EXISTS <database.component_runs_table_name>\n  (\n      uid STRING NOT NULL,\n      component_uri STRING NOT NULL,\n      pipeline_uri STRING NOT NULL,\n      pipeline_run_uid String NOT NULL,\n      fabric_uid String NOT NULL,\n      component_name STRING NOT NULL,\n      interim_component_name STRING NOT NULL,\n      component_type STRING NOT NULL,\n      interim_subgraph_name STRING NOT NULL,\n      interim_process_id STRING NOT NULL,\n      interim_out_port STRING NOT NULL,\n      created_at TIMESTAMP NOT NULL,\n      created_by STRING NOT NULL,\n      records LONG,\n      bytes LONG,\n      partitions LONG,\n      expired BOOLEAN NOT NULL,\n      run_type STRING,\n      job_uri STRING,\n      branch STRING\n  )\n  USING DELTA\n  PARTITIONED BY (fabric_uid, component_uri, created_by)\n  LOCATION '<table_path>'\n  TBLPROPERTIES (delta.autoOptimize.optimizeWrite = true, delta.autoOptimize.autoCompact = true)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Interims"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE IF NOT EXISTS <database.interims_table_name>\n  (\n      uid STRING NOT NULL,\n      interim STRING NOT NULL,\n      created_by STRING NOT NULL,\n      created_at TIMESTAMP,\n      fabric_uid STRING\n  )\n  USING DELTA\n  PARTITIONED BY (created_by, fabric_uid)\n  LOCATION '<table_path>'\n  TBLPROPERTIES (delta.autoOptimize.optimizeWrite = true, delta.autoOptimize.autoCompact = true)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Grant permissions"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"  GRANT USAGE ON SCHEMA <database> TO group1;\n  GRANT USAGE ON SCHEMA <database> TO group2;\n\n  GRANT SELECT ON <database.component-runs-table> TO group1;\n  GRANT SELECT ON <database.component-runs-table> TO group2;\n  GRANT MODIFY ON <database.component-runs-table> TO group1;\n  GRANT MODIFY ON <database.component-runs-table> TO group2;\n\n  GRANT SELECT ON <database.pipeline-runs-table> TO group1;\n  GRANT SELECT ON <database.pipeline-runs-table> TO group2;\n  GRANT MODIFY ON <database.pipeline-runs-table> TO group1;\n  GRANT MODIFY ON <database.pipeline-runs-table> TO group2;\n\n  GRANT SELECT ON <database.interims-table> TO group1;\n  GRANT SELECT ON <database.interims-table> TO group2;\n  GRANT MODIFY ON <database.interims-table> TO group1;\n  GRANT MODIFY ON <database.interims-table> TO group2;\n")),(0,r.yg)("h4",{id:"restrictions"},"Restrictions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Reading execution metrics from High-Concurrency Clusters with Table-ACL enabled is supported in Databricks\nRuntimes 11.0 or below"),(0,r.yg)("li",{parentName:"ul"},"Shared Access mode in Unity Catalog enabled workspaces is not supported")),(0,r.yg)("h3",{id:"creating-tables-for-livy"},"Creating Tables (For Livy)"),(0,r.yg)("p",null,"Following are sample Create table commands for tables with schema, User can store these tables using any format like Avro, Parquet, ORC, Delta etc."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Pipeline Metrics"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE IF NOT EXISTS <database.pipeline_runs_table_name>\n  (\n      uid STRING NOT NULL,\n      pipeline_uri STRING NOT NULL,\n      job_uri STRING,\n      job_run_uid STRING,\n      task_run_uid STRING,\n      status STRING,\n      fabric_uid STRING NOT NULL,\n      time_taken LONG,\n      rows_read LONG,\n      rows_written LONG,\n      created_at TIMESTAMP,\n      created_by STRING NOT NULL,\n      run_type STRING,\n      input_datasets ARRAY<STRING>,\n      output_datasets ARRAY<STRING>,\n      workflow_code MAP<STRING, STRING>,\n      expired Boolean,\n      branch STRING,\n      pipeline_config STRING,\n      user_config STRING,\n      expected_interims INT,\n      actual_interims INT,\n      logs STRING\n  ) stored as parquet\n  PARTITIONED BY (fabric_uid, pipeline_uri, created_by)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Component Metrics"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE IF NOT EXISTS <database.component_runs_table_name>\n  (\n      uid STRING NOT NULL,\n      component_uri STRING NOT NULL,\n      pipeline_uri STRING,\n      pipeline_run_uid String NOT NULL,\n      fabric_uid String NOT NULL,\n      component_name STRING,\n      interim_component_name STRING,\n      component_type STRING,\n      interim_subgraph_name STRING,\n      interim_process_id STRING,\n      interim_out_port STRING,\n      created_at TIMESTAMP,\n      created_by STRING NOT NULL,\n      records LONG,\n      bytes LONG,\n      partitions LONG,\n      expired BOOLEAN,\n      run_type STRING,\n      job_uri STRING,\n      branch STRING\n  ) stored as parquet\n  PARTITIONED BY (fabric_uid, component_uri, created_by)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Interims"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE IF NOT EXISTS <database.interims_table_name>\n  (\n      uid STRING NOT NULL,\n      interim STRING,\n      created_by STRING,\n      created_at,\n      fabric_uid STRING\n  ) stored as parquet\n  PARTITIONED BY (created_by, fabric_uid)\n")))}N.isMDXComponent=!0},18703:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/ExecutionMetricsConfig-2a7b17f12df522323677d0a9adb37c57.png"}}]);