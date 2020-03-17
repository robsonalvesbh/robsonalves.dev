---
title: Criando um Pixel Tracking com PHP
description: >-
  Pixel Tracking é um técnica muito utilizada para rastrear emails e saber
  quando eles forem abertos.
date: 2017-07-21T22:52:42.000Z
tags:
  - PHP
thumbnail: assets/img/conversion-tracking-adwords-analytics.png
image: assets/img/conversion-tracking-adwords-analytics.png
---
Pixel Tracking é uma técnica amplamente utilizada para rastrear atividades de usuários na internet. 

Você já notou que sempre existe um anúncio que "segue" você praticamente em qualquer site que você visita? Se já, provavelmente você foi *"vítima"* de um pixel tracking, essa tecnica é popularmente conhecida como remarketing. 

Com ele é possível medir a taxa de abertura de emails, contabilizar o número de visitantes em um site, monitorar o número de conversões de uma campanha de marketing, entre outras utilidades.

Esta técnica é utilizada por grandes empresas como [Facebook](https://www.facebook.com/business/a/online-sales/conversion-tracking) e [Google](https://developers.google.com/analytics/resources/concepts/gaConceptsTrackingOverview?hl=pt-br).

![Um olho olhando atentamente a métricas](assets/img/conversion-tracking-adwords-analytics.png "Tracking")

## A Técnica

A técnica, se baseia literalmente em incluir uma imagem imperceptível para o usuário no local em que você deseja monitorar, seja no corpo do email ou na página da campanha. Essa imagem normalmente possui tamanho de `1×1 pixel`, daí vem o nome da técnica.

Uma vez incluído, quando o usuário abre a página que contém o pixel, o browser realiza uma requisição ao servidor para baixar o pixel anexado, possibilitando então a coleta de dados.

## Preparando o pixel com PHP

Precisamos criar um **endpoint** em nosso servidor que receberá a requisição do pixel, coletará os dados recebidos de acordo com a sua regra de negócios e devolverá como resposta um pixel no formato `.gif`.

No início do arquivo `.php`, é necessário utilizar 2 funções nativas do PHP que irá informar ao browser que a resposta da requisição será uma imagem no formato `.gif`.

```php
<?php

  /**
  * Define que o retorno será um arquivo .gif
  **/
  header("Content-Type: image/gif");

  /**
  * lê o pixel que deverá está no mesmo diretório que seu arquivo .php,
  * caso não esteja, informe o caminho correto do arquivo abaixo
  **/
  readfile('pixel.gif');

  /**
  * Daqui para baixo, você pode utilizar o código PHP que quiser
  **/
```

Faça o download do [Pixel](/assets/img/pixel.gif)

Veja como é simples fazer a inclusão do pixel na página que você deseja rastrear. Repare que incluí 3 parâmetros de exemplo na url, *email*, *parametro2* e *parametro3*.

```html
<img
  src="http://<seu_site.com>/pixelTracking.php?email=nome@site.com&parametro2=xxx&parametro3=xpto"
/>
```

Você pode incluir quantos parâmetros desejar, mas lembre-se, como é uma requisição do tipo `GET`, os parâmetros vão direto na URL, então nada de passar parâmetros sensíveis, como *senhas* por exemplo. 

Caso necessário, você deve criptografar estes valores.

## Limitações desta técnica

Como nem tudo são flores, dependendo da forma que você utilizar essa técnica, você poderá não ter uma precisão 100%, devido algumas regras de segurança presentes nos servidores de email ou se o usuário utilizar algum plugin, como: [PixelBlock](https://chrome.google.com/webstore/detail/pixelblock/jmpmfcjnflbcoidlgapblgpgbilinlem).

**Por exemplo:** Você inclui o pixel tracking em um email e o envia para um cliente, caso o servidor de email dele (Gmail, Hotmail, *WhateverMail*), esteja configurado para bloquear imagens do corpo do email, isso consequentemente bloqueará o seu pixel tracking, e o mesmo só funcionará caso o cliente desbloqueie as imagens.

## Conclusões

Apesar das limitações, a simplicidade de uso faz desta técnica um recurso muito poderoso e ele vem sendo amplamente utilizada por empresas, nos mais diversos contextos.

Vale ressaltar que existe mais de uma forma de criar o pixel tracking, utilizei a forma mais simples possível para melhorar o entendimento e também para formentar a discussão desta técnica, que apesar de tudo, não é tão popular.

Você conheçe outra forma de criar o pixel tracking? Deixe seu comentário.