import { Skeleton, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Post } from '../Post/Post'

function Feed() {

    const [loading, setloading] = useState(false)

    return loading ? (
        <Stack spacing={1}>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="rectangular" height={300} />
        </Stack>
    ) : (
        <>
            <Post />
            <Post />
            <Post />
            <Post />
        </>
    )
}

export { Feed }