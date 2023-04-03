import React from 'react'
import {Stack, Typography } from '@mui/material'
import PapperInformation from '../../components/PapperInformation/index'
import LocationInformation from '../../components/LocationInformation/index'



const Description = (props) => {
  const { userState } = props
  const { bio } = userState
    return (
    <>
        <Stack sx={{justifyContent: 'center'}}>
            {bio != null
            ? <Typography variant='body1'>{bio}</Typography>
            : <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Typography>
            }
        </Stack>
        <PapperInformation userState={userState}/>
        <LocationInformation userState={userState}/>
    </>
  )
}

export default Description