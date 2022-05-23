import { CircularProgress } from '@mui/material'
import React from 'react'
import { LoaderContainer, LoaderContainerOverlay } from './styles'

function LoaderOverlay() {
  return (
    <>
      <LoaderContainer>
        <CircularProgress color="primary" />
      </LoaderContainer>
      <LoaderContainerOverlay>

      </LoaderContainerOverlay>
    </>
    
  )
}

export { LoaderOverlay }