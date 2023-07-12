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

const SingleBloodStock = () => {
    const [stock, setStock] = useState([]);
    const [value, setValue] = useState('All');

    useEffect(() => {
        fetchBranchNames();
    }, []);

    const fetchBranchNames = () => {
        const branchName = localStorage.getItem('branchName');
        axios
            .post('http://localhost:3000/transaction/getSingleStock', { branchName })
            .then((response) => {
                const responseData = response.data;
                setStock(responseData);
                console.log(stock);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleChange = (event, newValue) => {
        setValue(newValue === 0 ? 'All' : event.target.innerText);
    };

    const filteredStock = value === 'All' ? stock : stock.filter((row) => row.BloodType === value);

    return (
        <div style={{ width: '100%' }}>
            <Box sx={{ maxWidth: { xs: 500, sm: 1200 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{ marginLeft: 25 }}
                >
                    <Tab label="All" />
                    <Tab label="A+" />
                    <Tab label="A-" />
                    <Tab label="B+" />
                    <Tab label="B-" />
                    <Tab label="O+" />
                    <Tab label="O-" />
                    <Tab label="AB+" />
                    <Tab label="AB-" />
                </Tabs>
            </Box>
            <div className={style.table}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="center">Blood Type</StyledTableCell>
                                <StyledTableCell align="center">Unit Number</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredStock.length > 0 ? (
                                filteredStock.map((row, index) =>
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            {index + 1}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.BloodType}</StyledTableCell>
                                        <StyledTableCell align="center">{row.UnitNumber}</StyledTableCell>
                                        <StyledTableCell align="center" style={{color: parseInt(row.UnitNumber) > 5 ? "red" : "green"}} >{parseInt(row.UnitNumber) > 5 ?  "All Good!" : "Blood Needed!"}</StyledTableCell>
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

export default SingleBloodStock;
