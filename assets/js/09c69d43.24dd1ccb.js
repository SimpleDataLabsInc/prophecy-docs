"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[4260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=i.createContext({}),s=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(r.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(r,".").concat(h)]||u[h]||c[h]||l;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=h;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const l={title:"Prophecy Build Tool (PBT)",id:"prophecy-build-tool",description:"Prophecy Build tool",sidebar_position:4,tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment"]},a=void 0,p={unversionedId:"releases-and-deployment/prophecy-build-tool/prophecy-build-tool",id:"releases-and-deployment/prophecy-build-tool/prophecy-build-tool",title:"Prophecy Build Tool (PBT)",description:"Prophecy Build tool",source:"@site/docs/releases-and-deployment/prophecy-build-tool/prophecy-build-tool.md",sourceDirName:"releases-and-deployment/prophecy-build-tool",slug:"/releases-and-deployment/prophecy-build-tool/",permalink:"/releases-and-deployment/prophecy-build-tool/",draft:!1,tags:[{label:"metadata",permalink:"/tags/metadata"},{label:"build",permalink:"/tags/build"},{label:"deploy",permalink:"/tags/deploy"},{label:"test",permalink:"/tags/test"},{label:"cli",permalink:"/tags/cli"},{label:"continuous integration",permalink:"/tags/continuous-integration"},{label:"continuous deployment",permalink:"/tags/continuous-deployment"}],version:"current",sidebarPosition:4,frontMatter:{title:"Prophecy Build Tool (PBT)",id:"prophecy-build-tool",description:"Prophecy Build tool",sidebar_position:4,tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment"]},sidebar:"defaultSidebar",previous:{title:"Releases and Deployment",permalink:"/releases-and-deployment/"},next:{title:"PBT on Github Actions",permalink:"/releases-and-deployment/prophecy-build-tool/prophecy-build-tool-github-actions"}},r={},s=[{value:"Features (v1.1.0)",id:"features-v110",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"Github Actions",id:"github-actions",level:3},{value:"Jenkins",id:"jenkins",level:3},{value:"Quickstart",id:"quickstart",level:2},{value:"Usage",id:"usage",level:3},{value:"Running locally",id:"running-locally",level:3},{value:"Building Pipelines and deploying Jobs",id:"building-pipelines-and-deploying-jobs",level:4},{value:"Build command",id:"build-command",level:5},{value:"Deploy command",id:"deploy-command",level:5},{value:"Deploy specific Jobs using JobId filter",id:"deploy-specific-jobs-using-jobid-filter",level:5},{value:"Running all unit tests in project",id:"running-all-unit-tests-in-project",level:4},{value:"Validating project",id:"validating-project",level:4}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prophecy-built-tool")," (PBT) allows you to quickly build, test and deploy projects generated by Prophecy (your standard Spark Scala and\nPySpark Pipelines) to integrate with your own CI / CD (e.g. Github Actions), build system (e.g. Jenkins), and\norchestration (e.g. Databricks Workflows)."),(0,o.kt)("h2",{id:"features-v110"},"Features (v1.1.0)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build Pipelines (all or specify ones to build) in Prophecy projects (Scala and Python)"),(0,o.kt)("li",{parentName:"ul"},"Unit test Pipelines in Prophecy projects (Scala and Python)"),(0,o.kt)("li",{parentName:"ul"},"Deploy Jobs with built Pipelines on Databricks"),(0,o.kt)("li",{parentName:"ul"},"Deploying Jobs filtered with Fabric ids on Databricks"),(0,o.kt)("li",{parentName:"ul"},"Integrate with CI/CD tools like GitHub Actions"),(0,o.kt)("li",{parentName:"ul"},"Verify the project structure of Prophecy projects"),(0,o.kt)("li",{parentName:"ul"},"Deploying Pipeline Configurations")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python >=3.7 (Recommended 3.9.13)"),(0,o.kt)("li",{parentName:"ul"},"pip"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pyspark")," (Recommended 3.3.0)")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install PBT, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip3 install prophecy-build-tool\n")),(0,o.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,o.kt)("h3",{id:"github-actions"},(0,o.kt)("a",{parentName:"h3",href:"/releases-and-deployment/prophecy-build-tool/prophecy-build-tool-github-actions"},"Github Actions")),(0,o.kt)("h3",{id:"jenkins"},(0,o.kt)("a",{parentName:"h3",href:"/releases-and-deployment/prophecy-build-tool/prophecy-build-tool-jenkins"},"Jenkins")),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Usage: pbt [OPTIONS] COMMAND [ARGS]...\n\nOptions:\n  --help  Show this message and exit.\n\nCommands:\n  build\n  deploy\n  test\n")),(0,o.kt)("h3",{id:"running-locally"},"Running locally"),(0,o.kt)("p",null,"The PBT cli can be used to build, test and deploy projects created by Prophecy that are present in your local filesystem."),(0,o.kt)("p",null,"Please make sure the ",(0,o.kt)("strong",{parentName:"p"},"DATABRICKS_URL")," and ",(0,o.kt)("strong",{parentName:"p"},"DATABRICKS_TOKEN")," environment variables are set appropriately pointing to your Databricks workspace before running any PBT commands.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export DATABRICKS_HOST="https://example_databricks_host.cloud.databricks.com"\nexport DATABRICKS_TOKEN="exampledatabrickstoken"\n')),(0,o.kt)("h4",{id:"building-pipelines-and-deploying-jobs"},"Building Pipelines and deploying Jobs"),(0,o.kt)("p",null,"PBT can build and deploy Jobs inside your Prophecy project to the Databricks environment defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABRICKS_HOST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABRICKS_TOKEN"),"\nenvironment variables."),(0,o.kt)("p",null,"Since v1.0.3 PBT supports new input parameters that are used to determine the DBFS path where your project's artifacts would\nbe uploaded. These are the ",(0,o.kt)("inlineCode",{parentName:"p"},"--release-version")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--project-id")," parameters which would be used to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"__PROJECT_RELEASE_VERSION_ PLACEHOLDER__")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"__PROJECT_ID_PLACEHOLDER__")," placeholders that would already be present in your Job's definition file\n(",(0,o.kt)("inlineCode",{parentName:"p"},"databricks-job.json"),"). Using a unique release version of your choice and the project's Prophecy ID\n(as seen in the project's URL on the Prophecy UI) is recommended."),(0,o.kt)("h5",{id:"build-command"},"Build command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt build --path /path/to/your/prophecy_project/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PBT provides user the ability to filter pipelines to be build, this can be huge time saving if we have large number of pipelines,"),(0,o.kt)("li",{parentName:"ul"},"Additionally, multiple pipelines can be passed comma(,) separated. To only build certain pipelines we can use:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt build --pipelines customers_orders,join_agg_sort  --path /path/to/your/prophecy_project/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PBT builds by default fails(EXIT 1) if any of the Pipeline builds failed either due to corrupt Pipeline or build failure."),(0,o.kt)("li",{parentName:"ul"},"Although if we want to continue, we can skip these errors by using ",(0,o.kt)("inlineCode",{parentName:"li"},"--ignore-build-errors")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--ignore-parse-errors")," flags"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--ignore-build-errors")," flag skips package build failures"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--ignore-parse-errors")," flag skips project parsing error failures")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt build --path /path/to/your/prophecy_project/ --ignore-build-errors --ignore-parse-errors\n")),(0,o.kt)("h5",{id:"deploy-command"},"Deploy command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --path /path/to/your/prophecy_project/ --release-version 1.0 --project-id 10\n")),(0,o.kt)("p",null,"Sample output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Prophecy-build-tool v1.0.4.1\n\nFound 1 jobs: daily\nFound 1 pipelines: customers_orders (python)\n\nBuilding 1 pipelines \ud83d\udeb0\n\n  Building pipeline pipelines/customers_orders [1/1]\n\n\u2705 Build complete!\n\nDeploying 1 jobs \u23f1\n\n  Deploying job jobs/daily [1/1]\n    Uploading customers_orders-1.0-py3-none-any.whl to\ndbfs:/FileStore/prophecy/artifacts/...\nQuerying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: daily\n\n\u2705 Deployment completed successfully!\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command also supports an advanced option ",(0,o.kt)("inlineCode",{parentName:"p"},"--dependent-projects-path")," if there is a need to build projects other than the main project that has to be deployed.\nThis would be useful if there are dependent Pipelines whose source code can be cloned into a different directory accessible to PBT\nwhile running ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," for the main project. This option supports only one path as argument but the path itself can contain multiple Prophecy projects within it in different\nsubdirectories."),(0,o.kt)("p",null,"Example deploy command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --path /path/to/your/prophecy_project/ --release-version 1.0 --project-id 10 --dependent-projects-path /path/to/dependent/prophecy/projects\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command also supports an advanced option ",(0,o.kt)("inlineCode",{parentName:"p"},"--fabric-ids")," ( comma separated if more than one ) if there is a\nneed to only deploy Jobs associated with certain Fabric IDs. This option is often used in a multi-workspace environment.\n",(0,o.kt)("a",{parentName:"p",href:"/releases-and-deployment/prophecy-build-tool/prophecy-build-tool-jenkins#fabricid"},"Find the Fabric ID")," for your Fabric by navigating to the Metadata page of that Fabric and observing the URL."),(0,o.kt)("p",null,"The following command will filter out and only deploy the jobs associated with given Fabric ids.\nExample deploy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --fabric-ids 647,1527 --path /path/to/your/prophecy_project/\n")),(0,o.kt)("p",null,"Sample output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Project name: HelloWorld\nFound 2 jobs: ashish-TestJob2, ashish-TestJob\nFound 4 pipelines: customers_orders (python), report_top_customers (python), join_agg_sort (python),\nfarmers-markets-irs (python)\n[SKIP]: Skipping builds for all pipelines as '--skip-builds' flag is passed.\n\n Deploying 2 jobs\nDeploying jobs only for given Fabric IDs: ['647', '1527']\n\n[START]:  Deploying job jobs/TestJob2 [1/2]\n[DEPLOY]: Job being deployed for fabric id: 1527\n    Pipeline pipelines/farmers-markets-irs might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/report_top_customers might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Querying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: ashish-TestJob2\n\n[START]:  Deploying job jobs/TestJob [2/2]\n[DEPLOY]: Job being deployed for fabric id: 647\n    Pipeline pipelines/customers_orders might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/join_agg_sort might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/report_top_customers might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Querying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: ashish-TestJob\n\n\u2705 Deployment completed successfully!\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command builds all pipelines and then deploys them, if you want to skip building all pipelines\n( this could be useful, if you are running a ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command after running ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," previously.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --skip-builds --path /path/to/your/prophecy_project/\n")),(0,o.kt)("h5",{id:"deploy-specific-jobs-using-jobid-filter"},"Deploy specific Jobs using JobId filter"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command builds all pipelines and then deploys all jobs, if you want to deploy some specific jobs\nwe can use ",(0,o.kt)("inlineCode",{parentName:"p"},"job-ids")," filter (we can find JobId on Job metadata page) , PBT will automatically calculate all the pipelines needed for the jobs and then build them.\nThis could be really useful, if we have many jobs and we only want to deploy only few."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'pbt deploy --path /path/to/your/prophecy_project/ --job-ids "TestJob1"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we can also pass multiple comma separated Job Ids")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'pbt deploy --path /path/to/your/prophecy_project/ --job-ids "TestJob1,TestJob2"\n')),(0,o.kt)("p",null,"Complete list of options for PBT ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --help\nProphecy-build-tool v1.0.4.1\n\nUsage: pbt deploy [OPTIONS]\n\nOptions:\n  --path TEXT                     Path to the directory containing the\n                                  pbt_project.yml file  [required]\n  --dependent-projects-path TEXT  Dependent projects path\n  --release-version TEXT          Release version to be used during\n                                  deployments\n  --project-id TEXT               Project Id placeholder to be used during\n                                  deployments\n  --prophecy-url TEXT             Prophecy URL placeholder to be used during\n                                  deployments\n  --fabric-ids TEXT               Fabric IDs(comma separated) which can be\n                                  used to filter jobs for deployments\n  --skip-builds                   Flag to skip building Pipelines\n  --help                          Show this message and exit.\n")),(0,o.kt)("h4",{id:"running-all-unit-tests-in-project"},"Running all unit tests in project"),(0,o.kt)("p",null,"PBT supports running unit tests inside the Prophecy project. Unit tests run with the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," configuration present in the\nPipeline's ",(0,o.kt)("inlineCode",{parentName:"p"},"configs/resources/config")," directory."),(0,o.kt)("p",null,"To run all unit tests present in the project, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," command as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt test --path /path/to/your/prophecy_project/\n")),(0,o.kt)("p",null,"Sample output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Prophecy-build-tool v1.0.1\n\nFound 1 jobs: daily\nFound 1 pipelines: customers_orders (python)\n\n  Unit Testing pipeline pipelines/customers_orders [1/1]\n\n    ============================= test session starts ==============================\n    platform darwin -- Python 3.8.9, pytest-7.1.2, pluggy-1.0.0 -- /Library/Developer/CommandLineTools/usr/bin/python\n    cachedir: .pytest_cache\n    metadata: None\n    rootdir: /path/to/your/prophecy_project/pipelines/customers_orders/code\n    plugins: html-3.1.1, metadata-2.0.2\n    collecting ... collected 1 item\n\n    test/TestSuite.py::CleanupTest::test_unit_test_0 PASSED                  [100%]\n\n    ============================== 1 passed in 17.42s ==============================\n\n\u2705 Unit test for pipeline: pipelines/customers_orders succeeded.\n")),(0,o.kt)("p",null,"Users can also pass --driver-library-path as a parameter to pbt test command to pass jars of Prophecy-libs dependencies to the command. If user doesn't add it, the tool by default picks the libraries from maven central."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt test --path /path/to/your/prophecy_project/ --driver-library-path <path_to_the_jars>\n")),(0,o.kt)("h4",{id:"validating-project"},"Validating project"),(0,o.kt)("p",null,"PBT supports validating all pipelines inside the Prophecy project. This allows users to check pipelines before deploying. Validation involves checking if the pipelines have any diagnostics. These are the same diagnostics which are shown on our Visual IDE."),(0,o.kt)("p",null,"To run validate all pipelines present in the project, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," command as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pbt validate --path /path/to/your/prophecy_project/\n")),(0,o.kt)("p",null,"Sample output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Prophecy-build-tool v1.0.3.4\n\nProject name: HelloWorld\nFound 1 jobs: default_schedule\nFound 4 pipelines: customers_orders (python), report_top_customers (python), join_agg_sort (python), farmers-markets-irs (python)\n\nValidating 4 pipelines\n\n  Validating pipeline pipelines/customers_orders [1/4]\n\n Pipeline is validated: customers_orders\n\n  Validating pipeline pipelines/report_top_customers [2/4]\n\n Pipeline is validated: report_top_customers\n\n  Validating pipeline pipelines/join_agg_sort [3/4]\n\n Pipeline is validated: join_agg_sort\n\n  Validating pipeline pipelines/farmers-markets-irs [4/4]\n\n Pipeline is validated: farmers-markets-irs\n")))}c.isMDXComponent=!0}}]);