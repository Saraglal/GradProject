import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const SlideBarBlood = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  maxWidth: { xs: 500, sm: 1200 }, bgcolor: 'background.paper'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx= {{ marginLeft: 25}}
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
  );
}

export default SlideBarBlood;
