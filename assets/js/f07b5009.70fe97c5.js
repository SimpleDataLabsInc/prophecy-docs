"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[23636],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),g=o,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},81321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(58168),o=(a(96540),a(15680));const r={title:"Use model and column tests",id:"use-model-tests",description:"Reusable SQL query tests",sidebar_position:2,tags:["how-to","testing","sql"]},s=void 0,i={unversionedId:"SQL/data-tests/use-model-tests",id:"SQL/data-tests/use-model-tests",title:"Use model and column tests",description:"Reusable SQL query tests",source:"@site/docs/SQL/data-tests/use-model-tests.md",sourceDirName:"SQL/data-tests",slug:"/SQL/data-tests/use-model-tests",permalink:"/SQL/data-tests/use-model-tests",draft:!1,tags:[{label:"how-to",permalink:"/tags/how-to"},{label:"testing",permalink:"/tags/testing"},{label:"sql",permalink:"/tags/sql"}],version:"current",sidebarPosition:2,frontMatter:{title:"Use model and column tests",id:"use-model-tests",description:"Reusable SQL query tests",sidebar_position:2,tags:["how-to","testing","sql"]},sidebar:"mySidebar",previous:{title:"Use project tests",permalink:"/SQL/data-tests/use-project-tests"},next:{title:"Extensibility",permalink:"/SQL/extensibility/"}},l={},d=[{value:"Set up a test",id:"set-up-a-test",level:2},{value:"Develop a test",id:"develop-a-test",level:3},{value:"Run a test",id:"run-a-test",level:3},{value:"Fix a failed test",id:"fix-a-failed-test",level:2},{value:"Configure a test",id:"configure-a-test",level:2},{value:"Schedule a test",id:"schedule-a-test",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Model and column data tests are dbt macro generated tests that can be parametrized and applied to a given model or any number of columns. These tests are called generic data tests, and are based on the following ",(0,o.yg)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/data-tests#generic-data-tests"},"dbt generic test types"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Model-level tests: Can span across many columns for a given model, or even multiple models, and are defined at a model level"),(0,o.yg)("li",{parentName:"ul"},"Column-level tests: Are defined on a column level of each model")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"There could be many tests within a project. Each test is checking a table created by your choice of input models, data sources, and transformation Gems.")),(0,o.yg)("p",null,"For each model, you can create a macro-based test definition to use as a model test."),(0,o.yg)("p",null,"For each column within a model, you can define out-of-the-box supported dbt Simple data tests."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Unique: Asserts that each value within a column is unique"),(0,o.yg)("li",{parentName:"ul"},"Not null: Asserts that each value within a column is not null"),(0,o.yg)("li",{parentName:"ul"},"Accepted values: Asserts that column contains values present within a pre-defined set of values"),(0,o.yg)("li",{parentName:"ul"},"Relationships: Asserts that column contains values present within another column")),(0,o.yg)("p",null,"You can also use generic tests defined within the project or those defined within dependency packages."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Prophecy doesn't differentiate between model and column tests, and refers to these generic tests as simply data tests.")),(0,o.yg)("h2",{id:"set-up-a-test"},"Set up a test"),(0,o.yg)("p",null,"Depending on the type of test, you can set up a new model or column test from either the Tests section of the project tab or the Data Tests tab of the Target Model."),(0,o.yg)("h3",{id:"develop-a-test"},"Develop a test"),(0,o.yg)("p",null,"You can create a new data test definition to use in your model or column test. You can also skip creating a data test definition, and use one of the Simple data tests previously mentioned."),(0,o.yg)("p",null,"To develop a model or column test, start by opening a project:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Under the Project Browser, click ",(0,o.yg)("strong",{parentName:"p"},"Add Test definition"),". You can also click ",(0,o.yg)("strong",{parentName:"p"},"+ New Data Test Type")," from the Target Model Data Tests tab."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Add a new model test definition",src:a(30483).A,width:"2812",height:"897"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Enter your ",(0,o.yg)("strong",{parentName:"p"},"Test Definition Name"),", and then click ",(0,o.yg)("strong",{parentName:"p"},"Create"),". The test definition page opens. Data tests are saved to a tests > generic SQL file in the Git directory by default."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Create a new model test definition",src:a(94629).A,width:"2812",height:"898"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"On the test definition page, enter the description, parameters, and definition. In the previous image example, we created a test definition that checks that the column value doesn't exceed a certain threshold value.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"To create a new data test, whether it's one that uses a test definition or one that uses an out-of-the-box Simple data test, navigate to the Data Tests tab in the Target Model, and then click ",(0,o.yg)("strong",{parentName:"p"},"+ New Test"),"."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Create a new model test",src:a(84326).A,width:"2620",height:"1507"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Choose your Data Test Type from the drop down menu, and then click ",(0,o.yg)("strong",{parentName:"p"},"Create Test"),". You can find the Simple data tests, the test definition you created earlier under the current project name, and any data tests from dependencies connected to your project listed here."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Create a new model test type",src:a(35796).A,width:"2620",height:"1507"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"After selecting your Data Test Type, fill out the column fields and any other required for your data test. The following image example on the left uses the Simple data test ",(0,o.yg)("inlineCode",{parentName:"p"},"unique"),", while the example on the right uses the created test definition."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Model test types examples",src:a(71572).A,width:"2812",height:"898"})))),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"If changes are made to the columns or schemas used in your data test, then Prophecy will delete the data test. For example, if you run into a data mismatch error on the Schema tab of your Target Model or update the schema, then your data test will be affected.")),(0,o.yg)("h3",{id:"run-a-test"},"Run a test"),(0,o.yg)("p",null,"After you\u2019ve developed your model or column test, you can run it."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"From the Data Tests tab of your Target Model, select the data tests that you'd like to run, and then click ",(0,o.yg)("strong",{parentName:"p"},"Run tests")," to execute your tests. The table input to the Target Model Gem is what\u2019s tested."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Run model tests",src:a(92808).A,width:"2812",height:"898"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"You can click to view the ",(0,o.yg)("strong",{parentName:"p"},"Test Summary"),", ",(0,o.yg)("strong",{parentName:"p"},"Copy")," the logs, or ",(0,o.yg)("strong",{parentName:"p"},"Download")," them. Depending on the outcome of the test, different colored icons are presented."))),(0,o.yg)("h2",{id:"fix-a-failed-test"},"Fix a failed test"),(0,o.yg)("p",null,"If your model or column test fails, you can check the stored failed records using the Store Failures advanced setting. See ",(0,o.yg)("a",{parentName:"p",href:"#configure-a-test"},"Configure a test")," to learn how to set up this setting."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Check the test output tables to see your failed rows.")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Make sure you have write permission to create a new table in your data warehouse, otherwise you may run into errors while trying to run your own tests.")),(0,o.yg)("h2",{id:"configure-a-test"},"Configure a test"),(0,o.yg)("p",null,"You can configure your model or column test to help decide which cases to focus on."),(0,o.yg)("p",null,"To configure a test, follow these steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"From the Data Tests tab of your Target Model, hover over the data test that you'd like to configure, and then click the edit icon."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Edit a test",src:a(52267).A,width:"2620",height:"1507"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click ",(0,o.yg)("strong",{parentName:"p"},"Advanced")," to open the advanced settings, and then enter the conditional values for the following options:"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Advanced settings",src:a(72225).A,width:"2620",height:"1507"})),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Continued Advanced settings",src:a(62695).A,width:"2812",height:"898"})),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"(A)")," ",(0,o.yg)("strong",{parentName:"li"},"Filter Condition"),": Sets a filter for what you want your test to run on."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"(B)")," ",(0,o.yg)("strong",{parentName:"li"},"Severity"),": Determines whether the failure of the test returns an error or warning. The severity operates from the highest priority selection, error, to the lowest, warning. So if you select error, then the test first checks for errors. If it doesn\u2019t find any, then it then checks for warnings. If you select warning, then the test only checks for warnings. If you don\u2019t select a severity, then error is chosen by default.\nYou can set conditions for when to return an error or warning using ",(0,o.yg)("strong",{parentName:"li"},"Error If")," and ",(0,o.yg)("strong",{parentName:"li"},"Warn If")," respectively. You can set the number of failed rows to determine an error, or otherwise just return a warning."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"(C)")," ",(0,o.yg)("strong",{parentName:"li"},"Store Failures"),": Stores all records that failed the test. The records are saved in a new table with schema ",(0,o.yg)("inlineCode",{parentName:"li"},"dbt_test\\_\\_audit")," in your database. The table is named after the name of the model and data test."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"(D)")," ",(0,o.yg)("strong",{parentName:"li"},"Set max no of failures"),": Sets the maximum number of failures returned by a test query. You can set the limit to save resources and time by having the test stop its query as soon as it encounters a certain number of failed rows."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click ",(0,o.yg)("strong",{parentName:"p"},"Save"),"."))),(0,o.yg)("h2",{id:"schedule-a-test"},"Schedule a test"),(0,o.yg)("p",null,"When scheduling your project, you can opt in to run a test along with the project or model. Scheduling a test allows you to ensure on a daily basis that your data is correct. You can only schedule a test with a project or model. You cannot schedule one individually."),(0,o.yg)("p",null,"To Schedule your project to run with tests, follow these steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Under the Project Browser, click ",(0,o.yg)("strong",{parentName:"p"},"Add Job"),". Enter a name for your Job and click ",(0,o.yg)("strong",{parentName:"p"},"Create New"),"."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Create a job",src:a(31009).A,width:"2812",height:"898"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Drag a Model Gem to your visual canvas.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click the Model to open the Model Properties.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select the database object you want to run the test on. You can schedule the entire project or just a single Model:"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Run entire Project"),(0,o.yg)("li",{parentName:"ul"},"Run a SQL Model")),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Schedule a job",src:a(51422).A,width:"2620",height:"1507"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select ",(0,o.yg)("strong",{parentName:"p"},"Run tests"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Check that your ",(0,o.yg)("strong",{parentName:"p"},"Project, model"),", and ",(0,o.yg)("strong",{parentName:"p"},"Fabric")," are correct.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click ",(0,o.yg)("strong",{parentName:"p"},"Save"),". The Job runs automatically. You can see the Job status by clicking ",(0,o.yg)("strong",{parentName:"p"},"Detail"),"."))))}u.isMDXComponent=!0},62695:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-advanced-settings-90548798cc9b872af73c35d8e18884aa.png"},72225:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-advanced-6dc5eee7d59abbcea42809b7c1f654ed.png"},94629:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-create-definition-c089e4a452ed4babfa172865aef8a3bf.png"},31009:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-create-job-b0fb009053ee2c16abb348a7c8a3bcef.png"},84326:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-create-new-113413f515ccadef0f57f9070105b686.png"},52267:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-edit-1eab9ec03f3192abec711e5689deb3dc.png"},30483:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-new-definition-9d021f9b34b9f8a0c12e15614b19055f.png"},35796:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-new-test-bce5fc3606997e45c6f3a8281b2023bc.png"},92808:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-run-27f41cdc447c050ba34a2c4ae96ba8b1.png"},51422:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-schedule-job-2912c896ee7ccd09cbbde3bde93fed27.png"},71572:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/model-test-types-0cc8c9be7be2efa76a9bd2df9795e66d.png"}}]);