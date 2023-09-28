import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { grey } from "@mui/material/colors"
import { Container, Paper, Card, CardContent, Grid, List, ListItemAvatar, ListItem, Typography, ListItemText, Avatar, Button } from '@mui/material';

export default function Resume() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <List sx={{ border: `solid 1px ${grey[300]}`, borderRadius: 2 }}>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <ListItem divider>
                                    <ListItemText primary={
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Skeleton sx={{ fontSize: '1rem' }}></Skeleton>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Stack direction="row" spacing={3} justifyContent="flex-end">
                                                    <ListItemAvatar>
                                                        <Avatar sx={{ width: '30px', height: '30px' }}>
                                                            <Skeleton variant="circular"></Skeleton>
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemAvatar>
                                                        <Avatar sx={{ width: '30px', height: '30px' }}>
                                                            <Skeleton variant="circular"></Skeleton>
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    }></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    )
};
