"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[13580],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),y=p(n),m=i,u=y["".concat(l,".").concat(m)]||y[m]||c[m]||o;return n?a.createElement(u,r(r({ref:t},g),{},{components:n})):a.createElement(u,r({ref:t},g))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[y]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const o={title:"SAML Using Okta",id:"saml-okta",description:"SAML authentication using OKTA",sidebar_position:5,tags:["authentication","saml","okta"]},r=void 0,s={unversionedId:"administration/authentication/saml-okta",id:"administration/authentication/saml-okta",title:"SAML Using Okta",description:"SAML authentication using OKTA",source:"@site/docs/administration/authentication/saml-okta.md",sourceDirName:"administration/authentication",slug:"/administration/authentication/saml-okta",permalink:"/administration/authentication/saml-okta",draft:!1,tags:[{label:"authentication",permalink:"/tags/authentication"},{label:"saml",permalink:"/tags/saml"},{label:"okta",permalink:"/tags/okta"}],version:"current",sidebarPosition:5,frontMatter:{title:"SAML Using Okta",id:"saml-okta",description:"SAML authentication using OKTA",sidebar_position:5,tags:["authentication","saml","okta"]},sidebar:"adminSidebar",previous:{title:"SAML Using AzureAD with SCIM",permalink:"/administration/authentication/azuread-scim"},next:{title:"Databricks OAuth",permalink:"/administration/authentication/databricks_oauth"}},l={},p=[{value:"Configure Okta",id:"configure-okta",level:2},{value:"Configure Prophecy to connect to Okta",id:"configure-prophecy-to-connect-to-okta",level:2},{value:"Information required from Okta",id:"information-required-from-okta",level:3},{value:"Download SAML Signing Certificate",id:"download-saml-signing-certificate",level:4},{value:"SSO URL",id:"sso-url",level:4},{value:"Entity and SSO Issuer",id:"entity-and-sso-issuer",level:4},{value:"Configuring Prophecy",id:"configuring-prophecy",level:3},{value:"Assigning Users to Prophecy in Okta",id:"assigning-users-to-prophecy-in-okta",level:3},{value:"Sync Users and Groups from Okta using SCIM",id:"sync-users-and-groups-from-okta-using-scim",level:2},{value:"About SCIM provisioning in Prophecy",id:"about-scim-provisioning-in-prophecy",level:3},{value:"Requirements",id:"requirements",level:4},{value:"Enable SCIM Provisioning for <em>Prophecy SAML App</em> in Okta",id:"enable-scim-provisioning-for-prophecy-saml-app-in-okta",level:3},{value:"Choose provisioning options",id:"choose-provisioning-options",level:4},{value:"User/Group Assignment to <em>Prophecy SAML App</em> in Okta",id:"usergroup-assignment-to-prophecy-saml-app-in-okta",level:4}],g={toc:p},y="wrapper";function c(e){let{components:t,...o}=e;return(0,i.yg)(y,(0,a.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Single sign-on (SSO) enables you to authenticate your users using your organization\u2019s identity provider.\nThis document focuses on using Okta as SAML IdP for Prophecy and enabling SCIM provisioning for syncing users and\ngroups."),(0,i.yg)("h2",{id:"configure-okta"},"Configure Okta"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Log in to Okta as an administrator."),(0,i.yg)("li",{parentName:"ol"},"On the homepage, navigate to ",(0,i.yg)("strong",{parentName:"li"},"Applications")," > ",(0,i.yg)("strong",{parentName:"li"},"Applications"),"."),(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Create App Integration"),"."),(0,i.yg)("li",{parentName:"ol"},"Select ",(0,i.yg)("strong",{parentName:"li"},"SAML 2.0")," and click ",(0,i.yg)("strong",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Enter ",(0,i.yg)("strong",{parentName:"li"},"App Name")," as ",(0,i.yg)("em",{parentName:"li"},"Prophecy SAML App")," and click ",(0,i.yg)("strong",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"For ",(0,i.yg)("strong",{parentName:"li"},"Single Sign-On URL"),", specify ",(0,i.yg)("inlineCode",{parentName:"li"},"https://your-prophecy-ide-url.domain/api/oauth/samlCallback"),"."),(0,i.yg)("li",{parentName:"ol"},"Select ",(0,i.yg)("strong",{parentName:"li"},"Use this")," for both ",(0,i.yg)("strong",{parentName:"li"},"Recipient URL")," and ",(0,i.yg)("strong",{parentName:"li"},"Destination URL"),"."),(0,i.yg)("li",{parentName:"ol"},"In ",(0,i.yg)("strong",{parentName:"li"},"Audience URI (SP Entity ID)"),", provide a name to serve as the entity issuer ID (e.g., ",(0,i.yg)("em",{parentName:"li"},"prophecyokta"),")."),(0,i.yg)("li",{parentName:"ol"},"Set ",(0,i.yg)("strong",{parentName:"li"},"Name ID format")," to ",(0,i.yg)("strong",{parentName:"li"},"EmailAddress")," from the dropdown."),(0,i.yg)("li",{parentName:"ol"},"For ",(0,i.yg)("strong",{parentName:"li"},"Application Username"),", select ",(0,i.yg)("strong",{parentName:"li"},"Email"),"."),(0,i.yg)("li",{parentName:"ol"},"Under ",(0,i.yg)("strong",{parentName:"li"},"Attribute Statements"),", add two attributes ",(0,i.yg)("strong",{parentName:"li"},"name")," and ",(0,i.yg)("strong",{parentName:"li"},"email"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Okta config example",src:n(81224).A,width:"1127",height:"1466"})),(0,i.yg)("ol",{start:12},(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Choose ",(0,i.yg)("strong",{parentName:"li"},"I\u2019m an Okta customer adding an internal app"),"."),(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Finish"),". The ",(0,i.yg)("em",{parentName:"li"},"Prophecy SAML App")," is now displayed.")),(0,i.yg)("h2",{id:"configure-prophecy-to-connect-to-okta"},"Configure Prophecy to connect to Okta"),(0,i.yg)("h3",{id:"information-required-from-okta"},"Information required from Okta"),(0,i.yg)("h4",{id:"download-saml-signing-certificate"},"Download SAML Signing Certificate"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Navigate to the ",(0,i.yg)("strong",{parentName:"li"},"Sign On")," tab of ",(0,i.yg)("em",{parentName:"li"},"Prophecy SAML App")," in Okta."),(0,i.yg)("li",{parentName:"ol"},"Locate the ",(0,i.yg)("strong",{parentName:"li"},"SAML Signing Certificates")," section."),(0,i.yg)("li",{parentName:"ol"},"Click the download button, as shown in the example below, to download the certificate:")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Download Okta Cert",src:n(4803).A,width:"1138",height:"788"})),(0,i.yg)("h4",{id:"sso-url"},"SSO URL"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"In the same ",(0,i.yg)("strong",{parentName:"li"},"Sign On")," tab under ",(0,i.yg)("strong",{parentName:"li"},"SAML Signing Certificates"),", click ",(0,i.yg)("strong",{parentName:"li"},"View IdP metadata"),"."),(0,i.yg)("li",{parentName:"ol"},"This action opens an XML file in a new browser tab."),(0,i.yg)("li",{parentName:"ol"},"Copy the red-highlighted text in the ",(0,i.yg)("strong",{parentName:"li"},"Location")," section of the XML file and use it as the ",(0,i.yg)("strong",{parentName:"li"},"SSO URL")," in Prophecy IDE.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"IDP Metadata",src:n(92785).A,width:"3142",height:"820"})),(0,i.yg)("h4",{id:"entity-and-sso-issuer"},"Entity and SSO Issuer"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Go to the ",(0,i.yg)("strong",{parentName:"li"},"General")," tab, then navigate to the ",(0,i.yg)("strong",{parentName:"li"},"SAML Settings")," section and click ",(0,i.yg)("strong",{parentName:"li"},"Edit"),"."),(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Next")," to reach the ",(0,i.yg)("strong",{parentName:"li"},"Configure SAML")," section."),(0,i.yg)("li",{parentName:"ol"},"Scroll to the bottom and click the ",(0,i.yg)("strong",{parentName:"li"},"Preview the SAML assertion")," button."),(0,i.yg)("li",{parentName:"ol"},"This opens a new browser tab."),(0,i.yg)("li",{parentName:"ol"},"Copy the highlighted information from the preview and use it as the ",(0,i.yg)("strong",{parentName:"li"},"Entity Issuer")," and ",(0,i.yg)("strong",{parentName:"li"},"SSO Issuer")," in Prophecy IDE.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"SAML Assertion",src:n(40937).A,width:"2736",height:"1116"})),(0,i.yg)("h3",{id:"configuring-prophecy"},"Configuring Prophecy"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Log in to Prophecy IDE as an admin user."),(0,i.yg)("li",{parentName:"ol"},"Navigate to the ",(0,i.yg)("strong",{parentName:"li"},"SSO")," tab of the Prophecy ",(0,i.yg)("strong",{parentName:"li"},"Settings")," page."),(0,i.yg)("li",{parentName:"ol"},"Under ",(0,i.yg)("strong",{parentName:"li"},"Authentication Provider"),", select ",(0,i.yg)("strong",{parentName:"li"},"Prophecy Managed"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"SSO Settings",src:n(19583).A,width:"2780",height:"1282"})),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Enter the ",(0,i.yg)("strong",{parentName:"li"},"Organization ID")," and ",(0,i.yg)("strong",{parentName:"li"},"Team Name")," for your organization and team, respectively."),(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Configure")," to generate a SCIM Token. Make a record of this token, as it will be required later for provisioning SCIM in Okta.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"SSO Settings With SCIM token",src:n(24594).A,width:"2770",height:"1274"})),(0,i.yg)("ol",{start:6},(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Save"),"."),(0,i.yg)("li",{parentName:"ol"},"Enter the information noted during the Okta setup and click ",(0,i.yg)("strong",{parentName:"li"},"Save"),"."),(0,i.yg)("li",{parentName:"ol"},"Once SCIM Provisioning is enabled for the ",(0,i.yg)("em",{parentName:"li"},"Prophecy SAML App")," in Okta and users/groups are assigned to it, logout from Prophecy IDE. The assigned users will then be able to log in to Prophecy IDE via Okta.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"SSO Detailed Settings",src:n(21176).A,width:"2768",height:"1284"})),(0,i.yg)("h3",{id:"assigning-users-to-prophecy-in-okta"},"Assigning Users to Prophecy in Okta"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Navigate to the ",(0,i.yg)("strong",{parentName:"li"},"Assignment")," tab of ",(0,i.yg)("em",{parentName:"li"},"Prophecy SAML App")," in Okta."),(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Assign")," > ",(0,i.yg)("strong",{parentName:"li"},"Assign to People"),"."),(0,i.yg)("li",{parentName:"ol"},"Search for your users and assign them to the Prophecy app.")),(0,i.yg)("h2",{id:"sync-users-and-groups-from-okta-using-scim"},"Sync Users and Groups from Okta using SCIM"),(0,i.yg)("p",null,"This section describes how to configure your Okta and Prophecy to provision users and groups to Prophecy using SCIM,\nor System for Cross-domain Identity Management, an open standard that allows you to automate user provisioning."),(0,i.yg)("h3",{id:"about-scim-provisioning-in-prophecy"},"About SCIM provisioning in Prophecy"),(0,i.yg)("p",null,"Prophecy provides a SCIM connector that lets you use Okta to create/update users and groups/teams in Prophecy, give them the proper level of access,\nand remove access (de-provision them) when they leave your organization or no longer need access to Prophecy."),(0,i.yg)("p",null,"The ",(0,i.yg)("em",{parentName:"p"},"Prophecy SAML App")," in Okta must be assigned to users/groups in Okta for the SCIM connector to be triggered and\ncreate corresponding users in Prophecy."),(0,i.yg)("p",null,"Note:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Any app assignments made to a group in Okta will only create new users in Prophecy which belonged to this\ngroup in Okta. A ",(0,i.yg)("inlineCode",{parentName:"p"},"Push Group")," operation should be triggered by admin in Okta to create a new team/group in Prophecy.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"A ",(0,i.yg)("inlineCode",{parentName:"p"},"Push Group")," operation only creates group/team in Prophecy and not users. To create users, the app must be assigned\nto the group")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Importing user/groups from Okta to Prophecy is supported but not vice-versa i.e. any changes made to a synced user in\nProphecy IDE will not be synced back to Okta and will get overwritten whenever any update to user is synced from Okta.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Updates to primary email is not supported in Prophecy via SCIM.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Login via secondary emails registered with Okta is not supported in Prophecy.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"De-provisioning of a user from Okta deletes that user from Prophecy and not deactivates it. As a result, a\nde-provisioned user will lose their personal projects in Prophecy."))),(0,i.yg)("h4",{id:"requirements"},"Requirements"),(0,i.yg)("p",null,"To provision users/groups to your Prophecy account using SCIM,"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"you must be Okta admin"),(0,i.yg)("li",{parentName:"ul"},"you must be a Prophecy account admin.")),(0,i.yg)("h3",{id:"enable-scim-provisioning-for-prophecy-saml-app-in-okta"},"Enable SCIM Provisioning for ",(0,i.yg)("em",{parentName:"h3"},"Prophecy SAML App")," in Okta"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Go to ",(0,i.yg)("inlineCode",{parentName:"li"},"General")," tab of ",(0,i.yg)("em",{parentName:"li"},"Prophecy SAML App")," in Okta and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Edit")," in the ",(0,i.yg)("inlineCode",{parentName:"li"},"App Settings")," section."),(0,i.yg)("li",{parentName:"ul"},"Select the checkbox in Provisioning sub-section which says ",(0,i.yg)("inlineCode",{parentName:"li"},"Enable SCIM provisioning"),"."),(0,i.yg)("li",{parentName:"ul"},"Click ",(0,i.yg)("inlineCode",{parentName:"li"},"Save"),".")),(0,i.yg)("h4",{id:"choose-provisioning-options"},"Choose provisioning options"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"From the app integration's settings page, choose the ",(0,i.yg)("inlineCode",{parentName:"li"},"Provisioning")," tab. The SCIM connection settings appear under ",(0,i.yg)("inlineCode",{parentName:"li"},"Settings")," > ",(0,i.yg)("inlineCode",{parentName:"li"},"Integration"),"."),(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("inlineCode",{parentName:"li"},"Edit"),"."),(0,i.yg)("li",{parentName:"ol"},"Specify the SCIM connector base URL as ",(0,i.yg)("inlineCode",{parentName:"li"},"https://your-prophecy-ide-url.domain/proscim")),(0,i.yg)("li",{parentName:"ol"},"Specify the field name of the Unique identifier for users as ",(0,i.yg)("inlineCode",{parentName:"li"},"userName"),"."),(0,i.yg)("li",{parentName:"ol"},"Under Supported provisioning actions, choose the following provisioning actions:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Push New Users")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Push Profile Updates")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Push Groups"))),(0,i.yg)("ol",{start:6},(0,i.yg)("li",{parentName:"ol"},"For Authentication Mode, choose ",(0,i.yg)("inlineCode",{parentName:"li"},"HTTP Header")," from the dropdown box and in ",(0,i.yg)("inlineCode",{parentName:"li"},"Authorization"),", provide the SCIM token as generated in Prophecy IDE above."),(0,i.yg)("li",{parentName:"ol"},"Click on ",(0,i.yg)("inlineCode",{parentName:"li"},"Test Connector Configuration")," to check the connectivity to the SCIM server."),(0,i.yg)("li",{parentName:"ol"},"If the connection test succeeds, click Save. A new tab will appear on app integration's settings page named ",(0,i.yg)("inlineCode",{parentName:"li"},"Push Groups"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Scim Provisioning",src:n(11890).A,width:"1408",height:"1284"})),(0,i.yg)("h4",{id:"usergroup-assignment-to-prophecy-saml-app-in-okta"},"User/Group Assignment to ",(0,i.yg)("em",{parentName:"h4"},"Prophecy SAML App")," in Okta"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Go to the ",(0,i.yg)("inlineCode",{parentName:"li"},"Assignment")," tab of ",(0,i.yg)("em",{parentName:"li"},"Prophecy SAML App")," in Okta"),(0,i.yg)("li",{parentName:"ol"},"To assign to individual people, click ",(0,i.yg)("inlineCode",{parentName:"li"},"Assign")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Assign to People"),". Search your users and assign them to the Prophecy app."),(0,i.yg)("li",{parentName:"ol"},"To assign to groups, click ",(0,i.yg)("inlineCode",{parentName:"li"},"Assign")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Assign to Groups"),". Search your groups and assign them to the Prophecy app.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Assign App",src:n(73107).A,width:"1402",height:"992"})),(0,i.yg)("p",null,"As mentioned earlier, assigning app to Group only creates new users in Prophecy IDE belonging to this group but doesn't create a group in Prophecy. To create a group:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Go to the ",(0,i.yg)("inlineCode",{parentName:"li"},"Push Groups")," tab of the ",(0,i.yg)("em",{parentName:"li"},"Prophecy SAML App")," in Okta"),(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("inlineCode",{parentName:"li"},"Push Groups")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Find groups by name/rule"),", enter the name/rule.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Find Groups",src:n(10515).A,width:"1394",height:"704"})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Select the checkbox to ",(0,i.yg)("inlineCode",{parentName:"li"},"Push group memberships immediately"),"."),(0,i.yg)("li",{parentName:"ol"},"In dropdown of Create/Link Group, select ",(0,i.yg)("inlineCode",{parentName:"li"},"Create Group")," (leave as is if already selected)"),(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("inlineCode",{parentName:"li"},"Save"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Push Groups by Name",src:n(18107).A,width:"1408",height:"1226"})))}c.isMDXComponent=!0},73107:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/app_assign-dfe388090cc98dd2e90c3f53bd56716e.png"},4803:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/okta_dl_cert-0f492bd46f0627d7206c135c6c8ef2e9.png"},81224:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/okta_example-4e85f048aa3e058aed50b83093c2739c.png"},92785:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/okta_idp_metadata_xml-2c9061db8a27d4d1f3621d3c6d8a045f.png"},40937:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/okta_xml-7c8ba189fececf1f90db537d0685afac.png"},18107:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/push_groups_by_name-0cedc9d87b783e722a5dd0161b39ac42.png"},10515:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/push_groups_find-48572e90623bda940fa4968900092711.png"},11890:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/scim_provisioning-a7809d19ba23e8048f32d0d8e68b34ad.png"},19583:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sso_settings-62ba5ad052ba828f7a54e744aca56185.png"},21176:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sso_settings_detailed-655f43bcea4ae9ecd74dac3acdd752e5.png"},24594:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sso_settings_with_token-f630a2a7a200a1985f487657cf3c0af1.png"}}]);