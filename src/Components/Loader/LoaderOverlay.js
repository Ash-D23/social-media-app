import { CircularProgress } from '@mui/material'
import { Box, flexbox } from '@mui/system'
import React from 'react'
import { LoaderContainer, LoaderOverlay } from './styles'

function LoaderOverlay() {
  return (
    <>
      <LoaderContainer>
        <CircularProgress color="primary" />
      </LoaderContainer>
      <LoaderOverlay>

      </LoaderOverlay>
    </>
    
  )
}

export { LoaderOverlay }