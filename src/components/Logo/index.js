import React from "react"

import * as S from './styled'

const Logo = () => (
  <S.Title>
    <S.TitleLink cover direction="up" duration={0.6} bg="#141f2d" to='/'>
      Robson Alves<S.UnderlineAnimation>__</S.UnderlineAnimation>
    </S.TitleLink>
  </S.Title>
)

export default Logo