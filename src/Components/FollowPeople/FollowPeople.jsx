import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function FollowPeople() {
  return (
    <Grid mt={0.5} container spacing={2}>
        <Grid item xs={3}>
            <Avatar />
        </Grid>
        <Grid item xs={6}>
            <Box  sx={{ display: 'flex', flexDirection: 'column'}}>
            <Typography variant="p">Ashutosh Kumar</Typography>
            <Typography variant="p">@ashutoshk23</Typography>
            </Box>
        </Grid>
        <Grid item xs={3}>
            <Button>Follow</Button>
        </Grid>
    </Grid>
  )
}

export { FollowPeople }