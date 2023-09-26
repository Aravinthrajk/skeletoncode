import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {grey} from "@mui/material/colors"
import {Container,Paper,Grid,List,ListItemAvatar,ListItem,Typography,ListItemText,Avatar, Button} from '@mui/material';

export default function Connections (){
    return(
        <Container>
            <Paper elevation={2}>
                <Grid container>
                    <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Skeleton variant='circular'>

                                        </Skeleton>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>

                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Skeleton sx={{ fontSize: '1rem', borderRadius: '20px' }} width={100}></Skeleton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}