import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Button, Typography } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import DrawerTabs from '../DrawerTabs/DrawerTabs';
import EastIcon from '@mui/icons-material/East';


function AlertDrawer(props) {
  return (
    <Drawer open={props.open} onClose={props.fn(false)} anchor="right" ModalProps={{ disableScrollLock: false }}>
      <Box sx={{ width: 400 }} role="presentation">
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
                endIcon={<LaunchIcon />}
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
              endIcon={<EastIcon />}
              style={{ border: 'none' }}
              sx={{textTransform: 'none',
                padding: "0"
              }}
            />
          </Box>
        </Box>
        <DrawerTabs />
      </Box>
    </Drawer>
  )
}

export default AlertDrawer