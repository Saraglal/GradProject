/* eslint-disable no-octal-escape */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EventIcon from '@mui/icons-material/Event';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HomeIcon from '@mui/icons-material/Home';
import ManIcon from '@mui/icons-material/Man';



const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1769aa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  maxWidth:700,
  color: theme.palette.text.primary,
}));


const DonerFile = () => {
        return (
   <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          border: 1,  
          textAlign: 'left',
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
          <Typography gutterBottom variant="h5" component="div" >
                Mazen Mohamed ali mostafa
            </Typography>
            <hr/>
            <br/>
             <Grid
                padding={2}
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: '100%' }}
                >
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6" >
                        <FingerprintIcon/> 30022151123874
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6">
                        <EventIcon/>23 \ 4\ 1989
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6" >
                        <PhoneIcon/>  01266327652
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6" >
                        <WaterDropIcon/> A-
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6" >
                            <ManIcon/> male
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6" >
                        <HomeIcon/> Elgharbia - Tanta - 25 Saeed st
                    </Typography>
                </Grid>
            </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          border : 1,
          textAlign: 'left',
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
            <Avatar sx={{ bgcolor: '#1769aa' }}>R</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap><a href=''>Results15.10.2023</a></Typography>
            <Typography noWrap variant="subtitle2">whole Blood</Typography>
            <Typography noWrap variant="subtitle2">Ibn Sina Hospital</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
         border: 1,
         textAlign: 'left',
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
            <Avatar sx={{ bgcolor: '#1769aa' }} >R</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap><a href=''>Results15.10.2023</a></Typography>
            <Typography noWrap variant="subtitle2">whole Blood</Typography>
            <Typography noWrap variant="subtitle2">Ibn Sina Hospital</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          border : 1,
          textAlign: 'left',
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
            <Avatar sx={{ bgcolor: '#1769aa' }}>R</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap><a href=''>Results15.10.2023</a></Typography>
            <Typography noWrap variant="subtitle2">whole Blood</Typography>
            <Typography noWrap variant="subtitle2">Ibn Sina Hospital</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
    )
}

export default DonerFile;