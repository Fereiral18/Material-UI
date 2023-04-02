import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import Searcher from './components/Searcher';
import { getGitHubUser } from '../src/services/users'
import UserCard from './containers/userCard';

const App = () => {

const [inputUser, setinputUser] = useState('octocat')
const [userState, setuserState] = useState('inputUser')
const [notfound, setnotfound] = useState(false)

const gettingUser = async(user) =>{
  const userResponse =  await getGitHubUser(user)
  if(userState === 'octocat'){
    localStorage.setItem('octocat', userResponse)
  }

  if(userResponse.message === 'Not Found'){
    const { octocat } = localStorage;
    setinputUser(octocat)
    setnotfound(true)
  }else{
    setuserState(userResponse)
  }

}
console.log(userState)

useEffect(() => {
  gettingUser(inputUser)
}, [inputUser])

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
      <UserCard userState={userState}/>
    </Container>
  )
}
export default App;

