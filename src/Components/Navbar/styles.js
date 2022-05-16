import { Box, Menu, styled, Toolbar } from "@mui/material";

export const NavContainer = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

export const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "#fff",
    padding: "0",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    display: 'flex',
    alignItems: 'center'
}));

export const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
}));

export const NavMenu = styled(Menu)({
    position: 'absolute',
    top: 33
})