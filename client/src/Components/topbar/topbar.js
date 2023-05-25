import React from "react" ;
import style from './topbar.module.css';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';


const TopBar = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
    return (
        <div >
            <Toolbar className= {`${style.topbar}`}>
              {/*}date and time selector{*/}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                        <DateTimePicker
                        label="Select time"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoContainer>
              </LocalizationProvider>

              {/*}search part{*/}
              <Box
                sx={{
                  padding:' 0px 25px 0px 25px' ,
                  display: 'flex',
                  alignItems: 'center',
                  '& > :not(style)': { m: 1 },
                }}
              >
                <TextField
                className= {`${style.search}`}
                id="filled-search"
                label="Search field"
                type="search"
                variant="standard"
                />
              </Box>
            </Toolbar>
        </div>
    )
}

export default TopBar;