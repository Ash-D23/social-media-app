import { MoreVert } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

function Comment({ comment }) {

  return (
    <Box p={2} sx={{ display: 'flex', alignItems: 'center'}}>
        <Box>
            <Avatar />
        </Box>
        <Box ml={2} sx={{ flexGrow: '1'}}>
            <Typography variant="p">{comment?.text}</Typography>
        </Box>
        <Box>
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>   
        </Box>
    </Box>
  )
}

export { Comment }