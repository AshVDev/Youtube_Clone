import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/system";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoThumbnailUrl,
} from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  const { backgroundColor } = useContext(ThemeContext);

  const HoverTypography = styled(Typography)({
    "&:hover": {
      color: `${backgroundColor ? "#818589" : "black"}`, // Change this to your desired hover color
    },
  });

  return (
    <Card
      sx={{
        width: { md: "310px", xs: "100%", sm: "358px" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: `${backgroundColor ? "#1e1e1e" : "#d3d3d3"}`,
          height: "106px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight={`bold`}
            color={`${backgroundColor ? "white" : "black"}`}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0.6)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <HoverTypography
            variant="subtitle2"
            // fontWeight={`bold`}
            color={`${backgroundColor ? "#d3d3d3" : "gray"}`}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </HoverTypography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
