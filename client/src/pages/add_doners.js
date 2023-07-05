import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
import {useNavigate} from "react-router-dom";

const theme = createTheme();

export default function AddDoners() {
    const navigate = useNavigate();
    const initialValues = {
        HumanName: '',
        PhoneNumber: '',
        HumanID: '',
        BirthDate: '',
        TransTypeId:1,
        Accepted:0,
        Notes: '',
        BloodType: '',
        LastDonation: '',
        BranchNo: localStorage.getItem('branchNo'),
        CampID: localStorage.getItem('CampID'),
    };

    const validationSchema = Yup.object({
        HumanName: Yup.string().required('Full Name is required'),
        HumanID: Yup.string().required('National Number is required'),
        PhoneNumber: Yup.string().required('Phone Number is required'),
        BirthDate: Yup.string().required('Date of Birth is required'),
        Notes: Yup.string().required('Diseases is required'),
        BloodType: Yup.string().required('Blood Type is required'),

    });

    const handleSubmit = (values) => {
            console.log("Form submitted successfully", values);
            // Process the form data or make API calls here
            fetch("http://localhost:3000/transaction/addTransaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Form submission successful", data);
                    navigate('/doners');
                })
                .catch((error) => {
                    console.error("Form submission error", error);
                });
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

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
                        <WaterDropIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Doner Form
                    </Typography>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="full name"
                                    label="Full Name"
                                    {...formik.getFieldProps('HumanName')}
                                    autoComplete="Full Name"
                                    error={formik.touched.HumanName && formik.errors.HumanName}
                                    helperText={formik.touched.HumanName && formik.errors.HumanName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="HumanID"
                                    label="National Number"
                                    type="text"
                                    id="National Number"
                                    {...formik.getFieldProps('HumanID')}
                                    autoComplete="National Number"
                                    error={formik.touched.HumanID && formik.errors.HumanID}
                                    helperText={formik.touched.HumanID && formik.errors.HumanID}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone number"
                                    label="Phone Number"
                                    name="PhoneNumber"
                                    {...formik.getFieldProps('PhoneNumber')}
                                    autoComplete="phone-number"
                                    error={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
                                    helperText={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Date Of Birth"
                                    label="Date Of Birth"
                                    name="BirthDate"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        inputProps: {
                                            min: '1900-01-01',
                                            max: '2005-12-31',
                                        },
                                    }}
                                    {...formik.getFieldProps('BirthDate')}
                                    autoComplete="Date Of Birth"
                                    error={formik.touched.BirthDate && formik.errors.BirthDate}
                                    helperText={formik.touched.BirthDate && formik.errors.BirthDate}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Diseases"
                                    label="Diseases"
                                    name="Notes"
                                    {...formik.getFieldProps('Notes')}
                                    autoComplete="Diseases"
                                    error={formik.touched.Notes && formik.errors.Notes}
                                    helperText={formik.touched.Notes && formik.errors.Notes}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="BloodType">Blood Type</InputLabel>
                                    <Select
                                        required
                                        label="BloodType"
                                        id="BloodType"
                                        name="BloodType"
                                        value={formik.values.BloodType}
                                        onChange={formik.handleChange}
                                        error={formik.touched.BloodType && formik.errors.BloodType}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'unknown'}>unknown</MenuItem>
                                        <MenuItem value={'A+'}>A+</MenuItem>
                                        <MenuItem value={'A-'}>A-</MenuItem>
                                        <MenuItem value={'B+'}>B+</MenuItem>
                                        <MenuItem value={'B-'}>B-</MenuItem>
                                        <MenuItem value={'AB+'}>AB+</MenuItem>
                                        <MenuItem value={'AB-'}>AB-</MenuItem>
                                        <MenuItem value={'O+'}>O+</MenuItem>
                                        <MenuItem value={'O-'}>O-</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="LastDonation"
                                    label="Last Donation"
                                    name="LastDonation"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        inputProps: {
                                            max: new Date().toISOString().split('T')[0],
                                        },
                                    }}
                                    {...formik.getFieldProps('LastDonation')}
                                    autoComplete="LastDonation"
                                    error={formik.touched.LastDonation && formik.errors.LastDonation}
                                    helperText={formik.touched.LastDonation && formik.errors.LastDonation}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, fontWeight: 'Bold', fontSize: '1rem' }}
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? 'Adding Doner...' : 'Add Doner'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
