import React, {useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import style from "./add_requests.module.css";

const validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    patientFullName: yup.string().required("Patient Full Name is required"),
    nationalNumber: yup.string().required("National Number is required"),
    reason: yup.string().required("Reason is required"),
    numberOfUnits: yup.number().required("Number of Units is required"),
    dateOfBirth: yup.string().required("Date of Birth is required"),
    BloodType: yup.string().required("Blood Type is required"),
});

export default function AddRequests() {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            phoneNumber: "",
            patientFullName: "",
            nationalNumber: "",
            reason: "",
            numberOfUnits: "",
            dateOfBirth: "",
            BloodType: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("Form submitted successfully", values);
            // Process the form data or make API calls here
        },
    });

    const {
        handleSubmit,
        // handleChange,
        values,
        touched,
        errors,
        setFieldValue,
    } = formik;

    const [requestData, setRequestData] = useState(formik.initialValues);

    const handleChange = (event) => {
        setRequestData({...requestData, [event.target.name]: event.target.value})
    }

    return (
        <Container className={style.container} component="main" maxWidth="xl">
            <Box
                sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    {/* Relative part */}
                    <Typography className={style.section} component="h1" variant="h5">
                        Relative information
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid className={style.relative} item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="fullName"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                autoFocus
                                value={requestData.fullName}
                                onChange={handleChange}
                                error={touched.fullName && Boolean(errors.fullName)}
                                helperText={touched.fullName && errors.fullName}
                            />
                        </Grid>
                        <Grid className={style.relative} item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="phone-number"
                                label="Phone Number"
                                name="phoneNumber"
                                autoComplete="phone-number"
                                value={requestData.phoneNumber}
                                onChange={handleChange}
                                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                helperText={touched.phoneNumber && errors.phoneNumber}
                            />
                        </Grid>
                    </Grid>

                    {/* Patient part */}
                    <Typography className={style.section} component="h1" variant="h5">
                        Patient information
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="patientFullName"
                                required
                                fullWidth
                                id="patientFullName"
                                label="Full Name"
                                autoFocus
                                value={requestData.patientFullName}
                                onChange={handleChange}
                                error={touched.patientFullName && Boolean(errors.patientFullName)}
                                helperText={touched.patientFullName && errors.patientFullName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="nationalNumber"
                                label="National Number"
                                name="nationalNumber"
                                autoComplete="nationalNumber"
                                value={requestData.nationalNumber}
                                onChange={handleChange}
                                error={touched.nationalNumber && Boolean(errors.nationalNumber)}
                                helperText={touched.nationalNumber && errors.nationalNumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="reason"
                                label="Reason"
                                type="text"
                                id="reason"
                                autoComplete="reason"
                                value={requestData.reason}
                                onChange={handleChange}
                                error={touched.reason && Boolean(errors.reason)}
                                helperText={touched.reason && errors.reason}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="numberOfUnits"
                                label="Number Of Units"
                                type="number"
                                id="numberOfUnits"
                                autoComplete="numberOfUnits"
                                value={requestData.numberOfUnits}
                                onChange={handleChange}
                                error={touched.numberOfUnits && Boolean(errors.numberOfUnits)}
                                helperText={touched.numberOfUnits && errors.numberOfUnits}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="dateOfBirth"
                                label="Date Of Birth"
                                name="dateOfBirth"
                                autoComplete="dateOfBirth"
                                value={requestData.dateOfBirth}
                                onChange={handleChange}
                                error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                                helperText={touched.dateOfBirth && errors.dateOfBirth}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl
                                fullWidth
                                error={touched.BloodType && Boolean(errors.BloodType)}
                            >
                                <InputLabel id="BloodType">Blood Type</InputLabel>
                                <Select
                                    required
                                    type="BloodType"
                                    labelId="BloodType"
                                    id="BloodType"
                                    name="BloodType"
                                    value={requestData.BloodType}
                                    onChange={handleChange}
                                    error={touched.BloodType && Boolean(errors.BloodType)}
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
                                {touched.BloodType && errors.BloodType && (
                                    <Typography variant="caption" color="error">
                                        {errors.BloodType}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    </Grid>

                    {/* Agreement */}
                    <Grid container sx={{ textAlign: 'left' }}>
                        <FormControl required error={touched.agreement && Boolean(errors.agreement)}>
                            <FormGroup>
                                <Grid item>
                                    <FormControlLabel
                                        required
                                        control={<Checkbox />}
                                        label="Blood sample has been taken for red cells or plasma"
                                        name="bloodSample"
                                        id="bloodSample"
                                        onChange={handleChange}
                                        error={touched.bloodSample && Boolean(errors.bloodSample)}
                                        helperText={touched.bloodSample && errors.bloodSample}
                                    />
                                </Grid>
                                <Grid item>
                                    <FormControlLabel
                                        required
                                        control={<Checkbox />}
                                        label="All required papers have been attached (Diagnosis, Doctor's signature, copy of patient id)"
                                        name="requiredPapers"
                                        id="requiredPapers"
                                        onChange={handleChange}
                                        error={touched.requiredPapers && Boolean(errors.requiredPapers)}
                                        helperText={touched.requiredPapers && errors.requiredPapers}
                                    />
                                </Grid>
                                {touched.agreement && errors.agreement && (
                                    <Typography variant="caption" color="error">
                                        {errors.agreement}
                                    </Typography>
                                )}
                            </FormGroup>
                        </FormControl>
                    </Grid>


                    {/* Submit button */}
                    <Stack direction="row" justifyContent="center" mt={2}>
                        <Button type="submit" variant="contained" color="primary">
                            Add Request
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}
