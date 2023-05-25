import React from "react" ;
import style from './home.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TopBar from '../Components/topbar/topbar';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
      {...other}
    />
  );
}

const Home = () => {
    return (
        <div className= {`${style.grid}`} style={{ width: '100%' }}>
            <TopBar/>
            <Box
                sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: 'repeat(3, 1fr)',
                padding: 2,
                }}
            >
             {/*}   <Item>
                    <Box sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                        <Box><VolunteerActivismIcon fontSize="large"/></Box>
                    </Box>
                    <a href="./doners">
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                    Total Doners
                    </Button>
                    </a>
                </Item>
                <Item>
                    <Box sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                        <Box><VolunteerActivismIcon fontSize="large"/></Box>
                    </Box>
                    <a href="./requests">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                    Total Requests
                    </Button>
                    </a>
                </Item>
                <Item>
                    <Box sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                        <Box><VolunteerActivismIcon fontSize="large"/></Box>
                    </Box>
                    <a href="./">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                    Donation Camps
                    </Button>
                    </a>
                </Item>{*/}
                <Item>
                    <Box sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                        <Box><VolunteerActivismIcon fontSize="large"/></Box>
                    </Box>
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
                </Item>
                <Item>
                    <Box sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                        <Box><VolunteerActivismIcon fontSize="large"/></Box>
                    </Box>
                    <a href="./bloodstock">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                    BloodStock
                    </Button>
                    </a>
                </Item>
                <Item>
                    <Box sx={{ display: 'grid' , gridTemplateColumns: 'repeat(2, 1fr)', }}>
                        <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>98.3 K </Box>
                        <Box><VolunteerActivismIcon fontSize="large"/></Box>
                    </Box>
                    <a href="./approval">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                    hospital approval
                    </Button>
                    </a>
                </Item>
            </Box>
        </div>
    )
}

export default Home;

