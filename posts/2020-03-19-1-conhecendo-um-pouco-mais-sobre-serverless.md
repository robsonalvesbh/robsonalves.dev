---
title: '#1 - Conhecendo um pouco mais sobre Serverless'
description: 'O nome Serverless é um tanto quando contraditório,'
date: '2020-03-18 10:09:01'
tags:
  - Serverless
  - AWS Lambda
image: assets/img/0_i9jz_tck8frzyao8.png
---
O nome Serverless é um tanto quando contraditório, e na maioria das vezes acabam gerando confusão, mas uma coisa podemos ter certeza ainda não conseguiram eliminar a necessidade de se ter um servidor. 

![Meme do batman, Robin disse que existem servidores no Serverless e o Batman bate na cara dele falando que esse não é o ponto](assets/img/0_i9jz_tck8frzyao8.png "Meme batman")

Uma analogia que eu gosto bastante e que exemplifica bem este conceito é que Servereless é como o Wifi, mesmo que você esteja se conectando a uma rede sem fio, ainda há muitos cabos envolvidos, você só não precisa se preocupar com eles.

A ideia por trás do Serverless é abstrair o gerenciamento dos servidores eliminando a necessidade de fazermos gestão do software e do hardware do servidor, o provedor se encarrega de gerenciar dinamicamente a alocação de recursos e o provisionamento dos servidores, nos deixando livres para focarmos em nossa aplicação sem se preocupar com a infraestrutura.

## Evolução do Serverless

Antes de fazermos um deep dive em Serverless, vamos ver brevemente como  nossa infra e nossa responsabilidade evoluiu até chegarmos a neste conceito.

![](assets/img/serverless-evolution.png "serverless evolucao")

### Infraestrutura In-house

Até pouco tempo atrás era comum empresas comprarem seus equipamentos e montarem seus próprios servidores para hospedar a suas aplicações, isso trazia a responsabilidade de gerenciar o hardware e os softwares do servidor, o custo de manter tudo isso para aplicações com um volume alto de tráfego, é bastante caro.

Hoje em dia não é tão comum, mas ainda é possível encontrar empresas que utilizam este tipo de infraestrutura, se não me engano uma parte da globo.com ainda mantem a sua Infraestrutura In-house.

Se você trabalha na globo.com deixe um comentário nos contando os prós e contras deste tipo de infra.

### Clouds - Computação nas nuvens

Com a evolução das máquinas virtuais surgiram as famigeradas nuvens (Clouds) que retiraram da gente a necessidade de gerenciar o hardware do servidor, mas ainda sim precisamos nos preocupar com provisionamento do software de nossos servidores, a um preço bem mais baixo.

Hoje a maiorias das aplicações web estão em clouds.

### Serverless 

O conceito Serverless surgiu com o propósito de abstrair completamente a infraestrutura do lado do servidor, nos deixando livres para focarmos em nossa aplicação e em nossas regras de negocio.

Mas onde está o servidor, não sabemos onde está esse servidor.

Serverless é uma categoria e existem mais de um tipo de serverless que são Baas e Faas

Nessa serie de artigos vou focar mais em Faas mais especificamente no aws lambda.

### FaaS — Function as a Service Beneficios do serverless

No servers to provision or manage Scales with usage Pay-only usage Built-in availability and fault tolerance



Quais são as suas principais dúvidas sobre Serverless? Por favor, deixe nos comentários!
