import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffc0cb',  //ini untuk warna table yang atas
    color: theme.palette.common.white,
    // padding: '8px'
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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function SiswaAdmin() {
  return (
    <>  
      <h1 className='text-3xl font-bold mb-4'>Data Siswa</h1>
      <Button
        variant="contained"
        sx={{ mb: 2, backgroundColor: '#bc8adf', color: '#fff' }}
      >
        Tambah Data Siswa
      </Button>

      <TableContainer component={Paper} sx={{}}>
        <Table sx={{ Width: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">NISN</StyledTableCell>
              <StyledTableCell align="center">Nama</StyledTableCell>
              <StyledTableCell align="center">Alamat</StyledTableCell>
              <StyledTableCell align="center">Jenis Kelamin</StyledTableCell>
              <StyledTableCell align="center">Kelas</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" align="center">
                1234567890
              </StyledTableCell>
              <StyledTableCell align="center">John Doe</StyledTableCell>
              <StyledTableCell align="center">Jl. Merdeka 123</StyledTableCell>
              <StyledTableCell align="center">Laki-laki</StyledTableCell>
              <StyledTableCell align="center">10A</StyledTableCell>
              <StyledTableCell align="center">
              <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: '#bc8adf', color: '#fff' }} 
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: '#DC143C', color: '#fff', ml: 1 }}
                >
                  Delete
                </Button>

              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
