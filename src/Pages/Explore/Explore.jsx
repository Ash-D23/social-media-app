import { Chip, Stack } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Feed } from '../../Components'
import { fetchPosts } from '../../redux/features/Posts/PostsSlice'

function Explore() {

  const { posts } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const [ category, setCategory ] = useState('trending')

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const FilterPostsByCategory = (posts) => {
    if(category === 'liked'){
      return [...posts].sort((a,b) => b.likes.likeCount - a.likes.likeCount)
    }
    if(category === 'latest'){
      return [...posts].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
    return posts
  }

  const filteredPosts = FilterPostsByCategory(posts.posts)

  return (
    <>
      <Stack direction="row" spacing={1} p={2} sx={{  
          marginTop: 1,
          marginLeft: 3, 
          marginRight: 3,
        }}>
        <Chip label="Trending" variant={category === "trending" ? "filled" : "outlined"} onClick={()=> setCategory('trending')} />
        <Chip label="Latest" variant={category === "latest" ? "filled" : "outlined"} onClick={()=> setCategory('latest')} />
        <Chip label="Most Liked" variant={category === "liked" ? "filled" : "outlined"} onClick={()=> setCategory('liked')} />
      </Stack>
    <Feed posts={filteredPosts} />
    </>
  )
}

export { Explore }