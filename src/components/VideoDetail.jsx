import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  
  console.log("id");
  console.log(id);
  console.log("id");

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
  }, [id, setVideoDetail]);

  console.log("videoDetail");
  console.log(videoDetail);
  console.log("videoDetail");
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <ReactPlayer url={`https://wwww.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Typography color='#fff' variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail