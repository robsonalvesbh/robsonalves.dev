---
title: Depure Webhooks localmente com o RequestBin
description: >-
  Entenda o que é um Webhook e saiba como depurá-lo localmente em seu ambiente
  de desenvolvimento utilizando o RequestBin.
date: '2020-04-21 09:03:16'
tags:
  - Quick Tip
  - Debug
  - Tools
image: assets/img/screen-shot-2020-04-08-at-00.34.39.png
---
Quando você vai desenvolver uma [integração com algum Gateway de pagamento](https://docs.pagar.me/docs/overview-postback-url) é comum você precisar cadastrar um endpoint (URL) para que quando houver alguma mudança no status da transação o Gateway possa lhe enviar uma requisição notificando a alteração.

Essa abordagem é bastante interessante porque elimina a necessidade de você ter que ficar fazendo requisições na API do Gateway para verificar se houve alguma mudança no status da transação. Essa abordagem é popularmente conhecida como Postback ou Webhook.

Citei no exemplo acima Gateway de pagamento, mas essa abordagem é amplamente utilizada e é bem fácil se deparar com ela no dia a dia, veja outros exemplos de integrações que utilizam Webhook:

* [Slack](https://api.slack.com/legacy/custom-integrations/outgoing-webhooks)
* [Facebook](https://developers.facebook.com/docs/marketing-api/guides/lead-ads/quickstart/webhooks-integration?locale=pt_BR)
* [Github](https://developer.github.com/webhooks/)
* [Hotmart](https://atendimento.hotmart.com.br/hc/pt-br/articles/360001491352-Como-configurar-sua-API-atrav%C3%A9s-do-Webhook-Postback-)

Um grande problema desta abordagem é que mesmo em ambiente de desenvolvimento será necessário cadastrar um endpoint público para que você possa receber o Webhook e testar a sua integração.

Publicar um endpoint em produção somente para conseguir receber o Webhook e validar a sua integração, além de não ser uma boa prática, dá um puta trabalho porque a cada correção que você fizer no seu endpoint você terá de repetir o processo de deploy. E é aí que entra o RequestBin.

## RequestBin

O RequestBin disponibiliza um endpoint para que você possa cadastrá-lo no serviço que irá lhe enviar os Webhooks e ainda lhe fornece uma dashboard para que você possa acompanhar em real time as requisições recebidas.

Para utilizar é bastante simples, acesse o [site](https://requestbin.com/) clique em Create RequestBin e faça login com o Google ou Github, ao logar você será redirecionado para a dashboard e seu endpoint aparecerá em destaque, como na imagem abaixo:

![Endpoint exibido no painel do requestbin](assets/img/screen-shot-2020-04-08-at-00.37.00.png "Endpoint exibido no painel do requestbin")

Copie o endpoint e cadastre-o no serviço desejado, solicite o postback, assim que a requisição for enviada irá aparecer no painel do requestBin, como na imagem abaixo: 

![Painel do requestbin exibindo os dados da requisição recebida](assets/img/screen-shot-2020-04-08-at-00.34.39.png "Painel do requestbin exibindo os dados da requisição recebida")

A dashboard nos fornece todas as informações necessárias para analisarmos o postback, como:

* Rota
* A HTTP Method
* Headers
* Body  

Com os dados da requisição em mãos, basta copiar os parâmetros da requisição recebida e utilizar o postman para disparar a requisição para o seu endpoint local.

Dessa forma sempre que você precisar testar sua aplicação localmente recebendo um postback, você poderá utilizar o RequestBin como intermediador.

**Quick Tips:** Como o próprio nome sugere, a ideia dessa série é que sejam posts rápidos com dicas de ferramentas e outras coisas úteis que eu encontre por aí. =)