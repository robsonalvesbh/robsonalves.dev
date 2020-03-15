import React from "react"

import Logo from '../Logo'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Header = () => (
  <S.headerWrapper>
    <Logo />
    <MenuLinks />
  </S.headerWrapper>
)

export default Header