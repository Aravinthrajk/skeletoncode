import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

export default function Videoplay() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Card>
                    <CardContent>
                        <Skeleton variant="rectangular" height={300} />
                        <Skeleton sx={{ fontSize: '2rem' }} width={300} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Skeleton sx={{ fontSize: '1rem' }} width={270} />
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Skeleton sx={{ fontSize: '1rem' }} width={100} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} sx={{ padding: '10px', margin:"10px",height: '170px' }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Skeleton variant="rectangular" height={50} width={100} />
                                </Grid>
                                <Grid item xs={8}>
                                    <Skeleton sx={{ fontSize: '1rem',padding: '6px',width:'70%',margin:'10px auto'}} />
                                    <Skeleton sx={{ fontSize:'1rem',padding:'6px',width:'70%',margin:'10px auto' }} />
                                    <Skeleton sx={{ fontSize: '1rem' ,padding: '6px' }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </Grid>
    );
}
