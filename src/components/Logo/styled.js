import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Title = styled.h1`
  padding-top: 1em;
  font-weight: bold;
  font: 1em -apple-system-headline, "Droid Sans Mono", Courier, mono;
  text-transform: capitalize;
  white-space: nowrap;
  padding-bottom: 2.1em;
`

export const TitleLink = styled(AniLink)`
  color: var(--logo-color);
  font-size: 2em;
  background-color: var(--logo-background);
  padding: 10px 13px;
  text-decoration: none;

  :hover {
    opacity: 0.9;
  }
`

export const UnderlineAnimation = styled.span`
  animation: blink 2s ease-in-out infinite;

  @keyframes blink {
    50% {
        opacity: 0;
    }
  }
`

