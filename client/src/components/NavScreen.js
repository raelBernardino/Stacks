import React from 'react'
import styled from 'styled-components'

import {
  BasicFullPageFlexContainer,
} from './styled'

const NavScreenContainer = styled(BasicFullPageFlexContainer)`
  background-color: black;
  position: absolute;
  transition: 1s;
  width: 100%;
  height: 100vh;
  z-index: 1;
`

export default ({ navIsOpen }) => {
  return (
    <NavScreenContainer style={{ transform: `${navIsOpen ? "translateX(0%)" : "translateX(100%)"}` }} >

    </NavScreenContainer>
  )
}