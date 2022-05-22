import { FavoriteBorder, MoreVert, Share, ModeCommentOutlined, BookmarkBorderOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBookmarks } from "../../redux/features/Bookmarks/Bookmarks";
import { DeletePost } from "../../redux/features/Posts/PostsSlice";

function Post({ item }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { user } = useSelector(state => state)

  const dispatch = useDispatch()

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

  return (
    <Card sx={{ margin: {
        xs: 1,
        sm: 4
    } }}>
        <CardHeader
            avatar={
                <Avatar
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            }
            action={
                <IconButton onClick={handleClick}  aria-label="settings">
                    <MoreVert />
                </IconButton>
            }
            title="John Doe"
            subheader="September 14, 2022"
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
                <IconButton aria-label="add to favorites">
                    <FavoriteBorder />
                </IconButton>
                <IconButton aria-label="comment">
                    <ModeCommentOutlined />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
                <IconButton onClick={() => dispatch(AddBookmarks({ id: item._id, postData: item, token: user.token}))} aria-label="bookmark">
                    <BookmarkBorderOutlined />
                </IconButton>
            </Box>
        </CardActions>
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
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    </Card>
  )
}

export { Post }