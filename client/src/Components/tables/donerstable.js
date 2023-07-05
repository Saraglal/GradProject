import React from "react" ;
import style from './table.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const DonersTable = ({ rows }) => {
    return(
    <div>
        <TableContainer className= {`${style.table}`}   >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center"><b>ID</b></TableCell>
                    <TableCell align="center"><b>National Number</b></TableCell>
                    <TableCell align="center"><b>Name</b></TableCell>
                    <TableCell align="center"><b>Age</b></TableCell>
                    <TableCell align="center"><b>Phone</b></TableCell>
                    <TableCell align="center"><b>Blood Group</b></TableCell>
                    <TableCell align="center"><b>Last Donation</b></TableCell>
                    <TableCell align="center"><b>Diseases</b></TableCell>
                    <TableCell align="center"><b>Action</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row , index) => {
                    const handleFilesClick = (rowData) => {
                        // Save the row data in localStorage
                        localStorage.setItem("row", JSON.stringify(rowData));
                    };
                    const counter = index + 1; // Calculate the row number
                    return (
                <TableRow
                key={counter}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {counter}
                </TableCell>
                    <TableCell align="center">{row.HumanID}</TableCell>
                    <TableCell align="center">{row.HumanName}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">{row.PhoneNumber}</TableCell>
                    <TableCell align="center">{row.BloodType}</TableCell>
                    <TableCell align="center">{row.LastDonation}</TableCell>
                    <TableCell align="center">{row.Notes}</TableCell>

                    <TableCell align="center">
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="small button group"
                            >
                            {/*}we show here the action if it happend if not show button to take a look and take action{*/}
                            <a href='./doner_profile'>
                             <Button onClick={() => handleFilesClick(row)}>
                                 Show
                             </Button>
                           </a>
                        </ButtonGroup>
                    </TableCell>
                </TableRow>
            )})}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}

export default DonersTable;