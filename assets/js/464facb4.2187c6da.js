"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[94481],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,g=p["".concat(c,".").concat(d)]||p[d]||y[d]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(58168),i=(n(96540),n(15680));const a={sidebar_position:1,title:"Admin Settings",description:"admin settings",id:"admin-settings",tags:["admin","settings","keytab"]},o=void 0,s={unversionedId:"architecture/authentication/admin-settings",id:"architecture/authentication/admin-settings",title:"Admin Settings",description:"admin settings",source:"@site/docs/architecture/authentication/admin-settings.md",sourceDirName:"architecture/authentication",slug:"/architecture/authentication/admin-settings",permalink:"/architecture/authentication/admin-settings",draft:!1,tags:[{label:"admin",permalink:"/tags/admin"},{label:"settings",permalink:"/tags/settings"},{label:"keytab",permalink:"/tags/keytab"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Admin Settings",description:"admin settings",id:"admin-settings",tags:["admin","settings","keytab"]},sidebar:"defaultSidebar",previous:{title:"Authentication",permalink:"/architecture/authentication/"},next:{title:"Active-Directory",permalink:"/architecture/authentication/active_directory"}},c={},u=[{value:"Security",id:"security",level:2},{value:"Keytabs for Kerberos Authentication",id:"keytabs-for-kerberos-authentication",level:3},{value:"Proxy-user Settings (Per user)",id:"proxy-user-settings-per-user",level:3}],l={toc:u},p="wrapper";function y(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,r.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A user given Admin Permissions on the Prophecy environment would see an additional Page to access Admin Settings.\nAdmins can see all users, teams, fabrics, etc., in their Prophecy environment."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"This is only available for Private Saas/On-prem installations of Prophecy.")),(0,i.yg)("h2",{id:"security"},"Security"),(0,i.yg)("p",null,"An admin user can configure Keytab files and Proxy User settings under the Security tab of the Admin settings.\nThese connect to Kerberised Livy Setup while setting up Kerberos Auth in the ",(0,i.yg)("a",{parentName:"p",href:"/Spark/fabrics/livy"},"Livy Fabric"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"admin_settings",src:n(28672).A,width:"2880",height:"1726"})),(0,i.yg)("h3",{id:"keytabs-for-kerberos-authentication"},"Keytabs for Kerberos Authentication"),(0,i.yg)("p",null,"Here, the Admins can upload Keytab files for secure Authentication to Livy Fabrics. These Keytabs are stored in Prophecy's metadata storage in encrypted format.\nSimply click on the ",(0,i.yg)("inlineCode",{parentName:"p"},"Add Keytab")," button and provide the Livy URL, Kerberos Principal, and Keytab File for the given Livy URL."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Any changes in the Kerberos Authentication section would require a restart of the execution service for the Prophecy Installation.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"keytab",src:n(47085).A,width:"2880",height:"1726"})),(0,i.yg)("h3",{id:"proxy-user-settings-per-user"},"Proxy-user Settings (Per user)"),(0,i.yg)("p",null,"If you want to use impersonation-enabled authentication to the Livy server, you can set how to obtain the proxy-user value for each user here.\nCurrently, Prophecy supports two ways to sync this proxy-user value from AAD or LDAP.\nNote that these values will sync to Prophecy every time the user logs in."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"proxy-user",src:n(67281).A,width:"2880",height:"1726"})))}y.isMDXComponent=!0},28672:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Admin_Settings-84cbf80cb574d3f8aac5f52efb2de5b4.png"},47085:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Keytab-253414f693320af6c6ad0fa080c18b8e.png"},67281:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/proxy-settings-4ebaabb22431967f7e9d2cfd33ecf839.png"}}]);