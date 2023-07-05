import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const SlideBar = ({ tabs, value }) => {

    const [selectedValue, setSelectedValue] = useState(value || tabs[0]);

    const handleChange = (event, newValue) => {
        const selectedTab = tabs[newValue];
        setSelectedValue(selectedTab);
    };

    return (
        <Box sx={{ maxWidth: { xs: 500, sm: 1200 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={tabs.indexOf(selectedValue)} // Use indexOf to get the index of the current selected value
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab} />
                ))}
            </Tabs>
        </Box>
    );
}

export default SlideBar;
