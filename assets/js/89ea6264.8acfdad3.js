"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[61306],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>D});var r=n(58168),a=n(96540),i=n(20053),l=n(23104),o=n(56347),s=n(57485),u=n(31682),c=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=m({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),y=(()=>{const e=s??d;return f({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(d(t),s(r))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},l,{className:(0,i.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=g(e);return a.createElement("div",{className:(0,i.A)("tabs-container",b.tabList)},a.createElement(h,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function D(e){const t=(0,y.A)();return a.createElement(x,(0,r.A)({key:String(t)},e))}},15479:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540),a=n(86025);const i=e=>{let{children:t}=e;return r.createElement("div",{style:{position:"relative",display:"flex","justify-content":"center","align-items":"center"}},t)},l=e=>{let{source:t,children:n}=e;return r.createElement("img",{src:(0,a.A)(t),style:{"object-fit":"cover"}})},o=e=>{let{slides:t}=e;const[n,a]=(0,r.useState)(0);return r.createElement(i,null,r.createElement("i",{class:"fa fa-chevron-left",onClick:()=>{a(0===n?t.length-1:n-1)},style:{position:"absolute",top:"50%",left:"0px","font-size":"2rem"}}),r.createElement("i",{class:"fa fa-chevron-right",onClick:()=>{a(n===t.length-1?0:n+1)},style:{position:"absolute",top:"50%",right:"0px","font-size":"2rem"}}),r.createElement("div",{style:{padding:"30px"}},r.createElement(l,{source:t[n].image}),t[n].description))};function s(e){let{ImageData:t}=e;return r.createElement(o,{slides:t,style:{"font-family":" sans-serif","text-align":"center"}})}},18479:(e,t,n)=>{n.r(t),n.d(t,{ImageData:()=>p,assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var r=n(58168),a=(n(96540),n(15680)),i=n(15479),l=n(11470),o=n(19365);const s={sidebar_position:2,title:"User-defined functions",id:"udfs",description:"User-defined functions",tags:["extensibility","udfs","udafs"]},u=void 0,c={unversionedId:"Spark/extensibility/udfs",id:"Spark/extensibility/udfs",title:"User-defined functions",description:"User-defined functions",source:"@site/docs/Spark/extensibility/user-defined-functions.md",sourceDirName:"Spark/extensibility",slug:"/Spark/extensibility/udfs",permalink:"/Spark/extensibility/udfs",draft:!1,tags:[{label:"extensibility",permalink:"/tags/extensibility"},{label:"udfs",permalink:"/tags/udfs"},{label:"udafs",permalink:"/tags/udafs"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"User-defined functions",id:"udfs",description:"User-defined functions",tags:["extensibility","udfs","udafs"]},sidebar:"defaultSidebar",previous:{title:"Dependencies",permalink:"/Spark/extensibility/dependencies"},next:{title:"Gem builder",permalink:"/Spark/extensibility/gem-builder"}},d={},p=[{image:"/img/udf/1.png",description:(0,a.yg)("h3",{style:{padding:"10px"}},"Step 1 - Open UDF definition window")},{image:"/img/udf/2.1.png",description:(0,a.yg)("h3",{style:{padding:"10px"}},"Step 2 (Python)- Define Python UDF")},{image:"/img/udf/2.2.png",description:(0,a.yg)("h3",{style:{padding:"10px"}}," Step 2 (Scala) - Define Scala UDf")},{image:"/img/udf/3.png",description:(0,a.yg)("h3",{style:{padding:"10px"}},"Step 3 - UDFs can now be called by their defined names")}],f=[{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"Defining and Using UDF",id:"defining-and-using-udf",level:4}],m={ImageData:p,toc:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Allows you to create user defined functions (UDF) which are then usable anywhere in the Pipeline"),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"UDF Name"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Name of the UDF to be used to register it. All calls to the UDF will use this name"),(0,a.yg)("td",{parentName:"tr",align:"left"},"True")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Definition"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Definition of the UDF function. ",(0,a.yg)("br",null)," Eg: ",(0,a.yg)("inlineCode",{parentName:"td"},"udf((value:Int)=>value*value)")),(0,a.yg)("td",{parentName:"tr",align:"left"},"True")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"UDF initialization code"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Code block that contains initialization of entities used by UDFs. This could for example contain any static mapping that a UDF might use"),(0,a.yg)("td",{parentName:"tr",align:"left"},"False")))),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("hr",null),(0,a.yg)("h4",{id:"defining-and-using-udf"},"Defining and Using UDF"),(0,a.yg)(i.A,{ImageData:p,mdxType:"App"}),(0,a.yg)(l.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-py"},'country_code_map = {"Mexico" : "MX", "USA" : "US", "India" : "IN"}\n\ndef registerUDFs(spark: SparkSession):\n    spark.udf.register("get_country_code", get_country_code)\n\n@udf(returnType = StringType())\ndef get_country_code(country: str):\n    return country_code_map.get(country, "Not Found")\n'))),(0,a.yg)(o.A,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'object UDFs extends Serializable {\n  val country_code_map = Map("Mexico" -> "MX", "USA" -> "US", "India" -> "IN")\n\n  def registerUDFs(spark: SparkSession) =\n    spark.udf.register("get_country_code", get_country_code)\n\n  def get_country_code =\n    udf { (country: String) =>\n      country_code_map.getOrElse(country, "Not Found")\n    }\n\n}\n')))))}y.isMDXComponent=!0}}]);