import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import client from '../../../routes/Client';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FFC0CB',
    color: '#fff',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default function TableSiswa() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    // Fetch data presensi
    client.get("kehadiran").then(({ data }) => {
      setData(data.data); // Set data ke state
      console.log(data.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NISN</StyledTableCell>
            <StyledTableCell>Nama</StyledTableCell>
            <StyledTableCell>Waktu Datang</StyledTableCell>
            <StyledTableCell>Waktu Pulang</StyledTableCell>
            <StyledTableCell>Keterangan</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <StyledTableRow key={row.siswa_id}>
              <StyledTableCell>{row.siswa.nisn}</StyledTableCell>
              <StyledTableCell>{row.siswa.nama}</StyledTableCell>
              <StyledTableCell>{row.waktu_datang || '-'}</StyledTableCell>
              <StyledTableCell>{row.waktu_pulang || '-'}</StyledTableCell>
              <StyledTableCell>{row.keterangan}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
