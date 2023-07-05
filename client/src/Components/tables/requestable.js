import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./table.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import axios from 'axios';

const RequestsTable = ({ rows }) => {
    const [acceptedRows, setAcceptedRows] = useState([]); // Store the IDs of accepted rows


    const handleAccept = (row) => {
        setAcceptedRows([...acceptedRows, row.TransId]); // Add the row ID to the acceptedRows array
        row.Accepted = 1; // Update the Accepted value of the row to 1
        if (!acceptedRows.includes(row.TransId)) {
            axios
                .post('http://localhost:3000/transaction/updateAccepted', {
                    TransId: row.TransId,
                    Accepted: 1,
                })
                .then((response) => {
                    console.log(response.data);

                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const handleReject = (row) => {
        setAcceptedRows([...acceptedRows, row.TransId]); // Add the row ID to the acceptedRows array
        row.Accepted = 2; // Update the Accepted value of the row to 2
        if (!acceptedRows.includes(row.TransId)) {
            axios
                .post('http://localhost:3000/transaction/updateAccepted', {
                    TransId: row.TransId,
                    Accepted: 2,
                })
                .then((response) => {
                    console.log(response.data);

                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div className={style.base}>
            <TableContainer className={style.table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {/* Request table head */}
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <b>ID</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>National Number</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Name</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Age</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Reason</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Facility</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Blood Group</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Date</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Units</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Action</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {/* Request table body */}
                    <TableBody>
                        {rows.map((row , index) => {
                            const handleFilesClick = (rowData) => {
                                // Save the row data in localStorage
                                localStorage.setItem("row", JSON.stringify(rowData));
                                console.log(row);
                            };
                            const counter = index + 1; // Calculate the row number
                            return (
                            <TableRow
                                key={counter}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {counter}
                                </TableCell>
                                <TableCell align="center">{row.HumanID}</TableCell>
                                <TableCell align="center">{row.HumanName}</TableCell>
                                <TableCell align="center">{row.age}</TableCell>
                                <TableCell align="center">{row.Notes}</TableCell>
                                <TableCell align="center">{row.BranchName}</TableCell>
                                <TableCell align="center">{row.BloodType}</TableCell>
                                <TableCell align="center">{row.TransDate}</TableCell>
                                <TableCell align="center">{row.UnitNumber}</TableCell>
                                <TableCell align="center">
                                    {/* We show here (accept or not) */}
                                    <Link
                                        to={{
                                            pathname: "/request_file",
                                            state: row, // Pass the row data as state to the request_file page
                                        }}
                                    >
                                        <Button
                                            sx={{ m: 1 }}
                                            variant="outlined"
                                            aria-label="small button group"
                                            onClick={() => handleFilesClick(row)}
                                        >
                                            Files
                                        </Button>
                                    </Link>
                                    {row.Accepted == 1
                                        ?<ButtonGroup
                                        disableElevation
                                        variant="outlined"
                                        aria-label="small button group"
                                    >
                                        <Button color="success" style={{ backgroundColor: "green", color: "white" }} disabled>Accepted</Button>
                                        <Button disabled color="error">Reject</Button>
                                    </ButtonGroup>
                                        : row.Accepted == 2
                                        ?<ButtonGroup
                                                disableElevation
                                                variant="outlined"
                                                aria-label="small button group"
                                            >
                                                <Button disabled color="success">Accept</Button>
                                                <Button disabled color="error" style={{ backgroundColor: "red", color: "white" }}>Rejected</Button>
                                            </ButtonGroup>
                                            :<ButtonGroup disableElevation variant="outlined" aria-label="small button group">
                                                <Button
                                                    color="success"
                                                    disabled={row.Accepted == 1 || acceptedRows.includes(row.TransId)} // Disable the button if the row is already accepted or if it's in the acceptedRows array
                                                    onClick={() => handleAccept(row)}
                                                >
                                                    Accept
                                                </Button>
                                                <Button
                                                    color="error"
                                                    disabled={row.Accepted == 2 || acceptedRows.includes(row.TransId)} // Disable the button if the row is already rejected or if it's in the acceptedRows array
                                                    onClick={() => handleReject(row)}
                                                >
                                                    Reject
                                                </Button>
                                            </ButtonGroup>}

                                </TableCell>
                            </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default RequestsTable;
