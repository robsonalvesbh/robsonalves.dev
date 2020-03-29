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

### Clouds - Computação nas nuvens

Com a evolução das máquinas virtuais surgiram as famigeradas nuvens (Clouds) que retiraram da gente a necessidade de gerenciar o hardware do servidor, mas ainda sim precisamos nos preocupar com provisionamento do software de nossos servidores, a um preço bem mais baixo.

Hoje a maiorias das aplicações web estão em clouds.

### Serverless

O conceito Serverless surgiu com o propósito de abstrair completamente a infraestrutura do lado do servidor, não precisamos mais nos preocupar com software e muito menos com o hardware que está rodando nossa aplicação, com a infraestrutura transparente podemos concentrar nossos esforços na escrita do código e em gerar valor para o negócio.

Diferentemente das arquiteturas anteriores no Serverless você só paga quando sua aplicação é executada e isso é um dos principais motivos por ele ter se popularizado.

## Tipos de Serverless

Serverless é um modelo de Infraestrutura e portanto existem mais de um tipo e eles **BaaS** e **FaaS**.

### BaaS - Backend as a Service

Imagine que você vai iniciar o desenvolvimento de um aplicativo mobile e vai precisar implementar login com facebook, acessar banco de dados e armazenar arquivos, agora e se eu falasse que todas essas features já estão implementadas do lado do servidor e que estão disponíveis através de uma API simples de integrar?

A ideia do BaaS é exatamente essa, fornecer uma grande variedade de recursos em forma de APIs para que você poder utilizar em suas aplicações, seja web ou mobile, sem precisar se preocupar com a implementação e nem com a infraestrutura.

Um dos mais populares serviços de BaaS hoje é o [Firebase](https://firebase.google.com/) do google.

### FaaS - Function as a Service

Com os sistemas cada vez mais modularizados os Microservices estão por toda parte e  com o surgimento do FaaS começou a se popularizar um novo conceito que são os Nanoservices.

Se imaginarmos uma API no contexto de Nanoservices iriamos ter cada um de seus endpoints separados em uma função, veja como ficaria na imagem abaixo: 

![Nanoservices - representação de vários endpoints e cada um apontando para uma função](assets/img/0_bn6fy8gksznumy1q.png "Nanoservices - representação de vários endpoints e cada um apontando para uma função")

Existem algumas vantagens em utilizar esse tipo de abordagem, como: poder escalar os endpoints separadamente, não gerar concorrência entre os endpoints, se um endpoint "crashar" os outros continuam funcionando, entre outras.

Afinal de contas o que essas funções? Resumidamente, são blocos de códigos que são executadas em [contâiners stateless](https://www.contino.io/insights/stateless-vs-stateful-containers-whats-the-difference-and-why-does-it-matter) sob demanda. Existem diversos tipos de eventos que podem invocar sua função, como: Requisições HTTP, Schedulers e Triggers.

Como é de se imaginar não precisamos nos preocupar com o gerenciamento dos servidores, o escalamento dinâmico, além de ser econômico, pois os provedores cobram somente pelos recursos efetivamente usados, e não pelo tempo ocioso.

Os provedores de FaaS mais populares são:

* AWS Lambda
* Google Cloud Functions
* Microsoft Azure Functions (open source)
* OpenFaaS (open source)

## Vantagens e Desvantagens

Provavelmente você já deve ter percebido algumas vantagens de se utilizar uma arquitetura serverles, mas vamos ver os prós e contras de se utilizar

### Vantagens

* Sem responsabilidade pelo gerenciamento de servidores.
* Escalabilidade gerenciada pelo provedor.
* Com o foco voltado para o código você ganha agilidade e velocidade nas entregas. 
* Sem cobrança pelo tempo ocioso, você paga apenas quando seu código está sendo executado.
* Suporte a várias linguagens de programação.

### Desvantagens

* Bloqueio com provedor: Migrar sua aplicação para outro provedor poderá ser uma dor de cabeça.
* Por ser limitações de FaaS, falarei no artigo sobre AWS Lambda sobre outras desvantagens como:
  * Limite do tempo de execução
  * Tempo de inicialização (latência)

## Série de artigos sobre Serverless

Para finalizar, este artigo da inicio a uma serie de outros que vou escrever sobre Serverless com o foco em FaaS, mais especificamente falarei sobre [AWS Lambda](https://aws.amazon.com/pt/lambda/) pois é o que tenho mais experiência, segue alguns tópicos que penso em abordar por aqui:

* AWS Lambda (Como funciona, preços e exemplos de aplicações)
* Framework Serverless

  Dentro deste contexto, quero fazer pocket posts (posts rápidos) demonstrando como configurar pelo arquivo de configuração que o framework fornece alguns recursos da AWS, segue alguns exemplos:

  * Debugando sua função localmente
  * SNS, SQS, S3
  * API Gateway
  * VPC
  * CloudWatch Events
  * CloudWatch Alerts
  * SNS Filtering
* Boas praticas de organização de código entre os lambdas de aplicações complexas

Deixe um comentário deixando suas principais dúvidas sobre Serverless ou tópicos que você gostasse que eu abordasse por aqui!