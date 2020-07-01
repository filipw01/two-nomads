import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

const Navigation: React.FC<unknown> = () => {
  const menuItems = [
    { name: 'test', link: '/test' },
    { name: 'test2', link: '/test2' },
  ]
  return (
    <StyledHeader>
      <div>2N</div>
      <ul>
        {menuItems.map((menuItem) => {
          const { name, link } = menuItem
          return (
            <Link style={{ marginLeft: '2rem' }} to={link}>
              {name}
            </Link>
          )
        })}
      </ul>
    </StyledHeader>
  )
}

export default Navigation
