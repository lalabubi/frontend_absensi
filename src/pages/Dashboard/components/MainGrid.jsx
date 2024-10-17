import * as React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "../internals/components/Copyright";
import StatCard from "./StatCard";
import TableSiswa from "./TableSiswa";
import { useEffect, useState } from "react";
import client from "../../../routes/Client";

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const daysInMonth = new Date(year, month, 0).getDate();

export default function MainGrid() {
  // State untuk data presensi
  const [telatData, setTelatData] = useState(0);
  const [hadirData, setHadirData] = useState(0);

  useEffect(() => {
    // Fetch data telat
    client.get("presensi/telat").then(({ data }) => {
      setTelatData(data.data.length); // Tetapkan jumlah data telat
      console.log(data.data.length);
    });

    // Fetch data hadir
    client.get("presensi/hadir").then(({ data }) => {
      setHadirData(data.data.length); // Tetapkan jumlah data hadir
    });
  }, []);

  // Card data yang di-update menggunakan data dari API
  const cardData = [
    {
      title: "Hadir",
      value: hadirData, // Jumlah hadir dari data API
      interval: `Last ${daysInMonth} days`,
      trend: "up",
      data: [], // Bisa diisi jika dibutuhkan
    },
    // {
    //   title: "Izin",
    //   value: "2", // Bisa di-update dengan data dari API jika diperlukan
    //   interval: `Last ${daysInMonth} days`,
    //   trend: "down",
    //   data: [], // Kosong atau bisa diisi sesuai kebutuhan
    // },
    // {
    //   title: "Alpha",
    //   value: "3", // Bisa di-update dengan data dari API jika diperlukan
    //   interval: `Last ${daysInMonth} days`,
    //   trend: "neutral",
    //   data: [], // Kosong atau bisa diisi sesuai kebutuhan
    // },
    {
      title: "Telat",
      value: telatData, // Jumlah telat dari data API
      interval: `Last ${daysInMonth} days`,
      trend: "neutral",
      data: [], // Bisa diisi jika dibutuhkan
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {cardData.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={6}>
        <TableSiswa />
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
