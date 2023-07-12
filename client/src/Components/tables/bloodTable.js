import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DescriptionIcon from '@mui/icons-material/Description';
import style from './table.module.css';
import axios from 'axios';

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

const BloodTable = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetchBranchNames();
  }, []);

  const fetchBranchNames = () => {
    const branchNo = localStorage.getItem('branchNo');
    axios
        .post('http://localhost:3000/transaction/getStock', { branchNo })
        .then((response) => {
          const responseData = response.data;
          setStock(responseData);
          console.log(stock);
        })
        .catch((error) => {
          console.error(error);
        });
  };

  return (
      <div className={style.table}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">Blood Type</StyledTableCell>
                <StyledTableCell align="center">Doner ID</StyledTableCell>
                <StyledTableCell align="center">Donation Place</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Report</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stock.length > 0 ? (
                  stock.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {index + 1}
                        </StyledTableCell>
                        <StyledTableCell align="center">{row.BloodType}</StyledTableCell>
                        <StyledTableCell align="center">{row.HumanID}</StyledTableCell>
                        <StyledTableCell align="center">{row.BranchName}</StyledTableCell>
                        <StyledTableCell align="center">{row.TransDate}</StyledTableCell>
                        <StyledTableCell align="center">
                          <DescriptionIcon />
                          {row.Report}
                        </StyledTableCell>
                      </StyledTableRow>
                  ))
              ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={7} align="center">
                      No data available
                    </StyledTableCell>
                  </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
};

export default BloodTable;
