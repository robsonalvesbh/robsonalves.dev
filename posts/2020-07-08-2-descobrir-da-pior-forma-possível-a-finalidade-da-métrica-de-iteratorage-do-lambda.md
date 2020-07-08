---
title: "#2 - Descobrir da pior forma possível a finalidade da métrica de
  IteratorAge do lambda"
description: Fala pessoal, como vocês estão? Dando seguimento a série sobre
  Serverless, resolvi compartilhar com vocês um breve relato de uma experiência
  que tive esses dias relacionado a processamento de dados via stream com
  funções lambdas.
date: 2020-07-08T12:14:57.000Z
tags:
  - Serverless
  - Escalabilidade
image: assets/img/screen-shot-2020-07-07-at-21.47.24.png
---
Fala pessoal, como vocês estão? Dando seguimento a série sobre Serverless, resolvi compartilhar com vocês um breve relato de uma experiência que tive esses dias relacionado a processamento de dados via stream com funções lambdas.

Nosso time é um dos maiores heavy users de Serverless da empresa, possuímos facilmente mais de 20 funções lambdas no core de nossa stack, processamos diariamente mais de 10 milhões de invocações por função e em dias de picos chegando a 25 milhões de invocações por função e ainda não tinha dado atenção para a métrica de IteratorAge, até porque ela sempre ficava sem dados disponíveis como na imagem abaixo:

![](assets/img/screen-shot-2020-07-07-at-21.47.58.png)

Há algumas semanas atrás implementei a integração de um trigger do Dynamo Stream com uma função lambda, liberei a integração em produção através de um rollout progressivo e fui monitorando as métricas e logs para certificar de que não estava ocorrendo nenhum erro até chegar a 100% das requisições, até aí tudo normal, não detectei nenhum erro ou comportamento estranho.

Alguns dias depois aleatoriamente acabei acessando as métricas desta função para verificar se estava tudo bem e para minha surpresa a métrica do iteratorAge dessa vez possuía dados, achei curioso e resolvi investigar e a primeira explicação que encontrei foi em uma postagem no blog da própria AWS: 

> Para invocações baseadas em streams, o Lambda emite a métrica de IteratorAge, que é o tempo entre o último registro gravado em um batch e o lambda lê esse registro.

Ou seja, a função lambda não está conseguindo processar os dados que  vem do stream na mesma velocidade que eles chegam e começam a acumular e o iteratorAge calcula o tempo que dado fica acumulado até ser processado pela função.

![](assets/img/screen-shot-2020-07-07-at-21.47.24.png)

Foi assim que descobri da pior forma a finalidade desta métrica, o iteratorAge da minha função no pico chegou à 110 milhões de milissegundos ou seja 30 fucking horas :scream:, minha função estava acumulando dados e levando até 30 horas para processá-los.

Para resolver o incidente, alterei o código da função para que ela pudesse trabalhar com o tamanho máximo do lote (Batch Size) do Dynamo Stream que é de 1000 itens por lote e aumentei a concorrência de Batch por shard para o tamanho máximo de 10, anteriormente as configurações eram de  100 itens por lote e a concorrência estava com o valor default de  0 (vale ressaltar que não é a concorrência da função e sim do trigger do Dynamo Stream).

Dessa forma além de processar um lote maior por vez a função passou a processar paralelamente vários lotes, aumentando assim a capacidade de vazão da minha função, pouco tempo depois da publicação do hotfix o tempo do iteratorAge caiu para menos de 50 milissegundos.

Com estas duas alterações resolvemos o incidente e por último criei um alerta no cloudwatch para notificar o time caso o tempo do iteratorAge comece a aumentar.