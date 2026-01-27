import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@inertiajs/react';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Scola
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit" component={Link} href="/">Home</Button>
          <Button color="inherit" component={Link} href="/students">Students</Button>
          <Button color="inherit" component={Link} href="/attendance">Attendance</Button>
          <Button color="inherit" component={Link} href="/grades">Grade</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;