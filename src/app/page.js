import * as React from 'react';
import { Typography, Box, Container } from '@mui/material'
import DashboardJobsLoading from './components/landing/DashboardJobsLoading';
import DashBoardJobSearch from './components/landing/DashboardJobSearch';
import Connections from './components/Connection/Connections';
import Youtube from './components/Youtube';
import Videoplay from './components/VideoPlay';
import Resume from './components/Resumes/Resume';





export default function Variants() {
  return (
    <Container>
      <Box>
        
        <Typography variant="body1">
          Landing/Dashboard Jobs Loading component path .: components/landing/DashboardJobSearch.js
        </Typography>
        <DashBoardJobSearch />
      </Box>
      <Box>
        <Typography variant="body1">
          Landing/Dashboard Jobs Loading component path .: components/landing/DashboardJobsLoading.js
        </Typography>
        <DashboardJobsLoading />
      </Box>

      <Box>
        <Typography variant="body1">
          Connection Jobs Loading component path .: components/Connection/Connections.js
        </Typography>
        <Connections />
      </Box>

      <Box>
        <Typography variant="body1">
          All interview video Loading component path .: components/Allinterviewvideo.js
        </Typography>
        <Youtube />
      </Box>
      <Box>
        <Typography variant="body1">
          interview video playing component path : components/VideoPlay.js
        </Typography>
        <Videoplay />
      </Box>
      <Box>
        <Typography variant="body1">
          Resumes List component path : components/Resume/Resume.js
        </Typography>
        <Resume/>
      </Box>

    </Container>


  )
}
