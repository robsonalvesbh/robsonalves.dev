import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const TagList = styled.ul``

export const TagItem = styled.li`
  background-color: var(--logo-background);
  display: inline-block;
  padding: .6em;
  color: var(--logo-color);
  vertical-align: baseline;
  font-size: 100%;
  margin-right: 6px;
  margin-bottom: 5px;
  font: 1em -apple-system-headline, "Droid Sans Mono", Courier, mono;

  :hover {
    opacity: 0.8;
  }
`

export const TagLink = styled(AniLink)`
  text-decoration: none;
  font-weight: 300;
  color: #fff;
`
