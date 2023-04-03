import React, { useEffect, useState } from 'react'
import { Button, Container } from '@mui/material'
import Searcher from './components/Searcher';
import { getGitHubUser } from '../src/services/users'
import UserCard from './containers/userCard';
let colorsDom = [
  "#17202A",
  "#7D3C98",
  "#3498DB",
  "#717D7E",
  "#B3B6B7",
  "#F5B7B1",
];

const App = () => {

const [inputUser, setinputUser] = useState('octocat')
const [userState, setuserState] = useState('inputUser')
const [notfound, setnotfound] = useState(false)

const [colorBackground, setcolorBackground] = useState(colorsDom[0]);

const ramdomColor = colorsDom.map((item) => item);
const position = () => {
  setcolorBackground(Math.floor(Math.random(ramdomColor) * 7));
};
document.body.style.background = colorsDom[colorBackground];

const gettingUser = async(user) =>{
  const userResponse =  await getGitHubUser(user)
  if(userState === 'octocat'){
    localStorage.setItem('octocat', userResponse)
  }

  if(userResponse.message === 'Not Found'){
    const { octocat } = localStorage;
    setinputUser(octocat)
    notfound(true)
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
      background:'linear-gradient(to left, #F2F3F4, #E5E7E9)',
      width: '80vw',
      height: '550px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    }>
      <Button 
      variant='contained'
      size='small'
      sx={{
        display:'flex',
        flexDirection:'row',
        marginLeft: '920px',
        marginTop: '10px'

        }}
        onClick={position}>colors</Button>
      <Searcher
      inputUser={inputUser}
      setinputUser={setinputUser}/>
      <UserCard userState={userState}/>
    </Container>
  )
}
export default App;

