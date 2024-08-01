import CircleIcon from '@mui/icons-material/Circle';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AlertLog(props) {
  return (
    <Box sx={{display: "flex", borderBottom: "1px solid #dbdbdb", padding: "1rem 0"}}>
        <Box sx={{marginRight: "0.5rem", paddingTop: "0.3rem"}}>
            <CircleIcon color='primary' sx={{transform: "scale(0.4)"}}/>
        </Box>
        <Box sx={{flexGrow: 1}}>
            <Typography sx={{fontSize: "0.9rem", fontWeight: "700"}}>SIM status</Typography>
            <Typography sx={{fontSize: "0.8rem"}}>{props.timestamp}</Typography>
            <Typography sx={{fontSize: "0.8rem"}}>{props.message}</Typography>
            <Typography sx={{fontSize: "0.7rem"}}>{props.id}</Typography>
            <Typography sx={{fontSize: "0.75rem", fontWeight: "600", marginTop: "0.4rem"}}>severity: {props.severity}</Typography>
        </Box>
        <Box>
            <CloseIcon sx={{transform: "scale(0.8)"}}/>
        </Box>
    </Box>
  )
}

export default AlertLog
