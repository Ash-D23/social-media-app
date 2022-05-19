import { Box } from '@mui/material'
import React from 'react'
import { NotificationsItem } from '../../Components'

function Notifications() {
  return (
    <>
      <Box p={2} sx={{  
        marginTop: 1,
        marginLeft: 3, 
        marginRight: 3,
        minHeight: '90vh'
        }}>
        <NotificationsItem />
      </Box>
    </>
  )
}
 
export { Notifications }