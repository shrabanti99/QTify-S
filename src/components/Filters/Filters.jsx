import { Tab, Tabs } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './filters.module.css'


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === 0 && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

function Filters ({filters, selectedFilter, setSelectedFilter }) {
    const handleChange = ( event, newValue) => {
        setSelectedFilter(newValue)
    }
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div>
            <Tabs
            value={selectedFilter}
            onChange={handleChange}
            aria-label='tabs example'
            TabIndicatorProps={{
                style: {
                    backgroundColor: "var(--color-primary)",
                }
            }}
        >
            {filters.map((ele, idx) => (
                <Tab className={styles.tab} label={ele.label} {...a11yProps(idx)} />
            ))}
             
            </Tabs>
            {filters.map((ele, idx) => (
                <TabPanel value={ele.label} index = {idx} />
            ))}
        </div>
    )
};

export default Filters;