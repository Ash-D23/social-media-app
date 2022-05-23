import { Box, styled } from "@mui/material";

export const LoaderContainer = styled(Box)({
    margin: 'auto',
    width: '50%',
    maxWidth: '400px',
    minWidth: '150px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

export const LoaderContainerOverlay = styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: '0.4'
});