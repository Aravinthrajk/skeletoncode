import * as React from 'react';
import { Typography, Box, Container } from '@mui/material'
import DashboardJobsLoading from './components/landing/DashboardJobsLoading';
import DashBoardJobSearch from './components/landing/DashboardJobSearch';
import Connections from './components/Connection/Connections';

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
        <Connections/>
        </Box>
    </Container>


  )
}
