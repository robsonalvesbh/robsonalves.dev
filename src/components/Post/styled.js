import styled from 'styled-components'

export const PostDate = styled.time`
  color: var(--texts);
  font-size: 1.1rem;
  font-weight: 100;
`

export const PostHeader = styled.header`
  margin-top: 1.2em;
  margin-bottom: 0.3em;
  font-size: 4rem;
  color: #126ab1;
`

export const PostItemSeparate = styled.hr`
  margin: 32px 0;
  background: var(--borders);
  height: 1px;
  border-style: none;
`

export const MainContent = styled.section`
  margin-top: 1.2rem;
  margin-bottom: 2.2rem;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--texts);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: #111;
    border-left: 0.3rem solid #1fa1f2;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    margin: 2rem auto;
  }
  table > thead > tr > th,
  table > tbody > tr > th,
  table > tfoot > tr > th,
  table > thead > tr > td,
  table > tbody > tr > td,
  table > tfoot > tr > td {
      padding: 10px;
      line-height: 1.42857143;
      vertical-align: top;
      border: 1px solid var(--borders);
      color: var(--texts);
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #111;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`