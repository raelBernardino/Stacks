import React from 'react'
import styled from 'styled-components'

import {
  BasicSmallText,
} from './styled'
import { CourseCard } from '.'

const CourseCardContainer = styled.div`
  min-width: 275px;
  height: 100%;
  border-radius: 15px;
  background-color: #444;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 25px 0 0;
  padding: 20px;
  box-sizing: border-box;
  /* position: relative; */
`

const CourseTitle = styled.span`
  font-weight: 900;
  font-family: "Source Sans Pro";
  font-size: 42px;
  color: white;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
`

const CourseDescription = styled(BasicSmallText)`
  overflow-wrap: anywhere;
  margin-bottom: 50px;
`

const CourseDescriptionIndicator = styled(BasicSmallText)`
  color: rgba(250, 250, 250, .5);
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  font-style: italic;
  /* padding: 20px 0 0 20px; */
`

export default ({ course, i }) => {
  return (
    <CourseCardContainer>
      <CourseDescriptionIndicator>DESCRIPTION</CourseDescriptionIndicator>
      <CourseDescription>{course.description}</CourseDescription>
      <BasicSmallText>COURSE {i + 1}</BasicSmallText>
      <CourseTitle>{course.title}</CourseTitle>
    </CourseCardContainer>
  )
}