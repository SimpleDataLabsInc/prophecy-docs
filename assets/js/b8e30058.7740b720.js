"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[21038],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},g=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(y,s(s({ref:a},g),{},{components:t})):r.createElement(y,s({ref:a},g))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96745:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const o={title:"Prophecy Concepts",id:"key-concepts",description:"Key Concepts of Prophecy",tags:[]},s=void 0,i={unversionedId:"concepts/key-concepts",id:"concepts/key-concepts",title:"Prophecy Concepts",description:"Key Concepts of Prophecy",source:"@site/docs/concepts/concepts.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/concepts/",draft:!1,tags:[],version:"current",frontMatter:{title:"Prophecy Concepts",id:"key-concepts",description:"Key Concepts of Prophecy",tags:[]},sidebar:"defaultSidebar",previous:{title:"Getting Help",permalink:"/getting-started/getting-help"},next:{title:"Projects",permalink:"/concepts/project/"}},l={},p=[{value:"Projects",id:"projects",level:2},{value:"Project is Code on Git",id:"project-is-code-on-git",level:3},{value:"Metadata",id:"metadata",level:2},{value:"Pipelines and Models",id:"pipelines-and-models",level:2},{value:"Pipelines (for Spark)",id:"pipelines-for-spark",level:3},{value:"Models (for SQL)",id:"models-for-sql",level:3},{value:"Fabrics",id:"fabrics",level:2},{value:"Datasets",id:"datasets",level:2},{value:"Gems",id:"gems",level:2},{value:"Jobs",id:"jobs",level:2},{value:"Teams And Users",id:"teams-and-users",level:2}],g={toc:p},c="wrapper";function d(e){let{components:a,...o}=e;return(0,n.yg)(c,(0,r.A)({},g,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Advance your productivity by becoming familiar with these key Prophecy concepts."),(0,n.yg)("h2",{id:"projects"},"Projects"),(0,n.yg)("p",null,"The Project is the primary unit of development and deployment to production in Prophecy."),(0,n.yg)("p",null,"A ",(0,n.yg)("strong",{parentName:"p"},"project")," contains"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Pipelines")," (Spark) or ",(0,n.yg)("strong",{parentName:"li"},"Models")," (SQL) which read, transform and write data."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Datasets")," point to the data that is read and written to by the ",(0,n.yg)("em",{parentName:"li"},"Data Pipelines")," or ",(0,n.yg)("em",{parentName:"li"},"Data Models"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Jobs")," run ",(0,n.yg)("em",{parentName:"li"},"Data Pipelines")," and ",(0,n.yg)("em",{parentName:"li"},"Data Models")," individually or together based on a schedule.")),(0,n.yg)("h3",{id:"project-is-code-on-git"},"Project is Code on Git"),(0,n.yg)("p",null,"A ",(0,n.yg)("strong",{parentName:"p"},"project")," is ",(0,n.yg)("strong",{parentName:"p"},"code")," on ",(0,n.yg)("strong",{parentName:"p"},"Git"),". This means that within a project, the business logic of all the assets including ",(0,n.yg)("em",{parentName:"p"},"Pipelines"),"/",(0,n.yg)("em",{parentName:"p"},"Models"),", ",(0,n.yg)("em",{parentName:"p"},"Datasets"),", and ",(0,n.yg)("em",{parentName:"p"},"Jobs")," is stored as code on Git. This might be a repository on Github or a folder in a repository."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Project is code",src:t(53040).A,width:"1556",height:"438"})),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("p",null,"Metadata is how you access and configure all entities in Prophecy. You can go to metadata page to view, edit, delete any of your entities like Pipelines, Projects, Jobs, Fabrics etc."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Metadata",src:t(88855).A,width:"1251",height:"380"})),(0,n.yg)("h2",{id:"pipelines-and-models"},"Pipelines and Models"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Pipelines")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"Models")," within Prophecy are used to represent the flow of data. They are similar to a map you might use on a road trip: You have a ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Start"))," and ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Finish"))," (Datasets) and the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"stops"))," to make along the way (Gems)."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Pipeline",src:t(76334).A,width:"773",height:"357"})),(0,n.yg)("h3",{id:"pipelines-for-spark"},"Pipelines (for Spark)"),(0,n.yg)("p",null,"Pipelines are based on Spark-native code. Therefore, Prophecy users can leverage all of the powers of Spark to build their transformations. Spark can handle virtually any complexity and scale transformation."),(0,n.yg)("p",null,"You will want to create pipelines when you\u2019re running on a Spark environment, like Databricks or EMR. They\u2019re particularly useful for more complex ingestion (e.g. loading data from Salesforce or JDBC), data transformations (e.g. working with complex data types) and machine learning use-cases."),(0,n.yg)("p",null,"Learn more ",(0,n.yg)("a",{parentName:"p",href:"/Spark"},"here")," about Prophecy\u2019s Data Transformation Copilot for Spark and checkout this ",(0,n.yg)("a",{parentName:"p",href:"/getting-started/spark-with-databricks"},"guide"),"."),(0,n.yg)("h3",{id:"models-for-sql"},"Models (for SQL)"),(0,n.yg)("p",null,"Models are based on SQL-native code and are backed by the dbt Core\u2122\ufe0f build system. Models define a single Dataset (most commonly a table or a view) and they\u2019re stored as a select statement in a SQL file. Models are used for SQL where Pipelines are used for Spark."),(0,n.yg)("p",null,"You will want to create models if you\u2019d like to transform data directly on your data warehouse or you\u2019re an existing dbt user. They\u2019re best suited for data analytics and data transformation use-cases."),(0,n.yg)("p",null,"Learn more ",(0,n.yg)("a",{parentName:"p",href:"/SQL/"},"here")," about Prophecy\u2019s Data Transformation Copilot for SQL and get started with SQL on Databricks with ",(0,n.yg)("a",{parentName:"p",href:"/getting-started/sql-with-databricks"},"this guide")," or Snowflake with ",(0,n.yg)("a",{parentName:"p",href:"/getting-started/sql-with-snowflake"},"this guide"),"."),(0,n.yg)("h2",{id:"fabrics"},"Fabrics"),(0,n.yg)("p",null,"A Fabric is a logical execution environment. Teams organize their data engineering into multiple environments such as ",(0,n.yg)("em",{parentName:"p"},"development"),", ",(0,n.yg)("em",{parentName:"p"},"staging"),", and ",(0,n.yg)("em",{parentName:"p"},"production"),".\nAs an example, if you have a Databricks Workspace, that would map to one Fabric in Prophecy."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Fabrics",src:t(54435).A,width:"1069",height:"754"})),(0,n.yg)("h2",{id:"datasets"},"Datasets"),(0,n.yg)("p",null,"Datasets (not to be confused with a ",(0,n.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/3.1.3/api/scala/org/apache/spark/sql/Dataset.html"},"Spark Dataset"),") in Prophecy are the union of two concepts:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"WHAT"))," your data looks like"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"HOW"))," to read it or write it.")),(0,n.yg)("p",null,"To define a dataset, all you need is"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Type"),": The type of data you are reading/writing like CSV, Parquet files or catalog tables."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Location"),": The location of your data. It could be a file path for CSV or a table name."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Properties"),": Properties consists of Schema which is the ",(0,n.yg)("em",{parentName:"li"},"shape")," of the data and some other attributes specific to the file format. For example, in case of CSV, you can give Column delimiter in additional attributes. User can also define Metadata for each column here like description, tags and mappings.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Dataset",src:t(98814).A,width:"1309",height:"634"})),(0,n.yg)("h2",{id:"gems"},"Gems"),(0,n.yg)("p",null,"If a Pipeline is a roadmap of the journey that your data will take from Start to Finish, the Gems are the stops to make along the way. Each Gem instance can be seen as just another Spark Transformation you perform on your data like Reformat, Join, Limit or Filter.\nGems are categorised as below:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("div",{style:{width:"100px"}},"Gem")),(0,n.yg)("th",{parentName:"tr",align:null},"Category"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Source and Target",src:t(27028).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Spark/gems/source-target/"},(0,n.yg)("strong",{parentName:"a"},"Source and Target"))),(0,n.yg)("td",{parentName:"tr",align:null},"The set of Gems that help with loading and saving data.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Transform",src:t(74070).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Spark/gems/transform/"},(0,n.yg)("strong",{parentName:"a"},"Transform"))),(0,n.yg)("td",{parentName:"tr",align:null},"The set of Gems that help with transforming data.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Join and split",src:t(29690).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Spark/gems/join-split/"},(0,n.yg)("strong",{parentName:"a"},"Join and Split"))),(0,n.yg)("td",{parentName:"tr",align:null},"The set of Gems that help with the process of merging or splitting DataFrame(s) to create new DataFrame(s)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Custom",src:t(74317).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Spark/gems/custom/"},(0,n.yg)("strong",{parentName:"a"},"Custom"))),(0,n.yg)("td",{parentName:"tr",align:null},"Set of Gems that do not fall into the other categories.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Subgraph",src:t(94386).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Spark/gems/subgraph/"},(0,n.yg)("strong",{parentName:"a"},"Subgraph"))),(0,n.yg)("td",{parentName:"tr",align:null},"A Gem that can contain many other Gems within it.")))),(0,n.yg)("p",null,"Each Gem ",(0,n.yg)("em",{parentName:"p"},"instance")," comes with their own configuration and each produces its own block of output code."),(0,n.yg)("h2",{id:"jobs"},"Jobs"),(0,n.yg)("p",null,"Once you have developed a Spark data Pipeline using Prophecy, you will want to schedule it to run at some frequency. You can schedule just a single Pipeline or create a DAG of Pipelines. You can also add scripts to run in between these Pipelines."),(0,n.yg)("p",null,"To support Jobs, Prophecy provides you with an easy to use interface to develop, using two different schedulers:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"../Orchestration/databricks-jobs"},"Databricks Jobs"))," - for simpler data-Pipeline use-cases, where you just\norchestrate multiple data-Pipelines to run together. Databricks Jobs is a ",(0,n.yg)("strong",{parentName:"p"},"recommended")," scheduler, if you're\nDatabricks Native.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/Orchestration/airflow/"},"Airflow"))," - for more complex use-cases, where you have to use various operators, or need\nany additional data pre-and-post-processing, you can design your Jobs using Prophecy's interface for Airflow."))),(0,n.yg)("p",null,"Alternatively, since Prophecy provides you native Spark code on Git, you can easily integrate with any other scheduler."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Job",src:t(48675).A,width:"1667",height:"945"})),(0,n.yg)("h2",{id:"teams-and-users"},"Teams And Users"),(0,n.yg)("p",null,"Teams are the primary mechanism of ownership. Each Team represents a group of users who work together."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Teams own Projects")," where Pipelines, Datasets and Jobs live"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Teams own Fabrics")," that provide the execution and storage resources for execution including Spark clusters")),(0,n.yg)("p",null,"Users get access by being added to a team"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Personal Teams")," For every user, a default team in created that only contains one user. If only one user is to be given access to a project, it can be done via this team"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Personal Projects")," Users can put personal projects in their ",(0,n.yg)("em",{parentName:"li"},"personal team")," and not share it with others")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"TeamsUsers",src:t(7273).A,width:"2904",height:"1560"})))}d.isMDXComponent=!0},74317:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/Custom-4e4106f212d22ad0e6f2404cc028bb66.png"},48675:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/Job-1b8f06e63968398b00394d8765b3af1a.png"},29690:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/JoinSplit-9a074a1ce283e1ee0ab645b0e52ccd4b.png"},27028:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/SourceTarget-e8b62ba43e1ba4e74133ee826a69a165.png"},94386:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/Subgraph-5d813a19e57145a1c6ebfe47269e5e32.png"},74070:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/Transform-f62500f4ff428e8b114286997bc20280.png"},98814:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dataset-4afba4150f7d119ac0812adaa171c623.png"},54435:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/fabrics_details-e1a21f4c87befc0eeb56777079da5fcb.png"},88855:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/metadata-393b900912f41bd3e8b6b06c7976a5ee.png"},76334:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/pipeline-f8f349215c58fcddc59d52b8733fbef9.png"},53040:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/project_is_code-2725f715e5d36169f4feafad4464a82f.png"},7273:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/team_page-06a13301ea3e9f0d784c8bf785235089.png"}}]);