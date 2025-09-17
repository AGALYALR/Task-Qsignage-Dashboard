import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Divider
} from '@mui/material';
import {
  Business as BusinessIcon,
  Lightbulb as LightbulbIcon,
  TrendingUp as TrendingUpIcon,
  Support as SupportIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

const AboutQSignage = () => {
  const features = [
    "Smart Digital Advertisement Boards",
    "Central Web Dashboard Management",
    "Campaign Scheduling & Deployment",
    "Real-time Monitoring & Analytics",
    "ROI Tracking & Performance Metrics",
    "AI-driven Gesture Recognition",
    "Remote Content Management",
    "Multi-location Support"
  ];

  const stats = [
    { label: "Global Screens", value: "500+", icon: <BusinessIcon /> },
    { label: "Active Campaigns", value: "1,200+", icon: <TrendingUpIcon /> },
    { label: "Countries", value: "25+", icon: <LocationIcon /> },
    { label: "Uptime", value: "99.9%", icon: <CheckIcon /> }
  ];

  const contactInfo = [
    { icon: <EmailIcon />, label: "Email", value: "contact@qsignage.com" },
    { icon: <PhoneIcon />, label: "Phone", value: "+91 98260 89277" },
    { icon: <LocationIcon />, label: "Address", value: "123 Tech Street, Digital City, DC 12345" }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <Box className="relative h-96 rounded-xl overflow-hidden">
        <img
          src="/media/dashboard-overview.svg"
          alt="QSignage Technology"
          className="w-full h-full object-cover"
          width="1200"
          height="400"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <Box className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <Box className="text-center text-white">
            <Typography variant="h2" className="font-bold mb-4">
              QSignage
            </Typography>
            <Typography variant="h5" className="font-light">
              Revolutionizing Digital Advertising
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Company Description */}
      <Paper className="bg-white shadow-sm p-8">
        <Typography variant="h4" className="font-bold mb-6 text-gray-800" sx={{ color: 'text.primary' }}>
          About QSignage
        </Typography>
        <Typography variant="body1" className="text-gray-600 leading-relaxed mb-6">
        <b>About QSignage</b>
        <br/>
        We bring brands closer to Bharat.
        <br/>
        <br/>
        QSignage is a digital-outdoor (DOOH) platform built for rural and small-town India. We help brands plan, deploy, and 
        measure hyper-local campaigns across villages, blocks, and districts—turning underserved locations into high-impact media.
        <br/>
        <br/>
        <b>What We Do?</b>
        <br/>
        </Typography>
        <Typography variant="body1" className="text-gray-600 leading-relaxed">
  
Plan & target – Choose locations down to the panchayat/block level, define audiences, and set goals.
<br/>
Manage content – Upload images/videos, auto-tag media, and build reusable playlists.

Schedule campaigns – Set start/end dates, day-parting, and frequency rules per screen or region.
<br/>
Deploy at scale – Push content to thousands of smart boards with a single click.
<br/>
Monitor & optimize – Track uptime, delivery, and impressions; get alerts and performance insights.
        </Typography>
      </Paper>

      {/* Mission Statement */}
      <Paper className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
        <Box className="flex items-center mb-4">
          <LightbulbIcon className="text-3xl mr-3" />
          <Typography variant="h5" className="font-bold text-white">
            Our Mission
          </Typography>
        </Box>
        <Typography variant="body1" className="text-blue-100 leading-relaxed">
        Make rural advertising as precise, measurable, and effortless as digital marketing—so every brand can reach real people in real places, with zero guesswork.
        </Typography>
      </Paper>

      {/* Key Features */}
      <Paper className="bg-white shadow-sm p-8">
                   <Typography variant="h5" className="font-bold mb-6 text-gray-800" sx={{ color: 'text.primary' }}>
            Key Features & Capabilities
          </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="flex items-start space-x-3">
                <CheckIcon className="text-green-600 mt-1 flex-shrink-0" />
                <Typography variant="body1" className="text-gray-700" sx={{ color: 'text.primary' }}>
                  {feature}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Statistics */}
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="text-center">
                <Box className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </Box>
                <Typography variant="h4" className="font-bold mb-2 text-gray-900" sx={{ color: 'text.primary' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" className="text-gray-600" sx={{ color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Section */}
      <Paper className="bg-white shadow-sm p-8">
        <Box className="text-center mb-8">
          <Typography variant="h5" className="font-bold mb-4 text-gray-800" sx={{ color: 'text.primary' }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" className="text-gray-600 mb-6">
            Ready to transform your advertising strategy? Contact our team to learn more about 
            how QSignage can help your business grow.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<SupportIcon />}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
          >
            Contact Us
          </Button>
        </Box>

        <Divider className="my-6" />

        <Grid container spacing={4}>
          {contactInfo.map((contact, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box className="flex items-center space-x-3">
                <Box className="text-blue-600">
                  {contact.icon}
                </Box>
                <Box>
              <Typography variant="subtitle2" className="font-medium text-gray-900" sx={{ color: 'text.primary' }}>
                    {contact.label}
                  </Typography>
              <Typography variant="body2" className="text-gray-600" sx={{ color: 'text.secondary' }}>
                    {contact.value}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      
    </div>
  );
};

export default AboutQSignage;
