import React, { useEffect, useState } from "react";
import TopBar from "../Components/topbar/topbar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import Box from "@mui/material/Box";

export default function AddBank() {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        fetchBranchNames();
    }, []);

    const fetchBranchNames = () => {
        axios
            .get("http://localhost:3000/transaction/getBranches")
            .then((response) => {
                setBranches(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
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
        <div align="center">
            <TopBar />
            <Container maxWidth="md" component="main">
                <Grid container spacing={3} alignItems="flex-end">
                    {branches.map((branch) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={branch.BranchName}
                            xs={12}
                            sm={branch.BranchName === "Enterprise" ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={branch.BranchName}
                                    titleTypographyProps={{ align: "center" }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === "light"
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                        <Typography variant="body1" align="left" key={branch.BB_Address}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <LocationOnIcon /> <a href={branch.BB_Address} >{branch.BB_Address}</a>
                                            </div>
                                        </Typography>
                                        <Typography variant="body1" align="left" key={branch.BB_Phone}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <CallIcon /> {branch.BB_Phone}
                                            </div>
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Button fullWidth variant="contained" href="./bloodstock">
                                                Details
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Button fullWidth variant="contained" href="newBank">
                                                Edit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <br />
                <Button fullWidth size="large" variant="contained" color="success" href="./newBank">
                    NEW
                </Button>
            </Container>
        </div>
    );
}
