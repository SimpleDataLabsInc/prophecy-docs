"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[69842],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>u});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=l(t),d=a,u=y["".concat(c,".").concat(d)]||y[d]||g[d]||o;return t?n.createElement(u,i(i({ref:r},s),{},{components:t})):n.createElement(u,i({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[y]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26323:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const o={title:"Connectivity Tips",id:"gcp-dataproc-fabric-tips",description:"If your cluster doesn't connect, try these tips",sidebar_position:1,tags:["deployment","configuration","google","gcp","dataproc","livy"]},i=void 0,p={unversionedId:"Spark/fabrics/dataproc/gcp-dataproc-fabric-tips",id:"Spark/fabrics/dataproc/gcp-dataproc-fabric-tips",title:"Connectivity Tips",description:"If your cluster doesn't connect, try these tips",source:"@site/docs/Spark/fabrics/dataproc/dataproc-tips.md",sourceDirName:"Spark/fabrics/dataproc",slug:"/Spark/fabrics/dataproc/gcp-dataproc-fabric-tips",permalink:"/Spark/fabrics/dataproc/gcp-dataproc-fabric-tips",draft:!1,tags:[{label:"deployment",permalink:"/tags/deployment"},{label:"configuration",permalink:"/tags/configuration"},{label:"google",permalink:"/tags/google"},{label:"gcp",permalink:"/tags/gcp"},{label:"dataproc",permalink:"/tags/dataproc"},{label:"livy",permalink:"/tags/livy"}],version:"current",sidebarPosition:1,frontMatter:{title:"Connectivity Tips",id:"gcp-dataproc-fabric-tips",description:"If your cluster doesn't connect, try these tips",sidebar_position:1,tags:["deployment","configuration","google","gcp","dataproc","livy"]},sidebar:"mySidebar",previous:{title:"Google Cloud Dataproc",permalink:"/Spark/fabrics/dataproc/"},next:{title:"Diagnostics",permalink:"/Spark/fabrics/fabric-diagnostics"}},c={},l=[{value:"Error",id:"error",level:3},{value:"Corrective Actions",id:"corrective-actions",level:3}],s={toc:l},y="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(y,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Sometimes the Livy Cluster cannot access the Scala or Python libraries.")),(0,a.yg)("h3",{id:"error"},"Error"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'Creating new Livy Session...\nUsing prophecy libs path...repo1.maven.org...\nUsing python libraries...files.pythonhosted.org...\n...\norg.apache.spark.deploy.SparkSubmit.main(SparkSubmit.scala)\\n\\nYARN Diagnostics: ","level":"error"\n')),(0,a.yg)("h3",{id:"corrective-actions"},"Corrective Actions"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Option 1:"),(0,a.yg)("br",{parentName:"p"}),"\n","Adjust network settings on the Livy Cluster to allow traffic from the Scala Prophecy Library url\n",(0,a.yg)("inlineCode",{parentName:"p"},"repo1.maven.org")," and the Python Prophecy Library url\n",(0,a.yg)("inlineCode",{parentName:"p"},"files.pythonhosted.org"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Option 2:"),(0,a.yg)("br",{parentName:"p"}),"\n","Configure the Scala and Python Library Paths as mentioned ",(0,a.yg)("a",{parentName:"p",href:"/Spark/fabrics/dataproc/"},"here"),".",(0,a.yg)("br",{parentName:"p"}),"\n","Configure Scala Library Path.\n",(0,a.yg)("inlineCode",{parentName:"p"},"gs://prophecy-public-gcp/prophecy-scala-libs/"),".",(0,a.yg)("br",{parentName:"p"}),"\n","Configure Python Library Path.\n",(0,a.yg)("inlineCode",{parentName:"p"},"gs://prophecy-public-gcp/prophecy-python-libs/"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Option 3:"),(0,a.yg)("br",{parentName:"p"}),"\n","Setup an GCS bucket internally. Create two folders as in the previous option, and add ",(0,a.yg)("inlineCode",{parentName:"p"},"prophecy-scala-libs")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"prophecy-python-libs")," in those folders."))}g.isMDXComponent=!0}}]);