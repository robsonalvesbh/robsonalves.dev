---
title: Simule Webhooks localmente com o RequestBin
description: Simule Webhooks localmente com o RequestBin
date: '2020-04-07 09:03:16'
tags:
  - Quick Tip
  - Debug
image: assets/img/screen-shot-2020-04-08-at-00.34.39.png
---
Quando você vai desenvolver uma integração com algum gateway de pagamento é comum você precisar cadastrar uma endpoint (URL) para que quando houver alguma mudança no status da transação o gateway possa lhe enviar uma request notificando, veja aqui um exemplo. 

Essa abordagem é bastante interessante porque elimina a necessidade de você ter de ficar fazendo consultas para verificar se houve alguma mudança de status. Essa prática é amplamente utilizada e popularmente conhecida como Postback ou Webhook.

Um grande problema dessa abordagem é que mesmo em ambiente de desenvolvimento é necessário informar um endpoint público para que assim você possa receber o Postback e conseguir inspecionar o conteúdo do payload que chegará em sua aplicação.

Subir um endpoint para produção só para ter um endpoint publico para poder cadastrar no serviço de postback e 

RequestBin

O RequestBin é uma ferramenta bastante útil quando você precisa trabalhar com Postbacks, ele disponibiliza um endpoint para que você possa utilizá-lo para cadastrar no serviço que irá lhe enviar os postbacks e ainda lhe fornece uma dashboard para que você possa acompanhar em real time os postbacks que chegam.

Para utilizar é bastante simples, acesse o site clique em Create Request Bin e faça login com o Google ou Github, ao logar você será redirecionado para a dashboard e seu endpoint aparecerá em destaque, como na imagem abaixo:

Copie o endpoint e cadastre-o no serviço desejado, solicite o postback, assim que a requisição for enviada irá aparecer no painel do requestBin, como na imagem abaixo:

A dashboard nos fornece todas as informações necessárias para analisarmos o postback, como:

* Rota
* A HTTP Method
* Headers
* Body  

Com os dados da requisição em mãos, basta copiar os parâmetros da requisição recebida e utilizar o postman para disparar a requisição para o seu endpoint local.

Dessa forma sempre que você precisar testar sua aplicação localmente recebendo um postback, você poderá utilizar o RequestBin como intermediador.

**Quick Tips:** Como o próprio nome sugere, a ideia dessa série é que sejam posts rápidos com dicas de ferramentas e outras coisas úteis que eu encontre por aí. =)

