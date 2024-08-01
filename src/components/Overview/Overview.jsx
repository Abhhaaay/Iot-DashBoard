import { Box, Grid, Typography } from "@mui/material"
import LaunchIcon from '@mui/icons-material/Launch';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PieChartComponent from "../PieChart/PieChartComponent";
import IotOverview from '../../assets/Overview/IotOverview.json'
import PieChartSideData from "../PieChart/PieChartSideData";

function Overview() {
    const ActiveSIMs = Number(IotOverview.deviceDetailsExperience[0].simStatus.active);
    const SuspendedSIMs = Number(IotOverview.deviceDetailsExperience[0].simStatus.suspended);
    const CancelledSIMs = Number(IotOverview.deviceDetailsExperience[0].simStatus.cancelled);
    const totalSIMsStatus = ActiveSIMs + SuspendedSIMs + CancelledSIMs;

    const connectedSIMs = Number(IotOverview.deviceDetailsExperience[0].simConnectivity.connected);
    const disconnectedSIMs = Number(IotOverview.deviceDetailsExperience[0].simConnectivity.disconnected);
    const totalSIMsConnectivity = connectedSIMs + disconnectedSIMs;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'start',
        borderRadius: '0.8rem',
        boxShadow: 'none',
        border: '0.1rem solid #f0f0f0'
      }));

    const typoStyles = {
        fontWeight: '900',
    };

    const simConnectivityLabel = {
        title: 'Active SIMs',
        num: totalSIMsConnectivity
    };
    
    const simStatusLabel = {
        title: 'Total SIMs',
        num: totalSIMsStatus
    };

    const simStatusData = [
        { name: 'Active', sims: ActiveSIMs },
        { name: 'Suspended', sims: SuspendedSIMs },
        { name: 'Cancelled', sims: CancelledSIMs}
    ];

    const simConnectivityData = [
        { name: 'Connected', sims: Number(IotOverview.deviceDetailsExperience[0].simConnectivity.connected) },
        { name: 'Disconnected', sims: Number(IotOverview.deviceDetailsExperience[0].simConnectivity.disconnected) }
    ];

  return (
    <Box sx={{
        backgroundColor: 'white',
        p: '2rem', marginTop: '2rem',
        boxShadow: '0px 3px 5px 2px #dedede'
        }}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2rem'
            }}>
                <Typography style={{fontSize: '1.2rem', fontWeight: '800'}}>Overview</Typography>
                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography style={{fontSize: '0.8rem'}}>Last updated: {IotOverview.deviceDetailsExperience[0].networkData[0].lastUpdatedDate}</Typography>
                    <LaunchIcon sx={{transform: "scale(0.7)"}}/>
                </Box>
        </Box>
        <Grid container spacing={2} sx={{marginBottom: "1.8rem"}}>
            <Grid item xs={4}>
                <Item>
                    <Typography>Total SIMs</Typography>
                    <Typography variant="h5" sx={typoStyles}>{(IotOverview.deviceDetailsExperience[0].sims.totalSimCount)/1000}K</Typography>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <Typography>Active SIMs</Typography>
                    <Typography variant="h5" sx={typoStyles}>{(IotOverview.deviceDetailsExperience[0].sims.active)/1000}K</Typography>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <Typography>Inactive SIMs</Typography>
                    <Typography variant="h5" sx={typoStyles}>{(IotOverview.deviceDetailsExperience[0].sims.inactive)/1000}K</Typography>
                </Item>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Typography sx={{fontWeight: "800"}}>SIMs Status</Typography>
                <Typography sx={{fontSize: '0.8rem',
                marginBottom: '1rem'
                }}>
                Last updated: {IotOverview.deviceDetailsExperience[0].simStatus.lastUpdatedDate}
                </Typography>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <PieChartComponent data={simStatusData} label={simStatusLabel}/>
                    <Box sx={{marginLeft: "1.6rem"}}>
                        <PieChartSideData name="Active" amount={ActiveSIMs} total={totalSIMsStatus}/>
                        <PieChartSideData name="Suspended" amount={SuspendedSIMs} total={totalSIMsStatus}/>
                        <PieChartSideData name="Cancelled" amount={CancelledSIMs} total={totalSIMsStatus}/>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Typography sx={{fontWeight: "800"}}>SIMs Connectivity</Typography>
                <Typography sx={{fontSize: '0.8rem',
                marginBottom: '1rem'
                }}>
                Last updated: {IotOverview.deviceDetailsExperience[0].simConnectivity.lastUpdatedDate}</Typography>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <PieChartComponent data={simConnectivityData} label={simConnectivityLabel}/>
                    <Box sx={{marginLeft: "1.6rem"}}>
                        <PieChartSideData name="Connected" amount={connectedSIMs} total={totalSIMsConnectivity}/>
                        <PieChartSideData name="Disconnected" amount={disconnectedSIMs} total={totalSIMsConnectivity}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Overview