import React from 'react'
import Midcontainer from './Midcontainer';
import Sidebar from './Sidebar';
import { Grid, Box } from '@material-ui/core';

function Wrapper() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#f5f5f5' }} >
            <Grid container columns={16} >
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <Midcontainer />
                </Grid>
            </Grid >
        </Box >
    )
}

export default Wrapper
