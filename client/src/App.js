import React from 'react';

import './App.scss'
import {
  Login,
  Dashboard
} from './components'
import { BasicFlexContainer } from './components/styled'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)

  React.useEffect(() => {
    const token = localStorage.getItem('token') && setLoggedIn(true)
  }, [])

  console.log(localStorage.getItem('token'))
  console.log(loggedIn)

  return (
    <BasicFlexContainer>
      {
        loggedIn ? <Dashboard setLoggedIn={setLoggedIn}/> : <Login setLoggedIn={setLoggedIn}/>
      }
    </BasicFlexContainer>
  );
}

export default App;
