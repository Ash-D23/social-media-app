import { styled } from "@mui/material";
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