"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[1002],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),g=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=g(e.components);return n.createElement(p.Provider,{value:a},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=g(t),h=r,u=l["".concat(p,".").concat(h)]||l[h]||d[h]||i;return t?n.createElement(u,o(o({ref:a},c),{},{components:t})):n.createElement(u,o({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var g=2;g<i;g++)o[g]=t[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69829:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var n=t(58168),r=(t(96540),t(15680));const i={title:"Package Hub",id:"package-hub",description:"Create and Share Reusable Pipeline Components",tags:["package-hub"]},o=void 0,s={unversionedId:"package-hub/package-hub",id:"package-hub/package-hub",title:"Package Hub",description:"Create and Share Reusable Pipeline Components",source:"@site/docs/package-hub/package-hub.md",sourceDirName:"package-hub",slug:"/package-hub/",permalink:"/package-hub/",draft:!1,tags:[{label:"package-hub",permalink:"/tags/package-hub"}],version:"current",frontMatter:{title:"Package Hub",id:"package-hub",description:"Create and Share Reusable Pipeline Components",tags:["package-hub"]},sidebar:"defaultSidebar",previous:{title:"PBT on Jenkins",permalink:"/deployment/prophecy-build-tool/prophecy-build-tool-jenkins"},next:{title:"Package Builder",permalink:"/package-hub/package-builder/"}},p={},g=[{value:"Use a package",id:"use-a-package",level:2},{value:"Re-using Pipelines",id:"re-using-pipelines",level:3},{value:"Re-using custom Gems",id:"re-using-custom-gems",level:3},{value:"Build a package",id:"build-a-package",level:2},{value:"Share a package",id:"share-a-package",level:2},{value:"FAQ",id:"faq",level:2}],c={toc:g},l="wrapper";function d(e){let{components:a,...i}=e;return(0,r.yg)(l,(0,n.A)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Prophecy introduces ",(0,r.yg)("strong",{parentName:"p"},"Package Hub,")," which enables data practitioners to create and share Pipeline components."),(0,r.yg)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},(0,r.yg)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},(0,r.yg)("iframe",{src:"https://fast.wistia.net/embed/iframe/699b96r7w8?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"}))),(0,r.yg)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),(0,r.yg)("br",null),(0,r.yg)("p",null,"A Package is a versioned Project that can be shared across teams. As such, a Package can contain Pipeline templates, ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/package-builder/Gem-builder"},"custom Gems"),", functions, subgraph templates, etc - a reusable version of everything a Project contains. Package dependencies allow us to re-use components so we don\u2019t have to rebuild them. The coding community has been using packages for ages, and finally the low-code community can take advantage of the same idea. Packages are shareable within and across teams. For extra visibility, the Package Hub is a curated selection of Packages that your teams create and publish for other users to leverage."),(0,r.yg)("p",null,"Just include a Package as a dependency to take advantage of its contents. See the sections below for step-by-step instructions on how to ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/#use-a-package"},"use"),", ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/#build-a-package"},"build"),", and ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/#share-a-package"},"share")," Packages. For those looking for a deeper dive on building packages, see the ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/package-builder/"},"Package Builder")," page."),(0,r.yg)("h2",{id:"use-a-package"},"Use a package"),(0,r.yg)("p",null,"Open the helloworld project or create a new project. Notice the dependencies include ",(0,r.yg)("inlineCode",{parentName:"p"},"SparkBasics")," Project:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"2",src:t(48510).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"On opening a NewPipeline, notice all the transformation dropdown Gems are from ",(0,r.yg)("inlineCode",{parentName:"p"},"SparkBasics")," package. Drag and drop a Gem, eg Deduplicate, from SparkBasics package to use in a NewProject Pipeline."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"3",src:t(21757).A,width:"2880",height:"1084"}),"\nAlready you are employing an engineering best practice: package dependencies! When we say that a project USES a package, another way to say it is \u201ca Project has a dependency on the Package.\u201d ",(0,r.yg)("inlineCode",{parentName:"p"},"NewProject")," has a dependency on SparkBasics Package. But don\u2019t stop there. You\u2019ll want to use packages shared by your teammates!"),(0,r.yg)("p",null,"Adding a Package to your Project is easy. From a Pipeline, just ",(0,r.yg)("strong",{parentName:"p"},"(1)Add a new Package.")," Now the Package and all of the contents - Pipeline templates, custom Gems, jobs, UDFs, etc - will be accessible in your Pipeline and the entire Project. Want to see the list of Packages available for your Project? From the ",(0,r.yg)("strong",{parentName:"p"},"(2)Project page,")," click ",(0,r.yg)("strong",{parentName:"p"},"(3)Dependencies")," to see the Packages listed as Dependencies for your Project. ",(0,r.yg)("strong",{parentName:"p"},"(4)Add or remove")," dependencies using the dropdown."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"4",src:t(78196).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"Another great way to find Packages is via the ",(0,r.yg)("strong",{parentName:"p"},"(1)Package Hub.")," This Hub serves to give visibility to the best, curated Packages that Teams want to highlight. Therefore, only Published Packages appear in the PackageHub. Search for a Package by search string, or filter by content, type, or team. ",(0,r.yg)("strong",{parentName:"p"},"(2)Select a package card")," and ",(0,r.yg)("strong",{parentName:"p"},"(3)Use")," the Package as a dependency to a new or existing project."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"5",src:t(91).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"A Package can contain Pipeline templates, custom Gems, Subgraph templates, Functions, and more. In fact, a Package can contain anything a Project contains. Why? ",(0,r.yg)("strong",{parentName:"p"},"A Package is a Project that has been Released with a version.")),(0,r.yg)("p",null,"A Package is a set of logic to apply in various situations. Any changes to this logic would be done via versioned package release. For this reason, the projects that USE the package will not be able to change the package."),(0,r.yg)("p",null,"Let\u2019s diagram a slightly more complex scenario that represents how your teams might use Packages. (So far we\u2019ve considered ",(0,r.yg)("inlineCode",{parentName:"p"},"SparkBasics"),", a Project created by the engineering team at Prophecy which only contains the Gems we already know and love.) We need a slightly more complex scenario to explore re-using Pipeline templates and custom Gems. (Detailed pages exploring re-usable subgraphs, UDFs, and jobs will be available in the near future.)"),(0,r.yg)("p",null,"Consider now the ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," Project and two Projects that have dependencies on the ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," Project."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"6",src:t(4434).A,width:"3200",height:"1800"})),(0,r.yg)("h3",{id:"re-using-pipelines"},"Re-using Pipelines"),(0,r.yg)("p",null,"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"MarketingLeads")," Project lists package ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," as a dependency, any Pipelines from ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," will be accessible in ",(0,r.yg)("inlineCode",{parentName:"p"},"MarketingLeads")," by passing ",(0,r.yg)("a",{parentName:"p",href:"/low-code-spark/configuration/#pipeline-configuration"},"configurable variables.")," The ",(0,r.yg)("inlineCode",{parentName:"p"},"MarketingLeads")," Project cannot change the Framework Pipelines. This is a good thing - the Platform team decides how ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," will evolve."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"7",src:t(26449).A,width:"2880",height:"1084"}),"\nThe MarketingAnalytics team can create a ",(0,r.yg)("strong",{parentName:"p"},"(1)new Pipeline configuration")," and ",(0,r.yg)("strong",{parentName:"p"},"(2)name")," it ",(0,r.yg)("inlineCode",{parentName:"p"},"LeadsCleanup"),". Then ",(0,r.yg)("strong",{parentName:"p"},"(3)select")," that configuration, perhaps change the variable \u201ctable\u201d value from default to a more interesting ",(0,r.yg)("strong",{parentName:"p"},"(4)value")," for their use case. ",(0,r.yg)("inlineCode",{parentName:"p"},"LeadsCleanup")," is a configuration instance of the ",(0,r.yg)("inlineCode",{parentName:"p"},"GenericCleanup")," Pipeline template."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"8",src:t(29832).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"Now, in the same ",(0,r.yg)("inlineCode",{parentName:"p"},"CustomersModeling")," Project, ",(0,r.yg)("strong",{parentName:"p"},"(1)select")," the desired configuration instance, and ",(0,r.yg)("strong",{parentName:"p"},"(2)run")," the Pipeline with that configuration. Here the ",(0,r.yg)("inlineCode",{parentName:"p"},"GenericCleanup")," Pipeline is a readonly template, so the MarketingAnalytics team gets to take advantage of the logic while passing configurations relevant for their own use cases."),(0,r.yg)("p",null,"If a change is needed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," Pipelines, the changes must be made in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," Project. When the ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," Project is released with the changes, ",(0,r.yg)("inlineCode",{parentName:"p"},"MarketingLeads")," Project can ",(0,r.yg)("strong",{parentName:"p"},"(3)update")," the dependency. With ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework v0.0.2"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"GenericCleanup")," Pipeline has been updated with ",(0,r.yg)("strong",{parentName:"p"},"(4)additional Gems")," which can now be used with the ",(0,r.yg)("inlineCode",{parentName:"p"},"LeadsCleanup")," configuration."),(0,r.yg)("h3",{id:"re-using-custom-gems"},"Re-using custom Gems"),(0,r.yg)("p",null,"Configuring Pipelines is just one way to take advantage of the shared, reusable components in a Package. Another (very powerful) way is to use custom Gems."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"9",src:t(20719).A,width:"2880",height:"1726"})),(0,r.yg)("p",null,"If the MarketingAnalytics team wishes to use one of the custom Gems from ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," in a new Pipeline, just ",(0,r.yg)("strong",{parentName:"p"},"(1)drag-and-drop the Gem"),", eg DataMasking , to the Pipeline canvas. ",(0,r.yg)("strong",{parentName:"p"},"(2)Visually configure")," the Gem and execute the Pipeline as you would for any Transformation Gem."),(0,r.yg)("p",null,"Likewise, new Dataset Format Gems from ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," can be used in a new Pipeline."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"10",src:t(9597).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"Select from the ",(0,r.yg)("strong",{parentName:"p"},"(1)source/target")," dropdown menu, and ",(0,r.yg)("strong",{parentName:"p"},"(2)select")," the new Dataset format card from the options. The Platform and MarketingAnalytics teams are using the industry best-practice for re-usable components."),(0,r.yg)("p",null,"Try this out for yourself! In the next sections, we\u2019ll walk through how to ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/#build-a-package"},"build")," and ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/#share-a-package"},"share")," a package."),(0,r.yg)("h2",{id:"build-a-package"},"Build a package"),(0,r.yg)("p",null,"A package is simply a released project. The project can contain Pipeline templates, functions, subgraph templates, custom Gems, etc. The most important of these components are custom Gems, so we\u2019ll focus on building a Package with a Custom Gem here."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"11",src:t(35646).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"Start by ",(0,r.yg)("strong",{parentName:"p"},"(1)creating")," a new Project called ",(0,r.yg)("inlineCode",{parentName:"p"},"SecurityPython"),". There are no changes needed; use the default settings to ",(0,r.yg)("strong",{parentName:"p"},"(2)Complete")," Project creation."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"12",src:t(58983).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"From the Project Browser, ",(0,r.yg)("strong",{parentName:"p"},"(1)Create a new Gem.")," Give the Gem a ",(0,r.yg)("strong",{parentName:"p"},"(2)name")," like ",(0,r.yg)("inlineCode",{parentName:"p"},"Encrypt"),". This will be a Transformation Gem; another time try creating a different Gem mode or category."),(0,r.yg)("p",null,"Next specify the Gem\u2019s code."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"13",src:t(56160).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"When you create a new Gem, a ",(0,r.yg)("strong",{parentName:"p"},"(1)code guide")," appears. Use the guide or replace with your ",(0,r.yg)("strong",{parentName:"p"},"(2)custom code.")," Explore the ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/package-builder/Gem-builder"},"Gem Structure")," to understand the code requirements. Then go to the ",(0,r.yg)("strong",{parentName:"p"},"(3)Visual View")," and make sure the UI appears with ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/package-builder/Gem-builder"},"no errors.")," Now the Custom Gem is ready to try in the canvas."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"14",src:t(62001).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"(1)Click and drag")," the custom Gem Encrypt (in the list of Gems within the SecurityPython Project) to a new or existing Pipeline canvas. ",(0,r.yg)("strong",{parentName:"p"},"(2) Configure")," the custom Gem as with any other Gem: ",(0,r.yg)("strong",{parentName:"p"},"(3)define expressions,")," check the ",(0,r.yg)("strong",{parentName:"p"},"(4)output")," column list, even ",(0,r.yg)("strong",{parentName:"p"},"(5)infer")," the schema based on the attached Fabric. ",(0,r.yg)("strong",{parentName:"p"},"(6)Save")," the configured Gem to start using it."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"15",src:t(71794).A,width:"2880",height:"1726"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"(1)Run")," the custom Gem to check whether the functionality works as expected. Click ",(0,r.yg)("strong",{parentName:"p"},"(2)Data")," to view the data input and ",(0,r.yg)("strong",{parentName:"p"},"(3)output")," preview. The ",(0,r.yg)("inlineCode",{parentName:"p"},"customer_id")," is encrypted after our function is applied."),(0,r.yg)("p",null,"Click ",(0,r.yg)("a",{parentName:"p",href:"/package-hub/package-builder/Gem-builder"},"here")," for a deep dive on building Packages with Custom Gems."),(0,r.yg)("p",null,"Once you have tested your Gem in the canvas, and you are happy with both the ",(0,r.yg)("strong",{parentName:"p"},"Gem UI Component")," and ",(0,r.yg)("strong",{parentName:"p"},"Gem Code Logic"),", you will want to release a tagged version."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"16",src:t(66715).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"(1) Commit")," and ",(0,r.yg)("strong",{parentName:"p"},"(2)Release")," the Project, including the Custom Gem. Continue developing and releasing new versions as incremental improvements!"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Note:\nThe release must be made from the branch specified on project creation, usually main or master.\nThis implementation ensures teams will review code before releasing.\n")),(0,r.yg)("p",null,"Now we have built a package! Now other projects owned by the same team can use the package as a versioned dependency."),(0,r.yg)("h2",{id:"share-a-package"},"Share a package"),(0,r.yg)("p",null,"The entire Project is ",(0,r.yg)("strong",{parentName:"p"},"(1)packaged")," into a jar or wheel file and uploaded to Prophecy\u2019s artifactory. Once the Package is successfully released, it can be shared with specific teams or highlighted by publishing to the Package Hub."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"17",src:t(53108).A,width:"2880",height:"1084"})),(0,r.yg)("p",null,"Select the ",(0,r.yg)("strong",{parentName:"p"},"(2) Metadata")," tab, then select your ",(0,r.yg)("strong",{parentName:"p"},"(3)Project\u2019s page"),". Then select ",(0,r.yg)("strong",{parentName:"p"},"(4)Access"),", select the ",(0,r.yg)("strong",{parentName:"p"},"(5)Teams")," that should have access to the package. ",(0,r.yg)("strong",{parentName:"p"},"(6)Send an invitation")," to those teams. For the team\u2019s best packages that are intended for broad consumption, ",(0,r.yg)("strong",{parentName:"p"},"(7)Publish")," to the Package Hub."),(0,r.yg)("p",null,"If another team wants to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"SecurityPython")," package in their newProject, just add ",(0,r.yg)("inlineCode",{parentName:"p"},"SecurityPython")," as a dependency for ",(0,r.yg)("inlineCode",{parentName:"p"},"newProject"),". Now the user can see and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Encrypt")," custom Gem."),(0,r.yg)("p",null,"We have built and shared our package with a custom ",(0,r.yg)("inlineCode",{parentName:"p"},"Encrypt")," Gem!"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-!Information"},"Coming soon:\nAdminister using HubManager (coming post 3.2)\nAdmin users can manage which packages show up on the PackageHub, and which users can access\n")),(0,r.yg)("p",null,"With Package Hub, Platform teams can build solutions once, and re-use the logic for additional cases. Errors can be handled just once. Updated Packages take advantage of logic updates and error-fixes. Data Analyst teams will build Pipelines faster by taking advantage of the building blocks - custom Gems, UDFs - provided by the Platform team. Or, Data Analyst teams might create their own building blocks! Everyone can create and share Pipeline components with Package Hub. We\u2019d love to hear how your teams are creating, sharing, and even curating Packages. ",(0,r.yg)("a",{parentName:"p",href:"https://www.prophecy.io/request-a-demo"},"Schedule")," some time with us - we would LOVE to hear your feedback!"),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: I shared a dependency to a team, but we don\u2019t see any email notification."),"\nA: The share \u201cinvitation\u201d is not sent via email. Rather, the team would be able to add that project as a dependency to their new or existing projects."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: I shared a dependency to a team, but they don\u2019t see the package listed when they try to add as a dependency."),"\nA: Be sure the new project and dependent project are using the same language, eg Scala or Python. If the new project is a Scala project, only Scala Packages can be added as dependencies."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: How do I use subgraphs from a dependency?"),"\nA: Like Pipelines, Subgraphs can be used by dependent projects via ",(0,r.yg)("a",{parentName:"p",href:"https://docs.prophecy.io/low-code-spark/pubsub/shareable-subgraphs/#configurable-subgraphs"},"configurable variables.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: Does Prophecy provide a DataQuality Package?"),"\nA: Not yet, but coming soon!"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: How would I take a Package built by another team and evolve it in a new direction? That is, how can two teams take a single project in two different directions?"),"\nA: One excellent option here is to ",(0,r.yg)("strong",{parentName:"p"},"Clone")," the Project instead of use as a Package Dependency. For example, let\u2019s say the MarketingAnalytics team loved the ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," Package and wanted it to become a holding place for all the Marketing Pipelines. The Platform team, however, wants to keep the ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," Project as general as possible. How can the two teams each take a version of the project in their own direction?"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"18",src:t(73253).A,width:"2880",height:"1084"}),"\nJust ",(0,r.yg)("strong",{parentName:"p"},"(1)Clone")," the ",(0,r.yg)("inlineCode",{parentName:"p"},"Framework")," Project, and ",(0,r.yg)("strong",{parentName:"p"},"(2)provide")," a new name, team, Git account, and repository."),(0,r.yg)("p",null,"Now the MarketingAnalytics team has their own Project, ",(0,r.yg)("inlineCode",{parentName:"p"},"MarketingFramework"),", to evolve in their own direction. Notice the Pipelines are not templates, rather the ",(0,r.yg)("inlineCode",{parentName:"p"},"GenericCleanup")," Pipeline can be edited by adding a new Gem, eg Repartition:\n",(0,r.yg)("img",{alt:"19",src:t(46086).A,width:"2880",height:"1726"})))}d.isMDXComponent=!0},9597:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/10-ph-9fbca4d7faea625c7195c538b3508494.png"},35646:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/11-ph-cfa53d0e56c6ccb38753ed93a8ba60d8.png"},58983:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/12-ph-66428fdaeda91b4ef620b04695af2d8a.png"},56160:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/13-ph-7632c71b9f41704c43d3a07f61d59580.png"},62001:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/14-ph-3317937d6fe94180a8dd9218c0a071b9.png"},71794:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/15-ph-249eed82bbce45869fa0da01a0dd4bea.png"},66715:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/16-ph-256e2a407b138128add3d536ef4773de.png"},53108:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/17-ph-d762c37c5564dc48b6d646cec2627ef1.png"},73253:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/18-ph-bbad5347468ef6c756ba4488372c0e99.png"},46086:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/19-ph-94e32f620c185023a6046f3daf401bfc.png"},48510:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/2-ph-d63fd4c4ef659c680af78e11ad5ff970.png"},21757:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/3-ph-ef16aa22ec017b9ad14f90c309b83857.png"},78196:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/4-ph-554aba61f955071f6600bf5492da0824.png"},91:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/5-ph-dfdc784e4eea8d06110992ef8bc6b728.png"},4434:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/6-ph-7bd8377fcac62155a7988b24ef2231bf.png"},26449:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/7-ph-09729ef1c5d2da0b16c39103a8f7ac5b.png"},29832:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/8-ph-6bbe1a92da13f13902294105a571b8cc.png"},20719:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/9-ph-88b7ce7c68ff28f960af1e9ccbb83163.png"}}]);