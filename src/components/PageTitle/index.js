import React from 'react'

import * as S from './styled'
import Separator from '../Separator'

const PageTitle = ({ children }) => (
  <>
    <S.PageTitle>
      { children }
    </S.PageTitle>
    <Separator />
  </>
)

export default PageTitle