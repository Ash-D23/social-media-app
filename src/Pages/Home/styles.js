import { Box, styled } from "@mui/material";

export const AboutContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.up("xs")]: {
        marginLeft: "0",
      },
    [theme.breakpoints.up("sm")]: {
        marginLeft: "1rem",
    }
}));

export const StyledPara = styled(Box)({ 
  display: "flex",
  alignItems: "center",
  marginBottom: '1rem'
})

