import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Main from '../Main/Main';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SimCardOutlinedIcon from '@mui/icons-material/SimCardOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Typography } from '@mui/material';

const drawerWidth = 220;

export default function PermanentDrawerLeft() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [clickedIndex, setClickedIndex] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(1);

  const handleChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleAccordionDetailsClick = (index) => {
    setClickedIndex(index);
  };

  const options = [
    'Home',
    'Internet of Things',
    'Advanced Network',
    'Security'
  ];

  const icons = [
    <HomeOutlinedIcon style={{height: "1.4rem"}} key="home" />,
    <SimCardOutlinedIcon style={{height: "1.4rem"}} key="iot" />,
    <VpnKeyOutlinedIcon style={{height: "1.4rem"}} key="network" />,
    <SettingsOutlinedIcon style={{height: "1.4rem"}} key="security" />
  ];

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'unset',
            borderWidth: 0
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List sx={{padding: "0"}}>
          {options.map((text, index) => (
            <Accordion
            key={text}
            expanded={expandedIndex === index}
            onChange={() => handleAccordionChange(index)}
            sx={{margin: "0",boxShadow: 0, borderLeft: '0.5rem solid #fff'}}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ margin: 0, padding: 0, borderLeft: '0.5rem solid #fff', height: "1.4rem" }}
            >
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                {icons[index]}
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: '0.8rem' }} />
            </AccordionSummary>
            <AccordionDetails onClick={() => handleAccordionDetailsClick(index)} sx={{
              borderLeft: expandedIndex === index && clickedIndex === index ? '0.5rem solid #F6288F' : '0.5rem solid #fff',
              margin: 0, display: "flex", alignItems: "center",padding: 0, height: "2rem"
            }}>
              <Typography sx={{marginLeft: "1rem", fontSize: '0.8rem'}}>Overview</Typography>
            </AccordionDetails>
          </Accordion>
          ))}
        </List>
        <Divider />
        <List>
        <Accordion
            expanded={expandedIndex === options.length} 
            onChange={() => handleAccordionChange(options.length)}
            sx={{ margin: "0", boxShadow: 0, borderLeft: '0.5rem solid #fff' }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ margin: 0, padding: 0, borderLeft: '0.5rem solid #fff', height: "1.6rem" }}
            >
              <ListItemIcon sx={{ marginRight: "-1rem" }}>
                <StarBorderOutlinedIcon style={{ height: "1.4rem" }} />
              </ListItemIcon>
              <ListItemText primary="Favourites" primaryTypographyProps={{ fontSize: '0.8rem' }} />
            </AccordionSummary>
            <AccordionDetails onClick={() => handleAccordionDetailsClick(options.length)} sx={{
              borderLeft: expandedIndex === options.length && clickedIndex === options.length ? '0.5rem solid #F6288F' : '0.5rem solid #fff',
              margin: 0, display: "flex", alignItems: "center", padding: 0, height: "2rem"
            }}>
              <Typography sx={{ marginLeft: "1rem", fontSize: '0.8rem' }}>Your Favourite Items</Typography>
            </AccordionDetails>
          </Accordion> 
        </List>
      </Drawer>
      <Main />
    </Box>
  );
}