---
title: '#1 - Conhecendo um pouco mais sobre Serverless'
description: 'O nome Serverless é um tanto quando contraditório,'
date: '2020-03-18 10:09:01'
tags:
  - Serverless
  - AWS Lambda
image: assets/img/0_i9jz_tck8frzyao8.png
---
![Meme do batman, Robin disse que existem servidores no Serverless e o Batman bate na cara dele falando que esse não é o ponto](assets/img/0_i9jz_tck8frzyao8.png "Meme batman")

O nome Serverless é um tanto quando contraditório, e na maioria das vezes acabam gerando confusão, mas uma coisa você pode ter certeza ainda não conseguiram eliminar a necessidade de se ter um servidor. 

Uma analogia que gosto bastante e que exemplifica bem este conceito é de que Servereless é como o Wifi, mesmo que você esteja se conectando a uma rede sem fio, ainda há muitos cabos envolvidos, você só não precisa se preocupar com eles.

Antes de entrarmos em mais detalhes sobre Serverless, vamos ver brevemente como  nossa infra e nossa responsabilidade evoluiu até chegarmos a neste conceito.

## Evolução do Serverless

![serverless evolucao](assets/img/serverless-evolution.png "serverless evolucao")

### Infraestrutura In-house

Até pouco tempo atrás era comum empresas comprarem seus equipamentos e montarem seus próprios servidores para hospedar a suas aplicações, isso trazia a responsabilidade de gerenciar o hardware e os softwares do servidor, o custo de manter tudo isso para aplicações com um volume alto de tráfego, é bastante caro.

Hoje em dia não é tão comum, mas ainda é possível encontrar empresas que utilizam este tipo de infraestrutura, se não me engano uma parte da globo.com ainda mantem a sua Infraestrutura In-house.

Se você trabalha na globo.com deixe um comentário nos contando os prós e contras deste tipo de infra.

### Clouds - Computação nas nuvens

Com a evolução das máquinas virtuais surgiram as famigeradas nuvens (Clouds) que retiraram da gente a necessidade de gerenciar o hardware do servidor, mas ainda sim precisamos nos preocupar com provisionamento do software de nossos servidores, a um preço bem mais baixo.

Hoje a maiorias das aplicações web estão em clouds.

### Serverless

O conceito Serverless surgiu com o propósito de abstrair completamente a infraestrutura do lado do servidor, não precisamos mais nos preocupar com software e muito menos com o hardware que está rodando nossa aplicação, com a infraestrutura transparente podemos focar em nossa aplicação e em nossas regras de negocio.

Diferentemente das arquiteturas anteriores no Serverless você só paga quando sua aplicação é executada e isso é um dos principais motivos por ele ter se popularizado.

## Tipos de Serverless

Serverless é uma categoria e existem mais de um tipo de serverless que são BaaS e FaaS.

### BaaS - Backend as a Service

### FaaS — Function as a Service

### Série de artigos sobre Serverless 

Este artigo  artigos vou focar em Faas mais especificamente no AWS Lambda, 

Quais são as suas principais dúvidas sobre Serverless? Por favor, deixe nos comentários!