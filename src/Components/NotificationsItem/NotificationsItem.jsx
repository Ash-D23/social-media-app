import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { NotificationsContainer } from '../../Components/NotificationsItem/styles'

function NotificationsItem() {
  return (
    <NotificationsContainer mt={1} p={2}>
        <Avatar sx={{ marginRight: 2}} />
        <Typography>
            Notification Message dfdslfjs djdhewk how are you, this tif ffkje inform has posted  ffkje inform has posted  ffkje inform has posted
        </Typography> 
    </NotificationsContainer>
  )
}

export { NotificationsItem }