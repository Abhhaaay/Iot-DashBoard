import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Alert from '../AlertDrawer/Alert';
import AlertsData from '../../assets/AlertsData/AlertsData.json';
import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FilterDrawer from '../AlertDrawer/FilterDrawer/FilterDrawer';
import AlertLog from '../AlertDrawer/AlertLog';

function DrawerTabs() {
  const tabStyle = {
    width: '50%',
    textTransform: "none",
    color: "#616161"
  };

  const [value, setValue] = useState('1');
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [alerts, setAlerts] = useState(AlertsData.newAlerts);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDismissAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter(alert => alert.id !== id));
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const applyFilters = (newSortOrder, newFilterOption) => {
    setSortOrder(newSortOrder);
    setFilterOption(newFilterOption);
    setOpen(false);
  };

  const severityMap = {
    low: 1,
    high: 2
  };

  const filterAlerts = (alerts, filterOption) => {
    const now = new Date();
    return alerts.filter(alert => {
      const alertDate = new Date(alert.timestamp);
      if (filterOption === '24 hours') {
        return now - alertDate <= 24 * 60 * 60 * 1000;
      } else if (filterOption === '7 days') {
        return now - alertDate <= 7 * 24 * 60 * 60 * 1000;
      } else if (filterOption === '30 days') {
        return now - alertDate <= 30 * 24 * 60 * 60 * 1000;
      }
      return true;
    });
  };

  const sortedAndFilteredAlertLogs = filterAlerts([...AlertsData.alertLogs], filterOption).sort((a, b) => {
    const aSeverity = severityMap[a.severity];
    const bSeverity = severityMap[b.severity];

    if (sortOrder === 'high') {
      return bSeverity - aSeverity; 
    } else if (sortOrder === 'low') {
      return aSeverity - bSeverity; 
    }
    return 0;
  });

  return (
    <Box sx={{ width: '100%', padding: "0 1rem" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList TabIndicatorProps={{ style: { background: '#f6288f' } }} onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={tabStyle} label={`New Alerts(${alerts.length})`} value="1" />
            <Tab style={tabStyle} label="Alert logs" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "1rem 0.5rem" }}>
          {alerts.map((alert) => (
            <Alert 
              key={alert.id}
              id={alert.id}
              timestamp={alert.timestamp}
              message={alert.message}
              severity={alert.severity}
              onClose={handleDismissAlert}
            />
          ))}
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "1rem 0.5rem" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #dbdbdb", paddingBottom: "0.5rem" }}>
            <Button onClick={toggleDrawer(true)} startIcon={<FilterListIcon />} sx={{ textTransform: "none", color: "#F6288F", fontWeight: "700" }}>Sort & filter</Button>
            <Button startIcon={<AutorenewIcon />} sx={{ textTransform: "none", fontWeight: "600", color: "#aeb0af" }} onClick={() => {
              setSortOrder('');
              setFilterOption('');
            }}>Clear filters</Button>
            <FilterDrawer open={open} fn={toggleDrawer} onApplyFilters={applyFilters} />
          </Box>
          {sortedAndFilteredAlertLogs.map((alert) => (
            <AlertLog 
              key={alert.id}
              id={alert.id}
              timestamp={alert.timestamp}
              message={alert.message}
              severity={alert.severity}
            />
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default DrawerTabs;