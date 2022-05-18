import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkStyle, LinkStylePlain } from '../../Utilities';
import {AboutContainer, StyledPara} from './styles'

function Home() {
  return (
    <Box sx={{ height: { sm: 'auto', md: '94vh'}}}>
      <Grid container sx={{height: '100%'}}>
        <Grid item sm={12} md={5}>
          <AboutContainer>
            <Box p={3} sx={{ height: '40%'}}>
              <Typography mt={2} sx={{fontWeight: 500}} variant="h2" color="secondary.dark">
                TripyTrip
              </Typography>
              <Typography mt={1} variant="h5">
                Share Your Travel Stories and Connect with fellow Travellers and Find your Tribe
              </Typography>
            </Box>
            <Box p={3} sx={{ height: '30%'}}>
              <StyledPara>
                <Typography mr={1} sx={{ fontWeight: 500}} variant="h4" >
                  Follow 
                </Typography>
                <Typography variant="h6" >
                  your Friends 
                </Typography>
              </StyledPara>
              <StyledPara>
                <Typography mr={1} sx={{ fontWeight: 500}} variant="h4" >
                  Connect 
                </Typography>
                <Typography variant="h6" >
                  with Travellers
                </Typography>
              </StyledPara>
              <StyledPara>
                <Typography mr={1} sx={{ fontWeight: 500}} variant="h4" >
                  Share 
                </Typography>
                <Typography variant="h6" >
                  your Stories
                </Typography>
              </StyledPara>
            </Box>
            <Box p={3} sx={{ height: '30%'}}>
              <Box sx={{ 
                width: {
                xs: '100%',
                sm: '65%'
                },
                marginTop: '1rem'
              }}>
                <Link style={LinkStylePlain} to="/signup"><Button sx={{width: '100%'}} variant="contained">Join Now</Button></Link>
                <Link style={LinkStyle} to="/login"><Typography m={1} align="center">
                  Already have an account?
                </Typography></Link>
              </Box>
            </Box>
          </AboutContainer>
        </Grid>
        <Grid item sm={12} md={7}>
          <Box pt={2} sx={{ 
              overflow: 'hidden',
              width: '100%',
              display: {
                md: "block",
                xs: 'none'
              }
          }}>
              <img src="./Images/social.svg" alt="social" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export { Home }