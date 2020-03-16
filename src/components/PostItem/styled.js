import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const postItemWrapper = styled.section`
  ${media.lessThan("large")`
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  `}
`

export const postItemTitle = styled.h1`
  margin-top: 1.2rem;
  margin-bottom: 0.3em;
  font-size: 2rem;
  color: var(--titles);

  :hover {
    color: var(--highlight);
    opacity: 0.8;
  }

  ${media.lessThan("large")`
    margin-top: 2rem;
    font-size: 1.6rem;
  `}
`

export const postItemTitleLink = styled(AniLink)`  
  text-decoration: none;
`

export const postItemDate = styled.time`
  color: var(--texts);
  font-weight: 100;
  text-align: left;
  margin-bottom: 1em;
  padding-left: 0.3125rem;
  height: 2rem;
  margin-top: -1.5em;
`

export const postItemDescription = styled.p`
  width: auto;
  float: none;
  display: block;
  margin: 25px auto 1.875rem;
  text-align: justify;
  color: var(--texts);
  font-weight: 300;
  font-style: normal;
  font-size: 1.125rem;
  line-height: 2;
  letter-spacing: .01rem;
`