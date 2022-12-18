import React from 'react'
import Midcontainer from './Midcontainer';
import Sidebar from './Sidebar';
import { Grid, Box } from '@material-ui/core';

function Wrapper() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#fbfffe' }} >
            <Grid container  >
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Midcontainer />
                </Grid>
            </Grid >
        </Box >
    )
}

export default Wrapper
