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

function createData(national_number, name, age , phone ,address ,gender , blood_group ,last_donation , units  ,diseases ) {
  return {national_number, name, age , phone ,address ,gender , blood_group ,last_donation , units  ,diseases };
}

const rows=[
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15, 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15, 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15, 1 ,'none'),
      createData(11223344567890, 'mazen mohamed', 23 , 23344567890 ,'tanta saeed st' ,'male' , 'A-' , 15 , 1 ,'none'),

    ]





const DonersTable = () => {

    return(
    <div>
        <TableContainer className= {`${style.table}`}   >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center"><b>National Number</b></TableCell>
                    <TableCell align="center"><b>Name</b></TableCell>
                    <TableCell align="center"><b>Age</b></TableCell>
                    <TableCell align="center"><b>Phone</b></TableCell>
                    <TableCell align="center"><b>Address</b></TableCell>
                    <TableCell align="center"><b>Gender</b></TableCell>
                    <TableCell align="center"><b>Blood Group</b></TableCell>
                    <TableCell align="center"><b>Last Donation</b></TableCell>
                    <TableCell align="center"><b>Units</b></TableCell>
                    <TableCell align="center"><b>Diseases</b></TableCell>
                    <TableCell align="center"><b>Action</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.national_number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.national_number}
                </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">{row.gender}</TableCell>
                    <TableCell align="center">{row.blood_group}</TableCell>
                    <TableCell align="center">{row.last_donation}</TableCell>
                    <TableCell align="center">{row.units}</TableCell>
                    <TableCell align="center">{row.diseases}</TableCell>

                    <TableCell align="center">
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="small button group"
                            >
                            {/*}we show here the action if it happend if not show button to take a look and take action{*/}
                            <a href='./doner_profile'>
                             <Button>Show</Button>
                           </a>
                        </ButtonGroup>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}

export default DonersTable;