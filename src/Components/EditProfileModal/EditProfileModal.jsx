import { Clear } from '@mui/icons-material'
import { Avatar, Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import { AvatarStyles, ImgStyles, ModalContainer, StyledTextField } from './styles'

function EditProfileModal({ open, setopen }) {

  return (
    <>
    <Modal
        open={open}
        onClose={()=>setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer bgcolor='background.paper'>
          <Box sx={{ display: 'flex', alignItems: 'center', p: 2}}>
            <Clear  sx={{ marginRight: 1, color: 'text.primary'}} />
            <Typography color='text.primary' sx={{flexGrow: 1}} variant="h6">
              Edit Profile
            </Typography>
            <Button variant="outlined">Save</Button>
          </Box>
          <Box sx={{ height: '14rem'}}>
            <Box position="relative">
              <img style={ImgStyles} src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80" alt="cover" />
              <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" sx={AvatarStyles}/>
            </Box>
          </Box>
          <Box p={2}>
            <StyledTextField id="outlined-basic" label="Full Name" variant="outlined" />
            <StyledTextField id="outlined-basic" label="Bio" variant="outlined" />
            <StyledTextField id="outlined-basic" label="URL" variant="outlined" />
          </Box>
        </ModalContainer>
      </Modal>
    </>
  )
}


export { EditProfileModal }