---
date: 2017-07-30 15:06:08
title: "Dicas para melhorar a sua experiência com o terminal do macOS"
description: "Hoje em dia estamos passando cada vez mais tempo trabalhando no terminal, seja para utilizar o Git, Gulp, Composer, entre outras 'zilhões' de ferramentas. Então nada melhor que utilizarmos alguns recursos para melhorar a nossa experiência e ganharmos agilidade para aumentar a nossa produtividade ao utilizá-lo."
tags: [Terminal, Git]
---

Hoje em dia estamos cada vez mais utilizando o terminal em nosso dia-a-dia, seja para utilizar o _Git_, _Docker_, _Composer_,
entre outras "zilhões" de ferramentas. Então por que não utilizarmos alguns recursos que irá melhorar a nossa experiência
e ainda ganharmos agilidade aumentando a nossa produtividade ao utilizá-lo.

## Temas customizados para terminal 

Podemos deixar o terminal um pouco mais 'estiloso' instalando um tema. Existem vários temas no github, mas o meu preferido 
é o [Piperita](https://github.com/jacobtomlinson/terminal-piperita), além dele ser clean, ainda possui cores suaves que me agradam. 

### Instalando temas no Terminal

Para instalar o tema é bastante simples, execute o comando abaixo para clonar o repositório do tema em seu computador:

```bash
git clone https://github.com/jacobtomlinson/terminal-piperita
```

Caso você não tenha o `git` instalado em sua máquina <strike>você está vacilando hein!</strike> [Clique aqui para fazer o download.](https://github.com/jacobtomlinson/terminal-piperita/archive/master.zip)

Abra o terminal, acesse no menu superior `Terminal > Preferences > Profiles`, agora na parte de baixo da janela, clique na 
engrenagem e escolha `Import`, selecione o arquivo `Piperita.terminal` dentro de `terminal-piperita > schemes > Terminal`, 
o tema **piperita** deverá aparecer na lista, agora clique em cima dele e ao lado da engrenagem clique em `default`.

Reinicie o terminal e o novo tema deverá aparecer.

## Criando alias (Atalhos)

`Alias` são atalhos para você executar comandos no terminal, e eles são muito úteis para aumentar a produtividade. Se você
executa um comando repetidas vezes, provavelmente um alias poderá te ajudar.

### Sintaxe do alias

A sintaxe dos alias são bastantes simples:

```bash
alias [Nome]="[Comando bash]"
```

<small>**OBS**: Não coloque os parenteses e o comando deverá estar entre aspas. </small>

### Mãos na massa!

Abra o terminal e execute o comando `nano ~/.bash_profile`, no final do arquivo crie seus `alias`, pressione `ctrl + o` para salvar
e depois `ctrl + x` para sair, reinicie o seu terminal ou execute o comando `source ~/.bash_profile` e desfrute dos seus alias.

### Exemplo

```bash
alias blog="cd /var/www/robson__; npm run gulp"
```

Após criado este `alias`, basta eu executar o comando `blog` no terminal, e já mudo para o diretório local do blog e 
em seguinda é executado o `gulp`. Fantástico não?

<!-- ![Criando Alias](/assets/img/posts/criando_alias.gif) -->

## Atalhos do Terminal

O terminal apresenta uma série de atalhos muito úteis e domina-los é importante para aumentar a nossa produtividade no dia a dia.

| Atalho         | Função                                    |
| -------------- | ----------------------------------------- |
| **Ctrl + A**   | Ir para o início da linha atual           |
| **Ctrl + E**   | Ir para o fim da linha atual              |
| **Ctrl + K**   | Apaga tudo o que estiver após o cursor    |
| **Ctrl + U**   | Apaga tudo o que estiver antes do cursor  |
| **Ctrl + W**   | Apaga a palavra antes do cursor           |
| **Ctrl + L**   | Limpa todo o buffer do terminal atual     |
| **Ctrl + R**   | Busca comandos previamente utilizados     |
| **Ctrl + C**   | "Mata" a linha atual                      |
| **Option + →** | Navegar inicio próxima palavra a direita  |
| **Option + ←** | Navegar inicio próxima palavra a esquerda |

Encontrei essa tabelinha bem completa no blog do [Nando Vieira](https://nandovieira.com.br/atalhos-no-terminal-e-outros-programas-do-mac-os-x),
alguns comandos eu ainda não conhecia.

<small>**OBS**: A tecla do atalho é `Ctrl` mesmo e não `Command`. </small>

Você conhece algum outro atalho? deixe um comentário ai embaixo.

## Git, exibindo o nome da Branch Atual 

Quem está acostumado a trabalhar com projetos que possui muitas branchs, sabe o cuidado que temos que ter para não fazer
coisas na branch errada e é muito comum ficar executando `git branch` ou `git status` para saber em qual branch estamos. 

Agora imagina se essa informação aparecesse na frente de nosso usuário no terminal, sem a necessidade de rodar nenhum comando 
para saber a branch atual, fantástico não?!

![branch na frente do nome terminal](/assets/img/posts/branch na frente do nome terminal.png)

Abra novamente o arquivo `~/.bash_profile` e inclua as linhas abaixo no final do arquivo.

```bash
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\u@\[\033[0;34m\]\W\[\033[32m\]\$(parse_git_branch)\[\033[0m\] $ "
```

Salve e execute novamente o comando `source ~/.bash_profile`. O nome aparecerá quando o diretório atual for um repositório git.

## Conclusão

É isso aí galera, Era para ser um post rápido, mas acabei me empolgando e escrevendo mais do que o esperado. 
Espero que vocês tenham curtido o post e a partir de agora passem a utilizar o terminal com muito mais facilidade e eficiência.


