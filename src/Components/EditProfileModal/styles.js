import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export const StyledTextField = styled(TextField)({
    width: '100%',
    marginBottom: '1rem'
})

export const ModalContainer = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 5
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