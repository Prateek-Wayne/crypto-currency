import React from 'react'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const Error = () => {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
    <LinearProgress color="error" />
    <LinearProgress color="error" />
    <LinearProgress color="error" />
  </Stack>
  )
}

export default Error