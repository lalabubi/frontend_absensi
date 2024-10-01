import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard from './StatCard';
import TableSiswa from './TableSiswa';

const today = new Date()
const month = today.getMonth() + 1
const year = today.getFullYear()

const daysInMonth = new Date(year, month, 0).getDate()
const daysInMonthString = daysInMonth.toString()
// console.log(daysInMonth)

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid container spacing={2} columns={6}>
        <TableSiswa/>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
