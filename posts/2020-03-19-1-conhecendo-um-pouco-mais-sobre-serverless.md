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

O nome Serverless é um tanto quando contraditório, e na maioria das vezes acaba gerando confusão, mas uma coisa você pode ter certeza ainda não conseguiram eliminar a necessidade de se ter um servidor. 

Uma analogia que gosto bastante e que exemplifica bem este conceito é de que Servereless é como o Wifi, mesmo que você esteja se conectando a uma rede sem fio, ainda há muitos cabos envolvidos, você só não precisa se preocupar com eles.

Para começar, veremos brevemente como a infraestrutura dos servidores e nossa responsabilidade sobre os Servidores evoluiu até chegarmos a neste conceito e prós e cróntra dessa tecnologia.

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

Serverless é um modelo de Infraestrutura e portanto existem mais de um tipo e eles **BaaS** e **FaaS**.

### BaaS - Backend as a Service

Imagine que você vai iniciar o desenvolvimento de um aplicativo mobile e vai precisar implementar login com facebook, acessar banco de dados e armazenar arquivos, agora e se eu falasse que todas essas features já estão implementadas do lado do servidor e que estão disponíveis através de uma API simples de integrar?

A ideia do BaaS é exatamente essa, fornecer uma grande variedade de recursos em forma de APIs para que você poder utilizar em suas aplicações, seja web ou mobile, sem precisar se preocupar com a implementação e nem com a infraestrutura.

Um dos mais populares serviços de BaaS hoje é o [Firebase](https://firebase.google.com/) do google.

### FaaS — Function as a Service

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod laoreet imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies, ipsum eu aliquet varius, nisi ex feugiat leo, in lacinia justo odio at dui. Duis vitae aliquam velit. Donec molestie tincidunt leo. Vestibulum id neque in neque imperdiet facilisis. Fusce a lectus ante. Vivamus blandit nunc et mollis aliquam.

## Vantagens e Desvantagens

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod laoreet imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies, ipsum eu aliquet varius, nisi ex feugiat leo, in lacinia justo odio at dui. Duis vitae aliquam velit. Donec molestie tincidunt leo. Vestibulum id neque in neque imperdiet facilisis. Fusce a lectus ante. Vivamus blandit nunc et mollis aliquam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod laoreet imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies, ipsum eu aliquet varius, nisi ex feugiat leo, in lacinia justo odio at dui. Duis vitae aliquam velit. Donec molestie tincidunt leo. Vestibulum id neque in neque imperdiet facilisis. Fusce a lectus ante. Vivamus blandit nunc et mollis aliquam.

## Série de artigos sobre Serverless

Este artigo da inicio a uma serie de outros artigos que vou escrever sobre Serverless com o foco em FaaS mais especificamente AWS Lambda que é o tenho mais experiência, segue alguns outros assuntos que penso em abordar por aqui:

* AWS Lambda
* Framework Serverless

  Dentro deste contexto, quero fazer pocket posts (posts rápidos) demonstrando como configurar pelo arquivo de configuração que o framework fornece alguns recursos da AWS, segue alguns exemplos:

  * SNS, SQS, S3
  * API Gateway
  * VPC
  * CloudWatch Events
  * CloudWatch Alerts
  * SNS Filtering
* Boas praticas de organização de código entre os lambdas de aplicações complexas

Deixe um comentário deixando suas principais dúvidas sobre Serverless ou tópicos que você gostasse que eu abordasse por aqui!