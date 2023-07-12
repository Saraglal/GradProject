import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DescriptionIcon from '@mui/icons-material/Description';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../Components/tables/table.module.css';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Header style & body style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1769aa',
        color: theme.palette.common.white,
        fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const UserPrediction = () => {
    const [stock, setStock] = useState([]);
    const [value, setValue] = useState('All');

    useEffect(() => {
        fetchBranchNames();
    }, []);

    const fetchBranchNames = () => {
        const BranchNo = localStorage.getItem('branchNo');
        axios
            .post('http://localhost:3000/prediction/getPrediction', { BranchNo })
            .then((response) => {
                const responseData = response.data;
                setStock(responseData);
                console.log(responseData);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleChange = (event, newValue) => {
        setValue(newValue === 0 ? 'All' : event.target.innerText);
    };

    return (
        <div style={{ width: '100%' }}>
            <div className={style.table}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Doner ID</StyledTableCell>
                                <StyledTableCell align="center">Phone Number</StyledTableCell>
                                <StyledTableCell align="center">Blood Type</StyledTableCell>
                                <StyledTableCell align="center">Ready to donate</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(stock) && stock.length > 0 ? (
                                stock.map((row, index) =>
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            {index + 1}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.HumanName}</StyledTableCell>
                                        <StyledTableCell align="center">{row.HumanID}</StyledTableCell>
                                        <StyledTableCell align="center">{row.PhoneNumber}</StyledTableCell>
                                        <StyledTableCell align="center">{row.BloodType}</StyledTableCell>
                                        <StyledTableCell align="center">{row.prediction === 1 ? 'Ready' : 'Not Ready'}</StyledTableCell>
                                    </StyledTableRow>
                                )
                            ) : (
                                <StyledTableRow>
                                    <StyledTableCell colSpan={6} align="center">
                                        No data available
                                    </StyledTableCell>
                                </StyledTableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default UserPrediction;
