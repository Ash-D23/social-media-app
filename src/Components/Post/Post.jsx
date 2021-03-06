import { FavoriteBorder, Favorite, MoreVert, Share, ModeCommentOutlined, BookmarkBorderOutlined, Bookmark } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBookmarks, DeleteBookmarks } from "../../redux/features/Bookmarks/Bookmarks";
import { DeletePost, DisLikePost, LikePost } from "../../redux/features/Posts/PostsSlice";
import { CheckIdinArray, FormattedDate, toastsuccess } from "../../Utilities";
import { Comment } from "../Comment/Comment";
import { EditPostModal } from '../EditPostModal/EditPostModal';

function Post({ item, isbookmark }) {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const [UserDetails, setUserDetails] = useState({})
  const [openModal, setopenModal] = useState(false)
  const [showComments, setshowComments] = useState(false)
  const [comments, setcomments] = useState([])
  const [commentinput, setcommentinput] = useState('')

  const { user, bookmarks } = useSelector(state => state)

  const dispatch = useDispatch()

  const config = {
    headers: {
      authorization: user.token,
    }
  }

  useEffect(()=>{
    (
        async function(){
            try{
                const res = await axios.get('/api/users/'+item.userId)
                setUserDetails(res.data.user)
            }catch(err){
                console.error(err)
            }
        }
    )()
  }, [])

  useEffect(()=>{
    (
        async function(){
            try{
                const res = await axios.get('/api/comments/'+item._id)
                setcomments(res.data?.comments?.reverse())
            }catch(err){
                console.error(err)
            }
        }
    )()
  }, [])

  const addComment = async () => {
      try{
        const res = await axios.post('/api/comments/add/'+ item._id, { commentData: { text: commentinput}}, config)
        setcomments(res.data?.comments?.reverse())
        setcommentinput('')
        toastsuccess('Comment Added')
      }catch(err){
        console.error(err)
      }
  }

  const editComment = async (data, id) => {
    try{
        const res = await axios.post('/api/comments/edit/'+ item._id + '/' + id, { commentData: data } , config)
        setcomments(res.data?.comments?.reverse())
        setcommentinput('')
        toastsuccess('Comment Edited')
    }catch(err){
        console.error(err)
    }
  }

  const deleteComment = async (id) => {
    try{
        const res = await axios.post('/api/comments/delete/'+ item._id + '/' + id, {} , config)
        setcomments(res.data?.comments?.reverse())
        toastsuccess('Comment Deleted')
    }catch(err){
        console.error(err)
    }
  }
  const handleDisLike = () => {
      dispatch(DisLikePost({id: item._id, token: user.token}))
    }

  const handleLike = () => {
      dispatch(LikePost({ id: item._id, token: user.token}))
    }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(DeletePost({ id: item._id, token: user.token }))
    handleClose()
  }

  const handleEdit = () => {
     setopenModal(true)
     handleClose()
  }

  const isLiked = CheckIdinArray(item.likes.likedBy, user.user._id)

  const isBookmarked = CheckIdinArray(bookmarks?.posts, item._id)

  return (
    <Card sx={{ margin: {
        xs: 1,
        sm: 4
    } }}>
        <CardHeader
            avatar={
                <Avatar
                src={UserDetails?.img}
                />
            }
            action={
                isbookmark ? null : (item.userId === user?.user?._id ? <IconButton onClick={handleClick}  aria-label="settings">
                    <MoreVert />
                </IconButton> : null) 
            }
            title={UserDetails?.FullName}
            subheader={FormattedDate(new Date(item?.createdAt))}
        />
        { item?.imgURL ? <CardMedia
            component="img"
            height="20%"
            image={item?.imgURL}
            alt="Waterfall"
        /> : null }
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {item?.content}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                { isLiked ? (<IconButton onClick={handleDisLike} aria-label="add to favorites">
                    <Favorite sx={{ color: "red"}} />
                </IconButton>) : (<IconButton onClick={handleLike} aria-label="add to favorites">
                    <FavoriteBorder />
                </IconButton>) }
                <IconButton onClick={() => setshowComments( prev => !prev)} aria-label="comment">
                    <ModeCommentOutlined />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
                { isBookmarked ? (<IconButton onClick={() => dispatch(DeleteBookmarks({ id: item._id, token: user.token}))} aria-label="bookmark">
                    <Bookmark />
                </IconButton>) : (<IconButton onClick={() => dispatch(AddBookmarks({ id: item._id, postData: item, token: user.token}))} aria-label="bookmark">
                <BookmarkBorderOutlined />
                </IconButton> ) }
            </Box>
        </CardActions>
        { showComments ? <Box>
                <Box p={2} sx={{ display: 'flex'}}>
                    <Box>
                        <Avatar src={user?.user?.img} />
                    </Box>
                    <Box ml={2} sx={{ flexGrow: 1}}>
                        <TextField 
                        value={commentinput} 
                        onChange={(e) => setcommentinput(e.target.value)} 
                        sx={{ width: '100%'}} 
                        id="standard-basic" 
                        variant="standard" />
                    </Box>
                    <Button onClick={addComment}>Add</Button>
                </Box>
                <Box>
                { comments?.map((comment) => <Comment key={comment._id} comment={comment} editComment={editComment} deleteComment={deleteComment} />)}
                </Box>
        </Box> : null}
        <Menu
            id="basic-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
        { openModal ? <EditPostModal open={openModal} handleClose={()=> setopenModal(false)} data={item} /> : null}
    </Card>
  )
}

export { Post }