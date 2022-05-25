import { Modal, styled } from "@mui/material";
import { Box } from "@mui/system";

export const FlexCenterBox = styled(Box)({ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const FlexSpaceBetweenBox = styled(Box)({ 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export const AuthContent = styled(Box)({
    width: '30rem',
    display: 'flex',
    flexDirection: 'column'
})

export const LinkStyle = {
    color: 'inherit'
}

export const LinkStylePlain = {
    color: 'inherit',
    textDecoration: 'none'
}

export const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "1rem",
});