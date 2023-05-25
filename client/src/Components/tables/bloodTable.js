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
import style from "./table.module.css"


//header style & body style
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

function createData(
  ID, Blood_type , DonerID, Donation_Place, Action, Date, Report,
) {
  return { ID ,Blood_type , DonerID, Donation_Place, Action, Date, Report };
}

const rows = [
  createData( 22, "A+" , 234567890234, "hospital name", "Accept", "15/2/2023", "report"),
  createData( 22, "A+" , 234567890234, "hospital name", "Accept", "15/2/2023", "report"),
  createData( 22, "A+" , 234567890234, "hospital name", "Accept", "15/2/2023", "report"),
  createData( 22, "A+" , 234567890234, "hospital name", "Accept", "15/2/2023", "report"),
  createData( 22, "A+" , 234567890234, "hospital name", "Accept", "15/2/2023", "report"),
  createData( 22, "A+" , 234567890234, "hospital name", "Accept", "15/2/2023", "report"),
  createData( 22, "A+" , 234567890234, "hospital name", "Accept", "15/2/2023", "report"),
  createData( 22, "A+" , 234567890234, "hospital name", "Accept", "15/2/2023", "report"),
];

const BloodTable = () => {

    return(
    <div className= {`${style.table}`} > 
    <TableContainer  component={Paper}>
      <Table sx={{minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Blood Type</StyledTableCell>
            <StyledTableCell align="center">Doner ID</StyledTableCell>
            <StyledTableCell align="center">Donation Place</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Report</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component="th" scope="row">
                {row.ID}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Blood_type}</StyledTableCell>
              <StyledTableCell align="center">{row.DonerID}</StyledTableCell>
              <StyledTableCell align="center">{row.Donation_Place}</StyledTableCell>
              <StyledTableCell align="center">{row.Action}</StyledTableCell>
              <StyledTableCell align="center">{row.Date}</StyledTableCell>
              <StyledTableCell align="center"><DescriptionIcon/>{row.Report}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
  );
}

export default BloodTable;