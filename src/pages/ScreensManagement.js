import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import {
  Search as SearchIcon,
  Refresh as RefreshIcon,
  SignalCellular4Bar as SignalIcon,
  SignalCellular0Bar as NoSignalIcon
} from '@mui/icons-material';
import { screensData, healthStatuses } from '../data/mockData';

const ScreensManagement = () => {
  const [screens, setScreens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredScreens, setFilteredScreens] = useState([]);

  // Initialize screens data
  useEffect(() => {
    setScreens(screensData);
    setFilteredScreens(screensData);
  }, []);

  // Filter screens based on search term
  useEffect(() => {
    const filtered = screens.filter(screen =>
      screen.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      screen.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredScreens(filtered);
  }, [searchTerm, screens]);

  // Refresh screens data (simulate real-time updates)
  const handleRefresh = () => {
    const updatedScreens = screensData.map(screen => ({
      ...screen,
      status: Math.random() > 0.3 ? "Online" : "Offline",
      health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
      lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    }));
    setScreens(updatedScreens);
  };

  // Get status indicator
  const getStatusIndicator = (status) => {
    return (
      <Box className="flex items-center">
        <Box
          className={`w-3 h-3 rounded-full mr-2 ${
            status === "Online" ? "status-online" : "status-offline"
          }`}
        />
        <span className={`text-sm font-medium ${
          status === "Online" ? "text-green-600" : "text-red-600"
        }`}>
          {status}
        </span>
      </Box>
    );
  };

  // Get health indicator
  const getHealthIndicator = (health) => {
    const status = healthStatuses[health];
    return (
      <Chip
        label={health}
        size="small"
        sx={{
          backgroundColor: status.bgColor,
          color: status.color,
          fontWeight: 'medium',
          fontSize: '0.75rem'
        }}
      />
    );
  };

  // Calculate statistics
  const onlineScreens = screens.filter(screen => screen.status === "Online").length;
  const totalScreens = screens.length;
  const goodHealthScreens = screens.filter(screen => screen.health === "Good").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <Box className="flex flex-col md:flex-row md:items-center md:justify-between">
        <Typography variant="h4" className="font-bold mb-4 md:mb-0 text-gray-800" sx={{ color: 'text.primary' }}>
          Screens Management
        </Typography>
        <Box className="flex items-center space-x-2">
          <TextField
            size="small"
            placeholder="Search screens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon className="text-gray-400 mr-2" />,
            }}
            className="w-full md:w-64"
          />
          <Tooltip title="Refresh data">
            <IconButton onClick={handleRefresh} className="bg-blue-50 hover:bg-blue-100">
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} className="mb-6">
        <Grid item xs={12} sm={6} md={3}>
          <Card className="bg-white shadow-sm">
            <CardContent>
              <Box className="flex items-center justify-between">
                <Box>
                  <Typography color="textSecondary" className="text-sm font-medium text-gray-600" sx={{ color: 'text.secondary' }}>
                    Total Screens
                  </Typography>
                  <Typography variant="h4" className="font-bold text-gray-900" sx={{ color: 'text.primary' }}>
                    {totalScreens}
                  </Typography>
                </Box>
                <SignalIcon className="text-blue-600 text-3xl" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="bg-white shadow-sm">
            <CardContent>
              <Box className="flex items-center justify-between">
                <Box>
                  <Typography color="textSecondary" className="text-sm font-medium text-gray-600" sx={{ color: 'text.secondary' }}>
                    Online Screens
                  </Typography>
                  <Typography variant="h4" className="font-bold text-green-600">
                    {onlineScreens}
                  </Typography>
                </Box>
                <Box className="w-3 h-3 rounded-full status-online" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="bg-white shadow-sm">
            <CardContent>
              <Box className="flex items-center justify-between">
                <Box>
                  <Typography color="textSecondary" className="text-sm font-medium text-gray-600" sx={{ color: 'text.secondary' }}>
                    Offline Screens
                  </Typography>
                  <Typography variant="h4" className="font-bold text-red-600">
                    {totalScreens - onlineScreens}
                  </Typography>
                </Box>
                <NoSignalIcon className="text-red-600 text-3xl" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="bg-white shadow-sm">
            <CardContent>
              <Box className="flex items-center justify-between">
                <Box>
                  <Typography color="textSecondary" className="text-sm font-medium text-gray-600" sx={{ color: 'text.secondary' }}>
                    Good Health
                  </Typography>
                  <Typography variant="h4" className="font-bold text-green-600">
                    {goodHealthScreens}
                  </Typography>
                </Box>
                <Box className="w-3 h-3 rounded-full status-good" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Screens Table */}
      <Paper className="bg-white shadow-sm">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="bg-gray-50">
                <TableCell className="font-semibold text-gray-800">Screen ID</TableCell>
                <TableCell className="font-semibold text-gray-800">Location</TableCell>
                <TableCell className="font-semibold text-gray-800">Status</TableCell>
                <TableCell className="font-semibold text-gray-800">Health</TableCell>
                <TableCell className="font-semibold text-gray-800">Last Seen</TableCell>
                <TableCell className="font-semibold text-gray-800">Resolution</TableCell>
                <TableCell className="font-semibold text-gray-800">Brightness</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredScreens.map((screen) => (
                  <TableRow 
                    key={screen.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                  <TableCell className="font-medium text-blue-600">
                    {screen.id}
                  </TableCell>
                  <TableCell>{screen.location}</TableCell>
                  <TableCell>
                    {getStatusIndicator(screen.status)}
                  </TableCell>
                  <TableCell>
                    {getHealthIndicator(screen.health)}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {new Date(screen.lastSeen).toLocaleString()}
                  </TableCell>
                  <TableCell className="text-sm">{screen.resolution}</TableCell>
                  <TableCell className="text-sm">{screen.brightness}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* No results message */}
      {filteredScreens.length === 0 && (
        <Box className="text-center py-8">
          <Typography variant="h6" className="text-gray-500" sx={{ color: 'text.secondary' }}>
            No screens found matching your search criteria
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default ScreensManagement;
