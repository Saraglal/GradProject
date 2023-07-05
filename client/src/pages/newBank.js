import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const theme = createTheme();

const validationSchema = Yup.object().shape({
    userName: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
    fullName: Yup.string().required("Full Name is required"),
    branch: Yup.string().required("Branch is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    governorate: Yup.string().required("Governorate is required"),
    address: Yup.string().required("Address is required"),
});

export default function AddBank() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
            fullName: "",
            branch: "",
            phoneNumber: "",
            governorate: "",
            address: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);

            // Extract the form values
            const { userName, password, fullName, branch, phoneNumber, governorate, address } = values;

            // Create the payload object with the form values
            const payload = {
                userName,
                password,
                fullName,
                branch,
                phoneNumber,
                governorate,
                address,
            };

            // Send the payload to the API endpoint
            axios
                .post("http://localhost:3000/branches/addBranch", payload)
                .then((response) => {
                    // Handle the response from the API if needed
                    console.log(response.data);
                    navigate('/addBank');
                })
                .catch((error) => {
                    // Handle any errors that occur during the API call
                    console.error(error);
                });
        },
    });

    //handle show password
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const branchNo = localStorage.getItem('branchNo');
    if (parseInt(branchNo) !== 1) {
        return (
            <Container component="main" maxWidth="xl">
                <Box
                    sx={{
                        marginTop: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h2>You are not authorized to access this page.</h2>
                </Box>
            </Container>
        );
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl">
                <Box
                    sx={{
                        marginTop: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
                        <Grid container justifyContent="center" sx={{ mb: 1 }}>
                            <Grid item>
                                <h2 style={{ fontSize: '1.6rem'}}>
                                    New Branch
                                </h2>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="userName"
                                    name="userName"
                                    label="User Name"
                                    autoComplete="user name"
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                                    helperText={formik.touched.userName && formik.errors.userName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    label="Password"
                                    autoComplete="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="fullName"
                                    name="fullName"
                                    label="Hospital Or Blood bank Name"
                                    autoComplete="full name"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="branch">Branch</InputLabel>
                                    <Select
                                        required
                                        id="branch"
                                        name="branch"
                                        labelId="branch"
                                        value={formik.values.branch}
                                        onChange={formik.handleChange}
                                        error={formik.touched.branch && Boolean(formik.errors.branch)}
                                    >
                                        <MenuItem value={"3"}>Hospital</MenuItem>
                                        <MenuItem value={"2"}>Blood Bank</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    autoComplete="phone number"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="governorate">Governorate</InputLabel>
                                    <Select
                                        required
                                        id="governorate"
                                        name="governorate"
                                        labelId="governorate"
                                        value={formik.values.governorate}
                                        onChange={formik.handleChange}
                                        error={formik.touched.governorate && Boolean(formik.errors.governorate)}
                                    >
                                        <MenuItem value={"Cairo"}>Cairo</MenuItem>
                                        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
                                        <MenuItem value={"Giza"}>Giza</MenuItem>
                                        <MenuItem value={"Port Said"}>Port Said</MenuItem>
                                        <MenuItem value={"Domietta"}>Domietta</MenuItem>
                                        <MenuItem value={"Suez"}>Suez</MenuItem>
                                        <MenuItem value={"Luxor"}>Luxor</MenuItem>
                                        <MenuItem value={"Aswan"}>Aswan</MenuItem>
                                        <MenuItem value={"Assiut"}>Assiut</MenuItem>
                                        <MenuItem value={"Sohag"}>Sohag</MenuItem>
                                        <MenuItem value={"Qena"}>Qena</MenuItem>
                                        <MenuItem value={"Beni Suef"}>Beni Suef</MenuItem>
                                        <MenuItem value={"Dakahlia"}>Dakahlia</MenuItem>
                                        <MenuItem value={"Gharbia"}>Gharbia</MenuItem>
                                        <MenuItem value={"Sharkia"}>Sharkia</MenuItem>
                                        <MenuItem value={"Menofia"}>monofia</MenuItem>
                                        <MenuItem value={"Beheira"}>Beheira</MenuItem>
                                        <MenuItem value={"Qaliubiya"}>Qaliubiya</MenuItem>
                                        <MenuItem value={"Kafr Al Sheikh"}>Kafr Al Sheikh</MenuItem>
                                        <MenuItem value={"Fayom"}>Fayom</MenuItem>
                                        <MenuItem value={"Red Sea"}>Red Sea</MenuItem>
                                        <MenuItem value={"North Sinai"}>North Sinai</MenuItem>
                                        <MenuItem value={"South Sinai"}>South Sinai</MenuItem>
                                        <MenuItem value={"Ismailia"}>Ismailia</MenuItem>
                                        <MenuItem value={"Matrouh"}>Matrouh</MenuItem>
                                        <MenuItem value={"Minya"}>Minya</MenuItem>
                                        <MenuItem value={"New Valley"}>New Valley</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    name="address"
                                    label="Address"
                                    autoComplete="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            size="large"
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
