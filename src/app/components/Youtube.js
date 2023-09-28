import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const CustomSkeletonRow = () => {
  return (
    <>
      <Grid container spacing={2}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={4} key={index}>
            <Card>
              <CardContent>
                <Skeleton variant="rectangular" height={180} />
                <Skeleton />
                <Skeleton />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Second Row */}
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={4} key={index}>
            <Card>
              <CardContent>
                <Skeleton variant="rectangular" height={180} />
                <Skeleton />
                <Skeleton />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CustomSkeletonRow;
