import styled from 'styled-components'
import media from "styled-media-query"

export const PageTitle = styled.h1`
  margin-top: 1.2em;
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: 0.069rem;
  line-height: 1.4;
  color: var(--texts);

  ${media.lessThan("large")`
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  `}
`

