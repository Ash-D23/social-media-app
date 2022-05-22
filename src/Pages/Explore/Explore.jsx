import { Chip, Stack } from '@mui/material'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Feed } from '../../Components'
import { fetchPosts } from '../../redux/features/Posts/PostsSlice'

function Explore() {

  const { posts } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      <Stack direction="row" spacing={1} p={2} sx={{  
          marginTop: 1,
          marginLeft: 3, 
          marginRight: 3,
        }}>
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
      <Feed posts={posts.posts} />
    </>
  )
}

export { Explore }