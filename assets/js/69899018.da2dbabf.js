"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[62001],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||g[h]||r;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(58168),a=(n(96540),n(15680));const r={title:"Orchestration with Airflow",id:"airflow-tutorial",description:"A tutorial on orchestrating Spark and SQL jobs with Airflow",sidebar_position:3,tags:["airflow","tutorial"]},i=void 0,s={unversionedId:"Orchestration/airflow/airflow-tutorial",id:"Orchestration/airflow/airflow-tutorial",title:"Orchestration with Airflow",description:"A tutorial on orchestrating Spark and SQL jobs with Airflow",source:"@site/docs/Orchestration/airflow/getting-started-with-low-code-airflow.md",sourceDirName:"Orchestration/airflow",slug:"/Orchestration/airflow/airflow-tutorial",permalink:"/Orchestration/airflow/airflow-tutorial",draft:!1,tags:[{label:"airflow",permalink:"/tags/airflow"},{label:"tutorial",permalink:"/tags/tutorial"}],version:"current",sidebarPosition:3,frontMatter:{title:"Orchestration with Airflow",id:"airflow-tutorial",description:"A tutorial on orchestrating Spark and SQL jobs with Airflow",sidebar_position:3,tags:["airflow","tutorial"]},sidebar:"mySidebar",previous:{title:"MWAA",permalink:"/Orchestration/airflow/setup/MWAA_fabric"},next:{title:"Databricks Jobs",permalink:"/Orchestration/databricks-jobs"}},l={},c=[{value:"In this quick-start, we will show you how to use Prophecy Managed Airflow to Run and schedule your Spark and SQL Pipelines",id:"in-this-quick-start-we-will-show-you-how-to-use-prophecy-managed-airflow-to-run-and-schedule-your-spark-and-sql-pipelines",level:4},{value:"You will need",id:"you-will-need",level:4},{value:"1. Setup Prophecy Fabric for Airflow",id:"1-setup-prophecy-fabric-for-airflow",level:2},{value:"1.1 Adding AWS Connection",id:"11-adding-aws-connection",level:3},{value:"1.3 Adding Email Connection",id:"13-adding-email-connection",level:3},{value:"1.3 Adding Databricks Spark Connection",id:"13-adding-databricks-spark-connection",level:3},{value:"1.4 Adding Databricks SQL Connection",id:"14-adding-databricks-sql-connection",level:3},{value:"1.5 Adding Snowflake SQL Connection",id:"15-adding-snowflake-sql-connection",level:3},{value:"2. Create an Airflow Job",id:"2-create-an-airflow-job",level:2},{value:"2.1 Adding S3 file Sensor Gem",id:"21-adding-s3-file-sensor-gem",level:3},{value:"2.2 Adding Email Gem",id:"22-adding-email-gem",level:3},{value:"2.3 Adding Spark Pipeline Gem",id:"23-adding-spark-pipeline-gem",level:3},{value:"2.4 Adding SQL DBT Gem",id:"24-adding-sql-dbt-gem",level:3},{value:"3. Run and Debug",id:"3-run-and-debug",level:2},{value:"4. Release and Schedule",id:"4-release-and-schedule",level:2},{value:"5. Monitor",id:"5-monitor",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Version 3.0.2 of our platform, Prophecy, introduces an exciting new integration: Orchestration with Airflow.\nNow, users can effortlessly create and manage Airflow Jobs using a user-friendly drag-and-drop interface.\nThis empowers you to design and schedule intricate workflows without the need for coding expertise.\nThe tool seamlessly translates your designs into highly optimized Python Airflow code, stored in Git, ensuring complete accessibility and openness to all users.\nMoreover, you have the flexibility to enhance functionality by incorporating your custom operators and sensors via our Gem Builder interface."),(0,a.yg)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0}},(0,a.yg)("iframe",{src:"https://www.loom.com/embed/e12bf4819ac84b93a3a6642df0f38450",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,a.yg)("h4",{id:"in-this-quick-start-we-will-show-you-how-to-use-prophecy-managed-airflow-to-run-and-schedule-your-spark-and-sql-pipelines"},"In this quick-start, we will show you how to use Prophecy Managed Airflow to Run and schedule your Spark and SQL Pipelines"),(0,a.yg)("p",null,"We'll take you step by step from connecting your compute cluster or warehouse to Prophecy Managed Airflow to creating your first ",(0,a.yg)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html"},"Airflow DAG")," and scheduling it.\nBy the end of this training, you'll have an understanding of Airflow DAGs, be able to use our Visual interface to quickly create your DAG, and schedule this DAG on Prophecy Hosted Airflow. Let's dig in!"),(0,a.yg)("h4",{id:"you-will-need"},"You will need"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Databricks Account"),(0,a.yg)("li",{parentName:"ul"},"A Prophecy Project With Spark Pipeline or SQL Model running on Databricks")),(0,a.yg)("p",null,"OR"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Snowflake Account"),(0,a.yg)("li",{parentName:"ul"},"A Prophecy Project with SQL Model running on Snowflake")),(0,a.yg)("p",null,"If you don't have an existing project, please check out ",(0,a.yg)("a",{parentName:"p",href:"https://docs.prophecy.io/concepts/project/#1-create-new-project"},"this guide")," for setting up a Spark Project, and ",(0,a.yg)("a",{parentName:"p",href:"/getting-started/sql-with-databricks"},"this guide")," for setting up a SQL model in Prophecy."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"For this guide, let's create a Job that gets activated whenever a new file is uploaded to an S3 bucket. Additionally, we'll configure it to send an email notification prior to initiating the execution of both the Pipeline and SQL model.")),(0,a.yg)("h2",{id:"1-setup-prophecy-fabric-for-airflow"},"1. Setup Prophecy Fabric for Airflow"),(0,a.yg)("p",null,"Prophecy introduces the concept of a Fabric to describe an execution environment. In this case, we create a Fabric to connect to Airflow, and create and schedule DAGs in it.\nFor this guide, we would be using Prophecy Managed Airflow, so an external Airflow instance is not required."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Create Fabric",src:n(64488).A,width:"2880",height:"1084"})),(0,a.yg)("p",null,"Setting up a Fabric is very straightforward. Click the ",(0,a.yg)("strong",{parentName:"p"},"(1) Create Entity")," button, and choose ",(0,a.yg)("strong",{parentName:"p"},"(2) Create Fabric")," option. The Fabric creation is composed of two steps: Basic Info and Providers setup.\nOn the Basic Info screen, enter a ",(0,a.yg)("strong",{parentName:"p"},"(1) Fabric Name"),", ",(0,a.yg)("strong",{parentName:"p"},"(2) Fabric Description"),", and choose the ",(0,a.yg)("strong",{parentName:"p"},"(3) Team")," that\u2019s going to own the Fabric."),(0,a.yg)("p",null,"Once ready, click ",(0,a.yg)("strong",{parentName:"p"},"(4) Continue"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Fill_fabric_details.png",src:n(87683).A,width:"2880",height:"1726"})),(0,a.yg)("p",null,"Since we\u2019re setting up a Fabric connected to Airflow, choose ",(0,a.yg)("strong",{parentName:"p"},"Airflow")," as the ",(0,a.yg)("strong",{parentName:"p"},"(1) Provider Type")," and ",(0,a.yg)("strong",{parentName:"p"},"Prophecy Managed")," as the ",(0,a.yg)("strong",{parentName:"p"},"(2) Provider"),".\nFor connecting to Prophecy Managed Airflow, you don't need to provide any other details, so go ahead and click on ",(0,a.yg)("strong",{parentName:"p"},"(3) Continue"),"."),(0,a.yg)("h3",{id:"11-adding-aws-connection"},"1.1 Adding AWS Connection"),(0,a.yg)("p",null,"To be able to trigger your Airflow Job, using an S3 File Sensor, you need to have connection from Prophecy Managed Airflow to you S3 account. For this, we need to add an AWS Connection.\nClick on ",(0,a.yg)("strong",{parentName:"p"},"(1) Add Connection")," button. This Opens up the Connection form as shown."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_connection",src:n(88704).A,width:"2880",height:"1084"})),(0,a.yg)("p",null,"Select AWS in ",(0,a.yg)("strong",{parentName:"p"},"(1) Connection Type"),". Provide a ",(0,a.yg)("strong",{parentName:"p"},"(2) Connection Name")," to identify your connection, add a ",(0,a.yg)("strong",{parentName:"p"},"(3) Description")," of your choice, and provide the ",(0,a.yg)("strong",{parentName:"p"},"(4) AWS Access Key ID")," and ",(0,a.yg)("strong",{parentName:"p"},"(5)AWS Secret Access Key"),". Please check ",(0,a.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"},"here")," on how to get the access and secret key from AWS.\nOnce done, hit ",(0,a.yg)("strong",{parentName:"p"},"(6) Save"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_AWS_connection",src:n(49455).A,width:"2880",height:"1726"})),(0,a.yg)("h3",{id:"13-adding-email-connection"},"1.3 Adding Email Connection"),(0,a.yg)("p",null,"To be able to send Email via Airflow using an Email Gem, you need to have Email connection in Prophecy Managed Airflow.\nClick again on Add Connection button and select Email in ",(0,a.yg)("strong",{parentName:"p"},"(1) Connection Type"),"."),(0,a.yg)("p",null,"Provide a ",(0,a.yg)("strong",{parentName:"p"},"(2) Connection Name")," to identify your connection, add a ",(0,a.yg)("strong",{parentName:"p"},"(3) Description")," of your choice, and provide the ",(0,a.yg)("strong",{parentName:"p"},"(4) Host")," as your SMTP host example ",(0,a.yg)("inlineCode",{parentName:"p"},"smtp.gmail.com"),". Provide the login credentials for this server in ",(0,a.yg)("strong",{parentName:"p"},"(5)Login")," and ",(0,a.yg)("strong",{parentName:"p"},"(6)Password")," and provide your SMTP port in ",(0,a.yg)("strong",{parentName:"p"},"(7) Port"),".\nOnce done, hit ",(0,a.yg)("strong",{parentName:"p"},"(8) Save"),".\n",(0,a.yg)("img",{alt:"Add_Email_connection.png",src:n(41617).A,width:"2880",height:"1726"})),(0,a.yg)("h3",{id:"13-adding-databricks-spark-connection"},"1.3 Adding Databricks Spark Connection"),(0,a.yg)("p",null,"To be able to Run your Databricks Pipelines, you need to have connection from Prophecy Managed Airflow to your Databricks Environment.\nClick again on Add Connection button."),(0,a.yg)("p",null,"Select Databricks Spark in ",(0,a.yg)("strong",{parentName:"p"},"(1) Connection Type"),". Now under the ",(0,a.yg)("strong",{parentName:"p"},"(2) Fabric"),", you would select the already created Fabric for Databricks Spark and Prophecy would setup the connection.\nYou can provide a description in the ",(0,a.yg)("strong",{parentName:"p"},"(3) Description"),".\nOnce done, click ",(0,a.yg)("strong",{parentName:"p"},"(4) Save"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_DB_Spark_connection.png",src:n(58480).A,width:"2880",height:"1726"})),(0,a.yg)("h3",{id:"14-adding-databricks-sql-connection"},"1.4 Adding Databricks SQL Connection"),(0,a.yg)("p",null,"To be able to Run your Databricks SQL Models, you need to have connection from Prophecy Managed Airflow to your Databricks SQL Environment.\nClick again on Add Connection button."),(0,a.yg)("p",null,"Select Databricks SQL in ",(0,a.yg)("strong",{parentName:"p"},"(1) Connection Type"),". Now under the ",(0,a.yg)("strong",{parentName:"p"},"(2) Fabric"),", you would select the already created Fabric for Databricks SQL and Prophecy would setup the connection.\nYou can provide a description in the ",(0,a.yg)("strong",{parentName:"p"},"(3) Description"),".\nOnce done, click ",(0,a.yg)("strong",{parentName:"p"},"(4) Save"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Ad_DB_SQL_connection.png",src:n(84976).A,width:"2880",height:"1726"})),(0,a.yg)("h3",{id:"15-adding-snowflake-sql-connection"},"1.5 Adding Snowflake SQL Connection"),(0,a.yg)("p",null,"To be able to Run your Snowflake SQL Models, you need to have connection from Prophecy Managed Airflow to your Snowflake SQL Environment.\nClick again on Add Connection button."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_SF_SQL_connection",src:n(13944).A,width:"2880",height:"1726"})),(0,a.yg)("p",null,"Select Snowflake SQL in ",(0,a.yg)("strong",{parentName:"p"},"(1) Connection Type"),". Now under the ",(0,a.yg)("strong",{parentName:"p"},"(2) Fabric"),", you would select the already created Fabric for Snowflake SQL and Prophecy would setup the connection.\nYou can provide a description in the ",(0,a.yg)("strong",{parentName:"p"},"(3) Description"),".\nOnce done, click ",(0,a.yg)("strong",{parentName:"p"},"(4) Save"),"."),(0,a.yg)("p",null,"After adding all connections, click ",(0,a.yg)("strong",{parentName:"p"},"(1) Complete"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Complete_fabric",src:n(10390).A,width:"2880",height:"1726"})),(0,a.yg)("p",null,"After creating the Fabric, Lets create our first Airflow Job."),(0,a.yg)("h2",{id:"2-create-an-airflow-job"},"2. Create an Airflow Job"),(0,a.yg)("p",null,"A Job is an entity that contains Gems to represent a DAG consisting of various Tasks (Pipelines/Models/Scripts, etc) which you can Run once or schedule to run at a frequency. Each Job would represent an Airflow DAG in Python."),(0,a.yg)("p",null,"Let's see how to create an Airflow Job in Prophecy."),(0,a.yg)("p",null,"Click the ",(0,a.yg)("strong",{parentName:"p"},"(1) Create Entity")," button, and choose ",(0,a.yg)("strong",{parentName:"p"},"(2) Create Job")," option."),(0,a.yg)("p",null,"In the side drawer that opens, you would provide the Basic Info of the Job. Start by selecting the ",(0,a.yg)("strong",{parentName:"p"},"(1) Project")," in which you want to create the Job. You can pick the existing Spark or SQL project here where you have created Pipelines/Models.\nThen pick your development ",(0,a.yg)("strong",{parentName:"p"},"(2) Branch"),". Here you can pick an existing branch for development, or create a new one. Provide a ",(0,a.yg)("strong",{parentName:"p"},"(3) Name")," and pick ",(0,a.yg)("strong",{parentName:"p"},"Airflow")," in the ",(0,a.yg)("strong",{parentName:"p"},"(4) Scheduler"),". Select the ",(0,a.yg)("strong",{parentName:"p"},"(5) Fabric")," we created in Step 1.\nPick a ",(0,a.yg)("strong",{parentName:"p"},"(6) Schedule")," with which you want to schedule the Job. Note, you can modify this again after testing before releasing your Job.\nAdd a ",(0,a.yg)("strong",{parentName:"p"},"(7) Description"),", about the Job you are creating. Once done, click ",(0,a.yg)("strong",{parentName:"p"},"(8) Create New"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Create_Job",src:n(97786).A,width:"2880",height:"1084"})),(0,a.yg)("p",null,"This will take you to the ",(0,a.yg)("strong",{parentName:"p"},"Job editor")," where you would be creating the actual DAG for the Job.\nLet's start adding Gems to our Job now."),(0,a.yg)("h3",{id:"21-adding-s3-file-sensor-gem"},"2.1 Adding S3 file Sensor Gem"),(0,a.yg)("p",null,"Click on ",(0,a.yg)("strong",{parentName:"p"},"(1) Sensors"),", and Drag the ",(0,a.yg)("strong",{parentName:"p"},"(2) S3FileSensor Gem")," from the dropdown to the canvas. Then click the newly added Gem and click ",(0,a.yg)("strong",{parentName:"p"},"(3) Open")," to open the Gem Configurations.\n",(0,a.yg)("img",{alt:"Add_S3_gem",src:n(92568).A,width:"2880",height:"1084"})),(0,a.yg)("p",null,"Here, we will specify the S3 bucket/path on which we want to trigger the Job.\nIn ",(0,a.yg)("strong",{parentName:"p"},"(1) S3 Path(s)")," specify the complete path of file in your Bucket. Airflow will check if this file exists in the specified bucket periodically and trigger the Job when it arrives. Select the created Connection for AWS in ",(0,a.yg)("strong",{parentName:"p"},"(2) Connection name")," and hit ",(0,a.yg)("strong",{parentName:"p"}," (3) Save"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_S3_gem_details",src:n(82976).A,width:"2880",height:"1726"})),(0,a.yg)("h3",{id:"22-adding-email-gem"},"2.2 Adding Email Gem"),(0,a.yg)("p",null,"Click on the ",(0,a.yg)("strong",{parentName:"p"},"(1) Operators"),", and Drag the ",(0,a.yg)("strong",{parentName:"p"},"(2) Email Gem")," from the dropdown to the canvas. If you drag this closer to output port of the previous Gem, it will get auto-connected to it. Then click the newly added Gem and click ",(0,a.yg)("strong",{parentName:"p"},"(3) Open")," to open the Gem Configurations."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_email_gem",src:n(31722).A,width:"2880",height:"1084"})),(0,a.yg)("p",null,"Here we will specify our Email configurations. In ",(0,a.yg)("strong",{parentName:"p"},"(1) To"),", add your Email id where you want to receive the notification Email when the Job is triggered. Select the ",(0,a.yg)("strong",{parentName:"p"},"(2) Connection name"),", you created for Email in step 1.3.\nYou can provide a ",(0,a.yg)("strong",{parentName:"p"},"(3) Subject"),", for the Email and also add ",(0,a.yg)("strong",{parentName:"p"},"(4) Email content")," you want to add to your email. Here in the example, we are using a Airflow param available to access the execution time in a Job.\nAdditionally, you can also add cc and bcc emails.\nOnce done, Click ",(0,a.yg)("strong",{parentName:"p"},"(5) Save"),"!"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_email_gem_details",src:n(78632).A,width:"2880",height:"1726"})),(0,a.yg)("h3",{id:"23-adding-spark-pipeline-gem"},"2.3 Adding Spark Pipeline Gem"),(0,a.yg)("p",null,"If you have a Spark Databricks connection and a Spark Project with Pipeline, you can include Spark Pipeline Gems in the Job. Click on ",(0,a.yg)("strong",{parentName:"p"},"(1) Operators"),", and Drag the ",(0,a.yg)("strong",{parentName:"p"},"(2) Pipeline Gem")," from the dropdown to the canvas. Drag it close to the output port of the Email Gem, so that it gets auto-connected. Then click the newly added Gem and click ",(0,a.yg)("strong",{parentName:"p"},"(3) Open")," to open the Gem Configurations."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_Pipeline_Gem",src:n(81e3).A,width:"2880",height:"1084"})),(0,a.yg)("p",null,"Here, you will select the Pipeline and optionally override any config values for the Pipeline."),(0,a.yg)("p",null,"Select the ",(0,a.yg)("strong",{parentName:"p"},"(1) Pipeline to Schedule")," you want to Run. As you select the Pipeline, You would start seeing the Configurations defined in the Pipeline. You would not be able to modify the schema of these configs but can override the Config values.\nPick (",(0,a.yg)("strong",{parentName:"p"},"2) Fabric and Cluster size to run this Pipeline")," for running this Pipeline in Databricks. Here, select the Fabric for which you already created connection in step 1.3. Once done, Click ",(0,a.yg)("strong",{parentName:"p"},"(3) Save"),"!"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_pipeline_gem_details",src:n(74696).A,width:"2880",height:"1726"})),(0,a.yg)("h3",{id:"24-adding-sql-dbt-gem"},"2.4 Adding SQL DBT Gem"),(0,a.yg)("p",null,"Click on ",(0,a.yg)("strong",{parentName:"p"},"(1) Operators"),", and Drag the ",(0,a.yg)("strong",{parentName:"p"},"(2) DBT Gem")," from the dropdown to the canvas. Drag it close to the output port of the Pipeline Gem, so that it gets auto-connected. Then click the newly added Gem and click ",(0,a.yg)("strong",{parentName:"p"},"(3) Open")," to open the Gem Configurations."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_DBT_Gem",src:n(64604).A,width:"2880",height:"1084"})),(0,a.yg)("p",null,"Here, you will select the DBT Project/Model to Schedule, what SQL Fabric to schedule it on, and other additional properties for running a DBT model."),(0,a.yg)("p",null,"Select the ",(0,a.yg)("strong",{parentName:"p"},"(1) DBT commands")," you want to run when scheduling your Models. You can select all (",(0,a.yg)("a",{parentName:"p",href:"https://docs.prophecy.io/Spark/extensibility/dependencies"},"Dependencies"),", ",(0,a.yg)("a",{parentName:"p",href:"https://docs.prophecy.io/getting-started/sql-with-databricks/#431-create-seeds"},"Seed"),", Run and Test) here.\nSelect the ",(0,a.yg)("strong",{parentName:"p"},"(2) DBT Project to Schedule"),". And then select the ",(0,a.yg)("strong",{parentName:"p"},"(3) SQL Warehouse Fabric")," to schedule the Module on. Select the Fabric for which connection was created in Step 1.4 or 1.5.\nIn ",(0,a.yg)("strong",{parentName:"p"},"(4) Git reference"),", select if you want to schedule a particular commit/tag or branch. Here you can select ",(0,a.yg)("inlineCode",{parentName:"p"},"branch")," for this guide and then in ",(0,a.yg)("strong",{parentName:"p"},"(5) Reference Value")," give the current branch name you are working on.\nYou can provide any additional ",(0,a.yg)("strong",{parentName:"p"},"(6) Properties")," for your run and then click ",(0,a.yg)("strong",{parentName:"p"},"(7) Save"),"!!"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add_DBT_gem_details",src:n(29382).A,width:"1440",height:"863"})),(0,a.yg)("p",null,"Congratulations!!! And just like that, you have created a very simple Airflow Job with one Databricks Pipeline Task and one DBT Model Task."),(0,a.yg)("p",null,"Let's go ahead and see how to Run and Schedule it."),(0,a.yg)("h2",{id:"3-run-and-debug"},"3. Run and Debug"),(0,a.yg)("p",null,"Now that we have our Job ready, we can go ahead and run it."),(0,a.yg)("p",null,"Click on the ",(0,a.yg)("strong",{parentName:"p"},"(1) Run button")," to trigger the One-time run. This creates a temporary DAG and uploads to Airflow. User can check logs and status in the Prophecy UI itself. When you click on run, you will see a Job Details Toaster."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Run_job",src:n(28651).A,width:"1440",height:"542"})),(0,a.yg)("p",null,"Click on ",(0,a.yg)("strong",{parentName:"p"},"(2) Details")," to open the detailed logs of the Run.\nHere you can see all the steps involved in the Run and also detailed logs for each step."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Run_job_logs",src:n(98626).A,width:"2880",height:"1726"}),"\nClick on ",(0,a.yg)("strong",{parentName:"p"},"(1) + button"),", to open the logs for a particular step."),(0,a.yg)("h2",{id:"4-release-and-schedule"},"4. Release and Schedule"),(0,a.yg)("p",null,"Once we have developed and tested the Job, it\u2019s time to commit and push our code to our Git repository and release the Job to our Airflow."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Enable_commit",src:n(43501).A,width:"2880",height:"1726"})),(0,a.yg)("p",null,"Start by toggling our Job to be ",(0,a.yg)("strong",{parentName:"p"},"(1) Enabled"),". This enables the Job on the Airflow and will ensure that the Job follows the previously set interval. Without enabling the DAG is not uploaded to Airflow."),(0,a.yg)("p",null,"Click on the ",(0,a.yg)("strong",{parentName:"p"},"(2) Release")," button in the top right corner or ",(0,a.yg)("strong",{parentName:"p"},"(3) Commit")," button in the middle of the footer (bottom of the screen) to start the commit process. This opens an easy-to-use Git management screen."),(0,a.yg)("p",null,"The process of deploying code is composed of 4 steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Commit:")," We start by creating a named version of our code and uploading it to our development branch on the secure Git repository. On the left-hand side you can see the ",(0,a.yg)("strong",{parentName:"p"},"Current branch")," and the associated history of commits and on the right side, there\u2019s a list of ",(0,a.yg)("strong",{parentName:"p"},"Entities changed")," (models, Jobs, etc) and their status. If everything looks good, type in the ",(0,a.yg)("strong",{parentName:"p"},"(1) Commit message")," which should clearly describe, in few sentences, all the changes that we\u2019ve introduced and click ",(0,a.yg)("strong",{parentName:"p"},"(2) Commit"),".\n",(0,a.yg)("img",{alt:"commit_screen",src:n(74766).A,width:"2880",height:"1726"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Pull:")," Before your changes can be safely merged into the ",(0,a.yg)("strong",{parentName:"p"},"main")," branch, we have to make sure that we\u2019re up-to-date with it. If your colleagues introduced any code on ",(0,a.yg)("strong",{parentName:"p"},"main")," we have to ",(0,a.yg)("strong",{parentName:"p"},"Pull")," it first. For this, simply click on ",(0,a.yg)("strong",{parentName:"p"},"(1) Continue")," and then ",(0,a.yg)("strong",{parentName:"p"},"(2) Pull"),".\n",(0,a.yg)("img",{alt:"Pull_screen",src:n(34503).A,width:"1440",height:"542"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Merge:")," Now that our development branch is up-to-date, we can merge it to master. Here we can either create a ",(0,a.yg)("strong",{parentName:"p"},"Pull Request")," or if ",(0,a.yg)("strong",{parentName:"p"},"Merge")," the changes to main directly if your main branch isn't protected. For now, click on ",(0,a.yg)("strong",{parentName:"p"},"(1) Merge")," to merge them directly. Once the code is merged, you can now see the latest commits present on your ",(0,a.yg)("strong",{parentName:"p"},"main")," branch.\n",(0,a.yg)("img",{alt:"Merge_screen",src:n(98739).A,width:"2880",height:"1726"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Release:")," Finally, now that our changes are all versioned on Git, we can release them to our scheduler. Simply specify a ",(0,a.yg)("strong",{parentName:"p"},"(1) Release Version")," number, e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"1.0")," , and the ",(0,a.yg)("strong",{parentName:"p"},"(2) Release Note,")," which should clearly outline the latest changes. When ready, click ",(0,a.yg)("strong",{parentName:"p"},"(3) Release."),"\n",(0,a.yg)("img",{alt:"Release_screen",src:n(74267).A,width:"2880",height:"1726"})))),(0,a.yg)("p",null,"This will build and deploy your Airflow Job on the Airflow Fabric Specified in the Job and would schedule to run it on the specified schedule."),(0,a.yg)("h2",{id:"5-monitor"},"5. Monitor"),(0,a.yg)("p",null,"During the release process Prophecy automatically packages, tests, and deploys your Jobs to Airflow. Once the process is finished you can see the deployed and running Job within your Airflow environment. You can monitor this Job within Prophecy in the ",(0,a.yg)("strong",{parentName:"p"},"Observability")," page."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Airflow_Monitoring_page",src:n(5067).A,width:"1440",height:"542"})),(0,a.yg)("p",null,"Click on ",(0,a.yg)("strong",{parentName:"p"},"(1) Observability icon")," on the left side menu bar to take you to the Observability page. Then in ",(0,a.yg)("strong",{parentName:"p"},"(2) Fabric Selection box"),", choose the Airflow Fabric your have. The Observability page will show all the Past and Current Runs of the Jobs you released on this Fabric. Switch between ",(0,a.yg)("strong",{parentName:"p"},"Attention Required"),", ",(0,a.yg)("strong",{parentName:"p"},"All events"),", ",(0,a.yg)("strong",{parentName:"p"},"Job Runs")," to find any Particular Run you are looking for. Click on the ",(0,a.yg)("strong",{parentName:"p"},"(3) Details")," button to open up the logs of any particular Run."),(0,a.yg)("h2",{id:"whats-next"},"What\u2019s next?"),(0,a.yg)("p",null,"Great work! \ud83c\udf89"),(0,a.yg)("p",null,"You've created your first Airflow Job in Prophecy, ran it successfully, released, scheduled, and monitored the Job. Take a moment to appreciate your accomplishment \ud83e\udd73."),(0,a.yg)("p",null,"To continue learning and expanding your skills with Prophecy, feel free to explore other tutorials within our documentation!"),(0,a.yg)("p",null,"If you ever encounter any difficulties, don't hesitate to reach out to us (",(0,a.yg)("a",{parentName:"p",href:"mailto:contact.us@Prophecy.io"},"contact.us@Prophecy.io"),") or join our ",(0,a.yg)("a",{parentName:"p",href:"https://prophecy-io-support.slack.com/join/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ#/shared-invite/email"},"Slack community")," for assistance. We're here to help!"),(0,a.yg)("hr",null))}g.isMDXComponent=!0},92568:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.10_Add_s3_gem-2a946a09ee73912bc8abaa7b6f0a5160.png"},82976:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.11_Add_s3_gem_details-54d44ee280c2cf7fceae32152dbedd46.png"},31722:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.12_Add_email_gem-f2bba81229a0f484fdc25e31628bd56c.png"},78632:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.13_Add_email_gem_details-da3c19e263c58acfb80a805ecd66952f.png"},81e3:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.14_Add_pipeline_gem-45d2e7e3d46a095c899b6af03a1d4814.png"},74696:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.15_Add_pipeline_gem_details-eeb2d4df18f9331c0a63cfdc96143c49.png"},64604:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.16_Add_DBT_gem-4f8d7f58fb1272d3f34623896db75b3e.png"},29382:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.17_Add_DBT_gem_details-e836f8bbe6f3f9d0771ffa1ec1a714f4.png"},28651:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.18_Run_Job-c74a733a23a3662c9b2c4b204e5d6e77.png"},98626:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.19_Run_Job_logs-0323f46acaadbf4f38db46f45a8de52f.png"},64488:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.1_Create_Fabric-49796b917d7155244e44ce3e3af6b5cd.png"},43501:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.20_start_commit-7a8c082c2fa41a0cafdafe163f6165fc.png"},74766:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.21_commit_screen-6584d65e6e9d67933fd5b7250486d0f9.png"},34503:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.22_Pull_screen-b14f74d0c781f0e90f1ac0ac4107661b.png"},98739:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.23_merge_screen-4403a56552e6b737d8e49ca482c2c88f.png"},74267:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.24_release_screen-b32cb4fe551f57d51245adbc73e8a84d.png"},5067:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.25_Observability-5488e021ec6c36057f4ac60504e9304f.png"},87683:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.2_Create_Fabric-8cb092965a4dee63432186c2b6982924.png"},88704:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.3_Add_Connection-e52b200f2986cda3be090212a02ff872.png"},49455:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.4_AWS_Connection-4c3d3bfbc9c76e839dcbb6d4e1ef3584.png"},41617:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.5_Email_connection-6f392517477fe16388989d4f089be6ed.png"},58480:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.6_DB_Spark_connection-51d1e9b4ff69f1e17085ec10d3654309.png"},84976:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.7_DB_Sql_connection-e1de47abbd9b3265c2b03e8aafcca822.png"},10390:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.8_Complete_fabric-112c1d0ef2979116226b46db2b4e84fd.png"},13944:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.8_SF_Sql_connection-75aa10231a518c3993e9a80486d343d0.png"},97786:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/3.9_Create_Job-9fb3cbc0e3246cb19970d24284235919.png"}}]);