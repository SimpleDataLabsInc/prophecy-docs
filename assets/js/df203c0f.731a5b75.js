"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[24279],{45921:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var a=l(96540),n=l(20053),r=l(75489),s=l(53465),c=l(69024),o=l(17559),i=l(21312),u=l(78511),g=l(41463);function m(e){let{doc:t}=e;return a.createElement("article",{className:"margin-vert--lg"},a.createElement(r.A,{to:t.permalink},a.createElement("h2",null,t.title)),t.description&&a.createElement("p",null,t.description))}function d(e){let{tag:t}=e;const l=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,i.T)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),d=(0,i.T)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:l(t.count),tagName:t.label});return a.createElement(c.e3,{className:(0,n.A)(o.G.wrapper.docsPages,o.G.page.docsTagDocListPage)},a.createElement(c.be,{title:d}),a.createElement(g.A,{tag:"doc_tag_doc_list"}),a.createElement(u.A,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,d),a.createElement(r.A,{href:t.allTagsPath},a.createElement(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement("section",{className:"margin-vert--lg"},t.items.map((e=>a.createElement(m,{key:e.id,doc:e})))))))))}},53465:(e,t,l)=>{l.d(t,{W:()=>i});var a=l(96540),n=l(44586);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function i(){const e=o();return{selectMessage:(t,l)=>function(e,t,l){const a=e.split("|");if(1===a.length)return a[0];a.length>l.pluralForms.length&&console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=l.select(t),r=l.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(l,t,e)}}}}]);