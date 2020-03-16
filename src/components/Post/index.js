import React from 'react'
import PropTypes from 'prop-types'

import RecommendedPosts from "../RecommendedPosts"
import Tags from '../Tags'

import * as S from './styled'
import Comments from '../Comments'
import Separator from '../Separator'

const Post = ({ title, html, date, timeToRead, tags, nextPost, previousPost, slug }) => {
  return (
    <>
      <S.PostHeader>{title}</S.PostHeader>
      <S.PostDate>{date} - {timeToRead} min read</S.PostDate>
      <Separator />
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </S.MainContent>
      <Tags tags={tags} />
      <RecommendedPosts next={nextPost} previous={previousPost} />
      <Comments slug={slug} title={title} />
    </>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Post