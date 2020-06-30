import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import {
  BasicText,
  BasicFlexContainer,
  LoadingScreen
} from './styled'
import {
  DashboardLanding,
  NavScreen,
} from '.'
import { CURRENT_USER } from '../gql'

export default ({ setLoggedIn }) => {
  const [currentUser, setCurrentUser] = React.useState({})
  const [navIsOpen, setNavIsOpen] = React.useState(false)
  const { loading, error, data } = useQuery(CURRENT_USER, {
    onCompleted: () => {
      setCurrentUser(data.currentUser.user)
      console.log(currentUser)
    }
  })

  React.useEffect(() => {
    if (data) {
      setCurrentUser(data.currentUser.user)
    }
  }, [])


  const clearToken = () => {
    localStorage.removeItem('token')
    console.log('dashboard')
    window.location.reload(false)
    setLoggedIn(false)
  }

  if (loading) { return (<LoadingScreen></LoadingScreen>) }
  if (error) return (<BasicFlexContainer><BasicText>an error occured</BasicText></BasicFlexContainer>)
  if (data.currentUser.message === "You've been logged out, please login again") clearToken()

  return (
    <BasicFlexContainer style={{ overflow: `${navIsOpen ? '' : 'hidden'}` }}>
      {/* <NavScreen navIsOpen={navIsOpen} /> */}
      {
        (localStorage.getItem('token') && !loading) ?
          <DashboardLanding
            navIsOpen={navIsOpen}
            setNavIsOpen={setNavIsOpen}
            clearToken={clearToken}
            currentUser={currentUser}
          />
          : null
      }
    </BasicFlexContainer>
  )
}