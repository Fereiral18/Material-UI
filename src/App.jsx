import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import Searcher from './components/Searcher';
const App = () => {

const [inputUser, setinputUser] = useState('octocat')
const [userState, setuserState] = useState('userState')

const gettingUser = () =>{
  
}

useEffect(() => {
  
}, [])

  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    }>
      <Searcher
      inputUser={inputUser}
      setinputUser={setinputUser}/>
    </Container>
  )
}
export default App;

