"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[63924],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),u=i,d=g["".concat(p,".").concat(u)]||g[u]||m[u]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(58168),i=(n(96540),n(15680));const r={title:"Lineage extractor",id:"lineage-extractor",description:"Prophecy lineage extractor on GitHub Actions",sidebar_position:4,tags:["metadata","lineage","extractor","github actions"]},o=void 0,l={unversionedId:"lineage/lineage-extractor",id:"lineage/lineage-extractor",title:"Lineage extractor",description:"Prophecy lineage extractor on GitHub Actions",source:"@site/docs/lineage/lineage-extractor.md",sourceDirName:"lineage",slug:"/lineage/lineage-extractor",permalink:"/lineage/lineage-extractor",draft:!1,tags:[{label:"metadata",permalink:"/tags/metadata"},{label:"lineage",permalink:"/tags/lineage"},{label:"extractor",permalink:"/tags/extractor"},{label:"github actions",permalink:"/tags/github-actions"}],version:"current",sidebarPosition:4,frontMatter:{title:"Lineage extractor",id:"lineage-extractor",description:"Prophecy lineage extractor on GitHub Actions",sidebar_position:4,tags:["metadata","lineage","extractor","github actions"]},sidebar:"mySidebar",previous:{title:"Lineage run and diagnose",permalink:"/lineage/lineage-run-and-diagnose"},next:{title:"Lineage",permalink:"/lineage/"}},p={},s=[{value:"Python command",id:"python-command",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Integrate with GitHub Actions or GitLab Actions",id:"integrate-with-github-actions-or-gitlab-actions",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Set up environment variables and secrets",id:"set-up-environment-variables-and-secrets",level:3},{value:"Run the lineage extractor",id:"run-the-lineage-extractor",level:3},{value:"GitHub Actions file",id:"github-actions-file",level:4},{value:"GitLab Actions file",id:"gitlab-actions-file",level:4},{value:"Output example",id:"output-example",level:2}],c={toc:s},g="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The Prophecy lineage extractor tool extracts lineage information from Prophecy projects and Pipelines. It allows you to specify a project, Pipeline, and branch, and outputs the extracted lineage to a specified directory. You can also optionally set up email notifications."),(0,i.yg)("h2",{id:"python-command"},"Python command"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"python -m prophecy_lineage_extractor --project-id <PROJECT_ID> --pipeline-id <PIPELINE_ID> --output-dir <OUTPUT_DIRECTORY> [--send-email] [--branch <BRANCH_NAME>]\n")),(0,i.yg)("h3",{id:"arguments"},"Arguments"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Argument"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"--project-id")),(0,i.yg)("td",{parentName:"tr",align:"left"},"str"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Prophecy Project ID"),(0,i.yg)("td",{parentName:"tr",align:"left"},"True")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"--pipeline-id")),(0,i.yg)("td",{parentName:"tr",align:"left"},"str"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Prophecy Pipeline ID"),(0,i.yg)("td",{parentName:"tr",align:"left"},"True")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"--output-dir")),(0,i.yg)("td",{parentName:"tr",align:"left"},"str"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Output directory inside the project where lineage files will be stored"),(0,i.yg)("td",{parentName:"tr",align:"left"},"True")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"--send-email")),(0,i.yg)("td",{parentName:"tr",align:"left"},"flag"),(0,i.yg)("td",{parentName:"tr",align:"left"},"If specified, sends an email with the generated lineage report to the environment variable ",(0,i.yg)("inlineCode",{parentName:"td"},"RECEIVER_EMAIL"),". You must set the following environment variables for this option if passed: ",(0,i.yg)("br",null),(0,i.yg)("br",null)," ",(0,i.yg)("ul",null,(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"SMTP_HOST")),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"SMTP_PORT")),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"SMTP_USERNAME")),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"SMTP_PASSWORD")),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"td"},"RECEIVER_EMAIL")))),(0,i.yg)("td",{parentName:"tr",align:"left"},"False")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"--branch")),(0,i.yg)("td",{parentName:"tr",align:"left"},"str"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Branch to run the lineage extractor on. ",(0,i.yg)("br",null)," The default branch in Prophecy is generally 'main'."),(0,i.yg)("td",{parentName:"tr",align:"left"},"True")))),(0,i.yg)("h2",{id:"integrate-with-github-actions-or-gitlab-actions"},"Integrate with GitHub Actions or GitLab Actions"),(0,i.yg)("p",null,"The lineage extractor can be integrated with your GitHub Actions or GitLab Actions. The steps for setting up the lineage extractor on your repository containing a Prophecy project are mentioned below."),(0,i.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A Prophecy project that is currently hosted in a GitHub repository")),(0,i.yg)("h3",{id:"set-up-environment-variables-and-secrets"},"Set up environment variables and secrets"),(0,i.yg)("p",null,"The lineage extractor requires environment variables ",(0,i.yg)("inlineCode",{parentName:"p"},"PROPHECY_URL")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"PROPHECY_PAT")," to be set for complete functionality."),(0,i.yg)("p",null,"Optionally, if you choose to set up email notifications, you must also set secrets for your ",(0,i.yg)("inlineCode",{parentName:"p"},"SMTP_USERNAME")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"SMTP_PASSWORD"),"."),(0,i.yg)("p",null,"These environment variables can be set as secrets inside the GitHub repository of the project. For more information, see ",(0,i.yg)("a",{parentName:"p",href:"/deployment/prophecy-build-tool/prophecy-build-tool-github-actions#set-up-environment-variables-and-secrets"},"Set up environment variables and secrets"),"."),(0,i.yg)("p",null,"The environment variables can also be set within the GitHub Actions or GitLab Actions YML file."),(0,i.yg)("p",null,"For GitHub Actions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"env:\nPROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}\nSMTP_USERNAME: ${{ secrets.SMTP_USERNAME}}\nSMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}\n")),(0,i.yg)("p",null,"For GitLab Actions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'export PROPHECY_PAT="$PROPHECY_PAT"\nexport SMTP_USERNAME="$SMTP_USERNAME"\nexport SMTP_PASSWORD="$SMTP_PASSWORD"\n')),(0,i.yg)("p",null,"The complete YML file definition is discussed in the next section."),(0,i.yg)("h3",{id:"run-the-lineage-extractor"},"Run the lineage extractor"),(0,i.yg)("p",null,"We\u2019re now ready to run the lineage extractor on the Prophecy project."),(0,i.yg)("p",null,"To run the extractor, use the following example with your own environment variables:"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"You only need to provide SMTP credentials if you plan to pass the ",(0,i.yg)("inlineCode",{parentName:"p"},"--send-email")," argument.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"export PROPHECY_URL=https://app.prophecy.io\nexport PROPHECY_PAT=${{ secrets.PROPHECY_PAT }}\n\nexport SMTP_HOST=smtp.gmail.com\nexport SMTP_PORT=587\nexport SMTP_USERNAME=${{ secrets.SMTP_USERNAME }}\nexport SMTP_PASSWORD=${{ secrets.SMTP_PASSWORD }}\nexport RECEIVER_EMAIL=ashish@prophecy.io\n\npython -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo --send-email --branch dev\n")),(0,i.yg)("h4",{id:"github-actions-file"},"GitHub Actions file"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Create a .YML file in the project repository at the below location (relative to root):"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},".github/workflows/prophecy_lineage_extractor.yml\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Add the below contents with your own environment variables to ",(0,i.yg)("inlineCode",{parentName:"p"},"prophecy_lineage_extractor.yml"),":"),(0,i.yg)("details",null,(0,i.yg)("summary",null,"On the default branch"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'name: Run Prophecy Lineage extractor on main\n\non:\n  push:\n    branches:\n      - main  # Trigger on merge to the main branch\n    paths:\n      - \'datasets/**\'\n      - \'pipelines/**\'\n      - \'pbt_project.yml\'\n      - \'.github/workflows/prophecy_lineage_extractor.yml\'\n\npermissions:\n  contents: write\n\njobs:\n  extract-and-mail-prophecy-lineage:\n    runs-on: ubuntu-latest\n    env:\n      OUTPUT_DIR: "output"\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: \'3.9\'  # Adjust Python version as needed\n\n      - name: Install Package from PyPI\n        run: |\n          pip install --no-cache-dir prophecy-lineage-extractor\n\n      - name: Extract and Send Prophecy Lineage\n        env:\n          PROPHECY_URL: "https://app.prophecy.io"\n          MONITOR_TIME_ENV: ${{ vars.MONITOR_TIME_ENV }}\n          PROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}\n          SMTP_HOST: "smtp.gmail.com"\n          SMTP_PORT: "587"\n          SMTP_USERNAME: ${{ secrets.SMTP_USERNAME }}\n          SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}\n          RECEIVER_EMAIL: "ashish@prophecy.io"\n        run: |\n          python -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo  --send-email --output-dir $OUTPUT_DIR\n\n      - name: Commit file to output directory\n        env:\n           GIT_COMMIT: ${{ vars.GIT_COMMIT }} # whether to commit output file to github\n        run: |\n          # set this in secret to enable git commits\n          echo "Output Directory: \'$OUTPUT_DIR\'"\n          if [[ $GIT_COMMIT == "1" ]]; then\n              git config --global user.name \'pateash\'\n              git config --global user.email \'ashishpatel0720@gmail.com\'\n              echo "Commiting enabled, adding output file"\n              git add $OUTPUT_DIR/*\n              echo "========================================"\n              git commit -m "[Github Action: main]: Adding excel lineage report"\n              echo "========================================"\n              echo "Pushing Changes to git"\n              git push\n          else\n              # simple version are created manually from code edits.\n              echo "Commiting to git is not enabled"\n          fi\n'))),(0,i.yg)("details",null,(0,i.yg)("summary",null," On a custom branch"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'name: Run Prophecy Lineage extractor on dev\n\non:\n  push:\n    branches:\n      - dev  # Trigger on merge to the dev branch\n    paths:\n      - \'datasets/**\'\n      - \'pipelines/**\'\n      - \'pbt_project.yml\'\n      - \'.github/workflows/prophecy_lineage_extractor_dev.yml\'\n\npermissions:\n  contents: write\n\njobs:\n  extract-and-mail-prophecy-lineage:\n    runs-on: ubuntu-latest\n    env:\n      OUTPUT_DIR: "output_dev"\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: \'3.9\'  # Adjust Python version as needed\n\n      - name: Install Package from PyPI\n        run: |\n          pip install --no-cache-dir prophecy-lineage-extractor\n\n      - name: Extract and Send Prophecy Lineage\n        env:\n          PROPHECY_URL: "https://app.prophecy.io"\n          MONITOR_TIME_ENV: ${{ vars.MONITOR_TIME_ENV }}\n          PROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}\n          SMTP_HOST: "smtp.gmail.com"\n          SMTP_PORT: "587"\n          SMTP_USERNAME: ${{ secrets.SMTP_USERNAME }}\n          SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}\n          RECEIVER_EMAIL: "ashish@prophecy.io"\n        run: |\n          python -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo  --send-email --output-dir $OUTPUT_DIR --branch dev\n\n      - name: Commit file to output directory\n        env:\n           GIT_COMMIT: ${{ vars.GIT_COMMIT }}  # Reference the GitHub variable here\n        run: |\n          # set this in secret to enable git commits\n          echo "output dir \'$OUTPUT_DIR\'"\n          if [[ $GIT_COMMIT == "1" ]]; then\n              git config --global user.name \'pateash\'\n              git config --global user.email \'ashishpatel0720@gmail.com\'\n              echo "Commiting enabled, adding output file"\n              git add $OUTPUT_DIR/*\n              echo "========================================"\n              git commit -m "[Github Action: dev]: Adding excel lineage report"\n              echo "========================================"\n              echo "Pushing Changes to git"\n              git push\n          else\n              # simple version are created manually from code edits.\n              echo "Commiting to git is not enabled"\n          fi\n'))))),(0,i.yg)("h4",{id:"gitlab-actions-file"},"GitLab Actions file"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Create a .YML file in the project repository.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Add the below contents with your own environment variables to ",(0,i.yg)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),":"),(0,i.yg)("details",null,(0,i.yg)("summary",null,"GitLab action"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'stages:\n- extract\n\nvariables:\n  GIT_COMMIT: "1" # to enable committing report file to git\n  OUTPUT_DIR: "output_dev"\nextract_and_mail:\n  stage: extract\n  image: python:3.9\n  script:\n    - pip install --no-cache-dir prophecy-lineage-extractor\n    - |\n      # gitlab ci/cd variables, access_token also need to be defined if using git commit\n      export PROPHECY_URL="$PROPHECY_URL"\n      export PROPHECY_PAT="$PROPHECY_PAT"\n      export SMTP_USERNAME="$SMTP_USERNAME"\n      export SMTP_PASSWORD="$SMTP_PASSWORD"\n      export SMTP_HOST="smtp.gmail.com"\n      export SMTP_PORT="587"\n      export RECEIVER_EMAIL="ashish@prophecy.io"\n      # value in seconds for monitoring, this might be increased depending on pipeline size\n      export MONITOR_TIME_ENV="50"\n    - |\n      BRANCH="dev"\n      python -m prophecy_lineage_extractor \\\n        --project-id 36587 \\\n        --pipeline-id 36587/pipelines/customer_orders_demo \\\n        --send-email \\\n        --output-dir $OUTPUT_DIR \\\n        --branch $BRANCH\n    - |\n      if [ "$GIT_COMMIT" == "1" ]; then\n        echo "Git commit is enabled, output directory \'$OUTPUT_DIR\'"\n        git config --global user.name \'pateash\'\n        git config --global user.email \'ashishpatel0720@gmail.com\'\n        git add $OUTPUT_DIR/*\n        git commit -m "[GitLab CI - $BRANCH] Adding excel lineage report"\n        git remote add gitlab_origin https://oauth2:$ACCESS_TOKEN@gitlab.com/pateash/ProphecyHelloWorld.git\n        echo "Pushing changes to git branch $BRANCH"\n        git push gitlab_origin HEAD:$BRANCH -o ci.skip # prevent triggering pipeline again\n      else\n          echo "Committing to git is not enabled"\n      fi\n  only:\n    refs:\n      - dev\n'))))),(0,i.yg)("h2",{id:"output-example"},"Output example"),(0,i.yg)("p",null,"The lineage extractor output is in the form of an XLSX file."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Lineage extractor output",src:n(5064).A,width:"2620",height:"1509"})))}m.isMDXComponent=!0},5064:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/prophecy-lineage-report-for-pipeline-a0d455b3d122f0d7b2e43e72f0fb537f.png"}}]);