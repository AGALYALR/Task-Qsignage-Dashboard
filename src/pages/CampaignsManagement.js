import React, { useState } from 'react';
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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  List,
  ListItem,
  
} from '@mui/material';
import {
  Add as AddIcon,
  CloudUpload as UploadIcon,
  Image as ImageIcon,
  VideoLibrary as VideoIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { sampleMedia, screensData, campaignStatuses } from '../data/mockData';

const CampaignsManagement = () => {
  const [campaigns, setCampaigns] = useState([]);
  const FALLBACK_SVG = "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>\
<rect fill='%23e5e7eb' width='100%' height='100%'/>\
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%236b7280'>Image unavailable</text>\
</svg>";
  const [mediaFiles, setMediaFiles] = useState(sampleMedia);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [selectedScreens, setSelectedScreens] = useState([]);
  const [campaignForm, setCampaignForm] = useState({
    name: '',
    startDate: null,
    endDate: null,
    status: 'Draft'
  });

  // Handle form input changes
  const handleFormChange = (field, value) => {
    setCampaignForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle media selection
  const handleMediaSelection = (mediaId) => {
    setSelectedMedia(prev => 
      prev.includes(mediaId) 
        ? prev.filter(id => id !== mediaId)
        : [...prev, mediaId]
    );
  };

  // Handle screen selection
  const handleScreenSelection = (screenId) => {
    setSelectedScreens(prev => 
      prev.includes(screenId) 
        ? prev.filter(id => id !== screenId)
        : [...prev, screenId]
    );
  };

  // Handle file upload (simulated)
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newMedia = files.map((file, index) => ({
      id: `uploaded-${Date.now()}-${index}`,
      name: file.name,
      type: file.type.startsWith('video/') ? 'video' : 'image',
      url: URL.createObjectURL(file),
      duration: file.type.startsWith('video/') ? '30s' : 'Static',
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
    }));
    setMediaFiles(prev => [...prev, ...newMedia]);
  };

  // Create new campaign
  const handleCreateCampaign = () => {
    if (!campaignForm.name || selectedMedia.length === 0 || selectedScreens.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    const newCampaign = {
      id: `CAMPAIGN-${Date.now()}`,
      ...campaignForm,
      media: selectedMedia,
      screens: selectedScreens,
      createdAt: new Date().toISOString(),
      impressions: 0,
      engagement: 0
    };

    setCampaigns(prev => [...prev, newCampaign]);
    setOpenDialog(false);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setCampaignForm({
      name: '',
      startDate: null,
      endDate: null,
      status: 'Draft'
    });
    setSelectedMedia([]);
    setSelectedScreens([]);
  };

  // Get media preview
  const getMediaPreview = (media) => {
    return (
      <Box className="flex items-center space-x-2">
        {media.type === 'video' ? (
          <VideoIcon className="text-blue-600" />
        ) : (
          <ImageIcon className="text-green-600" />
        )}
        <span className="text-sm">{media.name}</span>
      </Box>
    );
  };

  // Get status chip
  const getStatusChip = (status) => {
    const colors = {
      Active: { bg: '#d1fae5', color: '#10b981' },
      Scheduled: { bg: '#dbeafe', color: '#3b82f6' },
      Paused: { bg: '#fef3c7', color: '#f59e0b' },
      Completed: { bg: '#e0e7ff', color: '#6366f1' },
      Draft: { bg: '#f3f4f6', color: '#6b7280' }
    };

    return (
      <Chip
        label={status}
        size="small"
        sx={{
          backgroundColor: colors[status]?.bg || colors.Draft.bg,
          color: colors[status]?.color || colors.Draft.color,
          fontWeight: 'medium'
        }}
      />
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Box className="flex flex-col md:flex-row md:items-center md:justify-between">
        <Typography variant="h4" className="font-bold mb-4 md:mb-0 text-gray-800" sx={{ color: 'text.primary' }}>
          Campaigns Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Create Campaign
        </Button>
      </Box>

      {/* Media Library */}
      <Paper className="bg-white shadow-sm p-6">
        <Typography variant="h6" className="font-semibold mb-4 text-gray-800" sx={{ color: 'text.primary' }}>
          Media Library
        </Typography>
        
        {/* Upload Section */}
        <Box className="mb-6">
          <input
            accept="image/*,video/*"
            style={{ display: 'none' }}
            id="media-upload"
            multiple
            type="file"
            onChange={handleFileUpload}
          />
          <label htmlFor="media-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<UploadIcon />}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Upload Media
            </Button>
          </label>
        </Box>

        {/* Media Grid */}
        <Grid container spacing={3}>
          {mediaFiles.map((media) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={media.id}>
              <Card className="hover:shadow-md transition-shadow">
                <CardMedia
                  component="img"
                  height="140"
                  image={media.url}
                  src={media.url}
                  alt={media.name}
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_SVG;
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle2" className="font-medium mb-1 text-gray-900" sx={{ color: 'text.primary' }}>
                    {media.name}
                  </Typography>
                  <Box className="flex items-center justify-between text-sm text-gray-600">
                    <span>{media.type}</span>
                    <span>{media.size}</span>
                  </Box>
                  <Box className="flex items-center justify-between mt-2">
                    <Chip
                      label={media.duration}
                      size="small"
                      variant="outlined"
                    />
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Campaigns Table */}
      <Paper className="bg-white shadow-sm">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="bg-gray-50">
                <TableCell className="font-semibold text-gray-800">Campaign Name</TableCell>
                <TableCell className="font-semibold text-gray-800">Media</TableCell>
                <TableCell className="font-semibold text-gray-800">Screens</TableCell>
                <TableCell className="font-semibold text-gray-800">Status</TableCell>
                <TableCell className="font-semibold text-gray-800">Start Date</TableCell>
                <TableCell className="font-semibold text-gray-800">End Date</TableCell>
                <TableCell className="font-semibold text-gray-800">Impressions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow 
                  key={campaign.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="font-medium text-blue-600">
                    {campaign.name}
                  </TableCell>
                  <TableCell>
                    <Box className="flex flex-wrap gap-1">
                      {campaign.media.map(mediaId => {
                        const media = mediaFiles.find(m => m.id === mediaId);
                        return media ? (
                          <Chip
                            key={mediaId}
                            label={media.name}
                            size="small"
                            variant="outlined"
                          />
                        ) : null;
                      })}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className="flex flex-wrap gap-1">
                      {campaign.screens.map(screenId => {
                        const screen = screensData.find(s => s.id === screenId);
                        return screen ? (
                          <Chip
                            key={screenId}
                            label={screen.location}
                            size="small"
                            variant="outlined"
                          />
                        ) : null;
                      })}
                    </Box>
                  </TableCell>
                  <TableCell>
                    {getStatusChip(campaign.status)}
                  </TableCell>
                  <TableCell className="text-sm">
                    {campaign.startDate ? new Date(campaign.startDate).toLocaleDateString() : '-'}
                  </TableCell>
                  <TableCell className="text-sm">
                    {campaign.endDate ? new Date(campaign.endDate).toLocaleDateString() : '-'}
                  </TableCell>
                  <TableCell className="text-sm">
                    {campaign.impressions.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* No campaigns message */}
      {campaigns.length === 0 && (
        <Box className="text-center py-8">
          <Typography variant="h6" className="text-gray-500" sx={{ color: 'text.secondary' }}>
            No campaigns created yet. Create your first campaign to get started!
          </Typography>
        </Box>
      )}

      {/* Create Campaign Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Create New Campaign</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} className="mt-2">
            {/* Campaign Details */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Campaign Name"
                value={campaignForm.name}
                onChange={(e) => handleFormChange('name', e.target.value)}
                required
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <DatePicker
                label="Start Date"
                value={campaignForm.startDate}
                onChange={(date) => handleFormChange('startDate', date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <DatePicker
                label="End Date"
                value={campaignForm.endDate}
                onChange={(date) => handleFormChange('endDate', date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={campaignForm.status}
                  onChange={(e) => handleFormChange('status', e.target.value)}
                  label="Status"
                >
                  {campaignStatuses.map(status => (
                    <MenuItem key={status} value={status}>{status}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Media Selection */}
            <Grid item xs={12}>
              <Typography variant="h6" className="mb-3 text-gray-800" sx={{ color: 'text.primary' }}>Select Media</Typography>
              <List className="max-h-40 overflow-y-auto border border-gray-200 rounded">
                {mediaFiles.map((media) => (
                  <ListItem key={media.id} dense>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedMedia.includes(media.id)}
                          onChange={() => handleMediaSelection(media.id)}
                        />
                      }
                      label={getMediaPreview(media)}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Screen Selection */}
            <Grid item xs={12}>
              <Typography variant="h6" className="mb-3 text-gray-800" sx={{ color: 'text.primary' }}>Select Target Screens</Typography>
              <List className="max-h-40 overflow-y-auto border border-gray-200 rounded">
                {screensData.map((screen) => (
                  <ListItem key={screen.id} dense>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedScreens.includes(screen.id)}
                          onChange={() => handleScreenSelection(screen.id)}
                        />
                      }
                      label={`${screen.id} - ${screen.location}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button 
            onClick={handleCreateCampaign}
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Create Campaign
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CampaignsManagement;
