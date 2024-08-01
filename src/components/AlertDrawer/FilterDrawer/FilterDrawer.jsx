import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function FilterDrawer(props) {

  const buttonStyles = {
    width: "100%",
  };

  const styleObj = {
    "&:hover": {
      backgroundColor: "#e02482"
    }
  };

  const handleSortChange = (event) => {
    props.onSortChange(event.target.value);
  };

  return (
        <Drawer open={props.open} onClose={props.fn(false)} anchor="right" ModalProps={{ disableScrollLock: true }}>
      <Box sx={{ width: 420 }} role="presentation">
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1rem",
            paddingLeft: "1rem",
            marginBottom: "1.8rem"
            }}>
                <Box sx={{
                display: "flex"
                }}>
                <Typography style={{ fontSize: "1.4rem", fontWeight: "600", fontFamily: "Montserrat Variable" }}>Alerts</Typography>
                <Button
                    variant="outlined"
                    color="inherit"
                    endIcon={<ArrowBackIcon />}
                    style={{ border: 'none' }}
                    sx={{textTransform: 'none',
                        padding: "0"
                    }}
                />
                </Box>
            <Box>
                <Button
                variant="outlined"
                color="inherit"
                endIcon={<ArrowForwardIcon />}
                style={{ border: 'none' }}
                sx={{textTransform: 'none',
                    padding: "0"
                }}
                />
            </Box>
        </Box>
        <Box sx={{padding: "0 1rem"}}>
            <Box sx={{padding: "1rem 1rem", borderBottom: "1px solid #dbdbdb"}}>
                <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: "0.5rem"}}>
                    <Typography>Sort By</Typography>
                    <KeyboardArrowDownIcon />
                </Box>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="high"
                        name="radio-buttons-group"
                        onChange={handleSortChange}
                    >
                        <FormControlLabel value="high" control={<Radio sx={{'&.Mui-checked': {color: "#f6288f"}}}/>} label="High to Low" />
                        <FormControlLabel value="low" control={<Radio sx={{'&.Mui-checked': {color: "#f6288f"}}}/>} label="Low to High" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{padding: "1rem 1rem", borderBottom: "1px solid #dbdbdb"}}>
                <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: "0.5rem"}}>
                    <Typography>Filter by date range</Typography>
                    <KeyboardArrowDownIcon />
                </Box>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="3"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1" control={<Radio sx={{'&.Mui-checked': {color: "#f6288f"}}}/>} label="Previous 24 hours" />
                        <FormControlLabel value="2" control={<Radio sx={{'&.Mui-checked': {color: "#f6288f"}}}/>} label="Previous 7 days" />
                        <FormControlLabel value="3" control={<Radio sx={{'&.Mui-checked': {color: "#f6288f"}}}/>} label="Previous 30 days" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{marginTop: "4rem"}}>
            <Button variant="contained" style={buttonStyles} sx={{marginBottom: "1rem", backgroundColor: "#F6288F", ...styleObj}} onClick={props.onApplySort}>Apply Filters</Button>
            <Button color="inherit" variant="outlined" sx={{...buttonStyles}} style={{border: '2px solid'}} >Cancel Selection</Button>
        </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

export default FilterDrawer

