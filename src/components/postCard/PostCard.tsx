import { ReactElement } from "react";
import { Typography, Box, Avatar, Button, Paper } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { postObj } from "../../types/types";

interface Props {
  post: postObj;
}

export default function PostCard({ post }: Props): ReactElement {
  dayjs.extend(relativeTime);
  const dateDiff = dayjs(post.createdAt).fromNow();

  return (
    <Paper
      elevation={2}
      sx={{
        p: "1.5rem",
        width: "100%",
        borderRadius: "5px",
      }}
    >
      <Typography m="0 0 0.5rem 0" noWrap variant="h4">
        {post.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          m: "0.75rem 0",
        }}
      >
        <Avatar
          variant="square"
          alt="user avatar"
          sx={{ borderRadius: "5px" }}
        />

        <Box sx={{ m: "0 0 0 0.75rem" }}>
          <Typography noWrap>{post.user.displayName}</Typography>
          <Typography>{dateDiff}</Typography>
        </Box>
      </Box>

      <Typography m="0.75rem 0">{post.description}</Typography>

      <Button sx={{ m: "0.5rem 0 0 0" }} startIcon={<ChatBubbleOutlineIcon />}>
        Comments
      </Button>
    </Paper>
  );
}
