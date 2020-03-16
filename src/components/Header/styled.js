import styled from 'styled-components'
import media from "styled-media-query"

export const headerWrapper = styled.header`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
  `}
`