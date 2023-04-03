import React from 'react'
import { Typography } from '@mui/material'
import { Stack } from '@mui/material'


export const PrincipalInformation = (props) => {
 const {userState} = props;
 const {
    name,
    login,
    created_at,
 } = userState
 return (
    <>
        <Stack direction='row'
        sx={{justifyContent: 'space-between'}}
        >
            <Typography variant='h3'>{name}</Typography>
            <Typography variant='subtitle1'>{created_at}</Typography>
        </Stack>
        <Typography variant='caption'>{`@${login}`}</Typography>
    </>
 )
}

export default PrincipalInformation
