import { Facebook, GitHub, Twitter } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { FlexCenterBox } from '../../Utilities'
import { FooterContainer } from './styles'

function Footer() {
  return (
    <FooterContainer position="relative" p={2}>
      <Box>
        <Typography  color="text.ascent" variant={'h6'} align={'center'}>
          Let's Get In Touch
        </Typography>
      </Box>
      <FlexCenterBox p={1}>
          <Link color="text.ascent" mr={1} href="https://github.com/Ash-D23/" underline="none"><GitHub fontSize='large' /></Link>
          <Link color="text.ascent" mr={1} href="https://twitter.com/Ashutosh_devtlk" underline="none"><Twitter fontSize='large' /></Link>
          <Link color="text.ascent" href="https://www.linkedin.com/in/ashutosh18k23/" underline="none"><Facebook fontSize='large' /></Link>
      </FlexCenterBox>
      <Box>
        <Typography color="text.ascent" variant={'h6'} align={'center'}>
          Copyrights © 2022 StyliBook Store
        </Typography>
      </Box>
    </FooterContainer>
  )
}

export { Footer }