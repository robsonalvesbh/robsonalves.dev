import styled from 'styled-components'

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const menuWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
  font-size: 1.2rem;
`

export const MenuLinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const MenuLinkItem = styled.li``

export const MenuLinkLink = styled(AniLink)`
  color: var(--logo-color);
  padding: 8px 9px;
  margin: 0 -10px 0;
  text-decoration: none;

  &:hover {
    color: var(--highlight);
    opacity: 0.8;
  }

  &.active {
    color: var(--highlight);
    opacity: 0.8;
  }
`