import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import IOTReport from '../../../assets/IotReport/IotReport.json';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function createData(Category, Reports, Source, Description, Lastupdated) {
    return { Category, Reports, Source, Description, Lastupdated };
}

function ReportTable({ searchTerm, index }) {
    const [rows, setRows] = useState([]);
    const [filteredRows, setFilteredRows] = useState([]);

    useEffect(() => {
        const reportDataList = IOTReport.reportList.flatMap(reportItem => reportItem.reportData);
        const newRows = reportDataList.map(report => createData(
            report.reportCategory,
            report.reportName,
            report.source,
            report.reportDesc,
            report.lastReportDate
        ));
        setRows(newRows);
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = rows.filter(row =>
                row.Reports.split(" ").join("").toLowerCase().includes(searchTerm.split(" ").join("").toLowerCase())
            );
            setFilteredRows(filtered);
        } else {
            setFilteredRows(rows);
        }
    }, [searchTerm, rows]);

    // Pagination logic
    const pageSize = 10;
    const startIndex = (index - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedRows = filteredRows.slice(startIndex, endIndex);

    const highlightText = (text, searchTerm) => {
        if (!text || !searchTerm) return text;

        const escapedSearchTerm = searchTerm.replace(/[-/\\^$.*+?()[\]{}|]/g, '\\$&');
        const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            regex.test(part) ? (
                <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <TableContainer>
            <Table aria-label="simple table" sx={{ border: "none" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Reports</TableCell>
                        <TableCell>Source</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Last updated</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedRows.map((row) => (
                        <TableRow
                            key={row.Reports}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.Category}
                            </TableCell>
                            <TableCell>{highlightText(row.Reports, searchTerm)}</TableCell>
                            <TableCell>{row.Source}</TableCell>
                            <TableCell>{row.Description}</TableCell>
                            <TableCell>{row.Lastupdated}</TableCell>
                            <TableCell><FileDownloadOutlinedIcon /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ReportTable;