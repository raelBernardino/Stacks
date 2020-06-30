import React from 'react'
import styled, { css } from 'styled-components'
import { useMutation } from '@apollo/react-hooks'

import {
  BasicFlexContainer,
  BasicHeaderSeparator,
  BasicCourseInput,
  LoadingScreen,
} from './styled'
import { ADD_COURSE } from '../gql'

const AbsoluteFlexContainer = styled(BasicFlexContainer)`
  ${p => p.openNewStack ? (
    css`
        transform: translateY(0);
        opacity: 1;
        `
  ) : (
      css`
        transform: translateY(80vh);
        opacity: 0;
        `
    )
  }
  position: absolute;
  justify-content: flex-start;
  bottom: 0;
  left: 0;
  transition: .75s ease-in-out;
`

const FormContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #504F4F;
  padding: 20px 20px 120px;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
`

const DescriptionInput = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 25px;
  font-size: 24px;
  text-align: left;
  font-family: 'Source Sans Pro';
  background-color: black;
  color: white;
  box-sizing: border-box;
  outline: none;
  border-radius: 20px;
  border: none;
  background-color: #4C4C4C;
  font-weight: 300;
  margin: 0 0 25px 0;
  resize: none;
  ::-webkit-input-placeholder {
    font-style: italic;
  }
  :-moz-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }
`

export const NewStackForm = ({ openNewStack, toggleNewStack }) => {
  const token = localStorage.getItem('token')
  const [addCourse, { loading, _, data }] = useMutation(ADD_COURSE)
  const [course, setCourse] = React.useState(
    {
      title: "",
      description: ""
    }
  )

  const onChangeTitle = e => {
    setCourse({ ...course, title: e.target.value })
  }

  const onChangeDescription = e => {
    setCourse({ ...course, description: e.target.value })
  }

  const createCourse = e => {
    if (e.keyCode === 13) {
      addCourse({ variables: { title: course.title, description: course.description } })
      toggleNewStack()
      // window.location.reload(false)
      console.log(localStorage.getItem('token'))
    }
  }
  if (loading) return (<LoadingScreen />)

  return (
    <AbsoluteFlexContainer openNewStack={openNewStack}>
      <FormContainer>
        <BasicHeaderSeparator>NEW COURSE</BasicHeaderSeparator>
        <InputContainer>
          <BasicCourseInput
            onChange={onChangeTitle}
            value={course.title}
            placeholder="Enter Title (ex. Korean 1)" />
          <DescriptionInput
            type="text"
            cols="40"
            rows="5"
            value={course.description}
            placeholder="Enter course description (ex. This course covers travel, greetings, etc.)"
            onChange={onChangeDescription}
            onKeyDown={createCourse}
          />
        </InputContainer>
      </FormContainer>
    </AbsoluteFlexContainer>
  )
}

export default NewStackForm;