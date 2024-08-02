
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
  const [index, setIndex] = useState(1);
  const [maxIndex, setMaxIndex] = useState(2);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const increase = () => {
      if(index<maxIndex){
        setIndex(index+1);
      }
  };

  const decrease = () => {
    if(index>1){
      setIndex(index-1);
    }
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
            <ReportTable searchTerm={searchTerm} index={index}/>
            <Box sx={{display: "flex", justifyContent: "center", marginTop: "1.6rem"}}>
              <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{paddingTop: "0.5rem"}} onClick={decrease}><KeyboardArrowLeftOutlinedIcon /></Box>
                <Box sx={{display: "flex", alignItems: "center", margin: "0 1rem", gap: "0.5rem"}}>
                  <Typography>Page</Typography>
                  <Typography sx={{borderRadius: "0.6rem",margin: "0 1rem", border: "0.1rem solid black", padding: "0.7rem 1rem"}}>{index}</Typography>
                  <Typography sx={{marginRight: "0.5rem"}}>of</Typography>
                  <Typography>{maxIndex}</Typography>
                </Box>
                <Box sx={{paddingTop: "0.5rem"}} onClick={increase}><KeyboardArrowRightOutlinedIcon /></Box>
              </Box>
            </Box>
    </Box>
  )
}

export default Reports