import { styled } from "@mui/material"
import { Box } from "@mui/system"

export const ProfileContainer = styled(Box)({  
    marginTop: 1,
    marginLeft: 3, 
    marginRight: 3,
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))` 
})

export const AvatarStyles = { 
    width: 125, 
    height: 125, 
    position: 'absolute', 
    bottom: '-3rem', 
    left: '1.5rem' 
}

export const ImgStyles = {
    width: '100%', 
    height: '10rem'
}