import React, {useState} from "react" ;
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const theme = createTheme();

export default function AddDoners() {
  const initialValues = {
    fullName: "",
    phoneNumber: "",
    gender: "",
    nationalNumber: "",
    address: "",
    dateOfBirth: "",
    diseases: "",
    bloodType:"",
    lastDonation: "",
};

  const [addDonerData, setAddDonerData] = useState(initialValues);

  const handleChange = (event) => {
    setAddDonerData({...addDonerData, [event.target.name]: event.target.value})
}
  //handleSubmit for text items
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //handleChange for select items
  // const [Gender, setGender] = React.useState('');
  // const [BloodType, setType] = React.useState('');
  // const handleChange = (event) => {
  //   setGender(event.target.value);
  //   setType(event.target.value);
  // };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#242640' }}>
            <WaterDropIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            doner form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="full name"
                  label="Full Name"
                  name="fullName"
                  value={addDonerData.fullName}
                  onChange={handleChange}
                  autoComplete="Full Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="nationalNumber"
                  label="National Number"
                  type="National Number"
                  id="National Number"
                  value={addDonerData.nationalNumber}
                  onChange={handleChange}
                  autoComplete="National Number"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel id="Gender">Gender</InputLabel>
                    <Select
                        required
                        type="Gender"
                        labelId="Gender"
                        id="Gender"
                        name="gender"
                        value={addDonerData.gender}
                        onChange={handleChange}
                        label="Gender"
                        onSubmit={handleSubmit}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  value={addDonerData.address}
                  onChange={handleChange}
                  autoComplete="Address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone number"
                  label="Phone Number"
                  name="phoneNumber"
                  value={addDonerData.phoneNumber}
                  onChange={handleChange}
                  autoComplete="phone-number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Date Of Birth"
                  label="Date Of Birth"
                  name="dateOfBirth"
                  value={addDonerData.dateOfBirth}
                  onChange={handleChange}
                  autoComplete="Date Of Birth"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Diseases"
                  label="Diseases"
                  name="diseases"
                  value={addDonerData.diseases}
                  onChange={handleChange}
                  autoComplete="Diseases"
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
                        name="bloodType"
                        value={addDonerData.bloodType}
                        label="BloodType"
                        onChange={handleChange}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="LastDonation"
                  label="LastDonation"
                  name="lastDonation"
                  value={addDonerData.lastDonation}
                  onChange={handleChange}
                  autoComplete="LastDonation"
                />
              </Grid>
            </Grid>
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Doner
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}