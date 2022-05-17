import { Paper, styled, Tooltip } from "@mui/material";

export const BottomNavContainer = styled(Paper)( ({ theme }) => ({
    position: 'fixed',
    bottom: 0, 
    right: 0, 
    left: 0,
    zIndex: 3,
    [theme.breakpoints.up("xs")]: {
        display: "block",
      },
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}) );

export const FloaterButton = styled(Tooltip)( ({ theme }) => ({
    position: "fixed",
    bottom: 20,
    left: "calc(50% - 25px)",
    [theme.breakpoints.up("xs")]: {
        display: "block",
      },
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}) );