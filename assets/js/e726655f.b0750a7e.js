"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[83513],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var i=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(t),y=o,g=c["".concat(p,".").concat(y)]||c[y]||u[y]||l;return t?i.createElement(g,a(a({ref:n},d),{},{components:t})):i.createElement(g,a({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=y;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[c]="string"==typeof e?e:o,a[1]=r;for(var s=2;s<l;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3514:(e,n,t)=>{t.d(n,{A:()=>h});var i=t(96540),o=t(20053),l=t(84142),a=t(75489),r=t(16654),p=t(21312);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:n,children:t}=e;return i.createElement(a.A,{href:n,className:(0,o.A)("card padding--lg",s.cardContainer)},t)}function c(e){let{href:n,icon:t,title:l,description:a}=e;return i.createElement(d,{href:n},i.createElement("h2",{className:(0,o.A)("text--truncate",s.cardTitle),title:l},t," ",l),a&&i.createElement("p",{className:(0,o.A)("text--truncate",s.cardDescription),title:a},a))}function u(e){let{item:n}=e;const t=(0,l._o)(n);return t?i.createElement(c,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,p.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){let{item:n}=e;const t=(0,r.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,l.cC)(n.docId??void 0);return i.createElement(c,{href:n.href,icon:t,title:n.label,description:n.description??o?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return i.createElement(y,{item:n});case"category":return i.createElement(u,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function m(e){let{className:n}=e;const t=(0,l.$S)();return i.createElement(h,{items:t.items,className:n})}function h(e){const{items:n,className:t}=e;if(!n)return i.createElement(m,e);const a=(0,l.d1)(n);return i.createElement("section",{className:(0,o.A)("row",t)},a.map(((e,n)=>i.createElement("article",{key:n,className:"col col--6 margin-bottom--lg"},i.createElement(g,{item:e})))))}},45175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(58168),o=(t(96540),t(15680)),l=t(3514),a=t(84142);const r={title:"Prophecy Build Tool (PBT)",id:"prophecy-build-tool",description:"Prophecy Build tool",sidebar_position:4,tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment"]},p=void 0,s={unversionedId:"deployment/prophecy-build-tool/prophecy-build-tool",id:"deployment/prophecy-build-tool/prophecy-build-tool",title:"Prophecy Build Tool (PBT)",description:"Prophecy Build tool",source:"@site/docs/deployment/prophecy-build-tool/prophecy-build-tool.md",sourceDirName:"deployment/prophecy-build-tool",slug:"/deployment/prophecy-build-tool/",permalink:"/deployment/prophecy-build-tool/",draft:!1,tags:[{label:"metadata",permalink:"/tags/metadata"},{label:"build",permalink:"/tags/build"},{label:"deploy",permalink:"/tags/deploy"},{label:"test",permalink:"/tags/test"},{label:"cli",permalink:"/tags/cli"},{label:"continuous integration",permalink:"/tags/continuous-integration"},{label:"continuous deployment",permalink:"/tags/continuous-deployment"}],version:"current",sidebarPosition:4,frontMatter:{title:"Prophecy Build Tool (PBT)",id:"prophecy-build-tool",description:"Prophecy Build tool",sidebar_position:4,tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment"]},sidebar:"mySidebar",previous:{title:"Deploy a Project",permalink:"/deployment/project"},next:{title:"PBT on GitHub Actions",permalink:"/deployment/prophecy-build-tool/prophecy-build-tool-github-actions"}},d={},c=[{value:"Features (v1.1.0)",id:"features-v110",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Jenkins",id:"jenkins",level:3},{value:"Quickstart",id:"quickstart",level:2},{value:"Usage",id:"usage",level:3},{value:"Running locally",id:"running-locally",level:3},{value:"Building Pipelines and deploying Jobs",id:"building-pipelines-and-deploying-jobs",level:4},{value:"Build command",id:"build-command",level:5},{value:"Deploy command",id:"deploy-command",level:5},{value:"Deploy specific Jobs using JobId filter",id:"deploy-specific-jobs-using-jobid-filter",level:5},{value:"Running all unit tests in project",id:"running-all-unit-tests-in-project",level:4},{value:"Validating project",id:"validating-project",level:4},{value:"What&#39;s next",id:"whats-next",level:2}],u={toc:c},y="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(y,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Prophecy-built-tool")," (PBT) allows you to quickly build, test and deploy projects generated by Prophecy (your standard Spark Scala and\nPySpark Pipelines) to integrate with your own CI / CD (e.g. GitHub Actions), build system (e.g. Jenkins), and\norchestration (e.g. Databricks Workflows)."),(0,o.yg)("h2",{id:"features-v110"},"Features (v1.1.0)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Build Pipelines (all or specify ones to build) in Prophecy projects (Scala and Python)"),(0,o.yg)("li",{parentName:"ul"},"Unit test Pipelines in Prophecy projects (Scala and Python)"),(0,o.yg)("li",{parentName:"ul"},"Deploy Jobs with built Pipelines on Databricks"),(0,o.yg)("li",{parentName:"ul"},"Deploying Jobs filtered with Fabric ids on Databricks"),(0,o.yg)("li",{parentName:"ul"},"Integrate with CI/CD tools like GitHub Actions"),(0,o.yg)("li",{parentName:"ul"},"Verify the project structure of Prophecy projects"),(0,o.yg)("li",{parentName:"ul"},"Deploying Pipeline Configurations")),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Python >=3.7 (Recommended 3.9.13)"),(0,o.yg)("li",{parentName:"ul"},"pip"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pyspark")," (Recommended 3.3.0)")),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("p",null,"To install PBT, simply run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"pip3 install prophecy-build-tool\n")),(0,o.yg)("h2",{id:"integration-examples"},"Integration Examples"),(0,o.yg)("h3",{id:"github-actions"},(0,o.yg)("a",{parentName:"h3",href:"/deployment/prophecy-build-tool/prophecy-build-tool-github-actions"},"GitHub Actions")),(0,o.yg)("h3",{id:"jenkins"},(0,o.yg)("a",{parentName:"h3",href:"/deployment/prophecy-build-tool/prophecy-build-tool-jenkins"},"Jenkins")),(0,o.yg)("h2",{id:"quickstart"},"Quickstart"),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"Usage: pbt [OPTIONS] COMMAND [ARGS]...\n\nOptions:\n  --help  Show this message and exit.\n\nCommands:\n  build\n  deploy\n  test\n")),(0,o.yg)("h3",{id:"running-locally"},"Running locally"),(0,o.yg)("p",null,"The PBT cli can be used to build, test and deploy projects created by Prophecy that are present in your local filesystem."),(0,o.yg)("p",null,"Please make sure the ",(0,o.yg)("strong",{parentName:"p"},"DATABRICKS_URL")," and ",(0,o.yg)("strong",{parentName:"p"},"DATABRICKS_TOKEN")," environment variables are set appropriately pointing to your Databricks workspace before running any PBT commands.\nExample:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'export DATABRICKS_HOST="https://example_databricks_host.cloud.databricks.com"\nexport DATABRICKS_TOKEN="exampledatabrickstoken"\n')),(0,o.yg)("h4",{id:"building-pipelines-and-deploying-jobs"},"Building Pipelines and deploying Jobs"),(0,o.yg)("p",null,"PBT can build and deploy Jobs inside your Prophecy project to the Databricks environment defined by the ",(0,o.yg)("inlineCode",{parentName:"p"},"DATABRICKS_HOST")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"DATABRICKS_TOKEN"),"\nenvironment variables."),(0,o.yg)("p",null,"Since v1.0.3 PBT supports new input parameters that are used to determine the DBFS path where your project's artifacts would\nbe uploaded. These are the ",(0,o.yg)("inlineCode",{parentName:"p"},"--release-version")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"--project-id")," parameters which would be used to replace the ",(0,o.yg)("inlineCode",{parentName:"p"},"__PROJECT_RELEASE_VERSION_ PLACEHOLDER__")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"__PROJECT_ID_PLACEHOLDER__")," placeholders that would already be present in your Job's definition file\n(",(0,o.yg)("inlineCode",{parentName:"p"},"databricks-job.json"),"). Using a unique release version of your choice and the project's Prophecy ID\n(as seen in the project's URL on the Prophecy UI) is recommended."),(0,o.yg)("h5",{id:"build-command"},"Build command"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt build --path /path/to/your/prophecy_project/\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"PBT provides user the ability to filter pipelines to be build, this can be huge time saving if we have large number of pipelines,"),(0,o.yg)("li",{parentName:"ul"},"Additionally, multiple pipelines can be passed comma(,) separated. To only build certain pipelines we can use:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt build --pipelines customers_orders,join_agg_sort  --path /path/to/your/prophecy_project/\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"PBT builds by default fails(EXIT 1) if any of the Pipeline builds failed either due to corrupt Pipeline or build failure."),(0,o.yg)("li",{parentName:"ul"},"Although if we want to continue, we can skip these errors by using ",(0,o.yg)("inlineCode",{parentName:"li"},"--ignore-build-errors")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"--ignore-parse-errors")," flags"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--ignore-build-errors")," flag skips package build failures"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--ignore-parse-errors")," flag skips project parsing error failures")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt build --path /path/to/your/prophecy_project/ --ignore-build-errors --ignore-parse-errors\n")),(0,o.yg)("h5",{id:"deploy-command"},"Deploy command"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --path /path/to/your/prophecy_project/ --release-version 1.0 --project-id 10\n")),(0,o.yg)("p",null,"Sample output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"Prophecy-build-tool v1.0.4.1\n\nFound 1 jobs: daily\nFound 1 pipelines: customers_orders (python)\n\nBuilding 1 pipelines \ud83d\udeb0\n\n  Building pipeline pipelines/customers_orders [1/1]\n\n\u2705 Build complete!\n\nDeploying 1 jobs \u23f1\n\n  Deploying job jobs/daily [1/1]\n    Uploading customers_orders-1.0-py3-none-any.whl to\ndbfs:/FileStore/prophecy/artifacts/...\nQuerying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: daily\n\n\u2705 Deployment completed successfully!\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"deploy")," command also supports an advanced option ",(0,o.yg)("inlineCode",{parentName:"p"},"--dependent-projects-path")," if there is a need to build projects other than the main project that has to be deployed.\nThis would be useful if there are dependent Pipelines whose source code can be cloned into a different directory accessible to PBT\nwhile running ",(0,o.yg)("inlineCode",{parentName:"p"},"deploy")," for the main project. This option supports only one path as argument but the path itself can contain multiple Prophecy projects within it in different\nsubdirectories."),(0,o.yg)("p",null,"Example deploy command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --path /path/to/your/prophecy_project/ --release-version 1.0 --project-id 10 --dependent-projects-path /path/to/dependent/prophecy/projects\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"deploy")," command also supports an advanced option ",(0,o.yg)("inlineCode",{parentName:"p"},"--fabric-ids")," ( comma separated if more than one ) if there is a\nneed to only deploy Jobs associated with certain Fabric IDs. This option is often used in a multi-workspace environment.\n",(0,o.yg)("a",{parentName:"p",href:"/deployment/prophecy-build-tool/prophecy-build-tool-jenkins#fabricid"},"Find the Fabric ID")," for your Fabric by navigating to the Metadata page of that Fabric and observing the URL."),(0,o.yg)("p",null,"The following command will filter out and only deploy the jobs associated with given Fabric ids.\nExample deploy:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --fabric-ids 647,1527 --path /path/to/your/prophecy_project/\n")),(0,o.yg)("p",null,"Sample output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"Project name: HelloWorld\nFound 2 jobs: ashish-TestJob2, ashish-TestJob\nFound 4 pipelines: customers_orders (python), report_top_customers (python), join_agg_sort (python),\nfarmers-markets-irs (python)\n[SKIP]: Skipping builds for all pipelines as '--skip-builds' flag is passed.\n\n Deploying 2 jobs\nDeploying jobs only for given Fabric IDs: ['647', '1527']\n\n[START]:  Deploying job jobs/TestJob2 [1/2]\n[DEPLOY]: Job being deployed for fabric id: 1527\n    Pipeline pipelines/farmers-markets-irs might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/report_top_customers might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Querying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: ashish-TestJob2\n\n[START]:  Deploying job jobs/TestJob [2/2]\n[DEPLOY]: Job being deployed for fabric id: 647\n    Pipeline pipelines/customers_orders might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/join_agg_sort might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/report_top_customers might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Querying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: ashish-TestJob\n\n\u2705 Deployment completed successfully!\n")),(0,o.yg)("p",null,"By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"deploy")," command builds all pipelines and then deploys them, if you want to skip building all pipelines\n( this could be useful, if you are running a ",(0,o.yg)("inlineCode",{parentName:"p"},"deploy")," command after running ",(0,o.yg)("inlineCode",{parentName:"p"},"deploy")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"build")," previously.)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --skip-builds --path /path/to/your/prophecy_project/\n")),(0,o.yg)("h5",{id:"deploy-specific-jobs-using-jobid-filter"},"Deploy specific Jobs using JobId filter"),(0,o.yg)("p",null,"By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"deploy")," command builds all pipelines and then deploys all jobs, if you want to deploy some specific jobs\nwe can use ",(0,o.yg)("inlineCode",{parentName:"p"},"job-ids")," filter (we can find JobId on Job metadata page) , PBT will automatically calculate all the pipelines needed for the jobs and then build them.\nThis could be really useful, if we have many jobs and we only want to deploy only few."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'pbt deploy --path /path/to/your/prophecy_project/ --job-ids "TestJob1"\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"we can also pass multiple comma separated Job Ids")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'pbt deploy --path /path/to/your/prophecy_project/ --job-ids "TestJob1,TestJob2"\n')),(0,o.yg)("p",null,"Complete list of options for PBT ",(0,o.yg)("inlineCode",{parentName:"p"},"deploy"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt deploy --help\nProphecy-build-tool v1.0.4.1\n\nUsage: pbt deploy [OPTIONS]\n\nOptions:\n  --path TEXT                     Path to the directory containing the\n                                  pbt_project.yml file  [required]\n  --dependent-projects-path TEXT  Dependent projects path\n  --release-version TEXT          Release version to be used during\n                                  deployments\n  --project-id TEXT               Project Id placeholder to be used during\n                                  deployments\n  --prophecy-url TEXT             Prophecy URL placeholder to be used during\n                                  deployments\n  --fabric-ids TEXT               Fabric IDs(comma separated) which can be\n                                  used to filter jobs for deployments\n  --skip-builds                   Flag to skip building Pipelines\n  --help                          Show this message and exit.\n")),(0,o.yg)("h4",{id:"running-all-unit-tests-in-project"},"Running all unit tests in project"),(0,o.yg)("p",null,"PBT supports running unit tests inside the Prophecy project. Unit tests run with the ",(0,o.yg)("inlineCode",{parentName:"p"},"default")," configuration present in the\nPipeline's ",(0,o.yg)("inlineCode",{parentName:"p"},"configs/resources/config")," directory."),(0,o.yg)("p",null,"To run all unit tests present in the project, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"test")," command as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt test --path /path/to/your/prophecy_project/\n")),(0,o.yg)("p",null,"Sample output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"Prophecy-build-tool v1.0.1\n\nFound 1 jobs: daily\nFound 1 pipelines: customers_orders (python)\n\n  Unit Testing pipeline pipelines/customers_orders [1/1]\n\n    ============================= test session starts ==============================\n    platform darwin -- Python 3.8.9, pytest-7.1.2, pluggy-1.0.0 -- /Library/Developer/CommandLineTools/usr/bin/python\n    cachedir: .pytest_cache\n    metadata: None\n    rootdir: /path/to/your/prophecy_project/pipelines/customers_orders/code\n    plugins: html-3.1.1, metadata-2.0.2\n    collecting ... collected 1 item\n\n    test/TestSuite.py::CleanupTest::test_unit_test_0 PASSED                  [100%]\n\n    ============================== 1 passed in 17.42s ==============================\n\n\u2705 Unit test for pipeline: pipelines/customers_orders succeeded.\n")),(0,o.yg)("p",null,"Users can also pass --driver-library-path as a parameter to pbt test command to pass jars of Prophecy-libs dependencies to the command. If user doesn't add it, the tool by default picks the libraries from maven central."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt test --path /path/to/your/prophecy_project/ --driver-library-path <path_to_the_jars>\n")),(0,o.yg)("h4",{id:"validating-project"},"Validating project"),(0,o.yg)("p",null,"PBT supports validating all pipelines inside the Prophecy project. This allows users to check pipelines before deploying. Validation involves checking if the pipelines have any diagnostics. These are the same diagnostics which are shown on our Visual IDE."),(0,o.yg)("p",null,"To run validate all pipelines present in the project, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"validate")," command as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"pbt validate --path /path/to/your/prophecy_project/\n")),(0,o.yg)("p",null,"Sample output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"Prophecy-build-tool v1.0.3.4\n\nProject name: HelloWorld\nFound 1 jobs: default_schedule\nFound 4 pipelines: customers_orders (python), report_top_customers (python), join_agg_sort (python), farmers-markets-irs (python)\n\nValidating 4 pipelines\n\n  Validating pipeline pipelines/customers_orders [1/4]\n\n Pipeline is validated: customers_orders\n\n  Validating pipeline pipelines/report_top_customers [2/4]\n\n Pipeline is validated: report_top_customers\n\n  Validating pipeline pipelines/join_agg_sort [3/4]\n\n Pipeline is validated: join_agg_sort\n\n  Validating pipeline pipelines/farmers-markets-irs [4/4]\n\n Pipeline is validated: farmers-markets-irs\n")),(0,o.yg)("h2",{id:"whats-next"},"What's next"),(0,o.yg)("p",null,"To continue using PBT, see the following pages:"),(0,o.yg)(l.A,{items:(0,a.$S)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);