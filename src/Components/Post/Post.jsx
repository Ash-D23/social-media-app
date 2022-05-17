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

function Post() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ margin: 5 }}>
        <CardHeader
            avatar={
                <Avatar
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVert onClick={handleClick} />
                </IconButton>
            }
            title="John Doe"
            subheader="September 14, 2022"
        />
        <CardMedia
            component="img"
            height="20%"
            image="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Waterfall"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nulla commodo, molestie metus sed, dictum nulla. Phasellus vestibulum neque metus, a vestibulum enim ullamcorper ut.
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
                <IconButton aria-label="bookmark">
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
            <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
    </Card>
  )
}

export { Post }