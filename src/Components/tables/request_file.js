import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EventIcon from '@mui/icons-material/Event';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//styling of page blocks 
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1769aa' : '#fff',
    padding: theme.spacing(2),
    color: '#000',
}));


const RequestFile = () => {
    return (
        <Box sx={{padding: 5, flexGrow: 1 }}>
            {/*}slide page 2 sections{*/}
            <Grid  container spacing={3}>
                {/*}Right section information card{*/}
                <Grid  xs={6}>
                    <StyledPaper
                        sx={{
                        border : 1,
                        textAlign: 'left',
                        my: 1,
                        mx: 'auto',
                        p: 2,
                        }}
                    >
                    {/*}Relative information{*/}
                        <Typography textAlign = 'center'  gutterBottom variant="h5" component="div" >
                        <b> Relative information</b>
                        </Typography>
                        <br/>
                        <Grid container spacing={3}>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                Yassin Mahmoud
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                <PhoneIcon/> 012151123874
                                </Typography>
                            </Grid>
                        </Grid>
                        <br/>
                        {/*}Patient information{*/}
                        <Typography textAlign = 'center'  gutterBottom variant="h5" component="div" >
                            <b>Patient information</b>
                        </Typography>
                        <Grid xs={12}>
                            <Typography   gutterBottom variant="h6" >
                                Mazen Mohamed ali mostafa
                            </Typography>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <FingerprintIcon/> 30022151123874
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <EventIcon/>23 \ 4\ 1989
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <WaterDropIcon/> A-
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <HomeIcon/>Ibn Sina Hospital
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>Reason : </b> surgery
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>Units needed : </b> 2
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>Action : </b> pending
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>Date : </b> 10\ 5\ 2023
                                </Typography>
                            </Grid>
                        </Grid>
                    </StyledPaper>
                </Grid>
                {/*}Left section for files{*/}
                <Grid container spacing={1} xs={6}>
                    <h1>Attached Files</h1>
                    <Grid xs={12}>
                       <StyledPaper
                        sx={{
                        border : 1,
                        textAlign: 'left',
                        my: 1,
                        mx: 'auto',
                        p: 2,
                        }}
                    >
                        <Typography fontWeight="md"><b>Diagnosis files</b></Typography>
                        <Typography level="body2"> 12MB</Typography>
                        <Stack direction="row" spacing={2}>
                            <Button fullWidth  variant="outlined">
                                Open
                            </Button>
                            <Button  fullWidth  variant="contained">
                                Download
                            </Button>
                            </Stack>
                    </StyledPaper>
                    </Grid>
                   <Grid xs={12}>
                       <StyledPaper
                    sx={{
                    border : 1,
                    textAlign: 'left',
                    my: 1,
                    mx: 'auto',
                    p: 2,
                    }}
                    >
                            <Typography fontWeight="md"><b>Doctor's signature</b></Typography>
                            <Typography level="body2">12MB</Typography>
                            <Stack direction="row" spacing={2}>
                            <Button fullWidth  variant="outlined">
                                Open
                            </Button>
                            <Button  fullWidth  variant="contained">
                                Download
                            </Button>
                            </Stack>
                    </StyledPaper>
                    </Grid>
                    <Grid xs={12}>
                       <StyledPaper
                    sx={{
                    border : 1,
                    textAlign: 'left',
                    my: 1,
                    mx: 'auto',
                    p: 2,
                    }}
                    >
                            <Typography fontWeight="md"><b>copy of patient id</b></Typography>
                            <Typography level="body2">12MB</Typography>
                            <Stack direction="row" spacing={2}>
                            <Button fullWidth  variant="outlined">
                                Open
                            </Button>
                            <Button  fullWidth  variant="contained">
                                Download
                            </Button>
                            </Stack>
                    </StyledPaper>
                    </Grid>
                </Grid> 
            </Grid>
            <Stack paddingTop={2} direction="row" spacing={2}>
                <Button fullWidth  variant="contained" color="success">
                    Accept
                </Button>
                <Button  fullWidth  variant="contained" color="error">
                    Reject
                </Button>
            </Stack>
        </Box>
  );
}

export default RequestFile;