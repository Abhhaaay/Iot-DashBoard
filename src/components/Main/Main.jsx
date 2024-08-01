import { Box } from "@mui/material"
import Header from "../Header/Header"
import Overview from "../Overview/Overview"
import Usage from "../Usage/Usage"
import Reports from "../Reports/Reports"

function Main() {
  return (
    <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#fffffb', p: 5 }}
      >
        <Header />
        <Overview />
        <Usage />
        <Reports />
      </Box>
  )
}

export default Main