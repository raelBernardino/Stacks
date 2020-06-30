import React from 'react'
import styled from 'styled-components'
import { NavIconContainer } from './styled'

const NavLineOne = styled.div`
  width: 100%;
  height: .5px;
  background-color: white;
`

const NavLineTwo = styled(NavLineOne)`
  width: 75%;
`

const NavLineThree = styled(NavLineOne)`
  width: 50%;
`

export default ({ toggleNav }) => {
  return (
    <NavIconContainer onClick={toggleNav}>
      <NavLineOne />
      <NavLineTwo />
      <NavLineThree />
    </NavIconContainer>
  )
}