---
title: "#2 - Descobrir da pior forma possível a finalidade da métrica de
  IteratorAge do lambda"
description: Fala pessoal, como vocês estão? Dando seguimento a série sobre
  Serverless, resolvi compartilhar com vocês um breve relato de uma experiência
  que tive esses dias relacionado a processamento de dados via stream com
  funções lambdas e como eu descobrir da pior forma possível a finalidade da
  métrica de IteratorAge do lambda.
date: 2020-07-08 08:38:11
tags:
  - Serverless
  - Escalabilidade
  - Stream
image: assets/img/screen-shot-2020-07-07-at-21.47.24.png
---
Fala pessoal, como vocês estão? Dando seguimento a série sobre **Serverless**, resolvi compartilhar com vocês um breve relato de uma experiência que tive esses dias relacionado a processamento de dados via stream com funções lambdas e como eu descobrir da pior forma possível a finalidade da métrica de **IteratorAge** do lambda.

Nosso time é um dos maiores **heavy users** de Serverless da empresa, possuímos facilmente mais de 20 funções lambdas no core de nossa stack e eu ainda não tinha parado para entender a finalidade da métrica de IteratorAge que a AWS disponibiliza para cada função, até porque ela sempre ficava sem dados disponíveis, como na imagem abaixo:

![Gráfico do iteratorAge sem dados disponíveis](assets/img/screen-shot-2020-07-07-at-21.47.58.png "Gráfico do iteratorAge sem dados disponíveis")

Há algumas semanas atrás implementei a integração de um [trigger do **Dynamo Stream** com uma função lambda](https://docs.aws.amazon.com/pt_br/amazondynamodb/latest/developerguide/Streams.Lambda.Tutorial.html), liberei a integração em produção através de um [rollout progressivo](https://medium.com/rd-shipit/estrat%C3%A9gias-de-rollout-controlado-e-feature-flag-no-deploy-cont%C3%ADnuo-923dc5fe2341) e fui monitorando as métricas e logs para certificar de que não estava ocorrendo nenhum erro até chegar a 100% das requisições, até aí tudo normal, não detectei nenhum erro ou comportamento estranho e a métrica do iteratorAge permanecia como sempre, sem dados disponíveis.

Alguns dias depois aleatoriamente acabei acessando as métricas desta função para verificar se estava tudo bem e para minha surpresa a métrica do iteratorAge dessa vez possuía dados, achei curioso e resolvi investigar e a primeira explicação que encontrei foi em uma [postagem no blog](https://aws.amazon.com/pt/premiumsupport/knowledge-center/lambda-iterator-age/?nc1=h_ls) da própria AWS: 

> Para invocações baseadas em streams, o **Lambda** emite a métrica de IteratorAge, que é o tempo entre o último registro gravado em um batch e o lambda lê esse registro.

Ou seja, a função lambda não está conseguindo processar os dados que  vem do stream na mesma velocidade que eles chegam e começam a acumular e o iteratorAge calcula o tempo que dado fica acumulado até ser processado pela função.

![Gráfico do iteratorAge com dados disponíveis](assets/img/screen-shot-2020-07-07-at-21.47.24.png "Gráfico do iteratorAge com dados disponíveis")

Foi assim que descobri da pior forma a finalidade desta métrica, o iteratorAge da minha função no pico chegou à 110 milhões de milissegundos ou seja 30 fucking horas, minha função estava acumulando dados e levando até 30 horas para processá-los.

Para resolver o incidente, alterei o código da função para que ela pudesse trabalhar com o tamanho máximo do lote ([Batch Size](https://docs.aws.amazon.com/pt_br/lambda/latest/dg/with-ddb.html)) do Dynamo Stream que é de 1000 itens por lote e aumentei a [concorrência de Batch por shard](https://docs.aws.amazon.com/pt_br/lambda/latest/dg/with-ddb.html) para o tamanho máximo de 10, anteriormente as configurações eram de 100 itens por lote e a concorrência estava com o valor default de 0 (vale ressaltar que não é a concorrência da função e sim do trigger do Dynamo Stream).

Dessa forma além de processar um lote maior por vez a função passou a processar paralelamente vários lotes, aumentando assim a capacidade de vazão da minha função, pouco tempo depois da publicação do hotfix o tempo do iteratorAge caiu para menos de 50 milissegundos.

Com estas duas alterações o incidente foi resolvido e por último criei um alerta no cloudwatch para notificar o time caso o tempo do iteratorAge volte a aumentar.

Bom galera, é isso aí, espero que tenham aprendido pra que server a métrica de iteratorAge e quando ela é populada. Gostaria de aproveitar e pedir a vocês um feedback, o que acharam deste formato? se gostarem vou tentar trazer mais cases do dia a dia.