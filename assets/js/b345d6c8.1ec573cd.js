"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[25900],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),d=r,h=g["".concat(s,".").concat(d)]||g[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3514:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(96540),r=a(20053),o=a(84142),i=a(75489),l=a(16654),s=a(21312);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:a}=e;return n.createElement(i.A,{href:t,className:(0,r.A)("card padding--lg",c.cardContainer)},a)}function g(e){let{href:t,icon:a,title:o,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,r.A)("text--truncate",c.cardTitle),title:o},a," ",o),i&&n.createElement("p",{className:(0,r.A)("text--truncate",c.cardDescription),title:i},i))}function m(e){let{item:t}=e;const a=(0,o._o)(t);return a?n.createElement(g,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const a=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return n.createElement(g,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const a=(0,o.$S)();return n.createElement(u,{items:a.items,className:t})}function u(e){const{items:t,className:a}=e;if(!t)return n.createElement(y,e);const i=(0,o.d1)(t);return n.createElement("section",{className:(0,r.A)("row",a)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},91305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(3514),i=a(84142);const l={title:"Projects",id:"project",description:"Keeping your Pipelines, Datasets and Jobs under (source) control",sidebar_position:1,tags:["concepts","project"]},s=void 0,c={unversionedId:"concepts/project/project",id:"concepts/project/project",title:"Projects",description:"Keeping your Pipelines, Datasets and Jobs under (source) control",source:"@site/docs/concepts/project/project.md",sourceDirName:"concepts/project",slug:"/concepts/project/",permalink:"/concepts/project/",draft:!1,tags:[{label:"concepts",permalink:"/tags/concepts"},{label:"project",permalink:"/tags/project"}],version:"current",sidebarPosition:1,frontMatter:{title:"Projects",id:"project",description:"Keeping your Pipelines, Datasets and Jobs under (source) control",sidebar_position:1,tags:["concepts","project"]},sidebar:"defaultSidebar",previous:{title:"Prophecy Concepts",permalink:"/concepts/"},next:{title:"Pipelines",permalink:"/concepts/project/pipeline"}},p={},g=[{value:"Projects are Code on Git",id:"projects-are-code-on-git",level:2},{value:"Collaborate with Projects",id:"collaborate-with-projects",level:2},{value:"Development and Deployment",id:"development-and-deployment",level:2},{value:"1. Create new project",id:"1-create-new-project",level:3},{value:"2. Create, edit and commit the Pipeline",id:"2-create-edit-and-commit-the-pipeline",level:3},{value:"3. Integrate changes",id:"3-integrate-changes",level:3},{value:"Commit",id:"commit",level:4},{value:"Pull",id:"pull",level:4},{value:"Merge",id:"merge",level:4},{value:"Release",id:"release",level:4},{value:"Project Browser",id:"project-browser",level:2},{value:"Environment tab",id:"environment-tab",level:3}],m={toc:g},d="wrapper";function h(e){let{components:t,...l}=e;return(0,r.yg)(d,(0,n.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Project is the primary unit of development and deployment to production in Prophecy."),(0,r.yg)("p",null,"A ",(0,r.yg)("strong",{parentName:"p"},"project")," contains"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Pipelines")," (Spark) or ",(0,r.yg)("strong",{parentName:"li"},"Models")," (SQL) which read, transform and write data."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Datasets")," point to the data that is read and written to by the ",(0,r.yg)("em",{parentName:"li"},"Data Pipelines")," or ",(0,r.yg)("em",{parentName:"li"},"Data Models"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Jobs")," run ",(0,r.yg)("em",{parentName:"li"},"Data Pipelines")," and ",(0,r.yg)("em",{parentName:"li"},"Data Models")," individually or together based on a schedule.")),(0,r.yg)("h2",{id:"projects-are-code-on-git"},"Projects are Code on Git"),(0,r.yg)("p",null,"A ",(0,r.yg)("strong",{parentName:"p"},"project")," is ",(0,r.yg)("strong",{parentName:"p"},"code")," on ",(0,r.yg)("strong",{parentName:"p"},"Git"),". This means that within a project, the business logic of all the assets including ",(0,r.yg)("em",{parentName:"p"},"Pipelines"),"/",(0,r.yg)("em",{parentName:"p"},"Models"),", ",(0,r.yg)("em",{parentName:"p"},"Datasets"),", and ",(0,r.yg)("em",{parentName:"p"},"Jobs")," is stored as code on Git. This might be a repository on Github or a folder in a repository."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project is code",src:a(53040).A,width:"1556",height:"438"})),(0,r.yg)("p",null,"Every component of the Project is represented both visually and in code on Git. Prophecy supports Projects in one of three languages: Spark Projects are saved as code in Scala or Python and SQL Projects are saved as code in SQL. Open any Pipeline (left) or Model (right) in your Project. Simply toggle from visual to code to see the underlying code for that Pipeline or Model, as well as the rest of the Project components."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Visual To Code",src:a(15858).A,width:"5760",height:"2168"})),(0,r.yg)("h2",{id:"collaborate-with-projects"},"Collaborate with Projects"),(0,r.yg)("p",null,"Now that Projects are stored as code on Git, users and teams get a ",(0,r.yg)("strong",{parentName:"p"},"collaboration boost"),". Users can work on the same project simultaneously because each user has their own branch. Projects are reviewed and released with a version, so every team member can confidently rely on the business logic. Each Project can become a re-usable package for other teams to use with their own data and configurations. All of these best practices are in place for every Prophecy user from day one."),(0,r.yg)("p",null,"Click on a tile below to learn about the different Project components, or checkout the ",(0,r.yg)("a",{parentName:"p",href:"/metadata/Project%20Metadata"},"Project Metadata")," page for guidance on finding what you need in an existing Project. Ready to ",(0,r.yg)("a",{parentName:"p",href:"/concepts/project/#development-and-deployment"},"Develop and Deploy")," your own Project? Follow the steps below and you'll be following all the industry standard best practices. Let's go!"),(0,r.yg)(o.A,{items:(0,i.$S)().items,mdxType:"DocCardList"}),(0,r.yg)("h2",{id:"development-and-deployment"},"Development and Deployment"),(0,r.yg)("h3",{id:"1-create-new-project"},"1. Create new project"),(0,r.yg)("p",null,"Starting from the ",(0,r.yg)("a",{parentName:"p",href:"https://app.prophecy.io/metadata/create"},"Create Entity")," page, click ",(0,r.yg)("inlineCode",{parentName:"p"},"Project"),". You'll have the option to create a new Project or import an existing Project."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Create Entity page",src:a(82278).A,width:"2874",height:"1828"})),(0,r.yg)("p",null,"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"Create Project")," pane you can set the name, output language (Python, Scala or SQL) and which team the project belongs to. Visually designed pipelines will generate code in the selected Project output language. Advanced users can design expressions in SQL, Python, or Scala, and the project will ",(0,r.yg)("em",{parentName:"p"},"generate code")," in the Project output language."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project language",src:a(77912).A,width:"2880",height:"1786"})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"It is not currently possible to switch the output language of a Project after it has been created. Please choose the appropriate language for your environment.")),(0,r.yg)("p",null,"Add ",(0,r.yg)("a",{parentName:"p",href:"./../../metadata/Git"},"Git credentials")," in ",(0,r.yg)("a",{parentName:"p",href:"https://app.prophecy.io/metadata/settings"},"Settings")," or connect new Git credentials as below. Specify the desired repository and path accessible to your Git user to store the Project. For new projects, specify an empty repository or an empty path within an existing repository. For imported projects, select a repository, forked repository, or repository path that already contains the relevant project code."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"New project",src:a(33864).A,width:"2560",height:"1348"})),(0,r.yg)("h3",{id:"2-create-edit-and-commit-the-pipeline"},"2. Create, edit and commit the Pipeline"),(0,r.yg)("p",null,"When you ",(0,r.yg)("strong",{parentName:"p"},"create a new Pipeline"),", you have to choose the ",(0,r.yg)("strong",{parentName:"p"},"branch")," where it will be created - an existing one or a new one."),(0,r.yg)("p",null,"Then you will ",(0,r.yg)("strong",{parentName:"p"},"develop")," this Pipeline - you will make ",(0,r.yg)("strong",{parentName:"p"},"changes")," and ",(0,r.yg)("strong",{parentName:"p"},"commit")," them in this branch multiple times.\nThe commit dialog opens when you click the bottom bar - orange color indicates uncommitted changes. When you ",(0,r.yg)("strong",{parentName:"p"},"commit"),", your changes are preserved in Git and are pushed to your ",(0,r.yg)("strong",{parentName:"p"},"branch"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Commit",src:a(18355).A,width:"1310",height:"883"})),(0,r.yg)("h3",{id:"3-integrate-changes"},"3. Integrate changes"),(0,r.yg)("p",null,"Prophecy provides a standard and recommended mechanism for using Git based development. The four main phases of integrating your changes are: ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Commit")),", ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Pull")),", ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Merge")),", ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Release")),". A standard development pattern looks like this, though other mechanisms like forking are also supported:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project deploy",src:a(61551).A,width:"1556",height:"1380"})),(0,r.yg)("p",null,"Let's go over each phase in detail."),(0,r.yg)("h4",{id:"commit"},"Commit"),(0,r.yg)("p",null,"A ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Commit"))," represents changes to one or more files in your Project. They are what allow you to keep and view the history of all the changes that have happened while developing your Pipelines. You can create a commit using either the ",(0,r.yg)("a",{parentName:"p",href:"#project-commits"},"Project Commits")," page or within the Pipeline editor itself. Committing the files saves the changes you've been working on into your Branch and pushes those changes to your Git repository so that it's safely stored."),(0,r.yg)("p",null,"When committing from the ",(0,r.yg)("a",{parentName:"p",href:"#project-commits"},"Project Commits")," page, you'll see the following:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project commit page",src:a(27209).A,width:"1374",height:"1233"})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"}),(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Change log"),(0,r.yg)("td",{parentName:"tr",align:null},"This is a log of all the changes that have been made to (or merged into) the Current Branch")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"Changed files"),(0,r.yg)("td",{parentName:"tr",align:null},"This is a list of all of the changed files that will be committed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Reset"),(0,r.yg)("td",{parentName:"tr",align:null},"If you need to reset all changes that have happened since the last commit, click this button")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Commit message"),(0,r.yg)("td",{parentName:"tr",align:null},"The message to include as part of the commit")))),(0,r.yg)("h4",{id:"pull"},"Pull"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Pull"))," brings changes that have occurred in remote Branches into the Prophecy-local branches. If you have any upstream changes that need to be ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"pull")),"ed into the local branches you'll see the following:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project pre pull page",src:a(84963).A,width:"1265",height:"385"})),(0,r.yg)("p",null,"Click the button to pull the changes and you'll see the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Pull"))," view:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project pull view",src:a(64491).A,width:"1274",height:"775"})),(0,r.yg)("h4",{id:"merge"},"Merge"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Merge"))," will take the changes in the ",(0,r.yg)("em",{parentName:"p"},"Current Branch")," and merge them into the ",(0,r.yg)("em",{parentName:"p"},"Base Branch"),". Your changes will become part of the ",(0,r.yg)("em",{parentName:"p"},"Base Branch")," and will be available to anyone else who's work is based on the ",(0,r.yg)("em",{parentName:"p"},"Base Branch"),". It is steps 3 and 5 of ",(0,r.yg)("a",{parentName:"p",href:"#development-and-deployment"},"this diagram"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project merge",src:a(32308).A,width:"1268",height:"788"})),(0,r.yg)("p",null,"Click the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Merge"))," button to merge the changes and push them back to your Git repository."),(0,r.yg)("h4",{id:"release"},"Release"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Release"))," tags a particular commit in the ",(0,r.yg)("em",{parentName:"p"},"Base Branch")," with a user-specified version (step 6 in ",(0,r.yg)("a",{parentName:"p",href:"#development-and-deployment"},"this diagram"),"). This allows you designate a new version as ready for production, or inform users who may be subscribed to Datasets defined within your Project that there might be changes in the published Dataset."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project release",src:a(15863).A,width:"1254",height:"701"})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"}),(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Commit selection"),(0,r.yg)("td",{parentName:"tr",align:null},"Pick which commit will be tagged for release")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"Release notes"),(0,r.yg)("td",{parentName:"tr",align:null},"Free-form notes for the release")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Version"),(0,r.yg)("td",{parentName:"tr",align:null},"Enter whatever you'd like here. Best practices exist such as ",(0,r.yg)("a",{parentName:"td",href:"https://semver.org/"},"Semantic Versioning"),", but you're free to use whatever matches your environment")))),(0,r.yg)("h2",{id:"project-browser"},"Project Browser"),(0,r.yg)("p",null,"When Opening a project, User can click on the Open project button. This takes you to the Bird's eye view of the entire Project.\nHere you can see all the entities in this project and how they are interlinked in various Pipelines/Jobs etc."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project-browser1",src:a(68712).A,width:"3456",height:"2234"})),(0,r.yg)("p",null,"When you are already on a Pipeline editor page, you can open the Project browser by clicking on the ",(0,r.yg)("inlineCode",{parentName:"p"},">>")," icon on Top left corner."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Project-browser2",src:a(24591).A,width:"3450",height:"1946"})),(0,r.yg)("h3",{id:"environment-tab"},"Environment tab"),(0,r.yg)("p",null,"When click on the Environment tab in the Project browser, User can also browse the ",(0,r.yg)("inlineCode",{parentName:"p"},"Catalog tables")," from the Fabric they are connected to.\nMoreover, He can just click on the ",(0,r.yg)("inlineCode",{parentName:"p"},"+")," button to add this table as a Source Gem in any Pipeline."),(0,r.yg)("p",null,"Please see below video for example."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"env-tab",src:a(72778).A,width:"3450",height:"1946"})))}h.isMDXComponent=!0},18355:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/commit-b569a034a2426aa9731435283607360d.png"},33864:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/new_project_git_credentials-2afca9a9963ee52abda8548fd9abd1c6.png"},61551:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project_deploy-1517e774a32578432f811211c5ad6b14.png"},27209:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project_do_commit-4ed36bdf4f0a4197cdbc861061462bfb.png"},53040:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project_is_code-2725f715e5d36169f4feafad4464a82f.png"},77912:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project_language-26c05130de11a8ea87d3808b4dc40c5f.png"},32308:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project_merge-9d647981a5da937b1bfde0d5a605ec6d.png"},84963:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project_pull-c5169619e6b32aaf9e084d56869a612a.png"},64491:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project_pull_view-7e06db5fcbe05fa33e8d4cce9441f222.png"},15863:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project_release-8844a2e46664e2a7427b83026b3f2945.png"},24591:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Project-browser2-036308c6b9d24ac5356eb149a313b2bb.gif"},15858:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/code-to-visual-30589f548525c42b499e9334acfa3ddb.png"},72778:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/env-tab2-2e841e87fb9e097017cc43e91c6dc7ac.gif"},68712:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project-browser1-2e93b2f2c16cbc8ce65362af4b3d3c85.gif"},82278:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/project-create-import-35c60342f53493eec892238c91a32488.png"}}]);