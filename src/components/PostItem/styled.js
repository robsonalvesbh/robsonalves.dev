import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const postItemWrapper = styled.section``

export const postItemTitle = styled.h1`
  margin-top: 1.2em;
  margin-bottom: 0.3em;
  font-size: 32px;
  color: var(--titles);

  :hover {
    color: var(--highlight);
    opacity: 0.8;
  }
`

export const postItemTitleLink = styled(AniLink)`  
  text-decoration: none;
`

export const postItemDate = styled.time`
  color: var(--texts);
  font-weight: 100;
  text-align: left;
  margin-bottom: 1em;
  padding-left: 5px;
  height: 32px;
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

export const PostItemSeparate = styled.hr`
  margin: 32px 0;
  background: var(--borders);
  height: 1px;
  border-style: none;
`