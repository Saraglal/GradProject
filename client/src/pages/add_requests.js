import React from "react";
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
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import style from "./add_requests.module.css";
import axios from "axios";

const validationSchema = yup.object().shape({
    RName: yup.string().required("Full Name is required"),
    PhoneNumber: yup.string().required("Phone Number is required"),
    HumanName: yup.string().required("Patient Full Name is required"),
    HumanID: yup.string().required("National Number is required"),
    Notes: yup.string().required("Reason is required"),
    UnitNumber: yup.number().required("Number of Units is required"),
    BirthDate: yup.string().required("Date of Birth is required"),
    BloodType: yup.string().required("Blood Type is required"),
});

export default function AddRequests() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            RName: "",
            PhoneNumber: "",
            HumanName: "",
            HumanID: "",
            TransTypeId:2,
            Accepted:0,
            Notes: "",
            UnitNumber: "",
            BirthDate: "",
            BloodType: "",
            BranchNo: localStorage.getItem("branchNo"),
            CampID: localStorage.getItem("CampID"),
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
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
                    navigate('/requests');
                })
                .catch((error) => {
                    console.error("Form submission error", error);
                });
        },
    });

    const {
        handleSubmit,
        values,
        touched,
        errors,
        setFieldValue,
    } = formik;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFieldValue(name, value);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    const handleFileUpload = (event) => {
        const files = event.target.files;
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("file", files[i]);
        }

        // Make the HTTP request to upload the files
        axios.post("http://example.com/upload", formData)
            .then((response) => {
                // Handle the response after file upload
                console.log(response.data);
            })
            .catch((error) => {
                // Handle any errors during file upload
                console.error(error);
            });
    };


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
                                name="RName"
                                required
                                fullWidth
                                id="RName"
                                label="Full Name"
                                autoFocus
                                value={values.RName}
                                onChange={handleChange}
                                error={touched.RName && Boolean(errors.RName)}
                                helperText={touched.RName && errors.RName}
                            />
                        </Grid>
                        <Grid className={style.relative} item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="phone-number"
                                label="Phone Number"
                                name="PhoneNumber"
                                inputProps={{
                                    maxLength: 11,
                                }}
                                autoComplete="phone-number"
                                value={values.PhoneNumber}
                                onChange={handleChange}
                                error={touched.PhoneNumber && Boolean(errors.PhoneNumber)}
                                helperText={touched.PhoneNumber && errors.PhoneNumber}
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
                                name="HumanName"
                                required
                                fullWidth
                                id="HumanName"
                                label="Full Name"
                                autoFocus
                                value={values.HumanName}
                                onChange={handleChange}
                                error={touched.HumanName && Boolean(errors.HumanName)}
                                helperText={touched.HumanName && errors.HumanName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="HumanID"
                                label="National Number"
                                name="HumanID"
                                autoComplete="HumanID"
                                inputProps={{
                                    maxLength: 15,
                                }}
                                value={values.HumanID}
                                onChange={handleChange}
                                error={touched.HumanID && Boolean(errors.HumanID)}
                                helperText={touched.HumanID && errors.HumanID}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="Notes"
                                label="Reason"
                                type="text"
                                id="Notes"
                                autoComplete="Notes"
                                value={values.Notes}
                                onChange={handleChange}
                                error={touched.Notes && Boolean(errors.Notes)}
                                helperText={touched.Notes && errors.Notes}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="UnitNumber"
                                label="Number Of Units"
                                type="number"
                                id="UnitNumber"
                                autoComplete="UnitNumber"
                                value={values.UnitNumber}
                                onChange={handleChange}
                                error={touched.UnitNumber && Boolean(errors.UnitNumber)}
                                helperText={touched.UnitNumber && errors.UnitNumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="BirthDate"
                                label="Date of Birth"
                                name="BirthDate"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {
                                        max: formatDate('2006/12/31'),
                                    },
                                }}
                                value={values.BirthDate}
                                onChange={handleChange}
                                error={touched.BirthDate && Boolean(errors.BirthDate)}
                                helperText={touched.BirthDate && errors.BirthDate}
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
                                    label="BloodType"
                                    id="BloodType"
                                    name="BloodType"
                                    value={values.BloodType}
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
                    <Grid container sx={{ textAlign: "left" }}>
                        <FormControl required error={touched.agreement && Boolean(errors.agreement)}>
                            <FormGroup>
                                <Grid item>
                                    <FormControlLabel
                                        required
                                        control={<Checkbox />}
                                        label="Blood sample has been taken for red cells or plasma"
                                        name="bloodSample"
                                        id="bloodSample"
                                        checked={values.bloodSample}
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
                                        checked={values.requiredPapers}
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
                    <Stack direction="column" alignItems="center" mt={4} spacing={2}>
                        <label>Upload your required papers here</label><input type="file" onChange={handleFileUpload} multiple />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ width: 200, height: 60, fontSize: '1rem', padding: 3 ,fontWeight: "bold"}}>
                            Add Request
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}
