import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { grey } from "@mui/material/colors"
import { Container, Paper, Grid, Card, List, ListItemAvatar, ListItem, Typography, ListItemText, Avatar, Button } from '@mui/material';

export default function Connections() {
    return (
        <Container>
            <Paper elevation={2}>
                <Grid container>
                    <Grid item xs={12}>
                        <List>
                            <ListItem >
                                <ListItemText primary={<Grid container justifyContent="center" >
                                    <Grid item xs={8}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Skeleton variant="circular"></Skeleton>
                                            </Avatar>
                                        </ListItemAvatar>
                                    </Grid>
                                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80}></Skeleton>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80} ></Skeleton>

                                    </Grid>
                                </Grid>}>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                        <List>
                            <ListItem divider>
                                <ListItemText primary={<Grid container >
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Skeleton sx={{ fontSize: '1rem', marginRight: '10px' }} width={80}></Skeleton>
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
                    <Grid item xs={12} >
                        <List >
                            <ListItem divider>
                                <ListItemText primary={
                                    <Grid container >
                                        <Grid item xs={12}>
                                            <Skeleton sx={{ fontSize: '1rem' }} width={150}></Skeleton>
                                        </Grid>
                                    </Grid>
                                }></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={6} sx={{ p: 2, }}>
                        <List sx={{ border: `solid 1px ${grey[300]}`, borderRadius: 2 }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Skeleton variant="circular"></Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={<Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }}></Skeleton>}
                                    secondary={<><Stack direction="row" spacing={2}>
                                        <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }}>
                                        </Skeleton>
                                    </Stack>
                                    </>} >
                                </ListItemText>
                                <ListItemAvatar>
                                    <Avatar sx={{ width: '30px', height: '30px' }}>
                                        <Skeleton variant="circular"></Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItem>
                        </List>
                    </Grid>


                    <Grid item xs={6} sx={{ p: 2, }}>
                        <List sx={{ border: `solid 1px ${grey[300]}`, borderRadius: 2 }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Skeleton variant="circular"></Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={<Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }}></Skeleton>}
                                    secondary={<><Stack direction="column" >
                                        <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }}>
                                        </Skeleton>
                                        <Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }}>
                                        </Skeleton>
                                    </Stack>
                                    </>} >
                                </ListItemText>
                                <ListItemAvatar>
                                    <Avatar sx={{ width: '30px', height: '30px' }}>
                                        <Skeleton variant="circular"></Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={6} sx={{ p: 2, }}>
                        <List sx={{ border: `solid 1px ${grey[300]}`, borderRadius: 2 }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Skeleton variant="circular"></Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={<Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }}></Skeleton>}
                                    secondary={<><Stack direction="column" >
                                        <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }}>
                                        </Skeleton>
                                        <Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }}>
                                        </Skeleton>
                                    </Stack>
                                    </>} >
                                </ListItemText>
                                <ListItemAvatar>
                                    <Avatar sx={{ width: '30px', height: '30px' }}>
                                        <Skeleton variant="circular"></Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItem>
                        </List>
                    </Grid>


                    <Grid item xs={6} sx={{ p: 2, }}>
                        <List sx={{ border: `solid 1px ${grey[300]}`, borderRadius: 2 }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Skeleton variant="circular"></Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={<Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }}></Skeleton>}
                                    secondary={<><Stack direction="column" >
                                        <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }}>
                                        </Skeleton>
                                        <Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }}>
                                        </Skeleton>
                                    </Stack>
                                    </>} >
                                </ListItemText>
                                <ListItemAvatar>
                                    <Avatar sx={{ width: '30px', height: '30px' }}>
                                        <Skeleton variant="circular"  ></Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItem>
                        </List>
                    </Grid>

                </Grid>
            </Paper>
        </Container>
    )
}