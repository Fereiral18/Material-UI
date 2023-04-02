import React from 'react'
import {Stack, Typography } from '@mui/material'
 const Description = (props) => {
  const { userState } = props
  const { bio } = userState
    return (
    <>
        <Stack>
            {bio != null
            ? <Typography>{bio}</Typography>
            : <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Typography>
            }
        </Stack>
        {/* <PapperInformation /> */}
        {/* <LocationInformation /> */}
    </>
  )
}

export default Description