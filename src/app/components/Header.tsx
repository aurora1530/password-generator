'use client';

import { AppBar, Box, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="p-2">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PASSWORD GENERATOR
          </Typography>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
