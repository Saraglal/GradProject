/* eslint-disable no-octal-escape */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EventIcon from '@mui/icons-material/Event';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HomeIcon from '@mui/icons-material/Home';
import ManIcon from '@mui/icons-material/Man';
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import {MenuItem, Modal, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1769aa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  maxWidth:750,
  color: theme.palette.text.primary,
}));

const DonerFile = () => {

    const rowData = localStorage.getItem('row');
    const row = JSON.parse(rowData);
    console.log(row);
    const [acceptedRows, setAcceptedRows] = useState([]);
    const [isActionTaken, setIsActionTaken] = useState(false);
    const [branchNames, setBranchNames] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState(row.BranchName);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const branchNo = localStorage.getItem('branchNo');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploadClicked, setIsUploadClicked] = useState(false);


    useEffect(() => {
        fetchBranchNames();
    }, []);

    const fetchBranchNames = () => {
        axios
            .get('http://localhost:3000/branches/getBranches')
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
                    HumanID: row.HumanID,
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
                    HumanID: row.HumanID,
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


    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile, `${row.HumanID}.pdf`);

            axios
                .post('http://localhost:3000/transaction/uploadFile', formData)
                .then((response) => {
                    console.log('File uploaded successfully');
                })
                .catch((error) => {
                    console.error('File upload failed', error);
                });
        }
        setIsUploadClicked(true);
    };
    return (
   <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          border: 1,  
          textAlign: 'left',
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
          <Typography gutterBottom variant="h5" component="div" >
              {row.HumanName}
            </Typography>
            <hr/>
            <br/>
             <Grid
                padding={2}
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: '100%' }}
                >
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6" >
                        <FingerprintIcon/> {row.HumanID}
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6">
                        <EventIcon/>{row.TransDate}
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6" >
                        <PhoneIcon/>  {row.PhoneNumber}
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h6" >
                        <WaterDropIcon/> {row.BloodType}
                    </Typography>
                </Grid>
                 <Grid xs={6}>
                     <Typography gutterBottom variant="h6">
                         <HomeIcon/> {selectedBranch ? selectedBranch : row.BranchName}
                         {parseInt(row.Accepted) === 0 && !isActionTaken && parseInt(branchNo) === 1 &&(
                             <IconButton size="small" onClick={() => handleButtonClick(row)}>
                                 <EditIcon />
                             </IconButton>
                         )}
                     </Typography>
                 </Grid>
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
      </StyledPaper>
       {isUploadClicked && (
      <StyledPaper
        sx={{
          border : 1,
          textAlign: 'left',
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
            <Avatar sx={{ bgcolor: '#1769aa' }}>R</Avatar>
          </Grid>

          <Grid item xs>
            <Typography noWrap><a href=''>Results15.10.2023</a></Typography>
            <Typography noWrap variant="subtitle2">whole Blood</Typography>
            <Typography noWrap variant="subtitle2">Ibn Sina Hospital</Typography>
          </Grid>
        </Grid>
      </StyledPaper>)}
       {parseInt(row.Accepted) === 0 && !isActionTaken &&  (
           <Stack   paddingTop={2}
                    direction="row"
                    spacing={2}
                    width="750px"
                    sx={{
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                    }} >
               <Button fullWidth variant="contained" color="success" onClick={() => handleAccept(row)}>
                   Accept
               </Button>
               <Button fullWidth variant="contained" color="error"  onClick={() => handleReject(row)}>
                   Reject
               </Button>
           </Stack>
       )}
       <Box paddingTop={2}>
           <input type="file" accept="application/pdf" onChange={handleFileSelect} />
           <Button
               variant="contained"
               color="primary"
               startIcon={<CloudUploadIcon />}
               onClick={handleUpload}
           >
               Upload
           </Button>
       </Box>
    </Box>
    )
}

export default DonerFile;