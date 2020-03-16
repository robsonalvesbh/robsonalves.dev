import styled from 'styled-components'
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  width: auto;
  max-width: 70rem;
  margin: auto;
  padding: 5rem 5rem 0;

  ${media.lessThan("large")`
    padding: 3rem 0;
  `}
`

export const LayoutMain = styled.main``