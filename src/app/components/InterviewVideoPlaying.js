import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

export default function InterviewVideoPlaying() {

  return (
    <>
      {/* First Grid with 8 columns */}
      <Grid container spacing={2}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={3} key={index}>
            <Card>
              <CardContent>
                {index === 0 ? (
                  <Skeleton variant="rectangular" height={300} />
                ) : (
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Second Grid with 4 columns */}
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={3} key={index}>
            <Card>
              <CardContent>
                <Skeleton variant="rectangular" height={300} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

