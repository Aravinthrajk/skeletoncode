import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Container, Paper, Grid, List,  ListItem,  ListItemText } from '@mui/material';

export default function DashBoardJobSearch () {
    return (
        <Container>
            <Paper elevation={2} style={{ marginBottom: '50px' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <List>
                            <ListItem divider>
                                <ListItemText primary={<Grid container justifyContent="center" >
                                    <Grid item xs={8}>
                                        <Skeleton sx={{ fontSize: '1rem' }} width={300}></Skeleton>
                                    </Grid>
                                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Skeleton sx={{ fontSize: '1rem', borderRadius: '20px' }} width={100}></Skeleton>
                                    </Grid>
                                </Grid>}>
                                </ListItemText>
                            </ListItem>
                            <ListItem divider>
                                <ListItemText primary={<Grid container >
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Skeleton sx={{ fontSize: '1rem', borderRadius: '20px', marginRight: '10px' }} width={150}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', borderRadius: '20px', marginRight: '10px' }} width={150}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', borderRadius: '20px', marginRight: '10px' }} width={150}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', borderRadius: '20px', marginRight: '10px' }} width={150}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', borderRadius: '20px', marginRight: '10px' }} width={150}></Skeleton>
                                    </Grid>
                                </Grid>}>
                                </ListItemText>
                            </ListItem>
                            <ListItem divider>
                                <ListItemText primary={<Grid container >
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80}></Skeleton>

                                    </Grid>
                                </Grid>}>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}