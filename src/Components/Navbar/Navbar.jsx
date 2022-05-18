import { AppBar, Autocomplete, Avatar, MenuItem, TextField, Typography } from '@mui/material'
import { TravelExplore } from '@mui/icons-material'
import {useState}from 'react'
import { NavContainer, NavMenu, SearchBar, UserBox } from './styles'
import { useAuthContext } from '../../Context';
import { Link } from 'react-router-dom';
import { LinkStylePlain } from '../../Utilities';

function Navbar() {
  const [open, setOpen] = useState(false);
  const {user} = useAuthContext()

  return (
    <AppBar position="sticky">
      <NavContainer>
          <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
            TripyTrip
          </Typography>
          <TravelExplore fontSize="large" sx={{ display: { xs: "block", sm: "none" } }} />

         { user ? <>
          <SearchBar>
            <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={["abcd","defg","gfdgd"]}
                  sx={{ flexGrow: 1}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search"
                      onKeyDown={(e)=> console.log(e.target.value)}
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        style: {
                          padding: 0,
                          color: "#000"
                        }
                      }}
                    />
                  )}
            />
          </SearchBar>

          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography variant="span">John</Typography>
          </UserBox>
          </> :  null }
      </NavContainer>
      <NavMenu
          id="navbar-positioned-menu"
          aria-labelledby="navbar-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={(e) => setOpen(false)}><Link style={LinkStylePlain} to="/logout">Logout</Link></MenuItem>
      </NavMenu>
    </AppBar>
  )
}

export { Navbar }