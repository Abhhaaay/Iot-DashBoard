import { Box, Typography } from "@mui/material"
import LaunchIcon from '@mui/icons-material/Launch';
import ReportTable from "./ReportTable/ReportTable";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Highlighter from "react-highlight-words";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

function Reports() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
      

  return (
    <Box sx={{
        backgroundColor: 'white',
        p: '2rem', marginTop: '2rem',
        boxShadow: '0px 3px 5px 2px #dedede'
        }}>
            <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: "1.2rem"}}>
                <Box>
                    <Typography style={{fontSize: '1.2rem', fontWeight: '800', marginBottom: "1.2rem"}}>Reports(36)</Typography>
                    <TextField placeholder="Search..." variant="outlined" onChange={handleSearchChange} 
                        InputProps={{
                            startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                           ),
                    }}/>
                </Box>
                <LaunchIcon />
            </Box>
            <ReportTable searchTerm={searchTerm}/>
            <Box sx={{display: "flex", justifyContent: "center", marginTop: "1.6rem"}}>
              <Box sx={{display: "flex", alignItems: "center"}}>
                <Box><KeyboardArrowLeftOutlinedIcon /></Box>
                <Box sx={{display: "flex", alignItems: "center", margin: "0 1rem", gap: "0.5rem"}}>
                  <Typography>Page</Typography>
                  <Typography sx={{borderRadius: "0.6rem",margin: "0 1rem", border: "0.1rem solid black", padding: "0.7rem 1rem"}}>1</Typography>
                  <Typography>##</Typography>
                </Box>
                <Box><KeyboardArrowRightOutlinedIcon /></Box>
              </Box>
            </Box>
    </Box>
  )
}

export default Reports