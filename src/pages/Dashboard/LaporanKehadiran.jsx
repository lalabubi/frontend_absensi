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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffc0cb', // Warna table header
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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function SiswaAdmin() {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEdit = () => {
    console.log("Tombol Edit diklik");
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    console.log("Tutup Edit Popup");
    setOpenEdit(false);
  };

  return (
    <>  
      <h1 className='text-3xl font-bold mb-4'>Data Siswa</h1>
      <Button
        variant="contained"
        sx={{ mb: 2, backgroundColor: '#bc8adf', color: '#fff' }}
        onClick={handleClickOpen}
      >
        Tambah Data Siswa
      </Button>

      {/* Popup Tambah Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#fff',
            padding: 2,
            minWidth: '400px',
            maxWidth: '600px',
          },
          backdropFilter: 'blur(3px)',
        }}
      >
        <DialogTitle id="form-dialog-title">Tambah Data Siswa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nisn"
            label="NISN"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="name"
            label="Nama"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="address"
            label="Alamat"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="gender"
            label="Jenis Kelamin"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="class"
            label="Kelas"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Tambah
          </Button>
        </DialogActions>
      </Dialog>

      {/* Popup Edit Dialog */}
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="form-dialog-edit-title"
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#fff',
            padding: 2,
            minWidth: '400px',
            maxWidth: '600px',
          },
          backdropFilter: 'blur(3px)',
        }}
      >
        <DialogTitle id="form-dialog-edit-title">Edit Data Siswa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="edit-nisn"
            label="NISN"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            defaultValue="1234567890"
          />
          <TextField
            margin="dense"
            id="edit-name"
            label="Nama"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            defaultValue="John Doe"
          />
          <TextField
            margin="dense"
            id="edit-address"
            label="Alamat"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            defaultValue="Jl. Merdeka 123"
          />
          <TextField
            margin="dense"
            id="edit-gender"
            label="Jenis Kelamin"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            defaultValue="Laki-laki"
          />
          <TextField
            margin="dense"
            id="edit-class"
            label="Kelas"
            type="text"
            fullWidth
            variant="outlined"
            defaultValue="10A"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseEdit} color="primary">
            Simpan
          </Button>
        </DialogActions>
      </Dialog>

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
                  onClick={handleClickOpenEdit} // Buka pop-up edit
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

