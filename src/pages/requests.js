import React from "react" ;
import TopBar from '.././Components/topbar/topbar';
import RequestsTable from '.././Components/tables/requestable';
import SlideBar from '.././Components/slidebar/slidebuttonbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



const Requests = () => {
    return (
        <div>
            <TopBar/>
            {/* 3 buttons will change the content of the page & the slide button bar  */}
            <Box sx={{ '& button': { m:1 } }}>
               <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Button fullWidth variant="contained" size="large">
                        All
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button fullWidth variant="contained" size="large">
                        Hospitals
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button fullWidth variant="contained" size="large">
                        Blood Banks
                        </Button>
                    </Grid>
                </Grid>        
            </Box>
            <SlideBar/>
            <RequestsTable/>
        </div>
    )
}

export default Requests;