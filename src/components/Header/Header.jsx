import { Box, Button } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";
import AlertDrawer from "../AlertDrawer/AlertDrawer";

function Header() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };  

  return (
    <>
        <Box
            sx={{fontSize: '0.8rem',
                marginBottom: '1rem'
            }}
        >
            Home / Internet of Things
        </Box>
        <Box
            sx = {{display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box sx={{fontSize: '1.7rem',
                fontWeight: '900',
            }}>Internet of Things dashboard</Box>
            <Box 
                sx={{display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box sx={{fontWeight: '900'}}>Account Number: 123456789</Box>
                <Button
                    onClick={toggleDrawer(true)}
                    variant="outlined"
                    color="inherit"
                    startIcon={<NotificationsIcon />}
                    style={{ border: '2px solid' }}
                    sx={{textTransform: 'none',
                        marginLeft: '1rem',
                        paddingTop: '0.4rem'
                    }}
                >
                    <Box sx={{
                        borderRadius: '50%',
                        backgroundColor: '#F6288F',
                        position: 'absolute',
                        left: '24%',
                        zIndex: '5',
                        top: '10%',
                        fontSize: '0.5rem',
                        color: 'white',
                        padding: '0 5%'
                    }}>1</Box>
                    Alerts
                </Button>
                <AlertDrawer open={open} fn={toggleDrawer}/>
                </Box>
        </Box>
    </>
  )
}

export default Header