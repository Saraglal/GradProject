import React from "react" ;
import style from './add_requests.module.css' ;
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';


const theme = createTheme();

export default function AddRequests() {
  //handleSubmit a function to make the moving text onclick
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //handleChange for select items
  const [BloodType, setType] = React.useState('');
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className= {`${style.container}`} component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {/*}Relative part{*/}
            <Typography className= {`${style.section}`} component="h1" variant="h5">
              Relative information
            </Typography>
            <Grid container spacing={2}>
              <Grid className= {`${style.relative}`} item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid className= {`${style.relative}`} item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone number"
                  label="Phone Number"
                  name="phone number"
                  autoComplete="phone-number"
                />
              </Grid>
            </Grid>
            {/*}patient part{*/}
            <Typography className= {`${style.section}`} component="h1" variant="h5">
                Patient information
              </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="National Number"
                  name="National Number"
                  autoComplete="National Number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Reason"
                  label="Reason"
                  type="Reason"
                  id="Reason"
                  autoComplete="Reason"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Number Of Units"
                  label="Number Of Units"
                  type="Number Of Units"
                  id="Number Of Units"
                  autoComplete="Number Of Units"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Date Of Birth"
                  label="Date Of Birth"
                  name="Date Of Birth"
                  autoComplete="Date Of Birth"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
               <FormControl fullWidth>
                    <InputLabel id="BloodType">Blood Type</InputLabel>
                    <Select
                        required
                        type="BloodType"
                        labelId="BloodType"
                        id="BloodType"
                        value={BloodType}
                        label="BloodType"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={"unknown"}>unknown</MenuItem>
                        <MenuItem value={"A+"}>A+</MenuItem>
                        <MenuItem value={"A-"}>A-</MenuItem>
                        <MenuItem value={"B+"}>B+</MenuItem>
                        <MenuItem value={"B-"}>B-</MenuItem>
                        <MenuItem value={"AB+"}>AB+</MenuItem>
                        <MenuItem value={"AB-"}>AB-</MenuItem>
                        <MenuItem value={"O+"}>O+</MenuItem>
                        <MenuItem value={"O-"}>O-</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
            </Grid>
            
            {/*}buttons part{*/}
            <FormGroup>
              <FormControlLabel required control={<Checkbox />} label="Blood sample has been taken for red cells or plasma" />
              <FormControlLabel required control={<Checkbox />} label="All required papers have been attached(Diagnosis , Doctor's signature , copy of patient id)" />
            </FormGroup>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Button
              color="success"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                >
                    Add Request
                </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}