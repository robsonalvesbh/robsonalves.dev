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

A ideia por trás do Serverless é abstrair o gerenciamento dos servidores eliminando a necessidade de fazermos gestão do software e  do hardware do servidor, o provedor se encarrega de gerenciar dinamicamente a alocação de recursos e provisionamento dos servidores, nos deixando livres para focarmos em nossa aplicação e não na infraestrutura.

## O que é serverless?

Antes de fazermos um deep dive em Serverless, vamos ver brevemente como  nossa infra e nossa responsabilidade evoluiu até chegarmos a este conceito.

![](assets/img/serverless-evolution.png "serverless evolucao")

Infraestrutura In-house
Nos primórdios da web era comum utilizarmos data center e isso trazia a necessidade de se preocupar com o hardware e sistema operacional do servidor, além da sua aplicação. 

Ainda existem empresas que mantem sua Infra In-house.

Computação Cloud Tradicional
Com a evolução das máquinas virtuais surgiram os Clouds, que eliminou
Com o ganho de performance em virtualização de máquinas, começamos a trabalhar com a computação cloud. Na computação cloud tradicional, nossas aplicações ficam em máquinas virtuais onde era possível aumentar (upgrade) ou diminuir (downgrade) o poder de processamento.

Atualmente, a maiorias das aplicações online estão em máquinas virtuais.


BaaS — Backend as a Service FaaS — Function as a Service
Beneficios do serverless

No servers to provision or manage Scales with usage Pay-only usage
Built-in availability and fault tolerance