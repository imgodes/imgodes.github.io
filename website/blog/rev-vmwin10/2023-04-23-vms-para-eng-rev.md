---
title: Máquinas virtuais para engenharia reversa (Windows) 
authors: imgodes
img_path: /assets/img/rev-vmwin10/
date: 2023-04-23 12:52:00 -0300
categories: [Cybersecurity, Engenharia Reversa]
tags: [prática,tutorial]
math: true
mermaid: true
---

Como provisionar máquinas virtuais para estudo de malwares e engenharia reversa.

A GoSecure possui uma ferramenta voltada para análise de malware e engenharia reversa chamada Malboxes, com ela podemos provisionar VMs Windows, destruí-las e faze-las do zero de novo bem facilmente. Vi essa necessidade durante o curso do [Rafael Sousa](https://www.instagram.com/hackingnaweboficial/), e outros estudos semelhantes.

- [Repositório do Malboxes](https://github.com/GoSecure/malboxes)
- [Introducing Malboxes: a Tool to Build Malware Analysis Virtual Machines](https://www.gosecure.net/blog/2017/02/16/introducing-malboxes-a-tool-to-build-malware-analysis-virtual-machines/)


# Requisitos
- Vagrant
- Packer
- Git 
- Python pip
- Virtualbox 

# Instalação
A forma de instalação já está no [repositório oficial](https://github.com/GoSecure/malboxes#installation) deles, portanto vou apenas falar das minhas customizações feitas para estudar Assembly, C, e eventualmente, engenharia reversa.

Criei uma pasta chamada REV, para colocar tudo o que preciso.

Eu instalo os seguintes programas:
- [IDA Pro 0800 (Engenharia Reversa)](https://hex-rays.com/ida-pro/)
- [Masm 32 (Assembly)](https://www.masm32.com/download.htm)
- [Retoolkit (Engenharia Reversa)](https://github.com/mentebinaria/retoolkit)
- [CodeBlocks (C)](https://www.codeblocks.org/)

Então a estrutura ficou assim: 
```
REV
├── IDAPRO
│   ├── (arquivos do IDA)
├── tools
│   ├── codeblocks-20.03-32bit-mingw-64bit-setup.exe
│   ├── masm32.exe
│   └── retoolkit_2022.10_setup.exe
└── Vagrantfile
```
{: file='/home/gabriel/Projects/REV/'}

Na verdade eu deixo os executáveis disponíveis para uso, nem sempre eu preciso de todas essas ferramentas instaladas.

# Provisionando a VM

O comando `malboxes build win10_x64_analyst`, le o arquivo de configuração disponível em `/home/USERNAME/.config/malboxes/config.js`{: .filepath} para saber quais as preferencias do usuário para a criação da máquina. Ele pode ser editado da seguinte forma a fim de definir os path das ferramentas:
```
"ida_path": "/home/USERNAME/Downloads/IDAPRO",
"tools_path": "/home/cherno/Downloads/Tools",
```
{: file='config.js'}

Mas temos uma segunda opção; por padrão quando provisionarmos a nossa VM, o diretório atual será sincronizado com um diretório dentro da VM, logo, basta manter os executáveis na mesma pasta que usaremos para provisionar a máquina. Por exemplo, essa estrutura:

{: file='visão do linux'}

Será mapeada para essa:
```
C:\Users\malboxes\Desktop\host>tree /F
Folder PATH listing
Volume serial number is 0C1D-FBA3
C:.
│   Vagrantfile
│
├───tools
│       masm32.exe
│       codeblocks-20.03-32bit-mingw-64bit-setup.exe
│       retoolkit_2022.10_setup.exe
│
└───IDAPRO
    ├─── (arquivos do IDA)
```
{: file='visão do windows'}

Agora que está tudo no jeito, basta buildar e executar a máquina:
```shell
malboxes build win10_x64_analyst
malboxes spin win10_x64_analyst rev
vagrant up
```

Caso precise desabilitar o defender, basta executar o script em `C:\Tools\disable_defender` dentro da máquina provisionada.

done! :)