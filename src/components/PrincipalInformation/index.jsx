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
        <Stack>
            <Typography>{name}</Typography>
            <Typography>{created_at}</Typography>
        </Stack>
    <Typography>{login}</Typography>

    </>
 )
}

export default PrincipalInformation
