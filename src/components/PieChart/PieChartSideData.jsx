import { Box } from "@mui/material"

function PieChartSideData(props) {

    var colour;
    if(props.name == 'Active' || props.name == 'Connected'){
        colour = "#F6288F";
    }
    else if(props.name == 'Suspended' || props.name == 'Disconnected'){
        colour = "#0A3B52";
    }
    else {
        colour = "#45A0B5";
    }

    const percentage = ((props.amount/props.total)*100).toFixed(2);

  return (
    <Box style={{display: "flex", alignItems: "center"}}>
        <span style={{marginRight: "0.5rem", display: "inline-block", height: "0.9rem", width: "0.9rem", backgroundColor: colour}}></span>
        <span style={{fontSize: "0.8rem", color: "#7a7a7a", marginRight: "0.5rem"}}>{props.name}</span>
        <span style={{fontSize: "0.9rem", marginRight: "0.5rem"}}>{props.amount}</span>
        <span style={{fontSize: "0.8rem", color: "#7a7a7a"}}>{percentage}%</span>
    </Box>
  )
}

export default PieChartSideData