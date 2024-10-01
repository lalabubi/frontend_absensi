import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from '../pages/Dashboard/components/SelectContent';
// import MenuContent from '../pages/Dashboard/components/MenuContent';
import CardAlert from '../pages/Dashboard/components/CardAlert';
import OptionsMenu from '../pages/Dashboard/components/OptionsMenu';
import LogoSideMenu from '../pages/Dashboard/components/LogoSideMenu';
import { Navigate, Outlet } from 'react-router-dom';
import client from '../routes/Client';
import MenuContent from '../pages/SiswaDashboard/components/MenuContent';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#ffc6d0', // Warna latar belakang sidebar
  },
}));

export default function SiswaGuarded() {
  if(localStorage.getItem('token') == null) {
    return <Navigate to={'/'}/>
  }else if(localStorage.getItem('role') === 'guru') {
    return <Navigate to={'/'}/>
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          [`& .${drawerClasses.paper}`]: {
            backgroundColor: '#ffc0cb', // Warna latar belakang sidebar, misalnya abu-abu muda
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mt: '60px',
            p: 1.5,
          }}
        >
          <LogoSideMenu />
        </Box>
        <Divider sx={{ borderColor: '#fff' }} /> {/* Warna divider */}
        <MenuContent />
        <Stack
          direction="row"
          sx={{
            p: 2,
            gap: 1,
            alignItems: 'center',
            borderTop: '1px solid',
            borderColor: 'white',
          }}
        >
          <Avatar
            sizes="small"
            alt={localStorage.getItem('name')}
            src="/static/images/avatar/7.jpg"
            sx={{ width: 36, height: 36, backgroundColor: '#e5acd2' }} // Warna latar belakang avatar jika perlu
          />
          <Box sx={{ mr: 'auto' }}>
            <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px', color:'#fff'}}>
              {localStorage.getItem('name')}
            </Typography>
            <Typography variant="caption" sx={{ color: '#fff' }}>
              {localStorage.getItem('email')}
            </Typography>
          </Box>
          <OptionsMenu />
        </Stack>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 5
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
