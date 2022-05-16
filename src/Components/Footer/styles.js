import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
}));