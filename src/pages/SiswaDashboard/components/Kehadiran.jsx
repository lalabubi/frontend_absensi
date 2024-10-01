import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffc0cb',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '8px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Kehadiran() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ Width: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Tanggal</StyledTableCell>
              <StyledTableCell align="center">Waktu Datang</StyledTableCell>
              <StyledTableCell align="center">Waktu Pulang</StyledTableCell>
              <StyledTableCell align="center">Keterangan</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" align="center">
                01-12-2024
              </StyledTableCell>
              <StyledTableCell align="center">07.00</StyledTableCell>
              <StyledTableCell align="center">15.00</StyledTableCell>
              <StyledTableCell align="center">Hadir</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
