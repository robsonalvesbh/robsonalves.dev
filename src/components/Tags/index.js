import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Tags = ({ tags }) => (
  <S.TagList>
    {tags.map((tag, i) => (
      <S.TagItem key={i}>
        <S.TagLink cover direction="up" duration={0.6} bg="#141f2d" to={`/tags/${tag.toLowerCase()}`}>{tag}</S.TagLink>
      </S.TagItem>
    ))}
  </S.TagList>
)

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

export default Tags