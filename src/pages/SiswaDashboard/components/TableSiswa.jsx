import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import client from "../../../routes/Client";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFC0CB",
    color: "#fff",
    textAlign: "center", // Text aligned to the center in header
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center", // Text aligned to the center in body
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

export default function TableSiswa() {
  const [presensi, setPresensi] = useState([]);

  useEffect(() => {
    client
      .get("presensi/minggu")
      .then(({ data }) => {
        console.log(data);
        setPresensi(data);
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
        Rekap Dalam Seminggu
      </h2>

      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>NISN</StyledTableCell>
              <StyledTableCell>Tanggal</StyledTableCell>
              <StyledTableCell>Waktu Datang</StyledTableCell>
              <StyledTableCell>Waktu Pulang</StyledTableCell>
              <StyledTableCell>Keterangan</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {presensi.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {item.siswa.nisn}
                </StyledTableCell>
                <StyledTableCell>{item.tanggal}</StyledTableCell>
                <StyledTableCell>
                  {formatTime(item.waktu_datang)}
                </StyledTableCell>
                <StyledTableCell>
                  {formatTime(item.waktu_pulang)}
                </StyledTableCell>
                <StyledTableCell>{item.keterangan}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
