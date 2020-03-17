import React from 'react'

import SEO from '../components/Seo'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import * as S from '../components/Post/styled'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <PageTitle>SOBRE MIM</PageTitle>
    <S.MainContent>
      <article>
        <p>
            Meu nome é Robson Alves, sou graduado em ciência da computação, trabalho com desenvolvimento web há mais
            de 6 anos, atualmente sou engenheiro de software na <a href="https://www.olx.com.br/">OLX</a> e
            trabalho como freelance nas horas vagas, já tive a oportunidade de participar em projetos de grandes empresas como: 
            Maxmilhas, SambaTech, Cielo, Totvs, Kroton, entre outras.
        </p>

        <p>
            Sou fascinado pela dinâmica que o desenvolvimento me proporciona, viciado em boas praticas, clean code, arquitetura de software,
            amo trabalhar em aplicações altamente escaláveis e que tenham um propósito. ;-)
        </p>

        <h2>Hard skills</h2>

        <ul>
            <li>NodeJS</li>
            <li>PHP</li>
            <li>Python</li>
            <li>React - React Native</li>
            <li>AWS</li>
            <li>MySQL - PostgreSQL - MongoDB</li>
            <li>TDD - Continuous Integration</li>
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
            <li>Espanhol</li>
            <li>Inglês</li>
        </ul>

        <h2>Contato</h2>

        <ul>
            <li><a href="https://www.linkedin.com/in/robsonalvesbh/">Linkedin</a></li>
            <li><a href="https://github.com/robsonalvesbh">Github</a></li>
            <li><a href="https://twitter.com/robsonalvesdev">Twitter</a></li>
        </ul>

        <p>
            Quer bater um papo comigo sobre qualquer outro assunto? Faça contato pelo meu e-mail <a href="mailto:robsonalves.dev@gmail.com">robsonalves.dev@gmail.com</a>.
        </p>

      </article>
    </S.MainContent>
  </Layout>
)

export default AboutPage
