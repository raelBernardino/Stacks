import React from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import {
  BasicInput,
  BasicSubHeader,
  BasicCircleArrowButton,
  WelcomePage,
  WelcomeLogo,
  LoadingScreen,
} from './styled'
import { LOGIN } from '../gql'

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Source Sans Pro';
  position: relative;
`


export default ({ setLoggedIn }) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')


  const [login, { loading, _, data }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      if (login.token) {
        localStorage.setItem('token', login.token)
        window.location.reload(false)
      }
    }
  });

  const onChangeUsername = e => {
    setUsername(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  if (loading) return (<LoadingScreen></LoadingScreen>)

  return (
    <WelcomePage>
      <LoginPage>
        <WelcomeLogo>STACKS</WelcomeLogo>
        <BasicSubHeader>Login</BasicSubHeader>
        <BasicInput
          placeholder="Username"
          value={username}
          onChange={onChangeUsername}
        />
        <BasicInput
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
          type="password"
        />
        <BasicCircleArrowButton
          onClick={() => {
            login({ variables: { username, password } })
            console.log(localStorage.getItem('token'))
          }
          }
        >
          <FontAwesomeIcon icon={faAngleRight} size="lg " />
        </BasicCircleArrowButton>
      </LoginPage>
    </WelcomePage>
  )
}