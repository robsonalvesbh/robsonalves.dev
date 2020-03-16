import React from 'react'

import SEO from '../components/Seo'
import Layout from '../components/Layout'

import * as S from '../components/Post/styled'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <S.MainContent>
      <h1>SOBRE MIM</h1>
      <hr />

      <article>
          <p>
              Meu nome é Robson Alves, sou graduado em ciência da computação, trabalho com desenvolvimento web há mais
              de 5 anos, atualmente sou engenheiro de software na <a href="https://www.maxmilhas.com.br/">Maxmilhas</a> e
              trabalho como freelance nas horas vagas,
              já tive a oportunidade de participar em projetos de grandes empresas como: SambaTech, Cielo, Totvs, Kroton,
              entre outras.
          </p>

          <p>
              Sou fascinado pela dinâmica que o desenvolvimento me proporciona, sou viciado em boas praticas, clean code,
              amo trabalhar em aplicações altamente escaláveis e que tenham um propósito. ;-)
          </p>

          <h2>Hard skills</h2>

          <ul>
              <li>PHP 7 - Symfony - Laravel</li>
              <li>NodeJS 8</li>
              <li>MySQL - PostgreSQL - MongoDB</li>
              <li>Git - GitFlow</li>
              <li>Docker - Vagrant</li>
              <li>Scrum - Kamban</li>
              <li>Serverless</li>
          </ul>

          <h2>Soft skills</h2>

          <ul>
              <li>Flexível</li>
              <li>Organizado</li>
              <li>Aprendo Rápido</li>
              <li>Gosto de resolver problemas</li>
              <li>Adoro novos desafios</li>
              <li>Autodidata</li>
              <li>Pró-ativo</li>
          </ul>

          <h2>Idiomas</h2>

          <ul>
              <li>Espanhol (Avançado)</li>
              <li>Inglês (Upper intermediate)</li>
          </ul>

          <h2>Contato</h2>

          <ul>
              <li><a href="https://www.linkedin.com/in/robsonalvesbh/">Linkedin</a></li>
              <li><a href="https://github.com/robsonalvesbh">Github</a></li>
          </ul>

          <p>
              Quer bater um papo comigo sobre qualquer outro assunto? Faça contato pelo meu e-mail <a href="mailto:robsonalves.dev@gmail.com">robsonalves.dev@gmail.com</a>.
          </p>

      </article>
    </S.MainContent>
  </Layout>
)

export default AboutPage
