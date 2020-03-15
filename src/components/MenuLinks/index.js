import React from "react"

import * as S from './styled'
import links from './content'

const MenuLinks = () => (
  <S.menuWrapper>
    <S.MenuLinkList>
      {links.map((link, i) => (
        <S.MenuLinkItem key={i}>
          <S.MenuLinkLink cover direction="up" duration={0.6} bg="#141f2d" to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinkLink>
        </S.MenuLinkItem>
      ))}
    </S.MenuLinkList>
  </S.menuWrapper>
)

export default MenuLinks