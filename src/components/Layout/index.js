import React from "react"

import GlobalStyles from '../../styles/global'
import Header from '../Header'

import * as S from './styled'

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Header />
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
)

export default Layout