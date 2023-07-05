import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { MenuItem, TextField , Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


// styling of page blocks
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1769aa' : '#fff',
    padding: theme.spacing(2),
    color: '#000',
}));

const RequestFile = () => {
    const rowData = localStorage.getItem('row');
    const row = JSON.parse(rowData);
    const branchNo = localStorage.getItem('branchNo');
    const [acceptedRows, setAcceptedRows] = useState([]);
    const [isActionTaken, setIsActionTaken] = useState(false);
    const [branchNames, setBranchNames] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);


    useEffect(() => {
        fetchBranchNames();
    }, []);

    const fetchBranchNames = () => {
        axios
            .get('http://localhost:3000/transaction/getBranches')
            .then((response) => {
                setBranchNames(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleAccept = (row) => {
        if (!acceptedRows.includes(row.TransId)) {
            axios
                .post('http://localhost:3000/transaction/updateAccepted', {
                    TransId: row.TransId,
                    Accepted: 1,
                    BranchName: selectedBranch,
                })
                .then((response) => {

                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
            setAcceptedRows([...acceptedRows, row.TransId]); // Add the row ID to the acceptedRows array
            row.Accepted = 1; // Update the Accepted value of the row to 1
            setIsActionTaken(true);
        }
    };
    const handleButtonClick = (row) => {
        setIsDropdownOpen(true);
        setSelectedRow(row);
        setSelectedBranch(row.BranchName);
        console.log(selectedRow);
        console.log(isDropdownOpen);
        console.log(row.BranchName);
    };

    const handleDropdownChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const handleSave = () => {
        console.log('Selected Branch:', selectedBranch);
        // Reset the states after saving
        setIsDropdownOpen(false);
    };

    const handleReject = (row) => {
        if (!acceptedRows.includes(row.TransId)) {
            axios
                .post('http://localhost:3000/transaction/updateAccepted', {
                    TransId: row.TransId,
                    Accepted: 2,
                    BranchName: row.BranchName,
                })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
            setAcceptedRows([...acceptedRows, row.TransId]); // Add the row ID to the acceptedRows array
            row.Accepted = 2; // Update the Accepted value of the row to 2
            setIsActionTaken(true);
        }
    };

    return (
        <Box sx={{ padding: 5, flexGrow: 1 }}>
            {/* slide page 2 sections */}
            <Grid container spacing={3}>
                {/* Right section information card */}

                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Typography textAlign="center" gutterBottom variant="h5" component="div">
                            <b>Patient information</b>
                        </Typography>
                    </Grid>
                    <StyledPaper
                        sx={{
                            border: 1,
                            textAlign: 'left',
                            my: 1,
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <br />
                        {/* Patient information */}

                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h4">
                                {row.HumanName}
                            </Typography>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6">
                                    <FingerprintIcon /> {row.HumanID}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6">
                                    <EventIcon /> {row.TransDate}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6">
                                    <WaterDropIcon /> {row.BloodType}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6">
                                    <HomeIcon /> {selectedBranch ? selectedBranch : row.BranchName}
                                    {parseInt(row.Accepted) === 0 && !isActionTaken && parseInt(branchNo) === 1 &&(
                                        <IconButton size="small" onClick={() => handleButtonClick(row)}>
                                            <EditIcon />
                                        </IconButton>
                                    )}
                                </Typography>

                                <Modal
                                    open={isDropdownOpen}
                                    onClose={() => setIsDropdownOpen(false)}
                                    aria-labelledby="select-branch-modal"
                                    aria-describedby="select-branch-modal-description"
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: 300,
                                            bgcolor: 'background.paper',
                                            border: '2px solid #000',
                                            boxShadow: 24,
                                            p: 2,
                                        }}
                                    >
                                        <Typography id="select-branch-modal" variant="h6" component="div" sx={{ mb: 3 }}>
                                            Select Branch
                                        </Typography>
                                        <TextField
                                            select
                                            label="Select Branch"
                                            value={selectedBranch}
                                            onChange={handleDropdownChange}
                                            variant="outlined"
                                            sx={{ mb: 2 }}
                                            fullWidth
                                        >
                                            {branchNames.map((branch) => (
                                                <MenuItem key={branch.BranchName} value={branch.BranchName}>
                                                    {branch.BranchName}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <IconButton size="small" onClick={handleSave} >
                                            Save
                                        </IconButton>
                                    </Box>
                                </Modal>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6">
                                    <b>Reason: </b> {row.Notes}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6">
                                    <b>Units needed: </b> {row.UnitNumber}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6">
                                    <b>Action: </b>
                                    {parseInt(row.Accepted) === 1 ? 'Accepted' : parseInt(row.Accepted) === 2 ? 'Rejected' : 'Pending'}
                                </Typography>
                            </Grid>


                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6">
                                    <b>Date: </b> {row.TransDate}
                                </Typography>
                            </Grid>
                        </Grid>
                    </StyledPaper>
                </Grid>
                {/* Left section for files */}
                <Grid item container spacing={1} xs={6}>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h1">
                            Attached Files
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledPaper
                            sx={{
                                border: 1,
                                textAlign: 'left',
                                my: 1,
                                mx: 'auto',
                                p: 2,
                            }}
                        >
                            <Typography fontWeight="md">
                                <b>Diagnosis files</b>
                            </Typography>
                            <Typography level="body2">12MB</Typography>
                            <Stack direction="row" spacing={2}>
                                <Button fullWidth variant="outlined">
                                    Open
                                </Button>
                                <Button fullWidth variant="contained">
                                    Download
                                </Button>
                            </Stack>
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledPaper
                            sx={{
                                border: 1,
                                textAlign: 'left',
                                my: 1,
                                mx: 'auto',
                                p: 2,
                            }}
                        >
                            <Typography fontWeight="md">
                                <b>Doctor's signature</b>
                            </Typography>
                            <Typography level="body2">12MB</Typography>
                            <Stack direction="row" spacing={2}>
                                <Button fullWidth variant="outlined">
                                    Open
                                </Button>
                                <Button fullWidth variant="contained">
                                    Download
                                </Button>
                            </Stack>
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledPaper
                            sx={{
                                border: 1,
                                textAlign: 'left',
                                my: 1,
                                mx: 'auto',
                                p: 2,
                            }}
                        >
                            <Typography fontWeight="md">
                                <b>Copy of patient ID</b>
                            </Typography>
                            <Typography level="body2">12MB</Typography>
                            <Stack direction="row" spacing={2}>
                                <Button fullWidth variant="outlined">
                                    Open
                                </Button>
                                <Button fullWidth variant="contained">
                                    Download
                                </Button>
                            </Stack>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Grid>
            {parseInt(row.Accepted) === 0 && !isActionTaken &&   (
                <Stack paddingTop={2} direction="row" spacing={2}>
                    <Button fullWidth variant="contained" color="success" onClick={() => handleAccept(row)}>
                        Accept
                    </Button>
                    <Button fullWidth variant="contained" color="error"  onClick={() => handleReject(row)}>
                        Reject
                    </Button>
                </Stack>
            )}
        </Box>
    );
};

export default RequestFile;
