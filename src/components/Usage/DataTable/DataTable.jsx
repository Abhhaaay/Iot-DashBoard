
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import TopUsage from '../../../assets/TopUsage/TopUsage.json'
import { useEffect, useState } from 'react';

function createData(MSISDN, status, usage) {
    return { MSISDN, status, usage };
}

const activeStatusStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.7rem",
  color: "green"
};

const deActivatedStatusStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.7rem",
  color: "red"
};

function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const dataArray = TopUsage.usageDataList;
    const newRows = [];

    for (const dataItem of dataArray) {
      for (const usage of dataItem.usages) {
        newRows.push(createData(usage.mobileNumber, usage.mobileNumberStatus === 'Active', usage.dataUsage));
      }
    }

    setRows(newRows);
  }, []);

  return (
    <TableContainer>
      <Table aria-label="simple table" sx={{boxShadow: 0}}>
        <TableHead>
          <TableRow>
            <TableCell>MSISDN</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Usage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.MSISDN}
              </TableCell>
              <TableCell>
                {row.status ? (<span style={activeStatusStyle}><CheckCircleIcon sx={{transform: "scale(0.6)"}}/>Active</span>)
                 : <span style={deActivatedStatusStyle}><CancelIcon  sx={{transform: "scale(0.6)"}}/>Deactivated</span>}
              </TableCell>
              <TableCell>{row.usage}GB</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable