---
title: Creating Malboxes VMs
authors: imgodes
description: How to provision virtual machines for reverse engineering study.
image: ./robot.png
date: 2023-04-23 12:52:00 -0300
tags: [reverse engineering,infrastructure,malboxes]
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 4
keywords: [malboxes,ida pro,retoolkit]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

How to provision virtual machines (VMs) for malware and reverse engineering purposes.

![robot](./robot.png)

<!--truncate-->

# Introduction


Made by GoSecure, Malboxes is a tool meant to help to building safe and featureful Windows VMs. Create VMs, destroy them, and building them again could be pretty easy with Malboxes. I felt this need during the [Rafael Sousa's](https://www.instagram.com/hackingnaweboficial/) course.

- [Malboxes repository](https://github.com/GoSecure/malboxes)
- [Introducing Malboxes: a Tool to Build Malware Analysis Virtual Machines](https://www.gosecure.net/blog/2017/02/16/introducing-malboxes-a-tool-to-build-malware-analysis-virtual-machines/)

# Requirements
List of needed tools:
- Vagrant
- Packer
- Git 
- Python pip
- Virtualbox 

# Installation

The [official repository](https://github.com/GoSecure/malboxes#installation) already has a step-by-step installation tutorial. So, I'll just talk about my customizations I've made to study Assembly, C and eventually reverse engineering. 

I created a directory called `REV` and this directory will be my working diretory and where I'll put all the needed files.

:::info My softwares
For my use, I like having these programs below available: 
- [IDA Pro 0800 (Reverse Engineer)](https://hex-rays.com/ida-pro/)
- [Masm 32 (Assembly)](https://www.masm32.com/download.htm)
- [Retoolkit (Reverse Engineer)](https://github.com/mentebinaria/retoolkit)
- [CodeBlocks (C Compiler/IDE)](https://www.codeblocks.org/)
:::

Now, I execute the command `vagrant init` that inicializes the Vagrant environment into the current diretory by creating a file called `Vagrantfile`, if it doesn't exist.

```bash
vagrant init
```

And then, the directory's structure should look like this: 
```txt title='Directory's Structure'
REV
├── IDAPRO
│   ├── (IDA Files)
├── tools
│   ├── codeblocks-20.03-32bit-mingw-64bit-setup.exe
│   ├── masm32.exe
│   └── retoolkit_2022.10_setup.exe
└── Vagrantfile
```

For me, it's enough just to leave the executable files available for installation, because not always I dont always need all these things installed.

:::info Automating
Maybe you want to automate the VMs creation. You can do it by using Vagrant, and then, every time that you use the `vagrant up` command, the Vagrant engine will setup the VM, according to what you set.
:::

## VM Provisioning

The command `malboxes build win10_x64_analyst`, reads the configuration file located in `/home/USERNAME/.config/malboxes/config.js` to get the user settings adopted to create the VM, and they can be used to include a path that contains your desired tools.

```js title='config.js'
"ida_path": "/home/USERNAME/Downloads/IDAPRO",
"tools_path": "/home/cherno/Downloads/Tools",
```

:::info The easier way
There is another way. By default, when provisioning a VM, the current diretory will be synchronized with a directory inside the VM, so just keep the executables in the same folder used to provision the machine.

In my case, it is the diretory called `REV` that I had created before (like previously described at the [Installation](#installation) step).

Below we have those Linux (hosting machine) and Windows (virtual machine) perspective, and how the directory structure should be look like. 

<Tabs className="unique-tabs">
<TabItem value="linuxhost" label="Linux Host">

```txt
.
├── IDAPRO
├── tools
└── Vagrantfile
```

</TabItem>
<TabItem value="windowsvm" label="Windows VM">

```cmd
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

</TabItem>
</Tabs>

:::

Now that we already setup everything, let's just build and execute the VM.

```bash
malboxes build win10_x64_analyst
malboxes spin win10_x64_analyst rev
vagrant up
```

:::danger
Remember to execute this step in the same directory that you used the command `vagrant init`
:::

In case you need to disable the Windows Defender, just execute the script in the directory `C:\Tools\disable_defender` inside the created VM.

---

<center>
I hope I helped you!

Good luck in your security journey!
</center>

---