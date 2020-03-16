import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import Tags from '../Tags'
import Separator from '../Separator'

const PostItem = ({
  slug,
  title,
  date,
  description,
  timeToRead,
  tags
}) => (
  <>
    <S.postItemWrapper>
      <S.postItemTitleLink cover direction="up" duration={0.6} bg="#141f2d" to={slug}>
        <S.postItemTitle>{title}</S.postItemTitle>
      </S.postItemTitleLink>
      <S.postItemDate>{date} - {timeToRead} min read</S.postItemDate>
      <S.postItemDescription>{description}</S.postItemDescription>
      <Tags tags={tags} />
    </S.postItemWrapper>
    <Separator />
  </>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired
}

export default PostItem