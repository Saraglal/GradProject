import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const SlideBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 500, sm: 1200 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Hospital One" />
        <Tab label="Hospital Two" />
        <Tab label="Hospital Three" />
        <Tab label="Hospital Four" />
        <Tab label="Hospital Five" />
        <Tab label="Hospital Six" />
        <Tab label="Hospital Seven" />
        <Tab label="Hospital Eight" />
        <Tab label="Hospital Nine" />
        <Tab label="Hospital Ten" />
        <Tab label="Hospital Eleven" />
        <Tab label="Hospital Twelve" />
        <Tab label="Hospital Thirteen" />
        <Tab label="Hospital Fourteen" />
        <Tab label="Hospital Fifteen" />
      </Tabs>
    </Box>
  );
}

export default SlideBar;
