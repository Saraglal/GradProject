import React from "react" ;
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HomeIcon from '@mui/icons-material/Home';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import TopBar from '.././Components/topbar/topbar';


const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1769aa' : '#fff',
    padding: theme.spacing(2),
    color: '#000',
}));


const Approval = () => {
  return (
   <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <TopBar/>
        <Grid  container spacing={3} xs={12}>
            {/*requests need to approve that the patient is at our hospital */}
            <Grid  xs={7}>
                <StyledPaper
                    sx={{
                    border: 1,
                    borderColor: '#E0E0E0',
                    borderRadius:3,
                    textAlign: 'left',
                    my: 1,
                    mx: 'auto',
                    p: 2,
                    }}
                >
                    <Typography gutterBottom variant="h6" component="div" >
                            Mazen Mohamed ali mostafa
                        </Typography>
                        <hr/>
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
                                <Typography gutterBottom variant="h6" >
                                    <WaterDropIcon/> A-
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>needed units: </b> 2
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>Reason : </b> surgery
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <HomeIcon/>Ibn Sina Hospital
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <AttachFileIcon/> hospital report
                                </Typography>
                            </Grid>
                        </Grid>
                        <Stack  direction="row" spacing={2}>
                            <Button fullWidth  variant="contained" color="primary">
                                Accept
                            </Button>
                            <Button  fullWidth  variant="contained" color="error">
                                Reject
                            </Button>
                        </Stack>
                </StyledPaper>
                <StyledPaper
                    sx={{
                    border: 1,
                    borderColor: '#E0E0E0',
                    borderRadius:3,
                    textAlign: 'left',
                    my: 1,
                    mx: 'auto',
                    p: 2,
                    }}
                >
                    <Typography gutterBottom variant="h6" component="div" >
                            Mazen Mohamed ali mostafa
                        </Typography>
                        <hr/>
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
                                <Typography gutterBottom variant="h6" >
                                    <WaterDropIcon/> A-
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>needed units: </b> 2
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>Reason : </b> surgery
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <HomeIcon/>Ibn Sina Hospital
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <AttachFileIcon/> hospital report
                                </Typography>
                            </Grid>
                        </Grid>
                        <Stack direction="row" spacing={2}>
                            <Button fullWidth  variant="contained" color="primary">
                                Accept
                            </Button>
                            <Button  fullWidth  variant="contained" color="error">
                                Reject
                            </Button>
                        </Stack>
                </StyledPaper>
                <StyledPaper
                    sx={{
                    border: 1,
                    borderColor: '#E0E0E0',
                    borderRadius:3,
                    textAlign: 'left',
                    my: 1,
                    mx: 'auto',
                    p: 2,
                    }}
                >
                    <Typography gutterBottom variant="h6" component="div" >
                            Mazen Mohamed ali mostafa
                        </Typography>
                        <hr/>
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
                                <Typography gutterBottom variant="h6" >
                                    <WaterDropIcon/> A-
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>needed units: </b> 2
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <b>Reason : </b> surgery
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <HomeIcon/>Ibn Sina Hospital
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom variant="h6" >
                                    <AttachFileIcon/> hospital report
                                </Typography>
                            </Grid>
                        </Grid>
                        <Stack direction="row" spacing={2}>
                            <Button fullWidth  variant="contained" color="primary">
                                Accept
                            </Button>
                            <Button  fullWidth  variant="contained" color="error">
                                Reject
                            </Button>
                        </Stack>
                </StyledPaper>
            </Grid>
            {/*location and contact number of hospitals & blood banks */}
            <Grid  xs={5} sx={{paddingTop:3}}>
                        <List
                        sx={{
                            width: '100%',
                            maxWidth:500,
                            bgcolor: '#F3F3F5',
                            borderRadius: 3,
                        }}
                        >
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor:   "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor:   "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor:   "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor:   "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor:   "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor:   "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor:   "#1769aa" }}>
                                H
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Ibn Sina Hospital" secondary="Tanta - elgish st" />
                            <Button variant="outlined">Call</Button>
                        </ListItem>
                    </List>
            </Grid>
        </Grid>
    </Box>
  );
}

export default Approval;