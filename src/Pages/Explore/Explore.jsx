import { Chip, Stack } from '@mui/material'
import React from 'react'
import { Feed } from '../../Components'

function Explore() {
  return (
    <>
      <Stack direction="row" spacing={1} p={2} sx={{  
          marginTop: 1,
          marginLeft: 3, 
          marginRight: 3,
        }}>
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
      <Feed />
    </>
  )
}

export { Explore }