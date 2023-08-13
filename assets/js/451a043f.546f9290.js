"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[455],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),u=function(e){var a=o.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=u(e.components);return o.createElement(i.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,k=p["".concat(i,".").concat(d)]||p[d]||c[d]||n;return t?o.createElement(k,s(s({ref:a},m),{},{components:t})):o.createElement(k,s({ref:a},m))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,s=new Array(n);s[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<n;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4690:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const n={title:"Seu site pessoal gratis",authors:"imgodes",img_path:"/assets/img/intro-jekyll/",date:"2023-02-22 18:40:00 -0300",categories:["Web"],tags:["pr\xe1tica","teoria","tutorial"],math:!0,mermaid:!0},s=void 0,l={permalink:"/blog/2023/02/22/intro-jekyll/introducao-jekyll",editUrl:"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/intro-jekyll/2023-02-22-introducao-jekyll.md",source:"@site/blog/intro-jekyll/2023-02-22-introducao-jekyll.md",title:"Seu site pessoal gratis",description:"Aqui, vou explicar como fazer a instala\xe7\xe3o do seu futuro site pessoal.",date:"2023-02-22T18:40:00.000Z",formattedDate:"22 de fevereiro de 2023",tags:[{label:"pr\xe1tica",permalink:"/blog/tags/pratica"},{label:"teoria",permalink:"/blog/tags/teoria"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:6.51,hasTruncateMarker:!1,authors:[{name:"G. Guedes",title:"Blue Teamer",url:"https://www.linkedin.com/in/gguedescruz/",imageURL:"https://avatars.githubusercontent.com/u/52048434?v=4",key:"imgodes"}],frontMatter:{title:"Seu site pessoal gratis",authors:"imgodes",img_path:"/assets/img/intro-jekyll/",date:"2023-02-22 18:40:00 -0300",categories:["Web"],tags:["pr\xe1tica","teoria","tutorial"],math:!0,mermaid:!0},prevItem:{title:"M\xe1quinas virtuais para engenharia reversa (Windows)",permalink:"/blog/2023/04/23/rev-vmwin10/vms-para-eng-rev"},nextItem:{title:"Malabarismo com link simb\xf3lico",permalink:"/blog/2022/12/03/linksimb/malabarismo-com-links-simb\xf3licos"}},i={authorsImageUrls:[void 0]},u=[{value:"Gems",id:"gems",level:2},{value:"Instala\xe7\xe3o do Tema",id:"instala\xe7\xe3o-do-tema",level:2}],m={toc:u},p="wrapper";function c(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aqui, vou explicar como fazer a instala\xe7\xe3o do seu futuro site pessoal. "),(0,r.kt)("h1",{id:"requisitos"},"Requisitos"),(0,r.kt)("p",null,"O Sistema Operacional, n\xe3o \xe9 um requisito, \xe9 mais um aviso:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tudo foi feito em um Linux baseado em Ubuntu, o mesmo pode ser reproduzido em qualquer distribui\xe7\xe3o Linux, e tamb\xe9m em m\xe1quina virtual.\n{: .prompt-warning}")),(0,r.kt)("p",null,"Minha distro \xe9 a seguinte:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DISTRIB_ID=Pop\nDISTRIB_RELEASE=22.04\nDISTRIB_CODENAME=jammy\nDISTRIB_DESCRIPTION="Pop!_OS 22.04 LTS"\n')),(0,r.kt)("p",null,"Qualquer outra distribui\xe7\xe3o pode ser usada sem problemas, desde que tenha comandos equivalentes, com o mesmo efeito."),(0,r.kt)("p",null,"Tamb\xe9m recomendo que tenha conhecimento b\xe1sico em git e github, ou no m\xednimo, saiba fazer um fork pela interface web do github e conhe\xe7a os comandos abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone\ngit status\ngit commit \ngit add\ngit pull\ngit push\n")),(0,r.kt)("p",null,"Caso n\xe3o conhe\xe7a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DqTITcMq68k"},"V\xeddeo r\xe1pido da Rafaella Ballerini")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA"},"Playlist detalhada do Curso em V\xeddeo"))),(0,r.kt)("h1",{id:"instala\xe7\xe3o-tltr---too-lazy-to-read"},"Instala\xe7\xe3o TLTR - Too lazy to read"),(0,r.kt)("p",null,"Se n\xe3o estiver afim de ler toda a teoria pode pular para ",(0,r.kt)("a",{parentName:"p",href:"#instala%C3%A7%C3%A3o"},"Instala\xe7\xe3o"),", ou execute os comandos abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get install ruby-full build-essential zlib1g-dev\necho '# Install Ruby Gems to ~/gems' >> ~/.bashrc\necho 'export GEM_HOME=\"$HOME/gems\"' >> ~/.bashrc\necho 'export PATH=\"$HOME/gems/bin:$PATH\"' >> ~/.bashrc\nsource ~/.bashrc\ngh repo clone SEU-USERNAME/SEU-USERNAME.github.io\ngit clone https://github.com/SEU-USERNAME/SEU-USERNAME.github.io.git\nbundle install\n")),(0,r.kt)("h1",{id:"abordagem"},"Abordagem"),(0,r.kt)("p",null,"Primeiro apresento o conceito, para que mesmo que n\xe3o deseje seguir usando o mesmo tema que eu, ainda assim, consiga seguir seu pr\xf3prio caminho, customizando a sua maneira."),(0,r.kt)("p",null,"Eu poderia seguir s\xf3 mostrando como instalar as parada sem explicar nada, que \xe9 o que os tutoriais gringos fazem. Mas o fato \xe9 que as documenta\xe7\xf5es e v\xeddeos de te\xf3ricos j\xe1 est\xe3o todos na l\xedngua deles, ent\xe3o vou tentar desenvolver tamb\xe9m alguns pontos da teoria que acho importante conhecer. Tem coisa que eu s\xf3 traduzi da documenta\xe7\xe3o oficial. "),(0,r.kt)("p",null,"N\xe3o \xe9 preciso decorar nem aprender tudo s\xf3 leia os conceitos com calma e tudo vai fazer sentido no final."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Certamente n\xe3o sou a melhor pessoa para falar sobre frontend web, mas como n\xe3o achei esse conte\xfado em portugu\xeas, vale a pena tentar!")," "),(0,r.kt)("h1",{id:"introdu\xe7\xe3o-ao-jekyll"},"Introdu\xe7\xe3o ao Jekyll"),(0,r.kt)("p",null,"Jekyll \xe9 um framework (tecnicamente falando, \xe9 uma engine de parsing) usado para transformar arquivos de texto em p\xe1ginas est\xe1ticas para o seu website pessoal! "),(0,r.kt)("p",null,"Ou seja, h\xe1 por meio dele podemos escrever e compartilhar, por meio do seu pr\xf3prio site, sem precisar se aprofundar em HTML e CSS. Mas antes de chegar nessa parte vamos entender os componentes do Jekyll."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tem uma ",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/playlist?list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB"},"playlist no youtube")," com v\xeddeos curtos sobre o Jekyll, mas est\xe1 em ingl\xeas.\n{: .prompt-info }")),(0,r.kt)("p",null,"Na ess\xeancia, ele usa 3 arquivos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 _config.yml\n\u251c\u2500\u2500 _layouts\n\u2502   \u2514\u2500\u2500 default.html\n\u2514\u2500\u2500 index.md\n")),(0,r.kt)("p",null,"Imagine-os com o seguinte conte\xfado:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml")," \xe9 o arquivo com as principais configura\xe7\xf5es que o Jekyll usa para criar o site. Um arquivo vazio, usa as configura\xe7\xf5es padr\xf5es.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"name: My Jekyll Website\n"))),(0,r.kt)("li",{parentName:"ul"},"O arquivo ",(0,r.kt)("inlineCode",{parentName:"li"},"index.md")," \xe9 de conte\xfado. O Jekyll procura por aquivos com as tags ",(0,r.kt)("inlineCode",{parentName:"li"},"---")," (chamadas tags front-matter) para processar o conte\xfado, preencher as vari\xe1veis, e converter o conte\xfado em HTML. Veja o exemplo de como poderia ser o ",(0,r.kt)("inlineCode",{parentName:"li"},"index.md"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Titulo\nlayout: default\n---\n\nconte\xfado lalalalala\n1. Lista\n2. Numerada\n\n- Lista \n- Normal\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tudo que vem ap\xf3s os 3 \xfaltimos tra\xe7os ",(0,r.kt)("inlineCode",{parentName:"li"},"---")," ser\xe1 considerado conte\xfado da postagem. Esse conte\xfado ser\xe1 formatado pelo seguinte arquivo ",(0,r.kt)("inlineCode",{parentName:"li"},"default.html"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"htmlsample",src:t(5944).Z,width:"191",height:"123"}),"{: .center }\n",(0,r.kt)("em",{parentName:"p"},"Exemplo de arquivo html usado para defini\xe7\xe3o de layout")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Em que, {% raw %}",(0,r.kt)("inlineCode",{parentName:"li"},"{{ content }}"),"{% endraw %}, ser\xe1 justamente preenchido pelo conte\xfado do arquivo ",(0,r.kt)("inlineCode",{parentName:"li"},"index.md"),". E dessa forma nosso arquivo que antes era s\xf3 texto, agora se tornou um ",(0,r.kt)("inlineCode",{parentName:"li"},".html")," perfeitamente formatado."),(0,r.kt)("li",{parentName:"ul"},"Esse arquivo novo, ",(0,r.kt)("inlineCode",{parentName:"li"},".html")," ser\xe1 criado dentro de ",(0,r.kt)("inlineCode",{parentName:"li"},"_site")," um diret\xf3rio que tamb\xe9m ser\xe1 criado na execu\xe7\xe3o.")),(0,r.kt)("p",null,"Veja o esquema a seguir (clique para melhor visualiza\xe7\xe3o):\n",(0,r.kt)("img",{alt:"jekylllayoutsingle",src:t(8248).Z,width:"1836",height:"727"}),"\n",(0,r.kt)("em",{parentName:"p"},"Exemplo de como o documento de texto se torna uma p\xe1gina html")),(0,r.kt)("h2",{id:"gems"},"Gems"),(0,r.kt)("p",null,"Gems s\xe3o basicamente c\xf3digos, programas ou funcionalidades escritos na linguagem Ruby, que vem por meio dos pacotes Gems. Os pacotes gem podem desempenhar funcionalidades como:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Convers\xe3o de objetos ruby para arquivo JSON;"),(0,r.kt)("li",{parentName:"ul"},"Pagina\xe7\xe3o;"),(0,r.kt)("li",{parentName:"ul"},"Interagir com APIs como a do GitHub.")),(0,r.kt)("p",null,"Jekyll \xe9 um gem, os plugins Jekyll e o tema que usaremos tamb\xe9m s\xe3o gems. "),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"Gemfile")," \xe9 um arquivo que cont\xe9m uma lista de gems usados pelo site. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NAO instale pacotes Ruby Gems (chamados de gems) ao longo deste tutorial, a menos que voc\xea saiba o que est\xe1 fazendo. Acredita em mim, vai dar bigode se fizer isso. \u201cSe tem placa tem hist\xf3ria\u201d - S\xf3crates\n{: .prompt-danger }")),(0,r.kt)("h1",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,r.kt)("p",null,"Primeiro siga as instru\xe7\xf5es de instala\xe7\xe3o do ",(0,r.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/installation/"},"Jekyll")," a seguir para ",(0,r.kt)("strong",{parentName:"p"},"Linux Ubuntu"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install ruby-full build-essential zlib1g-dev\n")),(0,r.kt)("p",null,"A documenta\xe7\xe3o do Jekyll tamb\xe9m tem instru\xe7\xf5es para cada SO, caso precise:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jekyllrb.com/docs/installation/macos/"},"macOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jekyllrb.com/docs/installation/ubuntu/"},"Ubuntu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jekyllrb.com/docs/installation/other-linux/"},"Other Linux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jekyllrb.com/docs/installation/windows/"},"Windows"))),(0,r.kt)("p",null,"Configure um diret\xf3rio de instala\xe7\xe3o do gem para sua conta de usu\xe1rio. Os comandos a seguir adicionar\xe3o vari\xe1veis de ambiente ao seu arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"{: .filepath} para configurar o caminho de instala\xe7\xe3o da gem, caso use outro shell, basta substituir o bashrc pelo arquivo que o seu shell usa.\nCaso n\xe3o fa\xe7a a m\xednima ideia do que \xe9 isso de bashrc consulte o ",(0,r.kt)("a",{parentName:"p",href:"#anexo-1-bashrc"},"anexo 1")," que tem uma explica\xe7\xe3o r\xe1pida sobre ele.\nBom, seguindo em frente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc\necho 'export GEM_HOME=\"$HOME/gems\"' >> ~/.bashrc\necho 'export PATH=\"$HOME/gems/bin:$PATH\"' >> ~/.bashrc\nsource ~/.bashrc\n")),(0,r.kt)("h2",{id:"instala\xe7\xe3o-do-tema"},"Instala\xe7\xe3o do Tema"),(0,r.kt)("p",null,"Existem diversos temas que mudam a aparencia do seu site. O que eu escolhi foi o ",(0,r.kt)("a",{parentName:"p",href:"https://chirpy.cotes.page/posts/getting-started/"},"Chirpy"),", cuidado pois podem haver diferen\xe7as caso escolha outro tema."),(0,r.kt)("p",null,"Existem duas formas de instalar usar o Chirpy, eu seguirei com a mais f\xe1cil que \xe9 usando o ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cotes2020/chirpy-starter/"},"template")," basta clicar em ",(0,r.kt)("kbd",null,"Use this template")," > ",(0,r.kt)("kbd",null,"Create a new repository"),", e nomeie o reposit\xf3rio como ",(0,r.kt)("inlineCode",{parentName:"p"},"SEU-USERNAME.github.io"),", em que, ",(0,r.kt)("inlineCode",{parentName:"p"},"SEU-USERNAME")," \xe9 o seu nome de usu\xe1rio do github."),(0,r.kt)("p",null,"Agora entre no seu reposit\xf3rio criado e na aba ",(0,r.kt)("kbd",null,"Settings")," depois clique em ",(0,r.kt)("kbd",null,"Pages")," e abaixo de ",(0,r.kt)("kbd",null,"Build and deployment")," selecione ",(0,r.kt)("kbd",null,"Github Actions"),". E \xe9 por meio dessas configura\xe7\xf5es que o nossa p\xe1gina ser\xe1 implementada. "),(0,r.kt)("p",null,"Fa\xe7a o clone do seu reposit\xf3rio da maneira que preferir. Dois exemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gh repo clone SEU-USERNAME/SEU-USERNAME.github.io\ngit clone https://github.com/SEU-USERNAME/SEU-USERNAME.github.io.git\n")),(0,r.kt)("p",null,"Com o reposit\xf3rio, podemos seguir com a instala\xe7\xe3o dos gems necess\xe1rios:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bundle install \n")),(0,r.kt)("p",null,"Feita a instala\xe7\xe3o, agora \xe9 s\xf3 executar ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve -l -w --port 4000")," e acessar a p\xe1gina em 127.0.0.1:4000."),(0,r.kt)("p",null,"Para configura\xe7\xe3o, confira o post de configura\xe7\xe3o do jekyll (em breve)."),(0,r.kt)("h1",{id:"anexo-1-bashrc"},"Anexo 1 bashrc"),(0,r.kt)("p",null,"O shell \xe9 basicamente uma interface de acesso ao sistema base.\nO Bash \xe9 o interpretador de comandos de shell (o seu pode ser outro).\nUse com comando ",(0,r.kt)("inlineCode",{parentName:"p"},"echo $SHELL")," para saber qual \xe9 o seu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> echo $SHELL\n/usr/bin/zsh\n")),(0,r.kt)("p",null,"{: file='exemplo de output'}"),(0,r.kt)("p",null,"O meu \xe9 o interpretador shell \xe9 o ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh")," ."),(0,r.kt)("p",null,"\xc9 bom saber tamb\xe9m que ao logar no Linux v\xe1rios arquivos sao carregados para saber suas configura\xe7\xf5es pessoais e carrega-las, um desses arquivos \xe9 o tal do ",(0,r.kt)("inlineCode",{parentName:"p"},"bashrc")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"zshrc")," , por isso temos que adicionar aquelas linhas a esses arquivos, para que carreguem as nossa prefer\xeancias e configura\xe7\xf5es do ruby."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo '# Install Ruby Gems to ~/gems' >> ~/.zshrc\necho 'export GEM_HOME=\"$HOME/gems\"' >> ~/.zshrc\necho 'export PATH=\"$HOME/gems/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc\n")),(0,r.kt)("h1",{id:"ref"},"Ref."),(0,r.kt)("p",null,"CHUNG, C. Getting Started. Dispon\xedvel em: ",(0,r.kt)("a",{parentName:"p",href:"https://chirpy.cotes.page/posts/getting-started/"},"https://chirpy.cotes.page/posts/getting-started/"),". Acesso em: 24 fev. 2023."),(0,r.kt)("p",null,"COSTA, M. Usando Jekyll e GitHub Pages. Dispon\xedvel em: ",(0,r.kt)("a",{parentName:"p",href:"https://murilo.tech/posts/usando-jekyll-e-github-pages/"},"https://murilo.tech/posts/usando-jekyll-e-github-pages/"),". Acesso em: 24 fev. 2023."),(0,r.kt)("p",null,"DOMINGUEZ, J. How Jekyll Works ; ruhoh universal static blog generator. Dispon\xedvel em: ",(0,r.kt)("a",{parentName:"p",href:"http://jekyllbootstrap.com/lessons/jekyll-introduction.html"},"http://jekyllbootstrap.com/lessons/jekyll-introduction.html"),". Acesso em: 24 fev. 2023."),(0,r.kt)("p",null,"JEKYLL TEAM. Command Line Usage. Dispon\xedvel em: ",(0,r.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/usage/"},"https://jekyllrb.com/docs/usage/"),". Acesso em: 24 fev. 2023."),(0,r.kt)("p",null,"JEKYLL TEAM. Ruby 101. Dispon\xedvel em: ",(0,r.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/ruby-101/"},"https://jekyllrb.com/docs/ruby-101/"),". Acesso em: 24 fev. 2023."),(0,r.kt)("p",null,"TOMJOHT. Convert an HTML site to Jekyll. Dispon\xedvel em: ",(0,r.kt)("a",{parentName:"p",href:"https://jekyllrb.com/tutorials/convert-site-to-jekyll/"},"https://jekyllrb.com/tutorials/convert-site-to-jekyll/"),". Acesso em: 24 fev. 2023. "),(0,r.kt)("p",null,"*","[SO]",':"Sistema Operacional"'))}c.isMDXComponent=!0},8248:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/jekylllayoutsingle-04693f722e6ae70b1834093064844fab.png"},5944:(e,a,t)=>{t.d(a,{Z:()=>o});const o="data:image/png;base64,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"}}]);