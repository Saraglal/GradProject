import React from "react" ;
import style from './home.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TopBar from '.././Components/topbar/topbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Home = () => {
    return (
        <div className= {`${style.grid}`} style={{ width: '100%' }}>
            <TopBar/>
            {/*<Box
                sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: 'repeat(3, 1fr)',
                padding: 2,
                }}
            >
                    <Card sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <CardContent>
                            <Box><LocationOnIcon fontSize="large"/></Box>
                            <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                        </CardContent>
                        <CardActions>
                            <a href="./place_analysis">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                >
                                Places Analysis
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <CardContent>
                            <Box><TaskAltIcon fontSize="large"/></Box>
                            <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                        </CardContent>
                        <CardActions>
                            <a href="./approval">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                >
                                Current Request
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                     <Card sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <CardContent>
                            <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                            <Box><VolunteerActivismIcon fontSize="large"/></Box>
                        </CardContent>
                        <CardActions>
                            <a href="./bloodstock">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}
                                >
                                Blood stock
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                
            </Box>*/}
        </div>
    )
}

export default Home;

