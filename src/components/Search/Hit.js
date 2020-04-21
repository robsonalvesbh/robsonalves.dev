import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    timeToRead={hit.timeToRead}
    tags={hit.tags}
  />
)

export default Hit