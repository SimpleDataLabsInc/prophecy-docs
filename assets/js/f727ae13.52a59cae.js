"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[97805],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),g=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=g(a),d=n,u=c["".concat(l,".").concat(d)]||c[d]||p[d]||s;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var g=2;g<s;g++)o[g]=a[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>g});var r=a(58168),n=(a(96540),a(15680));const s={title:"SQL Gems",id:"sql-gems",description:"Gems are data seeds, sources, transformations, and targets",sidebar_position:2,tags:["gems","transformation","source","target","cte"]},o=void 0,i={unversionedId:"SQL/gems/sql-gems",id:"SQL/gems/sql-gems",title:"SQL Gems",description:"Gems are data seeds, sources, transformations, and targets",source:"@site/docs/SQL/gems/gems.md",sourceDirName:"SQL/gems",slug:"/SQL/gems/",permalink:"/SQL/gems/",draft:!1,tags:[{label:"gems",permalink:"/tags/gems"},{label:"transformation",permalink:"/tags/transformation"},{label:"source",permalink:"/tags/source"},{label:"target",permalink:"/tags/target"},{label:"cte",permalink:"/tags/cte"}],version:"current",sidebarPosition:2,frontMatter:{title:"SQL Gems",id:"sql-gems",description:"Gems are data seeds, sources, transformations, and targets",sidebar_position:2,tags:["gems","transformation","source","target","cte"]},sidebar:"mySidebar",previous:{title:"Code editor",permalink:"/SQL/development/code-editor"},next:{title:"Data Sources",permalink:"/SQL/gems/datasources/"}},l={},g=[],m={toc:g},c="wrapper";function p(e){let{components:t,...s}=e;return(0,n.yg)(c,(0,r.A)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In Prophecy and dbt, data ",(0,n.yg)("a",{parentName:"p",href:"/concepts/project/Model"},"models")," are groups of SQL statements used to create a single table or view. Prophecy simplifies data modeling by visualizing the data model as a series of steps, each represented by a ",(0,n.yg)("a",{parentName:"p",href:"/concepts/project/gems"},"Gem"),". Gems are functional units that perform tasks such as reading, transforming, writing, or handling other data operations."),(0,n.yg)("p",null,"Each Gem corresponds to a SQL statement, which users can construct through an intuitive visual interface. Prophecy handles the underlying complexity by deciding whether each Gem should generate a CTE or a subquery. Users simply configure the Gem's interface, and Prophecy integrates the resulting SQL into the larger data model."),(0,n.yg)("p",null,"The table below outlines the different SQL Gem categories."),(0,n.yg)("div",{class:"gems-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("div",{style:{width:"100px"}},"Gem")),(0,n.yg)("th",{parentName:"tr",align:null},"Category"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Model",src:a(52197).A,width:"666",height:"658"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/concepts/project/Model"},(0,n.yg)("strong",{parentName:"a"},"Model"))),(0,n.yg)("td",{parentName:"tr",align:null},"Each model is a DAG that defines a single table or view. A model can also serve as an input for other Models.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Source",src:a(59041).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./datasources/"},(0,n.yg)("strong",{parentName:"a"},"Datasource"))),(0,n.yg)("td",{parentName:"tr",align:null},"Gems related to loading data: Seeds, Sources, or Models can be used as datasources.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Transform",src:a(47698).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./transform/"},(0,n.yg)("strong",{parentName:"a"},"Transform"))),(0,n.yg)("td",{parentName:"tr",align:null},"Gems related to the transformation of data.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Join and Split",src:a(91631).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/SQL/gems/data-joins"},(0,n.yg)("strong",{parentName:"a"},"Join"))),(0,n.yg)("td",{parentName:"tr",align:null},"Gems related to splitting or joining tables together.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"Custom",src:a(74217).A,width:"288",height:"320"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/SQL/gems/custom/"},(0,n.yg)("strong",{parentName:"a"},"Custom"))),(0,n.yg)("td",{parentName:"tr",align:null},"The set of Gems built to extend Prophecy's capabilities."))))))}p.isMDXComponent=!0},74217:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Custom-4e4106f212d22ad0e6f2404cc028bb66.png"},91631:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Join and Split-9a074a1ce283e1ee0ab645b0e52ccd4b.png"},52197:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Model-ea2530df6ff37a3c38cf0bc57fc4972e.png"},59041:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Source and Target-e8b62ba43e1ba4e74133ee826a69a165.png"},47698:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Transform-f62500f4ff428e8b114286997bc20280.png"}}]);