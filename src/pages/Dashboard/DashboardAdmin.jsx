import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import TemplateFrame from './TemplateFrame';

export default function DashboardAdmin() {

  return (
    <TemplateFrame
    >
        <Box sx={{ display: 'flex' }}>
          <AppNavbar />
          {/* Main content */}
          <Box
            component="main"
            sx={(theme) => ({
              flexGrow: 1,
              backgroundColor: alpha(theme.palette.background.default, 1),
              overflow: 'auto',
            })}
          >
            <Stack
              spacing={2}
              sx={{
                alignItems: 'center',
                mx: 3,
                pb: 10,
                mt: { xs: 8, md: 0 },
              }}
            >
              <Header />
              <MainGrid />
            </Stack>
          </Box>
        </Box>
      {/* </ThemeProvider> */}
    </TemplateFrame>
  );
}