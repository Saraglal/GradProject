import React from "react";
import style from './topbar.module.css';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const TopBar = ({ searchText, onSearchTextChange, onDateChange }) => {
    const [value, setValue] = React.useState(dayjs());

    const handleDateChange = (date) => {
        setValue(date);
        onDateChange(date.toDate()); // Call the provided onDateChange callback with the selected date
    };

    return (
        <div>
            <Toolbar className={style.topbar}>
                {/* date and time selector */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select time"
                        renderInput={(props) => <TextField {...props} />}
                        value={value}
                        onChange={handleDateChange}
                    />
                </LocalizationProvider>

                {/* search part */}
                <Box
                    sx={{
                        padding: '0px 25px 0px 25px',
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <TextField
                        className={`${style.search}`}
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                        value={searchText}
                        onChange={onSearchTextChange}
                    />
                </Box>
            </Toolbar>
        </div>
    );
}

export default TopBar;
