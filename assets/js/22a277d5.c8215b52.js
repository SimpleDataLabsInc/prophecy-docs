"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,b=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?o.createElement(b,a(a({ref:t},u),{},{components:n})):o.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={title:"PBT on Github Actions",id:"prophecy-build-tool-github-actions",description:"Example usage of Prophecy Build Tool on Github Actions",sidebar_position:5,tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment","github actions","cicd"]},a=void 0,l={unversionedId:"releases-and-deployment/prophecy-build-tool/prophecy-build-tool-github-actions",id:"releases-and-deployment/prophecy-build-tool/prophecy-build-tool-github-actions",title:"PBT on Github Actions",description:"Example usage of Prophecy Build Tool on Github Actions",source:"@site/docs/releases-and-deployment/prophecy-build-tool/pbt-github-actions.md",sourceDirName:"releases-and-deployment/prophecy-build-tool",slug:"/releases-and-deployment/prophecy-build-tool/prophecy-build-tool-github-actions",permalink:"/releases-and-deployment/prophecy-build-tool/prophecy-build-tool-github-actions",draft:!1,tags:[{label:"metadata",permalink:"/tags/metadata"},{label:"build",permalink:"/tags/build"},{label:"deploy",permalink:"/tags/deploy"},{label:"test",permalink:"/tags/test"},{label:"cli",permalink:"/tags/cli"},{label:"continuous integration",permalink:"/tags/continuous-integration"},{label:"continuous deployment",permalink:"/tags/continuous-deployment"},{label:"github actions",permalink:"/tags/github-actions"},{label:"cicd",permalink:"/tags/cicd"}],version:"current",sidebarPosition:5,frontMatter:{title:"PBT on Github Actions",id:"prophecy-build-tool-github-actions",description:"Example usage of Prophecy Build Tool on Github Actions",sidebar_position:5,tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment","github actions","cicd"]},sidebar:"defaultSidebar",previous:{title:"Prophecy Build Tool (PBT)",permalink:"/releases-and-deployment/prophecy-build-tool/"},next:{title:"PBT on Jenkins",permalink:"/releases-and-deployment/prophecy-build-tool/prophecy-build-tool-jenkins"}},s={},p=[{value:"Example Github Repo",id:"example-github-repo",level:2},{value:"Integrating with GitHub Actions",id:"integrating-with-github-actions",level:2},{value:"Pre-requisite",id:"pre-requisite",level:3},{value:"Setting up environment variables and secrets",id:"setting-up-environment-variables-and-secrets",level:3},{value:"Setting up a GitHub Actions Workflow on every push to prod branch",id:"setting-up-a-github-actions-workflow-on-every-push-to-prod-branch",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example-github-repo"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/prophecy-samples/external-cicd-template"},"Example Github Repo")),(0,i.kt)("h2",{id:"integrating-with-github-actions"},"Integrating with GitHub Actions"),(0,i.kt)("p",null,"PBT can be integrated with your own CI/CD solution to build, test and deploy Prophecy code. The steps for setting up PBT with Github Actions on your repository containing a Prophecy project are mentioned below."),(0,i.kt)("h3",{id:"pre-requisite"},"Pre-requisite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Prophecy project that is currently hosted in a Github repository")),(0,i.kt)("h3",{id:"setting-up-environment-variables-and-secrets"},"Setting up environment variables and secrets"),(0,i.kt)("p",null,"PBT requires environment variables ",(0,i.kt)("strong",{parentName:"p"},"DATABRICKS_URL")," and ",(0,i.kt)("strong",{parentName:"p"},"DATABRICKS_TOKEN")," to be set for complete functionality."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"DATABRICKS_TOKEN")," that needs to be used can be set as a secret inside the Github repository of the project.\nSteps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to Settings > Secrets > Actions from the Github repository menu"),(0,i.kt)("li",{parentName:"ul"},"Click \u2018New Repository secret\u2019"),(0,i.kt)("li",{parentName:"ul"},"Add the secret with name DATABRICKS_TOKEN and value of the Databricks token to be used by PBT.")),(0,i.kt)("p",null,"Screenshot after setting DATABRICKS_TOKEN secret:\n",(0,i.kt)("img",{alt:"Github Actions Secret addition",src:n(33803).Z,width:"2230",height:"1288"})),(0,i.kt)("p",null,"The environment variables can now be all set within the Github actions YML file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'env:\nDATABRICKS_HOST: "https://sample_databricks_url.cloud.databricks.com"\nDATABRICKS_TOKEN: ${{ secrets.DATABRICKS_TOKEN }}\n')),(0,i.kt)("p",null,"The complete YML file definition is discussed in the next section."),(0,i.kt)("h3",{id:"setting-up-a-github-actions-workflow-on-every-push-to-prod-branch"},"Setting up a GitHub Actions Workflow on every push to prod branch"),(0,i.kt)("p",null,"We\u2019re now ready to setup CI/CD on the Prophecy project.\nTo setup a workflow to build, run all unit tests and then deploy the built jar (Scala)/ whl (Python) on Databricks on every push to the ",(0,i.kt)("inlineCode",{parentName:"p"},"prod")," branch automatically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a .YML file in the project repository at the below location (relative to root)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},".github/workflows/exampleWorkflow.yml\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the below contents to ",(0,i.kt)("strong",{parentName:"p"},"exampleWorkflow.yml")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Example CI/CD with Github actions\non:\npush:\nbranches: - "prod"\n\nenv:\nDATABRICKS_HOST: "https://sample_databricks_url.cloud.databricks.com"\nDATABRICKS_TOKEN: ${{ secrets.PROD_DATABRICKS_TOKEN }}\n# replace with your fabric id:\nFABRIC_ID: "4004"\n\njobs:\nbuild:\nruns-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set up JDK 11\n        uses: actions/setup-java@v3\n        with:\n          java-version: "11"\n          distribution: "adopt"\n      - name: Set up Python 3.9.13\n        uses: actions/setup-python@v4\n        with:\n          python-version: "3.9.13"\n      # Install all python dependencies\n      # prophecy-libs not included here because prophecy-build-tool takes care of it by reading each pipeline\'s setup.py\n      - name: Install dependencies\n        run: |\n          python3 -m pip install --upgrade pip\n          pip3 install build pytest wheel pytest-html pyspark==3.3.0  prophecy-build-tool\n      - name: Run PBT validate\n        run: pbt validate --path .\n      - name: Run PBT build\n        run: pbt build --path .\n      - name: Run PBT test\n        run: pbt test --path .\n      - name: Run PBT deploy\n        run: pbt deploy --path . --release-version 1.0 --project-id example_project_id\n')))),(0,i.kt)("p",null,"The above workflow does the following in order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Triggers on every change that is pushed to the branch ",(0,i.kt)("inlineCode",{parentName:"li"},"prod"),"."),(0,i.kt)("li",{parentName:"ol"},"Sets the environment variables required for PBT to run: DATABRICKS_HOST and DATABRICKS_TOKEN."),(0,i.kt)("li",{parentName:"ol"},"Sets up JDK 11, Python 3 and other dependencies required for PBT to run."),(0,i.kt)("li",{parentName:"ol"},"Validate that the Pipeline code is free of syntax errors."),(0,i.kt)("li",{parentName:"ol"},"Builds all the Pipelines present in the project and generates a .jar/.whl file. If the build fails at any point a non-zero exit code is returned which stops the workflow from proceeding further and the workflow run is marked as a failure."),(0,i.kt)("li",{parentName:"ol"},"Runs all the unit tests present in the project using FABRIC_NAME(optional) as the configuration. If any of the unit tests fail a non-zero exit code is returned which stops the workflow from proceeding further and the workflow run is marked as a failure."),(0,i.kt)("li",{parentName:"ol"},"Deploys the built .jar/.whl to the Databricks location mentioned in ",(0,i.kt)("inlineCode",{parentName:"li"},"databricks-job.json"),", located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"jobs")," directory of the project. If the Job already exists in Databricks it is updated with the new .jar/.whl."),(0,i.kt)("li",{parentName:"ol"},"Deploys Pipeline configurations, if present, to the DBFS path mentioned in ",(0,i.kt)("inlineCode",{parentName:"li"},"databricks-job.json"),"."),(0,i.kt)("li",{parentName:"ol"},"If this process fails at any step, a non-zero exit code is returned which stops the workflow from proceeding further and the workflow run is marked as a failure.")))}d.isMDXComponent=!0},33803:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pbt-github-secret-b7e9a81b0279316b77fc4a01e9e20bcf.png"}}]);