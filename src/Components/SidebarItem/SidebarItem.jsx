import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarLinkStyle } from './styles'

function SidebarItem({ Icon, path, text}) {
  return (
    <>
        <ListItem disablePadding>
            <Link style={SidebarLinkStyle} to={path}><ListItemButton>
                <ListItemIcon>
                    {Icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton></Link>
        </ListItem>
    </>  
  )
}

export { SidebarItem }