import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemButton,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  Tv as TvIcon,
  Campaign as CampaignIcon,
  Analytics as AnalyticsIcon,
  Info as InfoIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Screens Management', icon: <TvIcon />, path: '/screens' },
    { text: 'Campaigns', icon: <CampaignIcon />, path: '/campaigns' },
    { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
    { text: 'About QSignage', icon: <InfoIcon />, path: '/about' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const drawerContent = (
    <Box className="w-64 h-full bg-white text-gray-900">
      {/* Header */}
      <Box className="flex items-center justify-between p-4 border-b border-gray-200">
        <Box className="flex items-center">
          <DashboardIcon className="text-blue-600 mr-2" />
          <span className="text-lg font-bold text-gray-800">QSignage</span>
        </Box>
        {isMobile && (
          <IconButton onClick={onClose} size="small" sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      {/* Navigation Menu */}
      <List className="pt-2" role="menu" aria-label="Sidebar navigation">
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding role="none">
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
              role="menuitem"
              aria-current={location.pathname === item.path ? 'page' : undefined}
              className={`hover:bg-blue-50 ${
                location.pathname === item.path 
                  ? 'bg-blue-100' 
                  : ''
              }`}
            >
              <ListItemIcon className={`${
                location.pathname === item.path 
                  ? 'text-blue-600' 
                  : 'text-gray-600'
              }`}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                className={`${
                  location.pathname === item.path 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700'
                }`}
                sx={{ color: 'text.primary' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box className="hidden md:block">
          {drawerContent}
        </Box>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={open}
          onClose={onClose}
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: 256,
              boxSizing: 'border-box',
              backgroundColor: '#ffffff',
              color: '#111827',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
