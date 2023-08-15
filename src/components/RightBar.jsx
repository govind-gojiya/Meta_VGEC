import { Avatar, AvatarGroup, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import MostLikedPost from './MostLikedPost'

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
      <Box position="fixed">
        <Stack direction={"column"}>
          <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
          <AvatarGroup max={4} sx={{ float: "left"}}>
            <Avatar alt="Remy Sharp" src="" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Stack>
        <Typography variant='h6' fontWeight={100} mt={2} mb={1}>Most Liked Posts</Typography>
        <Box sx={{ height: "50vh", overflow: "scroll"}}>
        <MostLikedPost sx={{}} />
        </Box>
      </Box>
    </Box>
  )
}

export default RightBar