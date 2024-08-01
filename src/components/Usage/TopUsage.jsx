import { Box, Grid, Typography } from "@mui/material"
import DataTable from "./DataTable/DataTable"


function TopUsage() {

  const gridStyle = {
    backgroundColor: 'white',
    boxShadow: '0px 3px 5px 2px #dedede',
    borderRadius: "1rem"
};

  return (
    <Grid item style={gridStyle} xs={6} >
      <Box sx={{padding: "2rem 2rem 0 2rem"}}>
      <Typography style={{
            fontSize: '1.2rem',
            fontWeight: '800', 
            margin: "1rem 0"}}>
                Top Usage
        </Typography>
        <DataTable />
        </Box>
    </Grid>
  )
}

export default TopUsage