"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9543],{5894:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var o=t(7462),i=(t(7294),t(3905)),n=t(4866),r=t(5162);t(3901);const s={title:"Criando VMs Malboxes",authors:"imgodes",description:"Como provisionar m\xe1quinas virtuais para estudo de malwares e engenharia reversa.",image:"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/rev-vmwin10/robot.jpg?raw=true",date:"2023-04-23 12:52:00 -0300",tags:["engenharia reversa","infraestrutura","malboxes"],hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:4,keywords:["malboxes","ida pro","retoolkit"]},l=void 0,m={permalink:"/blog/2023/04/23/malboxes/malboxes-vms",editUrl:"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/malboxes/2023-04-23-malboxes-vms.md",source:"@site/blog/malboxes/2023-04-23-malboxes-vms.md",title:"Criando VMs Malboxes",description:"Como provisionar m\xe1quinas virtuais para estudo de malwares e engenharia reversa.",date:"2023-04-23T12:52:00.000Z",formattedDate:"23 de abril de 2023",tags:[{label:"engenharia reversa",permalink:"/blog/tags/engenharia-reversa"},{label:"infraestrutura",permalink:"/blog/tags/infraestrutura"},{label:"malboxes",permalink:"/blog/tags/malboxes"}],readingTime:2.29,hasTruncateMarker:!1,authors:[{name:"Godes",title:"Defesa Cibern\xe9tica",url:"https://www.linkedin.com/in/gguedescruz/",imageURL:"https://avatars.githubusercontent.com/u/52048434?v=4",key:"imgodes"}],frontMatter:{title:"Criando VMs Malboxes",authors:"imgodes",description:"Como provisionar m\xe1quinas virtuais para estudo de malwares e engenharia reversa.",image:"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/rev-vmwin10/robot.jpg?raw=true",date:"2023-04-23 12:52:00 -0300",tags:["engenharia reversa","infraestrutura","malboxes"],hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:4,keywords:["malboxes","ida pro","retoolkit"]},prevItem:{title:"Purple Team - Metasploitable3 & DetectionLab",permalink:"/blog/2023/04/27/metasploitable-detec/metasploitable3-detectionlab"},nextItem:{title:"Seu site pessoal gratis",permalink:"/blog/2023/02/22/intro-jekyll/introducao-jekyll"}},u={authorsImageUrls:[void 0]},d=[{value:"Provisionando a VM",id:"provisionando-a-vm",level:2}],p={toc:d},c="wrapper";function b(e){let{components:a,...t}=e;return(0,i.kt)(c,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Como provisionar m\xe1quinas virtuais para estudo de malwares e engenharia reversa."),(0,i.kt)("p",null,"A GoSecure possui uma ferramenta voltada para an\xe1lise de malware e engenharia reversa chamada Malboxes, com ela podemos provisionar VMs Windows, destru\xed-las e faze-las do zero de novo bem facilmente. Vi essa necessidade durante o curso do ",(0,i.kt)("a",{parentName:"p",href:"https://www.instagram.com/hackingnaweboficial/"},"Rafael Sousa"),", e outros estudos semelhantes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoSecure/malboxes"},"Reposit\xf3rio do Malboxes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gosecure.net/blog/2017/02/16/introducing-malboxes-a-tool-to-build-malware-analysis-virtual-machines/"},"Introducing Malboxes: a Tool to Build Malware Analysis Virtual Machines"))),(0,i.kt)("h1",{id:"requisitos"},"Requisitos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vagrant"),(0,i.kt)("li",{parentName:"ul"},"Packer"),(0,i.kt)("li",{parentName:"ul"},"Git "),(0,i.kt)("li",{parentName:"ul"},"Python pip"),(0,i.kt)("li",{parentName:"ul"},"Virtualbox ")),(0,i.kt)("h1",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,i.kt)("p",null,"A forma de instala\xe7\xe3o j\xe1 est\xe1 no ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoSecure/malboxes#installation"},"reposit\xf3rio oficial")," deles, portanto vou apenas falar das minhas customiza\xe7\xf5es feitas para estudar Assembly, C, e eventualmente, engenharia reversa."),(0,i.kt)("p",null,"Criei uma pasta chamada REV, para colocar tudo o que preciso."),(0,i.kt)("p",null,"Eu instalo os seguintes programas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hex-rays.com/ida-pro/"},"IDA Pro 0800 (Engenharia Reversa)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.masm32.com/download.htm"},"Masm 32 (Assembly)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mentebinaria/retoolkit"},"Retoolkit (Engenharia Reversa)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.codeblocks.org/"},"CodeBlocks (C)"))),(0,i.kt)("p",null,"Executo o comando ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant init"),", que inicializa o ambiente Vagrant no diret\xf3rio criando uma arquivo chamado ",(0,i.kt)("inlineCode",{parentName:"p"},"Vagrantfile")," caso ainda n\xe3o exista."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant init\n")),(0,i.kt)("p",null,"Ent\xe3o a estrutura ficou assim: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:"title='Estrutura do diret\xf3rio'",title:"'Estrutura",do:!0,"diret\xf3rio'":!0},"REV\n\u251c\u2500\u2500 IDAPRO\n\u2502\xa0\xa0 \u251c\u2500\u2500 (arquivos do IDA)\n\u251c\u2500\u2500 tools\n\u2502\xa0\xa0 \u251c\u2500\u2500 codeblocks-20.03-32bit-mingw-64bit-setup.exe\n\u2502\xa0\xa0 \u251c\u2500\u2500 masm32.exe\n\u2502\xa0\xa0 \u2514\u2500\u2500 retoolkit_2022.10_setup.exe\n\u2514\u2500\u2500 Vagrantfile\n")),(0,i.kt)("p",null,"Para o meu uso, basta deixar os execut\xe1veis dispon\xedveis, nem sempre eu preciso de todas essas ferramentas instaladas."),(0,i.kt)("admonition",{title:"\xa0Automatizando",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Caso queira, por meio do vagrant \xe9 poss\xedvel criar automa\xe7\xf5es, de forma que, sempre que iniciar aquela m\xe1quina virtual o vagrant ir\xe1 configura-la da maneira que voc\xea precisa.")),(0,i.kt)("h2",{id:"provisionando-a-vm"},"Provisionando a VM"),(0,i.kt)("p",null,"O comando ",(0,i.kt)("inlineCode",{parentName:"p"},"malboxes build win10_x64_analyst"),", le o arquivo de configura\xe7\xe3o dispon\xedvel em ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/USERNAME/.config/malboxes/config.js")," para saber quais as preferencias do usu\xe1rio para a cria\xe7\xe3o da m\xe1quina. Ele pode ser editado da seguinte forma a fim de definir os path das ferramentas:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='config.js'",title:"'config.js'"},'"ida_path": "/home/USERNAME/Downloads/IDAPRO",\n"tools_path": "/home/cherno/Downloads/Tools",\n')),(0,i.kt)("admonition",{title:"Op\xe7\xe3o menos complicada",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"H\xe1 uma segunda op\xe7\xe3o; por padr\xe3o quando provisionarmos a VM, o diret\xf3rio atual ser\xe1 sincronizado com um diret\xf3rio dentro da VM, logo, basta manter os execut\xe1veis na mesma pasta que usaremos para provisionar a m\xe1quina."),(0,i.kt)("p",{parentName:"admonition"},"Observe abaixo, a visao na m\xe1quina host Linux, e como ficaria na VM Windows depois de criada."),(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"linuxhost",label:"Host Linux",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-txt"},".\n\u251c\u2500\u2500 IDAPRO\n\u251c\u2500\u2500 tools\n\u2514\u2500\u2500 Vagrantfile\n"))),(0,i.kt)(r.Z,{value:"windowsvm",label:"VM Windows",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"C:\\Users\\malboxes\\Desktop\\host>tree /F\nFolder PATH listing\nVolume serial number is 0C1D-FBA3\nC:.\n\u2502   Vagrantfile\n\u2502\n\u251c\u2500\u2500\u2500tools\n\u2502       masm32.exe\n\u2502       codeblocks-20.03-32bit-mingw-64bit-setup.exe\n\u2502       retoolkit_2022.10_setup.exe\n\u2502\n\u2514\u2500\u2500\u2500IDAPRO\n    \u251c\u2500\u2500\u2500 (arquivos do IDA)\n"))))),(0,i.kt)("p",null,"Agora que est\xe1 tudo no jeito, basta buildar e executar a m\xe1quina:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"malboxes build win10_x64_analyst\nmalboxes spin win10_x64_analyst rev\nvagrant up\n")),(0,i.kt)("p",null,"Caso precise desabilitar o defender, basta executar o script em ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Tools\\disable_defender")," dentro da m\xe1quina provisionada."),(0,i.kt)("p",null,"Obrigado por ler!"))}b.isMDXComponent=!0}}]);