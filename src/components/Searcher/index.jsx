import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack, TextField } from '@mui/material'
import { useState } from 'react';
export const Searcher = (props) => {

  const { setinputUser } = props;

  const [valueInput, setValueInput] = useState('')

  const onSearchValueChange = (event) =>{
    const inputValue =  event.target.value
    setValueInput(inputValue)
    }

  const handleSubmit = () =>{
    setinputUser(valueInput)
  }

  return (
    <Stack 
    direction= 'row'
    sx={{
      marginTop: '30px',
      width: '80%',

    }}
    >
      <TextField
      id="outlined-basic" 
      label="Github Users" 
      placeholder="Buscar usuario de GitHub"
      value={valueInput}
      onChange={onSearchValueChange}
      variant="outlined"
      size='small'
      sx={{
        width: '90%',

      }}  
      ></TextField>
      <IconButton
      onClick={handleSubmit} 
      size='small'
      sx={{
        left: '-50px',
      }}
      >
      <SearchIcon/>
      </IconButton>
    </Stack>
  )
}

export default Searcher
