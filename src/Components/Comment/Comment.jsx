import { Clear, MoreVert, Save } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Menu, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Comment({ comment }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [editMode, seteditMode] = useState(false)
  const [commentinput, setcommentinput] = useState(comment.text)


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return editMode ? (
    <Box p={2} sx={{ display: 'flex', alignItems: 'center'}}>
    <Box>
        <Avatar />
    </Box>
    <Box ml={2} sx={{ flexGrow: '1'}}>
        <TextField
            value={commentinput} 
            onChange={(e) => setcommentinput(e.target.value)} 
            sx={{ width: '100%'}} 
            id="standard-basic" 
            variant="standard" />
    </Box>
    <Box>
        <IconButton aria-label="settings">
            <Save />
        </IconButton>   
        <IconButton onClick={() => seteditMode(false)} aria-label="settings">
            <Clear />
        </IconButton>  
    </Box>
</Box>
  ) : (
    <Box p={2} sx={{ display: 'flex', alignItems: 'center'}}>
        <Box>
            <Avatar />
        </Box>
        <Box ml={2} sx={{ flexGrow: '1'}}>
            <Typography variant="p">{comment?.text}</Typography>
        </Box>
        <Box>
            <IconButton onClick={handleClick} aria-label="settings">
                <MoreVert />
            </IconButton>   
        </Box>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => {seteditMode(true); handleClose() }}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </Box>
  )
}

export { Comment }