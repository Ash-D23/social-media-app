import { InsertPhoto, Mood } from '@mui/icons-material'
import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { FlexSpaceBetweenBox } from '../../Utilities'

function NewPost() {
  return (
    <Box p={2} sx={{  
        marginTop: 1,
        marginLeft: {
          xs:1,
          sm:3, 
        },
        marginRight: {
          xs:1,
          sm:3, 
        },
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`
    }}>
        <TextField
            placeholder="Write Something Interesting"
            multiline
            rows={2}
            maxRows={4}
            sx={{ width: '100%'}}
        />
        <FlexSpaceBetweenBox mt={1}>
          <Stack direction="row" spacing={2}>
            <InsertPhoto />
            <Mood />
          </Stack>
          <Button variant="contained">
            Post
          </Button>
        </FlexSpaceBetweenBox>
    </Box>
  )
}

export { NewPost }