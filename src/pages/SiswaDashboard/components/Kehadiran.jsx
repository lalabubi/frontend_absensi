import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import client from "../../../routes/Client";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffc0cb",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "8px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Kehadiran() {
  const [presensi, setPresensi] = useState([]);
  useEffect(() => {
    client
      .get("presensi/bulan")
      .then(({ data }) => {
        setPresensi(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Helper function to format the time (extracting only hours and minutes)
  const formatTime = (timeString) => {
    if (!timeString) return "Belum Pulang";
    const date = new Date(timeString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  return (
    <div className="w-[100%]">
      <h2 className="text-center text-2xl font-bold mt-8">
        Rekap Dalam 1 Bulan
      </h2>
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
            {presensi.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row" align="center">
                  {item.tanggal}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formatTime(item.waktu_datang)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formatTime(item.waktu_pulang)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.keterangan}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
