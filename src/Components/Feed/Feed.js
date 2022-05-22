import { Skeleton, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Post } from '../Post/Post'

function Feed({ posts, isbookmark }) {

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
            {posts?.map((item) => <Post key={item?._id} item={item} isbookmark={isbookmark} />)}
        </>
    )
}

export { Feed }