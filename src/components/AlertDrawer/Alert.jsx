import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Alert({ id, timestamp, message, severity, onClose }) {
  return (
    <Box sx={{ display: "flex", borderBottom: "1px solid #dbdbdb", padding: "1rem 0" }}>
      <Box sx={{ marginRight: "0.5rem", paddingTop: "0.3rem" }}>
        <CircleIcon color='primary' sx={{ transform: "scale(0.4)" }} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: "700" }}>SIM status</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>{timestamp}</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>{message}</Typography>
        <Typography sx={{ fontSize: "0.7rem" }}>{id}</Typography>
        <Typography sx={{ fontSize: "0.75rem", fontWeight: "600", marginTop: "0.4rem" }}>severity: {severity}</Typography>
      </Box>
      <Box>
        <CloseIcon
          onClick={() => onClose(id)} 
          sx={{ transform: "scale(0.8)", cursor: 'pointer' }}
        />
      </Box>
    </Box>
  );
}

export default Alert;