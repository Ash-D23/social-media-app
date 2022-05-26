import { FavoriteBorder, Favorite, MoreVert, Share, ModeCommentOutlined, BookmarkBorderOutlined, Bookmark } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBookmarks, DeleteBookmarks } from "../../redux/features/Bookmarks/Bookmarks";
import { DeletePost, DisLikePost, LikePost } from "../../redux/features/Posts/PostsSlice";
import { FormattedDate } from "../../Utilities";
import { Comment } from "../Comment/Comment";
import { EditPostModal } from '../EditPostModal/EditPostModal'

function Post({ item, isbookmark }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [UserDetails, setUserDetails] = useState({})
  const [openModal, setopenModal] = useState(false)
  const [showComments, setshowComments] = useState(false)

  const { user, bookmarks } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(()=>{
    (
        function(){
            axios
                .get('/api/users/'+item.userId)
                .then(response => setUserDetails(response.data.user))
        }
    )()
  }, [])

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

  const CheckLikedPost = (likes, id) => {
    let isLiked = false
    likes.forEach(element => {
        if(element._id === id){
            isLiked = true
            return
        }
    });

    return isLiked
  }

  const CheckBookmarked = (bookmarks, id) => {
    let isBookmarked = false
    bookmarks.forEach(element => {
        if(element._id === id){
            isBookmarked = true
        }
    });
    return isBookmarked
  }

  const isLiked = CheckLikedPost(item.likes.likedBy, user.user._id)

  const isBookmarked = CheckBookmarked(bookmarks?.posts, item._id)

  console.log(item.comments)

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
                isbookmark ? null : (<IconButton onClick={handleClick}  aria-label="settings">
                    <MoreVert />
                </IconButton>) 
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
                { isLiked ? (<IconButton onClick={()=> dispatch(DisLikePost({id: item._id, token: user.token}))} aria-label="add to favorites">
                    <Favorite sx={{ color: "red"}} />
                </IconButton>) : (<IconButton onClick={() => dispatch(LikePost({ id: item._id, token: user.token}))} aria-label="add to favorites">
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
                        <Avatar />
                    </Box>
                    <Box ml={2} sx={{ flexGrow: 1}}>
                        <TextField sx={{ width: '100%'}} id="standard-basic" variant="standard" />
                    </Box>
                    <Button>Add</Button>
                </Box>
                <Box>
                { item.comments?.map((comment) => <Comment comment={comment} />)}
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