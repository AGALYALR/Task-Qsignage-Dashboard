import React, { Suspense } from 'react';
import LazyInView from '../components/LazyInView';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Visibility as VisibilityIcon,
  Campaign as CampaignIcon,
  AttachMoney as MoneyIcon,
  SignalCellular4Bar as SignalIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { analyticsData } from '../data/mockData';
const Bar = React.lazy(() => import('react-chartjs-2').then(m => ({ default: m.Bar })));
const Pie = React.lazy(() => import('react-chartjs-2').then(m => ({ default: m.Pie })));

// Register Chart.js components at module scope so charts can render immediately
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AnalyticsDashboard = () => {
  // Chart options
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Performance',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Media Type Distribution',
      },
    },
  };

  // Chart data
  const barChartData = {
    labels: analyticsData.performanceData.map(item => item.month),
    datasets: [
      {
        label: 'Impressions',
        data: analyticsData.performanceData.map(item => item.impressions),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
      {
        label: 'Revenue ($)',
        data: analyticsData.performanceData.map(item => item.revenue),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: analyticsData.mediaTypeDistribution.map(item => item.type),
    datasets: [
      {
        data: analyticsData.mediaTypeDistribution.map(item => item.percentage),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // KPI Cards
  const kpiCards = [
    {
      title: 'Uptime %',
      value: `${analyticsData.uptime}%`,
      icon: <SignalIcon className="text-blue-600" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Campaigns Delivered',
      value: analyticsData.campaignsDelivered.toLocaleString(),
      icon: <CampaignIcon className="text-green-600" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Impressions',
      value: analyticsData.totalImpressions.toLocaleString(),
      icon: <VisibilityIcon className="text-purple-600" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Revenue',
      value: `$${analyticsData.revenue.toLocaleString()}`,
      icon: <MoneyIcon className="text-orange-600" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Box className="flex items-center space-x-3">
        <AnalyticsIcon className="text-blue-600 text-3xl" />
        <Typography variant="h4" className="font-bold text-gray-800" sx={{ color: 'text.primary' }}>
          Analytics Dashboard
        </Typography>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={3}>
        {kpiCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent>
                <Box className="flex items-center justify-between">
                  <Box>
                    <Typography color="textSecondary" className="text-sm font-medium text-gray-600" sx={{ color: 'text.secondary' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="h4" className={`font-bold ${card.color}`}>
                      {card.value}
                    </Typography>
                  </Box>
                  <Box className={`p-3 rounded-full ${card.bgColor}`}>
                    {card.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} lg={8}>
          <Paper className="bg-white shadow-sm p-6">
            <LazyInView className="h-80">
              <Suspense fallback={<div role="status" aria-live="polite">Loading chart…</div>}>
                <Bar options={barChartOptions} data={barChartData} />
              </Suspense>
            </LazyInView>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} lg={4}>
          <Paper className="bg-white shadow-sm p-6">
            <LazyInView className="h-80">
              <Suspense fallback={<div role="status" aria-live="polite">Loading chart…</div>}>
                <Pie options={pieChartOptions} data={pieChartData} />
              </Suspense>
            </LazyInView>
          </Paper>
        </Grid>
      </Grid>

      {/* Additional Metrics */}
      <Grid container spacing={3}>
        {/* Top Campaigns */}
        <Grid item xs={12} lg={6}>
          <Paper className="bg-white shadow-sm">
            <Box className="p-6">
              <Typography variant="h6" className="font-semibold mb-4 text-gray-800" sx={{ color: 'text.primary' }}>
                Top Performing Campaigns
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow className="bg-gray-50">
                      <TableCell className="font-semibold text-gray-800">Campaign</TableCell>
                      <TableCell className="font-semibold text-gray-800">Impressions</TableCell>
                      <TableCell className="font-semibold text-gray-800">Engagement %</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analyticsData.topCampaigns.map((campaign, index) => (
                      <TableRow 
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <TableCell className="font-medium">
                          {campaign.name}
                        </TableCell>
                        <TableCell>
                          {campaign.impressions.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={`${campaign.engagement}%`}
                            size="small"
                            sx={{
                              backgroundColor: campaign.engagement > 10 ? '#d1fae5' : '#fef3c7',
                              color: campaign.engagement > 10 ? '#10b981' : '#f59e0b',
                              fontWeight: 'medium'
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Grid>

        {/* System Status */}
        <Grid item xs={12} lg={6}>
          <Paper className="bg-white shadow-sm">
            <Box className="p-6">
              <Typography variant="h6" className="font-semibold mb-4 text-gray-800" sx={{ color: 'text.primary' }}>
                System Status
              </Typography>
              <Box className="space-y-4">
                <Box className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <Box className="flex items-center space-x-3">
                    <Box className="w-3 h-3 rounded-full status-online" />
                    <Typography className="text-gray-900" sx={{ color: 'text.primary' }}>Active Screens</Typography>
                  </Box>
                  <Typography className="font-semibold text-gray-900" sx={{ color: 'text.primary' }}>
                    {analyticsData.activeScreens} / {analyticsData.totalScreens}
                  </Typography>
                </Box>
                
                <Box className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <Box className="flex items-center space-x-3">
                    <TrendingUpIcon className="text-green-600" />
                    <Typography className="text-gray-900" sx={{ color: 'text.primary' }}>Performance Trend</Typography>
                  </Box>
                  <Typography className="font-semibold text-green-600">
                    +12.5%
                  </Typography>
                </Box>

                <Box className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <Box className="flex items-center space-x-3">
                    <VisibilityIcon className="text-blue-600" />
                    <Typography className="text-gray-900" sx={{ color: 'text.primary' }}>Avg. Daily Impressions</Typography>
                  </Box>
                    <Typography className="font-semibold text-gray-900" sx={{ color: 'text.primary' }}>
                    {(analyticsData.totalImpressions / 30).toLocaleString()}
                  </Typography>
                </Box>

                <Box className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <Box className="flex items-center space-x-3">
                    <MoneyIcon className="text-orange-600" />
                    <Typography className="text-gray-900" sx={{ color: 'text.primary' }}>Monthly Revenue</Typography>
                  </Box>
                  <Typography className="font-semibold text-gray-900" sx={{ color: 'text.primary' }}>
                    ${(analyticsData.revenue / 6).toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <Paper className="bg-white shadow-sm p-6">
        <Typography variant="h6" className="font-semibold mb-4 text-gray-800" sx={{ color: 'text.primary' }}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <Typography variant="subtitle2" className="font-medium mb-1 text-gray-900" sx={{ color: 'text.primary' }}>
                Generate Report
              </Typography>
              <Typography variant="body2" className="text-gray-600" sx={{ color: 'text.secondary' }}>
                Export analytics data
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <Typography variant="subtitle2" className="font-medium mb-1 text-gray-900" sx={{ color: 'text.primary' }}>
                Schedule Campaign
              </Typography>
              <Typography variant="body2" className="text-gray-600" sx={{ color: 'text.secondary' }}>
                Create new campaign
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <Typography variant="subtitle2" className="font-medium mb-1 text-gray-900" sx={{ color: 'text.primary' }}>
                Monitor Screens
              </Typography>
              <Typography variant="body2" className="text-gray-600" sx={{ color: 'text.secondary' }}>
                Check screen status
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <Typography variant="subtitle2" className="font-medium mb-1 text-gray-900" sx={{ color: 'text.primary' }}>
                View Alerts
              </Typography>
              <Typography variant="body2" className="text-gray-600" sx={{ color: 'text.secondary' }}>
                System notifications
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AnalyticsDashboard;
