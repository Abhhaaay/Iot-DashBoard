import { Box, FormControl, Grid, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import BarGraph from "./BarGraph/BarGraph";
import InputLabel from '@mui/material/InputLabel';
import DataUsageResponse from '../../assets/DataUsage/DataUsage.json'

function DataUsage() {
    const [time, setTime] = useState("last 7 days");
    const [graphData, setGraphData] = useState([]);
    const [totalUsage, setTotalUsage] = useState(0);
    const [dailyAverage, setDailyAverage] = useState(0);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const formatSignificantDigits = (num) => {
    if (num === 0) return '0';
    return num;
    };

  useEffect(() => {
    const today = new Date();
    let startDate, endDate;

    switch (time) {
        case "last 7 days":
            startDate = new Date(today);
            startDate.setDate(today.getDate() - 7);
            endDate = today;
            break;
        case "last 3 months":
            startDate = new Date(today);
            startDate.setDate(1);  
            startDate.setMonth(today.getMonth() - 3);  
            endDate = new Date(today);
            endDate.setDate(1); 
            endDate.setDate(endDate.getDate() - 1); 
            break;
        case "last 6 months":
            startDate = new Date(today);
            startDate.setDate(1); 
            startDate.setMonth(today.getMonth() - 6);  
            endDate = new Date(today);
            endDate.setDate(1);  
            endDate.setDate(endDate.getDate() - 1); 
            break;
        default:
            startDate = new Date(today);
            startDate.setDate(today.getDate() - 7);
            endDate = today;
    }

    const dataUsage = DataUsageResponse.dataUsageGraphResponse[0].dataUsage;

    
    const filteredData = dataUsage.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= startDate && entryDate <= endDate;
    });

    const total = filteredData.reduce((acc, entry) => acc + entry.dataUsage, 0);
        const daysCount = new Set(filteredData.map(entry => new Date(entry.date).toDateString())).size;
        const average = daysCount ? (total / daysCount) : 0;

        setTotalUsage(total);
        setDailyAverage(average);

    
    let transformedData;
    if (time === "last 7 days") {
        transformedData = filteredData.map(entry => {
            const date = new Date(entry.date);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            return { day: dayName, students: entry.dataUsage };
        });
    } else if (time === "last 3 months") {
        const monthlyData = filteredData.reduce((acc, entry) => {
            const date = new Date(entry.date);
            const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            if (!acc[monthName]) {
                acc[monthName] = 0;
            }
            acc[monthName] += entry.dataUsage;
            return acc;
        }, {});

        transformedData = Object.keys(monthlyData).map(month => ({
            day: month,
            students: monthlyData[month]
        }));
    } else if (time === "last 6 months") {
        const monthlyData = filteredData.reduce((acc, entry) => {
            const date = new Date(entry.date);
            const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            if (!acc[monthName]) {
                acc[monthName] = 0;
            }
            acc[monthName] += entry.dataUsage;
            return acc;
        }, {});

        transformedData = Object.keys(monthlyData).map(month => ({
            day: month,
            students: monthlyData[month]
        }));
    }

    setGraphData(transformedData);

}, [time]);

  const gridStyle = {
    backgroundColor: 'white',
    boxShadow: '0px 3px 5px 2px #dedede',
    borderRadius: "1rem"
};

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'start',
    borderRadius: '0.8rem',
    boxShadow: 'none',
    border: '0.1rem solid #f0f0f0'
  }));

  return (
    <Grid item style={gridStyle} xs={6}>
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            padding: "2rem 2rem 0 2rem"
            }}>
            <Typography style={{fontSize: '1.2rem', fontWeight: '800'}}>Data Usage</Typography>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Time</InputLabel>
                  <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={time}
                  onChange={handleChange}
                  autoWidth
                  label="Time"
                  InputLabel="view"
                  >
                  <MenuItem value={"last 7 days"}>last 7 days</MenuItem>
                  <MenuItem value={"last 3 months"}>last 3 months</MenuItem>
                  <MenuItem value={"last 6 months"}>last 6 months</MenuItem>
                  </Select>
                </FormControl>
                <LaunchIcon sx={{transform: "scale(0.7)", marginLeft: "0.5rem"}}/>
            </Box>
        </Box>
        <Grid container sx={{marginBottom: "1.6rem", paddingLeft: "2rem", paddingRight: "2rem"}} spacing={2}>
            <Grid item xs={6}>
                <Item>
                    <Typography>Total Usage</Typography>
                    <Typography sx={{fontWeight: "600", fontSize: "1.2rem"}}>{formatSignificantDigits(totalUsage)}GB</Typography>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <Typography>Daily Average</Typography>
                    <Typography sx={{fontWeight: "600", fontSize: "1.2rem"}}>{formatSignificantDigits(dailyAverage)}GB</Typography>
                </Item>
            </Grid>
        </Grid>
        <BarGraph data={graphData}/>
    </Grid>
  )
}

export default DataUsage