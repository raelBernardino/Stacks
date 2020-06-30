import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

import { NewCourseForm } from './index'

import {
  LargeText,
  MediumText,
  BasicHeaderSeparator,
  LeftAlignFlexContainer,
  AddButton
} from './styled'
import {
  NavIcon,
  NewStackForm,
  CourseCard,
} from '.'

const UserFullPageInner = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  background-color: #333;
`

const UserHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const OpacityLargeText = styled(LargeText)`
  color: rgba(250, 250, 250, .5);
`

const DashboardLandingContainer = styled(LeftAlignFlexContainer)`
  padding: 20px 0 20px 0;
  height: 500px;
`
const BottomButton = styled(AddButton)`
  font-size: 24px;
  font-weight: 900;
  font-family: "Source Sans Pro";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CoursesCountainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  padding: 10px 0 0 0;
  /* position: absolute; */
`

export default ({
  clearToken,
  currentUser,
  navIsOpen,
  setNavIsOpen
}) => {
  const [openNewStack, setOpenNewStack] = React.useState(false)
  // const toggleNav = () => {
  //   setNavIsOpen(!navIsOpen)
  // }

  const toggleNewStack = () => {
    setOpenNewStack(!openNewStack)
  }

  // console.log({ currentUser })

  return (
    <UserFullPageInner>
      <NewCourseForm
        toggleNewStack={toggleNewStack}
        openNewStack={openNewStack} />
      <UserHeaderContainer>
        <OpacityLargeText>Welcome,</OpacityLargeText>
        {currentUser && <LargeText>{currentUser.username}</LargeText>}
      </UserHeaderContainer>
      <DashboardLandingContainer>
        <BasicHeaderSeparator>COURSES</BasicHeaderSeparator>
        {
          currentUser.courses.length < 1 ?
            <MediumText>Your workspace is empty</MediumText>
            :
            <CoursesCountainer>
              {currentUser.courses.map((course, i) => <CourseCard course={course} i={i} />)}
            </CoursesCountainer>
        }
      </DashboardLandingContainer>
      <Footer>
        <BottomButton
          onClick={toggleNewStack}
          openNewStack={openNewStack}>
          ADD COURSE
        </BottomButton>
      </Footer>
    </UserFullPageInner>
  )
}