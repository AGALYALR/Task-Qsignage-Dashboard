import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Dashboard as DashboardIcon
} from '@mui/icons-material';

const Navbar = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary'
      }}
    >
      <Toolbar role="navigation" aria-label="Primary">
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Box className="flex items-center flex-1">
          <DashboardIcon className="text-blue-600 mr-2" />
          <Typography 
            variant="h6" 
            component="div" 
            className="font-bold text-gray-800"
            sx={{ flexGrow: 1, color: 'text.primary' }}
          >
            QSignage
          </Typography>
        </Box>

        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
