"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[647],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var o=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(b,n(n({ref:a},p),{},{components:t})):o.createElement(b,n({ref:a},p))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,n=new Array(r);n[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[m]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<r;c++)n[c]=t[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},694:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(7462),i=(t(7294),t(3905));const r={title:"Malabarismo com link simb\xf3lico",authors:"imgodes",date:"2022-12-03 18:40:00 -0300",categories:["Linux"],tags:["pr\xe1tica","tutorial"]},n=void 0,s={permalink:"/blog/2022/12/03/linksimb/malabarismo-com-links-simb\xf3licos",editUrl:"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/linksimb/2022-12-03-malabarismo-com-links-simb\xf3licos.md",source:"@site/blog/linksimb/2022-12-03-malabarismo-com-links-simb\xf3licos.md",title:"Malabarismo com link simb\xf3lico",description:"Symbolic link - Wikipedia",date:"2022-12-03T18:40:00.000Z",formattedDate:"3 de dezembro de 2022",tags:[{label:"pr\xe1tica",permalink:"/blog/tags/pratica"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:1.31,hasTruncateMarker:!1,authors:[{name:"G. Guedes",title:"Blue Teamer",url:"https://www.linkedin.com/in/gguedescruz/",imageURL:"https://avatars.githubusercontent.com/u/52048434?v=4",key:"imgodes"}],frontMatter:{title:"Malabarismo com link simb\xf3lico",authors:"imgodes",date:"2022-12-03 18:40:00 -0300",categories:["Linux"],tags:["pr\xe1tica","tutorial"]},prevItem:{title:"Seu site pessoal gratis",permalink:"/blog/2023/02/22/intro-jekyll/introducao-jekyll"},nextItem:{title:"Links \xfateis para o dia a dia",permalink:"/blog/2022/10/22/links-ih"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},m="wrapper";function d(e){let{components:a,...r}=e;return(0,i.kt)(m,(0,o.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Symbolic_link#Storage_of_symbolic_links"},"Symbolic link - Wikipedia")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://linuxconfig.org/how-to-save-space-with-symlinks-and-mount-points"},"How to save space with-ymlinks")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Disk",src:t(7283).Z,width:"264",height:"314"})," Muitas vezes o disco fica cheio, e diante da impossibilidade de expandir a parti\xe7\xe3o raiz, podemos optar pela combina\xe7\xe3o de adi\xe7\xe3o de um novo disco com o uso de links simb\xf3licos. Observe o desenho, a fim de entender a situa\xe7\xe3o problema;\nNum primeiro momento, voc\xea apenas sabe que sua aplica\xe7\xe3o n\xe3o consegue mais escrever em arquivos, pois o disco est\xe1 cheio. Bom, podemos usar o comando abaixo, para achar qual diret\xf3rio est\xe1 ocupando mais espa\xe7o: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"du -d 1 -cha / 2>/dev/null | grep -E 'G|M'\n")),(0,i.kt)("p",null,"E supondo que voc\xea descobriu que o diret\xf3rio era de fato da sua aplica\xe7\xe3o no ",(0,i.kt)("inlineCode",{parentName:"p"},"/var")," , e n\xe3o h\xe1 como expandir o volume, nem a parti\xe7\xe3o raiz configurada, diante disso, podemos fazer a sua aplica\xe7\xe3o achar que est\xe1 armazenando no ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/aplica\xe7\xe3o")," , quando na verdade, esta sendo usado o espa\xe7o dispon\xedvel no disco rec\xe9m adicionado (referenciado na imagem, como ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sdb1"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"disk2",src:t(4721).Z,width:"502",height:"443"})),(0,i.kt)("p",null,"Adicione o novo disco, monte em um diret\xf3rio qualquer, pare a sua aplica\xe7\xe3o, e mova os arquivos para o novo diret\xf3rio (talvez bata um medo, rsrs):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/init.d/aplica\xe7\xe3o stop\nmv /var/aplica\xe7\xe3o /disconovo\nln -s /disconovo/aplica\xe7\xe3o /var/\n")),(0,i.kt)("p",null,"Agora ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/aplica\xe7\xe3o")," \xe9 apenas um link simb\xf3lico, como um atalho na sua \xe1rea de trabalho."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"disk3",src:t(6880).Z,width:"502",height:"443"})),(0,i.kt)("p",null,"Se voc\xea fizer ",(0,i.kt)("inlineCode",{parentName:"p"},"ln -s /var/aplicacao /var/link"),", ent\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/link")," ser\xe1 um arquivo que ir\xe1 fazer referencia ao conte\xfado de ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/aplicacao"),". Logo ",(0,i.kt)("inlineCode",{parentName:"p"},"ls /var/link"),", tentar\xe1 obter uma listagem de diret\xf3rios para ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/link"),", e o sistema devolver\xe1 uma listagem do conte\xfado de ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/aplicacao"),"."),(0,i.kt)("p",null,"O mesmo serve na hora de escrever os arquivos."))}d.isMDXComponent=!0},7283:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/disk-ace4ff95ff532084ecc5f79400c94202.png"},4721:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/disk2-d7ea3f600560c8c9a6d5621b5fc12718.png"},6880:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/disk3-4d62a8d39fa1a77c0ab7d633335c980b.png"}}]);