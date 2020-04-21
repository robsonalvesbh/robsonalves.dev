import React from 'react'

import SEO from '../components/Seo'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import * as S from '../components/Post/styled'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About Me"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <PageTitle>ABOUT ME</PageTitle>
    <S.MainContent>
      <article>
        <p>
            Hey Folks, my name is Robson Alves, I am currently living in São Paulo - Brazil, I have a degree in computer science and 
            I work with web development for over 6 years. I am currently a software engineer at <a href="https://www.olx.com.br/" target="_blank" rel="noopener noreferrer">OLX Brazil</a> and 
            work as a freelancer in my spare time, I have had the opportunity to participate in projects of large companies 
            such as Maxmilhas, SambaTech, Cielo, Totvs, Kroton, among others.
        </p>

        <p>
            I like the dynamics that development gives me, I'm very active in software communities, 
            I'm a <a href="https://www.valamis.com/hub/lifelong-learning" target="_blank" rel="noopener noreferrer">lifelong learner</a> and 
            I'm addicted to topics like good practices, clean code, software architecture, serverless and 
            other things around highly scalable applications. ;-)
        </p>

        <p>
            I will use this blog to write about technologies that interest me and I also intend to write some 
            articles in English and even in Spanish to practice these languages.
        </p>

        <h2>Hard skills</h2>

        <ul>
            <li>NodeJS</li>
            <li>PHP</li>
            <li>Python</li>
            <li>React</li>
            <li>AWS</li>
            <li>CI - CD</li>
            <li>MySQL - PostgreSQL - MongoDB - DynamoDB</li>
            <li>TDD</li>
            <li>Git - GitFlow</li>
            <li>Docker - Vagrant</li>
            <li>Scrum - Kamban</li>
            <li>Serverless</li>
        </ul>

        <h2>Soft skills</h2>

        <ul>
            <li> Flexible </li>
            <li> Organized </li>
            <li> I learn fast </li>
            <li> I like to solve problems </li>
            <li> I love new challenges </li>
            <li> Self-taught </li>
            <li> Proactive </li>
        </ul>

        <h2>Languages</h2>

        <ul>
            <li>Portuguese - Native language</li>
            <li>English</li>
            <li>Spanish</li>
        </ul>

        <h2>Contact</h2>

        <ul>
            <li><a href="https://www.linkedin.com/in/robsonalvesbh/">Linkedin</a></li>
            <li><a href="https://github.com/robsonalvesbh">Github</a></li>
            <li><a href="https://twitter.com/robsonalvesdev">Twitter</a></li>
        </ul>

        <p>
            Do you want to ask me anything? let me know <a href="mailto:robsonalves.dev@gmail.com">robsonalves.dev@gmail.com</a>.
        </p>

      </article>
    </S.MainContent>
  </Layout>
)

export default AboutPage
