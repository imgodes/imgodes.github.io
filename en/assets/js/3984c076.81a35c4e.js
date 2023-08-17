"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5726],{2180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),o=a(4866),l=a(5162);a(3901);const r={title:"Creating Malboxes VMs",authors:"imgodes",description:"How to provision virtual machines for reverse engineering study.",image:"./robot.png",date:"2023-04-23 12:52:00 -0300",tags:["reverse engineering","infrastructure","malboxes"],hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:4,keywords:["malboxes","ida pro","retoolkit"]},s="Introduction",m={permalink:"/en/blog/2023/04/23/malboxes/malboxes-vms",editUrl:"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/malboxes/2023-04-23-malboxes-vms.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/malboxes/2023-04-23-malboxes-vms.md",title:"Creating Malboxes VMs",description:"How to provision virtual machines for reverse engineering study.",date:"2023-04-23T12:52:00.000Z",formattedDate:"April 23, 2023",tags:[{label:"reverse engineering",permalink:"/en/blog/tags/reverse-engineering"},{label:"infrastructure",permalink:"/en/blog/tags/infrastructure"},{label:"malboxes",permalink:"/en/blog/tags/malboxes"}],readingTime:2.81,hasTruncateMarker:!1,authors:[{name:"Godes",title:"Cyber Defense Analyst",url:"https://www.linkedin.com/in/gguedescruz/",imageURL:"https://avatars.githubusercontent.com/u/52048434?v=4",key:"imgodes"}],frontMatter:{title:"Creating Malboxes VMs",authors:"imgodes",description:"How to provision virtual machines for reverse engineering study.",image:"./robot.png",date:"2023-04-23 12:52:00 -0300",tags:["reverse engineering","infrastructure","malboxes"],hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:4,keywords:["malboxes","ida pro","retoolkit"]},prevItem:{title:"Purple Team - Metasploitable3 & DetectionLab",permalink:"/en/blog/2023/04/27/metasploitable-detec/metasploitable3-detectionlab"},nextItem:{title:"Seu site pessoal gratis",permalink:"/en/blog/2023/02/22/intro-jekyll/introducao-jekyll"}},u={image:a(1077).Z,authorsImageUrls:[void 0]},d=[{value:"VM Provisioning",id:"vm-provisioning",level:2}],p={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to provision virtual machines (VMs) for malware and reverse engineering purposes."),(0,i.kt)("p",null,"Made by GoSecure, Malboxes is a tool meant to help to building safe and featureful Windows VMs. Create VMs, destroy them, and building them again could be pretty easy with Malboxes. I felt this need during the ",(0,i.kt)("a",{parentName:"p",href:"https://www.instagram.com/hackingnaweboficial/"},"Rafael Sousa's")," course."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoSecure/malboxes"},"Malboxes repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gosecure.net/blog/2017/02/16/introducing-malboxes-a-tool-to-build-malware-analysis-virtual-machines/"},"Introducing Malboxes: a Tool to Build Malware Analysis Virtual Machines"))),(0,i.kt)("h1",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"List of needed tools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vagrant"),(0,i.kt)("li",{parentName:"ul"},"Packer"),(0,i.kt)("li",{parentName:"ul"},"Git "),(0,i.kt)("li",{parentName:"ul"},"Python pip"),(0,i.kt)("li",{parentName:"ul"},"Virtualbox ")),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoSecure/malboxes#installation"},"official repository")," already has a step-by-step installation tutorial. So, I'll just talk about my customizations I've made to study Assembly, C and eventually reverse engineering. "),(0,i.kt)("p",null,"I created a directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"REV")," and this directory will be my working diretory and where I'll put all the needed files."),(0,i.kt)("admonition",{title:"My softwares",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For my use, I like having these programs below available: "),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hex-rays.com/ida-pro/"},"IDA Pro 0800 (Reverse Engineer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.masm32.com/download.htm"},"Masm 32 (Assembly)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mentebinaria/retoolkit"},"Retoolkit (Reverse Engineer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.codeblocks.org/"},"CodeBlocks (C Compiler/IDE)")))),(0,i.kt)("p",null,"Now, I execute the command ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant init")," that inicializes the Vagrant environment into the current diretory by creating a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Vagrantfile"),", if it doesn't exist."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant init\n")),(0,i.kt)("p",null,"And then, the directory's structure should look like this: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:"title='Directory's Structure'",title:"'Directory's","Structure'":!0},"REV\n\u251c\u2500\u2500 IDAPRO\n\u2502\xa0\xa0 \u251c\u2500\u2500 (IDA Files)\n\u251c\u2500\u2500 tools\n\u2502\xa0\xa0 \u251c\u2500\u2500 codeblocks-20.03-32bit-mingw-64bit-setup.exe\n\u2502\xa0\xa0 \u251c\u2500\u2500 masm32.exe\n\u2502\xa0\xa0 \u2514\u2500\u2500 retoolkit_2022.10_setup.exe\n\u2514\u2500\u2500 Vagrantfile\n")),(0,i.kt)("p",null,"For me, it's enough just to leave the executable files available for installation, because not always I dont always need all these things installed."),(0,i.kt)("admonition",{title:"\xa0Automating",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Maybe you want to automate the VMs creation. You can do it by using Vagrant, and then, every time that you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant up")," command, the Vagrant engine will setup the VM, according to what you set.")),(0,i.kt)("h2",{id:"vm-provisioning"},"VM Provisioning"),(0,i.kt)("p",null,"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"malboxes build win10_x64_analyst"),", reads the configuration file located in ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/USERNAME/.config/malboxes/config.js")," to get the user settings adopted to create the VM, and they can be used to include a path that contains your desired tools."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='config.js'",title:"'config.js'"},'"ida_path": "/home/USERNAME/Downloads/IDAPRO",\n"tools_path": "/home/cherno/Downloads/Tools",\n')),(0,i.kt)("admonition",{title:"The easier way",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is another way. By default, when provisioning a VM, the current diretory will be synchronized with a directory inside the VM, so just keep the executables in the same folder used to provision the machine."),(0,i.kt)("p",{parentName:"admonition"},"In my case, it is the diretory called ",(0,i.kt)("inlineCode",{parentName:"p"},"REV")," that I had created before (like previously described at the ",(0,i.kt)("a",{parentName:"p",href:"#installation"},"Installation")," step)."),(0,i.kt)("p",{parentName:"admonition"},"Below we have those Linux (hosting machine) and Windows (virtual machine) perspective, and how the directory structure should be look like. "),(0,i.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"linuxhost",label:"Linux Host",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-txt"},".\n\u251c\u2500\u2500 IDAPRO\n\u251c\u2500\u2500 tools\n\u2514\u2500\u2500 Vagrantfile\n"))),(0,i.kt)(l.Z,{value:"windowsvm",label:"Windows VM",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"C:\\Users\\malboxes\\Desktop\\host>tree /F\nFolder PATH listing\nVolume serial number is 0C1D-FBA3\nC:.\n\u2502   Vagrantfile\n\u2502\n\u251c\u2500\u2500\u2500tools\n\u2502       masm32.exe\n\u2502       codeblocks-20.03-32bit-mingw-64bit-setup.exe\n\u2502       retoolkit_2022.10_setup.exe\n\u2502\n\u2514\u2500\u2500\u2500IDAPRO\n    \u251c\u2500\u2500\u2500 (arquivos do IDA)\n"))))),(0,i.kt)("p",null,"Now that we already setup everything, let's just build and execute the VM."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"malboxes build win10_x64_analyst\nmalboxes spin win10_x64_analyst rev\nvagrant up\n")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Remember to execute this step in the same directory that you used the command ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant init"))),(0,i.kt)("p",null,"In case you need to disable the Windows Defender, just execute the script in the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Tools\\disable_defender")," inside the created VM."),(0,i.kt)("hr",null),(0,i.kt)("center",null,"I hope I helped you!",(0,i.kt)("p",null,"Good luck in your security journey!")),(0,i.kt)("hr",null))}h.isMDXComponent=!0},1077:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/robot-cdcf09851a7be86b729014d6b4e6ada8.png"}}]);