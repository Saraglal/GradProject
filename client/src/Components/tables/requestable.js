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


function createData(national_number, name, age ,reason ,hospital , blood_group ,date , units ) {
  return {national_number, name, age ,reason ,hospital  , blood_group ,date, units  };
}

//Random data to use
const rows=[
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
    createData(11223344567890, 'mazen mohamed', 23 , 'surgery' ,'elsalam hospital', 'A-' , '15/1/2023' , 1 ),
]





const RequestsTable = () => {

    return(
    <div className= {`${style.base}`}>
        <TableContainer className= {`${style.table}`}   >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/*Request table head */}
            <TableHead>
            <TableRow>
                <TableCell align="center"><b>National Number</b></TableCell>
                <TableCell align="center"><b>Name</b></TableCell>
                <TableCell align="center"><b>Age</b></TableCell>
                <TableCell align="center"><b>Reason</b></TableCell>
                <TableCell align="center"><b>Hospital</b></TableCell>
                <TableCell align="center"><b>Blood Group</b></TableCell>
                <TableCell align="center"><b>Date</b></TableCell>
                <TableCell align="center"><b>Units</b></TableCell>
                <TableCell align="center"><b>Action</b></TableCell>
            </TableRow>
            </TableHead>
            {/*Request table body*/}
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
                    <TableCell align="center">{row.reason}</TableCell>
                    <TableCell align="center">{row.hospital}</TableCell>
                    <TableCell align="center">{row.blood_group}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.units}</TableCell>
                    <TableCell align="center">
                        {/*}we show here (accept or not ) .. if it still waiting show buttons to take a look and take action{*/}
                         <a href='./request_file'>
                            <Button
                                sx={{ m: 1 }}
                                variant="outlined"
                                aria-label="small button group"
                                >
                                Files
                                </Button>
                         </a>
                         <ButtonGroup
                            disableElevation
                            variant="outlined"
                            aria-label="small button group"
                            >
                            <Button color="success">Accept</Button>
                            <Button color="error">Reject</Button>
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

export default RequestsTable;