import { Grid } from "@mui/material"
import DataUsage from "./DataUsage"
import TopUsage from "./TopUsage"
import { Box } from "@mui/material";

function Usage() {

    
  return (
      <Box>
        <Grid container spacing={1} sx={{marginTop: "2rem"}}>
          <DataUsage />
          <TopUsage />
        </Grid>
      </Box>
  )
}

export default Usage